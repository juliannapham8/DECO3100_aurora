/* ----------------------------------------------
   THE AURORA PROBLEM — RQ SYDNEY META REPORT
   script.js — Interactions, animations, charts
------------------------------------------------- */

// --------------------
// PARTICLES
// --------------------
(function spawnParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.bottom = '0';
    p.style.animationDuration = (6 + Math.random() * 10) + 's';
    p.style.animationDelay = (Math.random() * 8) + 's';
    p.style.width = p.style.height = (1 + Math.random() * 3) + 'px';
    p.style.opacity = Math.random() * 0.6;
    container.appendChild(p);
  }
})();

// --------------------
// AURORA CARD OVERLAY
// --------------------
const card = document.getElementById('auroraCard');
if (card) {
  const scene = card.closest('.card-scene');

  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.85);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.4s ease;
    cursor: pointer;
  `;

  const overlayImg = document.createElement('img');
  const frontImg = document.querySelector('#auroraCard .card-front img');
  if (frontImg) {
    overlayImg.src = frontImg.src;
  }
  overlayImg.style.cssText = `
    max-width: 90vw;
    max-height: 85vh;
    object-fit: contain;
    border-radius: 18px;
    box-shadow: 0 0 80px rgba(249, 115, 22, 0.4), 0 0 160px rgba(232, 184, 75, 0.15);
    transform: scale(0.85);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    border: 1px solid rgba(232, 184, 75, 0.4);
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
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.85);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.4s ease;
    cursor: pointer;
  `;

  const elderOverlayImg = document.createElement('img');
  const elderFrontImg = document.querySelector('#elderDragonCard .card-front img');
  if (elderFrontImg) {
    elderOverlayImg.src = elderFrontImg.src;
  }
  elderOverlayImg.style.cssText = `
    max-width: 90vw;
    max-height: 85vh;
    object-fit: contain;
    border-radius: 18px;
    box-shadow: 0 0 80px rgba(249, 115, 22, 0.4), 0 0 160px rgba(232, 184, 75, 0.15);
    transform: scale(0.85);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    border: 1px solid rgba(232, 184, 75, 0.4);
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

// -------------------------
// CHART GLOBAL STYLES
// -------------------------
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
  cream:      'rgba(255, 251, 244, 0.85)',
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

// helper to safely init a chart only if canvas exists
function makeChart(id, config) {
  const el = document.getElementById(id);
  if (!el) return;
  new Chart(el, config);
}

// --------------------
// WIN RATE BAR CHART
// --------------------
makeChart('winRateChart', {
  type: 'bar',
  data: {
    labels: ['calm/chaos', 'body/calm', 'calm/order', 'calm/mind', 'body/chaos', 'chaos/mind', 'body/order', 'mind/order', 'chaos/fury'],
    datasets: [{
      label: 'Match Win %',
      data: [68.4, 61.2, 57.8, 54.3, 52.6, 49.1, 47.4, 45.2, 43.8],
      backgroundColor: [
        COLORS.orange, COLORS.orange, COLORS.orange, COLORS.orange,
        'rgba(220,38,38,0.6)', 'rgba(220,38,38,0.4)',
        COLORS.greenSoft, COLORS.blueSoft, 'rgba(185,28,28,0.5)'
      ],
      borderColor: [
        COLORS.orange, COLORS.gold, COLORS.gold, COLORS.gold,
        '#dc2626', '#dc2626', COLORS.green, COLORS.blue, '#b91c1c'
      ],
      borderWidth: 1.5,
      borderRadius: 3,
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true, maintainAspectRatio: false,
    plugins: {
      tooltip: { ...tooltipDefaults, callbacks: { label: ctx => ` ${ctx.raw}% match win rate` } },
      legend: { display: false }
    },
    scales: {
      x: { ...axisDefaults, min: 35, max: 75, title: { display: true, text: 'Match Win %', color: COLORS.muted, font: { size: 10 } } },
      y: { ...axisDefaults, ticks: { color: COLORS.cream } }
    }
  }
});

// // --------------------
// // DEMAND CHART
// // --------------------
// makeChart('demandChart', {
//   type: 'line',
//   data: {
//     labels: [
//       '2/21','2/24','2/27','3/2','3/5','3/8','3/11','3/14','3/17',
//       '3/20','3/23','3/26','3/29','4/1','4/4','4/7','4/10','4/13',
//       '4/16','4/19','4/22','4/25','4/28','5/1','5/4','5/7','5/10',
//       '5/13','5/16','5/19'
//     ],
//     datasets: [
//       {
//         label: 'After Spiritforged',
//         data: [
//           62.52,59.12,63.34,62.70,58.51,85.41,78.52,91.16,102.15,
//           93.71,81.60,86.33,90.58,88.51,86.24,83.42,82.54,77.23,
//           75.51,74.56,73.06,70.51,67.42,66.60,68.55,71.18,71.57,
//           66.04,60.25,55.85
//         ],
//         borderColor: COLORS.orange,
//         backgroundColor: COLORS.orangeDim,
//         pointBackgroundColor: COLORS.orange,
//         pointRadius: 4, tension: 0.35, fill: true,
//         yAxisID: 'yPrice',
//       },
//       {
//         label: 'Before Spiritforged',
//         data: [
//           39,55,48,25,29,151,40,119,24,
//           29,34,108,20,25,16,26,22,33,
//           19,17,13,33,31,44,68,76,36,
//           49,54,42
//         ],
//         borderColor: COLORS.gold,
//         backgroundColor: COLORS.goldDim,
//         pointBackgroundColor: COLORS.gold,
//         pointRadius: 4, tension: 0.35, fill: false,
//         borderDash: [4, 3],
//         yAxisID: 'ySold',
//       }
//     ]
//   },
//   options: {
//     responsive: true, maintainAspectRatio: false,
//     plugins: {
//       tooltip: tooltipDefaults,
//       legend: { labels: { color: COLORS.cream, font: { size: 11 }, padding: 16, boxWidth: 14 } }
//     },
//     scales: {
//       x: { ...axisDefaults },
//       yPrice: {
//         ...axisDefaults,
//         position: 'left',
//         title: { display: true, text: 'Market Price (USD)', color: COLORS.muted }
//       },
//       ySold: {
//         ...axisDefaults,
//         position: 'right',
//         grid: { drawOnChartArea: false },
//         title: { display: true, text: 'Items Sold', color: COLORS.muted }
//       }
//     }
//   }
// });

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
        borderDash: [4, 3],
        spanGaps: false,
      },
      {
        label: 'After Unleashed Preview',
        data: period === 'before' ? afterPrices.map(() => null) : afterPrices,
        borderColor: COLORS.orange,
        backgroundColor: 'rgba(249,115,22,0.25)',
        pointBackgroundColor: allPrices.map((_, i) => i >= SPIKE_IDX ? COLORS.orange : 'transparent'),
        pointRadius: allPrices.map((_, i) => i >= SPIKE_IDX ? 5 : 0),
        pointHoverRadius: 8,
        tension: 0.35, fill: true, borderWidth: 3,
        spanGaps: false,
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

  buildDemandChart('after');
});

// --------------------
// UNIT CHEAT CHART
// --------------------
makeChart('unitCheatChart', {
  type: 'bar',
  data: {
    labels: ['Elder Dragon', 'Rift Herald', 'Baron Nashor'],
    datasets: [{
      label: 'Times cheated into play (all observed games)',
      data: [94, 71, 48, 39, 27, 21, 14],
      backgroundColor: [
        COLORS.orange, COLORS.orange + 'bb', COLORS.orange + '99',
        COLORS.gold + 'aa', COLORS.gold + '88', COLORS.muted + 'aa', COLORS.muted + '77'
      ],
      borderColor: [COLORS.orange, COLORS.orange, COLORS.orange, COLORS.gold, COLORS.gold, COLORS.muted, COLORS.muted],
      borderWidth: 1.5, borderRadius: 4,
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true, maintainAspectRatio: false,
    plugins: {
      tooltip: tooltipDefaults,
      legend: { display: false }
    },
    scales: {
      x: { ...axisDefaults, title: { display: true, text: 'Times Deployed via Aurora', color: COLORS.muted } },
      y: { ...axisDefaults, ticks: { color: COLORS.cream } }
    }
  }
});

// --------------------
// AURORA COMPARE CHART
// --------------------
makeChart('auroraCompareChart', {
  type: 'bar',
  data: {
    labels: ['Avg Placement (lower=better)', 'Win Rate (%)', 'Top-8 Conversion (%)'],
    datasets: [
      {
        label: ['Body Rune Decks' ,'WITH Aurora'],

        data: [18, 68.4, 62],
        backgroundColor: COLORS.orangeSoft,
        borderColor: COLORS.orange,
        borderWidth: 2, borderRadius: 4,
      },
      {
        label: ['Body Rune Decks', 'WITHOUT Aurora'],
        data: [39, 51.2, 12],
        backgroundColor: 'rgba(138,112,85,0.35)',
        borderColor: COLORS.muted,
        borderWidth: 2, borderRadius: 4,
      }
    ]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    plugins: {
      tooltip: tooltipDefaults,
      legend: {
        position: 'right',
        align: 'start',
        labels: {
          color: COLORS.cream,
          font: { size: 12 },
          padding: 20,
          boxWidth: 16,
          usePointStyle: true,
          pointStyle: 'rectRounded',
        },
        onClick: function(e, legendItem, legend) {
          const index = legendItem.datasetIndex;
          const ci = legend.chart;
          const meta = ci.getDatasetMeta(index);
          meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null;
          ci.update();
        },
        onHover: function(event) {
          event.native.target.style.cursor = 'pointer';
        },
        onLeave: function(event) {
          event.native.target.style.cursor = 'default';
        },
        title: {
          display: true,
          text: 'click to toggle',
          color: COLORS.muted,
          font: { size: 10, family: 'Space Mono' },
          padding: { top: 0, bottom: 2 }
        }
      }
    },
    scales: {
      x: { ...axisDefaults },
      y: { ...axisDefaults, title: { display: true, text: 'Value', color: COLORS.muted } }
    }
  }
});

// --------------------
// LEGEND ABILITY CHART
// --------------------
makeChart('legendAbilityChart', {
  type: 'bar',
  data: {
    labels: ['Khazix (Body)', 'Rengar (Body)', 'Poppy (Body)',
             'Irelia (Chaos/Calm)', 'Vex (Chaos/Calm)', 'Kaisa (Fury/Mind)', 'Azir (Order/Calm)'],
    datasets: [
      {
        label: 'Avg Ability Activations per Game',
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
      }
    ]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    plugins: {
      tooltip: {
        ...tooltipDefaults,
        callbacks: {
          afterBody: (items) => {
            return items[0].dataIndex < 3
              ? ['  ← Playing around Aurora, not the Legend']
              : ['  ← Legend ability central to win condition'];
          }
        }
      },
      legend: { display: false }
    },
    scales: {
      x: { ...axisDefaults, ticks: { color: COLORS.cream, maxRotation: 30, font: { size: 10 } } },
      y: { ...axisDefaults, title: { display: true, text: 'Avg activations / game', color: COLORS.muted }, min: 0, max: 5 }
    }
  }
});

// --------------------
// RADAR CHART
// --------------------
makeChart('radarChart', {
  type: 'radar',
  data: {
    labels: ['Win Rate', 'Top-8 Conversion', 'Avg Placement', 'Consistency', 'Power Ceiling'],
    datasets: [
      {
        label: 'Calmchaos',
        data: [9.2, 9.5, 8.8, 8.5, 9.8],
        borderColor: COLORS.orange,
        backgroundColor: COLORS.orangeDim,
        pointBackgroundColor: COLORS.orange,
        pointRadius: 4,
      },
      {
        label: 'Bodychaos',
        data: [6.8, 5.2, 6.5, 7.1, 7.0],
        borderColor: '#dc2626',
        backgroundColor: 'rgba(239,68,68,0.12)',
        pointBackgroundColor: '#dc2626',
        pointRadius: 4,
      },
      {
        label: 'Chaosmind',
        data: [5.9, 4.1, 5.8, 6.2, 6.5],
        borderColor: COLORS.purple,
        backgroundColor: 'rgba(139,92,246,0.1)',
        pointBackgroundColor: COLORS.purple,
        pointRadius: 4,
      }
    ]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    plugins: {
      tooltip: tooltipDefaults,
      legend: { labels: { color: COLORS.cream, font: { size: 11 }, padding: 16, boxWidth: 14 } }
    },
    scales: {
      r: {
        min: 0, max: 10,
        grid: { color: COLORS.grid },
        angleLines: { color: COLORS.grid },
        pointLabels: { color: COLORS.cream, font: { size: 11 } },
        ticks: { display: false, backdropColor: 'transparent' }
      }
    }
  }
});

// --------------------
// ROUND PROGRESS CHART
// --------------------
makeChart('roundProgressChart', {
  type: 'line',
  data: {
    labels: ['Round 1', 'Round 2', 'Round 3', 'Round 4', 'Round 5', 'Round 6', 'Round 7', 'Round 8 (Top Cut)'],
    datasets: [
      {
        label: 'Body/chaos',
        data: [0.68, 1.41, 2.18, 2.92, 3.69, 4.51, 5.24, 6.0],
        borderColor: COLORS.orange,
        backgroundColor: COLORS.orangeDim,
        pointBackgroundColor: COLORS.orange,
        pointRadius: 5, tension: 0.35, fill: true,
      },
      {
        label: 'Body/calm',
        data: [0.61, 1.22, 1.83, 2.44, 3.05, 3.66, 4.24, 4.8],
        borderColor: COLORS.gold,
        backgroundColor: COLORS.goldDim,
        pointBackgroundColor: COLORS.gold,
        pointRadius: 5, tension: 0.35, fill: true,
        borderDash: [4, 3],
      },
      {
        label: 'All Other Archetypes',
        data: [0.52, 1.03, 1.52, 1.98, 2.44, 2.89, 3.31, 3.7],
        borderColor: COLORS.muted,
        backgroundColor: 'rgba(138,112,85,0.08)',
        pointBackgroundColor: COLORS.muted,
        pointRadius: 4, tension: 0.35, fill: true,
      }
    ]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    plugins: {
      tooltip: tooltipDefaults,
      legend: { labels: { color: COLORS.cream, font: { size: 11 }, padding: 16, boxWidth: 14 } }
    },
    scales: {
      x: { ...axisDefaults },
      y: { ...axisDefaults, title: { display: true, text: 'Cumulative avg wins', color: COLORS.muted } }
    }
  }
});

// --------------------
// PRICE SCATTER CHART
// --------------------
const deckData = [
  { x: 140, y: 1,  label: 'Rico1997 (CC)',      color: COLORS.orange },
  { x: 62,  y: 4,  label: 'Bonk Repeat (CC)',   color: COLORS.orange },
  { x: 159, y: 5,  label: 'Ghosterdriver (CC)', color: COLORS.orange },
  { x: 115, y: 16, label: 'Bolun Zhang (CC)',   color: COLORS.orange },
  { x: 135, y: 22, label: 'MaverickJack (CC)',  color: COLORS.orange },
  { x: 114, y: 27, label: 'KnightinGale (CC)',  color: COLORS.orange },
  { x: 130, y: 39, label: 'Wugtrio (CC)',       color: COLORS.orange },
  { x: 189, y: 50, label: 'KKayn (CC)',         color: COLORS.orange },
  { x: 193, y: 12, label: 'Minjuu (BC)',        color: COLORS.green  },
  { x: 82,  y: 25, label: 'yellow castor (CO)', color: COLORS.blue   },
  { x: 263, y: 33, label: 'Duncan (CM)',        color: COLORS.purple },
  { x: 88,  y: 8,  label: 'Other', color: COLORS.muted },
  { x: 220, y: 11, label: 'Other', color: COLORS.muted },
  { x: 55,  y: 18, label: 'Other', color: COLORS.muted },
  { x: 310, y: 21, label: 'Other', color: COLORS.muted },
  { x: 175, y: 29, label: 'Other', color: COLORS.muted },
  { x: 95,  y: 36, label: 'Other', color: COLORS.muted },
  { x: 280, y: 42, label: 'Other', color: COLORS.muted },
  { x: 145, y: 48, label: 'Other', color: COLORS.muted },
  { x: 70,  y: 55, label: 'Other', color: COLORS.muted },
  { x: 320, y: 60, label: 'Other', color: COLORS.muted },
];

makeChart('priceScatterChart', {
  type: 'scatter',
  data: {
    datasets: [
      {
        label: 'Calmchaos (Aurora)',
        data: deckData.filter(d => d.color === COLORS.orange).map(d => ({ x: d.x, y: d.y, label: d.label })),
        backgroundColor: COLORS.orangeSoft,
        borderColor: COLORS.orange,
        pointRadius: 8, pointHoverRadius: 11,
      },
      {
        label: 'Other Calm archetypes',
        data: deckData.filter(d => d.color !== COLORS.orange && d.color !== COLORS.muted).map(d => ({ x: d.x, y: d.y, label: d.label })),
        backgroundColor: COLORS.goldSoft,
        borderColor: COLORS.gold,
        pointRadius: 7, pointHoverRadius: 10,
      },
      {
        label: 'Non-Calm archetypes',
        data: deckData.filter(d => d.color === COLORS.muted).map(d => ({ x: d.x, y: d.y, label: d.label })),
        backgroundColor: 'rgba(138,112,85,0.4)',
        borderColor: COLORS.muted,
        pointRadius: 5, pointHoverRadius: 8,
      }
    ]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    plugins: {
      tooltip: {
        ...tooltipDefaults,
        callbacks: {
          label: ctx => [`  Placement: ${ctx.raw.y}th`, `  Deck price: $${ctx.raw.x}`, `  ${ctx.raw.label || ''}`]
        }
      },
      legend: { labels: { color: COLORS.cream, font: { size: 11 }, padding: 16, boxWidth: 14 } }
    },
    scales: {
      x: { ...axisDefaults, title: { display: true, text: 'Deck Price (USD)', color: COLORS.muted }, min: 40, max: 350 },
      y: { ...axisDefaults, title: { display: true, text: 'Final Placement (lower = better)', color: COLORS.muted }, reverse: true, min: 0, max: 65 }
    }
  }
});

// --------------------
// BAN PROJECTION CHART
// --------------------
makeChart('banProjectionChart', {
  type: 'bar',
  data: {
    labels: ['Calm', 'Chaos', 'Body', 'Mind', 'Order', 'Fury'],
    datasets: [
      {
        label: 'Current Meta (% of top 64)',
        data: [37.5, 23.4, 18.8, 10.9, 6.3, 3.1],
        backgroundColor: COLORS.orangeSoft,
        borderColor: COLORS.orange,
        borderWidth: 2, borderRadius: 4,
      },
      {
        label: 'Projected Without Aurora (%)',
        data: [18.2, 26.8, 22.4, 16.3, 11.5, 4.8],
        backgroundColor: 'rgba(34,197,94,0.45)',
        borderColor: COLORS.green,
        borderWidth: 2, borderRadius: 4,
      }
    ]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    plugins: {
      tooltip: { ...tooltipDefaults, callbacks: { label: ctx => ` ${ctx.dataset.label}: ${ctx.raw}%` } },
      legend: { labels: { color: COLORS.cream, font: { size: 11 }, padding: 16, boxWidth: 14 } }
    },
    scales: {
      x: { ...axisDefaults },
      y: {
        ...axisDefaults,
        title: { display: true, text: '% of tournament field', color: COLORS.muted },
        ticks: { callback: v => v + '%' }
      }
    }
  }
});

/* ══════════════════════════════════════════════════
   META SHARE BARS
══════════════════════════════════════════════════ */
const META = [
  { label: 'Orange (Aurora)', pct: 38, color: '#c96e24' },
  { label: 'Teal Control',    pct: 18, color: '#357e7e' },
  { label: 'Purple Combo',    pct: 16, color: '#604898' },
  { label: 'Gold Midrange',   pct: 14, color: '#c9a84c' },
  { label: 'Orange (Aggro)',  pct: 9,  color: '#a04f18' },
  { label: 'Other',           pct: 5,  color: '#3a3040' },
];

const mbEl = document.getElementById('meta-bars');
META.forEach(d => {
  const row = document.createElement('div');
  row.className = 'wr-row';
  row.innerHTML = `
    <div class="wr-label"><strong>${d.label}</strong><span>${d.pct}%</span></div>
    <div class="wr-track"><div class="wr-fill" style="background:${d.color}" data-pct="${d.pct}"></div></div>
  `;
  mbEl.appendChild(row);
});

new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting)
      e.target.querySelectorAll('.wr-fill').forEach(b => b.style.width = b.dataset.pct + '%');
  });
}, { threshold: 0.3 }).observe(document.getElementById('meta-bars'));

// --------------------
// META SHARE TOGGLE LINE CHART
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

  const BASE_COLORS_META = ['#f97316', '#c2441a', '#e8b84b'];

  const SCALES_META = {
    real:  { min: 0, max: 20 },
    dummy: { min: 0, max: 20 },
    flat:  { min: 0, max: 20 },
    all:   { min: 0, max: 20 },
  };

  function hexToRgbaMeta(hex, alpha) {
    const clean = hex.startsWith('#') ? hex.slice(1, 7) : null;
    if (!clean || clean.length !== 6) return hex;
    const r = parseInt(clean.slice(0, 2), 16);
    const g = parseInt(clean.slice(2, 4), 16);
    const b = parseInt(clean.slice(4, 6), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  }

  makeChart('metaShareChart', {
    type: 'line',
    data: {
      labels: metaShareLabels,
      datasets: [
        {
          label: 'Unleashed Meta (current)',  // index 0
          data: metaShareReal,
          borderColor: '#f97316',
          backgroundColor: 'rgba(249,115,22,0.08)',
          pointBackgroundColor: '#f97316',
          pointRadius: 4, pointHoverRadius: 6,
          tension: 0.35, fill: true, borderWidth: 2,
        },
        {
          label: 'Spiritforged Meta',          // index 1
          data: metaShareDummy,
          borderColor: '#c2441a',
          backgroundColor: 'rgba(194,68,26,0.08)',
          pointBackgroundColor: '#c2441a',
          pointRadius: 4, pointHoverRadius: 6,
          tension: 0.35, fill: true, borderWidth: 2,
        },
        {
          label: 'Ideal Meta Rate',            // index 2
          data: metaShareFlat,
          borderColor: '#e8b84b',
          backgroundColor: 'transparent',
          pointRadius: 0, tension: 0,
          borderDash: [5, 5], borderWidth: 1.5,
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

    if (mode === 'dummy') {
      instance.data.labels = top15Spiritforged.map(d => d['Legend']);
    } else {
      instance.data.labels = top15Unleashed.map(d => d['Legend']);
    }

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
      const isActive = btn.dataset.mode === mode;
      btn.classList.toggle('active',   isActive);
      btn.classList.toggle('inactive', !isActive);
    });
  }

  document.querySelectorAll('.meta-tog-btn').forEach(btn => {
    btn.addEventListener('click', () => applyMetaMode(btn.dataset.mode));
  });

  applyMetaMode('flat');
});

// // --------------------
// // TOURNAMENT MAP
// // --------------------

// --------------------
// ARCH MAPS
// --------------------
const MAP_ARCH_LABEL = {
  calmchaos:  'calm/chaos',
  calmorder:  'calm/order',
  calmmind:   'calm/mind',
  bodycalm:   'body/calm',
  bodychaos:  'body/chaos',
  bodyorder:  'body/order',
  chaosmind:  'chaos/mind',
  chaosfury:  'chaos/fury',
  furymind:   'fury/mind',
  mindorder:  'mind/order',
};

const MAP_ARCH_PILL = {
  calmchaos:  'map-pill-cc',
  calmorder:  'map-pill-co',
  calmmind:   'map-pill-cm',
  bodycalm:   'map-pill-bc',
  bodychaos:  'map-pill-bch',
  bodyorder:  'map-pill-bo',
  chaosmind:  'map-pill-chm',
  chaosfury:  'map-pill-cf',
  furymind:   'map-pill-fm',
  mindorder:  'map-pill-mo',
};

// --------------------
// STANDINGS LOADER
// --------------------
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

// --------------------
// TOURNAMENT LIST
// --------------------
const MAP_TOURNAMENTS = [
  {
    id:'sydney', region:'oceania',
    name:'RQ Sydney', city:'Sydney', country:'Australia', date:'March 2026', field:1243,
    lat:-33.87, lon:151.21,
    standings:[]
  },
  {
    id:'atlanta', region:'na',
    name:'RQ Atlanta', city:'Atlanta', country:'USA', date:'April 2026', field:1876,
    lat:33.75, lon:-84.39,
    standings:[]
  },
  {
    id:'vancouver', region:'na',
    name:'RQ Vancouver', city:'Vancouver', country:'Canada', date:'May 2026', field:1102,
    lat:49.25, lon:-123.12,
    standings:[]
  },
  {
    id:'lille', region:'eu',
    name:'RQ Lille', city:'Lille', country:'France', date:'June 2026', field:0,
    lat:50.63, lon:3.06,
    standings:[]
  },
  {
    id:'houston', region:'na',
    name:'RQ Houston', city:'Houston', country:'USA', date:'June 2026', field:0,
    lat:29.76, lon:-95.37,
    standings:[]
  },
  {
    id:'bologna', region:'eu',
    name:'RQ Bologna', city:'Bologna', country:'Italy', date:'June 2026', field:0,
    lat:44.49, lon:11.34,
    standings:[]
  },
  {
    id:'lasvegas', region:'na',
    name:'RQ Las Vegas', city:'Las Vegas', country:'USA', date:'June 2026', field:0,
    lat:36.17, lon:-115.14,
    standings:[]
  },
];

// --------------------
// REGION CONFIGS
// --------------------
const MAP_REGION_CONFIGS = {
  oceania: {
    desc: '1 tournament · Australia & NZ',
    center: [148, -33], scale: 2200,
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
    desc: '4 tournaments',
    center: [-96, 47], scale: 480,
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
    desc: '4 tournaments',
    center: [13, 51], scale: 1050,
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

// --------------------
// HELPERS
// --------------------
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

// --------------------
// RENDER REGION
// --------------------
function mapRenderRegion(regionKey) {
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
      .attr('fill','rgba(232,184,75,0.1)')
      .attr('stroke','rgba(232,184,75,0.28)')
      .attr('stroke-width','0.7');

    g.append('path').datum(borders).attr('d',path)
      .attr('fill','none').attr('stroke','rgba(232,184,75,0.12)').attr('stroke-width','0.4');

    // static city dots
    cfg.cities.forEach(c => {
      const pos = proj([c.lon, c.lat]);
      if (!pos) return;
      const [cx, cy] = pos;
      if (cx < -20 || cx > 720 || cy < -20 || cy > 580) return;
      const isTourney = MAP_TOURNAMENTS.find(t => t.city === c.name && t.region === regionKey);
      if (!isTourney) {
        g.append('circle').attr('cx',cx).attr('cy',cy).attr('r',2.5)
          .attr('fill','rgba(245,234,214,0.4)');
        g.append('text').attr('x', cx + c.dx).attr('y', cy + c.dy)
          .attr('fill','rgba(245,234,214,0.5)').attr('font-size','8')
          .attr('font-family','Space Mono, monospace').attr('letter-spacing','0.05em')
          .attr('text-anchor', c.anchor).attr('pointer-events','none').text(c.name);
      }
    });

    // tournament markers
    MAP_TOURNAMENTS.filter(t => t.region === regionKey).forEach(t => {
      const pos = proj([t.lon, t.lat]);
      if (!pos) return;
      const [cx, cy] = pos;

      const mg = g.append('g').attr('class','map-t-marker').attr('id','map-m-'+t.id)
        .on('click', () => mapSelectTournament(t.id));

      mg.append('circle').attr('cx',cx).attr('cy',cy).attr('r',13)
        .attr('class','map-ring map-pulse').attr('stroke','#f97316');
      mg.append('circle').attr('cx',cx).attr('cy',cy).attr('r',6.5)
        .attr('class','map-dot').attr('fill','#f97316');
      mg.append('circle').attr('cx',cx).attr('cy',cy).attr('r',2.5)
        .attr('fill','#ffd700');

      const lx = cx - 13;
      mg.append('text').attr('x',lx).attr('y',cy - 10)
        .attr('fill','#f97316').attr('font-size','10').attr('font-weight','700')
        .attr('font-family','Space Mono, monospace').attr('letter-spacing','0.05em')
        .attr('text-anchor','end').attr('pointer-events','none').text(t.name);
      mg.append('text').attr('x',lx).attr('y',cy + 4)
        .attr('fill','rgba(245,234,214,0.6)').attr('font-size','8.5')
        .attr('font-family','Space Mono, monospace').attr('letter-spacing','0.04em')
        .attr('text-anchor','end').attr('pointer-events','none').text(t.city + ', ' + t.country);
    });
  });
}

// --------------------
// SELECT TOURNAMENT
// --------------------
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
                 onerror="this.src='legends/placeholder.webp'"
                 alt="${s.legend}">
          </div>
          <div class="map-s-info">
            <div class="map-s-player">${s.legend}</div>
            <div class="map-s-bottom">
              <span class="map-pill ${MAP_ARCH_PILL[s.arch] || 'map-pill-cc'}">${MAP_ARCH_LABEL[s.arch] || s.arch}</span>
            </div>
            <div class="map-s-legend">by ${s.player}</div>
            <div class="map-s-rec">${s.rec}</div>
          </div>
        </div>`).join('')}
    </div>`;
}

// --------------------
// SHOW EMPTY
// --------------------
function mapShowEmpty(msg) {
  document.getElementById('map-sidebar').innerHTML = `
    <div id="map-sidebar-empty">
      <div style="font-size:28px;color:#f97316;opacity:0.22;">◎</div>
      <p>${msg}</p>
    </div>`;
}

// --------------------
// INIT
// --------------------
loadAllStandings(MAP_TOURNAMENTS).then(() => {
  document.getElementById('region-select').addEventListener('change', function() {
    if (!this.value) {
      d3.select('#map-svg').selectAll('*').remove();
      document.getElementById('map-svg').style.display = 'none';
      document.getElementById('no-region').style.display = 'flex';
      document.getElementById('region-desc').textContent = '';
      mapShowEmpty('Select a region, then click a tournament marker');
      return;
    }
    mapRenderRegion(this.value);
  });
});