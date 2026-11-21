/* ============================================================
   Данные сценариев
   fatal: true — особо опасный выбор, прерывает сценарий
   ============================================================ */
const scenarios = {
  fire: {
    title: "Пожар в школе",
    icon: "🔥",
    description: "Действия при возгорании в учебном кабинете.",
    steps: [
      {
        text: "Ты находишься в классе. Появился запах дыма, видно задымление в коридоре.",
        question: "Что ты делаешь в первую очередь?",
        options: [
          { label: "Сообщаю учителю и действую по указанию", isCorrect: true,
            explanation: "Верно. Немедленное информирование взрослого и следование плану эвакуации — базовое правило." },
          { label: "Прячусь под парту", isCorrect: false,
            explanation: "Опасно: дым быстро заполняет помещение, тебя могут не найти." },
          { label: "Открываю окно и зову на помощь", isCorrect: false,
            explanation: "Открытое окно усиливает тягу и ускоряет распространение дыма." }
        ]
      },
      {
        text: "Учитель объявил эвакуацию. Коридор задымлён.",
        question: "Как двигаться к выходу?",
        options: [
          { label: "Пригнувшись, вдоль стены, закрыв дыхание тканью", isCorrect: true,
            explanation: "Верно. Дым поднимается вверх; пригибаясь, ты дышишь менее загрязнённым воздухом." },
          { label: "Бегом в полный рост, чтобы быстрее выйти", isCorrect: false,
            explanation: "В полный рост ты вдыхаешь больше дыма; спешка повышает риск паники и падения." }
        ]
      },
      {
        text: "Ты выбрался на улицу. На месте сбора не хватает одного одноклассника.",
        question: "Твои действия?",
        options: [
          { label: "Сообщить учителю и не возвращаться в здание", isCorrect: true,
            explanation: "Верно. Только взрослый может организовать поиск; возвращение в горящее здание смертельно опасно." },
          { label: "Вернуться в класс и искать самому", isCorrect: false, fatal: true,
            explanation: "Критическая ошибка. Возвращение в горящее здание приводит к отравлению продуктами горения. В горящее здание без указания спасателей не возвращаются." }
        ]
      }
    ]
  },

  drone: {
    title: "Атака БПЛА",
    icon: "🛸",
    description: "Действия при угрозе беспилотного летательного аппарата.",
    steps: [
      {
        text: "Ты на улице, слышишь звук, похожий на приближающийся дрон.",
        question: "Что делать?",
        options: [
          { label: "Немедленно укрыться в капитальном здании", isCorrect: true,
            explanation: "Верно. Капитальное строение защищает от осколков; нельзя оставаться на открытом месте." },
          { label: "Снять видео на телефон", isCorrect: false,
            explanation: "Опасно: приближение к дрону и использование связи рядом с ним может спровоцировать сбой или детонацию." }
        ]
      },
      {
        text: "Ты в помещении. Дрон слышен совсем близко.",
        question: "Где безопаснее находиться?",
        options: [
          { label: "В помещении без окон, между несущих стен", isCorrect: true,
            explanation: "Верно. Внутренняя комната без окон снижает риск поражения осколками." },
          { label: "У окна, чтобы видеть, что происходит", isCorrect: false,
            explanation: "Окно — самое опасное место: осколки стекла — главная угроза." }
        ]
      },
      {
        text: "После звука взрыва на улице ты видишь обломки.",
        question: "Что можно сделать?",
        options: [
          { label: "Не приближаться, сообщить по 112 с безопасного расстояния", isCorrect: true,
            explanation: "Верно. Обломки могут быть опасны; нельзя трогать и перемещать их." },
          { label: "Подойти и сфотографировать обломки для доказательства", isCorrect: false, fatal: true,
            explanation: "Критическая ошибка. Обломки могут содержать взрывоопасные элементы. Приближение к обломкам БПЛА недопустимо." }
        ]
      }
    ]
  },

  tsunami: {
    title: "Цунами",
    icon: "🌊",
    description: "Действия при угрозе цунами в прибрежной зоне.",
    steps: [
      {
        text: "Ты на побережье, почувствовал сильное землетрясение.",
        question: "Что делать немедленно?",
        options: [
          { label: "Уходить от берега вглубь суши и на возвышенность", isCorrect: true,
            explanation: "Верно. Сильное землетрясение — признак возможного цунами; нужно уйти от воды." },
          { label: "Остаться на месте и ждать официального сигнала", isCorrect: false, fatal: true,
            explanation: "Критическая ошибка. Волны могут достичь берега через 15–20 минут после землетрясения. Ожидание на месте смертельно опасно." }
        ]
      },
      {
        text: "Ты находишься на возвышенности. Первая волна прошла.",
        question: "Можно ли возвращаться на берег?",
        options: [
          { label: "Нет, оставаться на высоте не менее 3 часов", isCorrect: true,
            explanation: "Верно. После первой волны обычно следуют другие, часто более сильные." },
          { label: "Да, если первая волна была небольшой", isCorrect: false,
            explanation: "Неверно. Вторая и третья волны могут быть значительно сильнее." }
        ]
      }
    ]
  },

  chemical: {
    title: "Химическая авария",
    icon: "☣️",
    description: "Действия при выбросе химически опасных веществ.",
    steps: [
      {
        text: "Объявлена химическая тревога. Ты дома.",
        question: "Что сделать в первую очередь?",
        options: [
          { label: "Закрыть окна, двери, вентиляцию; загерметизировать щели", isCorrect: true,
            explanation: "Верно. Герметизация помещений снижает поступление опасного вещества." },
          { label: "Открыть окна для проветривания", isCorrect: false, fatal: true,
            explanation: "Критическая ошибка. Открытые окна резко увеличивают поступление токсичного воздуха. При химической аварии окна герметизируют, а не открывают." }
        ]
      },
      {
        text: "Нужно выйти на улицу, чтобы добраться до безопасного места.",
        question: "Как защитить органы дыхания?",
        options: [
          { label: "Использовать ватно-марлевую повязку, смоченную водой", isCorrect: true,
            explanation: "Верно. Влажная ткань задерживает часть химических веществ." },
          { label: "Дышать через шарф, не смачивая его", isCorrect: false,
            explanation: "Сухая ткань менее эффективна; для многих веществ рекомендуется смачивание." }
        ]
      }
    ]
  },

  acidRain: {
    title: "Кислотные дожди",
    icon: "🌧️",
    description: "Действия при выпадении кислотных осадков.",
    steps: [
      {
        text: "На улице начался дождь, который может быть кислотным.",
        question: "Что делать, если ты находишься на улице?",
        options: [
          { label: "Немедленно укрыться в помещении или под бетонной конструкцией", isCorrect: true,
            explanation: "Верно. Кислотный дождь может вызывать раздражение кожи; нужно укрыться." },
          { label: "Продолжать путь, ведь дождь обычный", isCorrect: false,
            explanation: "Опасно: без анализа нельзя утверждать, что дождь безопасен." }
        ]
      },
      {
        text: "Ты дома. Дождь продолжается.",
        question: "Какие меры предосторожности принять?",
        options: [
          { label: "Закрыть окна и двери, не выходить на улицу", isCorrect: true,
            explanation: "Верно. Герметизация помещений снижает попадание токсичных частиц внутрь." },
          { label: "Открыть окно, чтобы проветрить комнату", isCorrect: false,
            explanation: "Неверно: вместе с воздухом внутрь могут попасть вредные вещества." }
        ]
      }
    ]
  },

  utilities: {
    title: "Авария на системах жизнеобеспечения",
    icon: "⚡",
    description: "Действия при отключении воды, тепла или электричества.",
    steps: [
      {
        text: "В доме внезапно отключилось электричество, воды и отопления нет.",
        question: "Что сделать в первую очередь?",
        options: [
          { label: "Обесточить электроприборы и сообщить в диспетчерскую службу", isCorrect: true,
            explanation: "Верно. При скачке напряжения приборы могут выйти из строя; диспетчерская координирует устранение аварии." },
          { label: "Включить все приборы, чтобы проверить напряжение", isCorrect: false,
            explanation: "Опасно: резкий скачок напряжения может повредить технику и создать риск возгорания." }
        ]
      },
      {
        text: "Авария затягивается. Нужно подготовиться к возможному длительному отключению.",
        question: "Что разумно сделать?",
        options: [
          { label: "Использовать запасы воды и продуктов, одеться теплее", isCorrect: true,
            explanation: "Верно. Заранее созданный запас помогает пережить период до восстановления подачи ресурсов." },
          { label: "Оставить всё как есть, аварийные службы всё сделают быстро", isCorrect: false,
            explanation: "Авария может затянуться; отсутствие подготовки повышает риск для здоровья." }
        ]
      }
    ]
  }
};

/* ============================================================
   Состояние приложения
   ============================================================ */
let currentScenarioId = null;
let currentStepIndex = 0;
let userChoices = [];
let mistakesCount = 0;

const HISTORY_KEY = 'emergencyTrainerHistory';

/* ============================================================
   DOM-элементы
   ============================================================ */
const screens = {
  home: document.getElementById('screen-home'),
  scenario: document.getElementById('screen-scenario'),
  result: document.getElementById('screen-result'),
  history: document.getElementById('screen-history')
};
const scenarioGrid = document.getElementById('scenarioGrid');
const scenarioTitle = document.getElementById('scenarioTitle');
const stepCounter = document.getElementById('stepCounter');
const progressFill = document.getElementById('progressFill');
const stepText = document.getElementById('stepText');
const stepQuestion = document.getElementById('stepQuestion');
const optionsContainer = document.getElementById('optionsContainer');
const explanationBox = document.getElementById('explanationBox');
const explanationText = document.getElementById('explanationText');
const btnNextStep = document.getElementById('btnNextStep');
const resultSummary = document.getElementById('resultSummary');
const historyList = document.getElementById('historyList');

/* ============================================================
   Навигация между экранами
   ============================================================ */
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  if (screens[name]) screens[name].classList.add('active');
}

/* ============================================================
   Главный экран — безопасная сборка DOM
   ============================================================ */
function renderHome() {
  scenarioGrid.innerHTML = '';
  Object.entries(scenarios).forEach(([id, scenario]) => {
    const card = document.createElement('div');
    card.className = 'scenario-card';

    const icon = document.createElement('span');
    icon.className = 'scenario-icon';
    icon.textContent = scenario.icon || '📋';

    const title = document.createElement('h3');
    title.textContent = scenario.title;

    const desc = document.createElement('p');
    desc.textContent = scenario.description;

    card.appendChild(icon);
    card.appendChild(title);
    card.appendChild(desc);
    card.addEventListener('click', () => startScenario(id));
    scenarioGrid.appendChild(card);
  });
  showScreen('home');
}

/* ============================================================
   Запуск сценария
   ============================================================ */
function startScenario(id) {
  if (!scenarios[id]) { alert('Сценарий не найден.'); return; }
  currentScenarioId = id;
  currentStepIndex = 0;
  userChoices = [];
  mistakesCount = 0;
  scenarioTitle.textContent = scenarios[id].title;
  showScreen('scenario');
  renderStep();
}

/* ============================================================
   Отрисовка шага
   ============================================================ */
function renderStep() {
  const scenario = scenarios[currentScenarioId];
  const step = scenario.steps[currentStepIndex];
  if (!step) { finishScenario(false); return; }

  stepCounter.textContent = `Шаг ${currentStepIndex + 1} из ${scenario.steps.length}`;
  progressFill.style.width = `${(currentStepIndex / scenario.steps.length) * 100}%`;

  stepText.textContent = step.text;
  stepQuestion.textContent = step.question;

  optionsContainer.innerHTML = '';
  explanationBox.classList.add('hidden');

  step.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = option.label;
    btn.addEventListener('click', () => handleChoice(index));
    optionsContainer.appendChild(btn);
  });

  btnNextStep.onclick = () => { currentStepIndex++; renderStep(); };
}

/* ============================================================
   Обработка выбора
   ============================================================ */
function handleChoice(optionIndex) {
  const scenario = scenarios[currentScenarioId];
  const step = scenario.steps[currentStepIndex];
  const option = step.options[optionIndex];
  if (!option) return;

  optionsContainer.querySelectorAll('.option-btn').forEach(b => b.disabled = true);

  userChoices.push({
    step: currentStepIndex + 1,
    question: step.question,
    choice: option.label,
    isCorrect: option.isCorrect,
    isFatal: !!option.fatal,
    explanation: option.explanation
  });

  if (!option.isCorrect) mistakesCount++;

  explanationText.textContent = option.explanation;
  explanationBox.classList.remove('hidden');

  if (option.fatal) {
    btnNextStep.textContent = 'Понятно';
    btnNextStep.onclick = () => {
      progressFill.style.width = '100%';
      finishScenario(true);
    };
    return;
  }

  if (currentStepIndex === scenario.steps.length - 1) {
    btnNextStep.textContent = 'Показать результат';
    btnNextStep.onclick = () => {
      progressFill.style.width = '100%';
      finishScenario(false);
    };
  } else {
    btnNextStep.textContent = 'Дальше';
    btnNextStep.onclick = () => { currentStepIndex++; renderStep(); };
  }
}

/* ============================================================
   Завершение и сохранение
   ============================================================ */
function finishScenario(isFatal) {
  const scenario = scenarios[currentScenarioId];
  const record = {
    scenarioId: currentScenarioId,
    scenarioTitle: scenario.title,
    date: new Date().toISOString(),
    totalSteps: scenario.steps.length,
    completedSteps: userChoices.length,
    mistakes: mistakesCount,
    isFatal: !!isFatal,
    choices: userChoices.slice()
  };

  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    let history = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(history)) history = [];
    history.push(record);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch (e) {
    console.warn('Не удалось сохранить историю:', e);
  }

  renderResult(record);
  showScreen('result');
}

/* ============================================================
   Экран результата — безопасная сборка DOM
   ============================================================ */
function renderResult(record) {
  let statusClass, statusIcon, statusText;
  if (record.isFatal) {
    statusClass = 'fatal';
    statusIcon = '⚠️';
    statusText = 'Сценарий прерван критической ошибкой';
  } else if (record.mistakes === 0) {
    statusClass = 'success';
    statusIcon = '✅';
    statusText = 'Сценарий пройден без ошибок';
  } else {
    statusClass = 'warning';
    statusIcon = '⚠️';
    statusText = `Сценарий завершён. Ошибок: ${record.mistakes}`;
  }

  resultSummary.innerHTML = '';

  const statusEl = document.createElement('div');
  statusEl.className = `result-status ${statusClass}`;
  statusEl.textContent = `${statusIcon} ${statusText}`;
  resultSummary.appendChild(statusEl);

  const titleEl = document.createElement('p');
  titleEl.className = 'result-scenario-title';
  titleEl.textContent = record.scenarioTitle;
  resultSummary.appendChild(titleEl);

  const hintEl = document.createElement('p');
  hintEl.className = 'result-hint';
  if (record.isFatal) {
    hintEl.textContent = `Пройдено шагов: ${record.completedSteps} из ${record.totalSteps}. Сценарий остановлен, потому что выбранное действие несовместимо с безопасным продолжением.`;
  } else {
    hintEl.textContent = `Пройдено шагов: ${record.completedSteps} из ${record.totalSteps}.`;
  }
  resultSummary.appendChild(hintEl);

  const ul = document.createElement('ul');
  ul.className = 'result-choices';

  record.choices.forEach(c => {
    const li = document.createElement('li');

    const header = document.createElement('div');
    header.className = 'result-choice-header';

    const stepStrong = document.createElement('strong');
    stepStrong.textContent = `Шаг ${c.step}:`;
    header.appendChild(stepStrong);
    header.appendChild(document.createTextNode(' '));

    const statusSpan = document.createElement('span');
    statusSpan.className = c.isCorrect ? 'correct' : 'mistake';
    statusSpan.textContent = c.isCorrect ? 'верно' : 'ошибка';
    header.appendChild(statusSpan);

    if (c.isFatal) {
      header.appendChild(document.createTextNode(' '));
      const badge = document.createElement('span');
      badge.className = 'badge-fatal';
      badge.textContent = 'критическая ошибка';
      header.appendChild(badge);
    }

    const choiceText = document.createElement('div');
    choiceText.className = 'result-choice-text';
    choiceText.textContent = c.choice;

    const explanation = document.createElement('div');
    explanation.className = 'result-choice-explanation';
    explanation.textContent = c.explanation;

    li.appendChild(header);
    li.appendChild(choiceText);
    li.appendChild(explanation);
    ul.appendChild(li);
  });

  resultSummary.appendChild(ul);
  document.getElementById('btnResultHome').onclick = renderHome;
}

/* ============================================================
   История — безопасная сборка DOM
   ============================================================ */
function renderHistory() {
  let history = [];
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    history = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(history)) history = [];
  } catch (e) { history = []; }

  historyList.innerHTML = '';

  if (history.length === 0) {
    const p = document.createElement('p');
    p.textContent = 'История пока пуста.';
    historyList.appendChild(p);
  } else {
    history.slice().reverse().forEach(record => {
      const item = document.createElement('div');
      item.className = 'history-item';

      const dateEl = document.createElement('div');
      dateEl.className = 'date';
      dateEl.textContent = new Date(record.date).toLocaleString('ru-RU');

      const titleEl = document.createElement('div');
      titleEl.className = 'title';
      titleEl.textContent = record.scenarioTitle || 'Без названия';

      const resultEl = document.createElement('div');
      resultEl.className = 'result-line';

      if (record.isFatal) {
        const span = document.createElement('span');
        span.className = 'mistake';
        span.textContent = `Критическая ошибка на шаге ${record.completedSteps}`;
        resultEl.appendChild(span);
      } else if (record.mistakes === 0) {
        const span = document.createElement('span');
        span.className = 'correct';
        span.textContent = 'Без ошибок';
        resultEl.appendChild(span);
      } else {
        resultEl.appendChild(document.createTextNode('Ошибок: '));
        const span = document.createElement('span');
        span.className = 'mistake';
        span.textContent = record.mistakes;
        resultEl.appendChild(span);
      }

      item.appendChild(dateEl);
      item.appendChild(titleEl);
      item.appendChild(resultEl);
      historyList.appendChild(item);
    });
  }
  showScreen('history');
}

/* ============================================================
   Инициализация
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderHome();
  document.getElementById('btnShowHistory').addEventListener('click', renderHistory);
  document.getElementById('btnHistoryHome').addEventListener('click', renderHome);
  document.getElementById('btnBackHome').addEventListener('click', renderHome);
});