(function () {
  function parsePath(pathname) {
    const clean = pathname.replace(/\/+/g, '/');
    const parts = clean.split('/').filter(Boolean);
    let currentLang = 'en';
    if (parts[0] === 'zh' || parts[0] === 'cy') {
      currentLang = parts.shift();
    }
    return { currentLang, slug: parts.join('/') };
  }

  function buildHref(targetLang) {
    const { slug } = parsePath(window.location.pathname);

    // If current path is a standalone HTML file, send users to the translated landing page.
    if (slug.endsWith('.html')) {
      return targetLang === 'en' ? '/policy/' : `/${targetLang}/policy/`;
    }

    if (!slug) {
      return targetLang === 'en' ? '/' : `/${targetLang}/`;
    }

    return targetLang === 'en' ? `/${slug}/` : `/${targetLang}/${slug}/`;
  }

  function labelFor(lang) {
    if (lang === 'cy') return 'Cymraeg';
    if (lang === 'zh') return '简体中文';
    return 'English';
  }

  function createSwitcher() {
    const { currentLang } = parsePath(window.location.pathname);

    const wrapper = document.createElement('div');
    wrapper.className = 'lang-quick-switch';

    wrapper.innerHTML = `
      <button class="lang-quick-trigger" type="button" aria-expanded="false" aria-controls="lang-quick-panel">
        <span class="lang-quick-trigger__title">Language / Iaith / 语言</span>
        <span class="lang-quick-trigger__current">${labelFor(currentLang)}</span>
      </button>

      <div id="lang-quick-panel" class="lang-quick-panel" hidden>
        <div class="lang-quick-panel__header">
          <strong>Choose your language</strong>
          <button class="lang-quick-close" type="button" aria-label="Close language menu">×</button>
        </div>
        <p class="lang-quick-panel__hint">Dewiswch eich iaith / 选择你的语言</p>
        <div class="lang-quick-grid">
          <a class="lang-card ${currentLang === 'en' ? 'is-active' : ''}" href="${buildHref('en')}">
            <span class="lang-card__code">EN</span>
            <span class="lang-card__name">English</span>
          </a>
          <a class="lang-card ${currentLang === 'cy' ? 'is-active' : ''}" href="${buildHref('cy')}">
            <span class="lang-card__code">CY</span>
            <span class="lang-card__name">Cymraeg</span>
          </a>
          <a class="lang-card ${currentLang === 'zh' ? 'is-active' : ''}" href="${buildHref('zh')}">
            <span class="lang-card__code">中</span>
            <span class="lang-card__name">简体中文</span>
          </a>
        </div>
      </div>
    `;

    document.body.appendChild(wrapper);

    const trigger = wrapper.querySelector('.lang-quick-trigger');
    const panel = wrapper.querySelector('.lang-quick-panel');
    const closeBtn = wrapper.querySelector('.lang-quick-close');

    function openPanel() {
      wrapper.classList.add('is-open');
      panel.hidden = false;
      trigger.setAttribute('aria-expanded', 'true');
    }

    function closePanel() {
      wrapper.classList.remove('is-open');
      panel.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
    }

    trigger.addEventListener('click', function () {
      if (wrapper.classList.contains('is-open')) {
        closePanel();
      } else {
        openPanel();
        localStorage.setItem('hq_lang_switch_seen', '1');
      }
    });

    closeBtn.addEventListener('click', function () {
      closePanel();
      localStorage.setItem('hq_lang_switch_seen', '1');
    });

    document.addEventListener('click', function (event) {
      if (!wrapper.contains(event.target)) closePanel();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closePanel();
    });

    // Auto-open once for first-time visitors.
    if (!localStorage.getItem('hq_lang_switch_seen')) {
      openPanel();
      localStorage.setItem('hq_lang_switch_seen', '1');
    }
  }

  document.addEventListener('DOMContentLoaded', createSwitcher);
})();
