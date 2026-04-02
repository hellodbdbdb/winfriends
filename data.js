/* Win Friends — Principle Data
   Source: How to Win Friends and Influence People, Dale Carnegie
   ================================================================= */

var PARTS = [
  { id: 1, title: "Grundlagen im Umgang mit Menschen", titleEn: "Fundamental Techniques in Handling People" },
  { id: 2, title: "Sechs Wege, sich beliebt zu machen", titleEn: "Six Ways to Make People Like You" },
  { id: 3, title: "Menschen \u00fcberzeugen", titleEn: "How to Win People to Your Way of Thinking" },
  { id: 4, title: "F\u00fchren, ohne zu verletzen", titleEn: "Be a Leader: How to Change People Without Giving Offense or Arousing Resentment" }
];

var PRINCIPLES = [
  /* Part 1 */
  {
    id: 1, part: 1, num: 1,
    title: "Don\u2019t criticize, condemn or complain.",
    titleDe: "Kritisiere, verurteile und klage nicht.",
    desc: "Kernidee: Kritik erzeugt automatisch Widerstand und verletzt den Stolz des anderen unwiederbringlich. Menschen rechtfertigen sich immer selbst, egal was sie getan haben \u2014 niemand gibt sich jemals Schuld, und deshalb \u00e4ndert Kritik kein Verhalten, sondern versch\u00e4rft nur Konflikte und Feindschaft.\n\n\u25b8 \u201eTwo Gun\u201c Crowley, ein gesuchter Killer, schrieb w\u00e4hrend der Belagerung durch 150 Polizisten nicht \u201cIch bin ein Killer\u201d, sondern: \u201eUnter meinem Mantel schl\u00e4gt ein g\u00fctiges Herz.\u201c Al Capone, Amerikas ber\u00fcchtigtster Gangster, sah sich nicht als Verbrecher, sondern als \u201everkannter Wohlt\u00e4ter, der Menschen vergnagn bereitet.\u201d\n\n\u25b8 Bob Hoover, ein ber\u00fchmter Testpilot, h\u00e4tte nach einem M\u00e4chtsversagen fast sein Leben verloren, weil ein Mechaniker falschen Treibstoff getankt hatte. Statt den jungen Mann zu verurteilen, umarmte Hoover ihn und bat ihn, seine Maschine am n\u00e4chsten Tag erneut zu warten.\n\nCarnegies Regel: Anstatt zu verurteilen, versuche zu verstehen. Frage dich immer: Warum tut diese Person das wirklich?",
    challenge: "Achte heute bei jedem Gespr\u00e4ch darauf, ob du kritisierst, verurteilst oder klagst. Wenn du den Impuls sp\u00fcrst: halte inne und formuliere um."
  },
  {
    id: 2, part: 1, num: 2,
    title: "Give honest and sincere appreciation.",
    titleDe: "Gib ehrliche und aufrichtige Anerkennung.",
    desc: "Kernidee: Das tiefste Bed\u00fcrfnis der menschlichen Natur ist der Wunsch, gesch\u00e4tzt zu werden. William James betonte dies, und Charles Schwab, dem Andrew Carnegie \u00fcber eine Million Dollar pro Jahr zahlte, bewies es durch Handeln. Aufrichtige Anerkennung n\u00e4hrt die Seele eines Menschen, w\u00e4hrend Schmeichelei nur oberfl\u00e4chlich und unwirksam bleibt.\n\n\u25b8 Charles Schwab, einer der ersten Gesch\u00e4ftsef\u00fchren, dem ein Millionengeh\u00e4lt gezahlt wurde, erkl\u00e4rte offen: \u201eMeine F\u00e4higkeit, Begeisterung in meinen Menschen zu wecken, ist mein gr\u00f6\u00dftes Verm\u00f6gen.\u201d Diese Begeisterung erzielte er nicht durch Kritik, sondern durch echtes Lob und Anerkennung seiner Mitarbeiter.\n\n\u25b8 Andrew Carnegie zahlt Schwab jene Million nicht, weil dieser ein Stahlgenie war, sondern weil er Menschen inspirieren konnte. Schwab selbst sagte, dass viele seiner Untergebenen mehr \u00fcber Stahlherstellung wu\u00dften als er, aber keiner konnte Menschen so wirksam motivieren.\n\nCarnegies Regel: Aufrichtige Anerkennung ist billiger und wirkungsvoller als Lohn oder Druck.",
    challenge: "Sage heute drei Menschen etwas Konkretes, das du an ihnen sch\u00e4tzt \u2014 nicht allgemein, sondern spezifisch und ehrlich."
  },
  {
    id: 3, part: 1, num: 3,
    title: "Arouse in the other person an eager want.",
    titleDe: "Wecke im anderen einen unbedingten Wunsch.",
    desc: "Kernidee: Der einzige Weg, Menschen zu beeinflussen, ist, \u00fcber das zu sprechen, was sie wollen und brauchen. Menschen sind ewig an ihren eigenen W\u00fcnschen interessiert, nie an deinen. Wenn du ihre verborgenen Ziele enth\u00fcllst und zeigst, wie sie durch dich erf\u00fcllt werden, werden sie dir folgen.\n\n\u25b8 Andrew Carnegie bewies dies mit seinen Neffen: Er schrieb ihnen einen Brief und erw\u00e4hnte beil\u00e4ufig, dass er ihnen je f\u00fcnf Dollar schicken w\u00fcrde \u2014 aber \u201cverga\u00df\u201d das Geld. Die Neffen antworteten sofort per R\u00fcckpost und fragten nach dem versprochenen Geld, weil ihr Wunsch nach Geld st\u00e4rker war als ihre Gleichg\u00fcltigkeit.\n\n\u25b8 Lloyd George, Premierminister Gro\u00dfbritanniens, erkannte: Wenn man Menschen beeinflussen will, muss man die Leine mit Futter ausstatten, das der Fisch wirklich will. Worms und Grillen, nicht Erdbeeren und Sahne.\n\nCarnegies Regel: Finde, was der andere will, und zeige ihm den klaren Weg dorthin.",
    challenge: "Bevor du heute jemanden um etwas bittest: \u00fcberlege zuerst, was diese Person davon hat. Formuliere deine Bitte aus ihrer Perspektive und ihrem Vorteil."
  },

  /* Part 2 */
  {
    id: 4, part: 2, num: 1,
    title: "Become genuinely interested in other people.",
    titleDe: "Interessiere dich aufrichtig f\u00fcr andere.",
    desc: "Kernidee: Du gewinnst in zwei Monaten mehr echte Freunde, wenn du dich aufrichtig f\u00fcr andere interessierst, als in zwei Jahren, wenn du versuchst, andere f\u00fcr dich zu interessieren. Echtes Interesse ist magnetisch, und Menschen folgen denen, die sich wirklich um sie k\u00fcmmern.\n\n\u25b8 Dale Carnegies Hund Tippy las kein Psychologiebuch, aber er wusste intuitiv, wie man Freunde gewinnt. Wenn Carnegie mit seinem Eimer nach Hause kam, rannte Tippy l\u00e4chelnd den H\u00fcgel hinauf, bereit zur Begr\u00fc\u00dfung \u2014 das war echt, nicht gew\u00f6hnlich, echtes Interesse.\n\n\u25b8 Auf einer Dinnerparty h\u00f6rte Carnegie stundenlang einem Botaniker aufmerksam zu, der von exotischen Pflanzen und neuen Pflanzenz\u00fcchtungen sprach. Am Ende der Party rief der Botaniker Carnegie einen der fesselndsten Gespr\u00e4chspartner, obwohl Carnegie fast nichts gesagt hatte.\n\nCarnegies Regel: Menschen sind magisch angezogen zu denen, die sich wirklich f\u00fcr sie interessieren.",
    challenge: "Stelle heute in jedem Gespr\u00e4ch mindestens eine echte Frage \u00fcber das Leben oder die Interessen deines Gegen\u00fcbers \u2014 und h\u00f6re wirklich zu."
  },
  {
    id: 5, part: 2, num: 2,
    title: "Smile.",
    titleDe: "L\u00e4chle.",
    desc: "Kernidee: Ein aufrichtiges L\u00e4cheln sagt ohne Worte: Ich mag dich, du machst mich gl\u00fccklich, ich freue mich, dich zu sehen. Es ist eine nonverbale Begr\u00fc\u00dfung, die T\u00fcren \u00f6ffnet, die mit Argumenten verschlossen bleiben. Ein L\u00e4cheln ist ansteckend, es \u00e4ndert die Chemie des Augenblicks.\n\n\u25b8 Charles Schwab sagte, sein L\u00e4cheln sei ihm w\u00e4hrend seiner Karriere eine Million Dollar wert gewesen. Nicht wegen Schmeichelei, sondern weil ein echtes, von innen kommendes L\u00e4cheln authentische Verbindungen schafft und Vertrauen aufbaut.\n\n\u25b8 Ein Psychologe an der Universit\u00e4t Michigan entdeckte: Menschen, die l\u00e4cheln, unterrichten gl\u00fccklichere Kinder, verkaufen mehr und f\u00fchren besser. Der Ausdruck deines Gesichts ist wichtiger als die beste Kleidung, die du trugst.\n\nCarnegies Regel: Dein L\u00e4cheln ist ein Geschenk an die Welt \u2014 gib es freigiebig.",
    challenge: "L\u00e4chle heute bewusst bei jeder Begegnung \u2014 beim B\u00e4cker, im Meeting, beim Telefonieren. Beobachte, wie andere darauf reagieren."
  },
  {
    id: 6, part: 2, num: 3,
    title: "Remember that a person\u2019s name is to that person the sweetest and most important sound in any language.",
    titleDe: "Der Name eines Menschen ist f\u00fcr ihn der sch\u00f6nste und wichtigste Klang.",
    desc: "Kernidee: Der Name einer Person ist das pers\u00f6nlichste Wort, das es gibt. Wenn du jemandes Namen richtig benutzt, zeigst du echte W\u00fcdigung und Respekt. Menschen, deren Namen vergessen werden, f\u00fchlen sich unbedeutend; Menschen, deren Namen erinnert werden, f\u00fchlen sich wichtig.\n\n\u25b8 Jim Farley konnte sich an die Namen von 50.000 Menschen erinnern und baute ein System, das Franklin D. Roosevelt zum Pr\u00e4sidenten machte. Monate vor den Wahlen schrieb Farley hunderte Briefe pro Tag mit den pers\u00f6nlichen Vornamen der Empf\u00e4nger, nicht einfache Massenbriefe.\n\n\u25b8 Theodore Roosevelt gr\u00fc\u00dfte alle White House-Angestellten beim Namen, sogar die Scullery-M\u00e4dchen und G\u00e4rtner. Eine langjährige Haushaltshilfe sagte weinend: \u201cEs war der einzige gl\u00fcckliche Tag seit zwei Jahren, und keiner von uns w\u00fcrde ihn f\u00fcr hundert Dollar eintauschen.\u201d\n\nCarnegies Regel: Das Name ist der Schl\u00fcssel zum Herzen. Lerne ihn, benutze ihn, respektiere ihn.",
    challenge: "Merke dir heute bewusst den Namen jeder Person, die du triffst. Benutze ihren Namen mindestens einmal im Gespr\u00e4ch \u2014 und versuche, ihn nicht zu vergessen."
  },
  {
    id: 7, part: 2, num: 4,
    title: "Be a good listener. Encourage others to talk about themselves.",
    titleDe: "Sei ein guter Zuh\u00f6rer. Ermutige andere, \u00fcber sich zu sprechen.",
    desc: "Kernidee: Ein guter Zuh\u00f6rer zu sein ist eine der h\u00f6chsten Formen der Aufmerksamkeit und Respekt, die man zeigen kann. Die meisten Menschen wollen reden, nicht zuh\u00f6ren. Wenn du zuh\u00f6rst, machst du dich selten beliebt, aber du wirst unvergesslich.\n\n\u25b8 Dale Carnegie war auf einer Dinnerparty mit einem Botaniker. Carnegie h\u00f6rte stundenlang zu, stellte gelegentlich Fragen, und sagte selbst kaum etwas. Am Ende nannte der Botaniker ihn einen der \u201cfesselndsten Gespr\u00e4chspartner\u201d, die er je traf.\n\n\u25b8 Der Harvard-Pr\u00e4sident Charles Eliot sagte: \u201cEs gibt kein Geheimnis \u00fcber erfolgreiche Verhandlungen. Exklusive Aufmerksamkeit auf den Sprecher ist sehr wichtig. Nichts ist so schmeichelhaft wie das vollst\u00e4ndige L\u00fcftchen auf deine W\u00f6rte.\u201d\n\nCarnegies Regel: Wer zuh\u00f6rt, erf\u00e4hrt mehr, baut tiefere Bindungen und gewinnt echte Freunde.",
    challenge: "F\u00fchre heute ein Gespr\u00e4ch, in dem du mehr zuh\u00f6rst als sprichst. Stelle Folgefragen statt von dir zu erz\u00e4hlen."
  },
  {
    id: 8, part: 2, num: 5,
    title: "Talk in terms of the other person\u2019s interests.",
    titleDe: "Sprich \u00fcber die Interessen des anderen.",
    desc: "Kernidee: Menschen werden aufhorchen, wenn du ihre Leidenschaft ber\u00fchrst. Theodore Roosevelt las am Vorabend jedes Besuchs \u00fcber dessen Lieblingsthema, damit er intelligent \u00fcber genau jenes Thema sprechen konnte. Das zeigte nicht nur Respekt, sondern auch dass der andere wichtig genug war, um sich vorzubereiten.\n\n\u25b8 Theodore Roosevelt stu\u0308ndete vor jedem Besuch und versorgte sich selbst mit Wissen \u00fcber die Themen und Leidenschaften seines Gastes. Der Besucher felt sich sofort verstanden und wertgesch\u00e4tzt, weil Roosevelt nicht \u00fcber sich selbst sprach, sondern \u00fcber das, was DEN ANDEREN interessierte.\n\n\u25b8 Franklin D. Roosevelt, der Neffe Theodores, sah sich Ber\u00fchmte Fotografien und Sammlungen seiner G\u00e4ste an und sprach \u00fcber diese, nicht \u00fcber die eigene Pr\u00e4sidentschaft. Diese M\u00e4nner verstanden: Wenn du \u00fcber die Interessen des anderen sprichst, hast du sofort sein Herz.\n\nCarnegies Regel: Der sicherste Weg zum Herzen eines Menschen f\u00fchrt \u00fcber seine Leidenschaft.",
    challenge: "Finde heute heraus, was eine Person, mit der du sprichst, begeistert \u2014 und lenke das Gespr\u00e4ch dorthin. Lass sie dar\u00fcber sprechen."
  },
  {
    id: 9, part: 2, num: 6,
    title: "Make the other person feel important \u2014 and do it sincerely.",
    titleDe: "Gib dem anderen das Gef\u00fchl, wichtig zu sein \u2014 und meine es ehrlich.",
    desc: "Kernidee: Jeder Mensch hat einen unbewussten Hunger nach dem Gef\u00fchl, bedeutsam zu sein. Wenn du diesem Hunger mit echter W\u00fcdigung Nahrung gibst, wird diese Person dir loyal folgen. Theodore Roosevelt verstand dies perfekt und zeigte es durch kleine, aufmerksame Gesten, die sein echtes Interesse bewiesen.\n\n\u25b8 Theodore Roosevelt rief einer Haushaltshilfe an, um ihr einen wundersch\u00f6nen Vogel vor ihrem Fenster zu zeigen, obwohl er als Pr\u00e4sident ungeheuer besch\u00e4ftigt war. Diese Geste zeigte: Du bist mir wichtig, deine Freude ist wichtig, deine Augen sind wichtig.\n\n\u25b8 Roosevelt gr\u00fc\u00dfte die Scullery-M\u00e4dchen und Angestellten beim Namen und erkannte sie als Menschen an, nicht als faceless Diener. Ein Gartener sagte sp\u00e4ter, dass dieser Tag sein Leben ver\u00e4ndert hatte, weil er sich endlich gesehen f\u00fchlt.\n\nCarnegies Regel: Jeder Mensch ist dir in irgendeinem Bereich \u00fcberlegen. Finde den, und w\u00fcdige ihn darin.",
    challenge: "Finde heute bei jemandem eine Eigenschaft oder Leistung, die du aufrichtig bewunderst, und sage es dieser Person direkt und konkret."
  },

  /* Part 3 */
  {
    id: 10, part: 3, num: 1,
    title: "The only way to get the best of an argument is to avoid it.",
    titleDe: "Der einzige Weg, einen Streit zu gewinnen, ist ihn zu vermeiden.",
    desc: "Kernidee: Selbst wenn du den Streit logisch gewinnst, verlierst du emotional. Der andere f\u00fchlt sich besiegt, nicht \u00fcberzeigt. Sein Stolz ist verletzt, und sein Widerstand verh\u00e4rtet sich. Ein Mensch, der gegen seinen Willen \u00fcberzeigt wird, bleibt bei seiner Meinung und hasst dich daf\u00fcr, dass du ihn bl\u00f6dgestellt hast.\n\n\u25b8 Theodore Roosevelt kritisierte Pr\u00e4sident Taft hart und direkt, weil Taft seiner Meinung nach falsche Entscheidungen traf. Taft antwortete nur: \u201cIch sehe nicht, wie ich es h\u00e4tte anders machen k\u00f6nnte.\u201d Roosevelts Kritik \u00e4nderte nichts. Sie zerst\u00f6rte eine Freundschaft und spaltete die Republikanische Partei.\n\n\u25b8 Neun von zehn Streitigkeiten enden damit, dass beide Seiten noch festgesetzter sind als zuvor. Der Streit verst\u00e4rkt nur den Widerstand. Wirkliche \u00dcberzeugung kommt nicht aus Niederlage, sondern aus Verst\u00e4ndnis.\n\nCarnegies Regel: Der beste Streit ist der, den du nicht f\u00fchren w\u00e4hrst.",
    challenge: "Wenn heute jemand etwas sagt, dem du widersprechen willst: halte inne. Frage stattdessen nach seiner Sichtweise und versuche, sie zu verstehen."
  },
  {
    id: 11, part: 3, num: 2,
    title: "Show respect for the other person\u2019s opinions. Never say, \u201CYou\u2019re wrong.\u201D",
    titleDe: "Respektiere die Meinung des anderen. Sage niemals: Du hast Unrecht.",
    desc: "Kernidee: Wenn du jemandem direkt sagst, dass er Unrecht hat, triffst du ihn in seinem Stolz und seiner Intelligenz. Es ist wie ein perp\u00fcnlicher Angriff. Menschen werden automatisch defensiv und versammeln mentale Argumente, um sich selbst zu sch\u00fctzen. Respekt hingegen \u00f6ffnet die T\u00fcren des Verstandes.\n\n\u25b8 Galileo erkannte vor Jahrhunderten: Man kann einem Menschen nichts beibringen. Man kann ihm nur helfen, es in sich selbst zu finden. Wenn man ihm sagt: \u201cDu hast Unrecht\u201d, schlie\u00dft man diese Innent\u00fcr f\u00fcr immer.\n\n\u25b8 Lord Chesterfield r\u00e4t seinem Sohn: \u201cSei wei\u00dfer als andere Menschen, wenn du kannst, aber sag es ihnen nicht.\u201d Sokrates sagte wiederholt: \u201cIch wei\u00df nur eine Sache, und das ist, dass ich nichts wei\u00df.\u201d Diese Demut \u00f6ffnete die Herzen seiner Sch\u00fcler.\n\nCarnegies Regel: Respekt bricht M\u00e4uern. Angriff baut sie h\u00f6her auf.",
    challenge: "Wenn du heute anderer Meinung bist, sage: \u201cIch sehe das anders \u2014 aber ich kann mich irren. Lass uns das gemeinsam anschauen.\u201d"
  },
  {
    id: 12, part: 3, num: 3,
    title: "If you are wrong, admit it quickly and emphatically.",
    titleDe: "Wenn du Unrecht hast, gib es schnell und nachdr\u00fccklich zu.",
    desc: "Kernidee: Es erfordert gro\u00dfen Mut und Charakter, eigene Fehler schnell und offensiv einzugestehen. Aber dieses schnelle Eingest\u00e4ndnis entwaffnet die Kritik des anderen und verwandelt eine drohende Konfrontation in eine Moment von Ehr und Respekt. Der andere sieht deinen Mut und verzeiht dir.\n\n\u25b8 Wenn du einen Fehler sofort und aufrichtig eingest\u00e4ndnis, \u00e4ndert sich sofort die Energie. Der andere wartet nicht auf Defensy, sondern sieht echte Verantwortung. Ein paar aufrichtige Worte \u201cIch habe mich geirrt, und das tut mir leid\u201d bewirkt mehr als tausend Entschuldigungen verpackt in Ausreden.\n\n\u25b8 Dieses schnelle Gesch\u00e4nde zeigt Charakter und demontiert die Abwehrhaltung des anderen sofort. Es schafft Wahrheit und Vertrauen. Der Gewinn an Vertrauen ist unermesslich.\n\nCarnegies Regel: Ein schnelles Eingest\u00e4ndnis ist eine St\u00e4rke, keine Schw\u00e4che.",
    challenge: "Wenn dir heute ein Fehler auff\u00e4llt \u2014 egal wie klein: gib ihn sofort zu, bevor jemand anderes ihn anspricht. Sei schnell und aufrichtig."
  },
  {
    id: 13, part: 3, num: 4,
    title: "Begin in a friendly way.",
    titleDe: "Beginne freundlich.",
    desc: "Kernidee: Die Sonne bringt den Mantel eines Menschen schneller herunter als der schneidende Wind. Ein freundlicher Ton, ein L\u00e4cheln, ein warmherz betrachtung \u00f6ffnet T\u00fcren, die mit Druck und Kritik f\u00fcr immer verschlossen bleiben. Der Ton setzt die Chemie f\u00fcr das gesamte Gespr\u00e4ch.\n\n\u25b8 Abraham Lincoln betont: Ein Tropfen Honig f\u00e4ngt mehr Fliegen als eine Gallone Galle. Wenn du etwas Schwieriges sagen musst, wenn du Feedback oder Korrektur geben musst, beginne mit echtem Warmherzigkeit, einem echo wahreren Kompliment, oder einfach einem L\u00e4cheln.\n\n\u25b8 Der freundliche Start ver\u00e4ndert die ganze psychologische Dynamik. Der andere f\u00fchlt sich nicht angegriffen, sondern verst\u00e4ndnisvoll betrachtet. Ein freundlicher Einstieg macht Menschen aufmerksam zuh\u00f6ren statt defensiv zu versteifen.\n\nCarnegies Regel: Beginne mit dem Sonnenschein, nicht mit dem Wind.",
    challenge: "Beginne heute jede schwierige Interaktion \u2014 auch mit einer Person, mit der du gekontrahrt bist \u2014 mit einer freundlichen Bemerkung, einem L\u00e4cheln oder einer echten Komplimentation."
  },
  {
    id: 14, part: 3, num: 5,
    title: "Get the other person saying \u201Cyes, yes\u201D immediately.",
    titleDe: "Bringe den anderen dazu, sofort Ja zu sagen.",
    desc: "Kernidee: Sokrates\u2019 Methode war revolutionär: Er stellte Fragen, auf die der andere nur zustimmen konnte, und f\u00fchrte ihn Schritt f\u00fcr Schritt zu seiner Schlussfolgerung. Der andere f\u00fchlt sich nicht manipuliert, sondern selbst denkend. Das ist echte Rhetorik, nicht List.\n\n\u25b8 Wenn du mit Gemeinsamkeiten beginnst, wenn du auf etablierte Wahrheiten hinweist, die der andere nicht leugnen kann, baust du ein Fundament. \u201cWir sind uns einig, dass...?\u201d, \u201cOh ja, keiner w\u00fcrde das bestreiten, oder?\u201d Schritt f\u00fcr Schritt: Ja, ja, ja.\n\n\u25b8 Wenn jemand erst einmal Nein gesagt hat, verlangt sein Stolz danach, dabei zu bleiben. Aber wenn du ihn Ja sagen l\u00e4sst, Schritt f\u00fcr Schritt, kann er schwer pl\u00f6tzlich nein sagen, ohne sich selbst zu verleugnen.\n\nCarnegies Regel: Sokrates gewann ohne zu argumentieren, sondern nur indem er die richtigen Fragen stellte.",
    challenge: "Wenn du heute jemanden \u00fcberzeugen willst: beginne mit zwei bis drei Punkten, bei denen ihr euch einig seid. Baut von dort auf."
  },
  {
    id: 15, part: 3, num: 6,
    title: "Let the other person do a great deal of the talking.",
    titleDe: "Lass den anderen den gr\u00f6\u00dferen Teil des Gespr\u00e4chs f\u00fchren.",
    desc: "Kernidee: Die meisten Menschen versuchen andere zu \u00fcberzeugen, indem sie selbst reden \u2014 aber Menschen lieben es, \u00fcber ihre eigenen Erfolge und Ansichten zu sprechen. Wenn du h\u00f6rst, lernst du nicht nur mehr \u00fcber die andere Person, sondern sie f\u00fchlt sich auch wertgesch\u00e4tzt. Deine Stille wird als Weisheit interpretiert.\n\n\u25b8 Dale Carnegie entdeckte, dass selbst die l\u00e4ngsten Freunde lieber von ihren eigenen Erfolgen h\u00f6ren als von Carnegies. Wenn du einen freund anbietest: \u201cIch h\u00e4tte letzte Woche ein gro\u00dfes Problem\u201d und er antwortet: \u201cJa, aber l\u00f6re mir zu, was mir passiert ist...\u201d, siehst du diesen Drang.\n\n\u25b8 Wer mehr zuh\u00f6rt als spricht, lernt mehr, wird von mehr Menschen gemocht, und ge\u00fcbt mehr Einfluss aus. Deine R\u00e4ckhaltung wird als Kluft gesehen, nicht als Schw\u00e4che.\n\nCarnegies Regel: Wer schweigt, erz\u00e4hlt die wichtigsten Dinge.",
    challenge: "\u00dcbe heute aktiv, dich zur\u00fcckzunehmen. Lass dein Gegen\u00fcber erz\u00e4hlen \u2014 auch wenn du eine Meinung oder eine Geschichte hast, die du teilen willst."
  },
  {
    id: 16, part: 3, num: 7,
    title: "Let the other person feel that the idea is his or hers.",
    titleDe: "Lass den anderen glauben, die Idee sei seine eigene.",
    desc: "Kernidee: Niemand wird gern etwas direkt verkauft oder gezwungen. Wir glauben viel lieber an Ideen, die wir selbst entdeckt oder entwickelt haben. Wenn du geschickt Fragen stellst, f\u00fchrst du den anderen zur gleichen Schlussfolgerung, und dann ist es SEINE Idee, nicht deine. Menschen besch\u00fctzen ihre eigenen Ideen bedingungslos.\n\n\u25b8 Statt deine Idee durchzudr\u00fccken mit \u201cD\u00fc solltest das tun\u201d, stellst du Fragen: \u201cWas denkst du, wenn wir es so machen w\u00fcrden?\u201d oder \u201cW\u00fcrde das nicht besser aussehen?\u201d Der andere kommt zur gleichen Schlussfolgerung, aber es ist jetzt SEINE Idee.\n\n\u25b8 Das macht aus deinem Vorschlag sein Konzept. Menschen k\u00e4mpfen f\u00fcr ihre Ideen wie L\u00f6wen. Die Kunst ist, dein Ziel unsichtbar zu machen und ihn selbst dort ankommen zu lassen.\n\nCarnegies Regel: Sei der Geburtshelfer, nicht der Diktator der Idee.",
    challenge: "Wenn du heute eine Idee einbringen willst: stelle Fragen, die den anderen zur gleichen Erkenntnis f\u00fchren, statt sie direkt zu pr\u00e4sentieren."
  },
  {
    id: 17, part: 3, num: 8,
    title: "Try honestly to see things from the other person\u2019s point of view.",
    titleDe: "Versuche ehrlich, die Dinge aus der Sicht des anderen zu sehen.",
    desc: "Kernidee: Erfolg im Umgang mit Menschen h\u00e4ngt davon ab, die Perspektive des anderen wirklich zu verstehen. Nicht so zu tun, sondern WIRKLICH zu versuchen, die Welt durch seine Augen zu sehen. Abraham Lincoln machte dies zur Kunst und zu seiner gr\u00f6\u00dften St\u00e4rke als F\u00fchter.\n\n\u25b8 Lincoln schrieb in einem Brief: \u201cIch w\u00fcrde genauso empfinden, wenn ich an seiner Stelle w\u00e4re.\u201d Diese Aussage zeigt echte Empathie, nicht Manipulation. Es zeigt, dass er nicht nur die Worte des anderen h\u00f6rt, sondern die zugrunde liegenden \u00c4ngste und Berf\u00fcrfnisse versteht.\n\n\u25b8 Kooperation entsteht, wenn man zeigt, dass man die echten Bed\u00fcrfnisse und \u00c4ngste des anderen versteht \u2014 BEVOR man seine eigenen Bed\u00fcrfnisse vorbringt. Das schafft gegenseitiges Verst\u00e4ndnis, nicht Konflikt.\n\nCarnegies Regel: Verstehe erst, dann verhandele.",
    challenge: "Bevor du heute in einem schwierigen Gespr\u00e4ch antwortest: frage dich bewusst \u2014 wie sieht das aus der Perspektive meines Gegen\u00fcbers aus? Was \u00e4ngstigt ihn wirklich?"
  },
  {
    id: 18, part: 3, num: 9,
    title: "Be sympathetic with the other person\u2019s ideas and desires.",
    titleDe: "Zeige Verst\u00e4ndnis f\u00fcr die Ideen und W\u00fcnsche des anderen.",
    desc: "Kernidee: Der m\u00e4chtigste Satz, der Streit beendet und Wohlwollen erzeugt, ist: \u201cIch verstehe genau, warum du so denkst. An deiner Stelle w\u00fcrde ich genauso empfinden.\u201d Diese Worte senken die Abwehr sofort und machen Menschen aufmerksam zuh\u00f6ren. Es ist nicht Schw\u00e4che; es ist strategische Weisheit.\n\n\u25b8 Wenn Menschen sich wirklich verstanden f\u00fchlen \u2014 nicht kritisiert, nicht geurteilt, sondern VERSTANDEN \u2014 \u00f6ffnen sie sich f\u00fcr neue Perspektiven. Dein Verst\u00e4ndnis ist das Tor zu IHREM Verst\u00e4ndnis. Es schafft einen sicheren Raum, in dem echter Wandel geschehen kann.\n\n\u25b8 Carnegie zeigt: Das Verst\u00e4ndnis muss aufrichtig sein. Menschen riechen Manipulation sofort. Aber wenn es echt ist, wird es zum m\u00e4chtigsten Werkzeug, das du je besessen hast.\n\nCarnegies Regel: Verst\u00e4ndnis ist die Br\u00fccke zu allen anderen M\u00f6glichkeiten.",
    challenge: "Sage heute jemandem aufrichtig: \u201cIch verstehe, warum du so denkst \u2014 an deiner Stelle w\u00fcrde ich genauso empfinden\u201d \u2014 und meine es ehrlich."
  },
  {
    id: 19, part: 3, num: 10,
    title: "Appeal to the nobler motives.",
    titleDe: "Appelliere an die edleren Motive.",
    desc: "Kernidee: Jeder Mensch hat zwei Gr\u00fcnde f\u00fcr sein Handeln: den wahren und einen, der gut klingt. J.P. Morgan erkannte dies und sagte es offen: Ein Mensch hat immer zwei Gr\u00fcnde f\u00fcr das, was er tut. Wenn du jemanden \u00fcberzeugen willst, appelliere nicht an den egoistischen, sondern an den edleren Grund.\n\n\u25b8 Sprich nicht zu seinem Eigennutz \u2014 sprich zu seinem Sinn f\u00fcr Fairness, Gro\u00dfz\u00fcgigkeit und Verantwortung. Menschen respektieren sich selbst mehr, wenn sie auf ihre h\u00f6heren Impulse handeln. Sag: \u201cIch wei\u00df, dass dir deine Ehre wirklich wichtig ist\u201d statt \u201cWenn du das tust, verdienst du mehr Geld.\u201d\n\n\u25b8 Andrew Carnegie verstand: Menschen wollen das Richtige tun, wenn man es ihnen erm\u00f6glicht. Wenn du an ihre Gro\u00dfz\u00fcgigkeit und Integrität appelplierst, statt an ihren Egoismus, gewinnen Sie einen loyalen Verbündeten.\n\nCarnegies Regel: Sprich zu der h\u00f6chstm\u00f6glichen Version von jedem Menschen.",
    challenge: "Wenn du heute jemanden um etwas bittest: appelliere an das Gute in ihm \u2014 an seinen Sinn f\u00fcr Fairness, Gro\u00dfz\u00fcgigkeit oder Verantwortung, nicht an seinen Eigennutz."
  },
  {
    id: 20, part: 3, num: 11,
    title: "Dramatize your ideas.",
    titleDe: "Setze deine Ideen in Szene.",
    desc: "Kernidee: Einfach die Wahrheit zu sagen gen\u00fcgt nicht \u2014 sie muss lebendig, interessant und dramatisch dargestellt werden. Das tun Werbung, Film und Fernsehen meisterhaft. Warum nicht auch du in deinem Alltag? Dramatisierung f\u00e4ngt Aufmerksamkeit und macht Ideen merkw\u00fcrdig.\n\n\u25b8 Ein konkretes Beispiel ist dramatischer als eine abstrakte Aussage. Eine Geschichte ist lebendiger als ein Argument. Ein anschaulicher Vergleich ist unvergesslicher als eine Statistik. Die selbe Idee kann langweilig oder fesselnd sein, je nachdem, wie du sie verpackst.\n\n\u25b8 Carnegie zeigt: Menschen erinnern sich an Geschichten, nicht an Facts. Wenn du eine Wahrheit mit einem Namen, einem Gesicht, einem dramatischen Moment verbindest, wird sie nicht nur verstanden, sondern GEF\u00dcHLT und behalten.\n\nCarnegies Regel: Die beste Idee ist wertlos, wenn sie langweilig pr\u00e4sentiert wird.",
    challenge: "Wenn du heute eine Idee pr\u00e4sentierst: finde einen anschaulichen Vergleich, eine echte Geschichte oder ein einpr\u00e4gsames Bild, das sie lebendig macht."
  },
  {
    id: 21, part: 3, num: 12,
    title: "Throw down a challenge.",
    titleDe: "Fordere heraus.",
    desc: "Kernidee: Der Wunsch, sich zu beweisen und eine Herausforderung anzunehmen, ist einer der st\u00e4rksten Antriebe des menschlichen Lebens. Menschen zeigen Au\u00dfdauer und Kreativit\u00e4t bei einer echten Herausforderung, die Druck und Befehle allein niemals bewirken. Eine Herausforderung respektiert die W\u00fcrde und die Fähigkeit des anderen.\n\n\u25b8 Charles Schwab schrieb einfach eine Zahl auf den Fussboden der Fabrik \u2014 die Produktionsmenge der Tagesschicht. Die Nachtschicht sah dies und wollte sie sofort \u00fcbertreffen. Kein Befehl, keine Bestrafung, nur eine stille Herausforderung an ihren Stolz und ihre Fähigkeit.\n\n\u25b8 Theodore Roosevelt sagte, dass eine geworfene Herausforderung sein ganzes Leben ver\u00e4ndert hatte. Sie zeigte: Ich glaube, du kannst das. Ich sehe dein Potenzial. Komm und beweise es.\n\nCarnegies Regel: Fordere heraus, nicht befiehlt.",
    challenge: "Motiviere heute jemanden nicht durch Druck, sondern durch eine sportliche Herausforderung: \u201cIch wette, du schaffst das\u201d oder \u201cIch bin sicher, dass du das kannst.\u201d"
  },

  /* Part 4 */
  {
    id: 22, part: 4, num: 1,
    title: "Begin with praise and honest appreciation.",
    titleDe: "Beginne mit Lob und aufrichtiger Anerkennung.",
    desc: "Kernidee: Wie ein Zahnarzt mit Novocain beginnt, solltest du mit dem Positiven beginnen, bevor du Kritik \u00e4u\u00dferst. Es ist unendlich leichter, Unangenehmes zu h\u00f6ren, wenn man zuerst f\u00fcr seine St\u00e4rken gelobt wurde. Das Lob \u00f6ffnet das Herz; die Kritik findet dann einen offenen, nicht einen gegen Druck.\n\n\u25b8 Abraham Lincoln schrieb Hocker einen Brief und begann mit echtem Lob: \u201cEinige Dinge bei dir haben meine volle Zustimmung.\u201d Dann, nachdem das Herz gew\u00e4rmt war, erw\u00e4hnte Lincoln vorsichtig die Verbesserungen, die n\u00f6tig waren. Hocker war bereit zu h\u00f6ren.\n\n\u25b8 Das Lob muss aufrichtig sein. Manipulation ist tauglich sofort. Aber wenn es echt ist, wird es zur m\u00e4chtigsten Vorbereitung f\u00fcr Feedback, die es gibt.\n\nCarnegies Regel: Lob \u00f6ffnet T\u00fcren, die Kritik aufer.\u00dfert",
    challenge: "Wenn du heute jemandem Feedback gibst: beginne mit etwas, das du aufrichtig an seiner Arbeit oder seinem Charakter sch\u00e4tzt."
  },
  {
    id: 23, part: 4, num: 2,
    title: "Call attention to people\u2019s mistakes indirectly.",
    titleDe: "Mache auf Fehler indirekt aufmerksam.",
    desc: "Kernidee: Das Wort \u201caber\u201d ist das Todesurteil f\u00fcr Lob. \u201cDu hast gut gearbeitet, aber...\u201d negiert sofort alles Positive, das du gerade gesagt hast. Das Gehirn h\u00f6rt nur noch, was nach \u201caber\u201d kommt. Ersetze \u201caber\u201d durch \u201cund\u201d, und plötzlich wird das Lob bewahrt.\n\n\u25b8 Sag nicht: \u201cDu hast gut gearbeitet, aber du hattest diesen Fehler.\u201d Sag stattdessen: \u201cDu hast gut gearbeitet, und wenn du noch X machst, w\u00e4re es perfekt.\u201d Diese kleine Veränderung des \u201caber\u201d zum \u201cund\u201d bewahrt das Lob und macht den Fehler zu einer M\u00f6glichkeit, nicht zu einem Angriff.\n\n\u25b8 Die indirekte Methode respektiert die W\u00fcrde und die F\u00e4higkeit der Person, das Problem selbst zu sehen. Du suggerierst, statt zu befehlen. Du leitest an, statt zu kritisieren.\n\nCarnegies Regel: Indirekt ist die Kunst der Korrektur.",
    challenge: "Wenn du heute jemanden korrigieren musst: finde einen indirekten Weg. Ersetze jedes \u201caber\u201d durch \u201cund.\u201d"
  },
  {
    id: 24, part: 4, num: 3,
    title: "Talk about your own mistakes before criticizing the other person.",
    titleDe: "Sprich \u00fcber deine eigenen Fehler, bevor du andere kritisierst.",
    desc: "Kernidee: Es ist unendlich leichter, Kritik anzunehmen, wenn der Kritisierende zuerst seine eigenen Schw\u00e4chen und Fehler zugibt. Das zeigt Demut und schafft eine Atmosph\u00e4re der Gleichwertigkeit, nicht der \u00dcberlegenheit. Wenn du zugibst, dass du auch fehlbar bist, wird die Person defensiv entlastet.\n\n\u25b8 Sag nicht: \u201cDu hast das falsch gemacht.\u201d Sag stattdessen: \u201cIch habe vor zwei Monaten den gleichen Fehler gemacht, und ich verstand nicht, warum es falsch war, bis mir mein Chef es erkl\u00e4rte.\u201d Plötzlich ist die Person nicht schlechter als du, sondern auf dem gleichen Weg wie du.\n\n\u25b8 Sie f\u00fchlt sich nicht herabgesetzt oder beurteilt, sondern als Teil einer gemeinsamen menschlichen Erfahrung. Das macht Kritik vertr\u00e4glich und sogar konstruktiv.\n\nCarnegies Regel: Deine Fehler sind Br\u00fccken zu den Fehler anderer.",
    challenge: "Bevor du heute jemanden auf einen Fehler hinweist: erz\u00e4hle zuerst von einem eigenen, \u00e4hnlichen Fehler, den du begangen hast."
  },
  {
    id: 25, part: 4, num: 4,
    title: "Ask questions instead of giving direct orders.",
    titleDe: "Stelle Fragen, statt direkte Anweisungen zu geben.",
    desc: "Kernidee: Statt \u201cTu das!\u201d frage: \u201cWas denkst du, w\u00e4re es sinnvoll, das so zu machen?\u201d Fragen machen Anweisungen ertr\u00e4glich und regen die Kreativit\u00e4t an. Sie geben Menschen das Gef\u00fchl, dass sie eine Wahl haben und Mitsprache haben, obwohl die Entscheidung bereits feststeht.\n\n\u25b8 Owen D. Young, ein gro\u00dfer Gesch\u00e4ftsf\u00fchre, gab nie direkte Befehle. Er stellte Fragen wie: \u201cWie denkst du, sollten wir das anpacken?\u201d Das gibt Menschen das Gef\u00fchl, dass sie denken und entscheiden, nicht nur gehorchen.\n\n\u25b8 Ein Mensch, der seine eigene Entscheidung f\u00e4llt (auch wenn sie gelenkt ist), befolgt sie mit Energie und Elan. Direktbefehle erzeugen nur widerwillige Gehorsamkeit und versteckten Widerstand.\n\nCarnegies Regel: Fragen erm\u00e4chtigen. Befehle unterdacken.",
    challenge: "Formuliere heute jede Anweisung als Frage: \u201cK\u00f6nntest du dir vorstellen...?\u201d oder \u201cWas h\u00e4ltst du davon, wenn wir...?\u201d"
  },
  {
    id: 26, part: 4, num: 5,
    title: "Let the other person save face.",
    titleDe: "Wahre das Gesicht des anderen.",
    desc: "Kernidee: Selbst wenn du recht hast \u2014 lass den anderen sein Gesicht wahren. Der franz\u00f6sische Schriftsteller und Pilot Antoine de Saint-Exup\u00e9ry schrieb: \u201cIch habe kein Recht, etwas zu sagen oder zu tun, das einen Menschen in seinen eigenen Augen herabsetzt.\u201d Was z\u00e4hlt, ist nicht, was du von ihm denkst, sondern was ER von sich selbst denkt.\n\n\u25b8 Wenn du jemanden bl\u00f6dstellst, wenn du ihn vor anderen blo\u00dfstellst, sch\u00e4digst du seine Selbstachtung dauerhaft. Sogar bei Fehler k\u00f6nnen Menschen Ehre behalten, wenn du den Weg geschickt w\u00e4hlst. Eine private Unterhaltung statt \u00f6ffentlicher Beschämung. Ein sanfter Hinweis statt harte Ankl\u00e4ge.\n\n\u25b8 Carnegie zeigt: Die Person wird dir danken, nicht f\u00fcr deine Nachsicht in diesem Moment, sondern f\u00fcr die Respekt, die du ihr \u00fcber lange Zeit hinweg zeigst.\n\nCarnegies Regel: Respekt ist dauerhafter als Recht-haben.",
    challenge: "Wenn heute jemand einen Fehler macht: finde einen Weg, die Situation aufzul\u00f6sen, ohne ihn vor anderen blo\u00dfzustellen. Gib ihm einen Weg heraus mit seiner W\u00fcrde intact."
  },
  {
    id: 27, part: 4, num: 6,
    title: "Praise the slightest improvement and praise every improvement.",
    titleDe: "Lobe die kleinste Verbesserung und jede Verbesserung.",
    desc: "Kernidee: Sei herzlich in deiner Anerkennung und verschwenderisch mit deinem Lob. Wenn Kritik reduziert und Lob verst\u00e4rkt wird, bl\u00fchen die guten Dinge auf und die schlechten verk\u00fcmmern aus Mangel an Aufmerksamkeit. Jede kleine Verbesserung anzuerkennen ist wie Treibstoff f\u00fcr die Entwicklung.\n\n\u25b8 Pete Barlow trainierte Hunde f\u00fcr sein Zirkusprogramm. In dem Moment, in dem ein Hund die geringste Verbesserung zeigte, lobte er den Hund, gab ihm Fleisch und machte eine gro\u00dfe Sache daraus. Der Hund entwickelte sich schnell, weil jede kleine Verbesserung bemerkt und gew\u00fcrdigt wurde.\n\n\u25b8 Die gleiche Psychologie gilt f\u00fcr Menschen. Ein Mensch, der f\u00fcr jede kleine Verbesserung gelobt wird, entwickelt Momentum. Das Lob ist Treibstoff, und die Verbesserung wird schneller und schneller.\n\nCarnegies Regel: Lob f\u00f6rdert Wachstum schneller als alles andere.",
    challenge: "Bemerke heute eine kleine Verbesserung bei jemandem \u2014 und lobe sie sofort, konkret und herzlich. Nicht sp\u00e4ter, sondern jetzt."
  },
  {
    id: 28, part: 4, num: 7,
    title: "Give the other person a fine reputation to live up to.",
    titleDe: "Gib dem anderen einen guten Ruf, dem er gerecht werden kann.",
    desc: "Kernidee: Wenn du willst, dass jemand eine bestimmte Eigenschaft entwickelt, tue so, als bes\u00e4\u00dfe er sie bereits. William Shakespeare schrieb: \u201cNimm die Tugend an, auch wenn du sie nicht hast.\u201d Menschen streben danach, dem Ruf gerecht zu werden, den sie von uns bekommen. Wenn du einen guten Ruf gibst, werden sie ihn mit Energie sch\u00fctzen und erf\u00fcllen.\n\n\u25b8 Sag nicht: \u201cDu bist unzuverl\u00e4ssig.\u201d Sag stattdessen: \u201cIch sehe eine gro\u00dfe Zuverl\u00e4ssigkeit in dir. Ich vertraue dir, das richtig zu machen.\u201d Die Person wird diese Zuverl\u00e4ssigkeit besch\u00fctzen wie einen kostbaren Schatz, weil du sie darin siehst.\n\n\u25b8 Das ist nicht Manipulation oder Schmeichelei; es ist psychologische Weisheit. Du schaffst einen positiven Feedback-Loop, in dem die Person zum Menschen wird, den du in ihr siehst.\n\nCarnegies Regel: Der Ruf, den du jemandem gibst, ist oft der Ruf, den er annimmt.",
    challenge: "Sage heute jemandem, welche St\u00e4rke oder Eigenschaft du in ihm siehst \u2014 auch wenn er sie selbst noch nicht vollst\u00e4ndig erkennt. Gib ihm einen guten Ruf zum Leben."
  },
  {
    id: 29, part: 4, num: 8,
    title: "Use encouragement. Make the fault seem easy to correct.",
    titleDe: "Ermutige. Lass den Fehler leicht korrigierbar erscheinen.",
    desc: "Kernidee: Wenn du jemandem sagst, \u201eDu hast kein Talent f\u00fcr das\u201d, nimmst du ihm jede Motivation. Sage stattdessen, dass der Fehler leicht zu beheben ist \u2014 und er wird die ganze Nacht \u00fcben, um sich zu verbessern. Ermuterung schafft Hoffnung. Ein Mensch, der glaubt, dass Verbesserung m\u00f6glich und einfach ist, wird handeln.\n\n\u25b8 Statt \u201cDas ist f\u00fcr dich zu schwierig\u201d, sag \u201cDu bist fast da, nur dieser eine Punkt noch, und das ist leicht zu beheben.\u201d Diese Worte verwandeln Ablehnung in Aktion. Hoffnung ist ansteckender als Verzweiflung.\n\n\u25b8 Carnegie zeigt: Die richtige Ermuterung in dem richtigen Moment kann ein Leben ver\u00e4ndern. Sie kann jemanden von Verzweiflung zu Ausdauer f\u00fchren.\n\nCarnegies Regel: Ermuterung ist das Gegengift zu Verzweiflung.",
    challenge: "Wenn du heute jemanden korrigierst: betone, wie leicht die Korrektur ist. Sag: \u201cDu bist schon fast da, nur dieser eine Punkt noch.\u201d"
  },
  {
    id: 30, part: 4, num: 9,
    title: "Make the other person happy about doing the thing you suggest.",
    titleDe: "Sorge daf\u00fcr, dass der andere sich freut, das zu tun, was du vorschl\u00e4gst.",
    desc: "Kernidee: Ein guter F\u00fchrender denkt zuerst: Stimmt der Vorschlag mit den tiefen Bed\u00fcrfnissen und W\u00fcnschen des anderen \u00fcberein? Was hat der andere davon? Wird er sich freuen, es zu tun? Die besten F\u00fchrkr\u00e4fte machen die W\u00fcnsche des Unternehmens zu den W\u00fcnschen des Einzelnen.\n\n\u25b8 Sie zeigen nicht nur auf, was getan werden muss, sondern warum es f\u00fcr DEN ANDEREN vorteilhaft ist. Sie verbinden den Job mit seinem Traum, seinen Zielen, seinen Wertvorstellungen. So entsteht echte Motivation aus innerer Zustimmung, nicht aus \u00e4u\u00dferen Druck oder Pflicht.\n\n\u25b8 Ein Mensch, der sich freut, etwas zu tun, wird es mit Leidenschaft und Kreativit\u00e4t tun. Ein Mensch, der gezwungen wird, wird es nur tun, wenn du weg bist, und nur so viel wie n\u00f6tig.\n\nCarnegies Regel: Die beste F\u00fchrkraft ist die, die die Arbeit des Unternehmens zur Freude des Menschen macht.",
    challenge: "Wenn du heute jemanden um etwas bittest: \u00fcberlege, wie du die Aufgabe so formulierst, dass sie f\u00fcr den anderen attraktiv wird. Wie hilft dies HIM errei- sein Ziele?"
  }
];
