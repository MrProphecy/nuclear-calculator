import { useState } from "react";

const UNITS = [
  { label: "Joules (J)",         fromJ: 1,               toJ: 1 },
  { label: "Kilojoules (kJ)",    fromJ: 1e-3,            toJ: 1e3 },
  { label: "MeV",                fromJ: 6.241509074e12,  toJ: 1.602176634e-13 },
  { label: "GeV",                fromJ: 6.241509074e9,   toJ: 1.602176634e-10 },
  { label: "keV",                fromJ: 6.241509074e15,  toJ: 1.602176634e-16 },
  { label: "eV",                 fromJ: 6.241509074e18,  toJ: 1.602176634e-19 },
  { label: "erg",                fromJ: 1e7,             toJ: 1e-7 },
  { label: "cal (calorías)",     fromJ: 0.239005736,     toJ: 4.184 },
  { label: "kcal",               fromJ: 2.39005736e-4,   toJ: 4184 },
  { label: "kWh",                fromJ: 2.77778e-7,      toJ: 3.6e6 },
  { label: "t TNT (toneladas)",  fromJ: 2.39005736e-10,  toJ: 4.184e9 },
  { label: "kt TNT (kiloton.)",  fromJ: 2.39005736e-13,  toJ: 4.184e12 },
  { label: "Mt TNT (megatón.)",  fromJ: 2.39005736e-16,  toJ: 4.184e15 },
];

export default function UnitConverter() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState(0);
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");

  function convert() {
    const v = parseFloat(value);
    if (isNaN(v)) { setError("Ingresa un valor numérico válido."); return; }
    setError("");
    const joules = v * UNITS[fromUnit].toJ;
    setResults(UNITS.map(u => ({ label: u.label, value: joules * u.fromJ })));
  }

  function clear() {
    setValue("");
    setFromUnit(0);
    setResults(null);
    setError("");
  }

  return (
    <div className="space-y-6">
      <p className="text-slate-400 text-sm">
        Convierte entre unidades de energía usadas en física nuclear y explosivos.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-widest">Valor</label>
          <input
            type="number"
            step="any"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Ej: 1.0"
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-widest">Unidad de origen</label>
          <select
            value={fromUnit}
            onChange={e => setFromUnit(Number(e.target.value))}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            {UNITS.map((u, i) => (
              <option key={i} value={i}>{u.label}</option>
            ))}
          </select>
        </div>
      </div>

      {error && (
        <div className="bg-red-900/40 border border-red-500/50 text-red-300 text-sm px-4 py-2 rounded-lg">
          {error}
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={convert}
          className="flex-1 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors"
        >
          Convertir
        </button>
        <button
          onClick={clear}
          className="px-6 bg-slate-600 hover:bg-slate-500 text-slate-200 font-semibold py-2.5 rounded-lg transition-colors"
        >
          Limpiar
        </button>
      </div>

      {results && (
        <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-widest mb-4">Conversiones</h3>
          <div className="space-y-1">
            {results.map((r, i) => (
              <div
                key={i}
                className={`flex items-center justify-between py-2 px-3 rounded-lg ${i === fromUnit ? "bg-blue-600/20 border border-blue-500/30" : "hover:bg-slate-600/30"} transition-colors`}
              >
                <span className="text-sm text-slate-400">{r.label}</span>
                <span className={`font-mono text-sm font-semibold ${i === fromUnit ? "text-blue-400" : "text-slate-200"}`}>
                  {r.value.toExponential(5)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
