import { useState } from "react";
import { isotopes } from "../data/isotopes";
import { AMU_TO_KG, calcEnergy, formatSci, JOULE_TO_MEV, JOULE_TO_KT } from "../utils/physics";

export default function IsotopeTable() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const filtered = isotopes.filter(iso =>
    iso.element.toLowerCase().includes(search.toLowerCase()) ||
    iso.symbol.toLowerCase().includes(search.toLowerCase()) ||
    String(iso.A).includes(search)
  );

  const displayed = showAll ? filtered : filtered.slice(0, 10);

  function selectIsotope(iso) {
    setSelected(iso === selected ? null : iso);
  }

  const massKg = selected ? selected.mass_amu * AMU_TO_KG : 0;
  const joules = selected ? calcEnergy(massKg) : 0;

  return (
    <div className="space-y-6">
      <p className="text-slate-400 text-sm">
        Tabla de isótopos con masa atómica. Haz clic en un isótopo para calcular su energía equivalente E=mc².
      </p>

      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Buscar por nombre, símbolo o número másico…"
        className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      <div className="overflow-x-auto rounded-xl border border-slate-600">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-700/80 text-slate-300 text-xs uppercase tracking-widest">
              <th className="px-4 py-3 text-left">Isótopo</th>
              <th className="px-4 py-3 text-center">Símbolo</th>
              <th className="px-4 py-3 text-center">Z</th>
              <th className="px-4 py-3 text-center">A</th>
              <th className="px-4 py-3 text-right">Masa (u.m.a.)</th>
              <th className="px-4 py-3 text-center">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {displayed.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-slate-500">No se encontraron isótopos.</td>
              </tr>
            )}
            {displayed.map((iso, i) => (
              <tr
                key={i}
                onClick={() => selectIsotope(iso)}
                className={`cursor-pointer transition-colors ${
                  selected === iso
                    ? "bg-blue-600/20 border-l-2 border-l-blue-500"
                    : "hover:bg-slate-700/50"
                }`}
              >
                <td className="px-4 py-3 font-medium text-slate-200">{iso.element}</td>
                <td className="px-4 py-3 text-center font-mono text-blue-300">
                  <span className="text-xs text-slate-500 mr-0.5">{iso.A}</span>{iso.symbol}
                </td>
                <td className="px-4 py-3 text-center text-slate-400">{iso.Z}</td>
                <td className="px-4 py-3 text-center text-slate-400">{iso.A}</td>
                <td className="px-4 py-3 text-right font-mono text-slate-200">{iso.mass_amu.toFixed(7)}</td>
                <td className="px-4 py-3 text-center">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                    iso.stable
                      ? "bg-green-900/50 text-green-400"
                      : "bg-orange-900/50 text-orange-400"
                  }`}>
                    {iso.stable ? "Estable" : "Radiact."}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filtered.length > 10 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="w-full text-sm text-slate-400 hover:text-slate-200 py-2 transition-colors"
        >
          {showAll ? "Mostrar menos ▲" : `Mostrar todos (${filtered.length}) ▼`}
        </button>
      )}

      {selected && (
        <div className="bg-slate-700/50 border border-blue-500/30 rounded-xl p-5 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-blue-600/30 border border-blue-500/40 flex flex-col items-center justify-center">
              <span className="text-[10px] text-blue-300">{selected.A}</span>
              <span className="text-lg font-bold text-blue-400 leading-none">{selected.symbol}</span>
            </div>
            <div>
              <h3 className="text-white font-semibold">{selected.element}</h3>
              <p className="text-xs text-slate-400">Z={selected.Z} · A={selected.A} · {selected.stable ? "Estable" : "Radiactivo"}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
            <InfoBox label="Masa en u.m.a." value={`${selected.mass_amu.toFixed(7)} u`} />
            <InfoBox label="Masa en kg" value={`${formatSci(massKg)} kg`} />
            <InfoBox label="Energía (Joules)" value={`${formatSci(joules)} J`} color="text-blue-400" />
            <InfoBox label="Energía (MeV)" value={`${formatSci(joules * JOULE_TO_MEV)} MeV`} color="text-green-400" />
            <InfoBox label="Energía (kt TNT)" value={`${formatSci(joules * JOULE_TO_KT)} kt`} color="text-orange-400" />
            <InfoBox label="Energía (Mt TNT)" value={`${formatSci(joules * JOULE_TO_KT / 1000)} Mt`} color="text-red-400" />
          </div>
        </div>
      )}
    </div>
  );
}

function InfoBox({ label, value, color = "text-slate-200" }) {
  return (
    <div className="bg-slate-600/40 rounded-lg px-3 py-2">
      <p className="text-xs text-slate-400 mb-0.5">{label}</p>
      <p className={`font-mono text-sm font-semibold ${color}`}>{value}</p>
    </div>
  );
}
