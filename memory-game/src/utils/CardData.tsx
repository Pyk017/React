import { v4 } from "uuid";

export type cardType = {
  src: string;
  id: string;
  unique_id: string;
  matched: boolean;
};

export const CARDS_DATA: cardType[] = [
  { src: "/images/img1.jpg", matched: false, id: v4(), unique_id: "" },
  { src: "/images/img2.jpg", matched: false, id: v4(), unique_id: "" },
  { src: "/images/img3.jpg", matched: false, id: v4(), unique_id: "" },
  { src: "/images/img4.jpg", matched: false, id: v4(), unique_id: "" },
  { src: "/images/img5.jpg", matched: false, id: v4(), unique_id: "" },
  { src: "/images/img6.jpg", matched: false, id: v4(), unique_id: "" },
  { src: "/images/img7.jpg", matched: false, id: v4(), unique_id: "" },
  { src: "/images/img8.jpg", matched: false, id: v4(), unique_id: "" },
];

export default function shuffleCards() {
  return [...CARDS_DATA, ...CARDS_DATA]
    .sort(() => Math.random() - 0.5)
    .map((card: cardType) => ({ ...card, unique_id: v4() }));
}
