\appendix
\section{Model}
\label{app:model}

This appendix presents the full set of equilibrium conditions of the model.
All households and firms are forward-looking.
State variables are capital $K_t$, public debt $b_t$, and productivity $A_t$.
Control variables are consumption $C_t$, investment $I_t$, labour $N_t$, and asset holdings.
Households make decisions at time $t$, which determine next-period states.

\subsection{Households}

Households maximise expected lifetime utility
\begin{equation}
\max \; \mathbb{E}_0 \sum_{t=0}^{\infty} \beta^t \varepsilon^r_{i,t}
u(C_{i,t}, H_{i,t}, x_{i,t}),
\end{equation}
with period utility
\begin{equation}
u(C_{i,t}, H_{i,t}, x_{i,t})
= \frac{C_{i,t}^{1-\rho_{1i}}}{1-\rho_{1i}}
+ \frac{\varepsilon^h_{i,t} H_{i,t}^{1-\rho_{hi}}}{1-\rho_{hi}}
+ \frac{\varepsilon^l_{i,t} x_{i,t}^{1-\rho_{2i}}}{1-\rho_{2i}} .
\end{equation}

Time is allocated between labour, leisure, and innovation:
\begin{equation}
N_{i,t} + x_{i,t} + z_{i,t} = 1 .
\end{equation}

The household budget constraint is
\begin{equation}
\begin{aligned}
C_{i,t}
+ p_{h,i,t}\big[H_{i,t}-(1-\delta_h)H_{i,t-1}\big]
+ I_{i,t}
+ b_{i,t+1}
+ Q_t b^f_{i,t+1}
= {} &
A_{i,t} K_{i,t}^{\alpha_k} N_{i,t}^{1-\alpha_k}  \\
& + (1+r_t)b_{i,t}
+ Q_t(1+r_t^f)b^f_{i,t}
- T_t .
\end{aligned}
\end{equation}

Capital accumulates according to
\begin{equation}
K_{i,t+1} = (1-\delta_k)K_{i,t} + I_{i,t}.
\end{equation}

The optimality conditions are:
\begin{align}
\text{Consumption Euler:}\quad
& \varepsilon^r_{i,t} C_{i,t}^{-\rho_{1i}}
= \beta (1+r_t)
\mathbb{E}_t\!\left[\varepsilon^r_{i,t+1} C_{i,t+1}^{-\rho_{1i}}\right], \\
\text{Capital Euler:}\quad
& \varepsilon^r_{i,t} C_{i,t}^{-\rho_{1i}}
= \beta \mathbb{E}_t\!\left[
\varepsilon^r_{i,t+1} C_{i,t+1}^{-\rho_{1i}}
\big((1-\delta_k)+r^k_{i,t+1}\big)
\right], \\
\text{Housing Euler:}\quad
& \varepsilon^h_{i,t} H_{i,t}^{-\rho_{hi}}
= p_{h,i,t}\varepsilon^r_{i,t} C_{i,t}^{-\rho_{1i}}
- \beta \mathbb{E}_t\!\left[
p_{h,i,t+1}(1-\delta_h)\varepsilon^r_{i,t+1} C_{i,t+1}^{-\rho_{1i}}
\right], \\
\text{Labour supply:}\quad
& \frac{\varepsilon^l_{i,t} x_{i,t}^{-\rho_{2i}}}
{C_{i,t}^{-\rho_{1i}}}
= \frac{w_{i,t}}{p_{i,t}}(1+\delta_i unrt - TL_t).
\end{align}

Uncovered interest parity holds:
\begin{equation}
1+r_t
= \mathbb{E}_t \left[\frac{Q_{t+1}}{Q_t}(1+r_t^f+\rho_t)\right].
\end{equation}

\subsection{Firms}

Final output is produced according to
\begin{equation}
Y_{j,t} = A_{j,t} K_{j,t}^{\alpha_k} N_{j,t}^{1-\alpha_k}.
\end{equation}

Firms maximise profits
\begin{equation}
\pi_{j,t} = (1-T_f)p_t Y_{j,t} - w_{i,t}N_{j,t} - r^k_{i,t}K_{j,t},
\end{equation}
implying factor prices
\begin{align}
w_{i,t} &= (1-\alpha_k)p_t A_{j,t} K_{j,t}^{\alpha_k} N_{j,t}^{-\alpha_k}, \\
r^k_{i,t} &= \alpha_k p_t A_{j,t} K_{j,t}^{\alpha_k-1} N_{j,t}^{1-\alpha_k}.
\end{align}

Productivity evolves according to a reduced-form law of motion:
\begin{equation}
\frac{A_{j,t+1}}{A_{j,t}} = \theta_{1j} + \theta_{2j} z_{j,t} + v^A_{j,t}.
\end{equation}

\subsection{Government}

Government spending $G_t$ is exogenous and follows an AR(1) process.
The government issues one-period bonds and satisfies the budget constraint
\begin{equation}
G_t + (1+r_{t-1})b_t = R_t + b_{t+1}.
\end{equation}

Government revenues are given by
\begin{equation}
R_t = \tau_z z_{i,t} + T_l w_{i,t} N_{i,t} + T_f p_t Y_{j,t} + \Lambda_t.
\end{equation}

Lump-sum taxes $\Lambda_t$ adjust endogenously to ensure government solvency.

\subsection{Aggregation and Market Clearing}

Aggregate quantities satisfy
\begin{align}
C_t &= C_{N,t} + C_{S,t} + C_{W,t}, \\
K_t &= K_{N,t} + K_{S,t} + K_{W,t}, \\
I_t &= I_{N,t} + I_{S,t} + I_{W,t}, \\
N_t &= N_{N,t} + N_{S,t} + N_{W,t}.
\end{align}

Goods market clearing requires
\begin{equation}
Y_t = C_t + I_t + G_t + (EX_t - IM_t).
\end{equation}

Asset markets clear such that household bond holdings equal government debt.

\subsection{Exogenous Processes}

All exogenous shocks follow AR(1) processes.


