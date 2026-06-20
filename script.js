const TOTAL_ROUNDS = 10;
const optionLetters = ["A", "B", "C", "D"];

const flags = {
    brazil: `
        <svg viewBox="0 0 300 200" aria-hidden="true" focusable="false">
            <rect width="300" height="200" fill="#009b3a"/>
            <polygon points="150,22 278,100 150,178 22,100" fill="#ffdf00"/>
            <circle cx="150" cy="100" r="44" fill="#002776"/>
            <path d="M108 90 Q150 76 192 104" fill="none" stroke="#ffffff" stroke-width="8"/>
        </svg>`,
    argentina: `
        <svg viewBox="0 0 300 200" aria-hidden="true" focusable="false">
            <rect width="300" height="67" fill="#74acdf"/>
            <rect y="67" width="300" height="66" fill="#ffffff"/>
            <rect y="133" width="300" height="67" fill="#74acdf"/>
            <circle cx="150" cy="100" r="18" fill="#f6b40e"/>
            <g stroke="#f6b40e" stroke-width="4" stroke-linecap="round">
                <line x1="150" y1="70" x2="150" y2="56"/>
                <line x1="150" y1="130" x2="150" y2="144"/>
                <line x1="120" y1="100" x2="106" y2="100"/>
                <line x1="180" y1="100" x2="194" y2="100"/>
                <line x1="128" y1="78" x2="118" y2="68"/>
                <line x1="172" y1="122" x2="182" y2="132"/>
                <line x1="172" y1="78" x2="182" y2="68"/>
                <line x1="128" y1="122" x2="118" y2="132"/>
            </g>
        </svg>`,
    france: `
        <svg viewBox="0 0 300 200" aria-hidden="true" focusable="false">
            <rect width="100" height="200" fill="#0055a4"/>
            <rect x="100" width="100" height="200" fill="#ffffff"/>
            <rect x="200" width="100" height="200" fill="#ef4135"/>
        </svg>`,
    germany: `
        <svg viewBox="0 0 300 200" aria-hidden="true" focusable="false">
            <rect width="300" height="67" fill="#000000"/>
            <rect y="67" width="300" height="66" fill="#dd0000"/>
            <rect y="133" width="300" height="67" fill="#ffce00"/>
        </svg>`,
    japan: `
        <svg viewBox="0 0 300 200" aria-hidden="true" focusable="false">
            <rect width="300" height="200" fill="#ffffff"/>
            <circle cx="150" cy="100" r="46" fill="#bc002d"/>
        </svg>`,
    portugal: `
        <svg viewBox="0 0 300 200" aria-hidden="true" focusable="false">
            <rect width="120" height="200" fill="#046a38"/>
            <rect x="120" width="180" height="200" fill="#da291c"/>
            <circle cx="120" cy="100" r="31" fill="#ffcd00"/>
            <rect x="102" y="78" width="36" height="44" rx="5" fill="#ffffff"/>
            <path d="M108 84h24v18c0 13-12 18-12 18s-12-5-12-18z" fill="#c8102e"/>
        </svg>`,
    spain: `
        <svg viewBox="0 0 300 200" aria-hidden="true" focusable="false">
            <rect width="300" height="50" fill="#aa151b"/>
            <rect y="50" width="300" height="100" fill="#f1bf00"/>
            <rect y="150" width="300" height="50" fill="#aa151b"/>
            <rect x="72" y="78" width="34" height="46" rx="4" fill="#c60b1e"/>
            <rect x="80" y="86" width="18" height="30" fill="#f1bf00"/>
            <circle cx="89" cy="76" r="8" fill="#ad8a20"/>
        </svg>`,
    england: `
        <svg viewBox="0 0 300 200" aria-hidden="true" focusable="false">
            <rect width="300" height="200" fill="#ffffff"/>
            <rect x="126" width="48" height="200" fill="#ce1124"/>
            <rect y="76" width="300" height="48" fill="#ce1124"/>
        </svg>`,
    usa: `
        <svg viewBox="0 0 300 200" aria-hidden="true" focusable="false">
            <rect width="300" height="200" fill="#ffffff"/>
            <g fill="#b22234">
                <rect y="0" width="300" height="15.4"/>
                <rect y="30.8" width="300" height="15.4"/>
                <rect y="61.6" width="300" height="15.4"/>
                <rect y="92.4" width="300" height="15.4"/>
                <rect y="123.2" width="300" height="15.4"/>
                <rect y="154" width="300" height="15.4"/>
                <rect y="184.8" width="300" height="15.2"/>
            </g>
            <rect width="128" height="108" fill="#3c3b6e"/>
            <g fill="#ffffff">
                <circle cx="18" cy="18" r="4"/><circle cx="42" cy="18" r="4"/><circle cx="66" cy="18" r="4"/><circle cx="90" cy="18" r="4"/><circle cx="114" cy="18" r="4"/>
                <circle cx="30" cy="38" r="4"/><circle cx="54" cy="38" r="4"/><circle cx="78" cy="38" r="4"/><circle cx="102" cy="38" r="4"/>
                <circle cx="18" cy="58" r="4"/><circle cx="42" cy="58" r="4"/><circle cx="66" cy="58" r="4"/><circle cx="90" cy="58" r="4"/><circle cx="114" cy="58" r="4"/>
                <circle cx="30" cy="78" r="4"/><circle cx="54" cy="78" r="4"/><circle cx="78" cy="78" r="4"/><circle cx="102" cy="78" r="4"/>
                <circle cx="18" cy="98" r="4"/><circle cx="42" cy="98" r="4"/><circle cx="66" cy="98" r="4"/><circle cx="90" cy="98" r="4"/><circle cx="114" cy="98" r="4"/>
            </g>
        </svg>`,
    italy: `
        <svg viewBox="0 0 300 200" aria-hidden="true" focusable="false">
            <rect width="100" height="200" fill="#009246"/>
            <rect x="100" width="100" height="200" fill="#ffffff"/>
            <rect x="200" width="100" height="200" fill="#ce2b37"/>
        </svg>`,
    mexico: `
        <svg viewBox="0 0 300 200" aria-hidden="true" focusable="false">
            <rect width="100" height="200" fill="#006847"/>
            <rect x="100" width="100" height="200" fill="#ffffff"/>
            <rect x="200" width="100" height="200" fill="#ce1126"/>
            <circle cx="150" cy="100" r="22" fill="#c09300"/>
            <path d="M138 108c16 8 31-5 25-20" fill="none" stroke="#6f4e1e" stroke-width="7" stroke-linecap="round"/>
            <path d="M132 113c14 13 40 11 52-5" fill="none" stroke="#2c8a45" stroke-width="6" stroke-linecap="round"/>
        </svg>`,
    uruguay: `
        <svg viewBox="0 0 300 200" aria-hidden="true" focusable="false">
            <rect width="300" height="200" fill="#ffffff"/>
            <g fill="#0038a8">
                <rect y="22" width="300" height="22"/>
                <rect y="66" width="300" height="22"/>
                <rect y="110" width="300" height="22"/>
                <rect y="154" width="300" height="22"/>
            </g>
            <rect width="120" height="88" fill="#ffffff"/>
            <circle cx="60" cy="44" r="20" fill="#fcd116"/>
            <g stroke="#fcd116" stroke-width="5" stroke-linecap="round">
                <line x1="60" y1="11" x2="60" y2="2"/>
                <line x1="60" y1="77" x2="60" y2="86"/>
                <line x1="27" y1="44" x2="18" y2="44"/>
                <line x1="93" y1="44" x2="102" y2="44"/>
                <line x1="37" y1="21" x2="30" y2="14"/>
                <line x1="83" y1="67" x2="90" y2="74"/>
                <line x1="83" y1="21" x2="90" y2="14"/>
                <line x1="37" y1="67" x2="30" y2="74"/>
            </g>
        </svg>`
};

const signImageFiles = {
    brazil: "assets/sinais/brasil.gif",
    argentina: "assets/sinais/argentina.mp4",
    france: "assets/sinais/franca.mp4",
    germany: "assets/sinais/alemanha.mp4",
    japan: "assets/sinais/japao.mp4",
    portugal: "assets/sinais/portugal.mp4",
    spain: "assets/sinais/espanha.mp4",
    england: "assets/sinais/inglaterra.mp4",
    usa: "assets/sinais/estados-unidos.mp4",
    italy: "assets/sinais/italia.mp4",
    mexico: "assets/sinais/mexico.mp4",
    uruguay: "assets/sinais/uruguai.mp4"
};

const countries = [
    { id: "brazil", pt: "Brasil", signFile: signImageFiles.brazil, flag: flags.brazil },
    { id: "argentina", pt: "Argentina", signFile: signImageFiles.argentina, flag: flags.argentina },
    { id: "france", pt: "França", signFile: signImageFiles.france, flag: flags.france },
    { id: "germany", pt: "Alemanha", signFile: signImageFiles.germany, flag: flags.germany },
    { id: "japan", pt: "Japão", signFile: signImageFiles.japan, flag: flags.japan },
    { id: "portugal", pt: "Portugal", signFile: signImageFiles.portugal, flag: flags.portugal },
    { id: "spain", pt: "Espanha", signFile: signImageFiles.spain, flag: flags.spain },
    { id: "england", pt: "Inglaterra", signFile: signImageFiles.england, flag: flags.england },
    { id: "usa", pt: "Estados Unidos", signFile: signImageFiles.usa, flag: flags.usa },
    { id: "italy", pt: "Itália", signFile: signImageFiles.italy, flag: flags.italy },
    { id: "mexico", pt: "México", signFile: signImageFiles.mexico, flag: flags.mexico },
    { id: "uruguay", pt: "Uruguai", signFile: signImageFiles.uruguay, flag: flags.uruguay }
];

const copy = {
    score: "Pontos",
    roundSmall: "Rodada",
    streak: "Sequência",
    restart: "Reiniciar",
    next: "Próxima",
    result: "Ver resultado",
    playAgain: "Jogar de novo",
    choose: "Escolha a imagem do sinal em Libras que combina com a bandeira.",
    question: "Relacione a bandeira ao sinal em Libras",
    observe: "Observe a bandeira",
    round: "Rodada",
    correct: "Acertou!",
    wrong: "Ainda não.",
    answerWas: "Era",
    finalTitle: "Resultado final",
    finalGreat: "Excelente memória visual!",
    finalGood: "Bom jogo! Continue treinando.",
    finalTry: "Boa tentativa. Jogue outra rodada."
};

const elements = {
    scoreLabel: document.querySelector("#scoreLabel"),
    roundLabelSmall: document.querySelector("#roundLabelSmall"),
    streakLabel: document.querySelector("#streakLabel"),
    scoreValue: document.querySelector("#scoreValue"),
    roundValue: document.querySelector("#roundValue"),
    totalValue: document.querySelector("#totalValue"),
    streakValue: document.querySelector("#streakValue"),
    progressBar: document.querySelector("#progressBar"),
    restartButton: document.querySelector("#restartButton"),
    restartText: document.querySelector("#restartText"),
    roundLabel: document.querySelector("#roundLabel"),
    questionText: document.querySelector("#questionText"),
    targetFlag: document.querySelector("#targetFlag"),
    hintText: document.querySelector("#hintText"),
    flagGrid: document.querySelector("#flagGrid"),
    feedback: document.querySelector("#feedback"),
    feedbackText: document.querySelector("#feedbackText"),
    nextButton: document.querySelector("#nextButton")
};

let state = {
    score: 0,
    streak: 0,
    roundIndex: 0,
    answered: false,
    finished: false,
    selectedId: "",
    wasCorrect: false,
    current: null,
    options: [],
    roundCountries: []
};

function shuffle(items) {
    const copyItems = [...items];

    for (let index = copyItems.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [copyItems[index], copyItems[randomIndex]] = [copyItems[randomIndex], copyItems[index]];
    }

    return copyItems;
}

function getCopy() {
    return copy;
}

function countryName(country) {
    return country.pt;
}

function optionLabel(letter) {
    return `Opção ${letter}`;
}

function signCardLabel(country) {
    return `Sinal em Libras: ${country.pt}`;
}

function createSignImage(country) {
    const videoExtensions = [".mp4", ".webm", ".ogg"];
    const isVideo = videoExtensions.some((extension) => country.signFile.toLowerCase().endsWith(extension));

    if (isVideo) {
        return `
            <video class="sign-media" autoplay loop muted playsinline preload="metadata">
                <source src="${country.signFile}">
            </video>
        `;
    }

    return `
        <img class="sign-media" src="${country.signFile}" alt="" loading="eager">
    `;
}

function updateStaticCopy() {
    const text = getCopy();

    elements.scoreLabel.textContent = text.score;
    elements.roundLabelSmall.textContent = text.roundSmall;
    elements.streakLabel.textContent = text.streak;
    elements.restartText.textContent = text.restart;
    elements.restartButton.setAttribute("aria-label", text.restart);
    elements.totalValue.textContent = TOTAL_ROUNDS;
}

function updateStats() {
    elements.scoreValue.textContent = state.score;
    elements.roundValue.textContent = Math.min(state.roundIndex + 1, TOTAL_ROUNDS);
    elements.streakValue.textContent = state.streak;

    const progress = state.finished
        ? 100
        : (state.roundIndex + (state.answered ? 1 : 0)) / TOTAL_ROUNDS * 100;

    elements.progressBar.style.width = `${progress}%`;
}

function updateRoundText() {
    const text = getCopy();

    elements.roundLabel.textContent = `${text.round} ${state.roundIndex + 1}`;
    elements.questionText.textContent = text.question;
    elements.targetFlag.innerHTML = state.current.flag;
    elements.hintText.textContent = state.answered ? countryName(state.current) : text.observe;
    elements.nextButton.textContent = state.roundIndex === TOTAL_ROUNDS - 1 ? text.result : text.next;
}

function updateFeedback() {
    const text = getCopy();

    elements.feedback.classList.remove("good", "bad");

    if (!state.answered) {
        elements.feedbackText.textContent = text.choose;
        elements.feedback.querySelector(".feedback-icon").textContent = "●";
        return;
    }

    elements.feedback.classList.add(state.wasCorrect ? "good" : "bad");
    elements.feedback.querySelector(".feedback-icon").textContent = state.wasCorrect ? "✓" : "×";
    elements.feedbackText.textContent = `${state.wasCorrect ? text.correct : text.wrong} ${text.answerWas}: ${countryName(state.current)}.`;
}

function createOptionButton(country, index) {
    const isCorrect = state.answered && country.id === state.current.id;
    const isWrong = state.answered && country.id === state.selectedId && !state.wasCorrect;
    const stateClass = isCorrect ? " correct" : isWrong ? " wrong" : "";
    const mark = isCorrect ? "✓" : isWrong ? "×" : "";
    const disabled = state.answered ? "disabled" : "";

    return `
        <button class="sign-card${stateClass}" type="button" data-country-id="${country.id}" ${disabled}
            aria-label="${optionLabel(optionLetters[index])}: ${signCardLabel(country)}">
            <span class="option-badge">${optionLetters[index]}</span>
            <span class="sign-image" aria-hidden="true">${createSignImage(country)}</span>
            <span class="answer-name">${countryName(country)}</span>
            <span class="state-mark" aria-hidden="true">${mark}</span>
        </button>
    `;
}

function renderOptions() {
    elements.flagGrid.classList.remove("finished");
    elements.flagGrid.classList.toggle("answered", state.answered);
    elements.flagGrid.innerHTML = state.options.map(createOptionButton).join("");

    elements.flagGrid.querySelectorAll(".sign-card").forEach((button) => {
        button.addEventListener("click", () => handleAnswer(button.dataset.countryId));
    });
}

function startRound() {
    const otherCountries = countries.filter((country) => country.id !== state.roundCountries[state.roundIndex].id);

    state.current = state.roundCountries[state.roundIndex];
    state.options = shuffle([state.current, ...shuffle(otherCountries).slice(0, 3)]);
    state.answered = false;
    state.selectedId = "";
    state.wasCorrect = false;
    state.finished = false;

    updateStaticCopy();
    updateStats();
    updateRoundText();
    updateFeedback();
    renderOptions();

    elements.nextButton.disabled = true;
}

function handleAnswer(countryId) {
    if (state.answered || state.finished) {
        return;
    }

    state.answered = true;
    state.selectedId = countryId;
    state.wasCorrect = countryId === state.current.id;

    if (state.wasCorrect) {
        state.score += 1;
        state.streak += 1;
    } else {
        state.streak = 0;
    }

    updateStats();
    updateRoundText();
    updateFeedback();
    renderOptions();

    elements.nextButton.disabled = false;
}

function finalMessage() {
    const text = getCopy();

    if (state.score >= 8) {
        return text.finalGreat;
    }

    if (state.score >= 5) {
        return text.finalGood;
    }

    return text.finalTry;
}

function renderFinal() {
    const text = getCopy();
    const countriesPlayed = state.roundCountries.map((country) => `<li>${countryName(country)}</li>`).join("");

    state.finished = true;
    elements.flagGrid.classList.add("finished");
    elements.flagGrid.classList.remove("answered");
    elements.questionText.textContent = text.finalTitle;
    elements.roundLabel.textContent = text.roundSmall;
    elements.hintText.textContent = finalMessage();
    elements.flagGrid.innerHTML = `
        <div class="finish-card">
            <div class="finish-score">${state.score}/${TOTAL_ROUNDS}</div>
            <ul class="finish-list">${countriesPlayed}</ul>
        </div>
    `;
    elements.feedback.classList.remove("bad");
    elements.feedback.classList.add("good");
    elements.feedback.querySelector(".feedback-icon").textContent = "✓";
    elements.feedbackText.textContent = finalMessage();
    elements.nextButton.textContent = text.playAgain;
    elements.nextButton.disabled = false;
    updateStats();
}

function handleNext() {
    if (state.finished) {
        resetGame();
        return;
    }

    if (!state.answered) {
        return;
    }

    if (state.roundIndex === TOTAL_ROUNDS - 1) {
        renderFinal();
        return;
    }

    state.roundIndex += 1;
    startRound();
}

function resetGame() {
    state = {
        ...state,
        score: 0,
        streak: 0,
        roundIndex: 0,
        answered: false,
        finished: false,
        selectedId: "",
        wasCorrect: false,
        current: null,
        options: [],
        roundCountries: shuffle(countries).slice(0, TOTAL_ROUNDS)
    };

    startRound();
}

elements.restartButton.addEventListener("click", resetGame);
elements.nextButton.addEventListener("click", handleNext);

resetGame();
