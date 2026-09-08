<template>
    <div class="layout-1">
        <main class="sheet">
            <section class="hero">
                <h1>Periculo - Dein digitales Abenteuer</h1>
                <p>
                    periculo, von periculum. Dativ - "der Gefahr" und ablativ
                    "durch die Gefahr", als Symbol für das unbekannte und
                    spannende eines P&P Abenteuers.
                </p>
            </section>

            <section class="about">
                <h2>Was ist Periculo?</h2>
                <p>
                    Periculo ist dein digitaler 2. Bildschirm. Du entscheidest,
                    was deine Spieler sehen und hören. Du kannst frei Bilder,
                    Musik und Dokumente hochladen und deinen Spielern zum
                    passenden Zeitpunkt anzeigen lassen. Ihr seid gerade in
                    einem tiefen Dungeon und du möchtest das Ambiente setzen?
                    Lad einfach das Bild hoch, spiele die passende Musik ab und
                    gib deinen Spielern den Link. <br />
                    Ein Spieler findet eine geheime Notiz, die nur er sehen
                    darf? Gib ihm die Notiz frei und nur er kann sie lesen.
                    Deiner Kreativität sind keine Grenzen gesetzt.
                </p>
                <blockquote class="readaloud">
                    „Ihr steigt die letzten Stufen hinab. Der Raum ist größer,
                    als das Gebäude über euch vermuten lässt - und dort, wo der
                    Brunnen sein müsste, steht etwas anderes."
                    <cite
                        >- So klingt eine Szene, kurz bevor du sie
                        freigibst.</cite
                    >
                </blockquote>
            </section>

            <section class="entry">
                <h2>Am Tisch dabei?</h2>
                <p>
                    Deine Spielleitung hat schon eine Sitzung eröffnet? Dann
                    trag hier den vierstelligen Code ein, den sie dir durchgibt
                    - kein Konto, kein Download, läuft direkt im Browser.
                </p>
                <div class="codefields">
                    <input maxlength="1" aria-label="Code, Zeichen 1" />
                    <input maxlength="1" aria-label="Code, Zeichen 2" />
                    <input maxlength="1" aria-label="Code, Zeichen 3" />
                    <input maxlength="1" aria-label="Code, Zeichen 4" />
                    <button type="button">Raum betreten</button>
                </div>
                <p class="gmline">
                    Du leitest selbst?
                    <a href="#">Eröffne eine neue Sitzung</a>
                </p>
            </section>

            <section class="features">
                <h2>Was Periculo für dich übernimmt</h2>
                <ul>
                    <li>
                        <h3>Szenen freigeben</h3>
                        <p>
                            Bereite Bilder und Karten vor der Sitzung vor und
                            gib sie einzeln frei - deine Spieler sehen nichts,
                            bevor du es willst.
                        </p>
                    </li>
                    <li>
                        <h3>Handouts zustecken</h3>
                        <p>
                            Briefe, Wappen oder Hinweise gehen an alle oder nur
                            an eine einzelne Person. Die anderen merken nur,
                            dass jemand liest.
                        </p>
                    </li>
                    <li>
                        <h3>Ambience mischen</h3>
                        <p>
                            Musik und Geräuschkulisse laufen direkt bei deinen
                            Spielern mit - Grundstimmung und Effekte, jede Spur
                            mit eigenem Regler.
                        </p>
                    </li>
                    <li>
                        <h3>Blackout</h3>
                        <p>
                            Ein Tastendruck, und alle Bildschirme sind schwarz -
                            bevor jemand sieht, was er noch nicht sehen sollte.
                        </p>
                    </li>
                </ul>
            </section>

            <section class="cta">
                <h2>Bereit für die nächste Sitzung?</h2>
                <p>
                    Lade deine Karten hoch, leg deine Playlist bereit und schick
                    deinen Spielern einen Link. Mehr braucht es nicht.
                </p>
                <button type="button">Jetzt Sitzung eröffnen</button>
            </section>
        </main>
    </div>
</template>

<style lang="scss" scoped>
/*
  Fonts einmal global einbinden (index.html):
  <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,500;0,700;1,400&family=IM+Fell+English:ital@0;1&family=IM+Fell+English+SC&display=swap" rel="stylesheet">
*/

.layout-1 {
    --parchment: #e7d9b2;
    --parchment-lo: #dbc894;
    --panel: #efe3c2;
    --ink: #20180f;
    --ink-soft: rgba(32, 24, 15, 0.72);
    --rust: #7c2b1f;
    --mapblue: #2c5b6b;
    --gold: #9c7a26;

    --display: "IM Fell English", Georgia, serif;
    --sc: "IM Fell English SC", Georgia, serif;
    --body: "Alegreya", Georgia, serif;

    position: fixed;
    inset: 0; /* statt top/left + 100vw/100vh: vermeidet den Scrollbalken-Versatz */
    overflow-y: auto; /* die Seite selbst scrollt, das Pergament bleibt stehen */

    font-family: var(--body);
    font-size: clamp(1.02rem, 0.98rem + 0.2vw, 1.15rem);
    line-height: 1.6;
    color: var(--ink);

    /* ══ Das Pergament ist jetzt die ganze Seite ══ */
    background-color: var(--parchment);
    background-image:
        /* Lichtfleck in der Mitte, Alterung zu den Rändern */
        radial-gradient(
            60% 45% at 50% 30%,
            rgba(255, 250, 232, 0.6),
            transparent 75%
        ),
        /* Stockflecken in den Ecken */
        radial-gradient(
            34% 26% at 92% 6%,
            rgba(140, 102, 52, 0.18),
            transparent 70%
        ),
        radial-gradient(
            28% 22% at 4% 88%,
            rgba(140, 102, 52, 0.16),
            transparent 70%
        ),
        radial-gradient(
            22% 18% at 78% 96%,
            rgba(140, 102, 52, 0.12),
            transparent 70%
        ),
        linear-gradient(170deg, var(--parchment), var(--parchment-lo));
    background-attachment: fixed;

    /* Papierfaser über allem, fest zum Viewport */
    &::before {
        content: "";
        position: fixed;
        inset: 0;
        pointer-events: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='f'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.7' numOctaves='4'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23f)' opacity='.09'/%3E%3C/svg%3E");
        mix-blend-mode: multiply;
    }

    /* Abgedunkelte, "angegriffene" Blattränder als Vignette */
    &::after {
        content: "";
        position: fixed;
        inset: 0;
        pointer-events: none;
        box-shadow: inset 0 0 14vmax 1vmax rgba(74, 52, 26, 0.28);
    }
}

/* ══ Satzspiegel: volle Blattbreite, aufgeteilt wie eine Regelwerk-Doppelseite ══ */
.sheet {
    position: relative;
    z-index: 1;
    max-width: 1500px;
    margin: 0 auto;
    padding: clamp(30px, 5vh, 64px) clamp(24px, 5vw, 88px) clamp(48px, 8vh, 96px);

    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
    column-gap: clamp(36px, 5vw, 88px);
    align-items: start;
}

/* Hero, Fähigkeiten und CTA laufen über die volle Breite,
   "Was ist Periculo?" und "Am Tisch dabei?" stehen nebeneinander */
.hero,
.features,
.cta {
    grid-column: 1 / -1;
}
.about {
    grid-column: 1;
}
.entry {
    grid-column: 2;
    position: sticky;
    top: clamp(24px, 5vh, 56px); /* die Tafel wandert beim Scrollen mit */
}

/* ── Überschriften: Regelwerk-Rot mit konischer Trennlinie ── */
h1 {
    font-family: var(--display);
    font-weight: 400;
    font-size: clamp(2.4rem, 1.4rem + 4vw, 4.2rem);
    line-height: 1;
    letter-spacing: -0.01em;
    margin: 0 0 10px;
    color: var(--rust);
}

h2 {
    font-family: var(--display);
    font-weight: 400;
    font-size: clamp(1.5rem, 1.2rem + 1.2vw, 2rem);
    line-height: 1.1;
    margin: 0 0 6px;
    color: var(--rust);

    /* die zulaufende Linie aus dem Statblock, ohne SVG */
    &::after {
        content: "";
        display: block;
        height: 5px;
        margin-top: 8px;
        background: var(--rust);
        clip-path: polygon(0 0, 100% 50%, 0 100%);
    }
}

section {
    margin-bottom: clamp(40px, 7vh, 72px);
}

/* ── Hero: Untertitel kursiv wie eine Typenzeile ── */
.hero p {
    font-style: italic;
    font-size: 1.12em;
    color: var(--ink-soft);
    max-width: 56ch;
    margin: 0;
}

/* ── Kapitelanfang mit Initial ── */
.about > p::first-letter {
    float: left;
    font-family: var(--display);
    font-size: 3.9em;
    line-height: 0.78;
    padding: 0.06em 0.12em 0 0;
    color: var(--rust);
}

/* ── Vorlesekasten ── */
.readaloud {
    margin: 26px 0 0;
    padding: 16px 20px;
    background: rgba(124, 43, 31, 0.07);
    border-left: 6px double var(--rust);
    font-style: italic;
    font-size: 1.05em;
    line-height: 1.55;

    cite {
        display: block;
        margin-top: 10px;
        font-family: var(--sc);
        font-style: normal;
        font-size: 0.82rem;
        letter-spacing: 0.05em;
        color: var(--ink-soft);
    }
}

/* ── Beitritt: Tafel wie ein Statblock ── */
.entry {
    background: linear-gradient(#f2e6c6, #eadcb8);
    border: 1px solid rgba(124, 43, 31, 0.35);
    border-top: 4px solid var(--rust);
    box-shadow: 0 16px 30px -22px rgba(0, 0, 0, 0.6);
    padding: 20px 24px 24px;

    p {
        margin: 0 0 18px;
    }
}

.codefields {
    display: flex;
    gap: 12px;
    align-items: flex-end;
    flex-wrap: wrap;

    input {
        width: 2.3ch;
        padding: 2px 0 4px;
        text-align: center;
        font-family: var(--display);
        font-size: 1.9rem;
        color: var(--ink);
        background: none;
        border: 0;
        border-bottom: 2px solid rgba(32, 24, 15, 0.45);
        text-transform: uppercase;

        &:focus {
            outline: none;
            border-bottom-color: var(--rust);
            background: rgba(124, 43, 31, 0.06);
        }
        &:focus-visible {
            outline: 2px solid var(--mapblue);
            outline-offset: 3px;
        }
    }
}

button {
    font-family: var(--sc);
    font-size: 1rem;
    letter-spacing: 0.04em;
    padding: 11px 22px;
    border: 1px solid var(--rust);
    border-radius: 1px;
    cursor: pointer;
    background: var(--rust);
    color: #f3e7c8;
    box-shadow: 0 1px 0 rgba(255, 240, 210, 0.28) inset;

    &:hover {
        background: #8f3324;
    }
    &:focus-visible {
        outline: 2px solid var(--mapblue);
        outline-offset: 3px;
    }
}

.gmline {
    margin: 18px 0 0 !important;
    font-size: 0.98rem;

    a {
        color: var(--mapblue);
        text-decoration-thickness: 1px;
        text-underline-offset: 3px;
    }
}

/* ── Fähigkeiten: zweispaltig wie ein Regelabschnitt ── */
.features ul {
    list-style: none;
    margin: 18px 0 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 26px clamp(28px, 3.5vw, 56px);

    h3 {
        font-family: var(--display);
        font-weight: 400;
        font-size: 1.25rem;
        margin: 0 0 4px;
        padding-bottom: 3px;
        border-bottom: 1px solid rgba(124, 43, 31, 0.4);
        color: var(--rust);
    }

    p {
        margin: 0;
        font-size: 0.98em;
        color: var(--ink-soft);
    }
}

/* ── Abschluss ── */
.cta {
    text-align: center;
    margin-bottom: 0;

    h2::after {
        margin-inline: auto;
        width: 180px;
        clip-path: polygon(0 50%, 50% 0, 100% 50%, 50% 100%); /* Raute statt Keil */
        height: 7px;
    }

    p {
        max-width: 48ch;
        margin: 0 auto 20px;
        font-style: italic;
        color: var(--ink-soft);
    }

    button {
        font-size: 1.1rem;
        padding: 14px 30px;
    }
}

/* Zeilenlänge im Fließtext begrenzen, auch wenn die Spalte breit ist */
.about > p {
    max-width: 68ch;
}
.readaloud {
    max-width: 62ch;
}

@media (max-width: 1000px) {
    .sheet {
        grid-template-columns: 1fr;
    }
    .about,
    .entry {
        grid-column: 1;
    }
    .entry {
        position: static;
    }
    .features ul {
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 640px) {
    .features ul {
        grid-template-columns: 1fr;
    }
}
</style>