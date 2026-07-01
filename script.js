const profileLinks = {
  github: "https://github.com/rhyan-rpone",
  linkedin: "https://www.linkedin.com/in/rhyan-pablo-40360320a/",
};

const projects = [
  // ── APLICAÇÕES ────────────────────────────────────────────────
  {
    title: "Agência de Marketing com Agentes IA",
    area: "GenAI",
    type: "AI Agents",
    category: "genai",
    kind: "app",
    impact: "Sistema multi-agente que gera campanhas de marketing completas a partir de um briefing.",
    description:
      "Aplicação multi-agent para geração automatizada de campanhas de marketing a partir de um briefing. Agentes especializados em pesquisa, criação e revisão de conteúdo orquestrados via LangGraph, com busca web em tempo real via Tavily, backend FastAPI, interface Streamlit e deploy reproduzível com Docker.",
    stack: "Python · FastAPI · Streamlit · LangGraph · OpenAI · Tavily · Docker",
    repoUrl: "https://github.com/rhyan-rpone/data-analyst-ai-agent1",
  },
  {
    title: "Time de Dados com Agentes IA",
    area: "GenAI",
    type: "AI Agents",
    category: "genai",
    kind: "app",
    impact: "Agentes especializados que interpretam perguntas, processam datasets e geram insights com IA.",
    description:
      "Sistema multi-agente para análise de dados com IA generativa: interpreta perguntas em linguagem natural, entende o contexto da análise, processa datasets automaticamente, gera insights e cria visualizações interativas. Arquitetura modular com agentes independentes, cada um responsável por uma etapa do processo analítico.",
    stack: "Python · LangGraph · OpenAI · NLP · Data Visualization · Modular Architecture",
    repoUrl: "https://github.com/rhyan-rpone/data-analyst-ai-agent1",
  },
  // ── NOTEBOOKS ─────────────────────────────────────────────────
  {
    title: "Aura Agent",
    area: "Agentes",
    type: "GenAI",
    category: "genai",
    kind: "notebook",
    impact: "Notebook de agente com foco em orquestração e fluxos inteligentes.",
    description:
      "Projeto em notebook para experimentar a construção de um agente de IA, conectando raciocínio, ferramentas e fluxo de execução em uma estrutura prática de prototipação.",
    stack: "Python · LangGraph · LLM Agents · Notebook",
    repoUrl:
      "https://github.com/rhyan-rpone/ai-and-data_analysis-notebooks/blob/main/Aura_Agent.ipynb",
  },
  {
    title: "Data Science aplicado a Recursos Humanos",
    area: "People Analytics",
    type: "Data Science",
    category: "ds",
    kind: "notebook",
    impact: "Exploração e modelagem de dados de RH para extrair padrões acionáveis.",
    description:
      "Projeto de Data Science em RH com análise exploratória, preparação de dados e investigação de variáveis ligadas a comportamento, retenção e decisões de gestão.",
    stack: "Python · Pandas · Data Science · People Analytics",
    repoUrl:
      "https://github.com/rhyan-rpone/ai-and-data_analysis-notebooks/blob/main/DataScience_Recursos_Humanos.ipynb",
  },
  {
    title: "Segmentação de Clientes com K-Means",
    area: "Marketing",
    type: "Data Science",
    category: "ds",
    kind: "notebook",
    impact: "Clusters de clientes gerados com K-Means para estratégias de marketing direcionadas.",
    description:
      "Análise e segmentação de clientes de campanhas de marketing utilizando K-Means, com EDA completa, definição do número ideal de clusters e interpretação dos perfis gerados para apoiar decisões de negócio.",
    stack: "Python · Scikit-learn · K-Means · EDA · Data Visualization",
    repoUrl:
      "https://colab.research.google.com/github/rhyan-rpone/ai-and-data_analysis-notebooks/blob/main/marketing_campaign_k_means_eda.ipynb",
  },
  {
    title: "Previsão de Vendas com Facebook Prophet",
    area: "Varejo",
    type: "Data Science",
    category: "ds",
    kind: "notebook",
    impact: "Forecast de vendas de uma rede de lojas com modelo de série temporal.",
    description:
      "Previsão de vendas de uma rede de lojas utilizando Facebook Prophet, com análise exploratória dos dados históricos, tunagem do modelo e projeções de demanda para apoiar planejamento operacional e estoque.",
    stack: "Python · Facebook Prophet · Time Series · EDA · Forecasting",
    repoUrl:
      "https://colab.research.google.com/github/rhyan-rpone/ai-and-data_analysis-notebooks/blob/main/enterprise_sales_predict.ipynb",
  },
  {
    title: "Random Forest para Diabetes",
    area: "Saúde",
    type: "Machine Learning",
    category: "ml",
    kind: "notebook",
    impact: "Modelo supervisionado para classificação preditiva em dados de saúde.",
    description:
      "Notebook de Machine Learning usando Random Forest para trabalhar previsão/classificação de diabetes, com preparação de dados, treinamento e avaliação do modelo.",
    stack: "Python · Scikit-learn · Random Forest · Classification",
    repoUrl:
      "https://github.com/rhyan-rpone/ai-and-data_analysis-notebooks/blob/main/RandomForest_Diabetes.ipynb",
  },
  {
    title: "Análise de Tempo de Uso em Social Media",
    area: "Social Media",
    type: "Data Analysis",
    category: "data",
    kind: "notebook",
    impact: "Investigação de padrões digitais entre jovens e adolescentes.",
    description:
      "Análise exploratória sobre tempo de uso de redes sociais por jovens e adolescentes, buscando padrões de comportamento, distribuição e possíveis relações entre variáveis.",
    stack: "Python · Pandas · EDA · Data Visualization",
    repoUrl:
      "https://github.com/rhyan-rpone/ai-and-data_analysis-notebooks/blob/main/Analise_Social_Media_Tempo_de_Uso_Jovens_e_Adolescentes.ipynb",
  },
  {
    title: "Análise do Mercado de Games",
    area: "Games",
    type: "Data Analysis",
    category: "data",
    kind: "notebook",
    impact: "Exploração de dados de mercado para entender desempenho e tendências.",
    description:
      "Notebook de análise de mercado de games, com foco em leitura de categorias, comportamento dos dados e visualizações para apoiar interpretação de tendências.",
    stack: "Python · Pandas · EDA · Market Analysis",
    repoUrl:
      "https://github.com/rhyan-rpone/ai-and-data_analysis-notebooks/blob/main/An%C3%A1lise_Mercado_Games.ipynb",
  },
  {
    title: "Social Media Analysis",
    area: "Marketing",
    type: "Data Analysis",
    category: "data",
    kind: "notebook",
    impact: "Análise de posts e engajamento em redes sociais.",
    description:
      "Projeto de análise de dados de social media para avaliar posts, engajamento e comportamento de performance em redes sociais.",
    stack: "Python · Pandas · Social Media Analytics · Data Visualization",
    repoUrl:
      "https://github.com/rhyan-rpone/ai-and-data_analysis-notebooks/blob/main/Social_Media_Analysis.ipynb",
  },
];

const appGrid = document.querySelector("#appGrid");
const grid = document.querySelector("#projectGrid");
const filterButtons = document.querySelectorAll("[data-filter]");
const revealTargets = document.querySelectorAll(
  ".section-heading, .about-copy, .competencies, .stack-block, .featured-carousel, .certificate-grid, .contact-list, .contact-form",
);
const featuredCarousel = document.querySelector("[data-featured-carousel]");

const revealObserver =
  "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.14 },
      )
    : null;

function observeReveal(element) {
  element.classList.add("reveal");

  if (!revealObserver) {
    element.classList.add("is-visible");
    return;
  }

  revealObserver.observe(element);
}

function appCard(project) {
  const article = document.createElement("article");
  article.className = "app-card";
  article.dataset.category = project.category;

  const badge = document.createElement("span");
  badge.className = "app-badge";
  badge.textContent = "Projeto · " + project.type;

  const title = document.createElement("h3");
  title.textContent = project.title;

  const impact = document.createElement("p");
  impact.className = "app-impact";
  impact.textContent = project.impact;

  const description = document.createElement("p");
  description.className = "app-description";
  description.textContent = project.description;

  const stackWrap = document.createElement("div");
  stackWrap.className = "app-stack";
  project.stack.split(" · ").forEach((tech) => {
    const chip = document.createElement("span");
    chip.textContent = tech;
    stackWrap.append(chip);
  });

  article.append(badge, title, impact, description, stackWrap);

  if (project.repoUrl) {
    const link = document.createElement("a");
    link.className = "app-link";
    link.href = project.repoUrl;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = "Ver repositório →";
    article.append(link);
  }

  return article;
}

function renderApps() {
  if (!appGrid) return;
  const apps = projects.filter((p) => p.kind === "app");
  appGrid.replaceChildren(...apps.map(appCard));
  appGrid.querySelectorAll(".app-card").forEach(observeReveal);
}

function projectCard(project) {
  const article = document.createElement("article");
  article.className = "project-card";
  article.dataset.category = project.category;

  const meta = document.createElement("div");
  meta.className = "project-meta";

  [project.area, project.type].forEach((label) => {
    const tag = document.createElement("span");
    tag.className = "project-kicker";
    tag.textContent = label;
    meta.append(tag);
  });

  const title = document.createElement("h3");
  title.textContent = project.title;

  const impact = document.createElement("p");
  impact.className = "project-impact";
  impact.textContent = project.impact;

  const description = document.createElement("p");
  description.className = "project-description";
  description.textContent = project.description;

  const stack = document.createElement("p");
  stack.className = "project-stack";
  stack.textContent = project.stack;

  article.append(meta, title, impact, description, stack);

  if (project.repoUrl) {
    const link = document.createElement("a");
    link.className = "project-link";
    link.href = project.repoUrl;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = "Abrir notebook";
    article.append(link);
  }

  return article;
}

function renderProjects(filter = "todos") {
  const notebooks = projects.filter((p) => p.kind === "notebook");
  const filtered =
    filter === "todos" ? notebooks : notebooks.filter((p) => p.category === filter);

  grid.replaceChildren(...filtered.map(projectCard));
  grid.querySelectorAll(".project-card").forEach(observeReveal);
}

function setActiveFilter(activeButton) {
  filterButtons.forEach((button) => {
    const isActive = button === activeButton;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function applyProfileLinks() {
  document.querySelectorAll("[data-link]").forEach((anchor) => {
    const key = anchor.dataset.link;
    const href = profileLinks[key];

    if (href) {
      anchor.href = href;
      anchor.target = "_blank";
      anchor.classList.remove("is-disabled");
      anchor.removeAttribute("aria-disabled");
      return;
    }

    anchor.href = "#contato";
    anchor.removeAttribute("target");
    anchor.classList.add("is-disabled");
    anchor.setAttribute("aria-disabled", "true");
  });
}

function setupFeaturedCarousel() {
  if (!featuredCarousel) {
    return;
  }

  const slides = Array.from(featuredCarousel.querySelectorAll("[data-featured-slide]"));
  const prevButton = featuredCarousel.querySelector("[data-featured-prev]");
  const nextButton = featuredCarousel.querySelector("[data-featured-next]");
  const current = featuredCarousel.querySelector("[data-featured-current]");
  const total = featuredCarousel.querySelector("[data-featured-total]");
  let activeIndex = 0;

  if (!slides.length || !prevButton || !nextButton || !current || !total) {
    return;
  }

  total.textContent = String(slides.length).padStart(2, "0");

  function renderSlide(index) {
    activeIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeIndex;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
    });

    current.textContent = String(activeIndex + 1).padStart(2, "0");
  }

  prevButton.addEventListener("click", () => renderSlide(activeIndex - 1));
  nextButton.addEventListener("click", () => renderSlide(activeIndex + 1));

  featuredCarousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      renderSlide(activeIndex - 1);
    }

    if (event.key === "ArrowRight") {
      renderSlide(activeIndex + 1);
    }
  });

  renderSlide(0);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveFilter(button);
    renderProjects(button.dataset.filter);
  });
});

applyProfileLinks();
setupFeaturedCarousel();
revealTargets.forEach(observeReveal);
renderApps();
renderProjects();

document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) {
    return;
  }

  const disabledLink = event.target.closest("a.is-disabled");

  if (disabledLink) {
    event.preventDefault();
  }
});
