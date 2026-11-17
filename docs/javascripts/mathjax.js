window.MathJax = {
  tex: {
    inlineMath: [],        // ❗ 直接禁用 inline math
    displayMath: [['$$','$$']],
    processEscapes: false
  },
  options: {
    skipHtmlTags: ['script','noscript','style','textarea','pre']
  }
};



window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true
  },
  options: { ignoreHtmlClass: '.*', processHtmlClass: 'arithmatex' }
};

document$.subscribe(() => { MathJax.typesetPromise(); });
