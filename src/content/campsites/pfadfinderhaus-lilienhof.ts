import type { CampsiteConfig } from "../types";

const IMG = "/campsites/pfadfinderhaus-lilienhof";

const pfadfinderhausLilienhof: CampsiteConfig = {
  name: "Pfadfinderhaus Lilienhof",
  shortName: "Lilienhof",
  slug: "pfadfinderhaus-lilienhof",
  ort: "Stang bei Kirchschlag",
  region: "Bucklige Welt",
  brandKind: "Pfadfinderhaus & Lagerplatz",
  regionLong: "Bucklige Welt · Niederösterreich · Österreich",

  heroVariant: "center",

  claim: "Dein Lagerplatz hoch über der Buckligen Welt",
  claimEmphasis: "über der Buckligen Welt",
  emailDetail: "die große Selbstversorgerküche mit den nummerierten LiHo-Töpfen",
  intro:
    "Ein umgebautes Schulhaus auf knapp 700 Metern Seehöhe: drei Schlafräume mit 54 Betten, eine große Selbstversorgerküche und ein weitläufiger Lagerplatz — Platz für deine Jugendgruppe mitten in der Buckligen Welt.",

  logo: { src: `${IMG}/logo-d69448b1b6.png`, alt: "Pfadfinderhaus Lilienhof Logo" },

  statement: {
    text: "Aus einer leer stehenden Volksschule haben Freiwillige in rund 9.000 Arbeitsstunden ein geräumiges Heim für Gruppen gemacht.",
    emphasis: "9.000 Arbeitsstunden",
  },

  pillars: [
    {
      title: "Das Haus",
      text: "Eine ehemalige Volksschule, von der Pfadfindergilde zum geräumigen Gruppenhaus umgebaut.",
      image: { src: `${IMG}/gallery-adaa6e2596.webp`, alt: "Das Pfadfinderhaus Lilienhof mit dem charakteristischen Schriftzug und Gilden-Wappen unter blauem Himmel" },
    },
    {
      title: "54 Betten",
      text: "54 Betten in drei Schlafräumen — von der kleinen Patrouille bis zur ganzen Jugendgruppe.",
      image: { src: `${IMG}/gallery-2b7d83f36f.webp`, alt: "Schlafraum mit Stockbetten im Pfadfinderhaus Lilienhof" },
    },
    {
      title: "Eigene Lagerküche",
      text: "Große Selbstversorgerküche mit Gasherd, Geschirr und Töpfen für jede Gruppengröße.",
      image: { src: `${IMG}/gallery-839826f7f8.webp`, alt: "Selbstversorgerküche mit großem Gasherd im Lilienhof" },
    },
  ],

  usps: [
    "54 Betten in 3 Schlafräumen",
    "Selbstversorgerküche",
    "Lagerplatz & Zeltwiese",
    "Lagerfeuerarena",
    "Knapp 700 m Seehöhe",
  ],

  trust: {
    heading: "Ein Haus, das Freiwillige tragen",
    headingEmphasis: "Freiwillige",
    intro:
      "Verwaltet und in Stand gehalten wird der Lilienhof von ehemaligen Pfadfinderinnen und Pfadfindern — unentgeltlich, getreu dem Grundsatz: einmal Pfadfinder, immer Pfadfinder.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/gallery-5a5cb09d3a.webp`, alt: "Pfadfinderhaus Lilienhof mit Sportplatz und Lagerwiese unter blauem Himmel" },
  },

  breather: {
    image: { src: `${IMG}/gallery-6d806a4031.webp`, alt: "Weiter Blick über die sanften bewaldeten Hügel der Buckligen Welt vom Lilienhof aus" },
    line: "Ringsum die sanften Hügel der Buckligen Welt.",
  },

  camping: {
    heading: "Das Haus & der Lagerplatz",
    intro:
      "Vom Schlafraum über den Speisesaal bis zur Großküche: drinnen wie draußen ist alles da, was eine Gruppe für ihr Lager braucht.",
    features: [
      {
        title: "Drei Schlafräume",
        text: "Drei Schlafräume mit 24, 20 und 10 Betten — Stockbetten mit Matratzen, Bettzeug bringt ihr selbst mit.",
        image: { src: `${IMG}/gallery-9e68472106.webp`, alt: "Schlafraum mit Stockbett am Fenster und Blick ins Grüne im Lilienhof" },
      },
      {
        title: "Großer Speisesaal",
        text: "Großer Speisesaal mit langen Tischen und Bänken — Platz für die ganze Lagergruppe an einem Ort.",
        image: { src: `${IMG}/gallery-1661d60d35.webp`, alt: "Speisesaal mit langen Holztischen und Bänken im Lilienhof" },
      },
      {
        title: "Aufenthaltsraum",
        text: "Gemütlicher Aufenthaltsraum mit Holzvertäfelung — der Treffpunkt für Spieleabende und Lagerrunden.",
        image: { src: `${IMG}/gallery-a0156f7b25.webp`, alt: "Aufenthaltsraum mit Holzvertäfelung und langen Tischen im Lilienhof" },
      },
      {
        title: "Voll ausgestattet",
        text: "Die Lagerküche ist komplett ausgestattet — Aufschnittmaschine, Kaffeemaschine und Arbeitsflächen inklusive.",
        image: { src: `${IMG}/gallery-598a52f173.webp`, alt: "Voll ausgestattete Küche mit Aufschnittmaschine und Arbeitsflächen im Lilienhof" },
      },
      {
        title: "Töpfe für jede Gruppe",
        text: "Vom kleinen Topf bis zum großen Kessel: durchnummeriertes LiHo-Geschirr für Gruppen jeder Größe.",
        image: { src: `${IMG}/gallery-640c3e45cb.webp`, alt: "Regal mit nummerierten LiHo-Kochtöpfen im Lilienhof" },
      },
      {
        title: "Außengelände",
        text: "Rund ums Haus liegen Sportplatz, Lagerfeuerarena und Zeltterrassen — viel Platz fürs Lagerleben im Freien.",
        image: { src: `${IMG}/gallery-871691644c.webp`, alt: "Eingangsbereich des Pfadfinderhauses Lilienhof mit Rasenfläche und Zuwegung" },
      },
    ],
  },

  anreise: {
    heading: "Der Weg auf den Lilienhof",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Von Wien über die A2 bis Krumbach, dann auf der B55 über Bad Schönau nach Kirchschlag und weiter Richtung Lembach/Stang — rund 75 Minuten ab Wien.",
      },
      {
        title: "Mit der Bahn",
        text: "Mit der Bahn von Wien Meidling über Wiener Neustadt bis zur Station Edlitz-Grimmenstein, von dort mit dem Linienbus nach Kirchschlag.",
      },
      {
        title: "Letzte Kilometer",
        text: "Von Kirchschlag bis Stang (rund 4 km) gibt es keine öffentliche Verbindung — am besten mit dem Bus anreisen oder abholen lassen.",
      },
    ],
  },

  galerie: {
    heading: "Ein Rundgang durch den Lilienhof",
    headingEmphasis: "Rundgang",
    intro: "Schlafräume, Gänge und Aufenthaltsräume — ein paar Eindrücke aus dem Haus.",
    tag: "Pfadfinderhaus Lilienhof",
    moreCount: 12,
    images: [
      { src: `${IMG}/gallery-79a52cc107.webp`, alt: "Langer Gang mit Wegweisern zu Schlafräumen und Speisesaal im Lilienhof" },
      { src: `${IMG}/gallery-6cd35de590.webp`, alt: "Schlafraum mit Stockbett und Regalwand im Lilienhof" },
      { src: `${IMG}/gallery-57e8c42516.webp`, alt: "Aufenthaltsecke mit Sitzbänken und Pfadfinder-Bild im Lilienhof" },
      { src: `${IMG}/gallery-03babcf653.webp`, alt: "Leiterzimmer mit Jahresplaner und Fensterblick im Lilienhof" },
    ],
  },

  booking: {
    heading: "Plant ihr euer nächstes Lager?",
    headingEmphasis: "euer nächstes Lager",
    intro:
      "Sag uns Termin und Gruppengröße — Christine und die Gilde melden sich mit der Verfügbarkeit und einer Lagerzusage.",
    pricesArePlaceholder: false,
    priceNote:
      "Preise pro Person und Nacht (ab 2 Tagen) — am Wochenende € 13 (Haus) bzw. € 11 (Lagerplatz). Dazu Küchenpauschale (€ 10 pro Tag, mind. € 70) und in der Heizperiode € 3,50 pro Person. Mindestbelag 20 Personen. Mit der Gilde bestätigen.",
    highlight: {
      title: "Selbstversorgerhaus",
      text: "Eigene Großküche mit Geschirr und Töpfen — das Holz für die Lagerküche ist im Preis dabei.",
    },
    categories: [
      { id: "haus", label: "Übernachtung im Haus", perNight: 8 },
      { id: "lagerplatz", label: "Zeltplatz / Lagerplatz", perNight: 7 },
    ],
  },

  kontakt: {
    tel: "+43 2646 27056",
    telHref: "tel:+43264627056",
    mail: "pfadfinderhaus.lilienhof@gmail.com",
    adresse: "Stang 40 · 2860 Kirchschlag i.d. Buckligen Welt · Niederösterreich",
    coords: { lat: 47.53785, lng: 16.29517 },
  },

  story: {
    kicker: "Unsere Geschichte",
    heading: "Vom alten Hof zum neuen Lilienhof",
    intro:
      "Wie aus einer aufgegebenen Herberge und einem leeren Schulhaus der heutige Lilienhof wurde.",
    chapters: [
      {
        no: "01",
        kicker: "Die Vorgeschichte",
        title: "Der alte Lilienhof",
        text: "42 Jahre lang stand der Lilienhof in der Gemeinde Lichtenegg. Als die Gilde ihn aufgeben musste, suchte sie in der Umgebung einen neuen Standort — und wurde in Kirchschlag fündig.",
        image: { src: `${IMG}/gallery-b7b8643c09.webp`, alt: "Wand mit Pfadfinder-Halstüchern und gerahmtem Lilienhof-Bild" },
      },
      {
        no: "02",
        kicker: "Der Umbau",
        title: "Aus der Schule wird ein Heim",
        text: "Das 1966 erbaute Schulhaus stand jahrelang leer. In rund 9.000 Arbeitsstunden machten die Gildemitglieder daraus eine moderne Pfadfinderherberge — ab Pfingsten 2009 in Betrieb.",
        image: { src: `${IMG}/gallery-c77d172f4f.webp`, alt: "Eingangsgang mit Pfadfinder-Wappen und Willkommenstafel im Lilienhof" },
      },
      {
        no: "03",
        kicker: "Bis heute",
        title: "Einmal Pfadfinder, immer Pfadfinder",
        text: "Bis heute wird der Lilienhof von ehemaligen Pfadfinderinnen und Pfadfindern ehrenamtlich verwaltet und in Stand gehalten — damit hier Gruppe für Gruppe ihr Lager erleben kann.",
        image: { src: `${IMG}/gallery-68f59af47f.webp`, alt: "Buntglasfenster mit dem heiligen Georg und Gildenfahne im Lilienhof" },
      },
    ],
  },

  languages: ["DE"],

  nav: [
    { label: "Haus & Lager", href: "#camping", children: [
      { label: "Schlafräume", href: "#camping" },
      { label: "Küche & Speisesaal", href: "#camping" },
    ]},
    { label: "Geschichte", href: "#story" },
    { label: "Preise & Anfahrt", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default pfadfinderhausLilienhof;
