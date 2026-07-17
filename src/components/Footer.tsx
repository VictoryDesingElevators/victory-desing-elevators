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
import { company } from "@/data/company";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-8">

      <Container>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Empresa */}

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
                  {company.name}
                </h3>

                <p className="text-sm text-gray-400">
                  Ingeniería para sistemas de elevación
                </p>

              </div>

            </div>

            <p className="mt-6 leading-8 text-gray-300">

              {company.description}

            </p>

          </div>

          {/* Enlaces */}

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

          {/*  Contacto */}

          <div>

            <h3 className="text-2xl font-bold text-primary mb-6">

              Contacto

            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <MapPin className="text-primary mt-1" />

                <span>
                  {company.address}
                  <br />
                  {company.city}
                </span>

              </div>

              <div className="flex gap-3">

                <Phone className="text-primary mt-1" />

                <div>

                  {company.phones.map((phone) => (

                    <p key={phone}>{phone}</p>

                  ))}

                </div>

              </div>

              <div className="flex gap-3">

                <Mail className="text-primary mt-1" />

                <div>

                  {company.emails.map((email) => (

                    <p key={email}>{email}</p>

                  ))}

                </div>

              </div>

            </div>

          </div>

          {/*  Horario  */}

          <div>

            <h3 className="text-2xl font-bold text-primary mb-6">

              Horario

            </h3>

            <div className="flex gap-3">

              <Clock className="text-primary mt-1" />

              <div>

                 <p>

                    {company.schedule.weekdays.days}

                  </p>

                  <p className="text-gray-300 mt-2">

                    {company.schedule.weekdays.morning}

                  </p>

                  <p className="text-gray-300">

                    {company.schedule.weekdays.afternoon}

                  </p>

              </div>

            </div>

             <div className="flex gap-3">

             <Clock className="text-primary mt-1" />

              <div>

                <p>

                  {company.schedule.saturday.days}

                </p>

                <p className="text-gray-300 mt-2">

                  {company.schedule.saturday.morning}

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

        {/*  Copyright  */}

        <div className="border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-center">

           © {new Date().getFullYear()} {company.name}.
            Todos los derechos reservados.

          </p>

        </div>

      </Container>

    </footer>
  );
}