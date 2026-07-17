import {
  Factory,
  ScanLine,
  Cog,
  PackageCheck,
} from "lucide-react";

import { Service } from "@/interfaces/service";

export const services: Service[] = [
  {
    title: "Fabricación de Elevadores",

    icon: Factory,

    description:
      "Diseñamos y fabricamos sistemas de elevación para proyectos residenciales, comerciales e industriales, adaptándonos a los requerimientos de cada cliente.",

    items: [
      "Elevadores de pasajeros",
      "Elevadores panorámicos",
      "Elevadores de carga",
      "Soluciones personalizadas",
    ],
  },

  {
    title: "Corte Láser",

    icon: ScanLine,

    description:
      "Prestamos servicios de corte láser de alta precisión para piezas metálicas y componentes industriales, garantizando acabados limpios y exactos.",

    items: [
      "Corte de acero",
      "Piezas personalizadas",
      "Alta precisión",
      "Producción bajo pedido",
    ],
  },

  {
    title: "Doblado de Lámina",

    icon: Cog,

    description:
      "Realizamos procesos de doblado de lámina con maquinaria especializada para la fabricación de estructuras y componentes metálicos.",

    items: [
      "Doblado CNC",
      "Fabricación a medida",
      "Componentes metálicos",
      "Producción industrial",
    ],
  },

  {
    title: "Preensamble de Componentes",

    icon: PackageCheck,

    description:
      "Fabricamos y preensamblamos componentes como cabinas, pisos, puertas y otras estructuras para optimizar el proceso de montaje en obra.",

    items: [
      "Cabinas preensambladas",
      "Puertas y marcos",
      "Pisos para cabina",
      "Componentes listos para montaje",
    ],
  },
];