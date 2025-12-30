# Regional DSGE Model: Structure and Foundations

This section documents the structural foundations of the three-region DSGE model
used to analyse regional dynamics in the United Kingdom, with particular emphasis
on Wales.

The objective of the model is not narrative persuasion or reduced-form explanation.
Instead, regional outcomes are analysed through a fully specified structural framework,
in which behaviour, constraints, and equilibrium conditions are jointly determined.

---

## Purpose and Methodological Positioning

Understanding the regional economy does not require persuasive narratives or ad-hoc explanations.
It requires a structural framework.

Regional economies are analysed through a structural DSGE framework, built on internally
consistent behavioural relationships and equilibrium conditions. The framework is evaluated
against three stringent criteria.

### 1. Existence and stability of equilibrium

The model must admit a well-defined equilibrium, either unique or locally stable.
This ensures that economic trade-offs are coherent and internally consistent, and that
policy experiments are conducted within a well-defined economic environment.

### 2. Likelihood consistency and parameter plausibility

The implied data-generating process must not be statistically rejected by observed
macroeconomic evidence. Estimated structural parameters are required to lie within
economically meaningful and empirically plausible ranges.

Bayesian estimation is employed as a statistical device to assess likelihood consistency
and parameter plausibility, rather than as a standalone validation criterion.

### 3. Empirical credibility via indirect inference

Model-generated dynamics are evaluated against observed data using indirect inference.
The purpose is not prediction, but to test whether the simulated economy reproduces
key dynamic features of the regional data.

---

## Model Overview

The model is a dynamic stochastic general equilibrium framework with three regions:

- North of the United Kingdom  
- South of the United Kingdom  
- Wales  

Each region is structurally similar but may differ in initial conditions, productivity
processes, and policy transmission mechanisms. National aggregates are constructed as
weighted combinations of regional outcomes.

---

## Notation and Indexing

Regions are indexed as follows:

$$
i \in \{N, S, W\}.
$$

Time is discrete and indexed by

$$
t.
$$

Expectations conditional on information available at time \(t\) are denoted by

$$
E_t.
$$

---

## Households

Each region is populated by a representative household.

### Household Environment

A representative household is defined in region

$$
i.
$$

The household chooses sequences of consumption, investment, capital, housing, labour,
innovation time, and asset holdings given by

$$
\{ C_{i,t}, I_{i,t}, K_{i,t+1}, H_{i,t}, N_{i,t}, x_{i,t},
b_{i,t+1}, b^f_{i,t+1} \}_{t=0}^{\infty}.
$$

### Preferences

The household maximises expected lifetime utility

$$
\max E_0 \sum_{t=0}^{\infty} \beta^t \varepsilon^r_{i,t}
\left[
\frac{C_{i,t}^{1-\rho_1}}{1-\rho_1}
+ \varepsilon^h_{i,t} \frac{H_{i,t}^{1-\rho_h}}{1-\rho_h}
+ \varepsilon^l_{i,t} \frac{x_{i,t}^{1-\rho_2}}{1-\rho_2}
\right].
$$

Preferences allow for region-specific shocks to consumption, housing services,
and innovation effort.

### Budget Constraint

Household choices are subject to the budget constraint

$$
C_{i,t}
+ p^h_{i,t}\bigl(H_{i,t}-(1-\delta_h)H_{i,t-1}\bigr)
+ I_{i,t}
+ b_{i,t+1}
+ Q_t b^f_{i,t+1}
=
A_{i,t} K_{i,t}^{\alpha_k} N_{i,t}^{1-\alpha_k}
+ (1+r_t)b_{i,t}
+ Q_t(1+r_t^f)b^f_{i,t}
- T_t.
$$

### Capital Accumulation

Physical capital evolves according to

$$
K_{i,t+1} = (1-\delta_k)K_{i,t} + I_{i,t}.
$$

### Time Allocation

Household time is allocated across labour, innovation activity, and residual time:

$$
N_{i,t} + x_{i,t} + z_{i,t} = 1.
$$

---

## Optimality Conditions

### Consumption

The intertemporal consumption decision satisfies

$$
\varepsilon^r_{i,t} C_{i,t}^{-\rho_1}
= \beta (1+r_t)
E_t \left[
\varepsilon^r_{i,t+1} C_{i,t+1}^{-\rho_1}
\right].
$$

### Capital

The optimal accumulation of capital is governed by

$$
\varepsilon^r_{i,t} C_{i,t}^{-\rho_1}
= \beta E_t \left[
\varepsilon^r_{i,t+1} C_{i,t+1}^{-\rho_1}
\left(1-\delta_k + r^k_{i,t+1}\right)
\right].
$$

### Housing

Housing demand satisfies

$$
\varepsilon^h_{i,t} H_{i,t}^{-\rho_h}
= p^h_{i,t} \varepsilon^r_{i,t} C_{i,t}^{-\rho_1}
- \beta E_t \left[
p^h_{i,t+1}(1-\delta_h)
\varepsilon^r_{i,t+1} C_{i,t+1}^{-\rho_1}
\right].
$$

### Labour and Innovation Time

Labour supply and innovation effort satisfy

$$
\varepsilon^l_{i,t} x_{i,t}^{-\rho_2}
= \frac{w_{i,t}}{p_{i,t}}
\varepsilon^r_{i,t} C_{i,t}^{-\rho_1}
(1-\tau^L_t).
$$

---

## Firms

Final output in region

$$
i
$$

is produced using capital and labour according to

$$
Y_{i,t} = A_{i,t} K_{i,t}^{\alpha_k} N_{i,t}^{1-\alpha_k}.
$$

Firms operate under perfect competition and maximise profits

$$
\Pi_{i,t}
= (1-\tau^F)p_t Y_{i,t}
- w_{i,t}N_{i,t}
- r^k_{i,t}K_{i,t}.
$$

Factor prices satisfy

$$
w_{i,t}
= (1-\alpha_k)p_t A_{i,t}K_{i,t}^{\alpha_k}N_{i,t}^{-\alpha_k},
$$

$$
r^k_{i,t}
= \alpha_k p_t A_{i,t}K_{i,t}^{\alpha_k-1}N_{i,t}^{1-\alpha_k}.
$$

Productivity evolves according to

$$
\log A_{i,t+1}
= (1-\rho_A)\log \bar A_i
+ \rho_A \log A_{i,t}
+ \theta z_{i,t}
+ \varepsilon^A_{i,t}.
$$

---

## Government and Aggregation

The government budget constraint is given by

$$
G_t + (1+r_{t-1})b_t = R_t + b_{t+1}.
$$

Government revenues satisfy

$$
R_t
= \tau^L_t w_{i,t}N_{i,t}
+ \tau^F p_t Y_{i,t}
+ \Lambda_t.
$$

Aggregate quantities are constructed as

$$
Y_t = \sum_i Y_{i,t}, \qquad
C_t = \sum_i C_{i,t}, \qquad
K_t = \sum_i K_{i,t}.
$$

Goods market clearing requires

$$
Y_t = C_t + I_t + G_t + (EX_t - IM_t).
$$

---

## Exogenous Processes

All exogenous shocks follow stationary AR(1) processes.
