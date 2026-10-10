# GRIFFNER Design System

GRIFFNER, Architektur und Holzbau aus Griffen, Kärnten, seit 1950. Eigentümer und CEO: Thomas Scheriau. GRIFFNER ist kein Fertighausanbieter mehr: Die Marke tritt auf wie ein internationales Architektur- und Designstudio mit eigener Fertigung in Griffen und eigenen Leuten auf der Baustelle. Keine Hausmodelle, keine Produktlinien.

**Kern:** Die Freiheit eines Architekten. Die Sicherheit eines Herstellers. Wir denken Architektur und Bauen als eins.

**Markenordnung (vier Ebenen, eine Geschichte)**
1. Haltung: **built different** (nur als gezeichnete Datei, klein, gedrehte ff, nie getippt, nie versal)
2. Versprechen: **HAUSBAU GEHT BESSER.**
3. Beweis: BESSER PLANEN. BESSER BAUEN. BESSER LEBEN. / DESIGN. ENGINEER. MAKE. BUILD.
4. Welt: DIFFERENT IDEAS OF LIVING. (Concepts nach Orten benannt, Projects = gebaute Häuser)

**Oberflächen:** Website griffner.com (Relaunch 23.10.2026, sechs Kapitel bis 26.11.), Präsentationen (Style Book als Folien), Drucksorten, Kampagne, Social, Messe, Fahrzeug, Baustelle.

## Quellen
Übergabepaket `GRIFFNER_Uebergabe/` (lokal angehängt, read-only):
- `GRIFFNER Style Book v6.dc.html` (34 Folien, 1920×1080), verbindliche Referenz
- `GRIFFNER Logo Regeln.md` (beschlossen 24.09.2026, Nachtrag 04.10.2026)
- `PROJEKTWISSEN.md` (Agenturpräsentation, Website-Briefing, Sprachregeln), `README.md`, `logo/README.txt`, `GRIFFNER_Brand_Assets/LIESMICH.txt`
- `ref/agentur/` Agenturpräsentation `260327_Gartenhaus_5_V2.pdf` als Seitenbilder (PDF selbst nicht im Paket), `ref/moods/`, `assets/v5/`
- `_ds/` und Teile von `_ds/…/tokens` sind das **alte** System (Cako, Neue Einstellung, #FFB530, Fast-Schwarz). Nicht verwenden.

Der Auftrag: Vorlagen sind Vorschläge. Fest sind Logo, Schriften und Claim. Alles andere wird zu einem mutigen, hochwertigen, erwachsenen Auftritt optimiert.

---

## CONTENT FUNDAMENTALS

**Sprache.** Deutsch führt, Englisch nur für Statements (etwa 80 zu 20). Deutsch erklärt, Englisch setzt Statements: „Freedom in the idea.“, „Yellow is a decision.“, „People before floorplans.“, „Feel the house.“

**Anrede.** Du-Form, immer. „Wir glauben nicht an den perfekten Grundriss. Wir glauben an den richtigen für dich.“ GRIFFNER spricht als „wir“.

**Ton.** Ruhig im Ton, mutig in der Idee. Feststellen statt beschreiben. Weniger Adjektive, mehr Warum. Wir dürfen widersprechen und Nein sagen.
- Nicht: ~~Innovative Premiumqualität auf höchstem Niveau.~~ So: „Wir fertigen selbst. Weil wir Verantwortung nicht an der Werkstür abgeben.“
- Nicht: ~~Entdecken Sie Ihr individuelles Traumhaus.~~ So: „Es gibt kein GRIFFNER Haus. Jedes antwortet auf seinen Ort.“

**Verboten.** Keine Gedankenstriche, keine Ausrufezeichen, **nie das Wort Fertighaus** (immer Haus, Architektur, Holzbau). „Serienmäßig“ statt „Standard“. Kein Emoji. Keine Sektionsnummern wie „02 Haltung“ auf der Website (in Folien ist die Kopfzeile erlaubt).

**Schreibweise.** Headlines versal (per CSS) und enden mit Punkt: „HAUSBAU GEHT BESSER.“ Fließtext in Satzschreibung. Infoebene versal, gesperrt, Schrägstrich als Trenner: „PROJEKT 336 / GRIFFEN / AT“. GRIFFNER immer in Versalien. Der Claim „built different“ klein und nur als Grafik.

**Rote Linie jeder Seite.** Was gilt als normal? Was machen wir anders? Was hast du davon? „Different“ nur mit konkretem Beweis direkt darunter, höchstens einmal pro Screen. Ein Haus wird erzählt wie eine Architekturgeschichte: Emotion → Idee → Architektur → Information, nie Modell → m² → Grundriss → Preis. Jede Website-Seite endet mit „HAUSBAU GEHT BESSER. LASS ES UNS ZEIGEN.“, Claim klein als Absender, Button „Projekt starten“.

**Der built different Test.** Könnte das genauso von jemand anderem stammen? Ist es anders, weil es besser ist, oder nur anders? Würde es auch ohne Logo nach GRIFFNER aussehen? „If not, it’s not finished.“

---

## VISUAL FOUNDATIONS

**Farbe.** Primär: Schwarz #000000 (der Grund), GRIFFNER Gelb #FFB200 (Feld, Connector, Stage, Notiz), Weiß #FFFFFF (Schrift und Ruhe). Sekundär aus dem Material, nur Flächen: Anthrazit #444442, Sand #CFC3B3, Salbei #8B907C, Kalk #CACACA, Kupfer #887254 (Verlauf nur digital). Mengen: Schwarz trägt, Gelb markiert, Weiß ordnet, Material beruhigt. Gelb höchstens ein Zehntel. Dunkler Klang ist der Normalfall; heller Klang (`.gri-hell`) für Drucksorten, Beratung, Dokumente.

**Materialklang.** Schwarz, Weiß und Gelb bleiben primär und tragen den Auftritt. Sekundärfarben setzen gezielt Akzente als volle Flächen, höchstens eine bis zwei pro Seite oder Deck (Richtwert: zwei von acht Folien, eine Sektion pro Website-Seite), nie dominant. Einsatz: ganze Website-Sektionen, Kapitel- und Zahlenfolien, Social Posts, Rückseiten. Scopes `.gri-anthrazit`, `.gri-sand`, `.gri-salbei`, `.gri-kalk` schalten die semantischen Tokens um (Text Schwarz auf Sand/Salbei/Kalk, Weiß auf Anthrazit). Rhythmus: Schwarz eröffnet und schließt, dazwischen wechseln Flächen, nie zwei gleiche nebeneinander. Rollen: Anthrazit für Zahlen, Fertigung, Abend. Sand für Beratung, Material, Zitate. Salbei für Ort, Landschaft, Kapitel. Kalk für Fakten, Plan, Dokumente. Das Logo mit Feld steht auf allen vier (Wortmarke schwarz auf hellen, weiß auf Anthrazit). Kein zweites Gelb, kein gelber Cursor, kein Rot. Fehler werden in Worten gesagt.

**Typografie.** Nur Ofelia Display und Ofelia Text, keine zweite Familie. Statement und Headline sind eine Stimme: Die Stärke folgt der Größe. Große Headlines ab ca. 56 px in Display Light, eine pro Screen oder Folie. Darunter (Zwischentitel, Kacheln, Formulare) Display Medium. Headline groß: Display Light, Leading 95, Laufweite 0. Headline klein: Display Medium, Tracking 40, Leading 105. Beide versal, mit Punkt. Dazu das Signalwort (Display Light, ein Wort von Rand zu Rand, weit gesperrt oder per `textLength`). Kein Bold in Headlines, nie zwei Stärken in einer Zeile. Subheading Text Semibold, Leading 130. Fließtext Text Regular/Medium, Leading 145, Betonung Semibold/Bold. Infoebene Text Medium versal, Tracking 80, tabellarische Ziffern. Die ff-Ligatur ist Markendetail (im Claim gezeichnet; im Satz `liga` an, in Versal-Headlines aus).

**Layout.** Eine Sache groß, alles andere ruhig. Zwölf Spalten, Rand ein Zwölftel der kurzen Formatseite (Folie 1920: 80 px, Web `--page-margin`). Mindestens ein Drittel jeder Fläche bleibt leer. Asymmetrie: große Headline links, Erklärung schmal rechts. Feste Elemente: in Folien Kopfzeile (Kapitel links, Seitenzahl rechts, 24 px, Tracking 200) und Logo unten rechts; auf der Website nur die Kopfzeile im ersten Screen.

**Form.** Rechtwinklig. Radius 0, keine Schatten, keine Rahmen, keine Verläufe (Ausnahme: Bildschutz `--bildschutz` und Kupfer digital). Kanten statt Kästen: Struktur entsteht durch 1 px Haarlinien (Anthrazit auf Schwarz, Kalk auf Weiß) als Ober- oder Unterkante, Tonflächen und Raster mit 1 px Fuge. Cards sind keine Boxen: Bild randscharf, darunter Infoebene und Name.

**Hierarchie der Zeichen (beschlossen 10/2026).** Primär ist immer das **Logo mit gelbem Feld**: Es steht in jedem Format (jede Folie, jeder Post, jeder erste Screen), damit Wiedererkennung entsteht. Einzige Ausnahme: die große gelbe Wortmarke auf Schwarz als Auffall-Format. Sekundär sind Wortmarke allein, Connector und Stage. Pro Format höchstens ein sekundäres Gelb (Connector, Stage oder Notiz) neben dem Logo, räumlich klar getrennt.

**Das gelbe Rechteck, Rollen.** Feld (im Logo, nie angeschnitten, primär). Connector (5:4, auf der Kante Bild/Fläche, halb 50 % über dem Bild, halb voll auf der Fläche, 1/12 bis 1/5 der Formatbreite, nie in der Ecke). Stage (groß, trägt eine Botschaft, darf an zwei Kanten anschneiden). Notiz (4 px gelbe Unterstreichung oder ein gelbes Wort).

**Claim.** built different steht nie unter oder neben Logo oder Wortmarke. Er bekommt eine eigene Position im Format, klar getrennt vom Logo. Keine Signatur-Kombination Wortmarke + Claim.

**Hintergründe.** Vollflächige Fotografie oder Schwarz. Wo kein Bild ist: das Muster (Viertelkreis = Türschwenk, Halbkreis = Öffnung, Kreis = Stütze) im Quadratraster, Schwarz auf Anthrazit, hell Weiß auf Kalk, höchstens fünf Module pro Breite, am Rand angeschnitten. Keine Texturen, keine Illustrationen.

**Fotografie.** Echte GRIFFNER Häuser, natürliches Licht, Haus in Landschaft. Sechs Welten: Architektur, Atmosphäre, Material, Leben, Fertigung, Bauen. Kühl bis neutral, dunkel gestimmt, Blaue Stunde, Nebel, Regen, Schnee erwünscht. Material so nah, dass es fast abstrakt wird. Menschen beobachtet, nicht inszeniert, niemand lächelt in die Kamera. Handskizzen immer als Paar mit dem gebauten Haus (Skizze graustufig, multipliziert auf Weiß). Bildlabels als schwarze Marke unten links.

**Bewegung.** Ruhig: Blenden und sanftes Steigen (16 px, 720 ms, `cubic-bezier(.2,.7,.2,1)`). Kein Federn, keine Laufbänder, keine dekorativen Loops. Starke Effekte nur, wenn sie etwas über Architektur, Licht, Material oder Bauen erzählen.

**Zustände.** Hover: Tonverschiebung (Primärbutton Weiß → Kalk), Links/Navigation Deckkraft .64, Bilder zoomen langsam 3 %, Line-Button verkürzt seine Linie. Press: 1 px Absenken, kein Skalieren. Focus: 1 px Linie in Textfarbe, 4 px Abstand. Transparenz nur im Connector (50 %) und im Bildschutz. Kein Blur.

---

## ICONOGRAPHY

GRIFFNER verwendet **keine Icons und kein Emoji**. Bedeutung tragen Typografie, das gelbe Rechteck, das Muster und das Foto. Es gibt kein Icon-Font, kein Sprite, keine SVG-Iconsammlung im Paket.
- Erlaubte Zeichen kommen aus Ofelia selbst: Pfeil → (Button, Abfolgen „Emotion → Idee“), ↗ (Agentur-Specimen), × als Gegensatzzeichen („Frei × Präzise“), Schrägstrich / als Trenner, № und Ziffern tabellarisch.
- Checkbox/Radio sind Quadrat und Kreis aus Haarlinie (Kreis = Stütze aus dem Grundriss), keine Haken-Icons.
- Grundrissartige Zeichnungen (Plan mit Bemaßung, Türschwenk) sind im Style Book als Skizzen erlaubt; echte Architektenskizzen stehen noch aus.

## Logo und Zeichen (Kurzfassung)
Das Logo mit Feld ist das Primärlogo und steht in jedem Format. Feld 5:4, Wortmarke im Hausschnitt (Ofelia Display Medium + 6,13 Kontur, in Pfade, nicht gesperrt) gleich breit, Abstand 0,078 B, Schutzraum eine Versalhöhe (0,122 B). Min. 64 px / 16 mm, Wortmarke 90 px / 24 mm. Schwarz ist Primärgrund (Wortmarke weiß = Hauptfassung). Auf Gelb kein Feld, nur Wortmarke schwarz. Claim nie am Logo. Nie randlos, nie Platte, nie verzerrt, gedreht, gesperrt, nachgesetzt. Wortmarke in Gelb ist auf Schwarz oder sehr dunklem Grund erlaubt, vor allem wo wir auffallen wollen (Kampagne, Social, Messe, Baustelle, Stick). Sie ersetzt dann das Logo im Format, nie beides zusammen. Nie auf hellem Grund. Details: `GRIFFNER Logo Regeln.md` im Quellpaket.

---

## Index

**Root:** `styles.css` (nur @imports) · `readme.md` · `SKILL.md` · `thumbnail.html`
- `tokens/` fonts.css (24 @font-face), colors.css, typography.css, layout.css, base.css (Element-Defaults, Hover/Focus-Zustände, Keyframes)
- `fonts/` Ofelia Display (14) und Ofelia Text (10), OTF
- `assets/logo/` Logo (dunkel/hell/weiss/schwarz), Wortmarke (weiss/schwarz/gelb), Claim, Signatur, Nachzeichnung · `assets/connector/` Connector-Dateien · `assets/photos/` Bildbibliothek v5 + Skizze
- `guidelines/` Foundation-Karten (Colors, Type, Spacing, Brand)
- `components/` React-Primitive (siehe unten), je Ordner eine Karte
- `ui_kits/website/` griffner.com Click-through (Start, Architektur, Projekt, Hausbau geht besser, Projekt starten)
- `templates/` praesentation (Deck 1920×1080, Materialklang), social (4 Posts 1080×1350), drucksorten (Visitenkarte, Briefbogen A4)
- `slides/` Folientypen 1920×1080 (Cover, Statement, Signalwort, Connector, Fakten, Bildwelt, Versprechen, Stage, Schluss)
- `_ref/` Referenzbilder aus dem Paket (Agentur-Kontaktabzug u. a.), nicht ausliefern

## Components
- **brand/**: Logo, Wordmark, Claim, Connector, ConnectorSplit, Stage, Pattern
- **type/**: Headline, InfoLine, Notiz
- **actions/**: Button
- **forms/**: TextField, Select, Checkbox, ChoiceGroup
- **content/**: FactTable, ImageFrame, ProjectCard, StrikeList, RuleList, Comparison (Üblich / Bei GRIFFNER / Beweis; Inhalte aus guidelines/beweise.md)
- **navigation/**: SiteHeader, Closer, SiteFooter

### Intentional additions
Das Paket definiert kein Komponenteninventar (keine Website-Codebasis). Die Markenelemente (Logo, Wortmarke, Claim, Connector, Stage, Notiz, Muster, Signalwort, Infoebene, Faktentabelle, durchgestrichene Konvention, nummerierte Regelliste, Bildlabel) stammen aus dem Style Book v6. Neu ergänzt für die Website: Button, TextField, Select, Checkbox, ChoiceGroup (Projekt starten), ProjectCard (Concepts/Projects), SiteHeader (Menü laut Briefing), Closer (Pflichtabschluss laut Briefing), SiteFooter.

## Offen
Echte Architektenskizzen, Fotos Menschen, Fertigung, Montage, weitere Haustypen (Satteldach, kompakt urban), Pantone/RAL am Andruck, Favicon/App-Symbol (Wortmarke bei 16–32 px nicht lesbar), Logo auf Sand, Salbei, Kalk: Logo-Regeln 24.09. erlaubten dort nur die Wortmarke; mit der Primärlogo-Regel steht jetzt das Logo mit Feld (Agentur-Folie 8 zeigt das ebenso), bitte bestätigen. Telefonnummer und Namen in den Drucksorten sind Platzhalter.
