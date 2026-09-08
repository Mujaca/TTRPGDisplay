<template>
    <div class="layout-5">
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
  <link href="https://fonts.googleapis.com/css2?family=Almendra:ital,wght@0,400;0,700;1,400&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=La+Belle+Aurore&display=swap" rel="stylesheet">
*/

.layout-5 {
    --abyss: #050807;
    --deep: #0b1512;
    --bone: #d6cfc0;
    --bone-soft: rgba(214, 207, 192, 0.66);
    --eldritch: #9cbd85; /* das kränkliche Grün */
    --moss: #41604a;
    --blood: #8a3a30; /* Rubrizierung, wie in alten Handschriften */
    --edge: rgba(214, 207, 192, 0.22);

    --display: "Almendra", Georgia, serif;
    --body: "EB Garamond", Georgia, serif;
    --hand: "La Belle Aurore", cursive;

    position: fixed;
    inset: 0;
    overflow-y: auto;

    font-family: var(--body);
    font-size: clamp(1.04rem, 1rem + 0.2vw, 1.18rem);
    line-height: 1.68;
    color: var(--bone);

    /* ══ Der Abgrund: Licht kommt von unten, wo es nicht herkommen sollte ══ */
    background-color: var(--abyss);
    background-image:
        /* Beschwörungskreis, kaum sichtbar hinter dem Titel */
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='900' viewBox='0 0 900 900'%3E%3Cg fill='none' stroke='%23d6cfc0' stroke-opacity='.055'%3E%3Ccircle cx='450' cy='450' r='432'/%3E%3Ccircle cx='450' cy='450' r='396'/%3E%3Ccircle cx='450' cy='450' r='300' stroke-dasharray='2 16'/%3E%3Ccircle cx='450' cy='450' r='168'/%3E%3Ccircle cx='450' cy='450' r='160'/%3E%3Cg%3E%3Cpath d='M450 18 V64'/%3E%3Cpath d='M450 18 V64' transform='rotate(51.4 450 450)'/%3E%3Cpath d='M450 18 V64' transform='rotate(102.8 450 450)'/%3E%3Cpath d='M450 18 V64' transform='rotate(154.2 450 450)'/%3E%3Cpath d='M450 18 V64' transform='rotate(205.6 450 450)'/%3E%3Cpath d='M450 18 V64' transform='rotate(257 450 450)'/%3E%3Cpath d='M450 18 V64' transform='rotate(308.4 450 450)'/%3E%3C/g%3E%3Cpath d='M450 54 L623 837 L-8 351 L908 351 L277 837 Z' stroke-opacity='.04'/%3E%3C/g%3E%3C/svg%3E"),
        /* Nebelschwaden */
        radial-gradient(
            50% 34% at 12% 34%,
            rgba(65, 96, 74, 0.14),
            transparent 72%
        ),
        radial-gradient(
            44% 30% at 92% 62%,
            rgba(65, 96, 74, 0.1),
            transparent 72%
        ),
        linear-gradient(180deg, #08100d 0%, var(--deep) 45%, var(--abyss) 100%);
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-position: center -180px, 0 0, 0 0, 0 0;
    background-size: min(900px, 130vw) auto, auto, auto, auto;
    background-attachment: fixed;

    /* Körnung wie auf unterbelichtetem Filmmaterial */
    &::before {
        content: "";
        position: fixed;
        inset: 0;
        pointer-events: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='f'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.7' numOctaves='4'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23f)' opacity='.1'/%3E%3C/svg%3E");
        mix-blend-mode: soft-light;
    }

    /* Vignette + das grüne Glimmen aus der Tiefe. Es atmet. */
    &::after {
        content: "";
        position: fixed;
        inset: 0;
        pointer-events: none;
        box-shadow: inset 0 0 18vmax 4vmax rgba(0, 0, 0, 0.9);
        background: radial-gradient(
            65% 30% at 50% 114%,
            rgba(156, 189, 133, 0.16),
            rgba(65, 96, 74, 0.07) 55%,
            transparent 80%
        );
        animation: breathe 9s ease-in-out infinite alternate;
    }

    ::selection {
        background: var(--blood);
        color: var(--bone);
    }
}

@keyframes breathe {
    from {
        opacity: 0.65;
    }
    to {
        opacity: 1;
    }
}

/* ══ Satzspiegel: gleiche Aufteilung wie Layout 1-4 ══ */
.sheet {
    position: relative;
    z-index: 1;
    max-width: 1500px;
    margin: 0 auto;
    padding: clamp(42px, 6vh, 80px) clamp(24px, 5vw, 88px) clamp(56px, 9vh, 104px);

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

/* ── Überschriften: Grimoire-Serifen, von unten angeleuchtet ── */
h1 {
    font-family: var(--display);
    font-weight: 700;
    font-size: clamp(2.4rem, 1.3rem + 4vw, 4.4rem);
    line-height: 1.02;
    margin: 0 0 12px;
    color: var(--bone);
    /* der Schein steigt von unten auf */
    text-shadow: 0 -5px 26px rgba(156, 189, 133, 0.35);
}

h2 {
    font-family: var(--display);
    font-weight: 400;
    font-size: clamp(1.5rem, 1.2rem + 1.1vw, 2rem);
    line-height: 1.12;
    margin: 0 0 8px;
    color: var(--bone);

    /* Trennlinie mit lidlosem Auge in der Mitte */
    &::after {
        content: "";
        display: block;
        height: 11px;
        margin-top: 8px;
        background:
            radial-gradient(circle, var(--eldritch) 0 1.5px, transparent 2px)
                center / 11px 11px no-repeat,
            radial-gradient(
                    circle,
                    transparent 0 3.5px,
                    var(--edge) 3.5px 4.5px,
                    transparent 5px
                )
                center / 11px 11px no-repeat,
            linear-gradient(var(--edge), var(--edge)) left center /
                calc(50% - 14px) 1px no-repeat,
            linear-gradient(var(--edge), var(--edge)) right center /
                calc(50% - 14px) 1px no-repeat;
    }
}

section {
    margin-bottom: clamp(40px, 7vh, 72px);
}

/* ── Hero: Untertitel wie eine Übersetzung aus dem Folianten ── */
.hero p {
    font-style: italic;
    font-size: 1.1em;
    color: var(--bone-soft);
    max-width: 60ch;
    margin: 0;
}

/* ── Fließtext, Initial rubriziert wie in der Handschrift ── */
.about > p {
    max-width: 68ch;
}
.about > p::first-letter {
    float: left;
    font-family: var(--display);
    font-weight: 700;
    font-size: 3.8em;
    line-height: 0.8;
    padding: 0.05em 0.13em 0 0;
    color: var(--blood);
    text-shadow: 0 0 22px rgba(138, 58, 48, 0.5);
}

/* ── Vorlesekasten: die herausgerissene Tagebuchseite ── */
.readaloud {
    margin: 30px 0 0;
    padding: 18px 22px 34px; /* unten Platz für die Risskante */
    max-width: 58ch;
    rotate: -0.8deg;
    background:
        radial-gradient(
            40% 34% at 82% 12%,
            rgba(94, 66, 24, 0.28),
            transparent 70%
        ),
        radial-gradient(
            18% 22% at 12% 86%,
            rgba(90, 34, 26, 0.22),
            transparent 70%
        ),
        #ddd2b4;
    color: #33302a;
    font-family: var(--hand);
    font-size: 1.28rem;
    line-height: 1.45;
    box-shadow: 0 22px 34px -18px rgba(0, 0, 0, 0.9);
    /* abgerissene Unterkante */
    clip-path: polygon(
        0 0, 100% 0, 100% 87%, 96% 92%, 91% 87%, 85% 94%, 78% 88%,
        71% 95%, 63% 89%, 55% 96%, 47% 89%, 39% 95%, 31% 88%,
        24% 94%, 17% 88%, 10% 95%, 4% 89%, 0 94%
    );

    &::before {
        content: "— letzter Eintrag, undatiert:";
        display: block;
        margin-bottom: 4px;
        opacity: 0.65;
    }

    cite {
        display: block;
        margin-top: 10px;
        font-family: var(--body);
        font-style: italic;
        font-size: 0.9rem;
        color: rgba(51, 48, 42, 0.75);
    }
}

/* ── Beitritt: Archivkarte mit Vertraulich-Stempel ── */
.entry {
    background: linear-gradient(rgba(13, 22, 18, 0.92), rgba(7, 12, 10, 0.92));
    border: 1px solid var(--edge);
    outline: 1px solid rgba(214, 207, 192, 0.09);
    outline-offset: 5px;
    padding: 24px 26px 26px;
    box-shadow: 0 0 60px -28px rgba(156, 189, 133, 0.4);

    /* der schief aufgedrückte Stempel */
    &::after {
        content: "Vertraulich";
        position: absolute;
        top: 14px;
        right: 14px;
        rotate: -7deg;
        padding: 3px 10px;
        border: 2px solid rgba(138, 58, 48, 0.8);
        border-radius: 2px;
        font-family: var(--body);
        font-weight: 500;
        font-size: 0.72rem;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: rgba(170, 74, 62, 0.9);
        mix-blend-mode: screen;
    }

    h2 {
        font-size: 1.4rem;
        padding-right: 90px; /* Platz für den Stempel */
    }

    p {
        margin: 0 0 18px;
        color: var(--bone-soft);
    }
}

/* Code-Felder: mit Tinte auf die Karte gekritzelt */
.codefields {
    display: flex;
    gap: 12px;
    align-items: flex-end;
    flex-wrap: wrap;

    input {
        width: 2.3ch;
        padding: 2px 0 5px;
        text-align: center;
        font-family: var(--display);
        font-size: 1.9rem;
        color: var(--eldritch);
        background: none;
        border: 0;
        border-bottom: 1px solid var(--edge);
        text-transform: uppercase;
        caret-color: var(--eldritch);

        &:focus {
            outline: none;
            border-bottom-color: var(--eldritch);
            box-shadow: 0 12px 18px -12px rgba(156, 189, 133, 0.7);
        }
        &:focus-visible {
            outline: 1px solid var(--eldritch);
            outline-offset: 3px;
        }
    }
}

button {
    font-family: var(--body);
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 12px 24px;
    border: 1px solid var(--edge);
    border-radius: 0;
    cursor: pointer;
    background: transparent;
    color: var(--bone);

    &:hover {
        border-color: var(--eldritch);
        color: var(--eldritch);
        box-shadow: 0 0 26px -8px rgba(156, 189, 133, 0.7),
            inset 0 0 18px -12px rgba(156, 189, 133, 0.6);
        text-shadow: 0 0 10px rgba(156, 189, 133, 0.5);
    }
    &:focus-visible {
        outline: 2px solid var(--eldritch);
        outline-offset: 3px;
    }
}

.gmline {
    margin: 18px 0 0 !important;
    font-size: 0.98rem;

    a {
        color: var(--eldritch);
        text-decoration-thickness: 1px;
        text-underline-offset: 4px;

        &:hover {
            text-shadow: 0 0 12px rgba(156, 189, 133, 0.6);
        }
    }
}

/* ── Fähigkeiten: Beweisstücke aus der Fallakte ── */
.features ul {
    list-style: none;
    counter-reset: exhibit;
    margin: 22px 0 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 26px clamp(28px, 3.5vw, 56px);

    li {
        counter-increment: exhibit;
        border-top: 1px solid var(--edge);
        padding-top: 12px;

        &::before {
            content: "Beweisstück " counter(exhibit, upper-alpha) ".";
            display: block;
            font-style: italic;
            font-size: 0.88rem;
            letter-spacing: 0.03em;
            color: var(--eldritch);
            margin-bottom: 2px;
        }
    }

    h3 {
        font-family: var(--display);
        font-weight: 400;
        font-size: 1.2rem;
        margin: 0 0 6px;
        color: var(--bone);
    }

    p {
        margin: 0;
        font-size: 0.95em;
        color: var(--bone-soft);
    }
}

/* ── Abschluss ── */
.cta {
    text-align: center;
    margin-bottom: 0;

    p {
        max-width: 50ch;
        margin: 0 auto 22px;
        font-style: italic;
        color: var(--bone-soft);
    }

    button {
        font-size: 1.05rem;
        padding: 15px 34px;
        border-color: var(--blood);
        color: #e8b3a8;

        &:hover {
            border-color: #a8463a;
            color: #f3c9bf;
            box-shadow: 0 0 30px -8px rgba(138, 58, 48, 0.8),
                inset 0 0 20px -12px rgba(138, 58, 48, 0.7);
            text-shadow: 0 0 12px rgba(138, 58, 48, 0.6);
        }
        &:focus-visible {
            outline-color: var(--blood);
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
        position: static; /* bleibt Bezugsrahmen für den Stempel: */
        position: relative;
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

@media (prefers-reduced-motion: reduce) {
    .layout-5::after {
        animation: none;
        opacity: 1;
    }
}
</style>