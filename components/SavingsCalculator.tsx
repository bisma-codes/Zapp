"use client";

import { motion, useReducedMotion } from "motion/react";
import { Calculator, CircleCheck, Sun } from "lucide-react";
import { useMemo, useState } from "react";
import { calculateSavings, type SavingsInputs } from "@/lib/calculator";

const formatPkr = (value: number) =>
  new Intl.NumberFormat("en-PK", { maximumFractionDigits: 0 }).format(value);

export function SavingsCalculator() {
  const reduceMotion = useReducedMotion();
  const [inputs, setInputs] = useState<SavingsInputs>({
    monthlyBill: 18000,
    monthlyUnits: 520,
    hasSolar: false,
    applianceLoad: "typical",
    targetReduction: 15,
  });

  const result = useMemo(() => calculateSavings(inputs), [inputs]);

  return (
    <div className="calculator-shell">
      <div className="calculator-inputs">
        <div className="calculator-title">
          <span className="icon-chip blue">
            <Calculator size={18} />
          </span>
          <div>
            <span className="eyebrow">Your home, your estimate</span>
            <h3>See what planning could change.</h3>
          </div>
        </div>

        <label className="field-label" htmlFor="bill">
          Monthly electricity bill
          <span>Rs. {formatPkr(inputs.monthlyBill)}</span>
        </label>
        <input
          id="bill"
          className="range-input"
          type="range"
          min="3000"
          max="80000"
          step="500"
          value={inputs.monthlyBill}
          onChange={(event) =>
            setInputs((current) => ({
              ...current,
              monthlyBill: Number(event.target.value),
            }))
          }
        />

        <label className="field-label" htmlFor="units">
          Monthly units
          <span>{inputs.monthlyUnits} kWh</span>
        </label>
        <input
          id="units"
          className="range-input"
          type="range"
          min="100"
          max="1500"
          step="10"
          value={inputs.monthlyUnits}
          onChange={(event) =>
            setInputs((current) => ({
              ...current,
              monthlyUnits: Number(event.target.value),
            }))
          }
        />

        <div className="input-row">
          <fieldset>
            <legend>Appliance load</legend>
            <div className="segmented-control">
              {(["light", "typical", "heavy"] as const).map((load) => (
                <button
                  type="button"
                  key={load}
                  className={inputs.applianceLoad === load ? "active" : ""}
                  onClick={() =>
                    setInputs((current) => ({ ...current, applianceLoad: load }))
                  }
                >
                  {load}
                </button>
              ))}
            </div>
          </fieldset>

          <button
            type="button"
            className={`solar-toggle ${inputs.hasSolar ? "active" : ""}`}
            aria-pressed={inputs.hasSolar}
            onClick={() =>
              setInputs((current) => ({ ...current, hasSolar: !current.hasSolar }))
            }
          >
            <Sun size={18} />
            Solar {inputs.hasSolar ? "connected" : "not installed"}
          </button>
        </div>

        <label className="field-label" htmlFor="target">
          Reduction goal
          <span>{inputs.targetReduction}%</span>
        </label>
        <input
          id="target"
          className="range-input"
          type="range"
          min="5"
          max="35"
          step="1"
          value={inputs.targetReduction}
          onChange={(event) =>
            setInputs((current) => ({
              ...current,
              targetReduction: Number(event.target.value),
            }))
          }
        />
      </div>

      <div className="calculator-results" aria-live="polite">
        <div className="result-orbit" aria-hidden="true" />
        <span className="result-kicker">{result.confidence}</span>
        <motion.div
          key={result.yearlySavings}
          initial={reduceMotion ? false : { opacity: 0.5, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="result-main"
        >
          <span>Potential yearly savings</span>
          <strong>Rs. {formatPkr(result.yearlySavings)}</strong>
        </motion.div>
        <div className="result-grid">
          <div>
            <span>Monthly saving</span>
            <strong>Rs. {formatPkr(result.monthlySavings)}</strong>
          </div>
          <div>
            <span>Units reduced</span>
            <strong>~{result.reducedUnits} kWh</strong>
          </div>
          <div>
            <span>Projected bill</span>
            <strong>Rs. {formatPkr(result.projectedBill)}</strong>
          </div>
        </div>
        <p className="estimate-note">
          <CircleCheck size={16} />
          Based on achievable planning changes, not guaranteed savings.
        </p>
      </div>
    </div>
  );
}
