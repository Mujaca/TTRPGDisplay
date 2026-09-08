<template>
    <div class="layout-3">
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
  <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;600;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">
*/

.layout-3 {
    --void: #07090d;
    --panel: #0d1219;
    --text: #c8d6d4;
    --text-soft: rgba(200, 214, 212, 0.66);
    --cyan: #39e6d0;
    --magenta: #ff2e88;
    --hazard: #f5d90a;
    --edge: rgba(57, 230, 208, 0.3);

    --display: "Chakra Petch", system-ui, sans-serif;
    --body: "Share Tech Mono", ui-monospace, monospace;

    position: fixed;
    inset: 0;
    overflow-y: auto;

    font-family: var(--body);
    font-size: clamp(0.98rem, 0.94rem + 0.2vw, 1.06rem);
    line-height: 1.7;
    color: var(--text);

    /* ══ CRT im dunklen Zimmer, dahinter die Stadt ══ */
    background-color: var(--void);
    background-image:
        /* Phosphor-Glühen in der Bildmitte */
        radial-gradient(
            60% 45% at 50% 28%,
            rgba(57, 230, 208, 0.07),
            transparent 75%
        ),
        /* Neonschleier von den Rändern, wie Reklame vorm Fenster */
        radial-gradient(
            42% 34% at 100% 0%,
            rgba(255, 46, 136, 0.1),
            transparent 70%
        ),
        radial-gradient(
            36% 30% at 0% 100%,
            rgba(57, 230, 208, 0.08),
            transparent 70%
        ),
        /* Scanlines */
        repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.28) 0 1px,
            transparent 1px 3px
        ),
        /* Skyline am unteren Rand: Silhouette mit erleuchteten Fenstern */
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='240'%3E%3Cg fill='%230d141d'%3E%3Crect x='0' y='110' width='72' height='130'/%3E%3Crect x='82' y='55' width='60' height='185'/%3E%3Crect x='152' y='140' width='92' height='100'/%3E%3Crect x='254' y='85' width='52' height='155'/%3E%3Crect x='316' y='160' width='100' height='80'/%3E%3Crect x='426' y='35' width='70' height='205'/%3E%3Crect x='506' y='125' width='62' height='115'/%3E%3Crect x='578' y='75' width='92' height='165'/%3E%3Crect x='680' y='150' width='70' height='90'/%3E%3Crect x='760' y='50' width='56' height='190'/%3E%3Crect x='826' y='132' width='86' height='108'/%3E%3Crect x='922' y='90' width='62' height='150'/%3E%3Crect x='994' y='155' width='92' height='85'/%3E%3Crect x='1096' y='65' width='62' height='175'/%3E%3Crect x='1168' y='135' width='32' height='105'/%3E%3Crect x='459' y='8' width='3' height='27'/%3E%3C/g%3E%3Ccircle cx='460.5' cy='7' r='3' fill='%23ff2e88' opacity='.8'/%3E%3Cg fill='%2339e6d0' opacity='.55'%3E%3Crect x='95' y='70' width='4' height='6'/%3E%3Crect x='112' y='96' width='4' height='6'/%3E%3Crect x='128' y='70' width='4' height='6'/%3E%3Crect x='440' y='60' width='4' height='6'/%3E%3Crect x='458' y='100' width='4' height='6'/%3E%3Crect x='474' y='48' width='4' height='6'/%3E%3Crect x='596' y='95' width='4' height='6'/%3E%3Crect x='620' y='120' width='4' height='6'/%3E%3Crect x='640' y='88' width='4' height='6'/%3E%3Crect x='772' y='70' width='4' height='6'/%3E%3Crect x='790' y='105' width='4' height='6'/%3E%3Crect x='936' y='108' width='4' height='6'/%3E%3Crect x='955' y='130' width='4' height='6'/%3E%3Crect x='1108' y='85' width='4' height='6'/%3E%3Crect x='1126' y='118' width='4' height='6'/%3E%3C/g%3E%3Cg fill='%23ff2e88' opacity='.5'%3E%3Crect x='270' y='105' width='4' height='6'/%3E%3Crect x='288' y='128' width='4' height='6'/%3E%3Crect x='530' y='140' width='4' height='6'/%3E%3Crect x='845' y='150' width='4' height='6'/%3E%3Crect x='866' y='172' width='4' height='6'/%3E%3Crect x='1010' y='170' width='4' height='6'/%3E%3C/g%3E%3C/svg%3E"),
        /* Stadtglühen hinter der Skyline */
        radial-gradient(
            70% 26% at 50% 102%,
            rgba(255, 46, 136, 0.12),
            rgba(57, 230, 208, 0.05) 55%,
            transparent 80%
        ),
        /* schmale Datenspalten, kaum sichtbar */
        repeating-linear-gradient(
            90deg,
            rgba(57, 230, 208, 0.025) 0 1px,
            transparent 1px 96px
        ),
        linear-gradient(170deg, #0b1017, #05070a);
    background-repeat:
        no-repeat, no-repeat, no-repeat,
        repeat,
        repeat-x,
        no-repeat, repeat, no-repeat;
    background-position:
        0 0, 0 0, 0 0,
        0 0,
        bottom center,
        bottom center, 0 0, 0 0;
    background-size:
        auto, auto, auto,
        auto,
        auto clamp(140px, 24vh, 240px),
        auto, auto, auto;
    background-attachment: fixed;

    /* Bildrauschen des Monitors */
    &::before {
        content: "";
        position: fixed;
        inset: 0;
        pointer-events: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='f'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.7' numOctaves='4'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23f)' opacity='.1'/%3E%3C/svg%3E");
        mix-blend-mode: screen;
        opacity: 0.5;
    }

    /* Röhrenvignette + langsam durchlaufender Roll-Balken */
    &::after {
        content: "";
        position: fixed;
        inset: 0;
        pointer-events: none;
        box-shadow: inset 0 0 16vmax 3vmax rgba(0, 0, 0, 0.85);
        background: linear-gradient(
                180deg,
                transparent 0%,
                rgba(170, 255, 242, 0.03) 42%,
                rgba(170, 255, 242, 0.07) 50%,
                rgba(170, 255, 242, 0.03) 58%,
                transparent 100%
            )
            no-repeat;
        background-size: 100% 22vh;
        animation: rollbar 11s linear infinite;
    }

    ::selection {
        background: var(--magenta);
        color: var(--void);
    }
}

/* ══ Satzspiegel: gleiche Aufteilung wie Layout 1 & 2 ══ */
.sheet {
    position: relative;
    z-index: 1;
    max-width: 1500px;
    margin: 0 auto;
    padding: clamp(38px, 6vh, 72px) clamp(24px, 5vw, 88px) clamp(56px, 9vh, 104px);

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

/* ── Überschriften: Versalien mit chromatischer Aberration ── */
h1 {
    font-family: var(--display);
    font-weight: 700;
    font-size: clamp(2rem, 1.1rem + 3.6vw, 3.9rem);
    line-height: 1.02;
    margin: 0 0 12px;
    text-transform: uppercase;
    letter-spacing: 0.01em;
    color: #f2fbf9;
    /* Farbkanäle minimal versetzt, wie ein schlecht konvergierter Monitor */
    text-shadow:
        1.5px 0 0 rgba(255, 46, 136, 0.55),
        -1.5px 0 0 rgba(57, 230, 208, 0.55);

    /* blinkender Cursor am Zeilenende */
    &::after {
        content: "_";
        color: var(--cyan);
        text-shadow: none;
        animation: blink 1.1s steps(1) infinite;
    }
}
@keyframes blink {
    50% {
        opacity: 0;
    }
}

h2 {
    font-family: var(--display);
    font-weight: 600;
    font-size: clamp(1.3rem, 1.05rem + 1vw, 1.75rem);
    line-height: 1.15;
    margin: 0 0 8px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--cyan);

    /* Statusleiste: kurzer Neonbalken, Rest Warnschraffur */
    &::after {
        content: "";
        display: block;
        height: 4px;
        margin-top: 8px;
        background:
            linear-gradient(var(--cyan), var(--cyan)) left center / 64px 4px
                no-repeat,
            repeating-linear-gradient(
                    -45deg,
                    rgba(245, 217, 10, 0.5) 0 6px,
                    transparent 6px 12px
                )
                left 72px center / calc(100% - 72px) 2px no-repeat;
    }
}

section {
    margin-bottom: clamp(40px, 7vh, 72px);
}

/* ── Hero: Untertitel wie eine Dossier-Kopfzeile ── */
.hero p {
    font-size: 1em;
    color: var(--text-soft);
    max-width: 68ch;
    margin: 0;

    &::before {
        content: "// ";
        color: var(--magenta);
    }
}

/* ── Fließtext ── */
.about > p {
    max-width: 68ch;
}
.about > p::first-letter {
    float: left;
    font-family: var(--display);
    font-weight: 700;
    font-size: 3.4em;
    line-height: 0.85;
    padding: 0.04em 0.14em 0 0;
    color: var(--cyan);
    text-shadow: 0 0 18px rgba(57, 230, 208, 0.5);
}

/* ── Vorlesekasten: abgefangene Übertragung ── */
.readaloud {
    margin: 26px 0 0;
    padding: 14px 18px;
    max-width: 62ch;
    background: rgba(255, 46, 136, 0.06);
    border-left: 3px solid var(--magenta);
    color: #ffd7e8;
    font-style: italic;

    &::before {
        content: "> EINGEHENDE ÜBERTRAGUNG · KANAL 07";
        display: block;
        font-style: normal;
        font-family: var(--display);
        font-weight: 600;
        font-size: 0.72rem;
        letter-spacing: 0.14em;
        color: var(--magenta);
        margin-bottom: 8px;
    }

    cite {
        display: block;
        margin-top: 10px;
        font-style: normal;
        font-size: 0.85rem;
        color: var(--text-soft);
    }
}

/* ── Beitritt: Zugangsterminal mit HUD-Eckklammern ── */
.entry {
    background: linear-gradient(rgba(13, 18, 25, 0.92), rgba(9, 13, 18, 0.92));
    border: 1px solid var(--edge);
    padding: 22px 24px 24px;
    /* Eckklammern aus vier kleinen Gradients */
    background-image:
        linear-gradient(var(--cyan), var(--cyan)) top left / 18px 2px,
        linear-gradient(var(--cyan), var(--cyan)) top left / 2px 18px,
        linear-gradient(var(--cyan), var(--cyan)) top right / 18px 2px,
        linear-gradient(var(--cyan), var(--cyan)) top right / 2px 18px,
        linear-gradient(var(--cyan), var(--cyan)) bottom left / 18px 2px,
        linear-gradient(var(--cyan), var(--cyan)) bottom left / 2px 18px,
        linear-gradient(var(--cyan), var(--cyan)) bottom right / 18px 2px,
        linear-gradient(var(--cyan), var(--cyan)) bottom right / 2px 18px,
        linear-gradient(rgba(13, 18, 25, 0.92), rgba(9, 13, 18, 0.92));
    background-repeat: no-repeat;
    box-shadow: 0 0 40px -18px rgba(57, 230, 208, 0.4);

    h2 {
        font-size: 1.25rem;
    }

    p {
        margin: 0 0 18px;
        color: var(--text-soft);
    }
}

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
        font-size: 1.7rem;
        color: var(--cyan);
        background: rgba(57, 230, 208, 0.05);
        border: 1px solid var(--edge);
        border-radius: 0;
        text-transform: uppercase;
        caret-color: var(--cyan);

        &:focus {
            outline: none;
            border-color: var(--cyan);
            box-shadow: 0 0 14px -4px var(--cyan);
        }
        &:focus-visible {
            outline: 1px solid var(--cyan);
            outline-offset: 2px;
        }
    }
}

button {
    font-family: var(--display);
    font-weight: 700;
    font-size: 0.92rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 12px 24px;
    border: 1px solid var(--cyan);
    cursor: pointer;
    background: var(--cyan);
    color: var(--void);
    /* abgeschrägte Ecke, das Cyberpunk-UI-Detail schlechthin */
    clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));

    &:hover {
        background: #7ff2e2;
        box-shadow: 0 0 24px -6px var(--cyan);
    }
    &:focus-visible {
        outline: 2px solid var(--magenta);
        outline-offset: 3px;
    }
}

.gmline {
    margin: 18px 0 0 !important;
    font-size: 0.92rem;

    a {
        color: var(--magenta);
        text-decoration-thickness: 1px;
        text-underline-offset: 4px;

        &:hover {
            text-shadow: 0 0 12px rgba(255, 46, 136, 0.6);
        }
    }
}

/* ── Fähigkeiten: Subroutinen mit Hex-Nummern ── */
.features ul {
    list-style: none;
    counter-reset: sub;
    margin: 22px 0 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 26px clamp(28px, 3.5vw, 56px);

    li {
        counter-increment: sub;
        border-top: 1px solid var(--edge);
        padding-top: 12px;

        &::before {
            content: "0" counter(sub) " ";
            font-family: var(--display);
            font-weight: 600;
            font-size: 0.78rem;
            letter-spacing: 0.12em;
            color: var(--magenta);
        }
    }

    h3 {
        display: inline; /* rückt hinter die Nummer */
        font-family: var(--display);
        font-weight: 600;
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin: 0;
        color: var(--text);
    }

    p {
        margin: 8px 0 0;
        font-size: 0.93em;
        color: var(--text-soft);
    }
}

/* ── Abschluss ── */
.cta {
    text-align: center;
    margin-bottom: 0;

    h2::after {
        background:
            linear-gradient(var(--cyan), var(--cyan)) center / 64px 4px
                no-repeat;
    }

    p {
        max-width: 54ch;
        margin: 0 auto 22px;
        color: var(--text-soft);
    }

    button {
        font-size: 1.02rem;
        padding: 15px 34px;
        background: var(--magenta);
        border-color: var(--magenta);
        color: #fff;

        &:hover {
            background: #ff5ba1;
            box-shadow: 0 0 28px -6px var(--magenta);
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
    .features ul {
        grid-template-columns: 1fr;
    }
}

@keyframes rollbar {
    from {
        background-position: 0 -25%;
    }
    to {
        background-position: 0 125%;
    }
}

@media (prefers-reduced-motion: reduce) {
    h1::after {
        animation: none;
    }
    .layout-3::after {
        animation: none;
        background: none;
    }
}
</style>