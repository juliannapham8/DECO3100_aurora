// --------------------
// AURORA CARD OVERLAY
// --------------------
const card = document.getElementById('auroraCard');
if (card) {
  const scene = card.closest('.card-scene');
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position:fixed; inset:0; background:rgba(0,0,0,0.85); z-index:999;
    display:flex; align-items:center; justify-content:center;
    opacity:0; pointer-events:none; transition:opacity 0.4s ease; cursor:pointer;
  `;
  const overlayImg = document.createElement('img');
  const frontImg = document.querySelector('#auroraCard .card-front img');
  if (frontImg) overlayImg.src = frontImg.src;
  overlayImg.style.cssText = `
    max-width:90vw; max-height:85vh; object-fit:contain; border-radius:18px;
    box-shadow:0 0 80px rgba(249,115,22,0.4), 0 0 160px rgba(232,184,75,0.15);
    transform:scale(0.85); transition:transform 0.4s cubic-bezier(0.16,1,0.3,1);
    border:1px solid rgba(232,184,75,0.4);
  `;
  overlay.appendChild(overlayImg);
  document.body.appendChild(overlay);
  scene.addEventListener('click', () => {
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'auto';
    overlayImg.style.transform = 'scale(1)';
  });
  overlay.addEventListener('click', () => {
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    overlayImg.style.transform = 'scale(0.85)';
  });
}

// --------------------
// ELDER DRAGON CARD OVERLAY
// --------------------
const elderDragonCard = document.getElementById('elderDragonCard');
if (elderDragonCard) {
  const elderScene = elderDragonCard.closest('.card-scene');
  const elderOverlay = document.createElement('div');
  elderOverlay.style.cssText = `
    position:fixed; inset:0; background:rgba(0,0,0,0.85); z-index:999;
    display:flex; align-items:center; justify-content:center;
    opacity:0; pointer-events:none; transition:opacity 0.4s ease; cursor:pointer;
  `;
  const elderOverlayImg = document.createElement('img');
  const elderFrontImg = document.querySelector('#elderDragonCard .card-front img');
  if (elderFrontImg) elderOverlayImg.src = elderFrontImg.src;
  elderOverlayImg.style.cssText = `
    max-width:90vw; max-height:85vh; object-fit:contain; border-radius:18px;
    box-shadow:0 0 80px rgba(249,115,22,0.4), 0 0 160px rgba(232,184,75,0.15);
    transform:scale(0.85); transition:transform 0.4s cubic-bezier(0.16,1,0.3,1);
    border:1px solid rgba(232,184,75,0.4);
  `;
  elderOverlay.appendChild(elderOverlayImg);
  document.body.appendChild(elderOverlay);
  elderScene.addEventListener('click', () => {
    elderOverlay.style.opacity = '1';
    elderOverlay.style.pointerEvents = 'auto';
    elderOverlayImg.style.transform = 'scale(1)';
  });
  elderOverlay.addEventListener('click', () => {
    elderOverlay.style.opacity = '0';
    elderOverlay.style.pointerEvents = 'none';
    elderOverlayImg.style.transform = 'scale(0.85)';
  });
}

// --------------------
// DECK IMAGE ZOOM
// --------------------
document.querySelectorAll('.deck-image-wrap').forEach(wrap => {
  const img = wrap.querySelector('.deck-image');
  if (!img) return;
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position:fixed; inset:0; background:rgba(0,0,0,0.88); z-index:999;
    display:flex; align-items:center; justify-content:center;
    opacity:0; pointer-events:none; transition:opacity 0.3s ease; cursor:pointer;
  `;
  const overlayImg = document.createElement('img');
  overlayImg.src = img.src;
  overlayImg.style.cssText = `
    max-width:92vw; max-height:88vh; object-fit:contain; border-radius:8px;
    border:1px solid rgba(232,184,75,0.3); box-shadow:0 0 80px rgba(249,115,22,0.3);
    transform:scale(0.88); transition:transform 0.35s cubic-bezier(0.16,1,0.3,1);
  `;
  overlay.appendChild(overlayImg);
  document.body.appendChild(overlay);
  wrap.style.cursor = 'pointer';
  wrap.addEventListener('click', () => {
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'auto';
    overlayImg.style.transform = 'scale(1)';
  });
  overlay.addEventListener('click', () => {
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    overlayImg.style.transform = 'scale(0.88)';
  });
});

// --------------------
// SCROLL REVEAL
// --------------------
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// --------------------
// BAR CHART ANIMATION
// --------------------
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.bar-fill').forEach(bar => {
        const target = bar.getAttribute('data-width');
        setTimeout(() => { bar.style.width = target; }, 200);
      });
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.bar-chart').forEach(el => barObserver.observe(el));

// --------------------
// CHART GLOBAL DEFAULTS
// --------------------
Chart.defaults.color = 'rgba(245,234,214,0.55)';
Chart.defaults.borderColor = 'rgba(232,184,75,0.1)';
Chart.defaults.font.family = "'Space Mono', monospace";
Chart.defaults.font.size = 11;

const COLORS = {
  orange:     '#f97316',
  orangeSoft: 'rgba(249,115,22,0.6)',
  orangeDim:  'rgba(249,115,22,0.15)',
  gold:       '#e8b84b',
  goldSoft:   'rgba(232,184,75,0.6)',
  goldDim:    'rgba(232,184,75,0.15)',
  green:      '#22c55e',
  greenSoft:  'rgba(34,197,94,0.6)',
  red:        '#ef4444',
  redSoft:    'rgba(239,68,68,0.5)',
  purple:     '#8b5cf6',
  purpleSoft: 'rgba(139,92,246,0.5)',
  blue:       '#3b82f6',
  blueSoft:   'rgba(59,130,246,0.5)',
  cream:      'rgba(255,251,244,0.85)',
  muted:      'rgba(138,112,85,0.8)',
  grid:       'rgba(232,184,75,0.08)',
};

const tooltipDefaults = {
  backgroundColor: '#1a1008',
  borderColor: 'rgba(249,115,22,0.4)',
  borderWidth: 1,
  titleColor: COLORS.gold,
  bodyColor: COLORS.cream,
  padding: 12,
  cornerRadius: 4,
};

const axisDefaults = {
  ticks: { color: 'rgba(245,234,214,0.45)', font: { size: 10 } },
  grid:  { color: COLORS.grid },
};

function makeChart(id, config) {
  const el = document.getElementById(id);
  if (!el) return;
  new Chart(el, config);
}

// --------------------
// DEMAND CHART
// --------------------
d3.csv('dazzling_aurora_prices.csv').then(data => {
  const allRows   = data.slice(0, 13);
  const allLabels = allRows.map(d => d['Date Range'].split(' to ')[0]);
  const allPrices = allRows.map(d => parseFloat(d['Foil Market Price (USD)'].replace('$', '')));
  const SPIKE_IDX = 5;
  const beforePrices = allPrices.map((v, i) => i <= SPIKE_IDX ? v : null);
  const afterPrices  = allPrices.map((v, i) => i >= SPIKE_IDX ? v : null);

  const demandEl = document.getElementById('demandChart');
  if (!demandEl) return;

  let demandPeriod = 'after';
  let demandChart  = null;

  function buildDemandChart(period) {
    if (demandChart) demandChart.destroy();
    const datasets = [
      {
        label: 'Before Unleashed Preview',
        data: beforePrices,
        borderColor: 'rgba(232,184,75,0.4)',
        backgroundColor: 'rgba(232,184,75,0.03)',
        pointBackgroundColor: allPrices.map((_, i) => i <= SPIKE_IDX ? 'rgba(232,184,75,0.4)' : 'transparent'),
        pointRadius: allPrices.map((_, i) => i <= SPIKE_IDX ? 4 : 0),
        tension: 0.35, fill: true, borderWidth: 1.5,
        borderDash: [4, 3], spanGaps: false,
      },
      {
        label: 'After Unleashed Preview',
        data: period === 'before' ? afterPrices.map(() => null) : afterPrices,
        borderColor: COLORS.orange,
        backgroundColor: 'rgba(249,115,22,0.25)',
        pointBackgroundColor: allPrices.map((_, i) => i >= SPIKE_IDX ? COLORS.orange : 'transparent'),
        pointRadius: allPrices.map((_, i) => i >= SPIKE_IDX ? 5 : 0),
        pointHoverRadius: 8,
        tension: 0.35, fill: true, borderWidth: 3, spanGaps: false,
      },
    ];
    demandChart = new Chart(demandEl, {
      type: 'line',
      data: { labels: allLabels, datasets },
      options: {
        responsive: true, maintainAspectRatio: false,
        animation: { duration: 400 },
        plugins: {
          legend: { display: false },
          tooltip: tooltipDefaults,
        },
        scales: {
          x: { ...axisDefaults },
          y: {
            ...axisDefaults,
            min: 0, max: 120,
            title: { display: true, text: 'Market Price (USD)', color: COLORS.muted },
            ticks: { ...axisDefaults.ticks, callback: v => '$' + v },
          },
        },
      },
    });
  }

  document.querySelectorAll('.demand-tog-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      demandPeriod = btn.dataset.period;
      buildDemandChart(demandPeriod);
      document.querySelectorAll('.demand-tog-btn').forEach(b => {
        b.classList.toggle('active',   b.dataset.period === demandPeriod);
        b.classList.toggle('inactive', b.dataset.period !== demandPeriod);
      });
    });
  });

  buildDemandChart('before');
});

// --------------------
// AURORA COMPARE CHART
// --------------------
makeChart('auroraCompareChart', {
  type: 'bar',
  data: {
    labels: ['With Aurora', 'Without Aurora'],
    datasets: [
      {
        label: 'Base Win Rate',
        data: [51.2, 51.2],
        backgroundColor: [COLORS.orangeSoft, 'rgba(138,112,85,0.35)'],
        borderColor: [COLORS.orange, COLORS.muted],
        borderWidth: 2, borderRadius: 0,
        stack: 'wr',
      },
      {
        label: 'Aurora Advantage',
        data: [17.2, 0],
        backgroundColor: ['rgba(59,242,255,0.81)', 'transparent'],
        borderColor: ['rgba(75,227,232,0.66)', 'transparent'],
        borderWidth: 2, borderRadius: 4,
        stack: 'wr',
      }
    ]
  },
  options: {
    indexAxis: 'y',
    responsive: true, maintainAspectRatio: false,
    plugins: {
      tooltip: {
        ...tooltipDefaults,
        callbacks: {
          label: ctx => {
            if (ctx.datasetIndex === 0) return `  Base Win Rate: ${ctx.parsed.x}%`;
            if (ctx.parsed.x === 0) return null;
            return `  Aurora Advantage: +${ctx.parsed.x}%`;
          }
        }
      },
      legend: { display: false },
      annotation: {
        annotations: {
          diffLabel: {
            type: 'label',
            xValue: 59.8,
            yValue: 'With Aurora',
            content: ['Increase winrate of +17.2%'],
            color: COLORS.gold,
            backgroundColor: 'rgba(8,5,15,0.85)',
            borderColor: 'rgba(232,184,75,0.3)',
            borderWidth: 1,
            borderRadius: 3,
            padding: { top: 5, bottom: 5, left: 8, right: 8 },
            font: { size: 12, family: "'Space Mono', monospace" },
            yAdjust: -20,
          }
        }
      }
    },
    scales: {
      y: {
        ...axisDefaults,
        stacked: true,
        ticks: { ...axisDefaults.ticks, font: { size: 14 }, color: COLORS.cream, padding: 12 },
        title: { display: true, text: 'Body Rune Decks', color: COLORS.muted, font: { size: 12, family: "'Space Mono', monospace" }, padding: { bottom: 10 } }
      },
      x: {
        ...axisDefaults,
        stacked: true,
        min: 0, max: 100,
        ticks: { ...axisDefaults.ticks, font: { size: 14 }, callback: v => v + '%' },
        title: { display: true, text: 'Match Win Rate (%)', color: COLORS.muted, font: { size: 12, family: "'Space Mono', monospace" }, padding: { top: 10 } }
      }
    }
  }
});

// --------------------
// LEGEND ABILITY CHART
// --------------------
makeChart('legendAbilityChart', {
  type: 'bar',
  data: {
    labels: ['Khazix', 'Rengar', 'Poppy', 'Irelia', 'Vex', 'Kaisa', 'Azir'],
    datasets: [{
      label: 'Average Activations per Game',
      data: [1.1, 0.9, 1.3, 4.0, 4.2, 3.8, 3.6],
      backgroundColor: [
        COLORS.orangeDim, COLORS.orangeDim, COLORS.orangeDim,
        COLORS.purpleSoft, COLORS.purpleSoft, COLORS.redSoft, COLORS.greenSoft
      ],
      borderColor: [
        COLORS.orange, COLORS.orange, COLORS.orange,
        COLORS.purple, COLORS.purple, '#dc2626', COLORS.green
      ],
      borderWidth: 2, borderRadius: 4,
    }]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    plugins: {
      tooltip: {
        ...tooltipDefaults,
        bodyFont: { size: 14 },
        titleFont: { size: 14 },
        callbacks: {
          afterBody: (items) => items[0].dataIndex < 3
            ? ['  ← Playing around Aurora, not the Legend']
            : ['  ← Legend ability central to win condition']
        }
      },
      legend: { display: false }
    },
    scales: {
      x: {
        ...axisDefaults,
        ticks: { color: COLORS.cream, maxRotation: 30, font: { size: 14 } },
        title: { display: true, text: 'Legend', color: COLORS.muted, font: { size: 14 } }
      },
      y: {
        ...axisDefaults,
        min: 0, max: 5,
        ticks: { ...axisDefaults.ticks, font: { size: 14 }, callback: v => Number.isInteger(v) ? v : v.toFixed(1) },
        title: { display: true, text: 'Avg activations / game', color: COLORS.muted, font: { size: 14 } }
      }
    }
  }
});

// --------------------
// DECK PRICE CHART
// --------------------
fetch('orange_decks.csv')
  .then(res => res.text())
  .then(text => {
    const rows = text.trim().split('\n').slice(1);
    const rbLabels = [];
    const rbPrices = [];
    const rbDecks  = [];
    rows.forEach(row => {
      const cols = row.split(',');
      rbLabels.push(cols[0].trim());
      rbDecks.push(parseInt(cols[1].trim()));
      rbPrices.push(parseInt(cols[7].trim().replace('$', '')));
    });
    new Chart(document.getElementById('rbChart'), {
      type: 'bar',
      data: {
        labels: rbLabels,
        datasets: [{
          label: 'Avg Price (USD)',
          data: rbPrices,
          backgroundColor: 'rgba(249,115,22,0.85)',
          borderColor: '#f97316',
          borderWidth: 1, borderRadius: 3,
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(8,5,15,0.95)',
            borderColor: 'rgba(232,184,75,0.3)',
            borderWidth: 1,
            titleColor: '#e8b84b',
            bodyColor: 'rgba(245,234,214,0.75)',
            titleFont: { family: "'Space Mono', monospace", size: 13 },
            bodyFont: { family: "'Space Mono', monospace", size: 12 },
            callbacks: {
              label: ctx => `  Price: $${ctx.parsed.x}`,
              afterLabel: ctx => `  Decks: ${rbDecks[ctx.dataIndex]}`
            }
          }
        },
        scales: {
          y: {
            ticks: { color: 'rgba(245,234,214,0.7)', font: { family: "'Space Mono', monospace", size: 14 } },
            grid: { color: 'rgba(232,184,75,0.06)' },
            border: { color: 'rgba(232,184,75,0.15)' }
          },
          x: {
            ticks: { color: '#f97316', font: { family: "'Space Mono', monospace", size: 14 }, callback: v => '$' + v },
            grid: { color: 'rgba(232,184,75,0.06)' },
            border: { color: 'rgba(232,184,75,0.15)' },
            title: { display: true, text: 'Avg Price (USD)', color: '#f97316', font: { family: "'Space Mono', monospace", size: 13 } }
          }
        }
      }
    });
  });

// --------------------
// META SHARE CHART
// --------------------
Promise.all([
  d3.csv('unleashed_meta_share.csv'),
  d3.csv('meta_share.csv')
]).then(([unleashedData, spiritforgedData]) => {
  const top15Unleashed    = unleashedData.slice(0, 15);
  const top15Spiritforged = spiritforgedData.slice(0, 15);
  const metaShareLabels = top15Unleashed.map(d => d['Legend']);
  const metaShareReal   = top15Unleashed.map(d => parseFloat(d['Meta Share %']));
  const metaShareDummy  = top15Spiritforged.map(d => parseFloat(d['Meta Share %']));
  const metaShareFlat   = Array(15).fill(3);
  const BASE_COLORS_META = ['#17b5ff', '#c2441a', '#e8b84b'];
  const SCALES_META = { real: { min:0, max:20 }, dummy: { min:0, max:20 }, flat: { min:0, max:20 }, all: { min:0, max:20 } };

  function hexToRgbaMeta(hex, alpha) {
    const clean = hex.startsWith('#') ? hex.slice(1, 7) : null;
    if (!clean || clean.length !== 6) return hex;
    const r = parseInt(clean.slice(0,2), 16);
    const g = parseInt(clean.slice(2,4), 16);
    const b = parseInt(clean.slice(4,6), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  }

  makeChart('metaShareChart', {
    type: 'line',
    data: {
      labels: metaShareLabels,
      datasets: [
        {
          label: 'Unleashed Meta (current)',
          data: metaShareReal,
          borderColor: '#f97316', backgroundColor: 'rgba(249,115,22,0.08)',
          pointBackgroundColor: '#f97316', pointRadius: 4, pointHoverRadius: 6,
          tension: 0.35, fill: true, borderWidth: 2,
        },
        {
          label: 'Spiritforged Meta',
          data: metaShareDummy,
          borderColor: '#c2441a', backgroundColor: 'rgba(194,68,26,0.08)',
          pointBackgroundColor: '#c2441a', pointRadius: 4, pointHoverRadius: 6,
          tension: 0.35, fill: true, borderWidth: 2,
        },
        {
          label: 'Ideal Meta Rate',
          data: metaShareFlat,
          borderColor: '#e8b84b', backgroundColor: 'transparent',
          pointRadius: 0, tension: 0, borderDash: [5, 5], borderWidth: 1.5,
        },
      ],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      animation: { duration: 600, easing: 'easeInOutQuart' },
      plugins: {
        legend: { display: false },
        tooltip: { ...tooltipDefaults, callbacks: { label: ctx => ` ${ctx.dataset.label}: ${ctx.raw}%` } },
      },
      scales: {
        x: { ...axisDefaults, title: { display: true, text: 'Legend', color: COLORS.muted, font: { size: 12 } }, ticks: { ...axisDefaults.ticks, maxRotation: 40, font: { size: 8 } } },
        y: { ...axisDefaults, min: 0, max: 20, title: { display: true, text: 'Meta share %', color: COLORS.muted, font: { size: 16 } }, ticks: { ...axisDefaults.ticks, callback: v => v + '%' } },
      },
    },
  });

  function applyMetaMode(mode) {
    const chartEl = document.getElementById('metaShareChart');
    if (!chartEl) return;
    const instance = Chart.getChart(chartEl);
    if (!instance) return;
    const scale = SCALES_META[mode];
    const activeIdx = { real: 0, dummy: 1, flat: 2, all: -1 }[mode];
    instance.data.labels = mode === 'dummy'
      ? top15Spiritforged.map(d => d['Legend'])
      : top15Unleashed.map(d => d['Legend']);
    instance.options.scales.y.min = scale.min;
    instance.options.scales.y.max = scale.max;
    instance.data.datasets.forEach((ds, i) => {
      const isFlat = i === 2;
      const isActive = isFlat || mode === 'all' || i === activeIdx;
      const base = BASE_COLORS_META[i];
      const alpha = isActive ? 1 : 0.15;
      ds.borderColor          = hexToRgbaMeta(base, alpha);
      ds.pointBackgroundColor = hexToRgbaMeta(base, alpha);
      ds.borderWidth          = isActive ? 2.5 : 1;
      ds.pointRadius          = isFlat ? 0 : (isActive ? 5 : 2);
    });
    instance.update();
    document.querySelectorAll('.meta-tog-btn').forEach(btn => {
      btn.classList.toggle('active',   btn.dataset.mode === mode);
      btn.classList.toggle('inactive', btn.dataset.mode !== mode);
    });
  }

  document.querySelectorAll('.meta-tog-btn').forEach(btn => {
    btn.addEventListener('click', () => applyMetaMode(btn.dataset.mode));
  });

  applyMetaMode('flat');
});

// --------------------
// RUNE PILL RENDERER
// --------------------
const MAP_RUNE_COLORS = {
  calm:  { bg: 'rgba(34,197,94,0.12)',   color: '#86efac', border: 'rgba(34,197,94,0.3)'   },
  chaos: { bg: 'rgba(168,85,247,0.12)',  color: '#d8b4fe', border: 'rgba(168,85,247,0.3)'  },
  mind:  { bg: 'rgba(59,130,246,0.12)',  color: '#93c5fd', border: 'rgba(59,130,246,0.3)'  },
  fury:  { bg: 'rgba(220,38,38,0.12)',   color: '#fca5a5', border: 'rgba(220,38,38,0.3)'   },
  body:  { bg: 'rgba(249,115,22,0.12)',  color: '#fb923c', border: 'rgba(249,115,22,0.3)'  },
  order: { bg: 'rgba(234,179,8,0.12)',   color: '#fde047', border: 'rgba(234,179,8,0.3)'   },
};

function mapRenderRunePills(arch) {
  const runes = arch.match(/calm|chaos|mind|fury|body|order/g) || [];
  return runes.map(rune => {
    const c = MAP_RUNE_COLORS[rune] || { bg: 'rgba(138,112,85,0.12)', color: '#8a7055', border: 'rgba(138,112,85,0.3)' };
    return `<span class="map-pill" style="background:${c.bg};color:${c.color};border-color:${c.border};">${rune}</span>`;
  }).join('');
}

// --------------------
// TOURNAMENT MAP
// --------------------
const MAP_SET_CONFIG = {
  origins:      { label: 'Origins',      color: '#3b82f6', ids: ['houston'] },
  spiritforged: { label: 'Spiritforged', color: '#a855f7', ids: ['lasvegas','lille','atlanta','bologna'] },
  unleashed:    { label: 'Unleashed',    color: '#f97316', ids: ['vancouver','sydney'] },
};

function getSetForTournament(id) {
  return Object.entries(MAP_SET_CONFIG).find(([, cfg]) => cfg.ids.includes(id))?.[0] || null;
}

const MAP_ANNOTATIONS = {
  lasvegas:  'Top 8 was entirely Draven players — raising serious balance concerns around Spiritforged.',
  lille:     null,
  atlanta:   'Towards the end of Spiritforged, after the Las Vegas RQ, card bans were taken place, creating a more balanced meta.',
  bologna:   null,
  sydney:    'One of two Unleashed events. Notably even legend spread across the top cut.',
  vancouver: 'Alongside Sydney, showed the most diverse top-cut field of the season under Unleashed.',
  houston:   'Origins debut event. Annie dominated the top cut, flagging early meta imbalance.',
};

const MAP_TOURNAMENTS = [
  { id:'sydney',   region:'oceania', name:'RQ Sydney',    city:'Sydney',    country:'Australia', date:'March 2026', field:1243, lat:-33.87, lon:151.21,  standings:[] },
  { id:'atlanta',  region:'na',      name:'RQ Atlanta',   city:'Atlanta',   country:'USA',       date:'April 2026', field:1876, lat:33.75,  lon:-84.39,  standings:[] },
  { id:'vancouver',region:'na',      name:'RQ Vancouver', city:'Vancouver', country:'Canada',    date:'May 2026',   field:1102, lat:49.25,  lon:-123.12, standings:[] },
  { id:'lille',    region:'eu',      name:'RQ Lille',     city:'Lille',     country:'France',    date:'June 2026',  field:0,    lat:50.63,  lon:3.06,    standings:[] },
  { id:'houston',  region:'na',      name:'RQ Houston',   city:'Houston',   country:'USA',       date:'June 2026',  field:0,    lat:29.76,  lon:-95.37,  standings:[] },
  { id:'bologna',  region:'eu',      name:'RQ Bologna',   city:'Bologna',   country:'Italy',     date:'June 2026',  field:0,    lat:44.49,  lon:11.34,   standings:[] },
  { id:'lasvegas', region:'na',      name:'RQ Las Vegas', city:'Las Vegas', country:'USA',       date:'June 2026',  field:0,    lat:36.17,  lon:-115.14, standings:[] },
];

const MAP_REGION_CONFIGS = {
  oceania: {
    desc: '1 tournament · Australia & NZ', center: [148, -33], scale: 2200,
    cities: [
      {name:'Melbourne',  lat:-37.81, lon:144.96, anchor:'end',   dx:-7, dy:3},
      {name:'Brisbane',   lat:-27.47, lon:153.02, anchor:'start', dx:7,  dy:3},
      {name:'Canberra',   lat:-35.28, lon:149.13, anchor:'start', dx:7,  dy:3},
      {name:'Adelaide',   lat:-34.93, lon:138.60, anchor:'end',   dx:-7, dy:3},
      {name:'Gold Coast', lat:-28.00, lon:153.43, anchor:'start', dx:7,  dy:3},
      {name:'Newcastle',  lat:-32.93, lon:151.78, anchor:'start', dx:7,  dy:3},
      {name:'Auckland',   lat:-36.86, lon:174.76, anchor:'start', dx:7,  dy:3},
    ]
  },
  na: {
    desc: '4 tournaments', center: [-96, 47], scale: 480,
    cities: [
      {name:'Seattle',     lat:47.61,  lon:-122.33, anchor:'end',   dx:-7, dy:3},
      {name:'Los Angeles', lat:34.05,  lon:-118.24, anchor:'end',   dx:-7, dy:3},
      {name:'Chicago',     lat:41.88,  lon:-87.63,  anchor:'start', dx:7,  dy:3},
      {name:'New York',    lat:40.71,  lon:-74.01,  anchor:'start', dx:7,  dy:3},
      {name:'Toronto',     lat:43.65,  lon:-79.38,  anchor:'start', dx:7,  dy:3},
      {name:'Miami',       lat:25.77,  lon:-80.19,  anchor:'start', dx:7,  dy:3},
    ]
  },
  eu: {
    desc: '4 tournaments', center: [13, 51], scale: 1050,
    cities: [
      {name:'London',    lat:51.51, lon:-0.13,  anchor:'end',   dx:-7, dy:3},
      {name:'Berlin',    lat:52.52, lon:13.41,  anchor:'start', dx:7,  dy:3},
      {name:'Paris',     lat:48.86, lon:2.35,   anchor:'end',   dx:-7, dy:3},
      {name:'Madrid',    lat:40.42, lon:-3.70,  anchor:'end',   dx:-7, dy:3},
      {name:'Rome',      lat:41.90, lon:12.50,  anchor:'start', dx:7,  dy:3},
      {name:'Amsterdam', lat:52.37, lon:4.90,   anchor:'start', dx:7,  dy:3},
      {name:'Warsaw',    lat:52.23, lon:21.01,  anchor:'start', dx:7,  dy:3},
      {name:'Stockholm', lat:59.33, lon:18.07,  anchor:'start', dx:7,  dy:3},
    ]
  }
};

function mapRankClass(r) {
  if (r === 1) return 'map-rk-1';
  if (r === 2) return 'map-rk-2';
  if (r === 3) return 'map-rk-3';
  if (r <= 8)  return 'map-rk-t8';
  return 'map-rk-r';
}
function mapRankLabel(r) {
  if (r === 1) return '1st';
  if (r === 2) return '2nd';
  if (r === 3) return '3rd';
  return '#' + r;
}

let mapActiveId = null;

function mapShowAnnotation(t) {
  mapHideAnnotation();
  const annotation = MAP_ANNOTATIONS[t.id];
  if (!annotation) return;
  const setKey = getSetForTournament(t.id);
  const setCfg = setKey ? MAP_SET_CONFIG[setKey] : null;
  const color  = setCfg ? setCfg.color : '#f97316';
  const box = document.createElement('div');
  box.id = 'map-annotation';
  box.style.cssText = `
    position:absolute; top:12px; right:12px; max-width:210px;
    background:rgba(8,5,15,0.94); border:1px solid rgba(232,184,75,0.18);
    border-top:3px solid ${color}; padding:11px 13px;
    font-family:'Space Mono',monospace; font-size:12px; line-height:1.75;
    color:rgba(245,234,214,0.82); letter-spacing:0.04em;
    pointer-events:none; z-index:20; box-shadow:0 4px 24px rgba(0,0,0,0.5);
  `;
  box.innerHTML = `
    <div style="font-size:12px;letter-spacing:0.22em;text-transform:uppercase;color:${color};margin-bottom:5px;">
      ${setCfg ? setCfg.label + ' · ' : ''}Note
    </div>
    ${annotation}
  `;
  document.getElementById('map-wrap').appendChild(box);
}

function mapHideAnnotation() {
  const existing = document.getElementById('map-annotation');
  if (existing) existing.remove();
}

function mapShowEmpty(msg) {
  document.getElementById('map-sidebar').innerHTML = `
    <div id="map-sidebar-empty">
      <div style="font-size:28px;color:#f97316;opacity:0.22;">◎</div>
      <p>${msg}</p>
    </div>`;
}

function mapSelectTournament(id) {
  if (mapActiveId) d3.select('#map-m-'+mapActiveId).classed('active', false);
  mapActiveId = id;
  d3.select('#map-m-'+id).classed('active', true);
  const t = MAP_TOURNAMENTS.find(x => x.id === id);
  document.getElementById('map-sidebar').innerHTML = `
    <div id="map-t-header">
      <div id="map-t-eyebrow">Regional Qualifier · ${t.country}</div>
      <div id="map-t-name">${t.name}</div>
      <div id="map-t-meta">${t.date}<br>${t.city}, ${t.country}<br>Field: ${t.field.toLocaleString()} players</div>
    </div>
    <div id="map-standings">
      ${t.standings.length === 0
        ? `<div style="padding:24px;text-align:center;font-family:'Space Mono',monospace;font-size:11px;color:#8a7055;letter-spacing:0.1em;text-transform:uppercase;">No standings yet</div>`
        : t.standings.map(s => `
          <div class="map-s-row">
            <div class="map-s-rank ${mapRankClass(s.rank)}">${mapRankLabel(s.rank)}</div>
            <div class="map-s-portrait">
              <img src="legends/${s.legendId || 'placeholder'}.webp"
                   onerror="this.src='legends/placeholder.webp'" alt="${s.legend}">
            </div>
            <div class="map-s-info">
              <div class="map-s-player">${s.legend}</div>
              <div class="map-s-bottom">${mapRenderRunePills(s.arch)}</div>
              <div class="map-s-legend">by ${s.player}</div>
              <div class="map-s-rec">${s.rec}</div>
            </div>
          </div>`).join('')}
    </div>`;
}

function mapRenderRegion(regionKey) {
  mapHideAnnotation();
  const existingLegend = document.getElementById('map-legend');
  if (existingLegend) existingLegend.remove();

  const cfg = MAP_REGION_CONFIGS[regionKey];
  document.getElementById('region-desc').textContent = '· ' + cfg.desc;
  document.getElementById('no-region').style.display = 'none';
  const svgEl = document.getElementById('map-svg');
  svgEl.style.display = 'block';
  const sel = d3.select('#map-svg');
  sel.selectAll('*').remove();
  mapActiveId = null;
  mapShowEmpty('Click a glowing marker to view standings');

  const proj = d3.geoMercator().center(cfg.center).scale(cfg.scale).translate([350, 280]);
  const path = d3.geoPath(proj);
  const g = sel.append('g');
  g.append('rect').attr('x',0).attr('y',0).attr('width',700).attr('height',560).attr('fill','#08050f');

  d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then(world => {
    const countries = topojson.feature(world, world.objects.countries);
    const borders   = topojson.mesh(world, world.objects.countries, (a,b) => a !== b);

    g.append('path').datum({type:'Sphere'}).attr('d',path).attr('fill','#0b1020');
    g.selectAll('.map-land').data(countries.features).join('path')
      .attr('class','map-land').attr('d',path)
      .attr('fill','rgba(232,184,75,0.1)').attr('stroke','rgba(232,184,75,0.28)').attr('stroke-width','0.7');
    g.append('path').datum(borders).attr('d',path)
      .attr('fill','none').attr('stroke','rgba(232,184,75,0.12)').attr('stroke-width','0.4');

    cfg.cities.forEach(c => {
      const pos = proj([c.lon, c.lat]);
      if (!pos) return;
      const [cx, cy] = pos;
      if (cx < -20 || cx > 720 || cy < -20 || cy > 580) return;
      const isTourney = MAP_TOURNAMENTS.find(t => t.city === c.name && t.region === regionKey);
      if (!isTourney) {
        g.append('circle').attr('cx',cx).attr('cy',cy).attr('r',2.5).attr('fill','rgba(245,234,214,0.4)');
        g.append('text').attr('x', cx + c.dx).attr('y', cy + c.dy)
          .attr('fill','rgba(245,234,214,0.5)').attr('font-size','12')
          .attr('font-family','Space Mono, monospace').attr('letter-spacing','0.05em')
          .attr('text-anchor', c.anchor).attr('pointer-events','none').text(c.name);
      }
    });

    MAP_TOURNAMENTS.filter(t => t.region === regionKey).forEach(t => {
      const pos = proj([t.lon, t.lat]);
      if (!pos) return;
      const [cx, cy] = pos;
      const setKey  = getSetForTournament(t.id);
      const setCfg  = setKey ? MAP_SET_CONFIG[setKey] : null;
      const dotColor  = setCfg ? setCfg.color : '#f97316';
      const ringColor = setCfg ? setCfg.color : '#f97316';

      const mg = g.append('g').attr('class','map-t-marker').attr('id','map-m-'+t.id)
        .on('click', () => { mapSelectTournament(t.id); mapShowAnnotation(t); });

      mg.append('circle').attr('cx',cx).attr('cy',cy).attr('r',13)
        .attr('class','map-ring map-pulse').attr('stroke', ringColor);
      mg.append('circle').attr('cx',cx).attr('cy',cy).attr('r',6.5)
        .attr('class','map-dot').attr('fill', dotColor);
      mg.append('circle').attr('cx',cx).attr('cy',cy).attr('r',2.5).attr('fill','#ffd700');

      const lx = cx - 13;
      mg.append('text').attr('x',lx).attr('y',cy - 14)
        .attr('fill', dotColor).attr('font-size','13').attr('font-weight','700')
        .attr('font-family','Space Mono, monospace').attr('letter-spacing','0.05em')
        .attr('text-anchor','end').attr('pointer-events','none').text(t.name);
      mg.append('text').attr('x',lx).attr('y',cy + 4)
        .attr('fill','rgba(245,234,214,0.6)').attr('font-size','11')
        .attr('font-family','Space Mono, monospace').attr('letter-spacing','0.04em')
        .attr('text-anchor','end').attr('pointer-events','none').text(t.city + ', ' + t.country);
    });
  });

  const legend = document.createElement('div');
  legend.id = 'map-legend';
  legend.style.cssText = `
    position:absolute; bottom:12px; left:12px; display:flex; flex-direction:column; gap:6px;
    background:rgba(8,5,15,0.88); border:1px solid rgba(232,184,75,0.15);
    padding:10px 13px; font-family:'Space Mono',monospace; font-size:10px;
    letter-spacing:0.12em; pointer-events:none; z-index:10;
  `;
  legend.innerHTML = `
    <div style="color:rgba(245,234,214,0.35);font-size:9px;letter-spacing:0.25em;text-transform:uppercase;margin-bottom:2px;">Riftbound Set</div>
    ${Object.entries(MAP_SET_CONFIG).map(([, cfg]) => `
      <div style="display:flex;align-items:center;gap:8px;">
        <span style="width:10px;height:10px;border-radius:50%;background:${cfg.color};flex-shrink:0;"></span>
        <span style="color:${cfg.color};">${cfg.label}</span>
      </div>`).join('')}
  `;
  document.getElementById('map-wrap').appendChild(legend);
}

async function loadAllStandings(tournaments) {
  await Promise.all(tournaments.map(async t => {
    try {
      const rows = await d3.csv(`standings/${t.id}_standings.csv`);
      if (!rows.length) return;
      t.standings = rows.map((r, i) => {
        const legendRaw = r.Legend || r.Champion || '';
        const legendId  = legendRaw
          ? legendRaw.split(',')[0].trim().toLowerCase().replace(/\s+/g, '').replace(/'/g, '')
          : 'placeholder';
        return {
          rank:     parseInt((r.Rank || r.Place || r.Placement || '').replace(/\D/g, '')) || (i + 1),
          player:   r.Player  || '',
          legend:   legendRaw,
          legendId: legendId,
          arch:     (r.Archetype || r.Trait || '').toLowerCase().trim(),
          rec:      r.Record  || '',
          price:    r.Price   || '',
        };
      });
    } catch (e) {
      t.standings = [];
    }
  }));
}

loadAllStandings(MAP_TOURNAMENTS).then(() => {
  document.getElementById('region-select').addEventListener('change', function() {
    if (!this.value) {
      d3.select('#map-svg').selectAll('*').remove();
      document.getElementById('map-svg').style.display = 'none';
      document.getElementById('no-region').style.display = 'flex';
      document.getElementById('region-desc').textContent = '';
      mapShowEmpty('Select a region, then click a tournament marker');
      const existingLegend = document.getElementById('map-legend');
      if (existingLegend) existingLegend.remove();
      mapHideAnnotation();
      return;
    }
    mapRenderRegion(this.value);
  });
});