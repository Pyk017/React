import { v4 } from "uuid";

export const CARDS_DATA = [
  { src: "/images/img1.jpg", matched: false, id: v4() },
  { src: "/images/img2.jpg", matched: false, id: v4() },
  { src: "/images/img3.jpg", matched: false, id: v4() },
  { src: "/images/img4.jpg", matched: false, id: v4() },
  { src: "/images/img5.jpg", matched: false, id: v4() },
  { src: "/images/img6.jpg", matched: false, id: v4() },
  { src: "/images/img7.jpg", matched: false, id: v4() },
  { src: "/images/img8.jpg", matched: false, id: v4() },
  { src: "/images/img9.jpg", matched: false, id: v4() },
];

export default function shuffleCards() {
  return CARDS_DATA.sort(() => Math.random() - 0.5);
}
