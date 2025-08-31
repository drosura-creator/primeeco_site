import React, { useMemo, useState } from "react";
import { Calculator, Leaf, PiggyBank, Zap } from "lucide-react";

// Type definition for calculation results
type SavingsResults = {
  usageKWh: number;
  targetKWh: number;
  systemKw: number;
  estCost: number;
  monthlySavingsLkr: number;
  annualSavingsLkr: number;
  paybackYears: number;
  annualCo2Tons: number;
};

const SavingsCalculator: React.FC = () => {
  const [monthlyBill, setMonthlyBill] = useState<number>(25000);
  const [rateLkr, setRateLkr] = useState<number>(75);
  const [offsetPct, setOffsetPct] = useState<number>(80);
  const [prodPerKw, setProdPerKw] = useState<number>(135);
  const [costPerKw, setCostPerKw] = useState<number>(350000);
  const [co2KgPerKwh, setCo2KgPerKwh] = useState<number>(0.7);

  // Calculation logic
  const results: SavingsResults = useMemo(() => {
    const usageKWh = rateLkr > 0 ? monthlyBill / rateLkr : 0;
    const offset = Math.min(Math.max(offsetPct, 0), 100) / 100;
    const targetKWh = usageKWh * offset;
    const systemKw = prodPerKw > 0 ? targetKWh / prodPerKw : 0;
    const roundedKw = Math.max(0, Math.round(systemKw * 10) / 10);
    const estCost = roundedKw * costPerKw;
    const monthlySavingsLkr = targetKWh * rateLkr;
    const annualSavingsLkr = monthlySavingsLkr * 12;
    const paybackYears =
      annualSavingsLkr > 0 ? estCost / annualSavingsLkr : 0;
    const annualCo2Tons = (targetKWh * 12 * co2KgPerKwh) / 1000;

    return {
      usageKWh,
      targetKWh,
      systemKw: roundedKw,
      estCost,
      monthlySavingsLkr,
      annualSavingsLkr,
      paybackYears,
      annualCo2Tons,
    };
  }, [monthlyBill, rateLkr, offsetPct, prodPerKw, costPerKw, co2KgPerKwh]);

  // Helpers with types
  const nf = (n: number): string =>
    isFinite(n)
      ? n.toLocaleString(undefined, { maximumFractionDigits: 1 })
      : "—";

  const n2 = (n: number): string =>
    isFinite(n)
      ? n.toLocaleString(undefined, { maximumFractionDigits: 2 })
      : "—";

  const money = (n: number): string =>
    isFinite(n) ? `LKR ${Math.round(n).toLocaleString()}` : "—";

  return (
    <section id="savings" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            See How Much You Can Save
          </h2>
          <p className="text-slate-600 mt-2">
            Adjust the numbers to match your home or business. This is a quick
            estimate—final designs and pricing may vary after a site visit and
            utility review.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Inputs */}
          <div className="lg:col-span-2 bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <Calculator className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-slate-800">Your Inputs</h3>
            </div>

            {/* Monthly Bill */}
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Average Monthly Electricity Bill (LKR)
            </label>
            <input
              type="number"
              value={monthlyBill}
              min={0}
              onChange={(e) => setMonthlyBill(Number(e.target.value))}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500"
            />

            <div className="grid grid-cols-2 gap-4 mt-4">
              {/* Tariff */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Average Tariff (LKR / kWh)
                </label>
                <input
                  type="number"
                  value={rateLkr}
                  min={0}
                  step={1}
                  onChange={(e) => setRateLkr(Number(e.target.value))}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Offset */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Target Offset (%)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={offsetPct}
                    onChange={(e) => setOffsetPct(Number(e.target.value))}
                    className="w-full accent-green-600"
                  />
                  <span className="w-12 text-right font-semibold text-slate-700">
                    {offsetPct}%
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              {/* Production per kW */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Monthly Solar Output (kWh/kW)
                </label>
                <input
                  type="number"
                  value={prodPerKw}
                  min={80}
                  step={5}
                  onChange={(e) => setProdPerKw(Number(e.target.value))}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500"
                />
                <div className="text-xs text-slate-500 mt-1">Typical SL: 120–150</div>
              </div>

              {/* Cost per kW */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  System Cost (LKR / kW)
                </label>
                <input
                  type="number"
                  value={costPerKw}
                  min={100000}
                  step={5000}
                  onChange={(e) => setCostPerKw(Number(e.target.value))}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              {/* CO2 Factor */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  CO₂ Factor (kg/kWh)
                </label>
                <input
                  type="number"
                  value={co2KgPerKwh}
                  min={0.2}
                  step={0.05}
                  onChange={(e) => setCo2KgPerKwh(Number(e.target.value))}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="pt-6 text-xs text-slate-500">
                <p>Adjust for local tariffs & pricing.</p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <StatCard
                icon={<Zap className="w-5 h-5" />}
                title="Estimated System Size"
                value={`${nf(results.systemKw)} kW`}
                sub={`${nf(results.targetKWh)} kWh/month offset`}
              />
              <StatCard
                icon={<PiggyBank className="w-5 h-5" />}
                title="Estimated System Cost"
                value={money(results.estCost)}
                sub="Turn-key estimate"
              />
              <StatCard
                icon={<Leaf className="w-5 h-5" />}
                title="Annual CO₂ Saved"
                value={`${n2(results.annualCo2Tons)} tons`}
                sub="vs. grid electricity"
              />
            </div>

            {/* Summary */}
            <div className="mt-4 rounded-2xl border border-slate-200 overflow-hidden">
              <div className="bg-slate-50 px-5 py-3 font-semibold">
                Savings Summary
              </div>
              <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <Row label="Your Monthly Usage (est.)">
                  {nf(results.usageKWh)} kWh
                </Row>
                <Row label="Monthly Savings (est.)">
                  {money(results.monthlySavingsLkr)}
                </Row>
                <Row label="Annual Savings (est.)">
                  {money(results.annualSavingsLkr)}
                </Row>
                <Row label="Simple Payback (est.)">
                  {n2(results.paybackYears)} years
                </Row>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-green-600 hover:opacity-95"
              >
                Get a Free Site Visit
              </a>
              <span className="text-xs text-slate-500">
                Estimates only. Final design depends on roof space, shading, and
                utility approvals.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Small UI components
const StatCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  value: string;
  sub?: string;
}> = ({ icon, title, value, sub }) => (
  <div className="rounded-2xl border border-slate-200 p-4">
    <div className="flex items-center gap-2 text-slate-600 mb-1">
      {icon}
      <span className="text-sm">{title}</span>
    </div>
    <div className="text-2xl font-bold text-slate-800">{value}</div>
    {sub && <div className="text-xs text-slate-500 mt-1">{sub}</div>}
  </div>
);

const Row: React.FC<{ label: string; children: React.ReactNode }> = ({
  label,
  children,
}) => (
  <div className="flex items-center justify-between gap-4">
    <div className="text-slate-600">{label}</div>
    <div className="font-semibold text-slate-800">{children}</div>
  </div>
);

export default SavingsCalculator;
