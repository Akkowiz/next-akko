import Image from "next/image";
import GnomeIcon from "@/app/images/GnomeIcon.jpg";

const GnomeImage = () => {
  return (
    <Image
      className="w-full h-full object-cover"
      src={GnomeIcon}
      alt="Gnome Icon"
    />
  );
};

export default GnomeImage;
