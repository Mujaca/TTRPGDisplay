<template>
    <div class="layout-4">
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
  <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&family=Homemade+Apple&display=swap" rel="stylesheet">
*/

.layout-4 {
    --paper: #e9e0cb;
    --paper-lo: #d8cbab;
    --ink: #2e2212;
    --ink-soft: rgba(46, 34, 18, 0.72);
    --brass: #a9853c;
    --brass-hi: #c9a75b;
    --brass-lo: #8f6d2c;
    --brass-deep: #6e5624;
    --copper: #9c5a3c;
    --verdigris: #3e6b5e;
    --iron: #2e2418;

    --display: "Abril Fatface", Georgia, serif;
    --body: "Old Standard TT", Georgia, serif;
    --hand: "Homemade Apple", cursive;

    position: fixed;
    inset: 0;
    overflow-y: auto;

    font-family: var(--body);
    font-size: clamp(1.02rem, 0.98rem + 0.2vw, 1.14rem);
    line-height: 1.62;
    color: var(--ink);

    /* ══ Patentschrift: elfenbeinfarbenes Papier mit Stichgravur-Linien ══ */
    background-color: var(--paper);
    background-image:
        /* Lichtfleck oben, wie unter einer Schreibtischlampe */
        radial-gradient(
            55% 40% at 50% 8%,
            rgba(255, 250, 236, 0.65),
            transparent 75%
        ),
        /* Stockflecken */
        radial-gradient(
            30% 24% at 94% 10%,
            rgba(122, 90, 46, 0.14),
            transparent 70%
        ),
        radial-gradient(
            26% 20% at 3% 82%,
            rgba(122, 90, 46, 0.13),
            transparent 70%
        ),
        /* feine waagerechte Gravurlinien wie im Kupferstich */
        repeating-linear-gradient(
            0deg,
            rgba(46, 34, 18, 0.03) 0 1px,
            transparent 1px 4px
        ),
        linear-gradient(175deg, var(--paper), var(--paper-lo));
    background-attachment: fixed;

    /* Papierkorn */
    &::before {
        content: "";
        position: fixed;
        inset: 0;
        pointer-events: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='f'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.7' numOctaves='4'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23f)' opacity='.08'/%3E%3C/svg%3E");
        mix-blend-mode: multiply;
    }

    /* Vernieteter Messingrahmen um den Viewport + Sepia-Vignette */
    &::after {
        content: "";
        position: fixed;
        inset: 10px;
        pointer-events: none;
        border: 6px dotted rgba(169, 133, 60, 0.75); /* die Punkte sind die Nieten */
        outline: 1px solid rgba(110, 86, 36, 0.55);
        outline-offset: -10px;
        box-shadow:
            inset 0 0 12vmax 1vmax rgba(90, 62, 26, 0.22),
            0 0 0 10px rgba(110, 86, 36, 0.12);
    }

    ::selection {
        background: var(--brass);
        color: #fff8e6;
    }
}

/* ══ Satzspiegel: gleiche Aufteilung wie Layout 1-3 ══ */
.sheet {
    position: relative;
    z-index: 1;
    max-width: 1500px;
    margin: 0 auto;
    padding: clamp(42px, 6vh, 76px) clamp(30px, 5vw, 88px) clamp(56px, 9vh, 104px);

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

/* ── Überschriften: Fat Face wie ein viktorianisches Plakat ── */
h1 {
    font-family: var(--display);
    font-weight: 400;
    font-size: clamp(2.4rem, 1.3rem + 4vw, 4.4rem);
    line-height: 1.02;
    margin: 0 0 12px;
    color: var(--ink);
    /* Prägedruck: das Papier wirft unter dem Buchstaben eine Lichtkante */
    text-shadow: 0 1px 0 rgba(255, 250, 235, 0.8);
}

h2 {
    font-family: var(--display);
    font-weight: 400;
    font-size: clamp(1.45rem, 1.15rem + 1.1vw, 1.95rem);
    line-height: 1.12;
    margin: 0 0 8px;
    color: var(--ink);
    text-shadow: 0 1px 0 rgba(255, 250, 235, 0.7);

    /* doppelte Buchlinie in Messing */
    &::after {
        content: "";
        display: block;
        height: 6px;
        margin-top: 8px;
        background:
            linear-gradient(var(--brass), var(--brass)) top left / 100% 2px
                no-repeat,
            linear-gradient(var(--brass-lo), var(--brass-lo)) bottom left /
                100% 1px no-repeat;
    }
}

section {
    margin-bottom: clamp(40px, 7vh, 72px);
}

/* ── Hero: Untertitel als Patent-Untertitel ── */
.hero p {
    font-style: italic;
    font-size: 1.12em;
    color: var(--ink-soft);
    max-width: 60ch;
    margin: 0;
}

/* ── Fließtext mit Initial ── */
.about > p {
    max-width: 68ch;
}
.about > p::first-letter {
    float: left;
    font-family: var(--display);
    font-size: 3.7em;
    line-height: 0.82;
    padding: 0.05em 0.13em 0 0;
    color: var(--copper);
}

/* ── Vorlesekasten: Logbucheintrag in Tinte, auf linierten Seiten ── */
.readaloud {
    margin: 28px 0 0;
    padding: 18px 22px 14px;
    max-width: 60ch;
    background:
        repeating-linear-gradient(
            0deg,
            transparent 0 27px,
            rgba(62, 107, 94, 0.28) 27px 28px
        ),
        #f2ead6;
    border: 1px solid rgba(110, 86, 36, 0.4);
    box-shadow: 0 8px 18px -12px rgba(46, 34, 18, 0.5);
    rotate: -0.35deg;

    font-family: var(--hand);
    font-size: 1.15rem;
    line-height: 28px; /* die Schrift sitzt auf den Linien */
    color: #263a49; /* Eisengallustinte */

    &::before {
        content: "Aus dem Logbuch des Maschinisten —";
        display: block;
        margin-bottom: 2px;
        color: rgba(38, 58, 73, 0.7);
    }

    cite {
        display: block;
        margin-top: 6px;
        font-family: var(--body);
        font-style: italic;
        font-size: 0.88rem;
        line-height: 1.4;
        color: var(--ink-soft);
    }
}

/* ── Beitritt: graviertes Messingschild mit Eckschrauben ── */
.entry {
    padding: 24px 26px 26px;
    border: 1px solid var(--brass-deep);
    border-radius: 3px;
    color: #241a0c;
    background-image:
        /* vier Schraubenköpfe */
        radial-gradient(circle, var(--brass-deep) 0 3px, rgba(30, 20, 6, 0.5) 3px 4px, transparent 4px)
            top 10px left 10px / 12px 12px no-repeat,
        radial-gradient(circle, var(--brass-deep) 0 3px, rgba(30, 20, 6, 0.5) 3px 4px, transparent 4px)
            top 10px right 10px / 12px 12px no-repeat,
        radial-gradient(circle, var(--brass-deep) 0 3px, rgba(30, 20, 6, 0.5) 3px 4px, transparent 4px)
            bottom 10px left 10px / 12px 12px no-repeat,
        radial-gradient(circle, var(--brass-deep) 0 3px, rgba(30, 20, 6, 0.5) 3px 4px, transparent 4px)
            bottom 10px right 10px / 12px 12px no-repeat,
        /* das Blech selbst, mit Lichtkante */
        linear-gradient(150deg, var(--brass-hi), var(--brass) 45%, var(--brass-lo));
    box-shadow:
        inset 0 1px 0 rgba(255, 240, 200, 0.65),
        inset 0 -3px 8px rgba(60, 40, 10, 0.45),
        0 14px 28px -16px rgba(46, 34, 18, 0.7);

    h2 {
        font-size: 1.35rem;
        color: #241a0c;
        text-shadow: 0 1px 0 rgba(255, 240, 200, 0.55); /* graviert ins Messing */

        &::after {
            background:
                linear-gradient(#241a0c, #241a0c) top left / 100% 2px no-repeat,
                linear-gradient(rgba(36, 26, 12, 0.6), rgba(36, 26, 12, 0.6))
                    bottom left / 100% 1px no-repeat;
        }
    }

    p {
        margin: 0 0 18px;
        color: rgba(36, 26, 12, 0.8);
    }
}

/* Code-Felder: dunkle Schlitze im Blech, wie Anzeigefenster eines Zählwerks */
.codefields {
    display: flex;
    gap: 10px;
    align-items: stretch;
    flex-wrap: wrap;

    input {
        width: 2.4ch;
        padding: 6px 0;
        text-align: center;
        font-family: var(--body);
        font-weight: 700;
        font-size: 1.7rem;
        color: #f0e3c2;
        background: var(--iron);
        border: 1px solid #1e1710;
        border-radius: 2px;
        text-transform: uppercase;
        box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.6),
            0 1px 0 rgba(255, 240, 200, 0.4);
        caret-color: #f0e3c2;

        &:focus {
            outline: none;
            border-color: var(--verdigris);
            box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.6),
                0 0 0 2px rgba(62, 107, 94, 0.55);
        }
    }
}

button {
    font-family: var(--body);
    font-weight: 700;
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 12px 24px;
    border: 1px solid #1e1710;
    border-radius: 2px;
    cursor: pointer;
    background: linear-gradient(#3a2e1e, var(--iron));
    color: #f0e3c2;
    box-shadow: inset 0 1px 0 rgba(255, 240, 200, 0.25),
        0 2px 0 #1e1710;

    &:hover {
        background: linear-gradient(#463824, #362a1a);
    }
    &:active {
        translate: 0 2px; /* der Knopf lässt sich drücken */
        box-shadow: inset 0 1px 0 rgba(255, 240, 200, 0.25);
    }
    &:focus-visible {
        outline: 2px solid var(--verdigris);
        outline-offset: 3px;
    }
}

.gmline {
    margin: 18px 0 0 !important;
    font-size: 0.98rem;

    a {
        color: #2e5a4e;
        text-decoration-thickness: 1px;
        text-underline-offset: 3px;
    }
}

/* ── Fähigkeiten: Tafeln I-IV wie im Patentanhang ── */
.features ul {
    list-style: none;
    counter-reset: tafel;
    margin: 22px 0 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 26px clamp(28px, 3.5vw, 56px);

    li {
        counter-increment: tafel;
        border-top: 1px solid rgba(46, 34, 18, 0.3);
        padding-top: 12px;

        &::before {
            content: "Tafel " counter(tafel, upper-roman) ".";
            display: block;
            font-style: italic;
            font-size: 0.85rem;
            letter-spacing: 0.04em;
            color: var(--copper);
            margin-bottom: 2px;
        }
    }

    h3 {
        font-family: var(--display);
        font-weight: 400;
        font-size: 1.15rem;
        margin: 0 0 6px;
        color: var(--ink);
    }

    p {
        margin: 0;
        font-size: 0.95em;
        color: var(--ink-soft);
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
        max-width: 50ch;
        margin: 0 auto 22px;
        font-style: italic;
        color: var(--ink-soft);
    }

    button {
        font-size: 1.05rem;
        padding: 15px 32px;
        background: linear-gradient(150deg, var(--brass-hi), var(--brass) 55%, var(--brass-lo));
        border-color: var(--brass-deep);
        color: #241a0c;
        box-shadow: inset 0 1px 0 rgba(255, 240, 200, 0.7),
            0 3px 0 var(--brass-deep);

        &:hover {
            background: linear-gradient(150deg, #d8b96f, var(--brass-hi) 55%, var(--brass));
        }
        &:active {
            translate: 0 3px;
            box-shadow: inset 0 1px 0 rgba(255, 240, 200, 0.7);
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
    .layout-4::after {
        inset: 5px;
        border-width: 4px;
        outline: none;
    }
    .features ul {
        grid-template-columns: 1fr;
    }
}
</style>