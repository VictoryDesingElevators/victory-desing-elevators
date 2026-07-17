import Image from "next/image";
import {
  BookOpen,
  Download,
  Eye,
  CheckCircle2,
} from "lucide-react";

import { products } from "@/data/products";
import { Container } from "./ui/Container";
import { SectionTitle } from "./ui/SectionTitle";
import { Card } from "./ui/Card";
import { company } from "@/data/company";

export function Products() {
  return (
    <section
      id="productos"
      className="py-32 bg-background"
    >
      <Container>

        <SectionTitle
          subtitle="Descubre nuestras soluciones para sistemas de elevación y consulta todas las especificaciones técnicas en nuestro catálogo corporativo."
        >
          Catálogo de Productos
        </SectionTitle>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Imagen del catálogo */}

          <div>

            <Card>

              <Image
                src="/images/catalog-cover.jpg"
                alt="Catálogo Victory Desing Elevators"
                width={700}
                height={900}
                className="rounded-2xl object-cover w-full shadow-xl"
              />

            </Card>

          </div>

          {/* Información */}

          <div>

            <span className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full text-primary font-semibold">

              <BookOpen size={18} />

              Catálogo Corporativo

            </span>

            <h3 className="mt-6 text-4xl font-bold text-foreground">

              Conoce nuestras soluciones en fabricación de elevadores 
              y servicios metalmecánicos especializados.

            </h3>

            <p className="mt-6 text-lg text-gray-600 leading-8">

              Consulta nuestro catálogo completo y conoce las soluciones
              que Victory Desing Elevators ofrece para edificios residenciales,
              comerciales e industriales.

            </p>

            <div className="mt-10 space-y-5">

              {products.map((product) => (

                <div
                  key={product.title}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2 className="text-primary" />

                  <span>{product.title}</span>

                </div>

              ))}

            </div>

            {/* Botones */}

            <div className="mt-12 flex flex-wrap gap-5">

              {/* Ver PDF */}

              <a
                href={company.catalog}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-3
                  bg-primary
                  text-foreground
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  hover:bg-secondary
                  transition-all
                  duration-300
                  shadow-lg
                "
              >
                <Eye size={20} />

                Ver Catálogo

              </a>

              {/* Descargar PDF */}

              <a
                href={company.catalog}
                download
                className="
                  inline-flex
                  items-center
                  gap-3
                  border-2
                  border-primary
                  text-primary
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  hover:bg-primary
                  hover:text-foreground
                  transition-all
                  duration-300
                "
              >
                <Download size={20} />

                Descargar PDF

              </a>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}