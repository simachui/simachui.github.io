window.PORTFOLIO = {
  profile: {
    name: "你的姓名",
    shortName: "姓名",
    role: "产品型前端工程师 / AI 应用开发者",
    availability: "正在寻找新的合作机会",
    summary:
      "我把复杂问题拆成清晰的产品体验，用工程能力把想法推进到可交付的作品。",
    pitch:
      "适合把技术、业务和用户体验串起来的岗位：前端开发、AI 产品工程、数据可视化或全栈原型。",
    focus: "构建可解释、可维护、能真实落地的 Web 产品和智能工具。",
    workingStyle: "快速澄清目标，先做可验证版本，再通过数据和反馈迭代。",
    contactNote: "适合聊产品原型、Web 应用、AI 工具、作品集合作和全职机会。",
    location: "中国 / 可远程",
  },
  metrics: [
    { value: "8+", label: "代表项目" },
    { value: "3 年", label: "开发经验" },
    { value: "12k+", label: "服务用户" },
  ],
  projects: [
    {
      title: "AI 简历优化助手",
      type: "AI Product",
      period: "2026",
      summary:
        "面向求职者的简历分析工具，自动识别经历亮点、岗位匹配度和表达问题。",
      impact: "将单份简历诊断时间从 40 分钟缩短到 5 分钟。",
      stack: ["React", "Node.js", "OpenAI API", "PostgreSQL"],
      links: [
        { label: "Demo", href: "#" },
        { label: "GitHub", href: "#" },
      ],
    },
    {
      title: "数据看板重构",
      type: "Dashboard",
      period: "2025",
      summary:
        "为运营团队重构指标看板，统一数据口径、筛选器和异常状态展示。",
      impact: "核心查询路径减少 45%，周报制作时间减少约 60%。",
      stack: ["Vue", "ECharts", "TypeScript", "REST API"],
      links: [{ label: "Case Study", href: "#" }],
    },
    {
      title: "作品集内容管理器",
      type: "Web App",
      period: "2025",
      summary:
        "一个轻量化内容编辑器，用结构化数据维护项目、经历、技能和联系方式。",
      impact: "支持非技术同学独立更新页面内容并导出静态站点。",
      stack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      links: [{ label: "Preview", href: "#" }],
    },
  ],
  experience: [
    {
      role: "前端工程师",
      company: "某科技公司",
      period: "2024 - 至今",
      details: [
        "负责核心业务页面、组件体系和可视化模块建设。",
        "与产品、设计和后端协作，把模糊需求拆成可交付版本。",
        "推动关键页面性能优化，改善首屏加载和交互延迟。",
      ],
    },
    {
      role: "全栈开发实习生",
      company: "某互联网团队",
      period: "2023 - 2024",
      details: [
        "搭建内部运营工具，覆盖数据录入、审核、导出和权限控制。",
        "维护 Node.js 接口和数据库模型，补充基础测试与错误处理。",
      ],
    },
  ],
  skills: [
    {
      group: "前端开发",
      items: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Vue", "可访问性"],
    },
    {
      group: "产品与设计",
      items: ["信息架构", "交互原型", "用户流程", "指标拆解", "A/B Test"],
    },
    {
      group: "AI 与数据",
      items: ["Prompt Engineering", "LLM API", "数据清洗", "可视化", "自动化脚本"],
    },
    {
      group: "工程实践",
      items: ["Git", "REST API", "Node.js", "PostgreSQL", "测试", "部署"],
    },
  ],
  education: [
    {
      school: "你的学校",
      degree: "你的专业 / 学位",
      period: "2020 - 2024",
      note: "可填写 GPA、奖项、论文、课程项目或相关证书。",
    },
  ],
  links: [
    { label: "Email", href: "mailto:your.name@example.com" },
    { label: "GitHub", href: "https://github.com/yourname" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/yourname" },
  ],
};
