/* ============================================================
   PROJECTS DATA
   ------------------------------------------------------------
   To add a project: copy the block below, paste it at the TOP
   of the PROJECTS array, and fill it in. The site renders it
   automatically — no HTML editing needed.

   {
     title: "Project name",
     status: "IN PROGRESS",            // or "COMPLETED", "2025", etc.
     description: "1–3 sentences on the problem, your approach, and the result.",
     tags: ["CFD", "ANSYS Fluent"],    // also used as filter buttons
     image: "assets/my-image.jpg",     // put image in /assets, or use "" for a styled placeholder
     link: ""                          // optional URL (report, video, GitHub) — "" hides the link
   },
   ============================================================ */

const PROJECTS = [
  {
    title: "CFD Analysis of Submarine Sail",
    status: "MAR 2025 — NOV 2025 · LEAD SIMULATION ENGINEER",
    description:
      "Led a 4-person research team investigating Reynolds number effects on unsteady " +
      "hydrodynamic loads and vortex shedding of a BB2 submarine sail, developing " +
      "high-fidelity URANS and LES simulations in ANSYS Fluent. Delivered an " +
      "industry-standard technical report with design recommendations to reduce " +
      "flow-induced fatigue and hydroacoustic noise.",
    tags: ["CFD", "ANSYS Fluent", "URANS / LES", "Technical reporting"],
    image: "",
    link: "",
  },
  {
    title: "CLA 45 Strut Brace Design & Analysis",
    status: "MAR 2026 — CURRENT",
    description:
      "Designed a Mercedes-Benz CLA 45 AMG strut tower brace in Fusion 360, " +
      "establishing a fixed-free cantilever load case with analytical stress " +
      "verification under a 6,000 N applied load. Validated hand calculations with " +
      "static structural FEA in ANSYS Mechanical to assess the rectangular tube " +
      "section geometry.",
    tags: ["FEA", "ANSYS Mechanical", "Fusion 360", "Hand calcs"],
    image: "assets/strut-brace.jpg",
    link: "",
  },
  {
    title: "Embedded Motion Control System",
    status: "JUN 2026 — CURRENT",
    description:
      "Constructing a 6-DOF robotic arm using an Arduino Uno and PLA 3D-printed " +
      "components, implementing joystick-based servo control to build practical " +
      "skills in embedded systems, electronics and mechatronics.",
    tags: ["Arduino", "Embedded", "3D Printing", "Mechatronics"],
    image: "",
    link: "",
  },
  {
    title: "Naval Outfitting Design — Ghenova / Navantia",
    status: "NOV 2024 — FEB 2025 · LAS PALMAS, SPAIN",
    description:
      "Production-ready technical drawings in FORAN with GD&T, weld symbols and naval " +
      "tolerancing standards. 3D CAD design of ship outfitting components — profiles, " +
      "stiffeners, frames and panels — in CATIA V5 and FORAN to manufacturing and " +
      "classification standards, within a Windchill PLM environment.",
    tags: ["FORAN", "CATIA V5", "GD&T", "Naval"],
    image: "",
    link: "",
  },
];
