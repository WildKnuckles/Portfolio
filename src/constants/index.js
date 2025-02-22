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
  import landing from '../assets/landing.png'
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
      title: "Frontend Dev",
      icon: web,
    },
    {
      title: "Reactjs Dev",
      icon: mobile,
    },
    {
      title: "Electron Dev",
      icon: backend,
    },
    {
      title: "Nextjs",
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
      title: "Web Dev Reactjs",
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
      title: "Frontend Dev",
      company_name: "Data Cloud - Contabilidade digital",
      icon: nodejs,
      iconBg: "#383E56",
      date: "2022 - ...",
      points: [
        "Desenvolver softwares Saas, Landing Pages, com paletas de cores padronizadas, telas pixel perfect, design responsivo, para garantir uma comunicação visual coerente do Software.",
        "Criar layouts atraentes e funcionais para websites, aplicativos móveis e outras plataformas digitais, utilizando ferramentas como Webflow, Sketch ou Figma.",
        "Elaborar componentes UI reutilizáveis, como headers, hero, forms, footers, etc. Garantindo alta qualidade no Software e impacto visual.",
        "Colaborar com equipes de marketing, UI/UX e desenvolvimento Backend para garantir que o Software atenda aos objetivos do projeto e às necessidades do usuário.",
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
      name: "Gerador de relatórios",
      description:
        "Documente as reuniões de forma mais fácil utilizando o gerador de relatórios em pdf, entre em contacto comigo para customizá-lo",
      tags: [
        {
          name: "figma",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://pdf-gen-rosy.vercel.app",
    },
    {
      name: "ZenitGPT Chat",
      description:
        "Protótipo de um live chat projectado para facilitar a conversação entre os usuários. Chatbots automatizam interações, fornecendo respostas instantâneas e personalizadas, melhorando o atendimento ao cliente e aumentando a eficiência operacional das empresas.",
      tags: [
       
        {
          name: "figma",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://www.figma.com/design/vaEHl6mvetwD1i4JXv97ub/Live-Chat-%2F-AI-Chatbot-Component-for-website-prototypes-(Community)?node-id=234-6572&t=rW3XMDA71wx32VPy-0",
    },
    {
      name: "CNIILP Angola",
      description:
        "Uma página para a Comissão Nacional do Instituto Internacional da Língua Portuguesa",
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
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://cniilp-ao-client.vercel.app/",
    },
    {
      name: "IITECH Landing Page",
      description:
        "Página de apresentação dos serviços personalizados de uma startup angolana.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "mobile",
          color: "pink-text-gradient",
        },
      ],
      image: landing,
      source_code_link: "https://cniilp-ao-client.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };