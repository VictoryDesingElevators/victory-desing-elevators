import {
  ArrowRight,
} from "lucide-react";

import { Container } from "./ui/Container";
import { SectionTitle } from "./ui/SectionTitle";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { services } from "@/data/services";

export function Services() {
  return (
    <section
      id="servicios"
      className="py-32 bg-secondary/10"
    >
      <Container>

        <SectionTitle
          subtitle="Fabricamos sistemas de elevación y brindamos servicios 
          especializados de corte láser y doblado de lámina para proyectos 
          residenciales, comerciales e industriales."
        >
          Nuestros Servicios
        </SectionTitle>

        <div className="grid lg:grid-cols-2 gap-10">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <Card key={service.title}>

                <div className="flex items-center gap-5">

                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">

                    <Icon
                      size={30}
                      className="text-background"
                    />

                  </div>

                  <h3 className="text-3xl font-bold text-foreground">

                    {service.title}

                  </h3>

                </div>

                <p className="mt-8 text-gray-600 leading-8">

                  {service.description}

                </p>

                <ul className="mt-8 space-y-4">

                  {service.items.map((item) => (

                    <li
                      key={item}
                      className="flex items-center gap-3"
                    >

                      <div className="w-2 h-2 rounded-full bg-primary"></div>

                      <span>{item}</span>

                    </li>

                  ))}

                </ul>

              </Card>

            );

          })}

        </div>

        {/* Llamado a la acción */}

        <div className="mt-20 text-center">

          <h3 className="text-3xl font-bold text-foreground">

          ¿Tienes un proyecto en mente? 

          </h3>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">

            Nuestro equipo está preparado para ayudarte a elegir la mejor
            solución en sistemas de elevación para tu edificio o proyecto,
            garantizando seguridad, eficiencia y un servicio personalizado.

          </p>

          <div className="mt-10 flex justify-center">

            <Button href="#contacto">

              <span className="flex items-center gap-2">

                Solicitar Asesoría

                <ArrowRight size={18} />

              </span>

            </Button>

          </div>

        </div>

      </Container>
    </section>
  );
}