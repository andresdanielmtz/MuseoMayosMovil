import { ImageSourcePropType } from "react-native";

type OptionType = {
  [key: string]: boolean;
};

export type ActivityStructureType = {
  title?: string;
  image?: ImageSourcePropType;
  options: OptionType[];
}[];

export const pluralSection: ActivityStructureType = [
  {
    title: "Buuya -> Tierra",
    options: [{ buyyaim: false }, { buyyam: true }],
  },
  {
    title: "Waakas -> Vaca",
    options: [{ wakasim: true }, { wakasm: false }],
  },
  {
    title: "Yáhut -> Jefe o Gobierno",
    options: [{ Yáhuchim: false }, { Yáhuchim: true }],
  },
  {
    title: "Jiósia -> Papel",
    options: [{ Jiósiam: true }, { Jiósiachim: false }],
  },
  {
    title: "Kábbay -> Caballo",
    options: [{ Kábbaym: false }, { Kábbayim: true }],
  },
];

export const animalSection: ActivityStructureType = [
  {
    image: require('@/assets/images/coyote.png'),
    options: [{ Mótchi: true }, { Wóim: false }, { Muumum: false }],
  },
  {
    image: require('@/assets/images/avispa.jpg'),
    options: [{ Muumum: false }, { Mótchi: false }, { Wóim: true }],
  },
  {
    image: require('@/assets/images/tortuga.jpeg'),
    options: [{ Wóim: false }, { Muumum: true }, { Mótchi: false }],
  },
];

export const bodySection: ActivityStructureType = [
  {
    title: "Puxbam",
    options: [{ Boca: false }, { Nariz: false }, { Ojos: true } ],
  },
  {
    title: "Yékka",
    options: [{ Boca: false }, { Nariz: true }, { Ojos: false } ],
  },
  {
    title: "Mámmam",
    options: [{ Manos: true }, { Ojos: false }, { Boca: false } ],
  },
  {
    title: "Teeni",
    options: [{ Manos: false }, { Ojos: false }, { Boca: true } ],
  },
  {
    title: "Mam Óttam",
    options: [{ Manos: false }, { Brazo: true }, { Boca: false } ],
  },
];

export const pronounSection: ActivityStructureType = [
  {
    title: `Duerme = "Kotche" \n Yo duermo`,
    options: [{ "Eempo Kotche": false }, { "Ínapo Kotche": true }, { "Emee Kotche": false } ],
  },
  {
    title: `Come = "Jíbua" \n Ellos duermen`,
    options: [{ "Bempo Jíbua": true }, { "Áapo Jíbua": false }, { "Ínapo Jíbua": false } ],
  },
  {
    title: `Llora = "Buana" \n Él llora`,
    options: [{ "Empo Buana": false }, { "Ítapo Buana": false }, { "Áapo Buana": true } ],
  },
];

export const numberSection: ActivityStructureType = [
  {
    title: "Uno",
    options: [{ Woy: false }, { Búsani: false }, { Senu: true } ],
  },
  {
    title: "Diez",
    options: [{ Bátanay: false }, { "Woy Mámni": true }, { Naiki: false } ],
  },
  {
    title: "Cinco",
    options: [{ Mámni: true }, { Woy: false }, { Bajji: false } ],
  },
];
