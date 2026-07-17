import Image from "next/image";

import { Container } from "./ui/Container";
import { Button } from "./ui/Button";

export function Navbar() {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-background/90
        backdrop-blur-md
        border-b
        border-secondary/30
        shadow-sm
      "
    >
      <Container>

        <nav className="flex items-center justify-between h-24">

          {/* ================= Logo ================= */}

          <a
            href="#inicio"
            className="flex items-center gap-4"
          >
            <Image
              src="/images/icon.png"
              alt="Victory Elevator"
              width={65}
              height={65}
              className="w-auto h-auto"
            />

            <div>

              <h2 className="text-2xl font-bold text-primary">

                Victory Desing Elevators

              </h2>

              <p className="text-sm text-gray-500">

                Ingeniería para Sistemas de Elevación

              </p>

            </div>

          </a>

          {/* ================= Menú ================= */}

          <ul className="hidden lg:flex items-center gap-10 font-medium text-foreground">

            <li>
              <a
                href="#inicio"
                className="hover:text-primary transition-colors duration-300"
              >
                Inicio
              </a>
            </li>

            <li>
              <a
                href="#nosotros"
                className="hover:text-primary transition-colors duration-300"
              >
                Nosotros
              </a>
            </li>

            <li>
              <a
                href="#servicios"
                className="hover:text-primary transition-colors duration-300"
              >
                Servicios
              </a>
            </li>

            <li>
              <a
                href="#productos"
                className="hover:text-primary transition-colors duration-300"
              >
                Productos
              </a>
            </li>

            <li>
              <a
                href="#proyectos"
                className="hover:text-primary transition-colors duration-300"
              >
                Proyectos
              </a>
            </li>

            <li>
              <a
                href="#contacto"
                className="hover:text-primary transition-colors duration-300"
              >
                Contacto
              </a>
            </li>

          </ul>

          {/* ================= Botón ================= */}

          <div className="hidden lg:block">

            <Button href="#contacto">

              Solicitar Cotización

            </Button>

          </div>

        </nav>

      </Container>
    </header>
  );
}