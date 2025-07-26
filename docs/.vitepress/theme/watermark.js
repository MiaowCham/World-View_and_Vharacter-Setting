/**
 * 动态生成网格水印
 */

function createWatermarkGrid() {
  const watermarkContainer = document.querySelector('.watermark');
  if (!watermarkContainer) return;

  // 清空现有内容
  watermarkContainer.innerHTML = '';

  // 水印文字内容
  const watermarkTexts = [
    '喵锵 MiaowCham',
    'Copyright © 2025 MiaowCham'
  ];

  // 计算网格参数
  const gridSpacing = 300; // 网格间距
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const cols = Math.ceil(viewportWidth / gridSpacing) + 2;
  const rows = Math.ceil(viewportHeight / gridSpacing) + 2;

  // 生成网格水印
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const watermarkItem = document.createElement('div');
      watermarkItem.className = 'watermark-item';
      
      // 交替使用两种文字内容
      const textIndex = (row + col) % 2;
      watermarkItem.textContent = watermarkTexts[textIndex];
      
      // 设置位置
      const x = col * gridSpacing - gridSpacing / 2;
      const y = row * gridSpacing - gridSpacing / 2;
      
      watermarkItem.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        transform: rotate(-45deg);
        font-size: ${textIndex === 0 ? '1.4rem' : '1.2rem'};
        font-weight: bold;
        color: var(--watermark-color, rgba(0, 0, 0, 0.03));
        white-space: nowrap;
        user-select: none;
        pointer-events: none;
        opacity: ${textIndex === 0 ? '0.8' : '0.6'};
      `;
      
      watermarkContainer.appendChild(watermarkItem);
    }
  }
}

// 设置CSS变量用于深色模式
function updateWatermarkColor() {
  const isDark = document.documentElement.classList.contains('dark');
  const color = isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)';
  document.documentElement.style.setProperty('--watermark-color', color);
}

// 初始化水印
function initWatermark() {
  updateWatermarkColor();
  createWatermarkGrid();
}

// 监听窗口大小变化
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(createWatermarkGrid, 300);
});

// 监听主题变化
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
      updateWatermarkColor();
    }
  });
});

observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['class']
});

// 导出函数
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initWatermark, createWatermarkGrid, updateWatermarkColor };
} else if (typeof window !== 'undefined') {
  window.WatermarkUtils = { initWatermark, createWatermarkGrid, updateWatermarkColor };
}

// 页面加载完成后初始化
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWatermark);
  } else {
    initWatermark();
  }
}