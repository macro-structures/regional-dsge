
<style>
.policy-next {
  --teal: #193b49;
  --mint: #b8dcd9;
  --ink: #17272c;
  color: var(--ink);
  max-width: 1100px;
  margin: 1.5rem auto;
  font-family: inherit;
}

.policy-next * {
  box-sizing: border-box;
}

.policy-next .hero {
  background: linear-gradient(120deg, #203e4c, #113744);
  color: white;
  padding: 2rem 2.2rem;
  border-radius: 16px;
}

.policy-next .eyebrow {
  color: var(--mint);
  font-size: .85rem;
  font-weight: 600;
  letter-spacing: .09em;
  text-transform: uppercase;
}

.policy-next .hero h1 {
  color: white;
  font-size: clamp(1.6rem, 3vw, 2.5rem);
  line-height: 1.2;
  margin: .6rem 0;
  font-weight: 750;
}

.policy-next .hero p {
  color: #dce8eb;
  font-size: 1.05rem;
  margin: 0;
}

.policy-next .steps {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  padding: 2.5rem .4rem;
}

.policy-next .step-icon {
  width: 38px;
  height: 38px;
  margin-bottom: 1rem;
  color: var(--teal);
}

.policy-next .step h2 {
  font-size: 1.4rem;
  font-weight: 750;
  margin: 0 0 .8rem;
  color: var(--ink);
}

.policy-next .step p {
  font-size: .97rem;
  line-height: 1.7;
  margin: 0;
}

.policy-next .collaboration {
  border-top: 1px solid #d9e0e1;
  padding: 2rem .5rem 1.5rem;
}

.policy-next .collaboration h2 {
  font-size: 1.45rem;
  font-weight: 750;
  color: var(--ink);
  margin: 0 0 .8rem;
}

.policy-next .contributions {
  font-size: 1rem;
  line-height: 1.8;
  margin: 0 0 .8rem;
}

.policy-next .detail {
  color: #607077;
  font-size: .94rem;
  line-height: 1.7;
}

.policy-next .closing {
  text-align: center;
  padding: 1.8rem 1rem 1rem;
}

.policy-next .closing h2 {
  color: var(--ink);
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  line-height: 1.35;
  font-weight: 800;
  margin: 0 0 1.3rem;
}

.policy-next .contact-button {
  display: inline-block;
  padding: .8rem 1.6rem;
  background: var(--teal);
  color: white !important;
  border-radius: 9px;
  font-weight: 600;
  text-decoration: none !important;
}

.policy-next .contact-button:hover {
  background: #286073;
}

.policy-next .disclaimer {
  margin-top: 1.8rem;
  font-size: .78rem;
  line-height: 1.6;
  color: #68757a;
  text-align: center;
}

@media (max-width: 750px) {
  .policy-next .hero {
    padding: 1.5rem;
  }

  .policy-next .steps {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem .3rem;
  }

  .policy-next .step-icon {
    margin-bottom: .5rem;
  }
}
</style>

<div class="policy-next">

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

  <section class="steps">

    <div class="step">
      <svg class="step-icon" viewBox="0 0 24 24"
           fill="none" stroke="currentColor"
           stroke-width="1.7"
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
        Map a clearly defined policy instrument into
        the model. Specify the mechanism, affected firms,
        geographical coverage, timing and funding.
      </p>
    </div>

    <div class="step">
      <svg class="step-icon" viewBox="0 0 24 24"
           fill="none" stroke="currentColor"
           stroke-width="1.7"
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

    <div class="step">
      <svg class="step-icon" viewBox="0 0 24 24"
           fill="none" stroke="currentColor"
           stroke-width="1.7"
           stroke-linecap="round"
           stroke-linejoin="round"
           aria-hidden="true">
        <path d="M2 9l5-5 5 2 5-2 5 5-4 9-4 2-3-3"/>
        <path d="M7 13l5-5 5 5"/>
        <path d="M9 15l4 4M12 12l5 5"/>
      </svg>

      <h2>3. Apply</h2>

      <p>
        Compare feasible policy scenarios under explicit
        assumptions. Report Welsh outcomes, UK outcomes,
        timing, sensitivity and limitations.
      </p>
    </div>

  </section>

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
      policy question, agree how the intervention should
      be represented in the model, and identify the
      evidence needed to assess its assumptions.
    </p>

  </section>

  <section class="closing">

    <h2>
      Which real Welsh policy question
      should we examine first?
    </h2>

    
    <a
      href="mailto:Huangq24@cardiff.ac.uk?subject=Welsh%20Policy%20Research%20Collaboration"
      class="contact-button"
    >
      Discuss a Research Collaboration
    </a>


    <p class="disclaimer">
      Independent academic research.
      Model-based scenarios are preliminary and
      should not be interpreted as official forecasts
      or validated policy impact estimates.
    </p>

  </section>

</div>
