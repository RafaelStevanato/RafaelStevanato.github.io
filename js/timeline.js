const TL_MONTHS = {
  pt: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};
const TL_SCALE = 30;
const TL_OLD_SCALE = 12;
const TL_OLD_BEFORE = "2018-01";
const TL_TOP_PAD = 64;
const TL_ICON_LIFT = 14;
const TL_CARD_GAP = 14;
const TL_ICON_SIZE = 56;
const TL_ICON_GAP = 6;
const TL_OVERLAP_TOLERANCE = 20;

const TL_ICONS = {
  cap: '<svg viewBox="0 0 48 48"><ellipse cx="24" cy="44" rx="15" ry="2.4" fill="#0f2330" opacity=".2"/><path d="M11 25v8c0 3 6 6.5 13 6.5s13-3.5 13-6.5v-8L24 31z" fill="url(#tg-cap-body)"/><path d="M24 8.5 45 19 24 29.5 3 19Z" transform="translate(0 3)" fill="#26339a"/><path d="M24 8.5 45 19 24 29.5 3 19Z" fill="url(#tg-cap-top)"/><path d="M24 11 38 18 24 25 10 18Z" fill="#fff" opacity=".18"/><path d="M39 20.5v10" stroke="#f3bf1f" stroke-width="1.8" stroke-linecap="round"/><circle cx="39" cy="32" r="2.4" fill="url(#tg-gold)"/><circle cx="24" cy="19" r="1.8" fill="#fff" opacity=".75"/></svg>',
  briefcase:
    '<svg viewBox="0 0 48 48"><ellipse cx="24" cy="44.4" rx="16" ry="2.2" fill="#0f2330" opacity=".2"/><path d="M17 15v-3.5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3V15" fill="none" stroke="#b45f17" stroke-width="3" stroke-linecap="round"/><rect x="5" y="17.4" width="38" height="25" rx="6" fill="#c46b1a"/><rect x="5" y="14" width="38" height="25" rx="6" fill="url(#tg-case-body)"/><path d="M5 26h38v-6a6 6 0 0 0-6-6H11a6 6 0 0 0-6 6z" fill="#fff" opacity=".22"/><path d="M5 26h38" stroke="#b45f17" stroke-opacity=".45" stroke-width="1.4"/><rect x="20.5" y="23" width="7" height="7" rx="1.9" fill="url(#tg-gold)"/><ellipse cx="14" cy="18.4" rx="6" ry="1.8" transform="rotate(-8 14 18.4)" fill="#fff" opacity=".5"/></svg>',
  baby:
    '<svg viewBox="0 0 48 48"><defs><radialGradient id="tg-skin" cx=".38" cy=".3" r=".85"><stop offset="0" stop-color="#ffe9d3"/><stop offset=".6" stop-color="#f7c9a0"/><stop offset="1" stop-color="#e5a373"/></radialGradient><linearGradient id="tg-onesie" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#b9e8ff"/><stop offset="1" stop-color="#4aa8e8"/></linearGradient></defs><ellipse cx="24" cy="44.6" rx="14" ry="2.2" fill="#0f2330" opacity=".2"/><ellipse cx="24" cy="39.5" rx="13.5" ry="7" fill="url(#tg-onesie)"/><circle cx="24" cy="39.6" r="1.3" fill="#fff" opacity=".8"/><circle cx="9.4" cy="22.6" r="3.4" fill="#eeb88c"/><circle cx="38.6" cy="22.6" r="3.4" fill="#eeb88c"/><circle cx="24" cy="21.5" r="15.2" fill="url(#tg-skin)"/><path d="M20.5 7.4c1.6-2.6 6.6-2.8 6.6.4 0 2.2-2.6 2-2.4 3.8" fill="none" stroke="#7a4a2a" stroke-width="1.8" stroke-linecap="round"/><circle cx="18.2" cy="22" r="2" fill="#2b1d16"/><circle cx="29.8" cy="22" r="2" fill="#2b1d16"/><circle cx="18.8" cy="21.3" r=".7" fill="#fff"/><circle cx="30.4" cy="21.3" r=".7" fill="#fff"/><ellipse cx="14.4" cy="27" rx="2.6" ry="1.7" fill="#ff8fa3" opacity=".6"/><ellipse cx="33.6" cy="27" rx="2.6" ry="1.7" fill="#ff8fa3" opacity=".6"/><path d="M20.8 28.2q3.2 3 6.4 0" fill="none" stroke="#a5503d" stroke-width="1.5" stroke-linecap="round"/><ellipse cx="17.5" cy="13.6" rx="5" ry="2.3" transform="rotate(-28 17.5 13.6)" fill="#fff" opacity=".5"/></svg>',
  book:
    '<svg viewBox="0 0 48 48"><ellipse cx="24" cy="44.4" rx="17" ry="2.2" fill="#0f2330" opacity=".2"/><path d="M3 15.5q0-3 3-2.4L24 17.6l18-4.5q3-.6 3 2.4V38q0 2.6-3 3L24 44.4 6 41q-3-.4-3-3Z" fill="url(#tg-book-cover)"/><path d="M6.5 12.4 24 16.8V41L6.5 36.6Z" fill="url(#tg-page)"/><path d="M41.5 12.4 24 16.8V41l17.5-4.4Z" fill="url(#tg-page)" opacity=".92"/><path d="M24 16.8V41" stroke="#8da0ff" stroke-width="1" opacity=".6"/><path d="M10 19.6l10 2.5M10 24.2l10 2.5M10 28.8l10 2.5M38 19.6l-10 2.5M38 24.2l-10 2.5M38 28.8l-10 2.5" stroke="#8da0ff" stroke-width="1.4" stroke-linecap="round" opacity=".75"/><path d="M29.5 16V27l2.2-2 2.2 2V14.8Z" fill="#d6286c"/><path d="M8 13.2 24 17.2" stroke="#fff" stroke-opacity=".7" stroke-width="1"/></svg>',
  play:
    '<svg viewBox="0 0 48 48"><defs><linearGradient id="tg-play" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff7a7a"/><stop offset="1" stop-color="#d11a2a"/></linearGradient></defs><ellipse cx="24" cy="44.4" rx="17" ry="2.2" fill="#0f2330" opacity=".2"/><rect x="3" y="13" width="42" height="29" rx="9" fill="#a3101e"/><rect x="3" y="9.5" width="42" height="29" rx="9" fill="url(#tg-play)"/><path d="M20 17.8v13.4a1.6 1.6 0 0 0 2.4 1.4l11-6.7a1.6 1.6 0 0 0 0-2.8l-11-6.7a1.6 1.6 0 0 0-2.4 1.4Z" fill="#fff"/><ellipse cx="14" cy="14.2" rx="8" ry="2.4" transform="rotate(-8 14 14.2)" fill="#fff" opacity=".4"/></svg>',
  certificate:
    '<svg viewBox="0 0 48 48"><ellipse cx="24" cy="44.4" rx="16" ry="2.2" fill="#0f2330" opacity=".2"/><rect x="6" y="11" width="36" height="27" rx="3.5" fill="#9fb0d6"/><rect x="6" y="8" width="36" height="27" rx="3.5" fill="url(#tg-paper)"/><rect x="11" y="13.5" width="18" height="2.6" rx="1.3" fill="#d6286c"/><rect x="11" y="19.5" width="26" height="1.8" rx="0.9" fill="#ff9ebd"/><rect x="11" y="24" width="20" height="1.8" rx="0.9" fill="#ff9ebd"/><path d="M31 32.5 28.5 41l4.5-2 4.5 2L35 32.5Z" fill="#d6286c"/><circle cx="33" cy="30" r="6" fill="url(#tg-gold)"/><circle cx="33" cy="30" r="3.4" fill="none" stroke="#b07600" stroke-opacity=".5" stroke-width="1"/></svg>',
};

const TL_STAR =
  '<svg viewBox="0 0 24 24"><defs><linearGradient id="tg-star" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff2a8"/><stop offset=".6" stop-color="#f3bf1f"/><stop offset="1" stop-color="#d98a00"/></linearGradient></defs><path d="m12 2.6 2.7 5.7 6.2.8-4.6 4.3 1.2 6.2L12 16.6l-5.5 3 1.2-6.2L3.1 9.1l6.2-.8Z" fill="url(#tg-star)" stroke="#b87400" stroke-width="1" stroke-linejoin="round"/></svg>';

const TL_DEFS =
  '<svg class="tl__defs" width="0" height="0" aria-hidden="true" focusable="false"><defs><linearGradient id="tg-cap-top" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#a9b6ff"/><stop offset="1" stop-color="#3a4fd0"/></linearGradient><linearGradient id="tg-cap-body" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a6ee6"/><stop offset="1" stop-color="#26339a"/></linearGradient><linearGradient id="tg-case-body" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffd890"/><stop offset="1" stop-color="#e8862e"/></linearGradient><radialGradient id="tg-gold" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#fff2a8"/><stop offset=".55" stop-color="#f3bf1f"/><stop offset="1" stop-color="#c98400"/></radialGradient><linearGradient id="tg-book-cover" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6d80f0"/><stop offset="1" stop-color="#26339a"/></linearGradient><linearGradient id="tg-page" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#dfe6ff"/></linearGradient><linearGradient id="tg-paper" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#ffe0ea"/></linearGradient></defs></svg>';

const tlMonthIndex = (ym) => {
  const [year, month] = ym.split("-").map(Number);
  return year * 12 + (month - 1);
};

function tlFormatMonth(lang, idx) {
  return `${TL_MONTHS[lang][idx % 12]} ${Math.floor(idx / 12)}`;
}

function tlFormatDuration(lang, months) {
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts = [];
  if (lang === "pt") {
    if (years) parts.push(`${years} ${years > 1 ? "anos" : "ano"}`);
    if (rest) parts.push(`${rest} ${rest > 1 ? "meses" : "mês"}`);
    return parts.join(" e ");
  }
  if (years) parts.push(`${years} ${years > 1 ? "yrs" : "yr"}`);
  if (rest) parts.push(`${rest} ${rest > 1 ? "mos" : "mo"}`);
  return parts.join(" ");
}

const CAL_ICON =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>';

function renderTimelineStats(lang, items, nowIdx) {
  const dict = I18N[lang];
  const firstWork = Math.min(...items.filter((i) => i.lane === "work").map((i) => i.startIdx));
  const years = Math.floor((nowIdx - firstWork) / 12);
  const roles = items.filter((i) => i.lane === "work").length;
  const edu = items.filter((i) => i.lane === "edu" && i.kind !== "cert").length;
  const certs = items.filter((i) => i.kind === "cert").length;
  const tiles = [
    { cls: "work", value: `${years}+`, label: dict["stat.years"] },
    { cls: "roles", value: roles, label: dict["stat.roles"] },
    { cls: "edu", value: edu, label: dict["stat.edu"] },
    { cls: "cert", value: certs, label: certs === 1 ? dict["stat.cert.one"] : dict["stat.cert.many"] },
  ];
  document.getElementById("tl-stats").innerHTML = tiles
    .map((t) => `<div class="tl-stat tl-stat--${t.cls}"><strong>${t.value}</strong><span>${t.label}</span></div>`)
    .join("");
}

function renderTimeline(lang) {
  const body = document.getElementById("tl-body");
  if (!body) return;
  const dict = I18N[lang];
  const now = new Date();
  const nowIdx = now.getFullYear() * 12 + now.getMonth();
  const topIdx = Math.max(nowIdx, ...TIMELINE.filter((i) => i.end).map((i) => tlMonthIndex(i.end)));
  const oldBefore = tlMonthIndex(TL_OLD_BEFORE);
  const yAt = (idx) => {
    const recent = TL_TOP_PAD + (topIdx + 1 - Math.max(idx, oldBefore)) * TL_SCALE;
    return recent + Math.max(0, oldBefore - idx) * TL_OLD_SCALE;
  };

  const items = TIMELINE.map((item, idx) => {
    const startIdx = tlMonthIndex(item.start);
    const endIdx = item.end ? tlMonthIndex(item.end) : nowIdx;
    return { ...item, idx, startIdx, endIdx, top: yAt(endIdx + 1), height: yAt(startIdx) - yAt(endIdx + 1) };
  }).sort((a, b) => a.top - b.top || a.idx - b.idx);

  const lanes = { edu: [], work: [] };
  for (const item of items) {
    const bottoms = lanes[item.lane];
    let col = bottoms.findIndex((bottom) => bottom - TL_OVERLAP_TOLERANCE <= item.top);
    if (col === -1) col = bottoms.length;
    bottoms[col] = item.top + item.height;
    item.col = col;
  }

  const minYear = Math.floor(Math.min(...items.map((i) => i.startIdx)) / 12);
  const firstYearY = yAt(minYear * 12);
  const birthY = firstYearY + 170;
  const axisHeight = birthY + 120;

  const rangeOf = (list) => ({
    top: Math.min(...list.map((i) => i.top)),
    bottom: Math.max(...list.map((i) => i.top + i.height)),
  });
  const eduRange = rangeOf(items.filter((i) => i.lane === "edu" && i.kind !== "cert"));
  const workRange = rangeOf(items.filter((i) => i.lane === "work"));
  const todayY = yAt(nowIdx + 1);
  const solidEdu = `<span class="tl-line tl-line--edu" aria-hidden="true" style="top:${Math.max(eduRange.top, todayY)}px;height:${eduRange.bottom - Math.max(eduRange.top, todayY)}px"></span>`;
  const futureEdu = eduRange.top < todayY ? `<span class="tl-line tl-line--edu tl-line--future" aria-hidden="true" style="top:${eduRange.top}px;height:${todayY - eduRange.top}px"></span>` : "";
  const workLine = `<span class="tl-line tl-line--work" aria-hidden="true" style="top:${Math.max(workRange.top, todayY)}px;height:${workRange.bottom - Math.max(workRange.top, todayY)}px"></span>`;
  const lines = futureEdu + solidEdu + workLine;

  let years = "";
  for (let year = Math.floor(topIdx / 12); year >= minYear; year--) {
    years += `<span class="tl-year" style="top:${yAt(year * 12)}px">${year}</span>`;
  }

  const rows = items
    .map((item) => {
      const text = item[lang];
      const range = item.label ?? `${tlFormatMonth(lang, item.startIdx)} – ${item.end ? tlFormatMonth(lang, item.endIdx) : dict["tl.present"]}`;
      const duration = item.label ? "" : ` · ${tlFormatDuration(lang, item.endIdx - item.startIdx + 1)}`;
      const kind = item.kind ?? item.lane;
      const tag = dict[`lane.${kind}`];
      const live = item.end ? "" : `<span class="tl-live">${dict["tl.present"]}</span>`;
      const first = item.first ? `<span class="tl-first">${dict[item.first]}<span class="tl-star">${TL_STAR}</span></span>` : "";
      const cardIcon = item.endIcon && item.end ? item.endIcon : item.icon;
      const note = item.note ? `<span class="tl-note">${dict[item.note]}</span>` : "";
      const tagList = item.tags?.[lang] ?? [];
      const tags = tagList.length ? `<ul class="tl-tags">${tagList.map((t) => `<li class="tl-tag">${t}</li>`).join("")}</ul>` : "";
      const projects = text.projects ? `<ul class="tl-projects">${text.projects.map((x) => `<li>${x}</li>`).join("")}</ul>` : "";
      const quip = text.quip ? `<p class="tl-quip">${text.quip}</p>` : "";
      const upcoming = item.startIdx > nowIdx;
      const soon = upcoming ? `<span class="tl-soon">${dict["tl.soon"]}</span>` : "";
      const badges = soon || first || note ? `<div class="tl-badges">${soon}${first}${note}</div>` : "";
      return `<li data-idx="${item.idx}" class="tl-item tl-item--${item.lane} tl-item--${kind}${item.first ? " tl-item--first" : ""}${item.endIcon && item.end ? " tl-item--card-end" : ""}${upcoming ? " tl-item--upcoming" : ""}" style="top:${item.top}px;--bar-h:${item.height}px;--col:${item.col};--cols:${lanes[item.lane].length}">
        <span class="tl-bar"></span>
        <span class="tl-icon" aria-hidden="true">${TL_ICONS[cardIcon]}</span>
        <article class="tl-card">
          <span class="tl-card__tag">${tag}${live}</span>
          <h3 class="tl-card__title">${text.title}</h3>
          <p class="tl-card__org">${text.org}</p>
          ${badges}
          <p class="tl-card__dates">${CAL_ICON}<span>${range}${duration}</span></p>
          <p class="tl-card__desc">${text.desc}</p>
          ${projects}
          ${quip}
          ${tags}
        </article>
      </li>`;
    })
    .join("");

  body.style.height = `${axisHeight}px`;
  body.innerHTML = `${TL_DEFS}${lines}<span class="tl-axis" aria-hidden="true"></span><span class="tl-today" style="top:${yAt(nowIdx + 1)}px">${dict["tl.now"]}</span>${years}<span class="tl-gap" aria-hidden="true" style="top:${firstYearY + 34}px;height:${birthY - firstYearY - 82}px"></span><ol class="tl-items">${rows}<li class="tl-birth" style="top:${birthY}px"><span class="tl-icon" aria-hidden="true">${TL_ICONS.baby}</span><span class="tl-birth__text"><strong>${dict["tl.birth"]}</strong><span>${dict["info.born.value"]}</span></span></li></ol>`;

  const counts = {
    "lane.edu": items.filter((i) => i.lane === "edu" && i.kind !== "cert").length,
    "lane.cert": items.filter((i) => i.kind === "cert").length,
    "lane.work": items.filter((i) => i.lane === "work").length,
  };
  document.querySelectorAll("[data-lane-label]").forEach((el) => {
    el.textContent = `${dict[el.dataset.laneLabel]} · ${counts[el.dataset.laneLabel]}`;
  });
  renderTimelineStats(lang, items, nowIdx);
  layoutTimelineCards(axisHeight);
  document.fonts?.ready.then(() => layoutTimelineCards(axisHeight));
  observeTimeline();
}

function layoutTimelineCards(axisHeight) {
  const body = document.getElementById("tl-body");
  const rows = [...body.querySelectorAll(".tl-item")];
  if (!matchMedia("(min-width: 861px)").matches) {
    body.style.height = "auto";
    return;
  }

  const startAnchor = (row) =>
    parseFloat(row.style.top) + parseFloat(row.style.getPropertyValue("--bar-h")) - TL_ICON_LIFT * 3;
  const cardAnchor = (row) => (row.classList.contains("tl-item--card-end") ? parseFloat(row.style.top) - TL_ICON_LIFT : startAnchor(row));

  let needed = axisHeight;
  for (const lane of ["edu", "work"]) {
    const laneRows = rows.filter((r) => r.classList.contains(`tl-item--${lane}`));

    let cursor = -Infinity;
    for (const row of [...laneRows].sort((a, b) => cardAnchor(a) - cardAnchor(b) || b.dataset.idx - a.dataset.idx)) {
      const top = cardAnchor(row);
      const shift = Math.max(0, cursor - top);
      row.style.setProperty("--shift", `${shift}px`);
      cursor = top + shift + row.querySelector(".tl-card").offsetHeight + TL_CARD_GAP;
      needed = Math.max(needed, cursor + TL_CARD_GAP);
    }
  }
  body.style.height = `${needed}px`;
}

let tlObserver = null;

function observeTimeline() {
  const timeline = document.getElementById("timeline");
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (tlObserver) tlObserver.disconnect();
  if (!("IntersectionObserver" in window) || reduceMotion) {
    timeline.classList.remove("tl--anim");
    return;
  }
  timeline.classList.add("tl--anim");
  tlObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        tlObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.15 },
  );
  document.querySelectorAll(".tl-item, .tl-birth, .tl-line").forEach((el) => tlObserver.observe(el));
}

let tlResizeTimer = 0;
window.addEventListener("resize", () => {
  clearTimeout(tlResizeTimer);
  tlResizeTimer = setTimeout(() => renderTimeline(root.lang.startsWith("pt") ? "pt" : "en"), 150);
});
