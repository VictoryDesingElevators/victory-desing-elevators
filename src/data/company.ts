import { Company } from "../interfaces/company";

export const company: Company = {
  // Información general
  name: "Victory Desing Elevators",

  slogan:
    "Soluciones para sistemas de transporte vertical y procesos metalmecánicos.",

  description:
    "Empresa colombiana especializada en el diseño, fabricación y desarrollo de soluciones para sistemas de transporte vertical, procesos metalmecánicos y fabricación de componentes industriales.",

  // Ubicación
  address: "Calle 72 #63-49",
  city: "Bogotá D.C.",
  country: "Colombia",

  // Contacto
  emails: [
    "ingenieria@victoryelevator.com.co",
    "comercial@victoryelevator.com.co",
  ],

  phones: [
    "+57 322 221 3527",
    "+57 304 556 2090",
    "+57 350 860 5935",
  ],

  // Horarios
  schedule: {
    weekdays: {
      days: "Lunes a Viernes",
      morning: "8:00 AM - 1:00 PM",
      afternoon: "2:00 PM - 5:00 PM",
    },

    saturday: {
      days: "Sábados",
      morning: "8:00 AM - 12:00 PM",
    },
  },


 // Archivos
  catalog: "/catalog/catalogo-victory.pdf",

  // Estadísticas
  stats: {
    projects: "100+",
    precision: "100%",
    support: "100%",
  },

  // Redes (las dejamos listas para el futuro)
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    whatsapp: "",
  },
};