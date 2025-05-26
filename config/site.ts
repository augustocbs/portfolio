export const siteConfig = {
  name: "augustocbs.com.br",
  url: "https://augustocbs.com.br",
  description: "Portfolio de Augusto Cesar",
  links: {
    shadcn: "https://ui.shadcn.com/",
    github: "https://github.com/augustocbs/portfolio",
    githubProfile: "https://github.com/augustocbs",
    email: "mailto:augustoc.bsilveira@gmail.com",
    githubUsername: "augustocbs",
  },
  projects: {
    sebrae: {
      title:
        "SEBRAE Ingresse · Plataforma digital para capacitação de empreendedores",
      description:
        "Plataforma digital inovadora desenvolvida exclusivamente para o SEBRAE, oferecendo um ambiente completo de aprendizagem com cursos, mentorias e ferramentas essenciais para o desenvolvimento empresarial. Facilita o acesso a conteúdos educacionais premium e fornece suporte personalizado para empreendedores em diferentes estágios de negócio.",
      link: "https://hub.sebraeingresse.com.br",
      slug: "sebrae",
    },
    livid: {
      title:
        "LIVID · Prova de Vida Digital, Consulta de Óbito e Recadastramento Automatizado",
      description:
        "Solução completa para prova de vida digital, atualização cadastral e verificação de óbitos. Oferece integração via API com sistemas corporativos, garantindo segurança, agilidade e conformidade em processos de validação de dados.",
      link: "https://livid.com.br/",
      slug: "livid",
    },
    buscaGlobal: {
      title: "Busca Global · Sistema Integrado de Certidões",
      description:
        "Sistema pioneiro que unifica o acesso e emissão de certidões cartoriais em toda América Latina. Oferece uma interface intuitiva para busca, solicitação e emissão de documentos, integrando cartórios de diferentes países e automatizando processos burocráticos tradicionalmente complexos.",
      link: "https://busca.global",
      slug: "buscaGlobal",
    },
    way: {
      title: "WAY Odontologia · Assistente Digital Odontológico",
      description:
        "Aplicativo especializado que revoluciona a prática odontológica, fornecendo suporte baseado em evidências para diagnósticos e planejamentos clínicos. Combina inteligência artificial com protocolos clínicos validados, permitindo que profissionais e estudantes tomem decisões mais precisas e seguras no tratamento de seus pacientes.",
      link: "https://wayodontologia.com.br",
      slug: "way",
    },
  },
};

export type SiteConfig = typeof siteConfig;

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};
