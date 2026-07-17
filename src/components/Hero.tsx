import Image from "next/image";
import {
  Award,
} from "lucide-react";

import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { company } from "@/data/company";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-background pt-36 pb-36"
    >
      {/* Fondo decorativo */}

      <div className="absolute -left-32 top-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 w-[450px] h-[450px] rounded-full bg-secondary/20 blur-3xl"></div>

      <Container>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* TEXTO */}

          <div>

            <span className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary rounded-full px-5 py-2 text-primary font-semibold">

              <Award size={18} />

              Ingeniería • Diseño • Fabricación

            </span>

            <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-black leading-tight tracking-tight text-foreground">

              Elevamos

              <span className="block text-primary">

                la calidad

              </span>

              de tus proyectos

            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-9 max-w-xl">

              {company.name} desarrolla soluciones integrales para
              sistemas de transporte vertical, ofreciendo diseño, fabricación e asesoría
              para proyectos residenciales, comerciales e industriales con altos estándares de calidad
              y seguridad.

            </p>

            {/* Boton */}

            <div className="mt-12 flex flex-wrap gap-5">
                <Button
                  href="#productos"
                  variant="secondary"
        >
                  Ver Productos

                </Button>

            </div>

              <div className="grid grid-cols-3 gap-10 mt-20">

          </div>

         </div>

          {/*  Imagen  */}

          <div className="relative flex justify-center">

            <Image
              src="/images/hero.jpg"
              alt="Victory Desing Elevators"
              width={900}
              height={900}
              priority
              className="w-full max-w-xl h-[650px] rounded-[35px] object-cover shadow-2xl"
            />

            {/* Tarjeta superior */}

            <div className="absolute -top-8 -left-6 bg-background rounded-3xl shadow-xl border border-secondary p-6 w-72">

              <span className="text-primary font-semibold">

                {company.name}

              </span>

              <h3 className="text-2xl font-bold mt-2 text-foreground">

                Ingeniería Colombiana

              </h3>

              <p className="mt-4 text-gray-600 leading-7">

                Especialistas en diseño y fabricación de soluciones para sistemas de transporte vertical.

              </p>

            </div>

            {/* Tarjeta inferior */}

            <div className="absolute -bottom-8 right-0 bg-background rounded-3xl shadow-xl border border-secondary p-6 w-80">

              <div className="text-primary text-xl">

                ★★★★★

              </div>

              <h3 className="mt-3 text-2xl font-bold text-foreground">

                Compromiso con la Calidad

              </h3>

              <p className="mt-4 text-gray-600 leading-7">

                Nuestro equipo trabaja bajo estrictos estándares de
                calidad, seguridad e innovación para ofrecer soluciones
                eficientes y confiables.

              </p>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}