const header = document.querySelector("[data-header]");

const setHeaderState = () => {
  header.classList.toggle("is-solid", window.scrollY > 24);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

const cases = {
  clients: {
    image: "site-assets/clients.jpg",
    alt: {
      zh: "沃兔文化客户服务经验案例页",
      en: "WOWTOO client experience case page",
    },
  },
  design: {
    image: "site-assets/design.jpg",
    alt: {
      zh: "沃兔文化核心设计能力案例页",
      en: "WOWTOO design capability case page",
    },
  },
  ip: {
    image: "site-assets/ip.jpg",
    alt: {
      zh: "沃兔文化原创 IP 设计案例页",
      en: "WOWTOO original IP design case page",
    },
  },
  promo: {
    image: "site-assets/promo.jpg",
    alt: {
      zh: "沃兔文化促销衍生品案例页",
      en: "WOWTOO promotional derivatives case page",
    },
  },
  retail: {
    image: "site-assets/retail.jpg",
    alt: {
      zh: "沃兔文化零售商品开发案例页",
      en: "WOWTOO retail product development case page",
    },
  },
};

const translations = {
  zh: {
    brandSub: "沃兔文化",
    navServices: "服务",
    navCases: "案例",
    navProcess: "流程",
    navQuality: "品控",
    navContact: "联系",
    headerAction: "发起项目",
    heroBrand: "沃兔文化",
    heroCopy: "为品牌客户提供从策略、设计、IP开发、供应链到质量交付的一体化文创周边解决方案。",
    heroPrimary: "查看能力",
    heroSecondary: "浏览案例",
    stat3c: "进度 / 创意 / 质量控制",
    statSuppliers: "战略供应商类别",
    statBrands: "服务头部品牌经验",
    aboutTitle: "以设计创新为核心，把品牌想法变成可交付商品。",
    aboutCn: "沃兔文化专注服务各行业品牌企业，秉持诚信、创新、专业、卓越的价值观，围绕企业文创、促销衍生品、IP周边和零售商品开发，提供完整项目管理与落地执行。",
    aboutEn: "WOWTOO is a brand creative and product development partner specializing in cultural merchandise, promotional derivatives, IP products and retail-ready goods. We connect strategy, design, sourcing, quality control and delivery to turn brand ideas into manufacturable products.",
    servicesTitle: "一站式品牌周边开发入口",
    servicesLead: "从选题策划到大货交付，每个环节都对应独立团队与可追踪流程。",
    service1Title: "策略策划",
    service1Text: "基于品牌目标、预算、数量和渠道，完成主题规划、产品组合与活动配套建议。",
    service2Title: "创意设计",
    service2Text: "覆盖 3D 建模、平面视觉、插画、包装与 IP 形象延展，让方案兼具审美与量产可行性。",
    service3Title: "供应开发",
    service3Text: "匹配毛绒、塑胶潮玩、包袋、文具、家居日用、包装印刷、数码配件和工艺礼品资源。",
    service4Title: "品控交付",
    service4Text: "从供应商审核、原材料控制、产前样、过程检验到出货验收，管理风险和交付质量。",
    casesTitle: "面向不同场景的产品开发案例",
    caseClients: "客户服务经验",
    caseDesign: "设计能力",
    caseIp: "IP 开发",
    casePromo: "促销衍生品",
    caseRetail: "零售商品",
    processTitle: "从需求确认到销售转化的项目路径",
    processLead: "沃兔将创意服务拆成可管理节点：确认需求、产品立项、开发打样、品牌授权运用、渠道确认、品质控制、入库与销售转化。",
    step1Title: "需求确认",
    step1Text: "梳理品牌目标、预算、数量、渠道和交付时间。",
    step2Title: "创意立项",
    step2Text: "完成市场调研、产品线建构和定制创意设计。",
    step3Title: "开发打样",
    step3Text: "设计图稿、工程拆解、3D 白样、上色样、产前样逐步确认。",
    step4Title: "量产交付",
    step4Text: "执行生产过程审核、产品检测、出货检验和物流配送。",
    qualityTitle: "用 3C 标准管理项目确定性",
    qualityLead: "进度控制、创造性控制、质量控制贯穿项目全程。供应商定期审核包括计划准备、实施审核、审核报告、纠正措施和跟踪验证。",
    qualityProgress: "节点计划 / 过程跟踪 / 风险响应",
    qualityCreative: "品牌解读 / 视觉提案 / 设计落地",
    qualityQuality: "资质审核 / 样品检测 / 出货检验",
    suppliersTitle: "八大战略供应商类别",
    supplier1: "毛绒玩具 / 玩偶",
    supplier2: "塑胶玩具 / 盲盒潮玩",
    supplier3: "包袋",
    supplier4: "文创文具",
    supplier5: "家居 / 日用",
    supplier6: "包装 / 印刷",
    supplier7: "数码配件",
    supplier8: "工艺礼品",
    downloadTitle: "下载完整公司介绍 PDF",
    downloadText: "获取 WOWTOO 沃兔文化完整介绍，包含团队、服务体系、设计能力、供应链、品控机制与案例展示。",
    downloadMeta: "47 页 · 公司介绍",
    downloadButton: "下载 PDF",
    joinTitle: "加入我们",
    joinText: "如果你关注品牌、设计、产品和供应链落地，欢迎与 WOWTOO 一起把创意做成真正被使用的商品。",
    joinAction: "联系团队",
    addressTitle: "公司地址",
    addressLine1: "上海市静安区铜仁路299号",
    addressLine2: "东海SOHO广场618室",
    contactTitle1: "把下一个品牌节点",
    contactTitle2: "做成值得被记住的产品。",
    formType: "项目类型",
    optionCorporate: "企业文创",
    optionPromo: "促销衍生品",
    optionIp: "IP 周边开发",
    optionRetail: "零售商品开发",
    formBudget: "预算区间",
    budgetTbd: "待评估",
    budget1: "10 万以内",
    budget2: "10-50 万",
    budget3: "50 万以上",
    formBrief: "需求概述",
    formPlaceholder: "品牌、数量、交付时间、目标场景",
    formSubmit: "提交需求",
  },
  en: {
    brandSub: "Brand Creative Partner",
    navServices: "Services",
    navCases: "Cases",
    navProcess: "Process",
    navQuality: "Quality",
    navContact: "Contact",
    headerAction: "Start Project",
    heroBrand: "Brand Creative Partner",
    heroCopy: "Integrated brand merchandise solutions, from strategy, design and IP development to sourcing, quality control and delivery.",
    heroPrimary: "Explore Services",
    heroSecondary: "View Cases",
    stat3c: "Progress / Creative / Quality control",
    statSuppliers: "Strategic supplier categories",
    statBrands: "Experience serving leading brands",
    aboutTitle: "Design-led innovation that turns brand ideas into production-ready products.",
    aboutCn: "WOWTOO serves brand clients across industries with integrated project management and execution for corporate merchandise, promotional products, IP merchandise and retail product development.",
    aboutEn: "Guided by integrity, innovation, professionalism and excellence, WOWTOO connects creative strategy, visual design, supplier resources, quality control and logistics to help brands launch practical, memorable and scalable products.",
    servicesTitle: "One-stop brand merchandise development",
    servicesLead: "From concept planning to mass delivery, every stage is handled by dedicated teams and traceable workflows.",
    service1Title: "Strategic Planning",
    service1Text: "Define themes, product portfolios and campaign support based on brand goals, budget, quantity and channel needs.",
    service2Title: "Creative Design",
    service2Text: "Covering 3D modeling, visual design, illustration, packaging and IP image extension with production feasibility in mind.",
    service3Title: "Sourcing Development",
    service3Text: "Matching supplier resources across plush toys, vinyl toys, bags, stationery, home goods, packaging, digital accessories and craft gifts.",
    service4Title: "Quality Delivery",
    service4Text: "Managing risk and quality through supplier audits, material control, pre-production samples, process inspection and final acceptance.",
    casesTitle: "Product development cases for multiple scenarios",
    caseClients: "Client Experience",
    caseDesign: "Design Capability",
    caseIp: "IP Development",
    casePromo: "Promotional Goods",
    caseRetail: "Retail Products",
    processTitle: "A project path from brief confirmation to sales conversion",
    processLead: "WOWTOO breaks creative services into manageable milestones: brief confirmation, product approval, sampling, brand authorization, channel confirmation, quality control, warehousing and sales conversion.",
    step1Title: "Brief Confirmation",
    step1Text: "Clarify brand objectives, budget, quantity, channels and delivery timeline.",
    step2Title: "Creative Approval",
    step2Text: "Complete market research, product line planning and custom creative design.",
    step3Title: "Sampling",
    step3Text: "Confirm artwork, engineering breakdown, 3D white samples, colored samples and pre-production samples step by step.",
    step4Title: "Mass Delivery",
    step4Text: "Execute production audits, product testing, outgoing inspection and logistics delivery.",
    qualityTitle: "Managing project certainty through the 3C standard",
    qualityLead: "Progress control, creative control and quality control run through the entire project. Supplier audits cover preparation, on-site review, audit reports, corrective actions and follow-up verification.",
    qualityProgress: "Milestone planning / Process tracking / Risk response",
    qualityCreative: "Brand interpretation / Visual proposal / Design execution",
    qualityQuality: "Qualification audit / Sample testing / Outgoing inspection",
    suppliersTitle: "Eight strategic supplier categories",
    supplier1: "Plush toys / Mascots",
    supplier2: "Vinyl toys / Blind boxes",
    supplier3: "Bags",
    supplier4: "Cultural stationery",
    supplier5: "Home / Daily goods",
    supplier6: "Packaging / Printing",
    supplier7: "Digital accessories",
    supplier8: "Craft gifts",
    downloadTitle: "Download the full company deck",
    downloadText: "Get the complete WOWTOO profile, including the team, service system, design capabilities, supply chain, quality control and selected case pages.",
    downloadMeta: "47 pages · Company profile",
    downloadButton: "Download PDF",
    joinTitle: "Join Us",
    joinText: "If you care about brands, design, products and supply-chain execution, join WOWTOO to turn creative ideas into products people actually use.",
    joinAction: "Contact the Team",
    addressTitle: "Company Address",
    addressLine1: "Room 618, Donghai SOHO Plaza",
    addressLine2: "No. 299 Tongren Road, Jing'an District, Shanghai",
    contactTitle1: "Turn your next brand moment",
    contactTitle2: "into a product people remember.",
    formType: "Project Type",
    optionCorporate: "Corporate Merchandise",
    optionPromo: "Promotional Products",
    optionIp: "IP Product Development",
    optionRetail: "Retail Product Development",
    formBudget: "Budget Range",
    budgetTbd: "To be evaluated",
    budget1: "Under RMB 100K",
    budget2: "RMB 100K-500K",
    budget3: "Above RMB 500K",
    formBrief: "Project Brief",
    formPlaceholder: "Brand, quantity, delivery time and target scenario",
    formSubmit: "Submit Brief",
  },
};

let currentLang = "zh";
const caseOrder = Object.keys(cases);
let activeCase = "clients";
const tabs = document.querySelectorAll(".case-tab");
const caseImage = document.querySelector("#case-image");
const caseTrack = document.querySelector(".case-track");
const caseSlides = document.querySelectorAll(".case-slide");
const caseDots = document.querySelectorAll(".case-dot");
const casePrev = document.querySelector("[data-case-prev]");
const caseNext = document.querySelector("[data-case-next]");
const langToggle = document.querySelector("[data-lang-toggle]");
const carouselAutoplayMs = 3200;
let carouselTimer;
const revealItems = document.querySelectorAll(
  ".section, .section-band, .showcase, .contact, .service-card, .timeline li, .quality-cards article, .supplier-grid span, .download-card"
);

revealItems.forEach((item) => item.classList.add("reveal"));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
);

revealItems.forEach((item) => revealObserver.observe(item));

const applyLanguage = (lang) => {
  currentLang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.body.dataset.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[lang][key]) node.textContent = translations[lang][key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (translations[lang][key]) node.placeholder = translations[lang][key];
  });

  langToggle.textContent = lang === "zh" ? "EN" : "中文";

  if (caseImage && cases[activeCase]) {
    caseImage.alt = cases[activeCase].alt[lang];
  }

  caseSlides.forEach((slide) => {
    const selected = cases[slide.dataset.case];
    const img = slide.querySelector("img");
    if (selected && img) img.alt = selected.alt[lang];
  });
};

const setActiveCase = (caseKey, options = {}) => {
  const selected = cases[caseKey];
  if (!selected) return;

  const activeIndex = caseOrder.indexOf(caseKey);
  const hasChanged = activeCase !== caseKey;
  activeCase = caseKey;

  tabs.forEach((item) => item.classList.toggle("is-active", item.dataset.case === caseKey));
  caseDots.forEach((dot, index) => dot.classList.toggle("is-active", index === activeIndex));

  if (caseImage && hasChanged) {
    caseImage.classList.add("is-switching");
    caseImage.src = selected.image;
    caseImage.alt = selected.alt[currentLang];
    window.setTimeout(() => caseImage.classList.remove("is-switching"), 220);
  }

  if (options.scroll !== false && caseSlides[activeIndex]) {
    caseSlides[activeIndex].scrollIntoView({
      behavior: options.instant ? "auto" : "smooth",
      block: "nearest",
      inline: "center",
    });
  }
};

const advanceCase = () => {
  const currentIndex = caseOrder.indexOf(activeCase);
  const nextIndex = (currentIndex + 1) % caseOrder.length;
  setActiveCase(caseOrder[nextIndex]);
};

const startCarouselAutoplay = () => {
  if (!caseTrack) return;
  window.clearInterval(carouselTimer);
  carouselTimer = window.setInterval(advanceCase, carouselAutoplayMs);
};

const restartCarouselAutoplay = () => {
  startCarouselAutoplay();
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setActiveCase(tab.dataset.case, { scroll: false });
    restartCarouselAutoplay();
  });
});

caseDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    setActiveCase(caseOrder[Number(dot.dataset.caseDot)]);
    restartCarouselAutoplay();
  });
});

casePrev?.addEventListener("click", () => {
  const currentIndex = caseOrder.indexOf(activeCase);
  const nextIndex = (currentIndex - 1 + caseOrder.length) % caseOrder.length;
  setActiveCase(caseOrder[nextIndex]);
  restartCarouselAutoplay();
});

caseNext?.addEventListener("click", () => {
  advanceCase();
  restartCarouselAutoplay();
});

caseTrack?.addEventListener(
  "scroll",
  () => {
    const trackCenter = caseTrack.scrollLeft + caseTrack.clientWidth / 2;
    let nearestSlide = caseSlides[0];
    let nearestDistance = Infinity;

    caseSlides.forEach((slide) => {
      const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
      const distance = Math.abs(trackCenter - slideCenter);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestSlide = slide;
      }
    });

    if (nearestSlide) setActiveCase(nearestSlide.dataset.case, { scroll: false });
  },
  { passive: true }
);

caseTrack?.addEventListener("pointerdown", restartCarouselAutoplay);

langToggle.addEventListener("click", () => {
  applyLanguage(currentLang === "zh" ? "en" : "zh");
});

applyLanguage("zh");
startCarouselAutoplay();
