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

new Chart(document.getElementById('demandChart'), {
  type: 'line',
  data: {
    labels: ['Round 1', 'Round 2', 'Round 3', 'Round 4', 'Round 5', 'Round 6', 'Round 7', 'Round 8 (Top Cut)'],
    datasets: [
      {
        label: 'After Unleashed',
        data: [0.68, 1.41, 2.18, 2.92, 3.69, 4.51, 5.24, 6.0],
        borderColor: COLORS.orange,
        backgroundColor: COLORS.orangeDim,
        pointBackgroundColor: COLORS.orange,
        pointRadius: 5, tension: 0.35, fill: true,
      },
      {
        label: 'Before Unleashed',
        data: [0.61, 1.22, 1.83, 2.44, 3.05, 3.66, 4.24, 4.8],
        borderColor: COLORS.gold,
        backgroundColor: COLORS.goldDim,
        pointBackgroundColor: COLORS.gold,
        pointRadius: 5, tension: 0.35, fill: true,
        borderDash: [4, 3],
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
      y: { ...axisDefaults, title: { display: true, text: 'Price', color: COLORS.muted } }
    }
  }
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
const metaShareLabels = Array.from({ length: 19 }, (_, i) => `#${i + 1}`);
const metaShareReal   = [8, 8, 8, 7, 5, 5, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2];
const metaShareDummy  = [45, 25, 15, 3, 2, 2, 1, 1, 1, 1, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5];
const metaShareFlat   = Array(19).fill(parseFloat((100 / 19).toFixed(2)));

const BASE_COLORS_META = ['#f97316', '#c2441a', '#e8b84b'];

const SCALES_META = {
  real:  { min: 0,  max: 12 },
  dummy: { min: 0,  max: 50 },
  flat:  { min: 4,  max: 8  },
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
        label: 'Unleashed Meta (current)',
        data: metaShareReal,
        borderColor: '#f97316',
        backgroundColor: 'rgba(249,115,22,0.08)',
        pointBackgroundColor: '#f97316',
        pointRadius: 4, pointHoverRadius: 6,
        tension: 0.35, fill: true, borderWidth: 2,
      },
      {
        label: 'Spiritforged Meta',
        data: metaShareDummy,
        borderColor: '#c2441a',
        backgroundColor: 'rgba(194,68,26,0.08)',
        pointBackgroundColor: '#c2441a',
        pointRadius: 4, pointHoverRadius: 6,
        tension: 0.35, fill: true, borderWidth: 2,
      },
      {
        label: 'Ideal Meta Rate',
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
      x: { ...axisDefaults, title: { display: true, text: 'Legend rank', color: COLORS.muted, font: { size: 12 } } },
      y: { ...axisDefaults, min: 0, max: 12, title: { display: true, text: 'Meta share %', color: COLORS.muted, font: { size: 12 } }, ticks: { ...axisDefaults.ticks, callback: v => v + '%' } },
    },
  },
});

function applyMetaMode(mode) {
  const chartEl = document.getElementById('metaShareChart');
  if (!chartEl) return;
  const instance = Chart.getChart(chartEl);
  if (!instance) return;

  const scale = SCALES_META[mode];
  const activeIdx = { real: 0, dummy: 1, flat: 2 }[mode];

  instance.options.scales.y.min = scale.min;
  instance.options.scales.y.max = scale.max;

  instance.data.datasets.forEach((ds, i) => {
    const isActive = i === activeIdx;
    const base = BASE_COLORS_META[i];
    const alpha = isActive ? 1 : 0.15;
    ds.borderColor         = hexToRgbaMeta(base, alpha);
    ds.pointBackgroundColor = hexToRgbaMeta(base, alpha);
    ds.borderWidth         = isActive ? 2.5 : 1;
    ds.pointRadius         = isActive && i !== 2 ? 5 : (i !== 2 ? 2 : 0);
  });

  instance.update();

  document.querySelectorAll('.meta-tog-btn').forEach(btn => {
    const isActive = btn.dataset.mode === mode;
    btn.classList.toggle('active', isActive);
    btn.classList.toggle('inactive', !isActive);
  });
}

document.querySelectorAll('.meta-tog-btn').forEach(btn => {
  btn.addEventListener('click', () => applyMetaMode(btn.dataset.mode));
});

applyMetaMode('real');