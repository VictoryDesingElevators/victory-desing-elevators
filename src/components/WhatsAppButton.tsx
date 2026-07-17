import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  const phone = "573222213527";

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        justify-center
        w-16
        h-16
        rounded-full
        bg-[#25D366]
        text-white
        shadow-2xl
        hover:scale-110
        hover:shadow-green-500/50
        transition-all
        duration-300
      "
    >
      <FaWhatsapp size={34} />
    </a>
  );
}