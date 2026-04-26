import { useState } from "react";
import { C, AMU_TO_KG, JOULE_TO_MEV, JOULE_TO_KT, calcEnergy, formatSci } from "../utils/physics";

const MASS_UNITS = [
  { label: "kilogramos (kg)", toKg: 1 },
  { label: "gramos (g)",      toKg: 1e-3 },
  { label: "miligramos (mg)", toKg: 1e-6 },
  { label: "microgramos (µg)",toKg: 1e-9 },
  { label: "u.m.a. (amu)",    toKg: AMU_TO_KG },
];

export default function EnergyCalculator() {
  const [mass, setMass] = useState("");
  const [massUnit, setMassUnit] = useState(0);
  const [cInput, setCInput] = useState(C.toString());
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function calculate() {
    const m = parseFloat(mass);
    const c = parseFloat(cInput);
    if (isNaN(m) || m <= 0) { setError("Ingresa una masa positiva válida."); return; }
    if (isNaN(c) || c <= 0) { setError("Ingresa una velocidad de la luz válida."); return; }
    setError("");
    const massKg = m * MASS_UNITS[massUnit].toKg;
    const joules = massKg * c * c;
    setResult({ joules, mev: joules * JOULE_TO_MEV, kt: joules * JOULE_TO_KT, massKg });
  }

  function clear() {
    setMass("");
    setCInput(C.toString());
    setMassUnit(0);
    setResult(null);
    setError("");
  }

  return (
    <div className="space-y-6">
      <p className="text-slate-400 text-sm">
        Calcula la energía equivalente de una masa en reposo usando <span className="font-mono text-blue-400">E = mc²</span>.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Mass input */}
        <div className="space-y-1">
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-widest">Masa (m)</label>
          <input
            type="number"
            min="0"
            step="any"
            value={mass}
            onChange={e => setMass(e.target.value)}
            placeholder="Ej: 1.0"
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        {/* Mass unit */}
        <div className="space-y-1">
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-widest">Unidad de masa</label>
          <select
            value={massUnit}
            onChange={e => setMassUnit(Number(e.target.value))}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            {MASS_UNITS.map((u, i) => (
              <option key={i} value={i}>{u.label}</option>
            ))}
          </select>
        </div>

        {/* Speed of light */}
        <div className="space-y-1 sm:col-span-2">
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-widest">
            Velocidad de la luz (c) — m/s
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              step="any"
              value={cInput}
              onChange={e => setCInput(e.target.value)}
              className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition font-mono"
            />
            <button
              onClick={() => setCInput(C.toString())}
              className="px-3 py-2 text-xs bg-slate-600 hover:bg-slate-500 text-slate-200 rounded-lg transition"
            >
              Resetear
            </button>
          </div>
          <p className="text-xs text-slate-500">Valor estándar: 299 792 458 m/s</p>
        </div>
      </div>

      {error && (
        <div className="bg-red-900/40 border border-red-500/50 text-red-300 text-sm px-4 py-2 rounded-lg">
          {error}
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={calculate}
          className="flex-1 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors"
        >
          Calcular
        </button>
        <button
          onClick={clear}
          className="px-6 bg-slate-600 hover:bg-slate-500 text-slate-200 font-semibold py-2.5 rounded-lg transition-colors"
        >
          Limpiar
        </button>
      </div>

      {result && (
        <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-5 space-y-3">
          <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-widest mb-4">Resultado</h3>

          <div className="space-y-2">
            <ResultRow
              label="Masa convertida"
              value={formatSci(result.massKg)}
              unit="kg"
              color="text-slate-300"
            />
            <ResultRow
              label="Energía (Joules)"
              value={formatSci(result.joules)}
              unit="J"
              color="text-blue-400"
              highlight
            />
            <ResultRow
              label="Energía (MeV)"
              value={formatSci(result.mev)}
              unit="MeV"
              color="text-green-400"
            />
            <ResultRow
              label="Energía (kt TNT)"
              value={formatSci(result.kt)}
              unit="kt"
              color="text-orange-400"
            />
            <ResultRow
              label="Energía (Mt TNT)"
              value={formatSci(result.kt / 1000)}
              unit="Mt"
              color="text-red-400"
            />
          </div>

          <div className="pt-3 border-t border-slate-600 text-xs text-slate-500 font-mono">
            E = {formatSci(result.massKg)} kg × ({formatSci(parseFloat(cInput))} m/s)²
          </div>
        </div>
      )}
    </div>
  );
}

function ResultRow({ label, value, unit, color, highlight }) {
  return (
    <div className={`flex items-center justify-between py-2 px-3 rounded-lg ${highlight ? "bg-slate-600/50" : ""}`}>
      <span className="text-sm text-slate-400">{label}</span>
      <span className={`font-mono text-sm font-semibold ${color}`}>
        {value} <span className="text-xs font-normal opacity-70">{unit}</span>
      </span>
    </div>
  );
}
