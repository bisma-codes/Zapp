export type SavingsInputs = {
  monthlyBill: number;
  monthlyUnits: number;
  hasSolar: boolean;
  applianceLoad: "light" | "typical" | "heavy";
  targetReduction: number;
};

export type SavingsEstimate = {
  monthlySavings: number;
  yearlySavings: number;
  reducedUnits: number;
  projectedBill: number;
  confidence: string;
};

const loadFactor = {
  light: 0.82,
  typical: 1,
  heavy: 1.14,
};

export function calculateSavings(input: SavingsInputs): SavingsEstimate {
  const bill = Math.max(0, Number(input.monthlyBill) || 0);
  const units = Math.max(0, Number(input.monthlyUnits) || 0);
  const target = Math.min(35, Math.max(5, Number(input.targetReduction) || 5));

  const planningRate = 0.56 + target / 100;
  const solarBoost = input.hasSolar ? 1.18 : 1;
  const achievableRate = Math.min(
    0.32,
    (target / 100) * planningRate * solarBoost * loadFactor[input.applianceLoad],
  );

  const monthlySavings = Math.round(bill * achievableRate);
  const reducedUnits = Math.round(units * achievableRate);

  return {
    monthlySavings,
    yearlySavings: monthlySavings * 12,
    reducedUnits,
    projectedBill: Math.max(0, bill - monthlySavings),
    confidence: input.hasSolar ? "Solar-aware projection" : "Planning projection",
  };
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}
