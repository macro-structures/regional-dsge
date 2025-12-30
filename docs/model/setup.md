# Appendix A. Model

This appendix presents the full set of equilibrium conditions of the model.
Time is discrete. Households and firms are forward-looking and take prices as given.

## Notation

The index for regions is defined as follows:

$$ i \in \{N,S,W\}. $$

Time is indexed by

$$ t. $$

Expectations conditional on information available at time \(t\) are denoted by

$$ E_t. $$

---

## A.1 Households

A representative household is defined in region

$$ i. $$

The household chooses sequences of variables given by

$$
\{ C_{i,t}, I_{i,t}, K_{i,t+1}, H_{i,t}, N_{i,t}, x_{i,t}, b_{i,t+1}, b^f_{i,t+1} \}_{t=0}^{\infty}.
$$

The household maximises expected lifetime utility

$$
\max E_0 \sum_{t=0}^{\infty} \beta^t \varepsilon^r_{i,t}
\left[
\frac{C_{i,t}^{1-\rho_1}}{1-\rho_1}
+ \varepsilon^h_{i,t} \frac{H_{i,t}^{1-\rho_h}}{1-\rho_h}
+ \varepsilon^l_{i,t} \frac{x_{i,t}^{1-\rho_2}}{1-\rho_2}
\right].
$$

### Budget Constraint

The household budget constraint is given by

$$
C_{i,t}
+ p^h_{i,t}\bigl(H_{i,t}-(1-\delta_h)H_{i,t-1}\bigr)
+ I_{i,t}
+ b_{i,t+1}
+ Q_t b^f_{i,t+1}
= A_{i,t} K_{i,t}^{\alpha_k} N_{i,t}^{1-\alpha_k}
+ (1+r_t)b_{i,t}
+ Q_t(1+r_t^f)b^f_{i,t}
- T_t.
$$

### Capital Accumulation

Capital evolves according to

$$
K_{i,t+1} = (1-\delta_k)K_{i,t} + I_{i,t}.
$$

### Time Allocation

Time allocation satisfies

$$
N_{i,t} + x_{i,t} + z_{i,t} = 1.
$$

### Optimality Conditions

The consumption Euler equation is given by

$$
\varepsilon^r_{i,t} C_{i,t}^{-\rho_1}
= \beta (1+r_t)
E_t \left[
\varepsilon^r_{i,t+1} C_{i,t+1}^{-\rho_1}
\right].
$$

The capital Euler equation is given by

$$
\varepsilon^r_{i,t} C_{i,t}^{-\rho_1}
= \beta E_t \left[
\varepsilon^r_{i,t+1} C_{i,t+1}^{-\rho_1}
\left(1-\delta_k+r^k_{i,t+1}\right)
\right].
$$

The housing Euler equation is given by

$$
\varepsilon^h_{i,t} H_{i,t}^{-\rho_h}
= p^h_{i,t} \varepsilon^r_{i,t} C_{i,t}^{-\rho_1}
- \beta E_t \left[
p^h_{i,t+1}(1-\delta_h)
\varepsilon^r_{i,t+1} C_{i,t+1}^{-\rho_1}
\right].
$$

Labour supply satisfies

$$
\varepsilon^l_{i,t} x_{i,t}^{-\rho_2}
= \frac{w_{i,t}}{p_{i,t}}
\varepsilon^r_{i,t} C_{i,t}^{-\rho_1}
(1-\tau^L_t).
$$

Uncovered interest parity is given by

$$
1+r_t
= E_t \left[
\frac{Q_{t+1}}{Q_t}
(1+r^f_t+\rho_t)
\right].
$$

---

## A.2 Firms

Final output in region

$$ i $$

is produced according to

$$
Y_{i,t} = A_{i,t} K_{i,t}^{\alpha_k} N_{i,t}^{1-\alpha_k}.
$$

Firms maximise profits given by

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

## A.3 Government

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

---

## A.4 Aggregation and Market Clearing

Aggregate quantities satisfy

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

## A.5 Exogenous Processes

All exogenous shocks follow AR(1) processes.
