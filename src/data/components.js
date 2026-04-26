// ─── PC Components Database — 2-3 options per tier, direct buy links ─────────

const amz = (q) => `https://www.amazon.in/s?k=${encodeURIComponent(q)}`
const fk  = (q) => `https://www.flipkart.com/search?q=${encodeURIComponent(q)}`

export const cpuData = {
  gaming: {
    budget: [
      { name: 'AMD Ryzen 5 5600', specs: '6-Core 12-Thread, 3.5-4.4GHz, 65W', price: { amazon: 12999, flipkart: 12499 }, links: { amazon: amz('AMD Ryzen 5 5600'), flipkart: fk('AMD Ryzen 5 5600') }, img: '🔲', best: true },
      { name: 'Intel Core i5-12400F', specs: '6-Core 12-Thread, 2.5-4.4GHz, 65W', price: { amazon: 13999, flipkart: 13499 }, links: { amazon: amz('Intel Core i5-12400F'), flipkart: fk('Intel Core i5-12400F') }, img: '🔲' },
      { name: 'AMD Ryzen 5 5500', specs: '6-Core 12-Thread, 3.6-4.2GHz, 65W', price: { amazon: 9999, flipkart: 9499 }, links: { amazon: amz('AMD Ryzen 5 5500'), flipkart: fk('AMD Ryzen 5 5500') }, img: '🔲' },
    ],
    mid: [
      { name: 'AMD Ryzen 5 7600X', specs: '6-Core 12-Thread, 4.7-5.3GHz, 105W', price: { amazon: 22999, flipkart: 22499 }, links: { amazon: amz('AMD Ryzen 5 7600X'), flipkart: fk('AMD Ryzen 5 7600X') }, img: '🔲', best: true },
      { name: 'Intel Core i5-13600K', specs: '14-Core 20-Thread, 3.5-5.1GHz, 125W', price: { amazon: 24999, flipkart: 24499 }, links: { amazon: amz('Intel Core i5-13600K'), flipkart: fk('Intel Core i5-13600K') }, img: '🔲' },
      { name: 'AMD Ryzen 7 5700X', specs: '8-Core 16-Thread, 3.4-4.6GHz, 65W', price: { amazon: 19999, flipkart: 19499 }, links: { amazon: amz('AMD Ryzen 7 5700X'), flipkart: fk('AMD Ryzen 7 5700X') }, img: '🔲' },
    ],
    high: [
      { name: 'AMD Ryzen 9 7900X', specs: '12-Core 24-Thread, 4.7-5.6GHz, 170W', price: { amazon: 44999, flipkart: 43999 }, links: { amazon: amz('AMD Ryzen 9 7900X'), flipkart: fk('AMD Ryzen 9 7900X') }, img: '🔲', best: true },
      { name: 'Intel Core i9-13900K', specs: '24-Core 32-Thread, 3.0-5.8GHz, 125W', price: { amazon: 54999, flipkart: 53999 }, links: { amazon: amz('Intel Core i9-13900K'), flipkart: fk('Intel Core i9-13900K') }, img: '🔲' },
      { name: 'AMD Ryzen 7 7700X', specs: '8-Core 16-Thread, 4.5-5.4GHz, 105W', price: { amazon: 29999, flipkart: 29499 }, links: { amazon: amz('AMD Ryzen 7 7700X'), flipkart: fk('AMD Ryzen 7 7700X') }, img: '🔲' },
    ],
  },
  editing: {
    budget: [
      { name: 'AMD Ryzen 5 5600X', specs: '6-Core 12-Thread, 3.7-4.6GHz, 65W', price: { amazon: 14999, flipkart: 14499 }, links: { amazon: amz('AMD Ryzen 5 5600X'), flipkart: fk('AMD Ryzen 5 5600X') }, img: '🔲', best: true },
      { name: 'Intel Core i5-12400', specs: '6-Core 12-Thread, 2.5-4.4GHz, 65W', price: { amazon: 14999, flipkart: 14499 }, links: { amazon: amz('Intel Core i5-12400'), flipkart: fk('Intel Core i5-12400') }, img: '🔲' },
      { name: 'AMD Ryzen 5 5600G', specs: '6-Core 12-Thread, 3.9-4.4GHz, Integrated GPU', price: { amazon: 13999, flipkart: 13499 }, links: { amazon: amz('AMD Ryzen 5 5600G'), flipkart: fk('AMD Ryzen 5 5600G') }, img: '🔲' },
    ],
    mid: [
      { name: 'AMD Ryzen 7 7700X', specs: '8-Core 16-Thread, 4.5-5.4GHz, 105W', price: { amazon: 29999, flipkart: 29499 }, links: { amazon: amz('AMD Ryzen 7 7700X'), flipkart: fk('AMD Ryzen 7 7700X') }, img: '🔲', best: true },
      { name: 'Intel Core i7-12700K', specs: '12-Core 20-Thread, 3.6-5.0GHz, 125W', price: { amazon: 27999, flipkart: 27499 }, links: { amazon: amz('Intel Core i7-12700K'), flipkart: fk('Intel Core i7-12700K') }, img: '🔲' },
      { name: 'AMD Ryzen 9 5900X', specs: '12-Core 24-Thread, 3.7-4.8GHz, 105W', price: { amazon: 32999, flipkart: 31999 }, links: { amazon: amz('AMD Ryzen 9 5900X'), flipkart: fk('AMD Ryzen 9 5900X') }, img: '🔲' },
    ],
    high: [
      { name: 'AMD Ryzen 9 7950X', specs: '16-Core 32-Thread, 4.5-5.7GHz, 170W', price: { amazon: 64999, flipkart: 63999 }, links: { amazon: amz('AMD Ryzen 9 7950X'), flipkart: fk('AMD Ryzen 9 7950X') }, img: '🔲', best: true },
      { name: 'Intel Core i9-13900K', specs: '24-Core 32-Thread, 3.0-5.8GHz, 125W', price: { amazon: 54999, flipkart: 53999 }, links: { amazon: amz('Intel Core i9-13900K'), flipkart: fk('Intel Core i9-13900K') }, img: '🔲' },
      { name: 'AMD Ryzen 9 7900X', specs: '12-Core 24-Thread, 4.7-5.6GHz, 170W', price: { amazon: 44999, flipkart: 43999 }, links: { amazon: amz('AMD Ryzen 9 7900X'), flipkart: fk('AMD Ryzen 9 7900X') }, img: '🔲' },
    ],
  },
  studying: {
    budget: [
      { name: 'Intel Core i3-12100', specs: '4-Core 8-Thread, 3.3-4.3GHz, 60W', price: { amazon: 8999, flipkart: 8499 }, links: { amazon: amz('Intel Core i3-12100'), flipkart: fk('Intel Core i3-12100') }, img: '🔲', best: true },
      { name: 'AMD Ryzen 3 4100', specs: '4-Core 8-Thread, 3.8-4.0GHz, 65W', price: { amazon: 6999, flipkart: 6499 }, links: { amazon: amz('AMD Ryzen 3 4100'), flipkart: fk('AMD Ryzen 3 4100') }, img: '🔲' },
      { name: 'Intel Core i3-10100', specs: '4-Core 8-Thread, 3.6-4.3GHz, 65W', price: { amazon: 7499, flipkart: 6999 }, links: { amazon: amz('Intel Core i3-10100'), flipkart: fk('Intel Core i3-10100') }, img: '🔲' },
    ],
    mid: [
      { name: 'AMD Ryzen 5 5600G', specs: '6-Core 12-Thread, 3.9-4.4GHz, Integrated GPU', price: { amazon: 13999, flipkart: 13499 }, links: { amazon: amz('AMD Ryzen 5 5600G'), flipkart: fk('AMD Ryzen 5 5600G') }, img: '🔲', best: true },
      { name: 'Intel Core i5-12400', specs: '6-Core 12-Thread, 2.5-4.4GHz, 65W', price: { amazon: 14999, flipkart: 14499 }, links: { amazon: amz('Intel Core i5-12400'), flipkart: fk('Intel Core i5-12400') }, img: '🔲' },
      { name: 'AMD Ryzen 5 5600', specs: '6-Core 12-Thread, 3.5-4.4GHz, 65W', price: { amazon: 12999, flipkart: 12499 }, links: { amazon: amz('AMD Ryzen 5 5600'), flipkart: fk('AMD Ryzen 5 5600') }, img: '🔲' },
    ],
    high: [
      { name: 'Intel Core i5-13400', specs: '10-Core 16-Thread, 2.5-4.6GHz, 65W', price: { amazon: 18999, flipkart: 18499 }, links: { amazon: amz('Intel Core i5-13400'), flipkart: fk('Intel Core i5-13400') }, img: '🔲', best: true },
      { name: 'AMD Ryzen 5 7600', specs: '6-Core 12-Thread, 3.8-5.1GHz, 65W', price: { amazon: 19999, flipkart: 19499 }, links: { amazon: amz('AMD Ryzen 5 7600'), flipkart: fk('AMD Ryzen 5 7600') }, img: '🔲' },
      { name: 'Intel Core i7-12700', specs: '12-Core 20-Thread, 2.1-4.9GHz, 65W', price: { amazon: 24999, flipkart: 24499 }, links: { amazon: amz('Intel Core i7-12700'), flipkart: fk('Intel Core i7-12700') }, img: '🔲' },
    ],
  },
  office: {
    budget: [
      { name: 'Intel Core i3-12100', specs: '4-Core 8-Thread, 3.3-4.3GHz, 60W', price: { amazon: 8999, flipkart: 8499 }, links: { amazon: amz('Intel Core i3-12100'), flipkart: fk('Intel Core i3-12100') }, img: '🔲', best: true },
      { name: 'AMD Ryzen 3 4300G', specs: '4-Core 8-Thread, 3.8-4.0GHz, Integrated GPU', price: { amazon: 7999, flipkart: 7499 }, links: { amazon: amz('AMD Ryzen 3 4300G'), flipkart: fk('AMD Ryzen 3 4300G') }, img: '🔲' },
      { name: 'Intel Pentium G7400', specs: '2-Core 4-Thread, 3.7GHz, 46W, UHD 710', price: { amazon: 5999, flipkart: 5499 }, links: { amazon: amz('Intel Pentium G7400'), flipkart: fk('Intel Pentium G7400') }, img: '🔲' },
    ],
    mid: [
      { name: 'Intel Core i5-12400', specs: '6-Core 12-Thread, 2.5-4.4GHz, 65W', price: { amazon: 14999, flipkart: 14499 }, links: { amazon: amz('Intel Core i5-12400'), flipkart: fk('Intel Core i5-12400') }, img: '🔲', best: true },
      { name: 'AMD Ryzen 5 5600G', specs: '6-Core 12-Thread, 3.9-4.4GHz, Integrated GPU', price: { amazon: 13999, flipkart: 13499 }, links: { amazon: amz('AMD Ryzen 5 5600G'), flipkart: fk('AMD Ryzen 5 5600G') }, img: '🔲' },
      { name: 'Intel Core i5-13400', specs: '10-Core 16-Thread, 2.5-4.6GHz, 65W', price: { amazon: 18999, flipkart: 18499 }, links: { amazon: amz('Intel Core i5-13400'), flipkart: fk('Intel Core i5-13400') }, img: '🔲' },
    ],
    high: [
      { name: 'Intel Core i7-13700', specs: '16-Core 24-Thread, 2.1-5.2GHz, 65W', price: { amazon: 34999, flipkart: 34499 }, links: { amazon: amz('Intel Core i7-13700'), flipkart: fk('Intel Core i7-13700') }, img: '🔲', best: true },
      { name: 'AMD Ryzen 7 7700', specs: '8-Core 16-Thread, 3.8-5.3GHz, 65W', price: { amazon: 29999, flipkart: 29499 }, links: { amazon: amz('AMD Ryzen 7 7700'), flipkart: fk('AMD Ryzen 7 7700') }, img: '🔲' },
      { name: 'Intel Core i7-12700', specs: '12-Core 20-Thread, 2.1-4.9GHz, 65W', price: { amazon: 24999, flipkart: 24499 }, links: { amazon: amz('Intel Core i7-12700'), flipkart: fk('Intel Core i7-12700') }, img: '🔲' },
    ],
  },
}

export const gpuData = {
  gaming: {
    budget: [
      { name: 'NVIDIA RTX 3060 12GB', specs: '12GB GDDR6, 1320-1777MHz, 170W', price: { amazon: 28999, flipkart: 27999 }, links: { amazon: amz('NVIDIA RTX 3060'), flipkart: fk('NVIDIA RTX 3060') }, img: '🎮', best: true },
      { name: 'AMD RX 6600 8GB', specs: '8GB GDDR6, 1626-2491MHz, 132W', price: { amazon: 24999, flipkart: 24499 }, links: { amazon: amz('AMD RX 6600'), flipkart: fk('AMD RX 6600') }, img: '🎮' },
      { name: 'NVIDIA GTX 1660 Super 6GB', specs: '6GB GDDR6, 1530-1785MHz, 125W', price: { amazon: 19999, flipkart: 19499 }, links: { amazon: amz('GTX 1660 Super'), flipkart: fk('GTX 1660 Super') }, img: '🎮' },
    ],
    mid: [
      { name: 'NVIDIA RTX 4070 12GB', specs: '12GB GDDR6X, 1920-2475MHz, 200W', price: { amazon: 54999, flipkart: 53999 }, links: { amazon: amz('NVIDIA RTX 4070'), flipkart: fk('NVIDIA RTX 4070') }, img: '🎮', best: true },
      { name: 'AMD RX 7800 XT 16GB', specs: '16GB GDDR6, 1295-2430MHz, 263W', price: { amazon: 49999, flipkart: 48999 }, links: { amazon: amz('AMD RX 7800 XT'), flipkart: fk('AMD RX 7800 XT') }, img: '🎮' },
      { name: 'NVIDIA RTX 3080 10GB', specs: '10GB GDDR6X, 1440-1710MHz, 320W', price: { amazon: 59999, flipkart: 57999 }, links: { amazon: amz('NVIDIA RTX 3080'), flipkart: fk('NVIDIA RTX 3080') }, img: '🎮' },
    ],
    high: [
      { name: 'NVIDIA RTX 4090 24GB', specs: '24GB GDDR6X, 2235-2520MHz, 450W', price: { amazon: 159999, flipkart: 154999 }, links: { amazon: amz('NVIDIA RTX 4090'), flipkart: fk('NVIDIA RTX 4090') }, img: '🎮', best: true },
      { name: 'AMD RX 7900 XTX 24GB', specs: '24GB GDDR6, 1855-2500MHz, 355W', price: { amazon: 89999, flipkart: 87999 }, links: { amazon: amz('AMD RX 7900 XTX'), flipkart: fk('AMD RX 7900 XTX') }, img: '🎮' },
      { name: 'NVIDIA RTX 4080 16GB', specs: '16GB GDDR6X, 2205-2505MHz, 320W', price: { amazon: 119999, flipkart: 114999 }, links: { amazon: amz('NVIDIA RTX 4080'), flipkart: fk('NVIDIA RTX 4080') }, img: '🎮' },
    ],
  },
  editing: {
    budget: [
      { name: 'NVIDIA RTX 3060 Ti 8GB', specs: '8GB GDDR6, 1410-1665MHz, 200W', price: { amazon: 34999, flipkart: 33999 }, links: { amazon: amz('RTX 3060 Ti'), flipkart: fk('RTX 3060 Ti') }, img: '🎨', best: true },
      { name: 'AMD RX 6700 XT 12GB', specs: '12GB GDDR6, 2321-2581MHz, 230W', price: { amazon: 32999, flipkart: 31999 }, links: { amazon: amz('AMD RX 6700 XT'), flipkart: fk('AMD RX 6700 XT') }, img: '🎨' },
      { name: 'NVIDIA RTX 3060 12GB', specs: '12GB GDDR6, 1320-1777MHz, 170W', price: { amazon: 28999, flipkart: 27999 }, links: { amazon: amz('NVIDIA RTX 3060'), flipkart: fk('NVIDIA RTX 3060') }, img: '🎨' },
    ],
    mid: [
      { name: 'NVIDIA RTX 4070 Ti 12GB', specs: '12GB GDDR6X, 2310-2610MHz, 285W', price: { amazon: 79999, flipkart: 78999 }, links: { amazon: amz('RTX 4070 Ti'), flipkart: fk('RTX 4070 Ti') }, img: '🎨', best: true },
      { name: 'NVIDIA RTX 4070 12GB', specs: '12GB GDDR6X, 1920-2475MHz, 200W', price: { amazon: 54999, flipkart: 53999 }, links: { amazon: amz('NVIDIA RTX 4070'), flipkart: fk('NVIDIA RTX 4070') }, img: '🎨' },
      { name: 'AMD RX 7900 XT 20GB', specs: '20GB GDDR6, 1500-2400MHz, 315W', price: { amazon: 74999, flipkart: 72999 }, links: { amazon: amz('AMD RX 7900 XT'), flipkart: fk('AMD RX 7900 XT') }, img: '🎨' },
    ],
    high: [
      { name: 'NVIDIA RTX 4090 24GB', specs: '24GB GDDR6X, 2235-2520MHz, 450W', price: { amazon: 159999, flipkart: 154999 }, links: { amazon: amz('NVIDIA RTX 4090'), flipkart: fk('NVIDIA RTX 4090') }, img: '🎨', best: true },
      { name: 'NVIDIA RTX 4080 16GB', specs: '16GB GDDR6X, 2205-2505MHz, 320W', price: { amazon: 119999, flipkart: 114999 }, links: { amazon: amz('NVIDIA RTX 4080'), flipkart: fk('NVIDIA RTX 4080') }, img: '🎨' },
      { name: 'AMD RX 7900 XTX 24GB', specs: '24GB GDDR6, 1855-2500MHz, 355W', price: { amazon: 89999, flipkart: 87999 }, links: { amazon: amz('AMD RX 7900 XTX'), flipkart: fk('AMD RX 7900 XTX') }, img: '🎨' },
    ],
  },
  studying: {
    budget: [
      { name: 'Integrated Graphics', specs: 'AMD Radeon / Intel UHD built into CPU — free', price: { amazon: 0, flipkart: 0 }, links: { amazon: amz('integrated graphics pc'), flipkart: fk('integrated graphics pc') }, img: '📺', best: true },
      { name: 'NVIDIA GT 1030 2GB', specs: '2GB GDDR5, 1228-1468MHz, 30W', price: { amazon: 5999, flipkart: 5499 }, links: { amazon: amz('NVIDIA GT 1030'), flipkart: fk('NVIDIA GT 1030') }, img: '📺' },
    ],
    mid: [
      { name: 'NVIDIA GTX 1650 4GB', specs: '4GB GDDR6, 1485-1665MHz, 75W', price: { amazon: 12999, flipkart: 12499 }, links: { amazon: amz('NVIDIA GTX 1650'), flipkart: fk('NVIDIA GTX 1650') }, img: '📺', best: true },
      { name: 'AMD RX 6500 XT 4GB', specs: '4GB GDDR6, 2610-2815MHz, 107W', price: { amazon: 11999, flipkart: 11499 }, links: { amazon: amz('AMD RX 6500 XT'), flipkart: fk('AMD RX 6500 XT') }, img: '📺' },
      { name: 'NVIDIA GTX 1660 6GB', specs: '6GB GDDR5, 1530-1785MHz, 120W', price: { amazon: 15999, flipkart: 15499 }, links: { amazon: amz('NVIDIA GTX 1660'), flipkart: fk('NVIDIA GTX 1660') }, img: '📺' },
    ],
    high: [
      { name: 'NVIDIA RTX 3060 12GB', specs: '12GB GDDR6, 1320-1777MHz, 170W', price: { amazon: 28999, flipkart: 27999 }, links: { amazon: amz('NVIDIA RTX 3060'), flipkart: fk('NVIDIA RTX 3060') }, img: '📺', best: true },
      { name: 'AMD RX 6600 8GB', specs: '8GB GDDR6, 1626-2491MHz, 132W', price: { amazon: 24999, flipkart: 24499 }, links: { amazon: amz('AMD RX 6600'), flipkart: fk('AMD RX 6600') }, img: '📺' },
    ],
  },
  office: {
    budget: [
      { name: 'Integrated Graphics', specs: 'AMD Radeon / Intel UHD built into CPU — free', price: { amazon: 0, flipkart: 0 }, links: { amazon: amz('integrated graphics pc'), flipkart: fk('integrated graphics pc') }, img: '💼', best: true },
      { name: 'NVIDIA GT 1030 2GB', specs: '2GB GDDR5, 1228-1468MHz, 30W', price: { amazon: 5999, flipkart: 5499 }, links: { amazon: amz('NVIDIA GT 1030'), flipkart: fk('NVIDIA GT 1030') }, img: '💼' },
    ],
    mid: [
      { name: 'NVIDIA GTX 1650 4GB', specs: '4GB GDDR6, 1485-1665MHz, 75W', price: { amazon: 12999, flipkart: 12499 }, links: { amazon: amz('NVIDIA GTX 1650'), flipkart: fk('NVIDIA GTX 1650') }, img: '💼', best: true },
      { name: 'AMD RX 6400 4GB', specs: '4GB GDDR6, 1923-2321MHz, 53W', price: { amazon: 9999, flipkart: 9499 }, links: { amazon: amz('AMD RX 6400'), flipkart: fk('AMD RX 6400') }, img: '💼' },
    ],
    high: [
      { name: 'NVIDIA RTX 3060 12GB', specs: '12GB GDDR6, 1320-1777MHz, 170W', price: { amazon: 28999, flipkart: 27999 }, links: { amazon: amz('NVIDIA RTX 3060'), flipkart: fk('NVIDIA RTX 3060') }, img: '💼', best: true },
      { name: 'AMD RX 6600 8GB', specs: '8GB GDDR6, 1626-2491MHz, 132W', price: { amazon: 24999, flipkart: 24499 }, links: { amazon: amz('AMD RX 6600'), flipkart: fk('AMD RX 6600') }, img: '💼' },
    ],
  },
}

export const ramData = {
  budget: [
    { name: 'Corsair Vengeance 16GB DDR4', specs: '16GB (2x8GB), DDR4-3200, CL16', price: { amazon: 3499, flipkart: 3299 }, links: { amazon: amz('Corsair Vengeance 16GB DDR4 3200'), flipkart: fk('Corsair Vengeance 16GB DDR4') }, img: '💾', best: true },
    { name: 'Kingston Fury Beast 16GB DDR4', specs: '16GB (2x8GB), DDR4-3200, CL16', price: { amazon: 3299, flipkart: 3099 }, links: { amazon: amz('Kingston Fury Beast 16GB DDR4'), flipkart: fk('Kingston Fury Beast 16GB DDR4') }, img: '💾' },
    { name: 'G.Skill Ripjaws V 16GB DDR4', specs: '16GB (2x8GB), DDR4-3600, CL18', price: { amazon: 3799, flipkart: 3599 }, links: { amazon: amz('G.Skill Ripjaws V 16GB DDR4'), flipkart: fk('G.Skill Ripjaws 16GB DDR4') }, img: '💾' },
  ],
  mid: [
    { name: 'G.Skill Trident Z5 32GB DDR5', specs: '32GB (2x16GB), DDR5-6000, CL36', price: { amazon: 8999, flipkart: 8499 }, links: { amazon: amz('G.Skill Trident Z5 32GB DDR5'), flipkart: fk('G.Skill Trident Z5 32GB DDR5') }, img: '💾', best: true },
    { name: 'Corsair Vengeance 32GB DDR5', specs: '32GB (2x16GB), DDR5-5600, CL36', price: { amazon: 8499, flipkart: 7999 }, links: { amazon: amz('Corsair Vengeance 32GB DDR5'), flipkart: fk('Corsair Vengeance 32GB DDR5') }, img: '💾' },
    { name: 'Kingston Fury Beast 32GB DDR5', specs: '32GB (2x16GB), DDR5-5200, CL40', price: { amazon: 7999, flipkart: 7499 }, links: { amazon: amz('Kingston Fury Beast 32GB DDR5'), flipkart: fk('Kingston Fury Beast 32GB DDR5') }, img: '💾' },
  ],
  high: [
    { name: 'G.Skill Trident Z5 64GB DDR5', specs: '64GB (2x32GB), DDR5-6400, CL32', price: { amazon: 18999, flipkart: 17999 }, links: { amazon: amz('G.Skill Trident Z5 64GB DDR5'), flipkart: fk('G.Skill Trident Z5 64GB DDR5') }, img: '💾', best: true },
    { name: 'Corsair Dominator 64GB DDR5', specs: '64GB (2x32GB), DDR5-6000, CL30', price: { amazon: 19999, flipkart: 18999 }, links: { amazon: amz('Corsair Dominator 64GB DDR5'), flipkart: fk('Corsair Dominator 64GB DDR5') }, img: '💾' },
  ],
}

export const storageData = {
  budget: [
    { name: 'Samsung 870 EVO 500GB SSD', specs: '500GB, SATA III, 560/530 MB/s', price: { amazon: 3999, flipkart: 3799 }, links: { amazon: amz('Samsung 870 EVO 500GB'), flipkart: fk('Samsung 870 EVO 500GB') }, img: '💿', best: true },
    { name: 'Seagate Barracuda 1TB HDD', specs: '1TB, 7200RPM, SATA III, 210MB/s', price: { amazon: 2999, flipkart: 2799 }, links: { amazon: amz('Seagate Barracuda 1TB'), flipkart: fk('Seagate Barracuda 1TB') }, img: '💿' },
    { name: 'WD Blue 500GB SSD', specs: '500GB, SATA III, 560/530 MB/s', price: { amazon: 3799, flipkart: 3599 }, links: { amazon: amz('WD Blue 500GB SSD'), flipkart: fk('WD Blue 500GB SSD') }, img: '💿' },
  ],
  mid: [
    { name: 'Samsung 980 Pro 1TB NVMe', specs: '1TB, PCIe 4.0, 7000/5000 MB/s', price: { amazon: 7999, flipkart: 7499 }, links: { amazon: amz('Samsung 980 Pro 1TB'), flipkart: fk('Samsung 980 Pro 1TB') }, img: '💿', best: true },
    { name: 'WD Black SN850X 1TB NVMe', specs: '1TB, PCIe 4.0, 7300/6600 MB/s', price: { amazon: 8499, flipkart: 7999 }, links: { amazon: amz('WD Black SN850X 1TB'), flipkart: fk('WD Black SN850X 1TB') }, img: '💿' },
    { name: 'Seagate FireCuda 530 1TB', specs: '1TB, PCIe 4.0, 7300/6900 MB/s', price: { amazon: 8999, flipkart: 8499 }, links: { amazon: amz('Seagate FireCuda 530 1TB'), flipkart: fk('Seagate FireCuda 530 1TB') }, img: '💿' },
  ],
  high: [
    { name: 'Samsung 990 Pro 2TB NVMe', specs: '2TB, PCIe 4.0, 7450/6900 MB/s', price: { amazon: 14999, flipkart: 13999 }, links: { amazon: amz('Samsung 990 Pro 2TB'), flipkart: fk('Samsung 990 Pro 2TB') }, img: '💿', best: true },
    { name: 'WD Black SN850X 2TB NVMe', specs: '2TB, PCIe 4.0, 7300/6600 MB/s', price: { amazon: 15999, flipkart: 14999 }, links: { amazon: amz('WD Black SN850X 2TB'), flipkart: fk('WD Black SN850X 2TB') }, img: '💿' },
  ],
}

export const motherboardData = {
  budget: [
    { name: 'MSI B550M PRO-VDH', specs: 'AM4, B550, Micro-ATX, DDR4, PCIe 4.0', price: { amazon: 7999, flipkart: 7499 }, links: { amazon: amz('MSI B550M PRO-VDH'), flipkart: fk('MSI B550M PRO-VDH') }, img: '🖥️', best: true },
    { name: 'ASUS PRIME B550M-A', specs: 'AM4, B550, Micro-ATX, DDR4, PCIe 4.0', price: { amazon: 8499, flipkart: 7999 }, links: { amazon: amz('ASUS PRIME B550M-A'), flipkart: fk('ASUS PRIME B550M-A') }, img: '🖥️' },
    { name: 'Gigabyte B550M DS3H', specs: 'AM4, B550, Micro-ATX, DDR4, PCIe 4.0', price: { amazon: 7499, flipkart: 6999 }, links: { amazon: amz('Gigabyte B550M DS3H'), flipkart: fk('Gigabyte B550M DS3H') }, img: '🖥️' },
  ],
  mid: [
    { name: 'ASUS ROG STRIX B650-A', specs: 'AM5, B650, ATX, DDR5, PCIe 5.0, WiFi 6E', price: { amazon: 19999, flipkart: 18999 }, links: { amazon: amz('ASUS ROG STRIX B650-A'), flipkart: fk('ASUS ROG STRIX B650-A') }, img: '🖥️', best: true },
    { name: 'MSI MAG B650 TOMAHAWK', specs: 'AM5, B650, ATX, DDR5, PCIe 5.0, 2.5G LAN', price: { amazon: 18999, flipkart: 17999 }, links: { amazon: amz('MSI MAG B650 TOMAHAWK'), flipkart: fk('MSI MAG B650 TOMAHAWK') }, img: '🖥️' },
    { name: 'Gigabyte B650 AORUS Elite', specs: 'AM5, B650, ATX, DDR5, PCIe 5.0, WiFi 6E', price: { amazon: 21999, flipkart: 20999 }, links: { amazon: amz('Gigabyte B650 AORUS Elite'), flipkart: fk('Gigabyte B650 AORUS Elite') }, img: '🖥️' },
  ],
  high: [
    { name: 'ASUS ROG MAXIMUS Z790', specs: 'LGA1700, Z790, ATX, DDR5, PCIe 5.0, Thunderbolt 4', price: { amazon: 44999, flipkart: 43999 }, links: { amazon: amz('ASUS ROG MAXIMUS Z790'), flipkart: fk('ASUS ROG MAXIMUS Z790') }, img: '🖥️', best: true },
    { name: 'MSI MEG Z790 ACE', specs: 'LGA1700, Z790, ATX, DDR5, PCIe 5.0, WiFi 6E', price: { amazon: 42999, flipkart: 41999 }, links: { amazon: amz('MSI MEG Z790 ACE'), flipkart: fk('MSI MEG Z790 ACE') }, img: '🖥️' },
  ],
}

export const psuData = {
  budget: [
    { name: 'Corsair CV550 550W', specs: '550W, 80+ Bronze, Non-Modular', price: { amazon: 3999, flipkart: 3799 }, links: { amazon: amz('Corsair CV550 550W'), flipkart: fk('Corsair CV550 550W') }, img: '⚡', best: true },
    { name: 'Cooler Master MWE 550W', specs: '550W, 80+ Bronze, Non-Modular', price: { amazon: 3799, flipkart: 3599 }, links: { amazon: amz('Cooler Master MWE 550W'), flipkart: fk('Cooler Master MWE 550W') }, img: '⚡' },
    { name: 'Antec NE 650W', specs: '650W, 80+ Bronze, Non-Modular', price: { amazon: 4499, flipkart: 4299 }, links: { amazon: amz('Antec NE 650W'), flipkart: fk('Antec NE 650W') }, img: '⚡' },
  ],
  mid: [
    { name: 'Seasonic Focus GX-750', specs: '750W, 80+ Gold, Fully Modular', price: { amazon: 8999, flipkart: 8499 }, links: { amazon: amz('Seasonic Focus GX-750'), flipkart: fk('Seasonic Focus GX-750') }, img: '⚡', best: true },
    { name: 'Corsair RM750x', specs: '750W, 80+ Gold, Fully Modular', price: { amazon: 9499, flipkart: 8999 }, links: { amazon: amz('Corsair RM750x'), flipkart: fk('Corsair RM750x') }, img: '⚡' },
    { name: 'EVGA SuperNOVA 750 G6', specs: '750W, 80+ Gold, Fully Modular', price: { amazon: 8499, flipkart: 7999 }, links: { amazon: amz('EVGA SuperNOVA 750 G6'), flipkart: fk('EVGA SuperNOVA 750 G6') }, img: '⚡' },
  ],
  high: [
    { name: 'Corsair HX1000 1000W', specs: '1000W, 80+ Platinum, Fully Modular', price: { amazon: 14999, flipkart: 13999 }, links: { amazon: amz('Corsair HX1000'), flipkart: fk('Corsair HX1000') }, img: '⚡', best: true },
    { name: 'Seasonic Prime TX-1000', specs: '1000W, 80+ Titanium, Fully Modular', price: { amazon: 17999, flipkart: 16999 }, links: { amazon: amz('Seasonic Prime TX-1000'), flipkart: fk('Seasonic Prime TX-1000') }, img: '⚡' },
  ],
}

export const caseData = {
  budget: [
    { name: 'Ant Esports ICE-100TG', specs: 'Mid-Tower, Tempered Glass, 3x120mm Fans', price: { amazon: 2999, flipkart: 2799 }, links: { amazon: amz('Ant Esports ICE-100TG'), flipkart: fk('Ant Esports ICE-100TG') }, img: '🗄️', best: true },
    { name: 'Cooler Master Q300L', specs: 'Micro-ATX, Magnetic Dust Filter, USB 3.0', price: { amazon: 3499, flipkart: 3299 }, links: { amazon: amz('Cooler Master Q300L'), flipkart: fk('Cooler Master Q300L') }, img: '🗄️' },
    { name: 'Deepcool MATREXX 30', specs: 'Micro-ATX, Tempered Glass, 1x120mm Fan', price: { amazon: 2799, flipkart: 2599 }, links: { amazon: amz('Deepcool MATREXX 30'), flipkart: fk('Deepcool MATREXX 30') }, img: '🗄️' },
  ],
  mid: [
    { name: 'NZXT H510 Flow', specs: 'Mid-Tower, Tempered Glass, 2x120mm Fans, USB-C', price: { amazon: 7999, flipkart: 7499 }, links: { amazon: amz('NZXT H510 Flow'), flipkart: fk('NZXT H510 Flow') }, img: '🗄️', best: true },
    { name: 'Fractal Design Pop Air', specs: 'Mid-Tower, Tempered Glass, 3x120mm Fans', price: { amazon: 7499, flipkart: 6999 }, links: { amazon: amz('Fractal Design Pop Air'), flipkart: fk('Fractal Design Pop Air') }, img: '🗄️' },
    { name: 'Cooler Master TD500 Mesh', specs: 'Mid-Tower, Mesh Front, 3x120mm ARGB Fans', price: { amazon: 8499, flipkart: 7999 }, links: { amazon: amz('Cooler Master TD500 Mesh'), flipkart: fk('Cooler Master TD500 Mesh') }, img: '🗄️' },
  ],
  high: [
    { name: 'Lian Li PC-O11 Dynamic EVO', specs: 'Mid-Tower, Dual Chamber, Tempered Glass, E-ATX', price: { amazon: 12999, flipkart: 11999 }, links: { amazon: amz('Lian Li O11 Dynamic EVO'), flipkart: fk('Lian Li O11 Dynamic EVO') }, img: '🗄️', best: true },
    { name: 'Fractal Design Torrent', specs: 'Mid-Tower, Open Mesh, 2x180mm + 3x140mm Fans', price: { amazon: 13999, flipkart: 12999 }, links: { amazon: amz('Fractal Design Torrent'), flipkart: fk('Fractal Design Torrent') }, img: '🗄️' },
  ],
}

export const monitorData = {
  budget: [
    { name: 'LG 24MP400 24" FHD', specs: '24", 1920x1080, IPS, 75Hz, 5ms, HDMI', price: { amazon: 8999, flipkart: 8499 }, links: { amazon: amz('LG 24MP400'), flipkart: fk('LG 24MP400') }, img: '🖥️', best: true },
    { name: 'AOC 24B2XH 24" FHD', specs: '24", 1920x1080, IPS, 75Hz, 4ms, HDMI+VGA', price: { amazon: 8499, flipkart: 7999 }, links: { amazon: amz('AOC 24B2XH'), flipkart: fk('AOC 24B2XH') }, img: '🖥️' },
    { name: 'BenQ GW2480 24" FHD', specs: '24", 1920x1080, IPS, 60Hz, 5ms, Eye-Care', price: { amazon: 9499, flipkart: 8999 }, links: { amazon: amz('BenQ GW2480'), flipkart: fk('BenQ GW2480') }, img: '🖥️' },
  ],
  mid: [
    { name: 'LG 27GP850-B 27" QHD', specs: '27", 2560x1440, Nano IPS, 165Hz, 1ms, G-Sync', price: { amazon: 24999, flipkart: 23999 }, links: { amazon: amz('LG 27GP850-B'), flipkart: fk('LG 27GP850-B') }, img: '🖥️', best: true },
    { name: 'Samsung Odyssey G5 27"', specs: '27", 2560x1440, VA, 165Hz, 1ms, FreeSync', price: { amazon: 22999, flipkart: 21999 }, links: { amazon: amz('Samsung Odyssey G5 27'), flipkart: fk('Samsung Odyssey G5 27') }, img: '🖥️' },
    { name: 'ASUS TUF Gaming VG27AQ', specs: '27", 2560x1440, IPS, 165Hz, 1ms, G-Sync', price: { amazon: 26999, flipkart: 25999 }, links: { amazon: amz('ASUS TUF VG27AQ'), flipkart: fk('ASUS TUF VG27AQ') }, img: '🖥️' },
  ],
  high: [
    { name: 'ASUS ROG Swift PG279QM', specs: '27", 2560x1440, IPS, 240Hz, 1ms, G-Sync Ultimate', price: { amazon: 54999, flipkart: 52999 }, links: { amazon: amz('ASUS ROG Swift PG279QM'), flipkart: fk('ASUS ROG Swift PG279QM') }, img: '🖥️', best: true },
    { name: 'LG 27GN950-B 27" 4K', specs: '27", 3840x2160, Nano IPS, 144Hz, 1ms, G-Sync', price: { amazon: 49999, flipkart: 47999 }, links: { amazon: amz('LG 27GN950-B'), flipkart: fk('LG 27GN950-B') }, img: '🖥️' },
  ],
}

export const peripheralsData = {
  budget: [
    { name: 'Logitech MK235 Combo', specs: 'Wireless Keyboard + Mouse, 2.4GHz, 24-month battery', price: { amazon: 1799, flipkart: 1699 }, links: { amazon: amz('Logitech MK235'), flipkart: fk('Logitech MK235') }, img: '⌨️', best: true },
    { name: 'HP CS10 Wired Combo', specs: 'Wired Keyboard + Mouse, USB, Spill-resistant', price: { amazon: 999, flipkart: 899 }, links: { amazon: amz('HP CS10 keyboard mouse combo'), flipkart: fk('HP CS10 keyboard mouse') }, img: '⌨️' },
    { name: 'Zebronics Zeb-Companion 107', specs: 'Wireless Keyboard + Mouse, 2.4GHz', price: { amazon: 1299, flipkart: 1199 }, links: { amazon: amz('Zebronics Zeb-Companion 107'), flipkart: fk('Zebronics Companion 107') }, img: '⌨️' },
  ],
  mid: [
    { name: 'Logitech G Pro X TKL + G502 Hero', specs: 'Mech Keyboard (GX Blue) + 25600 DPI Gaming Mouse', price: { amazon: 9999, flipkart: 9499 }, links: { amazon: amz('Logitech G Pro X TKL keyboard'), flipkart: fk('Logitech G Pro X TKL') }, img: '⌨️', best: true },
    { name: 'Keychron K2 + Logitech G305', specs: 'Wireless Mech Keyboard + Wireless Gaming Mouse', price: { amazon: 8999, flipkart: 8499 }, links: { amazon: amz('Keychron K2 keyboard'), flipkart: fk('Keychron K2') }, img: '⌨️' },
    { name: 'HyperX Alloy Origins + Pulsefire Haste', specs: 'Mech Keyboard (Red) + 16000 DPI Lightweight Mouse', price: { amazon: 8499, flipkart: 7999 }, links: { amazon: amz('HyperX Alloy Origins keyboard'), flipkart: fk('HyperX Alloy Origins') }, img: '⌨️' },
  ],
  high: [
    { name: 'Corsair K100 RGB + G Pro X Superlight', specs: 'Optical Mech Keyboard + 25600 DPI Wireless Mouse', price: { amazon: 19999, flipkart: 18999 }, links: { amazon: amz('Corsair K100 RGB keyboard'), flipkart: fk('Corsair K100 RGB') }, img: '⌨️', best: true },
    { name: 'Razer BlackWidow V4 + DeathAdder V3', specs: 'Mech Keyboard (Green) + 30000 DPI Gaming Mouse', price: { amazon: 17999, flipkart: 16999 }, links: { amazon: amz('Razer BlackWidow V4'), flipkart: fk('Razer BlackWidow V4') }, img: '⌨️' },
  ],
}

// ─── Laptop Database ──────────────────────────────────────────────────────────

export const laptopData = {
  gaming: {
    budget: [
      {
        name: 'ASUS TUF Gaming A15',
        specs: { cpu: 'AMD Ryzen 5 7535HS', ram: '16GB DDR5', gpu: 'NVIDIA RTX 4060 8GB', storage: '512GB NVMe SSD', display: '15.6" FHD 144Hz IPS' },
        price: { amazon: 69999, flipkart: 67999 },
        links: { amazon: amz('ASUS TUF Gaming A15 2024'), flipkart: fk('ASUS TUF Gaming A15 2024') },
        best: true,
      },
      {
        name: 'Lenovo IdeaPad Gaming 3',
        specs: { cpu: 'AMD Ryzen 5 6600H', ram: '16GB DDR5', gpu: 'NVIDIA RTX 3060 6GB', storage: '512GB NVMe SSD', display: '15.6" FHD 120Hz IPS' },
        price: { amazon: 64999, flipkart: 62999 },
        links: { amazon: amz('Lenovo IdeaPad Gaming 3 RTX 3060'), flipkart: fk('Lenovo IdeaPad Gaming 3 RTX 3060') },
      },
      {
        name: 'HP Victus 15 Gaming',
        specs: { cpu: 'AMD Ryzen 5 7535HS', ram: '16GB DDR5', gpu: 'NVIDIA RTX 4050 6GB', storage: '512GB NVMe SSD', display: '15.6" FHD 144Hz IPS' },
        price: { amazon: 62999, flipkart: 60999 },
        links: { amazon: amz('HP Victus 15 RTX 4050'), flipkart: fk('HP Victus 15 RTX 4050') },
      },
    ],
    mid: [
      {
        name: 'ASUS ROG Strix G16',
        specs: { cpu: 'Intel Core i7-13650HX', ram: '16GB DDR5', gpu: 'NVIDIA RTX 4070 8GB', storage: '1TB NVMe SSD', display: '16" QHD 240Hz IPS' },
        price: { amazon: 119999, flipkart: 114999 },
        links: { amazon: amz('ASUS ROG Strix G16 RTX 4070'), flipkart: fk('ASUS ROG Strix G16 RTX 4070') },
        best: true,
      },
      {
        name: 'MSI Raider GE68 HX',
        specs: { cpu: 'Intel Core i7-13700HX', ram: '32GB DDR5', gpu: 'NVIDIA RTX 4070 8GB', storage: '1TB NVMe SSD', display: '16" QHD 240Hz IPS' },
        price: { amazon: 124999, flipkart: 119999 },
        links: { amazon: amz('MSI Raider GE68 HX'), flipkart: fk('MSI Raider GE68 HX') },
      },
      {
        name: 'Lenovo Legion 5 Pro',
        specs: { cpu: 'AMD Ryzen 7 7745HX', ram: '16GB DDR5', gpu: 'NVIDIA RTX 4070 8GB', storage: '1TB NVMe SSD', display: '16" QHD 165Hz IPS' },
        price: { amazon: 114999, flipkart: 109999 },
        links: { amazon: amz('Lenovo Legion 5 Pro RTX 4070'), flipkart: fk('Lenovo Legion 5 Pro RTX 4070') },
      },
    ],
    high: [
      {
        name: 'ASUS ROG Zephyrus Duo 16',
        specs: { cpu: 'AMD Ryzen 9 7945HX', ram: '32GB DDR5', gpu: 'NVIDIA RTX 4090 16GB', storage: '2TB NVMe SSD', display: '16" QHD+ 240Hz Mini LED' },
        price: { amazon: 249999, flipkart: 239999 },
        links: { amazon: amz('ASUS ROG Zephyrus Duo 16 RTX 4090'), flipkart: fk('ASUS ROG Zephyrus Duo 16') },
        best: true,
      },
      {
        name: 'Razer Blade 16',
        specs: { cpu: 'Intel Core i9-13950HX', ram: '32GB DDR5', gpu: 'NVIDIA RTX 4090 16GB', storage: '2TB NVMe SSD', display: '16" UHD+ 240Hz Mini LED' },
        price: { amazon: 279999, flipkart: 269999 },
        links: { amazon: amz('Razer Blade 16 RTX 4090'), flipkart: fk('Razer Blade 16 RTX 4090') },
      },
    ],
  },
  editing: {
    budget: [
      {
        name: 'Apple MacBook Air M2',
        specs: { cpu: 'Apple M2 8-Core', ram: '8GB Unified', gpu: 'Apple M2 8-Core GPU', storage: '256GB SSD', display: '13.6" Liquid Retina 2560x1664' },
        price: { amazon: 89999, flipkart: 87999 },
        links: { amazon: amz('Apple MacBook Air M2 2022'), flipkart: fk('Apple MacBook Air M2') },
        best: true,
      },
      {
        name: 'Dell XPS 15 9530',
        specs: { cpu: 'Intel Core i7-13700H', ram: '16GB DDR5', gpu: 'NVIDIA RTX 4060 8GB', storage: '512GB SSD', display: '15.6" FHD+ OLED 60Hz' },
        price: { amazon: 149999, flipkart: 144999 },
        links: { amazon: amz('Dell XPS 15 9530 RTX 4060'), flipkart: fk('Dell XPS 15 9530') },
      },
    ],
    mid: [
      {
        name: 'Apple MacBook Pro 14" M3 Pro',
        specs: { cpu: 'Apple M3 Pro 11-Core', ram: '18GB Unified', gpu: 'Apple M3 Pro 14-Core GPU', storage: '512GB SSD', display: '14.2" Liquid Retina XDR 3024x1964' },
        price: { amazon: 169999, flipkart: 164999 },
        links: { amazon: amz('Apple MacBook Pro 14 M3 Pro'), flipkart: fk('Apple MacBook Pro 14 M3 Pro') },
        best: true,
      },
      {
        name: 'ASUS ProArt Studiobook 16',
        specs: { cpu: 'Intel Core i9-13980HX', ram: '32GB DDR5', gpu: 'NVIDIA RTX 4070 8GB', storage: '1TB SSD', display: '16" 3.2K OLED 120Hz' },
        price: { amazon: 179999, flipkart: 174999 },
        links: { amazon: amz('ASUS ProArt Studiobook 16 OLED'), flipkart: fk('ASUS ProArt Studiobook 16') },
      },
    ],
    high: [
      {
        name: 'Apple MacBook Pro 16" M3 Max',
        specs: { cpu: 'Apple M3 Max 16-Core', ram: '48GB Unified', gpu: 'Apple M3 Max 40-Core GPU', storage: '1TB SSD', display: '16.2" Liquid Retina XDR 3456x2234' },
        price: { amazon: 299999, flipkart: 289999 },
        links: { amazon: amz('Apple MacBook Pro 16 M3 Max'), flipkart: fk('Apple MacBook Pro 16 M3 Max') },
        best: true,
      },
      {
        name: 'Dell XPS 17 9730',
        specs: { cpu: 'Intel Core i9-13900H', ram: '32GB DDR5', gpu: 'NVIDIA RTX 4070 8GB', storage: '1TB SSD', display: '17" 4K+ OLED Touch' },
        price: { amazon: 249999, flipkart: 239999 },
        links: { amazon: amz('Dell XPS 17 9730 RTX 4070'), flipkart: fk('Dell XPS 17 9730') },
      },
    ],
  },
  office: {
    budget: [
      {
        name: 'HP 15s-eq3038AU',
        specs: { cpu: 'AMD Ryzen 5 5625U', ram: '8GB DDR4', gpu: 'AMD Radeon Integrated', storage: '512GB NVMe SSD', display: '15.6" FHD IPS Anti-glare' },
        price: { amazon: 39999, flipkart: 37999 },
        links: { amazon: amz('HP 15s Ryzen 5 5625U'), flipkart: fk('HP 15s Ryzen 5 5625U') },
        best: true,
      },
      {
        name: 'Acer Aspire 5 A515',
        specs: { cpu: 'AMD Ryzen 5 7530U', ram: '8GB DDR4', gpu: 'AMD Radeon Integrated', storage: '512GB NVMe SSD', display: '15.6" FHD IPS' },
        price: { amazon: 37999, flipkart: 35999 },
        links: { amazon: amz('Acer Aspire 5 Ryzen 5 7530U'), flipkart: fk('Acer Aspire 5 Ryzen 5 7530U') },
      },
      {
        name: 'Lenovo IdeaPad Slim 3',
        specs: { cpu: 'Intel Core i5-1235U', ram: '8GB DDR4', gpu: 'Intel Iris Xe', storage: '512GB NVMe SSD', display: '15.6" FHD IPS' },
        price: { amazon: 36999, flipkart: 34999 },
        links: { amazon: amz('Lenovo IdeaPad Slim 3 i5-1235U'), flipkart: fk('Lenovo IdeaPad Slim 3 i5-1235U') },
      },
    ],
    mid: [
      {
        name: 'Dell Inspiron 15 3530',
        specs: { cpu: 'Intel Core i5-1335U', ram: '16GB DDR4', gpu: 'Intel Iris Xe', storage: '512GB NVMe SSD', display: '15.6" FHD IPS 120Hz' },
        price: { amazon: 54999, flipkart: 52999 },
        links: { amazon: amz('Dell Inspiron 15 3530 i5-1335U'), flipkart: fk('Dell Inspiron 15 3530') },
        best: true,
      },
      {
        name: 'HP Pavilion 15-eg3006TU',
        specs: { cpu: 'Intel Core i5-1335U', ram: '16GB DDR4', gpu: 'Intel Iris Xe', storage: '512GB NVMe SSD', display: '15.6" FHD IPS 250 nits' },
        price: { amazon: 52999, flipkart: 50999 },
        links: { amazon: amz('HP Pavilion 15 i5-1335U'), flipkart: fk('HP Pavilion 15 i5-1335U') },
      },
    ],
    high: [
      {
        name: 'Lenovo ThinkPad X1 Carbon Gen 11',
        specs: { cpu: 'Intel Core i7-1365U', ram: '32GB LPDDR5', gpu: 'Intel Iris Xe', storage: '1TB NVMe SSD', display: '14" 2.8K OLED 120Hz' },
        price: { amazon: 149999, flipkart: 144999 },
        links: { amazon: amz('Lenovo ThinkPad X1 Carbon Gen 11'), flipkart: fk('Lenovo ThinkPad X1 Carbon Gen 11') },
        best: true,
      },
      {
        name: 'Dell Latitude 7440',
        specs: { cpu: 'Intel Core i7-1365U', ram: '16GB LPDDR5', gpu: 'Intel Iris Xe', storage: '512GB NVMe SSD', display: '14" FHD+ IPS Touch' },
        price: { amazon: 129999, flipkart: 124999 },
        links: { amazon: amz('Dell Latitude 7440 i7-1365U'), flipkart: fk('Dell Latitude 7440') },
      },
    ],
  },
  studying: {
    budget: [
      {
        name: 'Acer Aspire 5 A515',
        specs: { cpu: 'AMD Ryzen 5 7530U', ram: '8GB DDR4', gpu: 'AMD Radeon Integrated', storage: '512GB NVMe SSD', display: '15.6" FHD IPS' },
        price: { amazon: 34999, flipkart: 33999 },
        links: { amazon: amz('Acer Aspire 5 Ryzen 5 7530U'), flipkart: fk('Acer Aspire 5 Ryzen 5 7530U') },
        best: true,
      },
      {
        name: 'Lenovo IdeaPad Slim 3',
        specs: { cpu: 'Intel Core i3-1215U', ram: '8GB DDR4', gpu: 'Intel UHD', storage: '256GB NVMe SSD', display: '15.6" FHD IPS' },
        price: { amazon: 29999, flipkart: 28999 },
        links: { amazon: amz('Lenovo IdeaPad Slim 3 i3-1215U'), flipkart: fk('Lenovo IdeaPad Slim 3 i3-1215U') },
      },
      {
        name: 'HP 14s-dq5007TU',
        specs: { cpu: 'Intel Core i5-1235U', ram: '8GB DDR4', gpu: 'Intel Iris Xe', storage: '512GB NVMe SSD', display: '14" FHD IPS' },
        price: { amazon: 37999, flipkart: 35999 },
        links: { amazon: amz('HP 14s i5-1235U'), flipkart: fk('HP 14s i5-1235U') },
      },
    ],
    mid: [
      {
        name: 'HP Pavilion 15-eg3006TU',
        specs: { cpu: 'Intel Core i5-1335U', ram: '16GB DDR4', gpu: 'Intel Iris Xe', storage: '512GB NVMe SSD', display: '15.6" FHD IPS 250 nits' },
        price: { amazon: 54999, flipkart: 52999 },
        links: { amazon: amz('HP Pavilion 15 i5-1335U'), flipkart: fk('HP Pavilion 15 i5-1335U') },
        best: true,
      },
      {
        name: 'Dell Inspiron 14 5430',
        specs: { cpu: 'Intel Core i5-1340P', ram: '16GB LPDDR5', gpu: 'Intel Iris Xe', storage: '512GB NVMe SSD', display: '14" FHD+ IPS 120Hz' },
        price: { amazon: 57999, flipkart: 55999 },
        links: { amazon: amz('Dell Inspiron 14 5430 i5-1340P'), flipkart: fk('Dell Inspiron 14 5430') },
      },
    ],
    high: [
      {
        name: 'ASUS Zenbook 14 OLED',
        specs: { cpu: 'Intel Core i7-1360P', ram: '16GB LPDDR5', gpu: 'Intel Iris Xe', storage: '1TB NVMe SSD', display: '14" 2.8K OLED 90Hz' },
        price: { amazon: 79999, flipkart: 76999 },
        links: { amazon: amz('ASUS Zenbook 14 OLED i7-1360P'), flipkart: fk('ASUS Zenbook 14 OLED') },
        best: true,
      },
      {
        name: 'LG Gram 14 2023',
        specs: { cpu: 'Intel Core i7-1360P', ram: '16GB LPDDR5', gpu: 'Intel Iris Xe', storage: '512GB NVMe SSD', display: '14" WUXGA IPS 60Hz' },
        price: { amazon: 84999, flipkart: 81999 },
        links: { amazon: amz('LG Gram 14 2023 i7-1360P'), flipkart: fk('LG Gram 14 2023') },
      },
    ],
  },
}

// Helper: get budget tier from slider value (INR)
export function getBudgetTier(budget) {
  if (budget <= 50000) return 'budget'
  if (budget <= 120000) return 'mid'
  return 'high'
}

// Helper: get PC budget tier
export function getPCBudgetTier(budget) {
  if (budget <= 40000) return 'budget'
  if (budget <= 100000) return 'mid'
  return 'high'
}

// Helper: filter components by budget
export function filterComponentsByBudget(components, budget) {
  return components.filter(component => {
    const lowestPrice = Math.min(component.price.amazon, component.price.flipkart)
    // Allow components that are within reasonable price range for the budget
    // Using 40% of budget as max for any single component (except GPU which can be higher)
    return lowestPrice <= budget * 0.4 || lowestPrice === 0
  })
}

// Helper: filter GPU by budget (GPUs can take up to 50% of budget)
export function filterGPUByBudget(gpus, budget) {
  return gpus.filter(gpu => {
    const lowestPrice = Math.min(gpu.price.amazon, gpu.price.flipkart)
    return lowestPrice <= budget * 0.5 || lowestPrice === 0
  })
}
