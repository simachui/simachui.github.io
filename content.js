window.PORTFOLIO = {
  profile: {
    name: "Zhaoyou Liu",
    shortName: "Zhaoyou Liu",
    role: "Game Engineering MSc | Gameplay, AI, and Rendering Programmer",
    availability: "Open to gameplay, game AI, and rendering roles",
    summary:
      "I build interactive game systems with a focus on believable enemy behaviour, real-time rendering, and practical C++/UE5 production work.",
    pitch:
      "My strongest work sits between gameplay engineering and technical systems: UE5 enemy AI, Blueprint/C++ ability logic, DirectX rendering experiments, and performance-focused C++ tools.",
    focus:
      "Current focus: boss combat systems, gameplay ability workflows, rendering pipelines, and portfolio-ready game prototypes.",
    workingStyle:
      "I like to turn course briefs and design ideas into playable, inspectable systems with clear technical ownership.",
    contactNote:
      "Available for game programming, gameplay engineering, game AI, rendering, and technical prototyping opportunities.",
    location: "Coventry, United Kingdom",
  },
  metrics: [
    { value: "5", label: "selected projects" },
    { value: "UE5", label: "current game engine focus" },
    { value: "C++", label: "core programming language" },
  ],
  projects: [
    {
      title: "SkyFire Enemy AI and Boss Combat",
      type: "Featured Game Project",
      period: "2026",
      featured: true,
      cover: "assets/projects/skyfire/gameplay-boss-skill.jpg",
      coverAlt: "SkyFire boss encounter gameplay with ability effects and combat UI.",
      summary:
        "A UE5 team game project where I owned the enemy side of the level: normal enemies, Boss behaviour, ability logic, UI feedback, BGM switching, sound cues, and the level-completion trigger.",
      impact:
        "Built a complete multi-phase Boss encounter with patrol/chase/attack logic, dodgeable projectiles, teleport anchors, large-area skills, GAS-based HP/damage handling, and phase-specific audio/visual feedback.",
      stack: ["Unreal Engine 5", "C++", "Blueprints", "Gameplay Ability System", "Behavior Trees", "UI/HUD", "Sound Cue"],
      highlights: [
        "Implemented enemy controllers and Boss behaviour using C++ classes, UE5 Blueprints, Behavior Trees, and GAS integration.",
        "Designed melee hit windows, ranged projectiles, teleport-driven pressure, phase transition logic, and Boss skills such as Nova and SkyTornado.",
        "Connected combat systems to player feedback through health bars, BGM transitions, spatial sound cues, and a post-Boss level trigger.",
      ],
      gallery: [
        {
          src: "assets/projects/skyfire/gameplay-boss-skill.jpg",
          alt: "Boss skill effects during the SkyFire encounter.",
          caption: "Boss encounter gameplay and combat UI.",
        },
        {
          src: "assets/projects/skyfire/enemy-hit-window.jpg",
          alt: "Enemy attack animation timeline with a hit window marker.",
          caption: "Melee attack animation with a controlled damage window.",
        },
        {
          src: "assets/projects/skyfire/boss-ability-blueprint.jpg",
          alt: "Blueprint graph for a Boss ability.",
          caption: "Blueprint ability logic for Boss pressure patterns.",
        },
        {
          src: "assets/projects/skyfire/level-completion-trigger.jpg",
          alt: "Blueprint graph for level completion after Boss defeat.",
          caption: "Level-completion trigger and waypoint activation.",
        },
      ],
      links: [],
    },
    {
      title: "3D FPS Rendering Demo",
      type: "Graphics Programming",
      period: "2025",
      cover: "assets/projects/graphics/dinosaur-encounter.jpg",
      coverAlt: "First-person dinosaur encounter in a forest rendering demo.",
      summary:
        "A small first-person survival scene built on a C++/DirectX course framework to experiment with real-time rendering techniques in a playable context.",
      impact:
        "Implemented instanced vegetation, alpha-tested foliage, shader-based wind animation, normal mapping, collision, dinosaur AI, water reflection/refraction, and sky rendering.",
      stack: ["C++", "DirectX", "Shaders", "Instancing", "Normal Mapping", "Water Rendering"],
      gallery: [
        {
          src: "assets/projects/graphics/dinosaur-encounter.jpg",
          alt: "Dinosaur encounter in the forest rendering demo.",
          caption: "Playable forest encounter with animated dinosaur AI.",
        },
        {
          src: "assets/projects/graphics/water-rendering.jpg",
          alt: "Water surface rendering with reflection and refraction.",
          caption: "Water rendering with reflection and refraction.",
        },
      ],
      links: [],
    },
    {
      title: "Advanced Path Tracer and Light Transport",
      type: "Rendering",
      period: "2026",
      cover: "assets/projects/pathtracer/glass-render.jpg",
      coverAlt: "Glass scene rendered by the path tracer.",
      summary:
        "Extended a course path tracer with physically based materials, acceleration, denoising, and additional light transport experiments.",
      impact:
        "Added GGX microfacet BRDF, glass BSDF, Fresnel terms, tiled multithreading, BVH acceleration, ambient lighting, Intel Open Image Denoise, Instant Radiosity, and Light Tracing experiments.",
      stack: ["C++", "Path Tracing", "BVH", "GGX BRDF", "OIDN", "Multithreading"],
      gallery: [
        {
          src: "assets/projects/pathtracer/glass-render.jpg",
          alt: "Glass material rendered in the path tracer.",
          caption: "Glass BSDF and caustic-style light transport scene.",
        },
        {
          src: "assets/projects/pathtracer/denoised-cornell.jpg",
          alt: "Denoised Cornell box render.",
          caption: "Denoised Cornell-box render using colour, albedo, and normal AOVs.",
        },
      ],
      links: [],
    },
    {
      title: "Rasterizer Optimisation and Networked Chat Room",
      type: "Systems Programming",
      period: "2026",
      cover: "assets/projects/systems/chat-room-clients.jpg",
      coverAlt: "Multiple chat room client windows.",
      summary:
        "A combined C++ coursework project covering CPU rasterizer optimisation and a networked chat room built with WinSock and ImGui.",
      impact:
        "Reduced rasterizer render time by about 50% through barycentric precomputation, reciprocal multiplication, inlining, early exits, and a thread-pool renderer; also built group/private messaging and event-queue processing.",
      stack: ["C++", "WinSock", "ImGui", "Thread Pool", "FMOD", "Visual Studio"],
      gallery: [
        {
          src: "assets/projects/systems/chat-room-clients.jpg",
          alt: "Multiple chat clients connected to a server.",
          caption: "Client-server chat room with multiple connected clients.",
        },
        {
          src: "assets/projects/systems/rasterizer-timing.jpg",
          alt: "Rasterizer timing output in Visual Studio.",
          caption: "Timing output from rasterizer performance tests.",
        },
      ],
      links: [],
    },
    {
      title: "Pinball Mini Game",
      type: "Game Jam",
      period: "2025",
      summary:
        "A Unity-based pinball mini game made during a small internal University of Warwick game jam.",
      impact:
        "Worked with teammates and took responsibility for UI development, including menus, in-game interface, and player feedback screens.",
      stack: ["Unity", "C#", "UI", "Game Jam"],
      links: [],
    },
  ],
  skills: [
    {
      group: "Programming",
      items: ["C++", "Python", "Gameplay Systems", "Debugging", "Performance Optimisation"],
    },
    {
      group: "Game Development",
      items: ["Unreal Engine 5", "Unity", "Blueprints", "Gameplay Ability System", "Behavior Trees", "UI/HUD"],
    },
    {
      group: "Rendering",
      items: ["DirectX", "Shader Programming", "Path Tracing", "BVH", "GGX BRDF", "Normal Mapping", "Denoising"],
    },
    {
      group: "Tools and Systems",
      items: ["WinSock", "Multithreading", "ImGui", "FMOD", "Blender", "GitHub"],
    },
  ],
  education: [
    {
      school: "The University of Warwick",
      degree: "M.Sc., Games Engineering",
      period: "2025 - 2026",
      note: "Coursework focus: game development, advanced computer graphics, rendering, and gameplay systems.",
    },
    {
      school: "Beijing University of Technology",
      degree: "Bachelor's Degree, Information Management and Information Systems",
      period: "2020 - 2024",
      note: "Foundation in software, data, and information systems.",
    },
  ],
  links: [
    { label: "Email", href: "mailto:1804745959@qq.com" },
    { label: "GitHub", href: "https://github.com/simachui" },
    { label: "Portfolio", href: "https://simachui.github.io/" },
  ],
};
