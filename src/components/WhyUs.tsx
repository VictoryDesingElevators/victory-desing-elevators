import {
  Award,
  ShieldCheck,
  Users,
  Wrench,
  Clock3,
  BadgeCheck,
} from "lucide-react";

import { Container } from "./ui/Container";
import { SectionTitle } from "./ui/SectionTitle";
import { Card } from "./ui/Card";
import { company } from "@/data/company";

const reasons = [
  {
    title: "Calidad Garantizada",
    icon: Award,
    description:
      "Trabajamos bajo estrictos estándares de calidad para ofrecer soluciones confiables, seguras y duraderas en cada proyecto.",
  },
  {
    title: "Seguridad",
    icon: ShieldCheck,
    description:
      "Todos nuestros procesos cumplen con los estándares técnicos y de seguridad requeridos para garantizar productos confiables.",
  },
  {
    title: "Personal Especializado",
    icon: Users,
    description:
      "Nuestro equipo está conformado por profesionales capacitados en ingeniería, diseño y fabricación de soluciones para sistemas de elevación.",
  },
  {
    title: "Tecnología de Fabricación",
    icon: Wrench,
    description:
      "Disponemos de maquinaria especializada para procesos industriales de corte láser y doblado de lámina con altos niveles de precisión.",
  },
  {
    title: "Soluciones Personalizadas",
    icon: Clock3,
    description:
      "Cada proyecto es desarrollado de acuerdo con las necesidades específicas del cliente, ofreciendo soluciones adaptadas a cada aplicación.",
  },
  {
    title: "Compromiso",
    icon: BadgeCheck,
    description:
      "Nos comprometemos a entregar productos que reflejen calidad, innovación y confianza, construyendo relaciones duraderas con nuestros clientes.",
  },
];

export function WhyUs() {
  return (
    <section
      id="whyus"
      className="py-32 bg-background"
    >
      <Container>

        <SectionTitle
          subtitle="Más que instalar elevadores, construimos relaciones de confianza ofreciendo soluciones seguras, modernas y adaptadas a cada proyecto."
        >
          ¿Por qué elegir  {company.name}?
        </SectionTitle>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {reasons.map((reason) => {

            const Icon = reason.icon;

            return (

              <Card key={reason.title}>

                <div className="flex items-center gap-4">

                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">

                    <Icon
                      size={30}
                      className="text-background"
                    />

                  </div>

                  <h3 className="text-2xl font-bold text-foreground">

                    {reason.title}

                  </h3>

                </div>

                <p className="mt-6 text-gray-600 leading-8">

                  {reason.description}

                </p>

              </Card>

            );

          })}

        </div>

        {/* Franja inferior */}

        <div className="mt-24 rounded-3xl bg-primary p-12 shadow-xl">

          <div className="grid lg:grid-cols-3 gap-10 text-center">

            <div>

              <h2 className="text-5xl font-black text-background">

                100%

              </h2>

              <p className="mt-3 text-background/90 text-lg">

               Compromiso con la calidad

              </p>

            </div>

            <div>

              <h2 className="text-5xl font-black text-background">

                +20

              </h2>

              <p className="mt-3 text-background/90 text-lg">

                Años de experiencia

              </p>

            </div>

            <div>

              <h2 className="text-5xl font-black text-background">

                100%

              </h2>

              <p className="mt-3 text-background/90 text-lg">

                Fabricación Personalizada

              </p>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}