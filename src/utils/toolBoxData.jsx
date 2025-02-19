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
import Contact from "../components/toolboxes/Contacts/Contact.jsx"
import Paragraph from "../components/toolboxes/Paragraph/Paragraph.jsx"
  
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
      title: "Shipping",
      icon: <FaShippingFast />,
      content: "<h2>this is shipping</h2>",
    },
    {
      id: 4,
      title: "Delivery",
      icon: <FaCar />,
      content: "<h1>this is all delivery</h1>",
    },
    {
      id: 5,
      title: "Content",
      icon: <FaCropAlt />,
      content: "<h1>this is all content</h1>",
    },
    {
      id: 6,
      title: "Table",
      icon: <FaTable />,
      content: Heading(),
    },
    {
      id: 7,
      title: "Drawing",
      icon: <FaFolder />,
      content: "<h1>this is all drawing</h1>",
    },
    {
      id: 8,
      title: "Content",
      icon: <FaHeadphones />,
      content: "<h1>this is all another content</h1>",
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
  