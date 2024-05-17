import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  import dra from '../assets/dra.png'
  
  export const navLinks = [
    {
      id: "about",
      title: "Sobre",
    },
    {
      id: "work",
      title: "Trabalho",
    },
    {
      id: "contact",
      title: "Contacto",
    },
  ];
  
  const services = [
    {
      title: "Web Dev",
      icon: web,
    },
    {
      title: "React Native Dev",
      icon: mobile,
    },
    {
      title: "Backend Dev",
      icon: backend,
    },
    {
      title: "Criador de Conteúdo",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Dev",
      company_name: "Ministério da Educação",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Novembro 2023 - 2024",
      points: [
        "Desenvolvimento e manutenção de aplicações web usando React.js e outras tecnologias relacionadas.",
        "Collaborate with cross-functional teams, including designers, product managers, and teachers, to create high-quality products.",
        "Implementar design responsivo e garantir compatibilidade entre navegadores.",
        "Participar de revisões de código e fornecer feedback construtivo a outros desenvolvedores.",
      ],
    },
    {
      title: "Web Dev",
      company_name: "Freelancer",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "2022 - ...",
      points: [
        "Criação de conteúdo escrito, como artigos, blogs e posts em redes sociais, adaptado às necessidades do cliente e ao público-alvo.",
        "Realizar pesquisas de mercado e analisar dados para identificar tendências e oportunidades de crescimento para o negócio.",
        "Gerenciar campanhas de marketing digital, incluindo SEO, SEM, e-mail marketing e gestão de redes sociais, para aumentar a visibilidade online.",
        "Gerenciar campanhas de marketing digital, incluindo SEO, SEM, e-mail marketing e gestão de redes sociais, para aumentar a visibilidade online.",
      ],
    },
    {
      title: "Designer",
      company_name: "Lavousier Comercial",
      icon: shopify,
      iconBg: "#383E56",
      date: "2022 - 2023",
      points: [
        "Desenvolver identidades visuais, incluindo logotipos, paletas de cores e tipografias, para garantir uma comunicação visual coerente da marca.",
        "Criar layouts atraentes e funcionais para websites, aplicativos móveis e outras plataformas digitais, utilizando ferramentas como Adobe XD, Sketch ou Figma.",
        "Elaborar materiais gráficos impressos, como cartões de visita, panfletos e banners, garantindo alta qualidade de impressão e impacto visual.",
        "Colaborar com equipes de marketing e desenvolvimento para garantir que o design atenda aos objetivos do projeto e às necessidades do usuário.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Achei que era impossível fazer um site tão bonito quanto o nosso produto, mas o Johnny provou que eu estava errado.",
      name: "Dra. Paula Henriques",
      designation: "Diretora",
      company: "da CNIILP-Angola",
      image: dra,
    },
    {
      testimonial:
        "Estudou no IPIL e se tornou num grande desenvolvedor, meus parábens",
      name: "Edson Viegas",
      designation: "Sub - Diretor",
      company: "do IPIL",
      image: "",
    },
    {
      testimonial:
        "Eu acredito no seu potencial e também creio que tu irás longe",
      name: "António Cardoso",
      designation: "Meu",
      company: "Querido Pai",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "CNIILP Angola",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://cniilp-ao-client.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };