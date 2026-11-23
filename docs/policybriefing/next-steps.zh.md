<style>
.policy-next {
  --teal: #193b49;
  --mint: #b8dcd9;
  --ink: #17272c;
  color: var(--ink);
  max-width: 1050px;
  margin: 1.2rem auto 2rem;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.55;
}
.policy-next, .policy-next * { box-sizing: border-box; }
.policy-next .hero {
  background: linear-gradient(120deg, #203e4c, #113744);
  color: #fff;
  padding: 1.5rem 1.8rem;
  border-radius: 13px;
}
.policy-next .eyebrow {
  color: var(--mint);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .075em;
  text-transform: uppercase;
  line-height: 1.5;
}
.policy-next .hero h1 {
  color: #fff;
  font-size: clamp(23px, 2.6vw, 32px);
  line-height: 1.22;
  margin: 9px 0 7px;
  font-weight: 750;
  letter-spacing: -.025em;
}
.policy-next .hero p { color: #dce8eb; font-size: 14px; line-height: 1.55; margin: 0; }
.policy-next .steps {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 27px;
  padding: 30px 5px 32px;
}
.policy-next .step { min-width: 0; }
.policy-next .step-icon {
  display: block;
  width: 30px;
  height: 30px;
  margin: 0 0 13px;
  color: var(--teal);
}
.policy-next .step h2 {
  color: var(--ink);
  font-size: 19px;
  font-weight: 750;
  line-height: 1.3;
  margin: 0 0 11px;
}
.policy-next .step p { color: #25363b; font-size: 13.5px; line-height: 1.65; margin: 0; }
.policy-next .collaboration {
  border-top: 1px solid #d9e0e1;
  padding: 25px 5px 14px;
}
.policy-next .collaboration h2 {
  color: var(--ink);
  font-size: 20px;
  font-weight: 750;
  line-height: 1.35;
  margin: 0 0 12px;
}
.policy-next .contributions { font-size: 14px; line-height: 1.7; margin: 0 0 12px; }
.policy-next .detail { color: #607077; font-size: 13px; line-height: 1.7; margin: 0; }
.policy-next .closing { text-align: center; padding: 30px 12px 12px; }
.policy-next .closing h2 {
  color: var(--ink);
  font-size: clamp(19px, 2vw, 24px);
  line-height: 1.4;
  font-weight: 750;
  margin: 0 0 22px;
}
.policy-next .contact-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: var(--teal);
  color: #fff !important;
  padding: 11px 21px;
  border-radius: 9px;
  font-size: 13.5px;
  font-weight: 650;
  line-height: 1.4;
  text-decoration: none !important;
  transition: background .2s ease, transform .2s ease;
}
.policy-next .contact-button:hover { background: #286073; transform: translateY(-1px); }
.policy-next .mail-icon {
  display: block;
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  stroke: currentColor;
}
.policy-next .disclaimer {
  max-width: 760px;
  margin: 23px auto 0;
  color: #68757a;
  font-size: 11px;
  line-height: 1.65;
  text-align: center;
}
@media (max-width: 800px) {
  .policy-next .steps { gap: 18px; }
  .policy-next .step h2 { font-size: 17px; }
  .policy-next .step p { font-size: 12.5px; }
}
@media (max-width: 650px) {
  .policy-next { margin: 1rem auto; }
  .policy-next .hero { padding: 22px 20px; }
  .policy-next .hero h1 { font-size: 24px; }
  .policy-next .steps { grid-template-columns: 1fr; gap: 26px; padding: 28px 5px; }
  .policy-next .step-icon { margin-bottom: 9px; }
  .policy-next .step h2 { font-size: 18px; }
  .policy-next .step p { font-size: 14px; }
  .policy-next .collaboration h2 { font-size: 19px; }
  .policy-next .closing h2 { font-size: 20px; }
  .policy-next .contact-button { max-width: 100%; font-size: 12.5px; padding: 12px 15px; }
}
</style>

<div class="policy-next" lang="zh-Hans">
  <header class="hero">
    <div class="eyebrow">下一步 · 合作机会</div>
    <h1>从模型实验走向威尔士真实政策</h1>
    <p>将区域经济传导机制转化为可检验的政策方案</p>
  </header>

  <section class="steps">
    <div class="step">
      <svg class="step-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M4 7h16M4 12h16M4 17h16"/>
  <circle cx="9" cy="7" r="2" fill="white"/>
  <circle cx="16" cy="12" r="2" fill="white"/>
  <circle cx="11" cy="17" r="2" fill="white"/>
</svg>
      <h2>1. 细化</h2>
      <p>将一项明确的政策工具映射到模型中，说明其作用机制、影响对象、地域覆盖、实施时间及资金来源。</p>
    </div>
    <div class="step">
      <svg class="step-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <ellipse cx="12" cy="5" rx="8" ry="3"/>
  <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/>
  <path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"/>
</svg>
      <h2>2. 验证</h2>
      <p>结合政策项目证据、财政成本与区域数据检验模型假设，包括项目目标、参与情况、实施进度及评估结果。</p>
    </div>
    <div class="step">
      <svg class="step-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="m11 17 2 2a1 1 0 1 0 3-3"/>
  <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/>
  <path d="m21 3 1 11h-2"/>
  <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/>
  <path d="M3 4h8"/>
</svg>
      <h2>3. 应用</h2>
      <p>在明确假设的前提下比较可行的政策情景，报告威尔士和英国整体的经济效应、时间路径、敏感性及局限性。</p>
    </div>
  </section>

  <section class="collaboration">
    <h2>威尔士政府可以如何参与</h2>
    <p class="contributions">政策优先事项 · 项目设计与成本核算 · 区域数据 · 政策评估证据</p>
    <p class="detail">可以先选定一个具体政策问题，共同明确如何在模型中表示该项干预，并确定检验模型假设所需的证据。</p>
  </section>

  <section class="closing">
    <h2>我们应该首先研究哪一个具体的威尔士政策问题？</h2>
    <a href="mailto:Huangq24@cardiff.ac.uk?subject=Welsh%20Policy%20Research%20Collaboration" class="contact-button">
      <svg class="mail-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <rect x="2" y="4" width="20" height="16" rx="2"/>
  <path d="m22 7-10 6L2 7"/>
</svg>
      <span>探讨研究合作</span>
    </a>
    <p class="disclaimer">独立学术研究。模型政策情景仍处于初步探索阶段，不应被视为官方预测或经过验证的政策影响估计。</p>
  </section>
</div>
