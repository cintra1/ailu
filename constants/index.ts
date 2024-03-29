export const navLinks = [
    {
      label: "Home",
      route: "/",
      icon: "/assets/icons/home.svg",
    },
    {
      label: "Restauração de Imagem",
      route: "/transformations/add/restore",
      icon: "/assets/icons/image.svg",
    },
    {
      label: "Preenchimento Generativo",
      route: "/transformations/add/fill",
      icon: "/assets/icons/stars.svg",
    },
    {
      label: "Remover Objeto",
      route: "/transformations/add/remove",
      icon: "/assets/icons/scan.svg",
    },
    {
      label: "Recolorir Objeto",
      route: "/transformations/add/recolor",
      icon: "/assets/icons/filter.svg",
    },
    {
      label: "Remover Fundo",
      route: "/transformations/add/removeBackground",
      icon: "/assets/icons/camera.svg",
    },
    {
      label: "Perfil",
      route: "/profile",
      icon: "/assets/icons/profile.svg",
    },
    {
      label: "Comprar Créditos",
      route: "/credits",
      icon: "/assets/icons/bag.svg",
    },
  ];
  
  export const plans = [
    {
      _id: 1,
      name: "Gratuito",
      icon: "/assets/icons/free-plan.svg",
      price: 0,
      credits: 0,
      inclusions: [
        {
          label: "Acesso básico",
          isIncluded: true,
        },
        {
          label: "Planos limitados",
          isIncluded: true,
        },
        {
          label: "Suporte Prioritário",
          isIncluded: false,
        },
        {
          label: "Prioridade nas Atualizações",
          isIncluded: false,
        },
      ],
    },
    {
      _id: 2,
      name: "Pacote Pro",
      icon: "/assets/icons/free-plan.svg",
      price: 7.50,
      credits: 10,
      inclusions: [
        {
          label: "10 Créditos",
          isIncluded: true,
        },
        {
          label: "Acesso Completo aos Serviços",
          isIncluded: true,
        },
        {
          label: "Suporte Prioritário",
          isIncluded: true,
        },
        {
          label: "Prioridade nas Atualizações",
          isIncluded: false,
        },
      ],
    },
    {
      _id: 3,
      name: "Pacote Premium",
      icon: "/assets/icons/free-plan.svg",
      price: 37.50,
      credits:  50,
      inclusions: [
        {
          label: "50 Créditos",
          isIncluded: true,
        },
        {
          label: "Acesso Completo aos Serviços",
          isIncluded: true,
        },
        {
          label: "Suporte Prioritário",
          isIncluded: true,
        },
        {
          label: "Prioridade nas Atualizações",
          isIncluded: true,
        },
      ],
    },
  ];
  
  export const transformationTypes = {
    restore: {
      type: "restore",
      title: "Restauração de Imagem",
      subTitle: "Aperfeiçoa imagens removendo ruído e imperfeições",
      config: { restore: true },
      icon: "image.svg",
    },
    removeBackground: {
      type: "removeBackground",
      title: "Remover Fundo",
      subTitle: "Remove o fundo da imagem utilizando a IA",
      config: { removeBackground: true },
      icon: "camera.svg",
    },
    fill: {
      type: "fill",
      title: "Preenchimento Generativo",
      subTitle: "Muda as dimensões de uma imagem utilizando a pintura com IA",
      config: { fillBackground: true },
      icon: "stars.svg",
    },
    remove: {
      type: "remove",
      title: "Remover Objeto",
      subTitle: "Identifica e elimina o objeto da imagem",
      config: {
        remove: { prompt: "", removeShadow: true, multiple: true },
      },
      icon: "scan.svg",
    },
    recolor: {
      type: "recolor",
      title: "Recolorir Objeto",
      subTitle: "Identifica e recolore o objeto da imagem",
      config: {
        recolor: { prompt: "", to: "", multiple: true },
      },
      icon: "filter.svg",
    },
  };
  
  export const aspectRatioOptions = {
    "1:1": {
      aspectRatio: "1:1",
      label: "Quadrado (1:1)",
      width: 1000,
      height: 1000,
    },
    "3:4": {
      aspectRatio: "3:4",
      label: "Retrato padrão (3:4)",
      width: 1000,
      height: 1334,
    },
    "9:16": {
      aspectRatio: "9:16",
      label: "Retrato celular (9:16)",
      width: 1000,
      height: 1778,
    },
  };
  
  export const defaultValues = {
    title: "",
    aspectRatio: "",
    color: "",
    prompt: "",
    publicId: "",
  };
  
  export const creditFee = -1;