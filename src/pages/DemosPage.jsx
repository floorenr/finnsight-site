import React, { useState } from "react";

/**
 * Phase 2 demos are NON-CANONICAL and ILLUSTRATIVE ONLY.
 *
 * This component intentionally:
 * - performs NO financial calculations
 * - derives NO euro values from user input
 * - stores NO data
 * - calls NO backend or core logic
 *
 * All outputs are qualitative signals and static example ranges.
 */

const QUICK_SCAN_BANDS = [
  {
    id: "tight",
    label: "Tight",
    description:
      "Based on the combination of inputs, the situation appears constrained. Small changes may have outsized impact.",
    exampleRange: "Illustrative examples often fall below €2,000 net/month.",
  },
  {
    id: "uncertain",
    label: "Uncertain",
    description:
      "There are meaningful trade-offs and uncertainties. Outcomes depend heavily on future assumptions.",
    exampleRange:
      "Illustrative examples often fall between €2,000–€3,000 net/month.",
  },
  {
    id: "likely",
    label: "Likely feasible",
    description:
      "At a high level, the situation appears workable, assuming stable conditions.",
    exampleRange:
      "Illustrative examples often exceed €3,000 net/month.",
  },
];

const GOAL_IMPACT_SIGNALS = [
  {
    id: "high_pressure",
    label: "High pressure",
    description:
      "Reaching this goal would typically require significant trade-offs or changes.",
  },
  {
    id: "balanced",
    label: "Balanced",
    description:
      "This goal is commonly achievable, but sensitive to future changes.",
  },
  {
    id: "comfortable",
    label: "Comfortable",
    description:
      "This goal is generally compatible with a wide range of situations.",
  },
];

export default function DemosPage() {
  const [quickScanBand, setQuickScanBand] = useState(null);
  const [goalSignal, setGoalSignal] = useState(null);

  return (
    <main className="demo-page">
      <header>
        <h1>Illustrative Demos</h1>
        <p className="disclaimer">
          These demos are <strong>illustrative only</strong>. They do not perform
          financial calculations, do not provide advice, and do not represent
          accurate or personalised outcomes.
        </p>
      </header>

      {/* QUICK SCAN DEMO */}
      <section>
        <h2>Quick Scan (Illustrative)</h2>
        <p>
          This quick scan demonstrates how Finnsight communicates financial
          uncertainty at a high level — without calculations.
        </p>

        <div className="button-row">
          {QUICK_SCAN_BANDS.map((band) => (
            <button
              key={band.id}
              onClick={() => setQuickScanBand(band)}
            >
              Example outcome: {band.label}
            </button>
          ))}
        </div>

        {quickScanBand && (
          <div className="result-card">
            <h3>{quickScanBand.label}</h3>
            <p>{quickScanBand.description}</p>
            <p className="example">
              {quickScanBand.exampleRange}
            </p>
          </div>
        )}
      </section>

      {/* GOAL-FIRST DEMO */}
      <section>
        <h2>Goal-First View (Illustrative)</h2>
        <p>
          This view shows how starting from a desired outcome can surface
          trade-offs — without optimisation or guarantees.
        </p>

        <div className="button-row">
          {GOAL_IMPACT_SIGNALS.map((signal) => (
            <button
              key={signal.id}
              onClick={() => setGoalSignal(signal)}
            >
              Example impact: {signal.label}
            </button>
          ))}
        </div>

        {goalSignal && (
          <div className="result-card">
            <h3>{goalSignal.label}</h3>
            <p>{goalSignal.description}</p>
          </div>
        )}
      </section>

      <footer className="disclaimer">
        <p>
          Finnsight Phase-2 demos are communication tools only. Canonical
          calculations, validated intake, and personalised insights are
          delivered in later phases using deterministic engines.
        </p>
      </footer>
    </main>
  );
}