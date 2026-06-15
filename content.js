window.PORTFOLIO = {
  profile: {
    name: "Zhaoyou Liu",
    shortName: "Zhaoyou Liu",
    role: "Game Engineering MSc | Gameplay, AI, and Rendering Programmer",
    availability: "Game engineering portfolio",
    summary:
      "I build interactive game systems with a focus on believable enemy behaviour, real-time rendering, and practical C++/UE5 production work.",
    pitch:
      "My strongest work sits between gameplay engineering and technical systems: UE5 enemy AI, Blueprint/C++ ability logic, DirectX rendering experiments, and performance-focused C++ tools.",
    focus:
      "Current focus: boss combat systems, gameplay ability workflows, rendering pipelines, and portfolio-ready game prototypes.",
    workingStyle:
      "I like to turn course briefs and design ideas into playable, inspectable systems with clear technical ownership.",
    contactNote:
      "If my CV or project work is relevant to your team, please feel free to contact me by email or GitHub.",
    location: "Coventry, United Kingdom",
  },
  metrics: [
    { value: "6", label: "selected projects" },
    { value: "UE5", label: "current game engine focus" },
    { value: "C++", label: "core programming language" },
  ],
  projects: [
    {
      title: "SkyFire Enemy AI and Boss Combat",
      type: "Featured Game Project",
      period: "2026",
      featured: true,
      cover: "",
      coverAlt: "",
      summary:
        "A UE5 team game project where I owned almost the full enemy and Boss combat package: normal enemies, Boss AI, ability logic, animation binding, UI feedback, voice lines, BGM transitions, sound cues, and the level-completion trigger.",
      impact:
        "Built a complete multi-phase Boss encounter with patrol/chase/attack logic, dodgeable projectiles, teleport anchors, Nova and SkyTornado phase skills, GAS-based HP/damage handling, custom audio timing, and phase-specific visual feedback.",
      stack: ["Unreal Engine 5", "C++", "Blueprints", "Gameplay Ability System", "Behavior Trees", "Animation", "BGM", "Sound Cue"],
      highlights: [
        "Implemented normal enemy and Boss behaviour through C++ controllers, UE5 Blueprints, Behavior Trees, and Gameplay Ability System integration.",
        "Designed the Boss as a two-phase encounter: teleport pressure in Phase 1, Nova as the phase-transition ritual, and SkyTornado plus enhanced projectile pressure in Phase 2.",
        "Bound combat logic to animation timing, including melee hit windows, death animations, skill casting sequences, and temporary HP-lock states during major Boss abilities.",
        "Produced the encounter's audio layer, including Boss voice lines, 3D sound cues, skill sound effects, and staged BGM switching between exploration, Boss fight, and Phase 2.",
        "Connected the Boss defeat state to UI feedback, waypoint activation, and the final level-completion trigger.",
      ],
      gallery: [
        {
          src: "assets/projects/skyfire/nova-boss-encounter.jpg",
          alt: "Nova boss skill with full-screen visual pressure and combat UI.",
          caption: "Nova: a large-area phase-transition skill that forces the player to use cover.",
        },
        {
          src: "assets/projects/skyfire/skytornado-phase2.jpg",
          alt: "SkyTornado phase two skill with multiple elemental tornado effects in the arena.",
          caption: "SkyTornado: Phase 2 arena pressure using multiple spawned storm effects.",
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
      title: "A Dream Called Isekai: CRPG Demo",
      type: "Personal Game Project",
      period: "2026",
      video: {
        title: "Gameplay Demo",
        src: "assets/videos/personal-game-demo-web.mp4?v=20260616b",
        caption:
          "A short capture from my personal CRPG-style demo prototype.",
      },
      summary:
        "I am experimenting with a simple CRPG-style game demo in Unreal Engine 5. Most character and environment model assets in the prototype are sourced from online resources.",
      impact:
        "Current progress: BG3-style top-down camera, click interaction, pickup and inventory flow, save/load framework, character creation skeleton, alchemy station logic, and an early turn-based combat framework.",
      stack: ["Unreal Engine 5.6", "C++", "CRPG Prototype", "Inventory", "Save/Load", "Alchemy", "Turn-Based Combat"],
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
