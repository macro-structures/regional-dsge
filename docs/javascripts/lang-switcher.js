(function () {
  "use strict";
  function currentPage() {
    var parts = window.location.pathname.split('/').filter(Boolean);
    var language = (parts[0] === 'zh' || parts[0] === 'cy') ? parts.shift() : 'en';
    return { language: language, page: parts.join('/') };
  }
  function hrefFor(lang) {
    var page = currentPage().page;
    // The Policy Studio is a standalone HTML application, not a translated Markdown page.
    if (/\.html$/i.test(page)) page = 'policy';
    var suffix = page ? page.replace(/\/$/, '') + '/' : '';
    return '/' + (lang === 'en' ? '' : lang + '/') + suffix;
  }
  function init() {
    if (document.getElementById('hq-lang-switch')) return;
    var header = document.querySelector('.md-header__inner');
    if (!header) return;
    var lang = currentPage().language;
    var root = document.createElement('div');
    root.id = 'hq-lang-switch';
    root.className = 'hq-lang-switch';
    var trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'hq-lang-trigger';
    trigger.textContent = 'EN · CY · 中文 ▾';
    trigger.setAttribute('aria-label', 'Choose language / Dewis iaith / 选择语言');
    trigger.setAttribute('aria-haspopup', 'true');
    trigger.setAttribute('aria-expanded', 'false');
    var menu = document.createElement('nav');
    menu.className = 'hq-lang-menu';
    menu.setAttribute('aria-label', 'Site language');
    menu.hidden = true;
    [['en','EN','English'],['cy','CY','Cymraeg'],['zh','中','简体中文']].forEach(function (item) {
      var a = document.createElement('a');
      a.href = hrefFor(item[0]);
      var code = document.createElement('span');
      code.className = 'hq-lang-code';
      code.textContent = item[1];
      var name = document.createElement('span');
      name.textContent = item[2];
      a.appendChild(code);
      a.appendChild(name);
      if (item[0] === lang) a.setAttribute('aria-current', 'page');
      menu.appendChild(a);
    });
    function close() { menu.hidden = true; trigger.setAttribute('aria-expanded','false'); }
    trigger.addEventListener('click', function (event) {
      event.stopPropagation();
      menu.hidden = !menu.hidden;
      trigger.setAttribute('aria-expanded',String(!menu.hidden));
    });
    document.addEventListener('click', function (event) { if (!root.contains(event.target)) close(); });
    document.addEventListener('keydown', function (event) { if (event.key === 'Escape') close(); });
    root.appendChild(trigger);
    root.appendChild(menu);
    header.appendChild(root);
    document.documentElement.classList.add('hq-lang-ready');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
