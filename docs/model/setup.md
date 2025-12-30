# Appendix A. Model

This appendix presents the full set of equilibrium conditions of the model.
Time is discrete. Households and firms are forward-looking and take prices as given.

---

## Notation

Subscript \( i \) indexes regions (\( i \in \{N,S,W\} \)), and \( t \) denotes time.
Lowercase letters denote real quantities.
Expectations conditional on information available at time \( t \) are denoted by \( E_t \).

---

## A.1 Households

A representative household in region \( i \) chooses sequences

$$
\{ C_{i,t}, I_{i,t}, K_{i,t+1}, H_{i,t}, N_{i,t}, x_{i,t},
b_{i,t+1}, b^f_{i,t+1} \}_{t=0}^{\infty}
$$

to maximise expected lifetime utility

$$
\max E_0 \sum_{t=0}^{\infty} \beta^t \varepsilon^r_{i,t}
\left[
\frac{C_{i,t}^{1-\rho_1}}{1-\rho_1}
+ \varepsilon^h_{i,t} \frac{H_{i,t}^{1-\rho_h}}{1-\rho_h}
+ \varepsilon^l_{i,t} \frac{x_{i,t}^{1-\rho_2}}{1-\rho_2}
\right].
$$

### Budget Constraint

$$
C_{i,t}
+ p^h_{i,t}\bigl(H_{i,t}-(1-\delta_h)H_{i,t-1}\bigr)
+ I_{i,t}
+ b_{i,t+1}
+ Q_t b^f_{i,t+1}
$$

$$
= A_{i,t} K_{i,t}^{\alpha_k} N_{i,t}^{1-\alpha_k}
+ (1+r_t)b_{i,t}
+ Q_t(1+r_t^f)b^f_{i,t}
- T_t .
$$

### Capital Accumulation

$$
K_{i,t+1} = (1-\delta_k)K_{i,t} + I_{i,t}.
$$

### Time Allocation

$$
N_{i,t} + x_{i,t} + z_{i,t} = 1 .
$$

---

### Optimality Conditions

**Consumption Euler equation**

$$
\varepsilon^r_{i,t} C_{i,t}^{-\rho_1}
= \beta (1+r_t)
E_t\!\left[
\varepsilon^r_{i,t+1} C_{i,t+1}^{-\rho_1}
\right].
$$

**Capital Euler equation**

$$
\varepsilon^r_{i,t} C_{i,t}^{-\rho_1}
= \beta E_t\!\left[
\varepsilon^r_{i,t+1} C_{i,t+1}^{-\rho_1}
\left(1-\delta_k + r^k_{i,t+1}\right)
\right].
$$

**Housing Euler equation**

$$
\varepsilon^h_{i,t} H_{i,t}^{-\rho_h}
= p^h_{i,t}\varepsilon^r_{i,t} C_{i,t}^{-\rho_1}
$$

$$
- \beta E_t\!\left[
p^h_{i,t+1}(1-\delta_h)
\varepsilon^r_{i,t+1} C_{i,t+1}^{-\rho_1}
\right].
$$

**Labour supply**

$$
\varepsilon^l_{i,t} x_{i,t}^{-\rho_2}
= \frac{w_{i,t}}{p_{i,t}}
\varepsilon^r_{i,t} C_{i,t}^{-\rho_1}
(1-\tau^L_t).
$$

**Uncovered interest parity**

$$
1+r_t
= E_t \left[
\frac{Q_{t+1}}{Q_t}(1+r_t^f+\rho_t)
\right].
$$

---

## A.2 Firms

Final output in region \( i \) is produced according to

$$
Y_{i,t} = A_{i,t} K_{i,t}^{\alpha_k} N_{i,t}^{1-\alpha_k}.
$$

Firms maximise profits

$$
\Pi_{i,t} = (1-\tau^F)p_t Y_{i,t}
- w_{i,t}N_{i,t}
- r^k_{i,t}K_{i,t}.
$$

First-order conditions imply

$$
w_{i,t}
= (1-\alpha_k)p_t A_{i,t}K_{i,t}^{\alpha_k}N_{i,t}^{-\alpha_k},
$$

$$
r^k_{i,t}
= \alpha_k p_t A_{i,t}K_{i,t}^{\alpha_k-1}N_{i,t}^{1-\alpha_k}.
$$

### Productivity Process

$$
\log A_{i,t+1}
= (1-\rho_A)\log \bar A_i
+ \rho_A \log A_{i,t}
+ \theta z_{i,t}
+ \varepsilon^A_{i,t}.
$$

---

## A.3 Government

The government budget constraint is

$$
G_t + (1+r_{t-1})b_t = R_t + b_{t+1}.
$$

Government revenues are given by

$$
R_t
= \tau^L_t w_{i,t}N_{i,t}
+ \tau^F p_t Y_{i,t}
+ \Lambda_t,
$$

where lump-sum taxes \( \Lambda_t \) adjust to ensure government solvency.

---

## A.4 Aggregation and Market Clearing

Aggregate quantities satisfy

$$
Y_t = \sum_i Y_{i,t},
\quad
C_t = \sum_i C_{i,t},
\quad
K_t = \sum_i K_{i,t}.
$$

Goods market clearing requires

$$
Y_t = C_t + I_t + G_t + (EX_t - IM_t).
$$

Bond markets clear such that household bond holdings equal government debt.

---

## A.5 Exogenous Processes

All exogenous shocks follow AR(1) processes.
