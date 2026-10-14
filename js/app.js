const root = document.documentElement;
const LANG_LABEL = { pt: "pt-BR", en: "en" };
const themeSwitch = document.getElementById("theme-switch");
const langSwitch = document.getElementById("lang-switch");
const linkWpp = document.getElementById("link-wpp");
const linkMail = document.getElementById("link-mail");

function readStored(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function store(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {}
}

function initialLang() {
  const stored = readStored("lang");
  if (stored in I18N) return stored;
  return "pt";
}

const WORD_OUT_MS = 220;
const WORD_IN_MS = 560;
const WORD_STAGGER_TOTAL_MS = 300;
const EASE_OUT = "cubic-bezier(0.22, 1, 0.36, 1)";
const EASE_IN = "cubic-bezier(0.5, 0, 0.75, 0)";
let currentLang = null;
let langRun = 0;

function wrapWords(el) {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  const words = [];
  for (const node of nodes) {
    const fragment = document.createDocumentFragment();
    for (const part of node.textContent.split(/(\s+)/)) {
      if (!part) continue;
      if (/^\s+$/.test(part)) {
        fragment.append(part);
        continue;
      }
      const span = document.createElement("span");
      span.textContent = part;
      span.style.display = "inline-block";
      fragment.append(span);
      words.push(span);
    }
    node.replaceWith(fragment);
  }
  return words;
}

function fadeWords(words, { from, to, duration, easing }) {
  const step = WORD_STAGGER_TOTAL_MS / Math.max(words.length, 1);
  return Promise.all(
    words.map((word, i) =>
      word.animate([from, to], { duration, easing, delay: i * step, fill: "both" }).finished,
    ),
  );
}

const HIDDEN = { opacity: 0, filter: "blur(6px)" };
const SHOWN = { opacity: 1, filter: "blur(0px)" };

async function swapText(labelled, dict, run) {
  const outgoing = labelled.flatMap(wrapWords);
  await fadeWords(outgoing, {
    from: { ...SHOWN, transform: "translateY(0)" },
    to: { ...HIDDEN, transform: "translateY(-0.12em)" },
    duration: WORD_OUT_MS,
    easing: EASE_IN,
  });
  if (run !== langRun) return;
  labelled.forEach((el) => {
    el.innerHTML = dict[el.dataset.i18n];
  });
  const incoming = labelled.flatMap(wrapWords);
  await fadeWords(incoming, {
    from: { ...HIDDEN, transform: "translateY(0.16em)" },
    to: { ...SHOWN, transform: "translateY(0)" },
    duration: WORD_IN_MS,
    easing: EASE_OUT,
  });
}

function applyLang(lang, { animate = false } = {}) {
  const dict = I18N[lang];
  const run = ++langRun;
  const labelled = [...document.querySelectorAll("[data-i18n]")];
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (animate && !reduceMotion && currentLang) {
    labelled.forEach((el) => {
      el.getAnimations({ subtree: true }).forEach((anim) => anim.cancel());
      el.innerHTML = I18N[currentLang][el.dataset.i18n];
    });
    swapText(labelled, dict, run);
  } else {
    labelled.forEach((el) => {
      el.innerHTML = dict[el.dataset.i18n];
    });
  }

  currentLang = lang;
  root.lang = LANG_LABEL[lang];
  document.title = dict.title;
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", dict[el.dataset.i18nAria]);
  });
  linkWpp.href = `https://wa.me/5514996782099?text=${encodeURIComponent(dict["contact.wpp.text"])}`;
  linkMail.href = `mailto:rafaelstevanato@gmail.com?subject=${encodeURIComponent(dict["contact.mail.subject"])}`;
  langSwitch.checked = lang === "en";
  renderTimeline(lang);
  applyThemeLabel(lang);
  store("lang", lang);
}

function applyThemeLabel(lang = root.lang.startsWith("pt") ? "pt" : "en") {
  const dark = root.dataset.theme === "dark";
  const key = dark ? "aria.themeToLight" : "aria.themeToDark";
  themeSwitch.setAttribute("aria-label", I18N[lang][key]);
  themeSwitch.checked = dark;
}

langSwitch.addEventListener("change", () => {
  applyLang(langSwitch.checked ? "en" : "pt", { animate: true });
});

function setTheme(theme) {
  root.dataset.theme = theme;
  store("theme", theme);
  applyThemeLabel();
}

function waveRadius(x, y) {
  return Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
}

themeSwitch.addEventListener("change", () => {
  const theme = themeSwitch.checked ? "dark" : "light";
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!document.startViewTransition || reduceMotion) {
    setTheme(theme);
    return;
  }

  const rect = themeSwitch.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  const transition = document.startViewTransition(() => setTheme(theme));

  transition.ready.then(() => {
    root.animate(
      {
        clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${waveRadius(x, y)}px at ${x}px ${y}px)`],
      },
      { duration: 1000, easing: "cubic-bezier(0.65, 0, 0.35, 1)", pseudoElement: "::view-transition-new(root)" },
    );
  });
});

applyLang(initialLang());
