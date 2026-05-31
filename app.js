const portfolio = window.PORTFOLIO;

const bySelector = (selector) => document.querySelector(selector);
const allBySelector = (selector) => [...document.querySelectorAll(selector)];

const createElement = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
};

const bindProfileText = () => {
  allBySelector("[data-profile]").forEach((element) => {
    const key = element.dataset.profile;
    element.textContent = portfolio.profile[key] || "";
  });
  document.title = `${portfolio.profile.name} | 个人简历与作品集`;
};

const renderMetrics = () => {
  const target = bySelector("[data-metrics]");
  target.replaceChildren(
    ...portfolio.metrics.map((metric) => {
      const item = createElement("div", "metric");
      item.append(
        createElement("strong", "", metric.value),
        createElement("span", "", metric.label),
      );
      return item;
    }),
  );
};

const renderProjects = () => {
  const target = bySelector("[data-projects]");
  const cards = portfolio.projects.map((project, index) => {
    const article = createElement("article", "project-card");
    article.style.setProperty("--accent-index", index % 4);

    const meta = createElement("div", "project-meta");
    meta.append(createElement("span", "", project.type), createElement("span", "", project.period));

    const stack = createElement("div", "tag-row");
    stack.append(...project.stack.map((item) => createElement("span", "tag", item)));

    const links = createElement("div", "project-links");
    (project.links || []).forEach((link) => {
      const anchor = createElement("a", "", link.label);
      anchor.href = link.href;
      if (link.href && !link.href.startsWith("#") && !link.href.startsWith("mailto:")) {
        anchor.target = "_blank";
        anchor.rel = "noreferrer";
      }
      links.append(anchor);
    });

    article.append(
      meta,
      createElement("h3", "", project.title),
      createElement("p", "project-summary", project.summary),
      createElement("p", "project-impact", project.impact),
      stack,
      links,
    );
    return article;
  });
  target.replaceChildren(...cards);
};

const renderExperience = () => {
  const target = bySelector("[data-experience]");
  const entries = portfolio.experience.map((item) => {
    const article = createElement("article", "timeline-item");
    const header = createElement("div", "timeline-header");
    const titleWrap = createElement("div");
    titleWrap.append(createElement("h3", "", item.role), createElement("p", "", item.company));
    header.append(titleWrap, createElement("span", "", item.period));

    const list = createElement("ul");
    list.append(...item.details.map((detail) => createElement("li", "", detail)));

    article.append(header, list);
    return article;
  });
  target.replaceChildren(...entries);
};

const renderSkills = () => {
  const target = bySelector("[data-skills]");
  const groups = portfolio.skills.map((group) => {
    const article = createElement("article", "skill-group");
    const list = createElement("div", "tag-row");
    list.append(...group.items.map((item) => createElement("span", "tag", item)));
    article.append(createElement("h3", "", group.group), list);
    return article;
  });
  target.replaceChildren(...groups);
};

const renderEducation = () => {
  const target = bySelector("[data-education]");
  const items = portfolio.education.map((item) => {
    const article = createElement("article", "education-item");
    article.append(
      createElement("h3", "", item.school),
      createElement("p", "degree", item.degree),
      createElement("p", "period", item.period),
      createElement("p", "", item.note),
    );
    return article;
  });
  target.replaceChildren(...items);
};

const renderLinks = () => {
  const target = bySelector("[data-links]");
  const links = portfolio.links.map((link) => {
    const anchor = createElement("a", "contact-link", link.label);
    anchor.href = link.href;
    if (!link.href.startsWith("mailto:")) {
      anchor.target = "_blank";
      anchor.rel = "noreferrer";
    }
    return anchor;
  });
  target.replaceChildren(...links);
};

const setupInteractions = () => {
  const header = bySelector("[data-nav]");
  const menuButton = bySelector("[data-menu-button]");

  menuButton.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    menuButton.setAttribute("aria-label", isOpen ? "关闭导航" : "打开导航");
  });

  allBySelector(".nav-links a").forEach((anchor) => {
    anchor.addEventListener("click", () => header.classList.remove("is-open"));
  });

  bySelector("[data-print]").addEventListener("click", () => window.print());

  const footer = bySelector("[data-footer]");
  footer.textContent = `${new Date().getFullYear()} ${portfolio.profile.name}. ${portfolio.profile.location}`;
};

bindProfileText();
renderMetrics();
renderProjects();
renderExperience();
renderSkills();
renderEducation();
renderLinks();
setupInteractions();
