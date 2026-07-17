import Image from "next/image";
import { Award, Building2, Wrench } from "lucide-react";

import { Container } from "./ui/Container";
import { SectionTitle } from "./ui/SectionTitle";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { company } from "@/data/company";

export function About() {
  return (
    <section
      id="nosotros"
      className="py-28 bg-secondary/10"
    >
      <Container>

        <SectionTitle
          subtitle="Victory Desing Elevators es una empresa colombiana especializada en el diseño, 
          fabricación, instalación y mantenimiento de soluciones para sistemas de elevación, 
          comprometida con la calidad, la seguridad y la innovación."
        >
          ¿Quiénes Somos?
        </SectionTitle>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Imagen */}

          <div>

            <Image
              src="/images/cabine.jpg"
              alt="Victory Desing Elevators"
              width={700}
              height={700}
              className="rounded-3xl shadow-2xl object-cover w-full h-[550px]"
            />

          </div>

          {/* Información */}

          <div>

            <h3 className="text-3xl font-bold text-foreground">

              Construimos soluciones que elevan la confianza.

            </h3>

            <p className="mt-6 text-gray-600 leading-8">

              En {company.name} trabajamos para ofrecer soluciones
              integrales para proyectos residenciales, comerciales e
              industriales. Nuestro equipo combina experiencia,
              tecnología y materiales de alta calidad para desarrollar
              productos confiables y duraderos.

            </p>

            <p className="mt-6 text-gray-600 leading-8">

              Nuestra misión es brindar productos y servicios que
              cumplan con los más altos estándares de seguridad,
              acompañando a nuestros clientes durante todo el proceso de 
              diseño y ejecución de sus proyectos, asegurando su satisfacción 
              y confianza.

            </p>

            <div className="mt-10">

              <Button href="#contacto">
                Solicitar Asesoría
              </Button>

            </div>

          </div>

        </div>

        {/* Características */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <Card>

            <Award
              size={45}
              className="text-primary"
            />

            <h3 className="mt-5 text-2xl font-bold">

              Ingeniería Especializada

            </h3>

            <p className="mt-4 text-gray-600 leading-7">

              Desarrollamos soluciones para sistemas de elevación y
              procesos metalmecánicos mediante ingeniería especializada,
              adaptándonos a los requerimientos de cada proyecto.

            </p>

          </Card>

          <Card>

            <Building2
              size={45}
              className="text-primary"
            />

            <h3 className="mt-5 text-2xl font-bold">

              Fabricación Especializada

            </h3>

            <p className="mt-4 text-gray-600 leading-7">

              Fabricamos elevadores y componentes metálicos utilizando
              procesos industriales de alta precisión, garantizando 
              soluciones personalizadas para cada cliente.

            </p>

          </Card>

          <Card>

            <Wrench
              size={45}
              className="text-primary"
            />

            <h3 className="mt-5 text-2xl font-bold">

            Procesos Industriales

            </h3>

            <p className="mt-4 text-gray-600 leading-7">

            Contamos con maquinaria especializada para 
            corte láser y doblado de lámina, permitiéndonos 
            desarrollar piezas con precisión y excelentes acabados.

            </p>

          </Card>

        </div>

      </Container>
    </section>
  );
}