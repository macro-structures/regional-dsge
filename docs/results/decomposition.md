# Forecast Error Variance and Historical Decomposition

A forecast error variance decomposition (FEVD) allocates forecast-error variance across model shocks at a chosen forecast horizon. Historical decomposition attributes realised model fluctuations to shock sequences, subject to the model's measurement, filtering and decomposition conventions.

## Regional GDP: grouped shock mechanisms

![GDP forecast-error variance decomposition for regional economies](../assets/fevd_gdp_regions.png)

![Alternative grouping of GDP shock mechanisms](../assets/fevd_mechanisms.png)

## Wales: seven-category FEVD

![Wales GDP FEVD](../assets/fevd_wales.png)

Download the original FEVD values: [Wales](../assets/fevd_wales.csv), [North](../assets/fevd_north.csv), [South](../assets/fevd_south.csv), and [UK](../assets/fevd_uk.csv). The seven displayed categories are not necessarily seven primitive structural shocks; the remainder is grouped as "Other".

## Historical GDP decomposition

![Historical GDP decomposition, North](../assets/historical_gdp_north.png)

![Historical GDP decomposition, South](../assets/historical_gdp_south.png)

![Historical GDP decomposition, Wales](../assets/historical_gdp_wales.png)

[Download historical-group data](../assets/historical_groups.csv) and [shock-mechanism mapping](../assets/shock_map.csv).

## Model fit diagnostic

The supplied `GDP_Fit_Diagnostics.csv` reports the following, with the original scales and transformation conventions **not yet independently verified**:

| Series | N | RMSE | Correlation | R² |
|---|---:|---:|---:|---:|
| North GDP | 133 | 2.383 | −0.242 | −1.095 |
| South GDP | 133 | 1.343 | 0.414 | 0.047 |
| Wales GDP | 133 | 1.767 | 0.165 | −0.165 |
| UK GDP | 133 | 1.541 | −0.381 | −0.202 |

The negative R² values and weak/negative correlations indicate that some reported historical reconstruction benchmarks fit poorly. This is a substantive diagnostic, not evidence of a validated historical fit. Check definitions, scaling, trend handling, alignment and whether exact accounting or fitted predictions underpin each plot before making strong claims.

[Download original GDP fit diagnostics](../assets/fit_diagnostics.csv).
