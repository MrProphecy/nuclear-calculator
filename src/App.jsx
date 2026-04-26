import { useState } from "react";
import EnergyCalculator from "./components/EnergyCalculator";
import UnitConverter from "./components/UnitConverter";
import IsotopeTable from "./components/IsotopeTable";

const TABS = [
  { id: "energy",    label: "E = mc²",   icon: "⚛" },
  { id: "converter", label: "Conversión", icon: "⇄" },
  { id: "isotopes",  label: "Isótopos",  icon: "☢" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("energy");

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center py-10 px-4">
      <header className="w-full max-w-2xl mb-8 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
          <span>⚛</span> Física Nuclear
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Calculadora Nuclear
        </h1>
        <p className="text-slate-400 text-sm">
          Herramienta educativa para cálculos de física nuclear · E = mc²
        </p>
      </header>

      <div className="w-full max-w-2xl bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
        <div className="flex border-b border-slate-700 bg-slate-800/80">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-semibold transition-colors border-b-2 ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-400 bg-slate-700/40"
                  : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-700/20"
              }`}
            >
              <span className="text-base">{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === "energy"    && <EnergyCalculator />}
          {activeTab === "converter" && <UnitConverter />}
          {activeTab === "isotopes"  && <IsotopeTable />}
        </div>
      </div>

      <footer className="mt-8 text-center text-xs text-slate-600 space-y-1">
        <p>c = 299 792 458 m/s · 1 MeV = 1.602 × 10⁻¹³ J · 1 kt TNT = 4.184 × 10¹² J</p>
        <p>Solo uso educativo · Datos de referencia: NUBASE2020</p>
      </footer>
    </div>
  );
}
