import {
  FaHistory,
  FaLanguage,
  FaCode,
  FaArtstation,
  FaGamepad,
  FaGlobe,
  FaBrain,
  FaBusinessTime,
} from "react-icons/fa";
import { RiMentalHealthLine } from "react-icons/ri";
import { MdOutlineScience } from "react-icons/md";
import { TbMathFunction } from "react-icons/tb";
import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  topic: string;
  id: number;
};

const educationTopics: Props[] = [
  {
    topic: "History",
    icon: <FaHistory />,
    id: 1,
  },
  {
    topic: "Health",
    icon: <RiMentalHealthLine />,
    id: 8,
  },
  {
    topic: "Language",
    icon: <FaLanguage />,
    id: 2,
  },
  {
    topic: "Math",
    icon: <TbMathFunction />,
    id: 3,
  },
  {
    topic: "Science",
    icon: <MdOutlineScience />,
    id: 4,
  },
  {
    topic: "Art",
    icon: <FaArtstation />,
    id: 6,
  },
  {
    topic: "Programming",
    icon: <FaCode />,
    id: 5,
  },

  {
    topic: "Gaming",
    icon: <FaGamepad />,
    id: 7,
  },

  {
    topic: "Geography",
    icon: <FaGlobe />,
    id: 9,
  },
  {
    topic: "Psychology",
    icon: <FaBrain />,
    id: 10,
  },
  {
    topic: "Business",
    icon: <FaBusinessTime />,
    id: 11,
  },
];

export default educationTopics;
