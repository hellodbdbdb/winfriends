/* Win Friends — App Logic
   Same pattern as ExecComms: React via CDN, no build step, localStorage
   ==================================================================== */
const { useState, useEffect, useRef } = React;

/* ── Storage helpers ── */
const K_DATA = "wf_data";
const K_SET  = "wf_set";
const K_AUTH = "wf_auth";
function ld(k, f) { try { const r = localStorage.getItem(k); return r ? JSON.parse(r) : f; } catch { return f; } }
function sv(k, v) { localStorage.setItem(k, JSON.stringify(v)); }

/* ── Date helpers ── */
function today() { return new Date().toISOString().slice(0, 10); }
function dayOfYear(d) { const s = new Date(d); const y = new Date(s.getFullYear(), 0, 0); return Math.floor((s - y) / 86400000); }

/* ── Get today's principle (rotates through all 30) ── */
function todayPrinciple() {
  const idx = dayOfYear(today()) % PRINCIPLES.length;
  return PRINCIPLES[idx];
}

/* ── CSS Design System (injected) — Vibrant dark UI ── */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500&display=swap');
:root {
  --bg: #0A0A0A; --card: #151515; --text: #F0F0F0; --soft: #CDCDCD;
  --muted: #666; --rule: #222; --accent: #F0F0F0;
  --c-p1: #FFCB47; --c-p2: #73D4F2; --c-p3: #FF6BAA; --c-p4: #8BDB5E;
  --c-red: #FF5C5C; --c-red-bg: rgba(255,92,92,0.1);
  --c-green: #8BDB5E; --c-green-bg: rgba(139,219,94,0.1);
  --c-orange: #FF8C42;
  --sans: 'DM Sans', 'Helvetica Neue', sans-serif;
  --body: 'Inter', 'DM Sans', 'Helvetica Neue', sans-serif;
  --mono: 'IBM Plex Mono', 'Menlo', monospace;
  --nav-h: 56px; --fs: 15px;
}
[data-theme="light"] {
  --bg: #F5F5F0; --card: #FFFFFF; --text: #111; --soft: #333;
  --muted: #999; --rule: #DDD; --accent: #111;
  --c-p1: #D4A017; --c-p2: #1A8FB5; --c-p3: #D4447A; --c-p4: #4CAF50;
  --c-red: #D44; --c-red-bg: rgba(204,68,68,0.08);
  --c-green: #4CAF50; --c-green-bg: rgba(76,175,80,0.08);
  --c-orange: #E07020;
}
* { margin:0; padding:0; box-sizing:border-box; }
html, body { min-height:100%; }
body { background:var(--bg); color:var(--text); font-family:var(--mono); font-size:var(--fs); -webkit-font-smoothing:antialiased; }
body.theme-light { background:#F5F5F0; }
body.theme-dark { background:#0A0A0A; }
`;

const PC = { 1: "var(--c-p1)", 2: "var(--c-p2)", 3: "var(--c-p3)", 4: "var(--c-p4)" };

/* ── Render multiline text with paragraph breaks ── */
function Paragraphs({ text, style }) {
  return React.createElement("div", { style }, text.split("\n\n").map((para, i) =>
    React.createElement("p", { key: i, style: { margin: i > 0 ? "12px 0 0" : 0 } }, para)
  ));
}

/* ═══════════════════════════════════════════════════════════════════════════
   SHARED COMPONENTS
   ═══════════════════════════════════════════════════════════════════════════ */
function Rule() { return <div style={{ height: 1, background: "var(--rule)", width: "100%" }} />; }

function PartTag({ part }) {
  const p = PARTS.find(x => x.id === part);
  return <span style={{ fontFamily: "var(--mono)", fontSize: "calc(var(--fs)*0.6)", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: PC[part], borderBottom: `1.5px solid ${PC[part]}`, paddingBottom: 1 }}>Teil {part}</span>;
}

function Num({ n, label, sub }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontFamily: "var(--sans)", fontSize: "calc(var(--fs)*2.2)", fontWeight: 900, lineHeight: 1, color: "var(--text)" }}>{n}</div>
      <div style={{ fontFamily: "var(--mono)", fontSize: "calc(var(--fs)*0.65)", color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 4 }}>{label}</div>
      {sub && <div style={{ fontFamily: "var(--mono)", fontSize: "calc(var(--fs)*0.6)", color: "var(--soft)", marginTop: 2 }}>{sub}</div>}
    </div>
  );
}

function Btn({ children, onClick, primary, disabled, style: sx }) {
  return (
    <button onClick={onClick} disabled={disabled} style={{
      width: "100%", padding: "14px 0", fontFamily: "var(--mono)", fontSize: "calc(var(--fs)*0.75)",
      fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", cursor: disabled ? "default" : "pointer",
      borderRadius: 0, transition: "all 0.15s", opacity: disabled ? 0.4 : 1,
      background: primary ? "var(--c-green)" : "transparent",
      border: primary ? "1px solid var(--c-green)" : "1px solid var(--rule)",
      color: primary ? "#0A0A0A" : "var(--soft)", ...sx,
    }}>{children}</button>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   LOGIN
   ═══════════════════════════════════════════════════════════════════════════ */
function Login({ onIn }) {
  return (
    <div style={{ minHeight: "100dvh", background: "#0A0A0A", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32, fontFamily: "var(--mono)" }}>
      <style>{CSS}</style>
      {/* Decorative dots */}
      <div style={{ position: "absolute", top: 40, left: 30, display: "flex", gap: 6 }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FFCB47" }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF6BAA" }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#73D4F2" }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#8BDB5E" }} />
      </div>
      <div style={{ marginBottom: 48, textAlign: "center" }}>
        <h1 style={{ fontFamily: "var(--sans)", fontSize: 56, fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.95, marginBottom: 8, color: "#F0F0F0" }}>Win<br />Friends</h1>
        <div style={{ width: 48, height: 2, background: "#FFCB47", margin: "20px auto" }} />
        <p style={{ fontFamily: "var(--mono)", fontSize: 11, color: "#555", letterSpacing: "0.1em", textTransform: "uppercase" }}>30 Prinzipien &middot; Dale Carnegie</p>
      </div>
      <button onClick={() => onIn("g")} style={{ width: "100%", maxWidth: 300, padding: "14px 20px", borderRadius: 0, background: "#F0F0F0", border: "none", cursor: "pointer", fontFamily: "var(--mono)", fontSize: 12, fontWeight: 600, color: "#0A0A0A", letterSpacing: "0.04em", marginBottom: 10, display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
        <svg width="16" height="16" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
        MIT GOOGLE ANMELDEN
      </button>
      <button onClick={() => onIn("d")} style={{ width: "100%", maxWidth: 300, padding: "14px 20px", borderRadius: 0, background: "transparent", border: "1px solid #333", cursor: "pointer", fontFamily: "var(--mono)", fontSize: 12, fontWeight: 500, color: "#555", letterSpacing: "0.06em", textTransform: "uppercase" }}>
        Demo — ohne Account
      </button>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   HEUTE TAB — Today's principle + daily challenge + reflection
   ═══════════════════════════════════════════════════════════════════════════ */
function HeuteTab({ data, setData }) {
  const p = todayPrinciple();
  const part = PARTS.find(x => x.id === p.part);
  const key = today();
  const entry = data.daily?.[key] || { done: false, applied: null, reflection: "" };

  function upd(field, val) {
    const n = { ...data, daily: { ...data.daily, [key]: { ...entry, [field]: val } } };
    setData(n); sv(K_DATA, n);
  }

  // Streak calculation
  let streak = 0;
  const d = new Date();
  for (let i = 0; i < 365; i++) {
    const dk = new Date(d); dk.setDate(dk.getDate() - i);
    const k = dk.toISOString().slice(0, 10);
    if (data.daily?.[k]?.done) streak++;
    else if (i > 0) break; // allow today to not be done yet
    else continue;
  }

  // Total days practiced
  const totalDays = Object.values(data.daily || {}).filter(e => e.done).length;
  // Unique principles practiced
  const practiced = new Set();
  Object.entries(data.daily || {}).forEach(([k, v]) => {
    if (v.done) {
      const idx = dayOfYear(k) % PRINCIPLES.length;
      practiced.add(PRINCIPLES[idx].id);
    }
  });

  return (
    <div style={{ padding: "24px 20px 120px" }}>
      {/* Stats strip */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0, borderBottom: "1px solid var(--rule)", marginBottom: 24 }}>
        {[
          { n: streak, l: "Streak" },
          { n: totalDays, l: "Tage" },
          { n: practiced.size + "/30", l: "Geübt" },
        ].map((x, i) => (
          <div key={i} style={{ padding: "16px 0", textAlign: "center", borderRight: i < 2 ? "1px solid var(--rule)" : "none" }}>
            <Num n={x.n} label={x.l} />
          </div>
        ))}
      </div>

      {/* Today's principle */}
      <div style={{ marginBottom: 8 }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: "calc(var(--fs)*0.6)", color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Heutiges Prinzip</div>
        <PartTag part={p.part} />
        <div style={{ fontFamily: "var(--mono)", fontSize: "calc(var(--fs)*0.65)", color: "var(--muted)", marginTop: 8 }}>{part.title} &middot; Prinzip {p.num}</div>
      </div>

      <h1 style={{ fontFamily: "var(--sans)", fontSize: "calc(var(--fs)*1.8)", fontWeight: 900, lineHeight: 1.2, letterSpacing: "-0.02em", margin: "16px 0", color: "var(--text)" }}>
        {p.titleDe}
      </h1>
      <div style={{ fontFamily: "var(--mono)", fontSize: "calc(var(--fs)*0.75)", color: "var(--muted)", fontStyle: "italic", marginBottom: 20 }}>
        „{p.title}"
      </div>

      <Rule />

      {/* Description from book */}
      <Paragraphs text={p.desc} style={{ padding: "20px 0", fontFamily: "var(--body)", fontSize: "calc(var(--fs)*0.95)", lineHeight: 1.85, color: "var(--soft)", letterSpacing: "0.01em" }} />

      <Rule />

      {/* Daily challenge */}
      <div style={{ padding: "20px 0" }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: "calc(var(--fs)*0.6)", color: PC[p.part], letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Tagesaufgabe</div>
        <div style={{ fontFamily: "var(--body)", fontSize: "calc(var(--fs)*0.95)", lineHeight: 1.8, color: "var(--text)", fontWeight: 400 }}>
          {p.challenge}
        </div>
      </div>

      <Rule />

      {/* Tracking */}
      <div style={{ paddingTop: 24 }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: "calc(var(--fs)*0.6)", color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18 }}>Reflexion</div>

        {/* Applied? */}
        <div style={{ marginBottom: 20 }}>
          <label style={{ display: "block", fontSize: "calc(var(--fs)*0.7)", color: "var(--soft)", marginBottom: 8 }}>Heute angewendet?</label>
          <div style={{ display: "flex", gap: 1 }}>
            {[
              { v: "yes", l: "Ja", ac: "var(--c-green)", abg: "var(--c-green)" },
              { v: "partly", l: "Teilweise", ac: "var(--c-p4)", abg: "var(--c-p4)" },
              { v: "no", l: "Nein", ac: "var(--c-red)", abg: "var(--c-red)" },
            ].map((o, i) => (
              <button key={o.v} onClick={() => upd("applied", o.v)} style={{
                flex: 1, padding: "11px 0", fontSize: "calc(var(--fs)*0.75)", fontFamily: "var(--mono)", cursor: "pointer", fontWeight: 500,
                border: `1px solid ${entry.applied === o.v ? o.ac : "var(--rule)"}`,
                background: entry.applied === o.v ? o.abg : "transparent",
                color: entry.applied === o.v ? "var(--bg)" : "var(--muted)",
                borderRadius: i === 0 ? "2px 0 0 2px" : i === 2 ? "0 2px 2px 0" : "0",
              }}>{o.l}</button>
            ))}
          </div>
        </div>

        {/* Reflection notes */}
        <div style={{ marginBottom: 20 }}>
          <label style={{ display: "block", fontSize: "calc(var(--fs)*0.7)", color: "var(--soft)", marginBottom: 8 }}>Was ist passiert?</label>
          <textarea value={entry.reflection || ""} onChange={e => upd("reflection", e.target.value)} placeholder="Wie hast du das Prinzip angewendet? Was hast du beobachtet?" rows={5} style={{
            width: "100%", padding: "12px", fontSize: "calc(var(--fs)*0.85)", fontFamily: "var(--body)", lineHeight: 1.7,
            background: "transparent", border: "1px solid var(--rule)", color: "var(--text)", borderRadius: 2, resize: "vertical",
          }} />
        </div>

        {/* Complete button */}
        <Btn primary={!entry.done} onClick={() => upd("done", !entry.done)}>
          {entry.done ? "Erledigt ✓" : "Tag abschließen"}
        </Btn>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   LERNEN TAB — Browse principles + flashcard quiz
   ═══════════════════════════════════════════════════════════════════════════ */
function LernenTab({ data, setData }) {
  const [mode, setMode] = useState("browse"); // browse | quiz
  const [expanded, setExpanded] = useState(null);
  const [quizIdx, setQuizIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [shuffled, setShuffled] = useState([]);

  function startQuiz() {
    const arr = [...PRINCIPLES].sort(() => Math.random() - 0.5);
    setShuffled(arr);
    setQuizIdx(0);
    setFlipped(false);
    setMode("quiz");
  }

  function rateQuiz(rating) {
    const p = shuffled[quizIdx];
    const quiz = { ...(data.quiz || {}) };
    const prev = quiz[p.id] || { know: 0, practice: 0 };
    quiz[p.id] = { know: prev.know + (rating === "know" ? 1 : 0), practice: prev.practice + (rating === "practice" ? 1 : 0) };
    const n = { ...data, quiz };
    setData(n); sv(K_DATA, n);
    if (quizIdx < shuffled.length - 1) {
      setQuizIdx(quizIdx + 1);
      setFlipped(false);
    } else {
      setMode("browse");
    }
  }

  if (mode === "quiz" && shuffled.length > 0) {
    const p = shuffled[quizIdx];
    const part = PARTS.find(x => x.id === p.part);
    return (
      <div style={{ padding: "24px 20px 120px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 20 }}>
          <span style={{ fontFamily: "var(--mono)", fontSize: "calc(var(--fs)*0.65)", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Karte {quizIdx + 1} von {shuffled.length}</span>
          <button onClick={() => setMode("browse")} style={{ background: "none", border: "none", fontFamily: "var(--mono)", fontSize: "calc(var(--fs)*0.7)", color: "var(--muted)", cursor: "pointer" }}>Beenden</button>
        </div>
        <Rule />

        {/* Card */}
        <div onClick={() => setFlipped(!flipped)} style={{
          marginTop: 24, padding: 28, minHeight: 280, cursor: "pointer",
          border: "1px solid var(--rule)", borderRadius: 0, background: "var(--card)",
          display: "flex", flexDirection: "column", justifyContent: "center",
          borderLeft: `3px solid ${PC[shuffled[quizIdx].part]}`,
        }}>
          {!flipped ? (
            <div style={{ textAlign: "center" }}>
              <PartTag part={p.part} />
              <div style={{ fontFamily: "var(--mono)", fontSize: "calc(var(--fs)*0.65)", color: "var(--muted)", marginTop: 8, marginBottom: 20 }}>{part.title} &middot; Prinzip {p.num}</div>
              <h2 style={{ fontFamily: "var(--sans)", fontSize: "calc(var(--fs)*1.6)", fontWeight: 900, lineHeight: 1.25, letterSpacing: "-0.02em" }}>
                {p.titleDe}
              </h2>
              <div style={{ fontFamily: "var(--mono)", fontSize: "calc(var(--fs)*0.65)", color: "var(--muted)", marginTop: 24 }}>Antippen zum Umdrehen</div>
            </div>
          ) : (
            <div>
              <div style={{ fontFamily: "var(--mono)", fontSize: "calc(var(--fs)*0.75)", color: "var(--muted)", fontStyle: "italic", marginBottom: 16 }}>„{p.title}"</div>
              <Paragraphs text={p.desc} style={{ fontFamily: "var(--body)", fontSize: "calc(var(--fs)*0.9)", lineHeight: 1.8, color: "var(--soft)", letterSpacing: "0.01em" }} />
              <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--rule)", fontFamily: "var(--body)", fontSize: "calc(var(--fs)*0.85)", lineHeight: 1.75, color: "var(--text)", fontWeight: 500 }}>{p.challenge}</div>
            </div>
          )}
        </div>

        {/* Rating buttons */}
        {flipped && (
          <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
            <button onClick={() => rateQuiz("practice")} style={{
              flex: 1, padding: "14px 0", fontFamily: "var(--mono)", fontSize: "calc(var(--fs)*0.75)", fontWeight: 500,
              background: "transparent", border: "1px solid var(--c-red)", color: "var(--c-red)", cursor: "pointer", borderRadius: 2,
            }}>Muss ich üben</button>
            <button onClick={() => rateQuiz("know")} style={{
              flex: 1, padding: "14px 0", fontFamily: "var(--mono)", fontSize: "calc(var(--fs)*0.75)", fontWeight: 500,
              background: "var(--c-green)", border: "1px solid var(--c-green)", color: "var(--bg)", cursor: "pointer", borderRadius: 2,
            }}>Kenne ich</button>
          </div>
        )}
      </div>
    );
  }

  // Browse mode
  return (
    <div style={{ padding: "24px 20px 120px" }}>
      {/* Quiz start button */}
      <Btn primary onClick={startQuiz} style={{ marginBottom: 24 }}>Lernkarten starten</Btn>

      {/* Browse by part */}
      {PARTS.map(part => {
        const ps = PRINCIPLES.filter(p => p.part === part.id);
        return (
          <div key={part.id} style={{ marginBottom: 28 }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: "calc(var(--fs)*0.6)", color: PC[part.id], letterSpacing: "0.12em", textTransform: "uppercase", paddingBottom: 10, borderBottom: "1px solid var(--rule)" }}>
              Teil {part.id} — {part.title}
            </div>
            {ps.map(p => {
              const isOpen = expanded === p.id;
              const q = data.quiz?.[p.id];
              const total = q ? q.know + q.practice : 0;
              return (
                <div key={p.id}>
                  <button onClick={() => setExpanded(isOpen ? null : p.id)} style={{
                    display: "flex", width: "100%", alignItems: "baseline", gap: 10, padding: "12px 0",
                    background: "none", border: "none", borderBottom: "1px solid var(--rule)",
                    cursor: "pointer", textAlign: "left", fontFamily: "var(--mono)",
                  }}>
                    <span style={{ fontSize: "calc(var(--fs)*0.7)", color: "var(--muted)", minWidth: 24, fontWeight: 500 }}>{p.num}</span>
                    <span style={{ flex: 1, fontSize: "calc(var(--fs)*0.85)", color: "var(--text)", fontWeight: 400, lineHeight: 1.4 }}>{p.titleDe}</span>
                    {total > 0 && <span style={{ fontSize: "calc(var(--fs)*0.6)", color: q.know > q.practice ? "var(--c-green)" : "var(--c-red)" }}>{q.know}/{total}</span>}
                    <span style={{ fontSize: "calc(var(--fs)*0.75)", color: "var(--muted)" }}>{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "16px 0 16px 34px", borderBottom: "1px solid var(--rule)" }}>
                      <div style={{ fontFamily: "var(--mono)", fontSize: "calc(var(--fs)*0.75)", color: "var(--muted)", fontStyle: "italic", marginBottom: 12 }}>„{p.title}"</div>
                      <Paragraphs text={p.desc} style={{ fontFamily: "var(--body)", fontSize: "calc(var(--fs)*0.9)", lineHeight: 1.8, color: "var(--soft)", marginBottom: 12, letterSpacing: "0.01em" }} />
                      <div style={{ fontFamily: "var(--body)", fontSize: "calc(var(--fs)*0.85)", lineHeight: 1.75, color: "var(--text)", fontWeight: 500, paddingTop: 12, borderTop: "1px solid var(--rule)" }}>{p.challenge}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   JOURNAL TAB — All reflections + add new entries
   ═══════════════════════════════════════════════════════════════════════════ */
function JournalTab({ data, setData }) {
  const [adding, setAdding] = useState(false);
  const [newPid, setNewPid] = useState(1);
  const [newText, setNewText] = useState("");
  const [newDate, setNewDate] = useState(today());

  // Collect all entries: daily reflections + manual journal entries
  const entries = [];

  // Daily entries with reflections
  Object.entries(data.daily || {}).forEach(([date, e]) => {
    if (e.reflection && e.reflection.trim()) {
      const idx = dayOfYear(date) % PRINCIPLES.length;
      const p = PRINCIPLES[idx];
      entries.push({ type: "daily", date, principleId: p.id, text: e.reflection, applied: e.applied });
    }
  });

  // Manual journal entries
  (data.journal || []).forEach(j => {
    entries.push({ type: "manual", date: j.date, principleId: j.principleId, text: j.text });
  });

  // Sort by date descending
  entries.sort((a, b) => b.date.localeCompare(a.date));

  function addEntry() {
    if (!newText.trim()) return;
    const journal = [...(data.journal || []), { id: Date.now(), date: newDate, principleId: Number(newPid), text: newText.trim() }];
    const n = { ...data, journal };
    setData(n); sv(K_DATA, n);
    setNewText("");
    setAdding(false);
  }

  function removeEntry(id) {
    const journal = (data.journal || []).filter(j => j.id !== id);
    const n = { ...data, journal };
    setData(n); sv(K_DATA, n);
  }

  return (
    <div style={{ padding: "24px 20px 120px" }}>
      {/* Add entry button / form */}
      {!adding ? (
        <Btn onClick={() => setAdding(true)} style={{ marginBottom: 24 }}>+ Eintrag hinzufügen</Btn>
      ) : (
        <div style={{ marginBottom: 24, padding: 16, border: "1px solid var(--rule)", borderRadius: 2 }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: "calc(var(--fs)*0.6)", color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Neuer Eintrag</div>

          <div style={{ marginBottom: 12 }}>
            <label style={{ display: "block", fontSize: "calc(var(--fs)*0.7)", color: "var(--soft)", marginBottom: 6 }}>Prinzip</label>
            <select value={newPid} onChange={e => setNewPid(e.target.value)} style={{
              width: "100%", padding: "10px 12px", fontSize: "calc(var(--fs)*0.8)", fontFamily: "var(--mono)",
              background: "var(--bg)", border: "1px solid var(--rule)", color: "var(--text)", borderRadius: 2,
            }}>
              {PRINCIPLES.map(p => <option key={p.id} value={p.id}>{p.num}. {p.titleDe} (Teil {p.part})</option>)}
            </select>
          </div>

          <div style={{ marginBottom: 12 }}>
            <label style={{ display: "block", fontSize: "calc(var(--fs)*0.7)", color: "var(--soft)", marginBottom: 6 }}>Datum</label>
            <input type="date" value={newDate} onChange={e => setNewDate(e.target.value)} style={{
              width: "100%", padding: "10px 12px", fontSize: "calc(var(--fs)*0.8)", fontFamily: "var(--mono)",
              background: "transparent", border: "1px solid var(--rule)", color: "var(--text)", borderRadius: 2,
            }} />
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={{ display: "block", fontSize: "calc(var(--fs)*0.7)", color: "var(--soft)", marginBottom: 6 }}>Was ist passiert?</label>
            <textarea value={newText} onChange={e => setNewText(e.target.value)} placeholder="Beschreibe die Situation und was du gelernt hast…" rows={4} style={{
              width: "100%", padding: "12px", fontSize: "calc(var(--fs)*0.85)", fontFamily: "var(--body)", lineHeight: 1.7,
              background: "transparent", border: "1px solid var(--rule)", color: "var(--text)", borderRadius: 2, resize: "vertical",
            }} />
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            <Btn onClick={() => setAdding(false)}>Abbrechen</Btn>
            <Btn primary onClick={addEntry}>Speichern</Btn>
          </div>
        </div>
      )}

      {/* Entry list */}
      {entries.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px 20px", color: "var(--muted)" }}>
          <div style={{ fontFamily: "var(--sans)", fontSize: "calc(var(--fs)*1.4)", fontWeight: 900, marginBottom: 8, color: "var(--soft)" }}>Noch keine Einträge</div>
          <div style={{ fontSize: "calc(var(--fs)*0.8)", lineHeight: 1.6 }}>Schließe deinen ersten Tag ab oder füge einen Eintrag hinzu.</div>
        </div>
      ) : (
        entries.map((e, i) => {
          const p = PRINCIPLES.find(x => x.id === e.principleId);
          return (
            <div key={`${e.date}-${e.principleId}-${i}`} style={{ padding: "16px 0", borderBottom: "1px solid var(--rule)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
                <span style={{ fontFamily: "var(--mono)", fontSize: "calc(var(--fs)*0.65)", color: "var(--muted)" }}>{e.date}</span>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {e.applied && <span style={{ fontSize: "calc(var(--fs)*0.6)", color: e.applied === "yes" ? "var(--c-green)" : e.applied === "partly" ? "var(--c-p4)" : "var(--c-red)" }}>{e.applied === "yes" ? "Angewendet" : e.applied === "partly" ? "Teilweise" : "Nicht angewendet"}</span>}
                  <span style={{ fontFamily: "var(--mono)", fontSize: "calc(var(--fs)*0.6)", color: PC[p?.part || 1], letterSpacing: "0.08em", textTransform: "uppercase" }}>{e.type === "daily" ? "Tagesaufgabe" : "Journal"}</span>
                </div>
              </div>
              {p && <div style={{ fontSize: "calc(var(--fs)*0.8)", color: "var(--text)", fontWeight: 500, marginBottom: 6 }}>{p.titleDe}</div>}
              <div style={{ fontFamily: "var(--body)", fontSize: "calc(var(--fs)*0.85)", lineHeight: 1.8, color: "var(--soft)", letterSpacing: "0.01em" }}>{e.text}</div>
            </div>
          );
        })
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SETTINGS TAB
   ═══════════════════════════════════════════════════════════════════════════ */
function SettingsTab({ settings: st, setSt, data, setData, onOut }) {
  function us(k, v) { const n = { ...st, [k]: v }; setSt(n); sv(K_SET, n); }

  // Stats
  const totalDays = Object.values(data.daily || {}).filter(e => e.done).length;
  const journalCount = (data.journal || []).length + Object.values(data.daily || {}).filter(e => e.reflection?.trim()).length;
  const quizTotal = Object.values(data.quiz || {}).reduce((a, q) => a + q.know + q.practice, 0);
  const quizKnow = Object.values(data.quiz || {}).reduce((a, q) => a + q.know, 0);

  return (
    <div style={{ padding: "24px 20px 120px" }}>
      {/* Stats section */}
      <div style={{ fontFamily: "var(--mono)", fontSize: "calc(var(--fs)*0.6)", color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Statistiken</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderBottom: "1px solid var(--rule)", marginBottom: 24 }}>
        {[
          { n: totalDays, l: "Tage geübt" },
          { n: journalCount, l: "Einträge" },
          { n: quizTotal > 0 ? `${Math.round((quizKnow / quizTotal) * 100)}%` : "—", l: "Quiz-Rate" },
          { n: Object.keys(data.quiz || {}).length + "/30", l: "Abgefragt" },
        ].map((x, i) => (
          <div key={i} style={{ padding: "16px 0", textAlign: "center", borderRight: i % 2 === 0 ? "1px solid var(--rule)" : "none", borderBottom: i < 2 ? "1px solid var(--rule)" : "none" }}>
            <Num n={x.n} label={x.l} />
          </div>
        ))}
      </div>

      {/* Principle mastery */}
      <div style={{ fontFamily: "var(--mono)", fontSize: "calc(var(--fs)*0.6)", color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Nach Teil</div>
      {PARTS.map(part => {
        const ps = PRINCIPLES.filter(p => p.part === part.id);
        const practiced = ps.filter(p => data.quiz?.[p.id]).length;
        return (
          <div key={part.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0", borderBottom: "1px solid var(--rule)" }}>
            <span style={{ fontFamily: "var(--mono)", fontSize: "calc(var(--fs)*0.7)", color: PC[part.id], minWidth: 44, fontWeight: 500 }}>Teil {part.id}</span>
            <div style={{ flex: 1, height: 2, background: "var(--rule)", borderRadius: 1, overflow: "hidden" }}>
              <div style={{ width: `${ps.length > 0 ? (practiced / ps.length) * 100 : 0}%`, height: "100%", background: PC[part.id], transition: "width 0.4s" }} />
            </div>
            <span style={{ fontFamily: "var(--mono)", fontSize: "calc(var(--fs)*0.7)", color: "var(--muted)", minWidth: 30, textAlign: "right" }}>{practiced}/{ps.length}</span>
          </div>
        );
      })}

      <div style={{ height: 24 }} />
      <Rule />

      {/* Appearance */}
      <div style={{ fontFamily: "var(--mono)", fontSize: "calc(var(--fs)*0.6)", color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase", margin: "24px 0 16px" }}>Darstellung</div>

      <div style={{ marginBottom: 24 }}>
        <label style={{ display: "block", fontSize: "calc(var(--fs)*0.75)", color: "var(--soft)", marginBottom: 10 }}>Thema</label>
        <div style={{ display: "flex", gap: 1 }}>
          {[{ v: "dark", l: "Dunkel" }, { v: "light", l: "Hell" }].map((o, i) => (
            <button key={o.v} onClick={() => us("mode", o.v)} style={{
              flex: 1, padding: "12px 0", fontSize: "calc(var(--fs)*0.8)", fontFamily: "var(--mono)", cursor: "pointer", fontWeight: 500,
              border: `1px solid ${st.mode === o.v ? "var(--accent)" : "var(--rule)"}`,
              background: st.mode === o.v ? "var(--accent)" : "transparent",
              color: st.mode === o.v ? "var(--bg)" : "var(--muted)",
              borderRadius: i === 0 ? "2px 0 0 2px" : "0 2px 2px 0",
            }}>{o.l}</button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 28 }}>
        <label style={{ display: "block", fontSize: "calc(var(--fs)*0.75)", color: "var(--soft)", marginBottom: 10 }}>Schriftgröße: {st.fontSize}px</label>
        <input type="range" min={12} max={20} value={st.fontSize} onChange={e => us("fontSize", Number(e.target.value))} style={{ width: "100%", accentColor: "var(--accent)" }} />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "calc(var(--fs)*0.65)", color: "var(--muted)", marginTop: 4 }}><span>12</span><span>20</span></div>
      </div>

      <Rule />

      {/* Data management */}
      <div style={{ fontFamily: "var(--mono)", fontSize: "calc(var(--fs)*0.6)", color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase", margin: "24px 0 16px" }}>Daten</div>

      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <button onClick={() => { const b = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }); const a = document.createElement("a"); a.href = URL.createObjectURL(b); a.download = "win-friends.json"; a.click(); }} style={{
          flex: 1, padding: "12px", fontSize: "calc(var(--fs)*0.75)", fontFamily: "var(--mono)", fontWeight: 500,
          background: "transparent", border: "1px solid var(--rule)", color: "var(--text)", cursor: "pointer", borderRadius: 2,
        }}>Export</button>
        <label style={{
          flex: 1, padding: "12px", fontSize: "calc(var(--fs)*0.75)", fontFamily: "var(--mono)", fontWeight: 500, textAlign: "center",
          background: "transparent", border: "1px solid var(--rule)", color: "var(--soft)", cursor: "pointer", borderRadius: 2,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          Import
          <input type="file" accept=".json" style={{ display: "none" }} onChange={e => { const f = e.target.files[0]; if (!f) return; const r = new FileReader(); r.onload = () => { try { const d = JSON.parse(r.result); setData(d); sv(K_DATA, d); } catch { alert("Ungültige Datei"); } }; r.readAsText(f); }} />
        </label>
      </div>
      <button onClick={() => { if (confirm("Alle Daten löschen?")) { setData({}); sv(K_DATA, {}); } }} style={{
        width: "100%", padding: "12px", fontSize: "calc(var(--fs)*0.75)", fontFamily: "var(--mono)", fontWeight: 500,
        background: "transparent", border: "1px solid var(--c-p3)", color: "var(--c-p3)", cursor: "pointer", borderRadius: 2,
      }}>Reset</button>

      <div style={{ height: 24 }} />
      <Rule />
      <button onClick={onOut} style={{
        width: "100%", padding: "12px", marginTop: 24, fontSize: "calc(var(--fs)*0.75)", fontFamily: "var(--mono)", fontWeight: 500,
        background: "transparent", border: "1px solid var(--rule)", color: "var(--muted)", cursor: "pointer", borderRadius: 2,
      }}>Abmelden</button>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   NAV
   ═══════════════════════════════════════════════════════════════════════════ */
function Nav({ tab, set }) {
  const items = [
    { id: "heute", l: "Heute" },
    { id: "lernen", l: "Lernen" },
    { id: "journal", l: "Journal" },
    { id: "settings", l: "Mehr" },
  ];
  return (
    <nav style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100, background: "var(--bg)", borderTop: "1px solid var(--rule)", display: "flex", justifyContent: "center", paddingBottom: "env(safe-area-inset-bottom)" }}>
      <div style={{ display: "flex", maxWidth: 480, width: "100%" }}>
        {items.map(it => (
          <button key={it.id} onClick={() => set(it.id)} style={{
            flex: 1, padding: "12px 0 10px", background: "none", border: "none", cursor: "pointer",
            fontFamily: "var(--mono)", fontSize: "calc(var(--fs)*0.6)", fontWeight: 500,
            letterSpacing: "0.06em", textTransform: "uppercase",
            color: tab === it.id ? "var(--text)" : "var(--muted)",
            borderTop: tab === it.id ? "2px solid var(--accent)" : "2px solid transparent",
            transition: "all 0.15s",
          }}>{it.l}</button>
        ))}
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   APP
   ═══════════════════════════════════════════════════════════════════════════ */
function App() {
  const [authed, setAuthed] = useState(() => ld(K_AUTH, false));
  const [data, setData] = useState(() => ld(K_DATA, {}));
  const [st, setSt] = useState(() => ld(K_SET, { mode: "dark", fontSize: 15 }));
  const [tab, setTab] = useState("heute");

  const theme = st.mode || "dark";

  // Sync body background + meta theme-color so no dark edges on mobile
  useEffect(() => {
    document.body.className = "theme-" + theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "light" ? "#F5F5F0" : "#0A0A0A");
  }, [theme]);

  if (!authed) return <Login onIn={() => { setAuthed(true); sv(K_AUTH, true); }} />;

  const titles = { heute: "Win Friends", lernen: "Lernen", journal: "Journal", settings: "Einstellungen" };

  return (
    <div data-theme={theme} style={{ "--fs": `${st.fontSize}px`, minHeight: "100dvh", background: "var(--bg)" }}>
      <style>{CSS}</style>
      <div style={{ minHeight: "100dvh", color: "var(--text)", fontFamily: "var(--mono)", maxWidth: 480, margin: "0 auto" }}>
        <div style={{ padding: "16px 20px 12px", borderBottom: "1px solid var(--rule)", position: "sticky", top: 0, zIndex: 50, background: "var(--bg)" }}>
          <h1 style={{
            fontFamily: tab === "heute" ? "var(--sans)" : "var(--mono)",
            fontSize: tab === "heute" ? "calc(var(--fs)*1.6)" : "calc(var(--fs)*0.7)",
            fontWeight: tab === "heute" ? 800 : 500,
            letterSpacing: tab === "heute" ? "-0.03em" : "0.1em",
            textTransform: tab === "heute" ? "none" : "uppercase",
            color: tab === "heute" ? "var(--text)" : "var(--muted)", margin: 0,
          }}>{titles[tab]}</h1>
        </div>
        {tab === "heute" && <HeuteTab data={data} setData={setData} />}
        {tab === "lernen" && <LernenTab data={data} setData={setData} />}
        {tab === "journal" && <JournalTab data={data} setData={setData} />}
        {tab === "settings" && <SettingsTab settings={st} setSt={setSt} data={data} setData={setData} onOut={() => { setAuthed(false); sv(K_AUTH, false); }} />}
        <Nav tab={tab} set={setTab} />
      </div>
    </div>
  );
}

// Mount
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
