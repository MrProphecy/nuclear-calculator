<div align="center">

# ⚛️ Calculadora Nuclear

**Herramienta educativa interactiva para cálculos de física nuclear**

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)](https://nuclear-calculator.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

[**🚀 Ver App en Vivo**](https://nuclear-calculator.vercel.app) · [Reportar Bug](https://github.com/MrProphecy/nuclear-calculator/issues) · [Solicitar Feature](https://github.com/MrProphecy/nuclear-calculator/issues)

</div>

---

## 📖 Descripción

**Calculadora Nuclear** es una aplicación web educativa que permite realizar cálculos de física nuclear de forma precisa e intuitiva. Basada en la ecuación de Einstein **E = mc²**, ofrece tres módulos especializados: cálculo de energía equivalente de masa, conversión entre unidades de energía y consulta de una tabla de isótopos de referencia.

Diseñada para estudiantes, docentes e investigadores, utiliza datos de referencia del estándar **NUBASE2020** y constantes físicas de precisión.

---

## ✨ Características principales

| Módulo | Descripción |
|---|---|
| ⚛️ **E = mc²** | Calcula la energía equivalente de cualquier masa en reposo |
| ⇄ **Conversor de unidades** | Convierte entre 13 unidades de energía simultáneamente |
| ☢️ **Tabla de isótopos** | Consulta 20 isótopos con sus masas atómicas y propiedades |

- 🎯 **Múltiples unidades de masa** — kg, g, mg, µg y unidades de masa atómica (u.m.a.)
- 🔢 **Resultados en notación científica** — Joules, MeV, GeV, keV, eV, kt TNT, Mt TNT y más
- 🔍 **Búsqueda de isótopos** — por nombre, símbolo químico o número másico
- 📊 **Cálculo directo desde isótopos** — selecciona un isótopo para calcular su E=mc² al instante
- 🌙 **Diseño oscuro** — interfaz moderna y cómoda para uso prolongado
- 📱 **Totalmente responsive** — funciona en móvil, tablet y escritorio
- ⚡ **Sin backend** — toda la computación ocurre en el navegador, sin latencia

---

## 🖥️ Capturas de pantalla

### Calculadora E = mc²
> Ingresa la masa y la unidad, obtén la energía equivalente en cinco escalas de forma simultánea.

```
Masa: 1.0 kg  →  E = 8.9876 × 10¹⁶ J
                  E = 5.6096 × 10²⁹ MeV
                  E = 2.1480 × 10⁴ kt TNT
                  E = 21.480 Mt TNT
```

### Conversor de unidades de energía
> Introduce un valor en cualquier unidad y obtén su equivalente en las 13 unidades restantes de forma instantánea.

```
1 MeV  →  1.60218 × 10⁻¹³ J
       →  1.60218 × 10⁻¹⁶ kJ
       →  3.82929 × 10⁻²⁰ kcal
       →  3.82929 × 10⁻²³ t TNT
       → ... (13 unidades en total)
```

### Tabla de isótopos
> Busca, filtra y haz clic en cualquier isótopo para calcular su energía equivalente E=mc² de forma inmediata.

```
Isótopo      Símbolo  Z    A    Masa (u.m.a.)   Estado
──────────────────────────────────────────────────────
Uranio-235   ²³⁵U     92   235  235.0439299     ☢ Radiact.
Plutonio-239 ²³⁹Pu    94   239  239.0521634     ☢ Radiact.
Carbono-12   ¹²C       6    12  12.0000000      ✓ Estable
```

---

## 🧪 Fórmulas de física

### Equivalencia masa-energía (Einstein, 1905)

$$E = mc^2$$

| Símbolo | Magnitud | Valor |
|---|---|---|
| `E` | Energía en reposo | Joules (J) |
| `m` | Masa en reposo | kilogramos (kg) |
| `c` | Velocidad de la luz | 299 792 458 m/s |

### Constantes utilizadas

```
c  = 299 792 458 m/s           (velocidad de la luz en el vacío)
1 u.m.a. = 1.66053906660 × 10⁻²⁷ kg   (unidad de masa atómica)
1 MeV    = 1.602176634 × 10⁻¹³ J       (megaelectronvoltio)
1 GeV    = 1.602176634 × 10⁻¹⁰ J       (gigaelectronvoltio)
1 kt TNT = 4.184 × 10¹²  J             (kilotón de TNT)
1 Mt TNT = 4.184 × 10¹⁵  J             (megatón de TNT)
```

### Conversiones de energía nuclear

```
E [MeV]  = E [J] × 6.241509074 × 10¹²
E [kt]   = E [J] / 4.184 × 10¹²
E [J]    = m [amu] × 1.66053906660 × 10⁻²⁷ × (299 792 458)²
```

> Datos de referencia de isótopos: [NUBASE2020](https://www.nndc.bnl.gov/nubase/)

---

## 🛠️ Stack tecnológico

| Tecnología | Versión | Propósito |
|---|---|---|
| [React](https://react.dev/) | 18.3 | Librería de UI con hooks |
| [Vite](https://vitejs.dev/) | 5.4 | Build tool y servidor de desarrollo |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4 | Estilos utility-first |
| [PostCSS](https://postcss.org/) | 8.5 | Procesamiento de CSS |
| [ESLint](https://eslint.org/) | 9.13 | Linting y calidad de código |
| [Vercel](https://vercel.com/) | — | Plataforma de despliegue |

---

## 🚀 Instalación local

### Prerrequisitos

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/MrProphecy/nuclear-calculator.git
cd nuclear-calculator

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en [http://localhost:5173](http://localhost:5173).

### Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo con HMR
npm run build    # Build de producción → /dist
npm run preview  # Previsualizar el build de producción
npm run lint     # Ejecutar ESLint
```

---

## ☁️ Deploy en Vercel

### Opción 1 — Un clic

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MrProphecy/nuclear-calculator)

### Opción 2 — CLI de Vercel

```bash
# Instalar Vercel CLI globalmente
npm install -g vercel

# Desplegar (primera vez: sigue el asistente de vinculación)
vercel

# Desplegar a producción
vercel --prod
```

### Opción 3 — GitHub Actions (CI/CD automático)

Vercel detecta automáticamente los pushes a `main` y realiza despliegues continuos. No se requiere configuración adicional.

> El proyecto no tiene variables de entorno: toda la lógica es client-side y no requiere secretos.

---

## 📁 Estructura del proyecto

```
nuclear-calculator/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── EnergyCalculator.jsx   # Módulo E = mc²
│   │   ├── UnitConverter.jsx      # Conversor de 13 unidades
│   │   └── IsotopeTable.jsx       # Tabla interactiva de isótopos
│   ├── data/
│   │   └── isotopes.js            # 20 isótopos (NUBASE2020)
│   ├── utils/
│   │   └── physics.js             # Constantes y funciones de cálculo
│   ├── App.jsx                    # Componente raíz con navegación por tabs
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 🌐 App en vivo

🔗 **[https://nuclear-calculator.vercel.app](https://nuclear-calculator.vercel.app)**

---

## 📄 Licencia

Distribuido bajo la licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para más información.

```
MIT License — Copyright (c) 2025 MrProphecy
```

---

## 👤 Autor

**MrProphecy**

- GitHub: [@MrProphecy](https://github.com/MrProphecy)

---

<div align="center">

Hecho con ❤️ y física cuántica · Solo uso educativo

⚛ · E = mc² · ☢

</div>
