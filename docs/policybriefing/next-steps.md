
<style>
/* ===== Policy Next Steps: refined layout ===== */

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

.policy-next,
.policy-next * {
  box-sizing: border-box;
}

/* ===== Hero ===== */

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

.policy-next .hero p {
  color: #dce8eb;
  font-size: 14px;
  line-height: 1.55;
  margin: 0;
}

/* ===== Three columns ===== */

.policy-next .steps {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 27px;
  padding: 30px 5px 32px;
}

.policy-next .step {
  min-width: 0;
}

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

.policy-next .step p {
  color: #25363b;
  font-size: 13.5px;
  line-height: 1.65;
  margin: 0;
}

/* ===== Government collaboration ===== */

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

.policy-next .contributions {
  font-size: 14px;
  line-height: 1.7;
  margin: 0 0 12px;
}

.policy-next .detail {
  color: #607077;
  font-size: 13px;
  line-height: 1.7;
  margin: 0;
}

/* ===== Closing question ===== */

.policy-next .closing {
  text-align: center;
  padding: 30px 12px 12px;
}

.policy-next .closing h2 {
  color: var(--ink);
  font-size: clamp(19px, 2vw, 24px);
  line-height: 1.4;
  font-weight: 750;
  margin: 0 0 22px;
}

/* ===== Contact button ===== */

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

.policy-next .contact-button:hover {
  background: #286073;
  transform: translateY(-1px);
}

.policy-next .mail-icon {
  display: block;
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  stroke: currentColor;
}

/* ===== Disclaimer ===== */

.policy-next .disclaimer {
  max-width: 760px;
  margin: 23px auto 0;
  color: #68757a;
  font-size: 11px;
  line-height: 1.65;
  text-align: center;
}

/* ===== Responsive layout ===== */

@media (max-width: 800px) {
  .policy-next .steps {
    gap: 18px;
  }

  .policy-next .step h2 {
    font-size: 17px;
  }

  .policy-next .step p {
    font-size: 12.5px;
  }
}

@media (max-width: 650px) {
  .policy-next {
    margin: 1rem auto;
  }

  .policy-next .hero {
    padding: 22px 20px;
  }

  .policy-next .hero h1 {
    font-size: 24px;
  }

  .policy-next .steps {
    grid-template-columns: 1fr;
    gap: 26px;
    padding: 28px 5px;
  }

  .policy-next .step-icon {
    margin-bottom: 9px;
  }

  .policy-next .step h2 {
    font-size: 18px;
  }

  .policy-next .step p {
    font-size: 14px;
  }

  .policy-next .collaboration h2 {
    font-size: 19px;
  }

  .policy-next .closing h2 {
    font-size: 20px;
  }

  .policy-next .contact-button {
    max-width: 100%;
    font-size: 12.5px;
    padding: 12px 15px;
  }
}
</style>

<div class="policy-next">

  <!-- HEADER -->

  <header class="hero">

    <div class="eyebrow">
      Next Steps · Opportunities for Collaboration
    </div>

    <h1>
      From Model Experiments to Real Welsh Policy
    </h1>

    <p>
      Turning regional economic mechanisms into
      testable policy options
    </p>

  </header>


  <!-- THREE STEPS -->

  <section class="steps">

    <!-- 1. REFINE -->

    <div class="step">

      <svg class="step-icon"
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           stroke-width="1.8"
           stroke-linecap="round"
           stroke-linejoin="round"
           aria-hidden="true">

        <path d="M4 7h16M4 12h16M4 17h16"/>
        <circle cx="9" cy="7" r="2" fill="white"/>
        <circle cx="16" cy="12" r="2" fill="white"/>
        <circle cx="11" cy="17" r="2" fill="white"/>

      </svg>

      <h2>1. Refine</h2>

      <p>
        Map a clearly defined policy instrument
        into the model. Specify the mechanism,
        affected firms, geographical coverage,
        timing and funding.
      </p>

    </div>


    <!-- 2. VALIDATE -->

    <div class="step">

      <svg class="step-icon"
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           stroke-width="1.8"
           stroke-linecap="round"
           stroke-linejoin="round"
           aria-hidden="true">

        <ellipse cx="12" cy="5" rx="8" ry="3"/>
        <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/>
        <path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"/>

      </svg>

      <h2>2. Validate</h2>

      <p>
        Compare assumptions with programme evidence,
        fiscal costs and regional data. Use objectives,
        take-up, implementation timelines and
        evaluation findings.
      </p>

    </div>


    <!-- 3. APPLY: CORRECT HANDSHAKE ICON -->

    <div class="step">

      <svg class="step-icon"
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           stroke-width="1.8"
           stroke-linecap="round"
           stroke-linejoin="round"
           aria-hidden="true">

        <path d="m2 12 3.5 3.5a2 2 0 0 0 2.8 0l.7-.7"/>
        <path d="m22 12-3.5 3.5a2 2 0 0 1-2.8 0l-4.6-4.6a2 2 0 0 0-2.8 0l-1.4 1.4a2 2 0 0 1-2.8-2.8l4.4-4.4a4 4 0 0 1 5.6 0l.9.9a4 4 0 0 0 5.6 0L22 5"/>
        <path d="m2 5 2 2"/>
        <path d="m22 5-2 2"/>
        <path d="m10 16 2 2a2 2 0 0 0 2.8 0l.7-.7"/>
        <path d="m13 13 3 3"/>

      </svg>

      <h2>3. Apply</h2>

      <p>
        Compare feasible policy scenarios under
        explicit assumptions. Report Welsh outcomes,
        UK outcomes, timing, sensitivity and
        limitations.
      </p>

    </div>

  </section>


  <!-- GOVERNMENT COLLABORATION -->

  <section class="collaboration">

    <h2>
      Where Welsh Government could contribute
    </h2>

    <p class="contributions">
      Policy priorities · Programme design and costing ·
      Regional data · Evaluation evidence
    </p>

    <p class="detail">
      A useful first step is to choose one concrete
      policy question, agree how the intervention
      should be represented in the model, and identify
      the evidence needed to assess its assumptions.
    </p>

  </section>


  <!-- CLOSING QUESTION -->

  <section class="closing">

    <h2>
      Which real Welsh policy question
      should we examine first?
    </h2>


    <!-- EMAIL BUTTON WITH ENVELOPE ICON -->

    <a
      href="mailto:Huangq24@cardiff.ac.uk?subject=Welsh%20Policy%20Research%20Collaboration"
      class="contact-button"
    >

      <svg class="mail-icon"
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           stroke-width="2"
           stroke-linecap="round"
           stroke-linejoin="round"
           aria-hidden="true">

        <rect x="2" y="4"
              width="20" height="16" rx="2"/>

        <path d="m22 7-10 6L2 7"/>

      </svg>

      <span>
        Discuss a Research Collaboration
      </span>

    </a>


    <!-- RESEARCH DISCLAIMER -->

    <p class="disclaimer">
      Independent academic research.
      Model-based scenarios are preliminary and
      should not be interpreted as official forecasts
      or validated policy impact estimates.
    </p>

  </section>

</div>
