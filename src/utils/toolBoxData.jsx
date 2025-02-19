import {
    FaCar,
    FaCropAlt,
    FaFolder,
    FaHeading,
    FaHeadphones,
    FaList,
    FaLock,
    FaParagraph,
    FaShippingFast,
    FaTable,
  } from "react-icons/fa";
import Heading from "../components/toolboxes/Heading/Heading.jsx"
import Paragraph from "../components/toolboxes/Paragraph/Paragraph.jsx"
import Contact from "../components/toolboxes/Contacts/Contact.jsx"
import YoutubeVideo from "../components/toolboxes/YoutubeVideo/YoutubeVideo.jsx";
import Image from "../components/toolboxes/images/Image.jsx";
import Table from "../components/toolboxes/tables/Table.jsx";
import Code from "../components/toolboxes/Code/Code.jsx";
  
  export const toolBoxItems = [
    {
      id: 1,
      title: "Heading",
      icon: <FaHeading />,
      content: Heading(),
    },
    {
      id: 2,
      title: "Paragrapgh",
      icon: <FaParagraph />,
      content: Paragraph(),
    },
    {
      id: 3,
      title: "Code",
      icon: <FaShippingFast />,
      content: Code(),
    },
    {
      id: 4,
      title: "Video",
      icon: <FaCar />,
      content: YoutubeVideo(),
    },
    {
      id: 5,
      title: "Image",
      icon: <FaCropAlt />,
      content: Image(),
    },
    {
      id: 6,
      title: "Table",
      icon: <FaTable />,
      content: Table(),
    },
    {
      id: 7,
      title: "Drawing",
      icon: <FaFolder />,
      content: "<h1>this is all drawing</h1>",
    },
    {
      id: 8,
      title: "Contacts",
      icon: <FaHeadphones />,
      content: Contact(),
    },
  
    {
      id: 9,
      title: "Images",
      icon: <FaLock />,
      content: "<h1>this is all images</h1>",
    },
    {
      id: 10,
      title: "Ul",
      icon: <FaList />,
      content: Contact(),
    },
  ];
  