import headlessImg from '../../assets/projects/headless.png';
import doshopyImg from '../../assets/projects/doshopy.png';
import zubocImg from '../../assets/projects/zuboc.png';
import thottathilImg from '../../assets/projects/thottathil.png';
import zircontradingImg from '../../assets/projects/zircontrading.png';
import tornadoImg from '../../assets/projects/tornado.png';
import spicknspanImg from '../../assets/projects/spicknspan.png';
import weatherImg from '../../assets/projects/weather.png';

// Placeholder for other projects
const placeholderImg = 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2800&auto=format&fit=crop';

export const projectsData = [
  {
    id: 1,
    number: "01",
    title: "Headless Storefront",
    category: "SHOPIFY HYDROGEN",
    description: "A state-of-the-art headless Shopify storefront decoupling the front end for full control over UX and speed.",
    technologies: ["Hydrogen", "React", "GraphQL"],
    image: headlessImg,
    categories: ["All", "Shopify", "E-Commerce"]
  },
  {
    id: 2,
    number: "02",
    title: "Zuboc",
    category: "SHOPIFY STORE",
    description: "Rebuilt the Shopify storefront from scratch while preserving the existing design using reusable OS 2.0 sections.",
    technologies: ["Shopify", "Liquid", "UX"],
    image: zubocImg,
    categories: ["All", "Shopify", "E-Commerce"]
  },
  {
    id: 3,
    number: "03",
    title: "Doshopy",
    category: "SAAS ECOSYSTEM",
    description: "A multi-tenant e-commerce app ecosystem utilizing Laravel and Shopify API for managing store catalogs.",
    technologies: ["Laravel", "React", "Node.js"],
    image: doshopyImg,
    categories: ["All", "Web Apps", "UI/UX"]
  },
  {
    id: 4,
    number: "04",
    title: "Thottathil Silks",
    category: "CUSTOM THEME",
    description: "A fully custom Shopify theme from scratch using reusable Liquid sections, blocks, and snippets.",
    technologies: ["Shopify", "Tailwind", "UI/UX"],
    image: thottathilImg,
    categories: ["All", "Shopify", "E-Commerce"]
  },
  {
    id: 5,
    number: "05",
    title: "Zircon Concepts",
    category: "SHOPIFY STORE",
    description: "Extended a production Shopify theme for a UAE-based storefront with customized sections.",
    technologies: ["Shopify", "Liquid", "CSS3"],
    image: zircontradingImg,
    categories: ["All", "Shopify", "E-Commerce"]
  },
  {
    id: 6,
    number: "06",
    title: "Tornado Store",
    category: "SHOPIFY STORE",
    description: "Developed a full Shopify e-commerce site from scratch including custom theme structure.",
    technologies: ["Liquid", "Tailwind", "Lenis.js"],
    image: tornadoImg,
    categories: ["All", "Shopify", "E-Commerce"]
  },
  {
    id: 7,
    number: "07",
    title: "Spick & Span",
    category: "WORDPRESS THEME",
    description: "A custom WordPress theme from scratch with reusable, CMS-driven UI components.",
    technologies: ["WordPress", "PHP", "Tailwind"],
    image: spicknspanImg,
    categories: ["All", "Web Apps"]
  },
  {
    id: 8,
    number: "08",
    title: "Weather App",
    category: "FULL-STACK APP",
    description: "A full-stack weather app integrating OpenWeatherMap API for real-time data.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: weatherImg,
    categories: ["All", "Web Apps"]
  }
];

export const filters = ["All", "Shopify", "Web Apps", "E-Commerce", "UI/UX"];
