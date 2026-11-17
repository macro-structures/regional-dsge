
window.MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)'], ['$', '$']],
    displayMath: [['\\[', '\\]'], ['$$', '$$']],
    processEscapes: true,
    packages: {'[+]': ['boldsymbol']}
  },
  loader: {
    load: ['[tex]/boldsymbol']
  },
  options: {
    ignoreHtmlClass: '.*',
    processHtmlClass: 'arithmatex'
  }
};

document$.subscribe(() => {
  MathJax.typesetPromise();
});
