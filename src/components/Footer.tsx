import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUp,
} from "lucide-react";

import { Container } from "./ui/Container";
import { Button } from "./ui/Button";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-8">

      <Container>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* ================= EMPRESA ================= */}

          <div>

            <div className="flex items-center gap-4">

              <Image
                src="/images/logo.png"
                alt="Victory Elevator"
                width={80}
                height={80}
                className="h-16 w-auto"
              />

              <div>

                <h3 className="text-2xl font-bold text-primary">
                  Victory Desing Elevators
                </h3>

                <p className="text-sm text-gray-400">
                  Ingeniería para sistemas de elevación
                </p>

              </div>

            </div>

            <p className="mt-6 leading-8 text-gray-300">

              Diseñamos y fabricamos soluciones para
              elevadores con altos estándares de calidad,
              seguridad e innovación.

            </p>

          </div>

          {/* ================= ENLACES ================= */}

          <div>

            <h3 className="text-2xl font-bold text-primary mb-6">

              Navegación

            </h3>

            <ul className="space-y-4">

              <li>
                <a href="#inicio" className="hover:text-primary transition">
                  Inicio
                </a>
              </li>

              <li>
                <a href="#nosotros" className="hover:text-primary transition">
                  Nosotros
                </a>
              </li>

              <li>
                <a href="#servicios" className="hover:text-primary transition">
                  Servicios
                </a>
              </li>

              <li>
                <a href="#productos" className="hover:text-primary transition">
                  Productos
                </a>
              </li>

              <li>
                <a href="#proyectos" className="hover:text-primary transition">
                  Proyectos
                </a>
              </li>

              <li>
                <a href="#contacto" className="hover:text-primary transition">
                  Contacto
                </a>
              </li>

            </ul>

          </div>

          {/* ================= CONTACTO ================= */}

          <div>

            <h3 className="text-2xl font-bold text-primary mb-6">

              Contacto

            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <MapPin className="text-primary mt-1" />

                <span>
                  Calle 72 #63-49
                  <br />
                  Bogotá D.C.
                </span>

              </div>

              <div className="flex gap-3">

                <Phone className="text-primary mt-1" />

                <span>

                    +57 304 556 2090
                    <br />
                    +57 322 221 3527
                    <br />
                    +57 350 860 5935

                </span>

              </div>

              <div className="flex gap-3">

                <Mail className="text-primary mt-1" />

                <span>

                  ingenieria@victoryelevator.com.co 
                  <br />
                  comercial@victoryelevator.com.co

                </span>

              </div>

            </div>

          </div>

          {/* ================= HORARIO ================= */}

          <div>

            <h3 className="text-2xl font-bold text-primary mb-6">

              Horario

            </h3>

            <div className="flex gap-3">

              <Clock className="text-primary mt-1" />

              <div>

                <p>

                  Lunes a Viernes

                </p>

                <p className="text-gray-300 mt-2">

                  8:00 AM - 1:00 PM

                </p>

                <p className="text-gray-300">

                  2:00 PM - 5:00 PM

                </p>

              </div>

            </div>

             <div className="flex gap-3">

             <Clock className="text-primary mt-1" />

              <div>

                <p>

                  Sabados

                </p>

                <p className="text-gray-300 mt-2">

                  8:00 AM - 12:00 PM

                </p>

                </div>

              </div>

            <div className="mt-8">

              <Button href="#inicio">

                <span className="flex items-center gap-2">

                  Volver arriba

                  <ArrowUp size={18} />

                </span>

              </Button>

            </div>

          </div>

        </div>

        {/* ================= COPYRIGHT ================= */}

        <div className="border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-center">

            © {new Date().getFullYear()} Victory Design Elevators.
            Todos los derechos reservados.

          </p>

          <p className="text-gray-500 text-sm">

            Diseñado con Next.js + React + Tailwind CSS

          </p>

        </div>

      </Container>

    </footer>
  );
}