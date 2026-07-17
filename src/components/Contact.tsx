"use client";

import { useState } from "react";

import {
  MapPin,
  Clock,
  Phone,
  Mail,
  SendHorizonal,
} from "lucide-react";

import { Container } from "./ui/Container";
import { SectionTitle } from "./ui/SectionTitle";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { company } from "@/data/company";

    export function Contact() {

      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [phone, setPhone] = useState("");
      const [message, setMessage] = useState("");

        const sendWhatsApp = () => {

            // Eliminar espacios al inicio y al final
            const trimmedName = name.trim();
            const trimmedEmail = email.trim();
            const trimmedPhone = phone.trim();
            const trimmedMessage = message.trim();

            // Validar campos vacíos
            if (!trimmedName || !trimmedEmail || !trimmedPhone || !trimmedMessage) {
              alert("Por favor completa todos los campos.");
              return;
            }

            // Validar correo
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(trimmedEmail)) {
              alert("Ingresa un correo electrónico válido.");
              return;
            }

            const text = `*Solicitud de Cotización - ${company.name}*

          *Nombre:*
          ${trimmedName}

          *Correo:*
          ${trimmedEmail}

          *Teléfono:*
          ${trimmedPhone}

          *Proyecto:*
          ${trimmedMessage}
          `;

            const url = `https://wa.me/573222213527?text=${encodeURIComponent(text)}`;

            window.open(url, "_blank");

            // Limpiar formulario
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
    };

  return (
    <section
      id="contacto"
      className="py-2 bg-secondary/10"
    >
      <Container>

        <SectionTitle
          subtitle="¿Tienes un proyecto o necesitas asesoría? Nuestro equipo está listo para 
          ayudarte con soluciones seguras, modernas y adaptadas a tus necesidades."
        >
          Contáctanos
        </SectionTitle>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Información */}

          <Card>

            <h3 className="text-3xl font-bold text-foreground mb-8">
              Información de Contacto
            </h3>

            <div className="space-y-8">

              <div className="flex items-start gap-4">

                <MapPin
                  className="text-primary mt-1"
                  size={28}
                />

                <div>

                  <h4 className="font-semibold text-xl">
                    Dirección
                  </h4>

                  <p className="text-gray-600 mt-2">
                    {company.address}
                    <br />
                    {company.city}, {company.country}
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <Clock
                  className="text-primary mt-1"
                  size={28}
                />

                <div>

                  <h4 className="font-semibold text-xl">
                    Horario de Atención
                  </h4>

                  <div className="text-gray-600 mt-2">

                    <p>{company.schedule.weekdays.days}</p>

                    <p>{company.schedule.weekdays.morning}</p>

                    <p>{company.schedule.weekdays.afternoon}</p>

                    <br />

                    <p>{company.schedule.saturday.days}</p>

                    <p>{company.schedule.saturday.morning}</p>

                  </div>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <Phone
                  className="text-primary mt-1"
                  size={28}
                />

                <div>

                  <h4 className="font-semibold text-xl">
                    Teléfonos
                  </h4>

                  <div className="text-gray-600 mt-2 space-y-1">

                    {company.phones.map((phone) => (

                      <p key={phone}>{phone}</p>

                    ))}

                  </div>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <Mail
                  className="text-primary mt-1"
                  size={28}
                />

                <div>

                  <h4 className="font-semibold text-xl">
                    Correo
                  </h4>

                  <div className="text-gray-600 mt-2 space-y-1">

                    {company.emails.map((email) => (

                      <p key={email}>{email}</p>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          </Card>

          {/* Formulario */}

          <Card>

            <h3 className="text-3xl font-bold text-foreground mb-8">
              Solicita una Cotización
            </h3>

            <form
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >

              <div>

                <label className="block mb-2 font-medium">
                  Nombre completo
                </label>

                <input
                  type="text"
                  placeholder="Ingrese su nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-primary transition"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Correo electrónico
                </label>

                <input
                  type="email"
                  placeholder="correo@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-primary transition"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Teléfono
                </label>

                <input
                  type="tel"
                  placeholder="+57 300 000 0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-primary transition"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Mensaje
                </label>

                <textarea
                rows={5}
                placeholder="Cuéntanos sobre tu proyecto..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-xl border border-gray-300 p-4 outline-none resize-none focus:border-primary transition"
              />

              </div>

              <Button onClick={sendWhatsApp}>

                <span className="flex items-center gap-2">

                  Enviar Solicitud

                  <SendHorizonal size={18} />

                </span>

              </Button>

            </form>

          </Card>

        </div>

      </Container>
    </section>
  );
}