/* griffner.com Startseite, alle Texte und Bildzuordnungen an einer Stelle (CMS-Quelle).
   Copy wörtlich aus dem Briefing vom 06.10.2026. Platzhalter stehen in eckigen Klammern. */
window.GRIFFNER_CONTENT = {
  header: { menu: 'Menü', close: 'Schließen', cta: 'Projekt starten', ctaHref: '#kontakt' },

  menu: {
    comingPrefix: 'Coming',
    comingHover: 'Dieses Kapitel öffnet am {date}.',
    links: [['News', 'GRIFFNER News.dc.html'], ['Kontakt', 'GRIFFNER Kontakt.dc.html'], ['Careers', 'GRIFFNER%20Karriere.dc.html'], ['Presse', 'GRIFFNER News.dc.html#presse']],
    place: '',
    items: [
      { label: 'Projects', opens: '2026-10-29', date: '29.10.', href: '#proj', img: 'assets/photos/haus-wald.jpg', imgLabel: 'Projects', sub: 'Gebaute Häuser' },
      { label: 'Concepts', opens: '2026-11-05', date: '05.11.', href: '#ideas', img: 'assets/photos/wald-fassade.jpg', imgLabel: 'Concepts', sub: 'Entwürfe zum Weiterdenken' },
      { label: 'Services', opens: '2026-11-12', date: '12.11.', href: '#weg', img: 'assets/photos/weiss-detail.jpg', imgLabel: 'Services', sub: 'Was alles dabei ist, zum Festpreis' },
      { label: 'Journey', opens: '2026-11-19', date: '19.11.', href: '#weg', img: 'assets/photos/strasse-003.jpg', imgLabel: 'Journey', sub: 'Dein Weg zum Haus' },
      { label: 'About', opens: null, href: 'GRIFFNER Ueber GRIFFNER.dc.html', img: 'assets/photos/wohnen-dunkel.jpg', imgLabel: 'About', sub: 'Architekturbüro und Bauunternehmen' },
      { label: 'Visit', opens: null, href: 'GRIFFNER Kontakt.dc.html#orte', img: 'assets/photos/daemmerung-garten.jpg', imgLabel: 'Visit', sub: 'Musterhäuser und Events' }
    ]
  },

  kapitel: {
    head: 'The new GRIFFNER. In sechs Kapiteln.',
    sub: 'Jede Woche öffnet sich eine neue Tür. Bis 26. November zeigen wir Kapitel für Kapitel, was bei GRIFFNER anders ist.',
    coming: 'Coming {date}', now: 'Jetzt offen', open: 'Offen', first: 'The new GRIFFNER'
  },

  season: {
    bar: 'Kapitel {nr} / 06',
    next: 'Nächstes: {title} {date}',
    remind: 'Erinnere mich',
    reminded: 'Vorgemerkt',
    open: 'Ansehen',
    close: 'Schließen',
    hideAfter: '2026-11-26',
    chapters: [
      { nr: '01', iso: '2026-10-23', date: '23.10.', title: 'built different', claim: true, question: 'Wofür steht GRIFFNER?', href: '#top', teaser: 'assets/photos/sonne.jpg' },
      { nr: '02', iso: '2026-10-29', date: '29.10.', title: 'Different Projects', question: 'Wie sieht das gebaut aus?', href: '#proj', teaser: 'assets/photos/haus-wald.jpg', inside: ['Project / Floating House', 'Project / [Ortsname]', 'Project / [Ortsname]'] },
      { nr: '03', iso: '2026-11-05', date: '05.11.', title: 'Different Concepts', question: 'Wie sieht diese Haltung als Haus aus?', href: '#ideas', teaser: 'assets/photos/wald-fassade.jpg', inside: ['Concept / [Ortsname]', 'Concept / [Ortsname]'] },
      { nr: '04', iso: '2026-11-12', date: '12.11.', title: 'Different Services', question: 'Was ist von Anfang an dabei?', href: '#weg', teaser: 'assets/photos/weiss-detail.jpg', inside: ['Serienmäßig / Wand', 'Material / Detail'] },
      { nr: '05', iso: '2026-11-19', date: '19.11.', title: 'Different Process', question: 'Wie viel Zeit kostet dich dein Haus?', href: '#weg', teaser: 'assets/photos/strasse-003.jpg', inside: ['Leben / zwei Wochen', 'Bauen / Ablauf'] },
      { nr: '06', iso: '2026-11-26', date: '26.11.', title: 'Different Minds', question: 'Wer macht das möglich?', href: '#gregor', teaser: 'assets/photos/wohnen-dunkel.jpg', inside: ['Fertigung / Menschen', 'Bauen / Team'] }
    ]
  },

  preloader: { line1: 'Alle drehen sich im Kreis.', line2: 'Wir nicht.' },

  hero: {
    statement: 'Hausbau geht besser.',
    text: 'Wir planen, fertigen und bauen Häuser, die aus deinem Leben entstehen.',
    img: 'assets/photos/sonne.jpg',
    imgLabel: 'Bild / Bewohnter Raum im Morgenlicht, Blick nach draußen'
  },

  positionierung: {
    intro: 'Bisher musstest du dich entscheiden.',
    a: 'Die Freiheit eines Architekten',
    or: 'Oder',
    and: 'Und',
    b: 'Die Sicherheit eines Herstellers',
    head: 'Wir denken Architektur und Bauen als eins.',
    text: 'GRIFFNER ist ein Architektur- und Bauunternehmen. Wir entwickeln individuelle Häuser und verbinden vom ersten Gedanken an Architektur, Planung, eigene Fertigung und Bau.',
    link: 'Über GRIFFNER',
    href: '#gregor'
  },

  position: {
    p1: 'Bisher musstest du dich entscheiden.',
    topInfo: 'Der Architekt', topHead: 'Frei geplant.',
    bottomInfo: 'Das Hausmodell', bottomHead: 'Sicher kalkuliert.',
    weak: [
      { side: 'top', text: 'Was es kostet, zeigt sich oft erst auf der Baustelle.' },
      { side: 'top', text: 'Gebaut wird von anderen. Du vermittelst dazwischen.' },
      { side: 'bottom', text: 'Frei ist nur, was im Katalog steht. Jede Abweichung kostet extra.' },
      { side: 'bottom', text: 'Dein Haus hat eine Nummer.' }
    ],
    trades: ['Statik', 'Bauphysik', 'Haustechnik', 'Zimmerei', 'Elektrik', 'Installation'],
    surcharge: 'Aufpreis',
    between: 'Was wäre, wenn jemand beides zusammenhält?',
    statement: ['Die Freiheit eines Architekten.', 'Die Sicherheit eines Herstellers.'],
    infoTop: '50 % / Die Idee / Deine Vorstellung vom Leben.',
    infoBottom: '100 % / Das Haus / Geplant, gefertigt, gebaut.',
    infoMid: 'GRIFFNER',
    head: 'Was die Branche trennt, verbinden wir.',
    text: 'Bei GRIFFNER sitzen Architekten, Ingenieure, Werk und Baustelle an einem Tisch. Darum bleibt die Idee frei und die Umsetzung sicher.',
    facts: [['Entwurf', 'Frei'], ['Kosten', 'Von Anfang an klar'], ['Gebaut', 'Von uns'], ['Name', 'Haus am Hang']],
    end: 'Wir denken weiter. Und bauen es.',
    photo: 'assets/photos/weiss-abend.jpg',
    photoLabel: 'Bild / Gebautes Haus zur Skizze',
    sketch: 'assets/photos/skizze.png'
  },

  news: {
    head: 'Neues aus Griffen.', sub: 'Was gerade bei GRIFFNER passiert: Projekte, Menschen, Termine.',
    link: 'Alle News', href: 'GRIFFNER%20News.dc.html',
    items: [
      { title: 'GRIFFNER unterstützt Charity-Golfturnier', date: '19.08.2026', img: 'https://griffner.com/wp-content/uploads/2026/08/charity-golfturnier1.png', href: 'https://griffner.com/griffner-unterstuetzt-charity-golfturnier/' },
      { title: 'Neue Kampagne: Hausbau geht besser', date: '12.08.2026', img: 'https://griffner.com/wp-content/uploads/2026/08/hausbau-geht-besser_kampagne-scaled.jpg', href: 'https://griffner.com/neue-kampagne-hausbau-geht-besser/' },
      { title: 'Blick hinter die Fassaden am 03.07.2026', date: '08.07.2026', img: 'https://griffner.com/wp-content/uploads/2026/07/blick-hinter-die-fassaden-030726_01.jpg', href: 'https://griffner.com/blick-hinter-die-fassaden-am-03-07-2026/' }
    ]
  },

  newsPage: {
    "info": "News",
    "head": "Neues aus Griffen.",
    "text": "Was gerade bei GRIFFNER passiert: Projekte, Menschen, Termine.",
    "filters": [
      "News",
      "Projekte",
      "Auszeichnungen",
      "Einblicke",
      "Presse"
    ],
    "items": [
      {
        "slug": "griffner-unterstuetzt-charity-golfturnier",
        "title": "GRIFFNER unterstützt Charity-Golfturnier",
        "date": "19.08.2026",
        "cat": "Einblicke",
        "img": "https://griffner.com/wp-content/uploads/2026/08/charity-golfturnier1.png",
        "teaser": "Beim Charity-Golfturnier im Golfclub Thalersee in Graz ging der gesamte Erlös an TOR.CHANCE, den Verein von Fußballprofi Michael Gregoritsch.",
        "src": "https://griffner.com/griffner-unterstuetzt-charity-golfturnier/"
      },
      {
        "slug": "neue-kampagne-hausbau-geht-besser",
        "title": "Neue Kampagne: Hausbau geht besser",
        "date": "12.08.2026",
        "cat": "News",
        "img": "https://griffner.com/wp-content/uploads/2026/08/hausbau-geht-besser_kampagne-scaled.jpg",
        "teaser": "Mit unserer neuen Kampagne zeigen wir, wie wir Hausbau bei GRIFFNER neu denken: besser planen, besser bauen, besser leben.",
        "src": "https://griffner.com/neue-kampagne-hausbau-geht-besser/"
      },
      {
        "slug": "blick-hinter-die-fassaden-am-03-07-2026",
        "title": "Blick hinter die Fassaden am 03.07.2026",
        "date": "08.07.2026",
        "cat": "Einblicke",
        "img": "https://griffner.com/wp-content/uploads/2026/07/blick-hinter-die-fassaden-030726_01.jpg",
        "teaser": "Am 3. Juli haben wir erneut die Türen zum GRIFFNER Campus geöffnet und gezeigt, wie ein GRIFFNER Haus entsteht.",
        "src": "https://griffner.com/blick-hinter-die-fassaden-am-03-07-2026/"
      },
      {
        "slug": "erste-town-hall-bei-griffner",
        "title": "Erste Town Hall bei GRIFFNER",
        "date": "08.07.2026",
        "cat": "Einblicke",
        "img": "https://griffner.com/wp-content/uploads/2026/07/griffner-town-hall-030726_01.png",
        "teaser": "Ein neues internes Format: Einmal im Monat kommt das ganze Unternehmen zusammen, um Themen zu teilen und auf die nächsten Schritte zu blicken.",
        "src": "https://griffner.com/erste-town-hall-bei-griffner/"
      },
      {
        "slug": "spatenstich-fuer-neues-griffner-wohnprojekt",
        "title": "Spatenstich für neues GRIFFNER Wohnprojekt",
        "date": "22.06.2026",
        "cat": "Projekte",
        "img": "https://griffner.com/wp-content/uploads/2026/06/spatenstich_graz_72dpi_02-scaled.jpg",
        "teaser": "In Graz-Mariatrost entstehen am Kurzeggerweg fünf Häuser mit Freiraum und hoher Wohnqualität.",
        "src": "https://griffner.com/spatenstich-fuer-neues-griffner-wohnprojekt/"
      },
      {
        "slug": "thomas-scheriau-wird-mehrheitseigentuemer-und-ceo-von-griffner",
        "title": "Thomas Scheriau wird Mehrheitseigentümer und CEO von GRIFFNER",
        "date": "09.06.2026",
        "cat": "Presse",
        "img": "https://griffner.com/wp-content/uploads/2026/06/thomas-scheriau_ceo-griffner.jpg",
        "teaser": "Der langjährige ELK-Geschäftsführer übernimmt die Mehrheit an GRIFFNER. Georg Niedersüß bleibt dem Unternehmen als Gesellschafter verbunden.",
        "src": "https://griffner.com/thomas-scheriau-wird-mehrheitseigentuemer-und-ceo-von-griffner/"
      },
      {
        "slug": "box-duo-architektur-im-zusammenspiel",
        "title": "BOX DUO. Architektur im Zusammenspiel",
        "date": "15.04.2026",
        "cat": "Projekte",
        "img": "https://griffner.com/wp-content/uploads/2026/04/2026_box_duo_1-scaled.jpeg",
        "teaser": "Zwei eigenständige Baukörper, ein architektonisches Ensemble mit Charakter.",
        "src": "https://griffner.com/box-duo-architektur-im-zusammenspiel/"
      },
      {
        "slug": "wohlfuehlwaerme-und-behaglichkeit-durch-effizientes-heizen",
        "title": "Wohlfühlwärme durch effizientes Heizen",
        "date": "06.10.2025",
        "cat": "Einblicke",
        "img": "https://griffner.com/wp-content/uploads/2025/09/kaufleitner-mayer_012.jpg",
        "teaser": "Erneuerbare Energie und durchdachte Technik: wie ein GRIFFNER Haus behaglich warm bleibt.",
        "src": "https://griffner.com/wohlfuehlwaerme-und-behaglichkeit-durch-effizientes-heizen/"
      },
      {
        "slug": "gesundes-wohnen-in-griffner-haeusern",
        "title": "Gesundes Wohnen in GRIFFNER Häusern",
        "date": "04.06.2025",
        "cat": "Einblicke",
        "img": "https://griffner.com/wp-content/uploads/2025/06/doppelpult_72dpi_013.jpg",
        "teaser": "Das Wohngefühl in einem GRIFFNER Haus ist kein Zufall, sondern das Ergebnis jahrzehntelanger Arbeit an Wohngesundheit.",
        "src": "https://griffner.com/gesundes-wohnen-in-griffner-haeusern/"
      },
      {
        "slug": "amiras-traumhaus-by-griffner",
        "title": "Amiras Traumhaus by GRIFFNER",
        "date": "10.03.2025",
        "cat": "Projekte",
        "img": "https://griffner.com/wp-content/uploads/2025/03/amira-aly_07.jpg",
        "teaser": "Moderatorin und Podcasterin Amira Aly zeigt erstmals ihr neues Zuhause, gefertigt in unserem Werk in Griffen.",
        "src": "https://griffner.com/amiras-traumhaus-by-griffner/"
      },
      {
        "slug": "haus-des-jahres-2025-gold-und-silber-fuer-griffner",
        "title": "„Haus des Jahres 2025“: Gold und Silber für GRIFFNER",
        "date": "03.02.2025",
        "cat": "Auszeichnungen",
        "img": "https://griffner.com/wp-content/uploads/2025/02/bild_preisverleihung-kategorie-luxus.png",
        "teaser": "Gold in der Kategorie Luxus und Silber in der Kategorie Ökologie bei der Wahl des Family Home Magazins.",
        "src": "https://griffner.com/haus-des-jahres-2025-gold-und-silber-fuer-griffner/"
      },
      {
        "slug": "griffner-mit-market-quality-award-ausgezeichnet",
        "title": "GRIFFNER mit „MARKET Quality Award“ ausgezeichnet",
        "date": "07.11.2024",
        "cat": "Auszeichnungen",
        "img": "https://griffner.com/wp-content/uploads/2024/11/market-quality-award_02-2.png",
        "teaser": "Testsieg in den Kategorien Sympathie und Nachhaltigkeit im aktuellen Markttest.",
        "src": "https://griffner.com/griffner-mit-market-quality-award-ausgezeichnet/"
      },
      {
        "slug": "hausbau-design-award-fuer-griffner-floating-house",
        "title": "„Hausbau Design Award“ für das Floating House",
        "date": "07.10.2024",
        "cat": "Auszeichnungen",
        "img": "https://griffner.com/wp-content/uploads/2024/10/floating-house-mit-siegel-1.png",
        "teaser": "Silber in der Kategorie Moderne Architektur beim Hausbau Design Award 2024.",
        "src": "https://griffner.com/hausbau-design-award-fuer-griffner-floating-house/"
      },
      {
        "slug": "eroeffnung-griffner-floating-house",
        "title": "Eröffnung GRIFFNER Floating House",
        "date": "26.03.2024",
        "cat": "Projekte",
        "img": "https://griffner.com/wp-content/uploads/2024/03/ErGriffnerHausPorsche211.jpg",
        "teaser": "Entworfen vom Studio F. A. Porsche, gebaut in Griffen. Erstmals gezeigt vor Partnern, Freunden und Presse.",
        "src": "https://griffner.com/eroeffnung-griffner-floating-house/"
      },
      {
        "slug": "schutzhaus-auf-der-kaerntner-koralpe",
        "title": "Schutzhaus auf der Kärntner Koralpe",
        "date": "13.10.2021",
        "cat": "Projekte",
        "img": "https://griffner.com/wp-content/uploads/2021/10/GRIFFNER_koralpenschutzhausi_006.jpg",
        "teaser": "400 Quadratmeter auf 1966 Metern Seehöhe, aufgestellt in nur drei Wochen.",
        "src": "https://griffner.com/schutzhaus-auf-der-kaerntner-koralpe/"
      }
    ],
    "termine": {
      "info": "Termine",
      "head": "Komm vorbei.",
      "text": "Raum, Licht und Material versteht man am besten vor Ort. Hier findest du die nächsten Termine in unseren Musterhäusern.",
      "cta": "Platz reservieren",
      "items": [
        {
          "day": "11",
          "month": "Okt 2026",
          "weekday": "Sonntag",
          "time": "10:00 bis 15:00",
          "title": "Fachliche Bauplatzanalyse",
          "place": "Musterhaus Linz Classic / Haid",
          "text": "Du hast ein Grundstück oder eines in Aussicht? Gemeinsam mit Thomas Brunnbauer analysierst du vor Ort, wie dein Haus am besten auf deinem Grundstück steht.",
          "href": "GRIFFNER%20Kontakt.dc.html#kontakt"
        },
        {
          "day": "08",
          "month": "Nov 2026",
          "weekday": "Sonntag",
          "time": "10:00 bis 15:00",
          "title": "Fachliche Bauplatzanalyse",
          "place": "Musterhaus Linz Classic / Haid",
          "text": "Du hast ein Grundstück oder eines in Aussicht? Gemeinsam mit Thomas Brunnbauer analysierst du vor Ort, wie dein Haus am besten auf deinem Grundstück steht.",
          "href": "GRIFFNER%20Kontakt.dc.html#kontakt"
        },
        {
          "day": "13",
          "month": "Dez 2026",
          "weekday": "Sonntag",
          "time": "10:00 bis 15:00",
          "title": "Fachliche Bauplatzanalyse",
          "place": "Musterhaus Linz Classic / Haid",
          "text": "Du hast ein Grundstück oder eines in Aussicht? Gemeinsam mit Thomas Brunnbauer analysierst du vor Ort, wie dein Haus am besten auf deinem Grundstück steht.",
          "href": "GRIFFNER%20Kontakt.dc.html#kontakt"
        }
      ]
    },
    "presse": {
      "info": "Presse",
      "head": "Für Medien.",
      "text": "Pressetexte, Bildmaterial und eine Ansprechpartnerin für alle Fragen rund um GRIFFNER. Das Bildmaterial darf mit Angabe des Copyrights verwendet werden.",
      "contact": {
        "name": "Sarah Hudelist-Kamnik",
        "role": "Pressestelle",
        "mail": "[E-Mail Pressestelle]"
      },
      "mappe": {
        "label": "Pressemappe",
        "meta": "PDF",
        "href": "https://griffner.com/wp-content/uploads/2025/03/Griffner-Pressemappe_final_web.pdf"
      },
      "credit": "© Griffnerhaus",
      "fotos": [
        {
          "label": "Thomas Scheriau",
          "img": "https://griffner.com/wp-content/uploads/2026/06/griffner-thomas-scheriau.png"
        },
        {
          "label": "Floating House",
          "img": "https://griffner.com/wp-content/uploads/2024/03/GEOPHO-1935_1-Kopie.webp"
        },
        {
          "label": "Koralpenschutzhaus",
          "img": "https://griffner.com/wp-content/uploads/2021/10/©Griffnerhaus_Koralpenschutzhaus.jpg"
        },
        {
          "label": "Fertigung",
          "img": "https://griffner.com/wp-content/uploads/2021/10/©Griffnerhaus_Produktion01.jpg"
        },
        {
          "label": "Schwarzwald Classic",
          "img": "https://griffner.com/wp-content/uploads/2023/01/©Griffnerhaus_Schwarzwald_Classic-4-scaled.jpg"
        },
        {
          "label": "Salzburg Square",
          "img": "https://griffner.com/wp-content/uploads/2021/10/©Griffnerhaus_Salzburg_Square.jpg"
        }
      ]
    },
    "articles": {
      "neue-kampagne-hausbau-geht-besser": {
        "lead": "Aufpreise für jeden Wunsch. Endloses Warten. Das Gefühl, von einer Zuständigkeit zur nächsten gereicht zu werden. Häuser, bei denen man erst Jahre später merkt, wo gespart wurde. Wer heute ein Haus baut, hat sich an vieles gewöhnt. Dabei muss vieles davon gar nicht so sein.",
        "intro": [
          "Mit unserer neuen Kampagne „Hausbau geht besser“ zeigen wir, wie wir Hausbau bei GRIFFNER neu denken, entlang des gesamten Weges zu deinem Haus: besser planen, besser bauen, besser leben."
        ],
        "sections": [
          {
            "head": "Besser planen.",
            "sub": "Weil dein Grundriss keine Aufpreisliste sein sollte.",
            "text": "Bei GRIFFNER arbeitet ein eigenes Architektur- und Designteam an deinem Zuhause. Möglich macht die große Freiheit bei der Planung unser patentiertes Open-Space-Konzept: Wenige statisch notwendige Punkte tragen das Haus und schaffen damit Freiraum bei der Gestaltung des Grundrisses. Wände verschieben, Räume öffnen, Zimmer neu denken: Der Grundriss kann sich an dein Leben anpassen. Und wenn aus dem Kinderzimmer in fünfzehn Jahren ein Atelier werden soll, kann sich auch dein Haus weiterentwickeln.",
            "quote": "„Bei vielen Hauskonzepten führt schon eine Grundrissänderung zu Mehrkosten, weil zahlreiche Innenwände statische Funktionen übernehmen. Unser Open-Space-Konzept gibt Kundinnen und Kunden deutlich mehr Freiheit bei der Raumplanung, ohne dass jede Änderung automatisch zum Aufpreis wird.“",
            "by": "Thomas Scheriau / CEO GRIFFNER"
          },
          {
            "head": "Besser bauen.",
            "sub": "Weil Warten kein Teil des Hausbaus sein sollte.",
            "text": "Beim Hausbau geht Zeit nicht nur auf der Baustelle verloren. Sie geht auch zwischen Entscheidungen, Abstimmungen und Zuständigkeiten verloren. Deshalb gibt es bei GRIFFNER einen persönlichen Projektmanager, der Kundinnen und Kunden durch den gesamten Prozess begleitet. Er bündelt die Abläufe, koordiniert die nächsten Schritte und bleibt zentraler Ansprechpartner bis zur Übergabe. Unser Anspruch: zehn Monate von der Vertragsunterzeichnung bis zum Einzug, mit einem Ablauf, der von Beginn an klar geplant ist.",
            "quote": "„Menschen wollen wissen, wann sie in ihr neues Zuhause einziehen können. Wenn Prozesse ineinandergreifen und eine Person die Verantwortung für das Gesamtprojekt übernimmt, lässt sich Hausbau deutlich klarer und schneller organisieren.“",
            "by": "Thomas Scheriau / CEO GRIFFNER"
          },
          {
            "head": "Besser leben.",
            "sub": "Weil das Beste an deinem Haus nicht auf der Aufpreisliste stehen sollte.",
            "text": "Wir optimieren heute fast alles: unseren Schlaf, unsere Ernährung, unser Training. Umso wichtiger ist die Frage, welche Qualität eigentlich der Ort hat, an dem wir einen großen Teil unseres Lebens verbringen. Bei GRIFFNER beginnt Wohnqualität deshalb nicht bei zusätzlichen Geräten, sondern bei der Konstruktion und den Materialien des Hauses. Die GRIFFNER Wand ist 42,25 Zentimeter stark, diffusionsoffen und passivhaustauglich. Dazu kommen unter anderem sichtbare Holzdecken, Holz-Alu-Fenster mit Dreifachverglasung, Naturparkett und eine Raumhöhe von 2,57 Metern. Materialien, Konstruktion und Architektur sind darauf ausgelegt, ein natürliches und angenehmes Raumklima zu schaffen, und vieles davon gehört bei GRIFFNER bereits zum Leistungsumfang.",
            "quote": "„Die wenigsten wissen, was in einem GRIFFNER Haus tatsächlich steckt. Wir beschäftigen uns intensiv damit, wie wir leben, schlafen oder uns ernähren. Den gleichen Anspruch sollten wir auch an unser Zuhause stellen.“",
            "by": "Thomas Scheriau / CEO GRIFFNER"
          },
          {
            "head": "Ein Anspruch, an dem wir uns messen lassen.",
            "text": "„Hausbau geht besser“ ist mehr als der Titel einer Kampagne. Es ist der Anspruch, mit dem wir GRIFFNER weiterentwickeln: beim Planen, beim Bauen und beim Leben im fertigen Haus. Und es ist erst der erste sichtbare Schritt. Im Herbst folgt der nächste."
          }
        ],
        "link": {
          "label": "hausbaugehtbesser.com",
          "href": "https://hausbaugehtbesser.com/"
        }
      }
    }
  },

  architektur: {
    head: ['Different', 'ideas of', 'living.'],
    text: 'Es gibt nicht das eine GRIFFNER Haus. Unterschiedliche Menschen, Orte und Vorstellungen vom Leben verdienen unterschiedliche architektonische Antworten.',
    rowTitle: 'Concepts',
    rowSub: 'Wohnideen zum Weiterdenken',
    rowLink: 'Alle Concepts', rowHref: '#',
    question: 'Was spricht dich an dieser Idee an?',
    answer: 'Der Innenhof, das Wohnen auf einer Ebene, das Licht, das Material. Wir verstehen diese Qualität und übersetzen sie in dein Haus.',
    concepts: [
      { name: 'Haus am Hang', text: 'Wohnen auf drei Ebenen, jede mit eigenem Blick ins Tal.', img: 'assets/ideas/haus-hang-hd.jpg' },
      { name: 'Haus im Wald', text: 'Große Öffnungen, dunkles Holz, der Wald als Wand.', img: 'assets/ideas/haus-wald-hd.jpg' },
      { name: 'Gartenhaus', text: 'Alles auf einer Ebene, jeder Raum mit Zugang ins Grüne.', img: 'assets/ideas/haus-garten-hd.jpg' },
      { name: 'Sommerhaus', text: 'Ein Dach, das Schatten gibt, und Räume, die sich ganz öffnen.', img: 'assets/ideas/haus-sommer-hd.jpg' }
    ],
    projects: {
      q: 'Sieht das auch in echt so aus?', a: 'Das hier ist kein Rendering.',
      text: 'Gebaute Häuser, echte Menschen, gelebter Alltag.', link: 'GRIFFNER Projects', href: '#',
      name: 'Floating House', img: 'assets/projects/floating-house.jpg'
    },
    projectList: {
      head: 'Projects', text: 'Gebaute Häuser zum Anschauen',
      link: 'Alle Projects', href: '#',
      items: [
        { name: 'Floating House', place: '[Ort]', year: '[Jahr]', img: 'assets/projects/floating-house.jpg', href: '#' },
        { name: 'Project 02', place: '[Ort]', year: '[Jahr]', img: 'assets/photos/wald-fassade.jpg', href: '#' },
        { name: 'Project 03', place: '[Ort]', year: '[Jahr]', img: 'assets/photos/weiss-abend.jpg', href: '#' },
        { name: 'Project 04', place: '[Ort]', year: '[Jahr]', img: 'assets/photos/daemmerung-garten.jpg', href: '#' },
        { name: 'Project 05', place: '[Ort]', year: '[Jahr]', img: 'assets/photos/haus-wald.jpg', href: '#' },
        { name: 'Project 06', place: '[Ort]', year: '[Jahr]', img: 'assets/photos/weiss-tag.jpg', href: '#' },
        { name: 'Project 07', place: '[Ort]', year: '[Jahr]', img: 'assets/photos/wald-abend.jpg', href: '#' },
        { name: 'Project 08', place: '[Ort]', year: '[Jahr]', img: 'assets/photos/sonne.jpg', href: '#' },
        { name: 'Project 09', place: '[Ort]', year: '[Jahr]', img: 'assets/photos/strasse-003.jpg', href: '#' },
        { name: 'Project 10', place: '[Ort]', year: '[Jahr]', img: 'assets/photos/wohnen-dunkel.jpg', href: '#' }
      ]
    }
  },

  haltungV2: {
    imgLife: 'assets/photos/schlafen-hell.jpg',
    imgBuild: 'assets/photos/weiss-detail.jpg',
    imgHouse: 'assets/photos/wald-abend.jpg',
    life: 'Du hast deine eigene Vorstellung vom Leben.',
    build: 'Wir haben unsere eigene Vorstellung vom Hausbau.',
    head: 'Bei GRIFFNER bringen wir beides zusammen.',
    body: ['Als Architektur- und Bauunternehmen denken wir ganzheitlich, planen individuell und bauen mit dem Anspruch, Gewohntes besser zu machen. Weil wir glauben, dass Hausbau besser geht.']
  },

  haltungFenster: {
    img: 'assets/photos/wald-abend.jpg',
    first: 'Du hast deine eigene Vorstellung vom Leben.',
    head: 'Wir haben unsere eigene Vorstellung vom Hausbau.',
    body: ['Bei GRIFFNER bringen wir beides zusammen.', 'Wir denken weiter, planen individuell und bauen mit dem Anspruch, Gewohntes besser zu machen.', 'Weil wir glauben, dass Hausbau besser geht.']
  },

  haltung: {
    strikes: ['Das haben wir immer so gemacht.', 'Such dir ein Modell aus.', 'Dafür ist jemand anderes zuständig.'],
    text: 'Wir glauben, dass Hausbau besser geht. Weil individuelle Architektur nicht kompliziert sein muss, weil du beim Bau deines Hauses nicht zum Projektmanager werden solltest und weil Verantwortung nicht an Schnittstellen enden darf. Darum hinterfragen wir Gewohnheiten, treffen klare Entscheidungen und stehen für das Ergebnis ein.',
    lead: 'Und darum beginnt bei uns jedes Haus mit einer Frage:',
    question: 'Wie möchtest du leben?'
  },

  ideas: {
    info: 'Different Ideas of Living',
    head: 'Es gibt nicht das eine GRIFFNER Haus.',
    text: 'Unterschiedliche Menschen, Orte und Vorstellungen vom Leben verdienen unterschiedliche Antworten. Unsere Concepts sind Ideen zum Weiterdenken, keine Modelle zum Aussuchen.',
    cta: 'Dieses Concept interessiert dich? Lass es uns gemeinsam weiterdenken.',
    all: 'Alle Concepts', allComing: 'Coming 29.10.', allIso: '2026-10-29', allHref: '#ideas',
    concepts: [
      { name: 'Haus am Hang', text: 'Drei Ebenen, jede mit eigenem Blick ins Tal.', img: 'assets/photos/weiss-tag.jpg' },
      { name: 'Haus im Wald', text: 'Große Öffnungen, dunkles Holz, der Wald als Wand.', img: 'assets/photos/wald-fassade.jpg' },
      { name: 'Gartenhaus', text: 'Alles auf einer Ebene, jeder Raum mit Zugang ins Grüne.', img: 'assets/photos/daemmerung-garten.jpg' },
      { name: 'Haus am Fels', text: 'Massive Wände, ruhiges Licht, Material zum Anfassen.', img: 'assets/photos/schlafen-fels.jpg' },
      { name: 'Sommerhaus', text: 'Ein Dach, das Schatten gibt. Räume, die sich ganz öffnen.', img: 'assets/photos/weiss-abend.jpg' }
    ],
    conceptLabel: 'Platzhalter / Rendering',
    project: {
      head: 'Concepts inspirieren. Projects beweisen.',
      info: 'Project / Floating House / [Ort] / Gebaut [Jahr]',
      text: '[Zwei Sätze zu Mensch, Ort und Idee dieses Projects]',
      link: 'Project ansehen',
      imgs: [
        { src: 'assets/photos/wald-abend.jpg', label: 'Floating House / Bild 1' },
        { src: 'assets/photos/weiss-detail.jpg', label: 'Floating House / Bild 2' },
        { src: 'assets/photos/wohnen-dunkel.jpg', label: 'Floating House / Bild 3' }
      ]
    }
  },

  weg: {
    statement: 'Gib uns zwei Wochen deiner Zeit. Den Rest übernehmen wir.',
    text: 'So viel eigene Zeit investierst du bei GRIFFNER, von der ersten Idee bis zur Schlüsselübergabe. Für die Entscheidungen, die dein Zuhause prägen. Nicht für Baustellenprobleme.',
    stations: [
      { title: 'Design.', text: 'Du erzählst uns, wie du leben möchtest. Unser Architekturteam macht daraus dein Haus.', img: 'assets/photos/skizze.png', label: 'Skizze', light: true },
      { title: 'Engineer.', text: 'Wir denken jedes Detail durch und stimmen Architektur, Konstruktion und Technik aufeinander ab. Die Komplexität bleibt bei uns.', img: 'assets/photos/weiss-detail.jpg', label: 'Detail' },
      { title: 'Make.', text: 'Wir fertigen dein Haus im eigenen Werk in Griffen. Präzise geplant, sorgfältig gefertigt und bereit für die Montage.', img: '', label: 'Platzhalter / Werk Griffen' },
      { title: 'Build.', text: 'Unsere eigenen Teams bringen dein Haus auf dein Grundstück. Wir koordinieren die Umsetzung – du musst es nicht.', img: '', label: 'Platzhalter / Montage mit Kran' }
    ],
    marks: 14,
    cols: [
      { title: 'Du entscheidest', lines: ['Wie du leben willst.', 'Was dein Haus prägt.', 'Was es kosten darf.'] },
      { title: 'Wir übernehmen', lines: ['Gesamtkosten statt Hauspreis.', 'Ein Ansprechpartner für alles.', 'Fertigung und Bau bis zum Schlüssel.'] }
    ],
    line: 'Mehr serienmäßig, neu inklusive Bodenplatte.',
    links: [{ label: 'Leistungen', coming: 'Coming 05.11.', iso: '2026-11-05', href: '#weg' }, { label: 'Dein Weg zum Haus', coming: 'Coming 12.11.', iso: '2026-11-12', href: '#weg' }]
  },

  gregor: {
    flightLabel: 'Platzhalter / Gregor im Flug, freigestellt',
    portraitLabel: 'Platzhalter / Gregor, ruhiges Porträt',
    head: 'Er hat das Springen neu gedacht. Wir das Bauen.',
    text: 'Gregor Schlierenzauer hat nie gefragt, wie man es immer gemacht hat, sondern wie es besser geht. Heute fragt er, wie man gut lebt. Darum ist er Teil von GRIFFNER.',
    link: 'Gregors Geschichte'
  },

  erleben: {
    statement: 'Feel the house.',
    text: 'Raum, Licht und Material versteht man nicht auf einem Bildschirm. Man muss drinstehen.',
    entries: [
      { title: 'Griffen Campus', info: 'Griffen / Kärnten', link: 'Besuchen', href: '#kontakt', img: '', label: 'Platzhalter / Griffen Campus' },
      { title: 'Musterhäuser', info: '[Orte]', link: 'Termin vereinbaren', href: '#kontakt', img: '', label: 'Platzhalter / Musterhaus' },
      { title: 'Besichtigungen', info: 'Gebaute Projects, auf Anfrage', link: 'Anfragen', href: '#kontakt', img: 'assets/photos/weiss-tag.jpg', label: 'Gebautes Project' }
    ],
    head: 'Lass uns über dein Haus sprechen.',
    headText: 'Mensch, Grundstück, Lebensweise, Budget. Im Erstgespräch hören wir zu und zeigen dir, was möglich ist.',
    primary: 'Projekt starten',
    secondary: 'Musterhaus besuchen',
    form: {
      topicLabel: 'Worum geht es',
      topics: ['Erstgespräch', 'Musterhaus besuchen', 'Rückruf'],
      name: 'Name',
      contact: 'E-Mail oder Telefon',
      message: 'Nachricht, optional',
      messageHint: 'Grundstück, Zeitplan, Fragen. Was du schon weißt.',
      consent: 'Ich bin einverstanden, dass GRIFFNER meine Angaben verwendet, um mich zu kontaktieren.',
      privacy: 'Datenschutz',
      newsletter: 'Ich möchte den GRIFFNER Newsletter mit Projekten, Angeboten und Terminen erhalten. Abmeldung jederzeit möglich.',
      errNewsletter: 'Für den Newsletter brauchen wir deine E-Mail-Adresse.',
      newsletterThanks: 'Bitte bestätige deine Newsletter-Anmeldung über den Link in unserer E-Mail.',
      privacyHref: '#',
      submit: 'Anfrage senden',
      errName: 'Wie dürfen wir dich ansprechen?',
      errContact: 'Wie erreichen wir dich? E-Mail oder Telefon genügt.',
      errConsent: 'Bitte bestätige, dass wir deine Angaben verwenden dürfen.',
      thanksHead: 'Danke, {name}.',
      thanksText: 'Deine Anfrage ist bei uns. Jemand aus unserem Team in Griffen meldet sich innerhalb von zwei Werktagen bei dir.',
      again: 'Neue Anfrage'
    }
  },

  kontakt: {
    info: 'Kontakt',
    head: 'Reden wir über dein Haus.',
    text: 'Kein Callcenter, kein Verkaufsdruck. Ein echter Mensch, der dein Projekt versteht, meldet sich bei dir.',
    direct: [
      { label: 'Anrufen', value: '+43 4233 2237', href: 'tel:004342332237' },
      { label: 'Schreiben', value: 'info@griffner.com', href: 'mailto:info@griffner.com' },
      { label: 'Erzählen', value: 'Zum Formular ↓', href: '#kontakt' }
    ],
    formInfo: 'Dein Projekt',
    formHead: 'Erzähl uns, was du vorhast.',
    s1: 'Ich bin', namePh: 'dein Name', s2: 'und wünsche mir',
    topics: ['ein Erstgespräch', 'einen Musterhausbesuch', 'einen Rückruf'],
    sPlace: 'am liebsten in', s3: 'Erreichbar bin ich unter', contactPh: 'E-Mail oder Telefon',
    pickPlace: 'Lieber persönlich vorbeikommen? Standort wählen ↓',
    orteInfo: 'Musterhäuser & Verkaufsbüros',
    orteHead: 'Erleb ein GRIFFNER Haus in echt, in deiner Nähe.',
    orteText: 'In unseren Musterhäusern spürst du das GRIFFNER Wohngefühl live. Such dir einen Standort in Österreich, Deutschland oder Tschechien und komm vorbei.',
    arten: [['muster', 'Musterhäuser'], ['buero', 'Verkaufsbüros']],
    laender: [['alle', 'Alle'], ['AT', 'Österreich'], ['DE', 'Deutschland'], ['CZ', 'Tschechien']],
    request: 'Termin anfragen', call: 'Anrufen',
    musterhaeuser: [
      { city: 'Griffen', house: 'Floating House', land: 'AT', addr: ['Gewerbestraße 3', '9112 Griffen'], hours: 'Besichtigung nach Vereinbarung', img: 'assets/projects/floating-house.jpg' },
      { city: 'Griffen', house: 'Doppelpult', land: 'AT', addr: ['Gewerbestraße 3', '9112 Griffen'], hours: 'Termine nach Vereinbarung', img: 'https://griffner.com/wp-content/uploads/2021/09/doppelpult_griffen_webseite_final_800x600.jpg' },
      { city: 'Wien', house: 'Box', land: 'AT', addr: ['Fertighauspark „Blaue Lagune“, Parzelle 13', '2334 Vösendorf'], hours: 'Mo bis Sa / 10 bis 12 und 13 bis 18 Uhr', img: 'https://griffner.com/wp-content/uploads/2021/09/Griffner_Box_Wien_800x600.jpg' },
      { city: 'Wien', house: 'Classic', land: 'AT', addr: ['Fertighauspark „Blaue Lagune“, Parzelle 37', '2334 Vösendorf'], hours: 'Mo bis Sa / 10 bis 12 und 13 bis 18 Uhr', img: 'https://griffner.com/wp-content/uploads/2021/09/Griffner_Musterhaus_Classic_Wien_Aussen800x600.jpg' },
      { city: 'Graz', house: 'Classic', land: 'AT', addr: ['Musterhauspark Graz, Weblinger Gürtel 33/22', '8054 Graz'], hours: 'Termine nach Vereinbarung', img: 'https://griffner.com/wp-content/uploads/2021/09/MuHa_Graz_Aussen_Nachtaufnahme_800x600.jpg' },
      { city: 'Linz', house: 'Classic', land: 'AT', addr: ['Musterhauspark Haid, Ikeaplatz 9', '4053 Haid'], hours: 'Mi bis Fr 10 bis 18 Uhr / Sa 10 bis 17 Uhr', img: 'https://griffner.com/wp-content/uploads/2021/09/Griffner_Musterhaus_Classic_Haid_Aussen_800x600.jpg' },
      { city: 'Salzburg', house: 'Square', land: 'AT', addr: ['Musterhauspark Eugendorf, Musterhausparkstraße 27', '5301 Eugendorf'], hours: 'Mi bis Fr 10 bis 18 Uhr / Sa 10 bis 17 Uhr', img: 'https://griffner.com/wp-content/uploads/2022/01/GRIFFNER_Musterhaus_Salzburg_Webseite-neu.jpg' },
      { city: 'München', house: 'Classic', land: 'DE', addr: ['Bauzentrum Poing, Senator-Gerauer-Straße 25, Parzelle 55', '85586 Poing/Grub'], hours: 'Mi bis So / 11 bis 18 Uhr', img: 'https://griffner.com/wp-content/uploads/2021/09/Griffner_Classic_Poing_web-1800x600-1.jpg' },
      { city: 'Schwarzwald', house: 'Classic', land: 'DE', addr: ['Fertighauswelt 1.b', '77966 Kappel-Grafenhausen'], hours: 'Mi bis Sa / 11 bis 18 Uhr', img: 'https://griffner.com/wp-content/uploads/2022/05/Musterhaus-Schwarzwald.png' },
      { city: 'Prag', house: 'Box', land: 'CZ', addr: ['Za Hospodou 301', '267 16 Vysoký Újezd u Berouna'], hours: 'Termine nach Vereinbarung', img: 'https://griffner.com/wp-content/uploads/2023/08/musterhaus-prag.png' }
    ],
    bueros: [
      { city: 'Baden', who: 'Planungswerkstatt Arnold Zlabinger', land: 'AT', addr: ['Erzherzog Wilhelm Ring 6', '2500 Baden'], tel: '+43 660 208 63 99' },
      { city: 'Pinkafeld', who: 'SIFKOVITS GmbH', land: 'AT', addr: ['Hochart 141', '7423 Pinkafeld'], tel: '+43 664 926 26 69' },
      { city: 'St. Jakob im Walde', who: 'Rainer C. Regatschnig, R&B GmbH', land: 'AT', addr: ['8255 St. Jakob im Walde'], tel: '+43 699 124 72 304' },
      { city: 'Wiener Neustadt', who: 'Dipl. Ing. Wolfgang Baumgartner', land: 'AT', addr: ['2700 Wiener Neustadt'], tel: '+43 664 13 13 766' },
      { city: 'Fuschl am See', who: 'Walter Schmied', land: 'AT', addr: ['5330 Fuschl am See'], tel: '+43 699 134 22 620' },
      { city: 'Motten', who: 'Sebastian Will, Der Meisterschreiner', land: 'DE', addr: ['Ringstraße 20', '97786 Motten'], tel: '+49 160 97 54 7081' },
      { city: 'Rudelzhausen', who: 'Heike Wagner', land: 'DE', addr: ['Regensburger Str. 1b', '84104 Rudelzhausen'], tel: '+49 151 111 69 222' },
      { city: 'Schwanau', who: 'Baubiologie Michael Mark GmbH', land: 'DE', addr: ['Wolfweg 25', '77963 Schwanau'], tel: '+49 7824 66 22 463' },
      { city: 'Český Krumlov', who: 'Ing. Jaroslav Adamják', land: 'CZ', addr: ['Vyšný 110', '381 01 Český Krumlov'], tel: '+420 777 592 100' }
    ],
    zentraleInfo: 'Zentrale',
    zentrale: ['Griffnerhaus GmbH', 'Gewerbestraße 3', '9112 Griffen, Kärnten'],
    facts: [['Telefon', '+43 4233 2237', 'tel:004342332237'], ['E-Mail', 'info@griffner.com', 'mailto:info@griffner.com'], ['Web', 'griffner.com', 'https://griffner.com']],
    made: 'Engineered in Griffen, Kärnten',
    katalogHead: 'Lieber erst in Ruhe ansehen?',
    katalogText: 'Verständlich. Hol dir den GRIFFNER Katalog mit allen Häusern und dem kompletten Leistungsumfang. Kostenlos und unverbindlich, ganz ohne Gespräch.',
    katalogLink: 'Katalog bestellen', katalogHref: 'https://griffner.com/katalog-griffner-haus/'
  },

  karriere: {
    "info": "Careers",
    "head": "Hausbau geht besser. Mit dir.",
    "text": [
      "Neue Führung, neue Ideen, neue Produkte. Seit Juni 2026 gestalten wir bei GRIFFNER eine neue Ära. Dafür nehmen wir uns jeden Prozess vor. Jedes Detail. Jede Gewohnheit.",
      "Dafür bringen wir Menschen zusammen, die ihr Fach beherrschen und mehr vorhaben. Die Erfahrung mitbringen und den Mut, neue Wege zu gehen.",
      "Steig jetzt ein und schreib die Geschichte von GRIFFNER mit uns neu."
    ],
    "jumpErfahrung": "Offene Stellen",
    "jumpLehre": "Lehrberufe",
    "imgLabel": "Platzhalter / Fertigung Griffen, Menschen bei der Arbeit",
    "stellenHead": "Offene Stellen.",
    "groups": [
      [
        "erfahrung",
        "Mit Erfahrung",
        "stellen"
      ],
      [
        "lehre",
        "Lehre",
        "lehre"
      ]
    ],
    "ort": "Griffen",
    "mwd": "m/w/d",
    "initiativText": "Nichts Passendes dabei? Wir freuen uns auch über deine Initiativbewerbung.",
    "initiativLink": "Initiativ bewerben",
    "menschenInfo": "Menschen bei GRIFFNER",
    "menschenHead": "Die Menschen hinter den Häusern.",
    "menschen": [
      {
        "name": "Sabine Sauerschnig",
        "role": "Planung",
        "since": "Lehre bei GRIFFNER, seit 2014 im Team",
        "quote": "Wenn man die Fotos der fertiggestellten GRIFFNER Häuser sieht und weiß, dass man an der Planung des Hauses mitgewirkt hat.",
        "lead": "Das Schönste an meiner Arbeit:"
      },
      {
        "name": "Anton Kuchernig",
        "role": "Projektleitung",
        "since": "Seit 1994 im Team",
        "quote": "Ich sehe mich als Schnittstelle zwischen dem Unternehmen GRIFFNER und seinen Kunden.",
        "lead": ""
      },
      {
        "name": "Arthur Jandl",
        "role": "Detailentwicklung",
        "since": "Seit 2003 im Team",
        "quote": "Es ist schön zu wissen, dass man zum reibungslosen Ablauf bei der Umsetzung eines Bauvorhabens beigetragen hat.",
        "lead": ""
      },
      {
        "name": "Anna Wutte",
        "role": "Terminmanagement",
        "since": "Seit 2019 im Team",
        "quote": "Ich kann mir meine Arbeit außerhalb der Kernarbeitszeiten selber einteilen und schätze den offenen, kollegialen Umgang.",
        "lead": ""
      }
    ],
    "portraitLabel": "Platzhalter / Porträt {name}",
    "jobs": [
      {
        "slug": "bauleiter",
        "title": "Bauleiter",
        "bereich": "Bauen",
        "group": "erfahrung",
        "art": "Vollzeit",
        "verbatim": true,
        "intro": [
          "Neue Führung, neue Ideen, neue Produkte. Seit Juni 2026 gestalten wir bei GRIFFNER eine neue Ära. Dafür nehmen wir uns jeden Prozess vor. Jedes Detail. Jede Gewohnheit.",
          "Dafür bringen wir Menschen zusammen, die ihr Fach beherrschen und mehr vorhaben. Die Erfahrung mitbringen und den Mut, neue Wege zu gehen.",
          "Für unsere Baustellen suchen wir jemanden, für den Bauleitung erst der Anfang ist. Du steuerst das Projekt. Du führst das Montageteam. Du trägst die Verantwortung gegenüber den Bauherren. Fachlich, organisatorisch und im Umgang mit Menschen.",
          "Steig jetzt ein und schreib die Geschichte von GRIFFNER mit uns neu."
        ],
        "factsHead": "Das Wichtigste zuerst.",
        "facts": [
          [
            "Gehalt",
            "Ab 6.500 Euro brutto pro Monat plus Prämie pro Baustelle."
          ],
          [
            "Dienstwagen",
            "Auch zur privaten Nutzung."
          ],
          [
            "Einsatzgebiet",
            "Region Wien, Niederösterreich und Burgenland. Region Oberösterreich und Salzburg. Region Tirol und Salzburg."
          ],
          [
            "Arbeitszeit",
            "Vollzeit."
          ],
          [
            "Dein Schwerpunkt",
            "Volle Verantwortung für Termine, Kosten und Qualität, vom Baubeginn bis zur Schlüsselübergabe."
          ]
        ],
        "sections": [
          {
            "head": "Was du mit uns besser machst.",
            "items": [
              [
                "Projektverantwortung ab Baubeginn.",
                "Du übernimmst das Projekt vor Baustart vom Innendienst und steuerst den gesamten Ablauf anspruchsvoller Bauprojekte. Termin, Kosten und Qualität liegen ab diesem Moment in deiner Verantwortung."
              ],
              [
                "Terminsteuerung und Führung vor Ort.",
                "Du erstellst den Bauzeitenplan, schreibst ihn fort und erkennst Störungen im Ablauf, bevor sie den Fertigstellungstermin bewegen. Die Montageteams führst du entlang dieses Plans, mit Klarheit, Präsenz und Rückgrat."
              ],
              [
                "Subunternehmermanagement.",
                "Von der Beauftragung bis zur Schlussrechnung. Du koordinierst und bewertest deine Subunternehmer, arbeitest mit Leistungsverzeichnissen, prüfst Regie- und Zusatzleistungen, stellst berechtigte Mehrkostenforderungen und wehrst unberechtigte ab."
              ],
              [
                "Das Baustellenergebnis im Blick.",
                "Du vergleichst laufend den aktuellen Stand mit der Kalkulation, erkennst Abweichungen frühzeitig und steuerst rechtzeitig gegen."
              ],
              [
                "Der direkte Draht zum Bauherrn.",
                "Du führst die Baubesprechungen, hältst Entscheidungen nachvollziehbar fest und übergibst am Ende jedes Haus persönlich."
              ]
            ]
          },
          {
            "head": "Was du mitbringst, um mehr zu bewegen.",
            "items": [
              [
                "Bautechnische Ausbildung.",
                "Werkmeister, Zimmerermeister, Bautechniker, HTL oder ein Studium im Bauingenieurwesen."
              ],
              [
                "Mindestens fünf Jahre Bauleitungserfahrung.",
                "Örtliche Bauleitung oder Projektleitung im Hoch- oder Holzbau, mit eigener Verantwortung für Termin, Kosten und Qualität."
              ],
              [
                "Vertrag, Nachtrag, Abrechnung.",
                "Sicher im Umgang mit Leistungsverzeichnissen, in der Abrechnung von Subunternehmerleistungen und im Nachtragsmanagement."
              ],
              [
                "Führungserfahrung auf der Baustelle.",
                "Du hast Montageteams und Subunternehmer vor Ort geführt und Entscheidungen unter Termindruck getroffen."
              ],
              [
                "Der Anspruch, es besser zu machen.",
                "Du orientierst dich nicht am Branchenüblichen. Was auf deiner Baustelle nicht funktioniert, änderst du, statt dich daran zu gewöhnen."
              ]
            ]
          },
          {
            "head": "Was du dafür bekommst.",
            "items": [
              [
                "Eine neue Ära. Du prägst sie mit.",
                "Neue Führung, große Pläne: Steig jetzt ein und bau mit uns das GRIFFNER auf, auf das wir in fünf Jahren gemeinsam stolz zurückblicken."
              ],
              [
                "Ein Gehaltspaket, das mitwächst.",
                "Ab 6.500 Euro brutto im Monat, dazu ein erfolgsorientiertes Prämienmodell pro Baustelle. Und ein Dienstwagen, auch zur privaten Nutzung."
              ],
              [
                "Ein Team, mit dem du arbeiten willst.",
                "Leute, die genauso viel vorhaben wie du. Die dich fordern, dir den Rücken stärken und sehen, was du leistest."
              ],
              [
                "Freiraum für bessere Ideen.",
                "Du entwickelst unsere Baustellenprozesse weiter und hast kurze Wege direkt zur Geschäftsführung."
              ]
            ]
          }
        ],
        "outro": {
          "head": "Du hast mehr vor. Wir auch.",
          "text": "Was würdest du auf unseren Baustellen als Erstes besser machen? Darüber möchten wir mit dir sprechen. Und darüber, was du als Nächstes vorhast. Schick deine Bewerbung an jobs@griffner.com. Für Fragen vorab erreichst du uns unter +43 4233 2237 212."
        }
      },
      {
        "slug": "statiker-holzbau",
        "title": "Statiker Holzbau",
        "bereich": "Engineering",
        "group": "erfahrung",
        "art": "Vollzeit",
        "verbatim": true,
        "intro": [
          "Neue Führung, neue Ideen, neue Produkte. Seit Juni 2026 gestalten wir bei GRIFFNER eine neue Ära. Dafür nehmen wir uns jeden Prozess vor. Jedes Detail. Jede Gewohnheit.",
          "Dafür bringen wir Menschen zusammen, die ihr Fach beherrschen und mehr vorhaben. Die Erfahrung mitbringen und den Mut, neue Wege zu gehen.",
          "Für unsere Tragwerksplanung suchen wir jemanden, der dem Holzbau seine Grenzen zeigt und sie dann verschiebt. Du rechnest nicht nur nach, was ohnehin feststeht. Du siehst mehrere Wege zum selben Ziel und weißt oft schon vor der Kundenpräsentation, welche Variante wirtschaftlicher ist und besser in die Architektur passt.",
          "Steig jetzt ein und schreib die Geschichte von GRIFFNER mit uns neu."
        ],
        "factsHead": "Das Wichtigste zuerst.",
        "facts": [
          [
            "Gehalt",
            "Ab 4.000 Euro brutto pro Monat, je nach Qualifikation und Erfahrung."
          ],
          [
            "Standort",
            "Griffen"
          ],
          [
            "Arbeitszeit",
            "Vollzeit, mit Präsenz und Homeoffice."
          ],
          [
            "Dein Schwerpunkt",
            "Statische Berechnung und Tragwerksplanung im Holzbau, von der Konzeptidee bis zur Genehmigungs- und Ausführungsstatik."
          ]
        ],
        "sections": [
          {
            "head": "Was du mit uns besser machst.",
            "items": [
              [
                "Tragwerke, die halten, was das Design verspricht.",
                "Du berechnest und bemisst Holzkonstruktionen für unsere Projekte, vom ersten Konzept im Vertrieb bis zur Ausführungsreife."
              ],
              [
                "Genehmigungs- und Ausführungsstatik.",
                "Du erstellst die statischen Nachweise für Einreichung und Bauausführung, normkonform, nachvollziehbar und mit wirtschaftlichem Blick."
              ],
              [
                "Frühe Machbarkeitsbeurteilung.",
                "Schon in der Angebotsphase sagst du, welche Variante trägt, was sie kostet und wo die konstruktive Grenze liegt."
              ],
              [
                "Schnittstelle zu allen Gewerken.",
                "Du stimmst dich eng mit Architektur, Detailentwicklung und Werkplanung ab und, wo erforderlich, mit Stahlbau und Baumeisterarbeiten."
              ],
              [
                "Statik-Standards weiterentwickeln.",
                "Du entwickelst unsere Regelnachweise und Konstruktionsstandards weiter und machst dein Wissen für Technik, Planung und Bauleitung nutzbar."
              ]
            ]
          },
          {
            "head": "Was du mitbringst, um mehr zu bewegen.",
            "items": [
              [
                "Einschlägige Ausbildung.",
                "HTL, FH oder Universitätsabschluss im Bauingenieurwesen oder eine vergleichbare Qualifikation."
              ],
              [
                "Mindestens zwei Jahre Erfahrung in der Tragwerksplanung.",
                "Schwerpunkt Holzbau von Vorteil, alternativ Hochbau mit Bereitschaft zur Spezialisierung."
              ],
              [
                "Normen und Nachweisführung.",
                "Sichere Anwendung der geltenden Normen und eine nachvollziehbare, prüffähige Dokumentation."
              ],
              [
                "Sicher in der Berechnung.",
                "Routinierter Umgang mit gängiger Statiksoftware."
              ],
              [
                "Der Anspruch, es besser zu machen.",
                "Du übernimmst keine Lösung, weil sie schon immer so gerechnet wurde. Du prüfst, ob sie wirtschaftlicher und gestalterisch besser geht."
              ]
            ]
          },
          {
            "head": "Was du dafür bekommst.",
            "items": [
              [
                "Eine neue Ära. Du prägst sie mit.",
                "Neue Führung, große Pläne: Steig jetzt ein und bau mit uns das GRIFFNER auf, auf das wir in fünf Jahren gemeinsam stolz zurückblicken."
              ],
              [
                "Ein Gehalt, das zu deiner Verantwortung passt.",
                "Ab 4.000 Euro brutto im Monat, je nach Qualifikation und Erfahrung, mit klarer Bereitschaft zur Überzahlung."
              ],
              [
                "Ein Team, mit dem du arbeiten willst.",
                "Leute, die genauso viel vorhaben wie du. Die dich fordern, dir den Rücken stärken und sehen, was du leistest."
              ],
              [
                "Freiraum für bessere Ideen.",
                "Du entwickelst unsere Statik-Standards weiter und hast kurze Wege direkt zur Geschäftsführung."
              ]
            ]
          }
        ],
        "outro": {
          "head": "Du hast mehr vor. Wir auch.",
          "text": "Was würdest du an unseren Holzbau-Konstruktionen als Erstes weiterentwickeln? Darüber möchten wir mit dir sprechen. Und darüber, was du als Nächstes vorhast. Schick deine Bewerbung an jobs@griffner.com. Für Fragen vorab erreichst du uns unter +43 4233 2237."
        }
      },
      {
        "slug": "einreichplaner",
        "title": "Einreichplaner",
        "bereich": "Planung",
        "group": "erfahrung",
        "art": "Vollzeit",
        "verbatim": true,
        "intro": [
          "Neue Führung, neue Ideen, neue Produkte. Seit Juni 2026 gestalten wir bei GRIFFNER eine neue Ära. Dafür nehmen wir uns jeden Prozess vor. Jedes Detail. Jede Gewohnheit.",
          "Dafür bringen wir Menschen zusammen, die ihr Fach beherrschen und mehr vorhaben. Die Erfahrung mitbringen und den Mut, neue Wege zu gehen.",
          "Für unsere Einreichplanung suchen wir jemanden, für den Planzeichnen erst der Anfang ist. Du übersetzt Architektur in genehmigungsfähige Unterlagen. Du vertrittst unsere Projekte gegenüber den Behörden. Du bringst Anträge durch. Fachlich, formal und im Umgang mit Menschen.",
          "Steig jetzt ein und schreib die Geschichte von GRIFFNER mit uns neu."
        ],
        "factsHead": "Das Wichtigste zuerst.",
        "facts": [
          [
            "Gehalt",
            "Ab 4.000 Euro brutto pro Monat, je nach Qualifikation und Erfahrung."
          ],
          [
            "Auto",
            "Firmenauto für Termine bei Bauherren und auf Grundstücken."
          ],
          [
            "Standort",
            "Wiener Neudorf, Graz, Salzburg oder Griffen."
          ],
          [
            "Arbeitszeit",
            "Vollzeit oder Teilzeit ab 30 Wochenstunden, mit Präsenz und Homeoffice."
          ],
          [
            "Dein Schwerpunkt",
            "Einreichpläne und Behördenverfahren, von der Architektur bis zur Bewilligung."
          ]
        ],
        "sections": [
          {
            "head": "Was du mit uns besser machst.",
            "items": [
              [
                "Einreichplanung und Genehmigungsverfahren.",
                "Du erstellst die Einreichunterlagen und führst unsere Projekte durch das Bauverfahren, von der Vorprüfung bis zum Bescheid."
              ],
              [
                "Behörden und Sachverständige.",
                "Du bist die Schnittstelle zu Baubehörden, Sachverständigen und Gestaltungsbeiräten, klärst Auflagen vorab und vertrittst unsere Projekte im Verfahren."
              ],
              [
                "Nachweise und Fachunterlagen.",
                "Energieausweis, Baubeschreibung, Förderansuchen und die Abstimmung der erforderlichen Fachgutachten."
              ],
              [
                "Vor Ort beim Bauherrn.",
                "Mit wachsender Erfahrung übernimmst du Termine am Grundstück für die optimale Situierung und vertrittst Anträge persönlich im Amt."
              ]
            ]
          },
          {
            "head": "Was du mitbringst, um mehr zu bewegen.",
            "items": [
              [
                "Bautechnische Ausbildung.",
                "Zimmerer, Werkmeister, HTL Bautechnik, FH, Universität oder eine Ausbildung in bautechnischer Zeichnung."
              ],
              [
                "Mindestens zwei Jahre Erfahrung in der Einreichplanung.",
                "Eigenverantwortliche Betreuung von Bauverfahren, idealerweise im Wohnbau und über mehrere Bundesländer."
              ],
              [
                "Baurechtliches Wissen.",
                "Sichere Kenntnisse der Landesbauordnungen und Bebauungsvorschriften. Du verstehst Pläne, nicht nur Paragrafen."
              ],
              [
                "Sicher im CAD.",
                "Routinierter Umgang mit CAD-Software und MS Office."
              ],
              [
                "Der Anspruch, es besser zu machen.",
                "Du findest dich nicht damit ab, dass Verfahren dauern. Du suchst den Weg, der schneller zum Bescheid führt, und teilst ihn mit dem Team."
              ]
            ]
          },
          {
            "head": "Was du dafür bekommst.",
            "items": [
              [
                "Eine neue Ära. Du prägst sie mit.",
                "Neue Führung, große Pläne: Steig jetzt ein und bau mit uns das GRIFFNER auf, auf das wir in fünf Jahren gemeinsam stolz zurückblicken."
              ],
              [
                "Ein Gehalt, das zu deiner Verantwortung passt.",
                "Ab 4.000 Euro brutto im Monat, je nach Qualifikation und Erfahrung, mit klarer Bereitschaft zur Überzahlung."
              ],
              [
                "Mobilität für den Außendienst.",
                "Für Termine bei Bauherren, auf Grundstücken und in den Ämtern steht dir ein Firmenauto zur Verfügung."
              ],
              [
                "Ein Team, mit dem du arbeiten willst.",
                "Leute, die genauso viel vorhaben wie du. Die dich fordern, dir den Rücken stärken und sehen, was du leistest."
              ],
              [
                "Freiraum für bessere Ideen.",
                "Du entwickelst unsere Einreichplanung weiter und hast kurze Wege direkt zur Geschäftsführung."
              ]
            ]
          }
        ],
        "outro": {
          "head": "Du hast mehr vor. Wir auch.",
          "text": "Was würdest du in unserer Einreichplanung als Erstes besser machen? Darüber möchten wir mit dir sprechen. Und darüber, was du als Nächstes vorhast. Schick deine Bewerbung an jobs@griffner.com. Für Fragen vorab erreichst du uns unter +43 4233 2237."
        }
      },
      {
        "slug": "haustechnikplaner",
        "title": "Haustechnikplaner",
        "bereich": "Planung",
        "group": "erfahrung",
        "art": "Vollzeit",
        "verbatim": true,
        "intro": [
          "Neue Führung, neue Ideen, neue Produkte. Seit Juni 2026 gestalten wir bei GRIFFNER eine neue Ära. Dafür nehmen wir uns jeden Prozess vor. Jedes Detail. Jede Gewohnheit.",
          "Dafür bringen wir Menschen zusammen, die ihr Fach beherrschen und mehr vorhaben. Die Erfahrung mitbringen und den Mut, neue Wege zu gehen.",
          "Für unsere Haustechnikplanung suchen wir jemanden, der technische Anlagen ganzheitlich verantwortet. Von der Angebotsphase bis zur Umsetzung. Du planst und dimensionierst Heizungs-, Klima-, Lüftungs-, Sanitär- und Elektroanlagen, erstellst die erforderlichen Nachweise und bringst deine Expertise frühzeitig in die Angebotsplanung ein.",
          "Steig jetzt ein und schreib die Geschichte von GRIFFNER mit uns neu."
        ],
        "factsHead": "Das Wichtigste zuerst.",
        "facts": [
          [
            "Gehalt",
            "Ab 3.700 Euro brutto pro Monat, je nach Qualifikation und Erfahrung."
          ],
          [
            "Standort",
            "Griffen"
          ],
          [
            "Arbeitszeit",
            "Vollzeit, mit Präsenz und Homeoffice."
          ],
          [
            "Dein Schwerpunkt",
            "Planung von Heizung, Klima, Lüftung, Sanitär und Elektro."
          ]
        ],
        "sections": [
          {
            "head": "Was du mit uns besser machst.",
            "items": [
              [
                "Planung der haustechnischen Gewerke.",
                "Du planst Heizung, Klima, Lüftung, Sanitär und Elektro für unsere Projekte, von der Konzeption bis zur Ausführungsplanung."
              ],
              [
                "Auslegung und Dimensionierung.",
                "Du berechnest und dimensionierst die Anlagen nach den geltenden Normen und stimmst sie auf Gebäudehülle und Energieausweis ab."
              ],
              [
                "Prüfung der Unterlagen.",
                "Vollständigkeit, Richtigkeit und Realisierbarkeit aller TGA Planungsunterlagen liegen in deiner Verantwortung."
              ],
              [
                "Unterstützung in der Angebotsphase.",
                "Du klärst früh, was technisch möglich ist, und lieferst die Grundlagen für Kalkulation und Beratung."
              ],
              [
                "Neue Produkte und Systeme.",
                "Du testest neue Lösungen gemeinsam mit Herstellern und bringst ein, was unsere Häuser besser macht."
              ]
            ]
          },
          {
            "head": "Was du mitbringst, um mehr zu bewegen.",
            "items": [
              [
                "Technische Ausbildung.",
                "Abgeschlossene Lehre, Werkmeister, HTL oder Studium im Bereich HKLS, Elektrotechnik oder Gebäudetechnik."
              ],
              [
                "Mindestens zwei Jahre Planungserfahrung.",
                "Planung haustechnischer Anlagen, idealerweise im Wohnbau."
              ],
              [
                "Auslegung und Berechnung.",
                "Du berechnest und dimensionierst Anlagen normkonform und stimmst sie auf Gebäudehülle und Energieausweis ab."
              ],
              [
                "Sicher im CAD.",
                "Routinierter Umgang mit CAD-Software und MS Office."
              ],
              [
                "Der Anspruch, es besser zu machen.",
                "Du übernimmst keine Lösung, weil sie beim letzten Projekt funktioniert hat. Du prüfst, ob es inzwischen eine bessere gibt."
              ]
            ]
          },
          {
            "head": "Was du dafür bekommst.",
            "items": [
              [
                "Eine neue Ära. Du prägst sie mit.",
                "Neue Führung, große Pläne: Steig jetzt ein und bau mit uns das GRIFFNER auf, auf das wir in fünf Jahren gemeinsam stolz zurückblicken."
              ],
              [
                "Ein Gehalt, das zu deiner Verantwortung passt.",
                "Ab 3.700 Euro brutto im Monat, je nach Qualifikation und Erfahrung, mit klarer Bereitschaft zur Überzahlung."
              ],
              [
                "Ein Team, mit dem du arbeiten willst.",
                "Leute, die genauso viel vorhaben wie du. Die dich fordern, dir den Rücken stärken und sehen, was du leistest."
              ],
              [
                "Freiraum für bessere Ideen.",
                "Du entwickelst unsere Haustechnikplanung weiter und hast kurze Wege direkt zur Geschäftsführung."
              ]
            ]
          }
        ],
        "outro": {
          "head": "Du hast mehr vor. Wir auch.",
          "text": "Was würdest du in unserer Haustechnikplanung als Erstes besser machen? Darüber möchten wir mit dir sprechen. Und darüber, was du als Nächstes vorhast. Schick deine Bewerbung an jobs@griffner.com. Für Fragen vorab erreichst du uns unter +43 4233 2237."
        }
      },
      {
        "slug": "it-ki-manager",
        "title": "IT & KI Manager",
        "bereich": "IT",
        "group": "erfahrung",
        "art": "Vollzeit",
        "verbatim": true,
        "intro": [
          "Neue Führung, neue Ideen, neue Produkte. Seit Juni 2026 gestalten wir bei GRIFFNER eine neue Ära. Dafür nehmen wir uns jeden Prozess vor. Jedes Detail. Jede Gewohnheit.",
          "Dafür bringen wir Menschen zusammen, die ihr Fach beherrschen und mehr vorhaben. Die Erfahrung mitbringen und den Mut, neue Wege zu gehen.",
          "Für unsere IT suchen wir jemanden, der unsere Systemlandschaft gestaltet und nicht nur betreibt. Du entwickelst die Architektur weiter. Du bringst künstliche Intelligenz dorthin, wo sie messbaren Nutzen bringt. Und du bleibst nah genug am Tagesgeschäft, um zu wissen, was tatsächlich funktioniert.",
          "Steig jetzt ein und schreib die Geschichte von GRIFFNER mit uns neu."
        ],
        "factsHead": "Das Wichtigste zuerst.",
        "facts": [
          [
            "Gehalt",
            "Ab 4.500 Euro brutto pro Monat, je nach Qualifikation und Erfahrung."
          ],
          [
            "Standort",
            "Griffen, Kärnten."
          ],
          [
            "Arbeitszeit",
            "Vollzeit, mit Präsenz und Homeoffice."
          ],
          [
            "Dein Schwerpunkt",
            "IT-Architektur, Digitalisierung und der Einsatz von KI."
          ]
        ],
        "sections": [
          {
            "head": "Was du mit uns besser machst.",
            "items": [
              [
                "IT-Architektur.",
                "Du verantwortest die Weiterentwicklung unserer Systemlandschaft, definierst Architektur, Schnittstellen und Standards und bewertest Technologieentscheidungen im Hinblick auf Skalierbarkeit."
              ],
              [
                "Künstliche Intelligenz im Unternehmen.",
                "Du identifizierst Anwendungsfälle, führst Pilotprojekte durch, bewertest die Ergebnisse und skalierst, was messbaren Nutzen bringt."
              ],
              [
                "Digitalisierungs- und Automatisierungsprojekte.",
                "Du leitest Projekte von der Anforderungsaufnahme über die Auswahl bis zur Einführung und Schulung."
              ],
              [
                "Betrieb und Sicherheit.",
                "Netzwerk, Server, Backup und IT-Security. Du verantwortest Verfügbarkeit, Datensicherheit und die Einhaltung der Vorgaben."
              ],
              [
                "Operative Unterstützung.",
                "Wenn im Tagesgeschäft ein System ausfällt, löst du das Problem selbst. Wer die Architektur verantwortet, muss den Betrieb kennen."
              ]
            ]
          },
          {
            "head": "Was du mitbringst, um mehr zu bewegen.",
            "items": [
              [
                "Einschlägige Ausbildung.",
                "Studium der Informatik oder Wirtschaftsinformatik, HTL mit entsprechender Praxis oder eine vergleichbare Qualifikation."
              ],
              [
                "Mindestens drei Jahre IT-Erfahrung.",
                "Verantwortung für Systemarchitektur, Infrastruktur oder IT-Projekte in einem Unternehmen vergleichbarer Größe."
              ],
              [
                "Infrastruktur und Sicherheit.",
                "Fundierte Kenntnisse in Netzwerk, Server, Virtualisierung, Backup und IT-Security sowie in den Anforderungen der DSGVO."
              ],
              [
                "Praxis mit künstlicher Intelligenz.",
                "Du hast KI-Werkzeuge bereits produktiv eingesetzt oder pilotiert und kannst Nutzen und Grenzen realistisch einschätzen."
              ],
              [
                "Der Anspruch, es besser zu machen.",
                "Du übernimmst kein System, weil es läuft. Du fragst, ob es das richtige ist, und baust um, wenn es das nicht ist."
              ]
            ]
          },
          {
            "head": "Was du dafür bekommst.",
            "items": [
              [
                "Eine neue Ära. Du prägst sie mit.",
                "Neue Führung, große Pläne: Steig jetzt ein und bau mit uns das GRIFFNER auf, auf das wir in fünf Jahren gemeinsam stolz zurückblicken."
              ],
              [
                "Ein Gehalt, das zu deiner Verantwortung passt.",
                "Ab 4.500 Euro brutto im Monat, je nach Qualifikation und Erfahrung, mit klarer Bereitschaft zur Überzahlung."
              ],
              [
                "Ein Team, mit dem du arbeiten willst.",
                "Leute, die genauso viel vorhaben wie du. Die dich fordern, dir den Rücken stärken und sehen, was du leistest."
              ],
              [
                "Gestaltungsraum.",
                "Du gestaltest die Weiterentwicklung unserer Systemlandschaft aktiv mit und hast kurze Wege direkt zur Geschäftsführung."
              ]
            ]
          }
        ],
        "outro": {
          "head": "Du hast mehr vor. Wir auch.",
          "text": "Was würdest du in unserer IT als Erstes besser machen? Darüber möchten wir mit dir sprechen. Und darüber, was du als Nächstes vorhast. Schick deine Bewerbung an jobs@griffner.com. Für Fragen vorab erreichst du uns unter +43 4233 2237."
        }
      },
      {
        "slug": "controlling-specialist",
        "title": "Controlling Specialist",
        "bereich": "Finanzen",
        "group": "erfahrung",
        "art": "Vollzeit",
        "verbatim": true,
        "intro": [
          "Neue Führung, neue Ideen, neue Produkte. Seit Juni 2026 gestalten wir bei GRIFFNER eine neue Ära. Dafür nehmen wir uns jeden Prozess vor. Jedes Detail. Jede Gewohnheit.",
          "Dafür bringen wir Menschen zusammen, die ihr Fach beherrschen und mehr vorhaben. Die Erfahrung mitbringen und den Mut, neue Wege zu gehen.",
          "Für unser Controlling suchen wir jemanden, der aus Zahlen Richtung macht. Du erkennst früh, wo Projekte und Produktion vom Plan abweichen, gehst den Ursachen auf den Grund und zeigst, wo wir ansetzen müssen. So wird aus Reporting echte Steuerung. Und GRIFFNER wirtschaftlich stärker.",
          "Steig jetzt ein und schreib die Geschichte von GRIFFNER mit uns neu."
        ],
        "factsHead": "Das Wichtigste zuerst.",
        "facts": [
          [
            "Gehalt",
            "Ab 4.000 Euro brutto pro Monat, je nach Qualifikation und Erfahrung."
          ],
          [
            "Standort",
            "Griffen"
          ],
          [
            "Arbeitszeit",
            "Vollzeit, mit Präsenz und Homeoffice."
          ],
          [
            "Dein Schwerpunkt",
            "Budgetierung, Soll-Ist-Vergleiche, Forecast und Reporting."
          ]
        ],
        "sections": [
          {
            "head": "Was du mit uns besser machst.",
            "items": [
              [
                "Projekt- und Nachkalkulation.",
                "Du begleitest jedes Projekt von der Vorkalkulation bis zur Nachkalkulation, führst den Soll-Ist-Vergleich auf Deckungsbeitragsebene und meldest Abweichungen, bevor sie das Ergebnis bewegen."
              ],
              [
                "Kostenstellen- und Deckungsbeitragsrechnung.",
                "Du entwickelst unsere Kostenrechnung weiter, verantwortest die Kostenstellen- und Kostenträgerrechnung und machst sichtbar, womit wir verdienen und womit nicht."
              ],
              [
                "Reporting mit Power BI.",
                "Du entwickelst unser Berichtswesen in Power BI weiter, von der Datenquelle bis zum Dashboard, und lieferst Geschäftsführung und Fachbereichen Zahlen, mit denen sie steuern."
              ],
              [
                "Budget, Forecast und Liquidität.",
                "Unternehmensplanung, Abteilungsbudgets, rollierender Forecast sowie Liquiditäts- und Cashflow-Planung."
              ],
              [
                "Monats- und Jahresabschluss.",
                "Du wirkst bei den Abschlüssen mit, betreust Abgrenzungen, Rückstellungen und Bestandsbewertung und arbeitest eng mit Buchhaltung und Steuerberatung zusammen."
              ]
            ]
          },
          {
            "head": "Was du mitbringst, um mehr zu bewegen.",
            "items": [
              [
                "Fundierte wirtschaftliche Ausbildung.",
                "Abgeschlossenes FH- oder Universitätsstudium mit Schwerpunkt Controlling, Rechnungswesen oder Finance. Alternativ eine HAK-Ausbildung mit einschlägiger Weiterbildung."
              ],
              [
                "Mindestens drei Jahre Controlling-Erfahrung.",
                "Praxis in einem produzierenden Unternehmen oder im Projektgeschäft ist von Vorteil."
              ],
              [
                "Sicherheit in der Kosten- und Leistungsrechnung.",
                "Du kennst die wesentlichen Instrumente des Controllings und setzt sie in der Praxis sicher ein."
              ],
              [
                "Sicher im Umgang mit relevanten Systemen.",
                "Du arbeitest routiniert mit Excel und bringst Erfahrung mit Reporting- und ERP-Systemen mit."
              ],
              [
                "Analytisch und entscheidungsorientiert.",
                "Du erkennst, was hinter den Zahlen steckt, leitest konkrete Handlungsempfehlungen ab und bereitest Informationen so auf, dass sie klare Entscheidungen ermöglichen."
              ]
            ]
          },
          {
            "head": "Was du dafür bekommst.",
            "items": [
              [
                "Eine neue Ära. Du prägst sie mit.",
                "Neue Führung, große Pläne: Steig jetzt ein und bau mit uns das GRIFFNER auf, auf das wir in fünf Jahren gemeinsam stolz zurückblicken."
              ],
              [
                "Ein Gehalt, das zu deiner Verantwortung passt.",
                "Ab 4.000 Euro brutto im Monat, je nach Qualifikation und Erfahrung, mit klarer Bereitschaft zur Überzahlung."
              ],
              [
                "Ein Team, mit dem du arbeiten willst.",
                "Leute, die genauso viel vorhaben wie du. Die dich fordern, dir den Rücken stärken und sehen, was du leistest."
              ],
              [
                "Freiraum für bessere Ideen.",
                "Du entwickelst unser Berichtswesen weiter und hast kurze Wege direkt zur Geschäftsführung."
              ]
            ]
          }
        ],
        "outro": {
          "head": "Du hast mehr vor. Wir auch.",
          "text": "Was würdest du an unserem Reporting als Erstes besser machen? Darüber möchten wir mit dir sprechen. Und darüber, was du als Nächstes vorhast. Schick deine Bewerbung an jobs@griffner.com. Für Fragen vorab erreichst du uns unter +43 4233 2237."
        }
      },
      {
        "slug": "lehre-zimmerei",
        "title": "Zimmerei und Fertigteilhausbau",
        "bereich": "Lehre",
        "group": "lehre",
        "art": "Doppellehre / 4 Jahre",
        "tasks": [
          "Du lernst, Holz zu verarbeiten, von Hand bis zur CNC-Anlage.",
          "Du fertigst Wände, Decken und Dächer in unserer Halle in Griffen.",
          "Du bist bei der Montage auf der Baustelle dabei."
        ],
        "profile": [
          "Pflichtschulabschluss.",
          "Freude an Holz und Handwerk.",
          "Lehre mit oder nach der Matura möglich."
        ]
      },
      {
        "slug": "lehre-zimmereitechnik",
        "title": "Zimmereitechnik und Fertigteilhausbau",
        "bereich": "Lehre",
        "group": "lehre",
        "art": "Doppellehre / 4 Jahre",
        "tasks": [
          "Du lernst Planung und Arbeitsvorbereitung im Holzbau.",
          "Du arbeitest mit CAD und Abbundsoftware.",
          "Du begleitest Häuser von der Planung bis in die Fertigung."
        ],
        "profile": [
          "Pflichtschulabschluss.",
          "Interesse an Technik und Holz.",
          "Lehre mit oder nach der Matura möglich."
        ]
      }
    ],
    "detail": {
      "back": "Alle Stellen",
      "tasks": "Was du machst.",
      "profile": "Was du mitbringst.",
      "benefits": "Was du bei uns hast.",
      "more": "Weitere Stellen.",
      "facts": [
        [
          "Ort",
          "Griffen / Kärnten / AT"
        ],
        [
          "Beginn",
          "[ab sofort]"
        ],
        [
          "Gehalt",
          "[laut KV, Überzahlung je nach Qualifikation]"
        ],
        [
          "Kontakt",
          "[Name / Personal]"
        ]
      ]
    },
    "benefits": [
      "Ein Arbeitsplatz in Griffen, mitten in Kärnten.",
      "Gleitzeit: Außerhalb der Kernzeit teilst du dir deine Arbeit selbst ein.",
      "Zuschuss zum Mittagessen.",
      "Weiterbildung, intern und extern.",
      "Ausgezeichnet als familienfreundlicher Arbeitgeber."
    ],
    "form": {
      "info": "Bewerbung",
      "head": "Bewerben.",
      "initiativ": "Initiativbewerbung",
      "name": "Name",
      "namePh": "Vor- und Nachname",
      "contact": "E-Mail oder Telefon",
      "stelle": "Stelle",
      "cv": "Lebenslauf",
      "cvPick": "Datei wählen",
      "cvHint": "PDF oder Word, bis 10 MB",
      "consent": "Ich bin einverstanden, dass GRIFFNER meine Daten zur Bearbeitung meiner Bewerbung speichert.",
      "privacy": "Datenschutz",
      "privacyHref": "#",
      "submit": "Bewerbung senden",
      "errName": "Bitte gib deinen Namen an.",
      "errContact": "Bitte gib eine E-Mail-Adresse oder Telefonnummer an.",
      "errCv": "Bitte lade deinen Lebenslauf hoch.",
      "errConsent": "Bitte bestätige den Datenschutz.",
      "thanksHead": "Danke, {name}.",
      "thanksText": "Deine Bewerbung ist bei uns. Wir melden uns innerhalb von [fünf] Werktagen bei dir.",
      "again": "Neue Bewerbung"
    },
    "lead": "Hausbau geht besser. Mit dir.",
    "sharedIntro": [
      "Neue Führung, neue Ideen, neue Produkte. Seit Juni 2026 gestalten wir bei GRIFFNER eine neue Ära. Dafür nehmen wir uns jeden Prozess vor. Jedes Detail. Jede Gewohnheit.",
      "Dafür bringen wir Menschen zusammen, die ihr Fach beherrschen und mehr vorhaben. Die Erfahrung mitbringen und den Mut, neue Wege zu gehen."
    ],
    "outroTel": "+43 4233 2237 212"
  },

  footer: {
    cols: [
      { title: 'Architektur', links: [{ label: 'Different Ideas of Living', href: '#ideas' }, { label: 'Concepts', href: '#ideas' }, { label: 'Projects', href: '#proj' }] },
      { title: 'GRIFFNER', links: [{ label: 'Hausbau geht besser', href: '#positionierung' }, { label: 'Leistungen', href: '#weg' }, { label: 'Dein Weg zum Haus', href: '#weg' }, { label: 'Über GRIFFNER', href: '#gregor' }, { label: 'GRIFFNER erleben', href: '#erleben' }] },
      { title: 'Service', links: [{ label: 'Häufige Fragen', href: '#' }, { label: 'Careers', href: 'GRIFFNER%20Karriere.dc.html', extra: 'Different Jobs' }, { label: 'Presse', href: '#' }, { label: 'Kontakt', href: 'GRIFFNER Kontakt.dc.html' }] }
    ],
    place: 'Griffen / AT / 46.70 N / 14.73 E',
    address: ['Griffnerhaus GmbH', 'Gewerbestraße 3', '9112 Griffen'],
    legal: ['Impressum', 'Datenschutz']
  }
};
