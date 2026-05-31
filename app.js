const portfolio = window.PORTFOLIO;

const bySelector = (selector) => document.querySelector(selector);
const allBySelector = (selector) => [...document.querySelectorAll(selector)];

const createElement = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
};

const createImage = (src, alt, className) => {
  if (!src) return null;
  const image = document.createElement("img");
  image.src = src;
  image.alt = alt || "";
  image.loading = "lazy";
  image.decoding = "async";
  if (className) image.className = className;
  return image;
};

const bindProfileText = () => {
  allBySelector("[data-profile]").forEach((element) => {
    const key = element.dataset.profile;
    element.textContent = portfolio.profile[key] || "";
  });
  document.title = `${portfolio.profile.name} | Game Engineering Portfolio`;
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
    const article = createElement("article", project.featured ? "project-card project-featured" : "project-card");
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

    const content = createElement("div", "project-content");
    content.append(
      meta,
      createElement("h3", "", project.title),
      createElement("p", "project-summary", project.summary),
      createElement("p", "project-impact", project.impact),
    );

    if (project.highlights?.length) {
      const highlights = createElement("ul", "project-highlights");
      highlights.append(...project.highlights.map((item) => createElement("li", "", item)));
      content.append(highlights);
    }

    content.append(stack);
    if ((project.links || []).length) {
      content.append(links);
    }

    if (project.cover) {
      const media = createElement("div", "project-media");
      media.append(createImage(project.cover, project.coverAlt, ""));
      article.append(media);
    }

    article.append(content);

    if (project.gallery?.length) {
      const gallery = createElement("div", "project-gallery");
      project.gallery.forEach((item) => {
        const figure = createElement("figure", "");
        figure.append(
          createImage(item.src, item.alt, ""),
          createElement("figcaption", "", item.caption),
        );
        gallery.append(figure);
      });
      article.append(gallery);
    }

    return article;
  });
  target.replaceChildren(...cards);
};

const renderExperience = () => {
  const target = bySelector("[data-experience]");
  if (!target || !portfolio.experience?.length) return;
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
  if (!target) return;
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
  if (!target) return;
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
  if (!target) return;
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
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
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
renderSkills();
renderEducation();
renderLinks();
setupInteractions();
