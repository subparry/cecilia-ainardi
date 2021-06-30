import metodoainardi from "../components/assets/images/metodoainardi.png";
import {
  aboutMeText,
  ainardiMethodText,
  bachFlowersText,
  biomagnetismText,
  nmgText,
} from "./sectionsTextContent";

export const sections = [
  { label: "Inicio", path: "/", noRoute: true },
  {
    label: "Método Ainardi",
    path: "/metodo-ainardi",
    imgUrl: metodoainardi,
    wrappedText: ainardiMethodText,
  },
  {
    label: "Nueva Medicina Germánica",
    path: "/nmg",
    imgUrl: metodoainardi,
    wrappedText: nmgText,
  },
  {
    label: "Flores de Bach",
    path: "/flores-de-bach",
    imgUrl: metodoainardi,
    wrappedText: bachFlowersText,
  },
  {
    label: "Biomagnetismo",
    path: "/biomagnetismo",
    imgUrl: metodoainardi,
    wrappedText: biomagnetismText,
  },
  {
    label: "Sobre mí",
    path: "/sobre-mi",
    imgUrl: metodoainardi,
    wrappedText: aboutMeText,
  },
];
