import quality from "../assets/icons/quality.png"
import safe from "../assets/icons/safe.png"
import exclusive from "../assets/icons/exclusive.png"
import { SxProps } from "@mui/material";
import city from "../assets/city.png"

type NavLinkType = {
  name: string;
  link: string;
}

export const navLinks: NavLinkType[] = [
  { 
    name: "Rider", 
    link: "/" 
  },
  { 
    name: "Driver", 
    link: "/driver" 
  },
  { 
    name: "About", 
    link: "/about" 
  },
  { 
    name: "FAQ", 
    link: "/faq" 
  },
]

type ServiceContentType = {
  name: string;
  image: string;
  text: string;
}

export const serviceContents:ServiceContentType[]  = [
  {
    image: quality,
    name: "Quality choice",
    text: "Our car booking service prioritizes quality in every aspect. From well-maintained vehicles to transparent pricing and attentive customer support, expect an excellent rental experience with us."
  },
  {
    image: exclusive,
    name: "Exclusive service",
    text: "Experience exclusivity with our handpicked luxury vehicles and personalized assistance. Indulge in a remarkable driving experience like no other, where elegance and sophistication await."
  },
  {
    image: safe,
    name: "fast and safe",
    text: "Safety first. Our vehicles meet high standards, undergo regular maintenance, and feature advanced safety tech. Trust us for a worry-free rental experience that puts your well-being first."
  },
]

export const appSectionBg:SxProps = {
  background: `linear-gradient(to right, rgb(3, 4, 94, .95), rgba(3, 4, 94, .85)), url(${city})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}