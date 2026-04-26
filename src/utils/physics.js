export const C = 299_792_458; // m/s
export const AMU_TO_KG = 1.66053906660e-27;
export const JOULE_TO_MEV = 6.241509074e12;
export const JOULE_TO_KT = 1 / 4.184e12;

export function calcEnergy(massKg) {
  return massKg * C * C;
}

export function kgFromAmu(amu) {
  return amu * AMU_TO_KG;
}

export function formatSci(value, decimals = 4) {
  if (value === 0 || isNaN(value)) return "0";
  return value.toExponential(decimals);
}
