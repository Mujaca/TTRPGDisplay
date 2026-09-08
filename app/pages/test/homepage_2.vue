<template>
    <div class="layout-2">
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
  <link href="https://fonts.googleapis.com/css2?family=Special+Elite&family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Caveat:wght@500&display=swap" rel="stylesheet">
*/

.layout-2 {
    --blueprint: #16324a;
    --blueprint-deep: #0e2334;
    --blueprint-panel: #1c3d59;
    --chalk: #dce9f0;
    --chalk-soft: rgba(220, 233, 240, 0.72);
    --line: rgba(206, 228, 240, 0.85);
    --grid-minor: rgba(150, 195, 216, 0.09);
    --grid-major: rgba(150, 195, 216, 0.18);
    --pencil: #f2d479; /* gelber Buntstift für Anmerkungen & Links */

    --display: "Special Elite", "Courier New", monospace;
    --body: "Courier Prime", "Courier New", monospace;
    --hand: "Caveat", cursive;

    position: fixed;
    inset: 0;
    overflow-y: auto;

    font-family: var(--body);
    font-size: clamp(0.98rem, 0.94rem + 0.2vw, 1.08rem);
    line-height: 1.65;
    color: var(--chalk);

    /* ══ Die Blaupause: Zyanotypie mit Millimeterraster ══ */
    background-color: var(--blueprint);
    background-image:
        /* ungleichmäßige Belichtung: heller Fleck, dunkle Ecken */
        radial-gradient(
            55% 40% at 45% 25%,
            rgba(210, 235, 248, 0.09),
            transparent 75%
        ),
        radial-gradient(
            40% 32% at 96% 90%,
            rgba(4, 14, 24, 0.55),
            transparent 70%
        ),
        radial-gradient(
            34% 28% at 2% 6%,
            rgba(4, 14, 24, 0.45),
            transparent 70%
        ),
        /* Hauptlinien alle 120px … */
        repeating-linear-gradient(
            0deg,
            var(--grid-major) 0 1px,
            transparent 1px 120px
        ),
        repeating-linear-gradient(
            90deg,
            var(--grid-major) 0 1px,
            transparent 1px 120px
        ),
        /* … Nebenlinien alle 24px */
        repeating-linear-gradient(
            0deg,
            var(--grid-minor) 0 1px,
            transparent 1px 24px
        ),
        repeating-linear-gradient(
            90deg,
            var(--grid-minor) 0 1px,
            transparent 1px 24px
        ),
        linear-gradient(160deg, #1a3a55, var(--blueprint-deep));
    background-attachment: fixed;

    /* Papierkorn der Lichtpause */
    &::before {
        content: "";
        position: fixed;
        inset: 0;
        pointer-events: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='f'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.7' numOctaves='4'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23f)' opacity='.14'/%3E%3C/svg%3E");
        mix-blend-mode: soft-light;
    }

    /* Zeichnungsrahmen wie auf einem technischen Plan */
    &::after {
        content: "";
        position: fixed;
        inset: 12px;
        pointer-events: none;
        border: 2px solid rgba(206, 228, 240, 0.5);
        outline: 1px solid rgba(206, 228, 240, 0.3);
        outline-offset: 4px;
    }
}

/* ══ Satzspiegel: gleiche Aufteilung wie Layout 1 ══ */
.sheet {
    position: relative;
    z-index: 1;
    max-width: 1500px;
    margin: 0 auto;
    padding: clamp(38px, 6vh, 72px) clamp(30px, 5vw, 88px) clamp(56px, 9vh, 104px);

    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
    column-gap: clamp(36px, 5vw, 88px);
    align-items: start;
}

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
    top: clamp(28px, 5vh, 60px);
}

/* ── Überschriften: Schreibmaschine, weiß durchgepaust ── */
h1 {
    font-family: var(--display);
    font-weight: 400;
    font-size: clamp(2rem, 1.2rem + 3.2vw, 3.6rem);
    line-height: 1.08;
    margin: 0 0 10px;
    color: var(--chalk);
    text-transform: uppercase;
    letter-spacing: 0.02em;
    text-shadow: 0 0 14px rgba(210, 235, 248, 0.25); /* leichtes Durchscheinen der Pause */
}

h2 {
    font-family: var(--display);
    font-weight: 400;
    font-size: clamp(1.35rem, 1.1rem + 1vw, 1.8rem);
    line-height: 1.15;
    margin: 0 0 6px;
    color: var(--chalk);
    text-transform: uppercase;
    letter-spacing: 0.03em;

    /* Maßlinie: Strichlinie mit Endmarken statt konischem Keil */
    &::after {
        content: "";
        display: block;
        height: 7px;
        margin-top: 8px;
        background:
            linear-gradient(var(--line), var(--line)) left center / 1px 7px
                no-repeat,
            linear-gradient(var(--line), var(--line)) right center / 1px 7px
                no-repeat,
            repeating-linear-gradient(
                    90deg,
                    var(--line) 0 8px,
                    transparent 8px 14px
                )
                center / 100% 1px no-repeat;
    }
}

section {
    margin-bottom: clamp(40px, 7vh, 72px);
}

/* ── Hero: Untertitel wie eine Plan-Legende ── */
.hero p {
    font-style: italic;
    font-size: 1.05em;
    color: var(--chalk-soft);
    max-width: 62ch;
    margin: 0;
}

/* ── Initial ── */
.about > p {
    max-width: 68ch;
}
.about > p::first-letter {
    float: left;
    font-family: var(--display);
    font-size: 3.6em;
    line-height: 0.82;
    padding: 0.08em 0.14em 0 0;
    color: var(--pencil);
}

/* ── Vorlesekasten: handschriftliche Notiz mit Buntstift auf dem Plan ── */
.readaloud {
    margin: 26px 0 0;
    padding: 14px 20px;
    max-width: 62ch;
    border: 1px dashed rgba(242, 212, 121, 0.65);
    background: rgba(242, 212, 121, 0.05);
    font-family: var(--hand);
    font-size: 1.45rem;
    line-height: 1.3;
    color: var(--pencil);
    rotate: -0.4deg;

    cite {
        display: block;
        margin-top: 8px;
        font-family: var(--body);
        font-style: italic;
        font-size: 0.85rem;
        letter-spacing: 0.02em;
        color: var(--chalk-soft);
    }
}

/* ── Beitritt: der Zeichnungskopf (Titelblock) des Plans ── */
.entry {
    background: linear-gradient(
        rgba(28, 61, 89, 0.9),
        rgba(20, 45, 66, 0.9)
    );
    border: 2px solid var(--line);
    box-shadow: 0 0 0 1px rgba(206, 228, 240, 0.25),
        0 0 0 5px rgba(206, 228, 240, 0.08);
    padding: 20px 24px 24px;

    h2 {
        font-size: 1.3rem;
    }

    p {
        margin: 0 0 18px;
        color: var(--chalk-soft);
    }
}

.codefields {
    display: flex;
    gap: 12px;
    align-items: flex-end;
    flex-wrap: wrap;

    input {
        width: 2.4ch;
        padding: 2px 0 4px;
        text-align: center;
        font-family: var(--display);
        font-size: 1.8rem;
        color: var(--pencil);
        background: none;
        border: 0;
        border-bottom: 1px dashed rgba(206, 228, 240, 0.6);
        text-transform: uppercase;

        &:focus {
            outline: none;
            border-bottom: 2px solid var(--pencil);
            background: rgba(242, 212, 121, 0.07);
        }
        &:focus-visible {
            outline: 2px solid var(--pencil);
            outline-offset: 3px;
        }
    }
}

button {
    font-family: var(--display);
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 11px 22px;
    border: 1px solid var(--line);
    border-radius: 0;
    cursor: pointer;
    background: transparent;
    color: var(--chalk);

    &:hover {
        background: var(--chalk);
        color: var(--blueprint-deep);
    }
    &:focus-visible {
        outline: 2px solid var(--pencil);
        outline-offset: 3px;
    }
}

.gmline {
    margin: 18px 0 0 !important;
    font-size: 0.95rem;

    a {
        color: var(--pencil);
        text-decoration-style: dashed;
        text-decoration-thickness: 1px;
        text-underline-offset: 4px;
    }
}

/* ── Fähigkeiten: nummerierte Positionen wie in einer Stückliste ── */
.features ul {
    list-style: none;
    counter-reset: pos;
    margin: 22px 0 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 26px clamp(28px, 3.5vw, 56px);

    li {
        counter-increment: pos;
        border-left: 1px solid rgba(206, 228, 240, 0.35);
        padding-left: 16px;
    }

    h3 {
        font-family: var(--display);
        font-weight: 400;
        font-size: 1.05rem;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        margin: 0 0 6px;
        color: var(--chalk);

        &::before {
            content: "Pos. " counter(pos, decimal-leading-zero) " — ";
            color: var(--pencil);
        }
    }

    p {
        margin: 0;
        font-size: 0.94em;
        color: var(--chalk-soft);
    }
}

/* ── Abschluss ── */
.cta {
    text-align: center;
    margin-bottom: 0;

    h2::after {
        width: 220px;
        margin-inline: auto;
    }

    p {
        max-width: 52ch;
        margin: 0 auto 22px;
        font-style: italic;
        color: var(--chalk-soft);
    }

    button {
        font-size: 1.05rem;
        padding: 14px 30px;
        background: var(--pencil);
        border-color: var(--pencil);
        color: var(--blueprint-deep);

        &:hover {
            background: #f8e3a0;
        }
    }
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
    .layout-2::after {
        inset: 6px;
        outline: none;
    }
    .features ul {
        grid-template-columns: 1fr;
    }
}
</style>