import Image from "next/image";
import {
  Building2,
  MapPin,
} from "lucide-react";

import { projects } from "@/data/projects";
import { Container } from "./ui/Container";
import { SectionTitle } from "./ui/SectionTitle";
import { Card } from "./ui/Card";

export function Projects() {
  return (
    <section
      id="proyectos"
      className="py-32 bg-secondary/10"
    >
      <Container>

        <SectionTitle
          subtitle="Algunos de los proyectos que reflejan nuestro compromiso con la calidad, la seguridad y la innovación."
        >
          Proyectos Destacados
        </SectionTitle>

        <div className="grid lg:grid-cols-3 gap-10">

          {projects.map((project) => (

            <Card key={project.title}>

              <div className="overflow-hidden rounded-2xl bg-gray-100">

                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={900}
                  className="w-full h-auto object-contain transition duration-500 hover:scale-105"
                />

              </div>

              <div className="mt-8">

                <div className="flex items-center gap-3">

                  <Building2
                    size={28}
                    className="text-primary"
                  />

                  <h3 className="text-2xl font-bold">

                    {project.title}

                  </h3>

                </div>

                <div className="flex items-center gap-2 mt-4 text-gray-500">

                  <MapPin
                    size={18}
                    className="text-primary"
                  />

                  {project.location}

                </div>

                <p className="mt-6 text-gray-600 leading-8">

                  {project.description}

                </p>

              </div>

            </Card>

          ))}

        </div>

        <div className="mt-20 text-center">

          <h3 className="text-3xl font-bold text-foreground">

            ¿Tienes un proyecto en mente?

          </h3>

          <p className="mt-10 text-lg text-gray-600 max-w-3xl mx-auto leading-8">

            Nuestro equipo está preparado para asesorarte en el diseño,
            fabricación y modernización de soluciones para
            sistemas de elevación adaptadas a las necesidades de tu proyecto.

          </p>

        </div>

      </Container>
    </section>
  );
}