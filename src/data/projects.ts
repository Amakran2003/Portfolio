import { Project } from '../types';

// Website Projects - Removed GitHub links
export const websiteProjects: Project[] = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description: 'A responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features dark mode, internationalization, and smooth animations.',
    image: 'images/projects/portfolio.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://amakran2003.github.io/Portfolio/',
    year: '2025',
    status: 'in-progress'
  },
  {
    id: 'craft-burger',
    title: 'Craft Burger Co',
    description: 'A modern, responsive website for a burger restaurant with an elegant design. Features an interactive menu, appealing visuals, and smooth user experience optimized for restaurant patrons.',
    image: 'images/projects/craft-burger.jpg',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'SEO Optimization', 'Responsive Design'],
    link: 'https://amakran2003.github.io/CraftBurgerCo/',
    year: '2025',
    status: 'completed'
  },
  {
    id: 'pure-passion',
    title: 'Pure Passion',
    description: 'An elegant website for a Moroccan restaurant that showcases traditional cuisine and cultural atmosphere. Features rich visuals, an interactive menu, and immersive design elements highlighting Moroccan culinary heritage.',
    image: 'images/projects/pure-passion.jpg',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'SEO Optimization', 'Cultural Branding'],
    link: 'https://amakran2003.github.io/PurePassion/',
    year: '2025',
    status: 'in-progress'
  }
];

// Hackathon Projects
export const hackatonProjects: Project[] = [
  {
    id: "ai-pathology-copilot",
    title: "AI Pathology Copilot",
    description: "A multimodal AI-powered assistant designed to help pathologists analyze medical images and interpret pathology reports. Developed during a hackathon at Doctolib headquarters using vanilla web technologies.",
    image: "images/projects/ai-pathology-copilot.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "AI Integration"],
    link: "https://github.com/Guillaume18100/hackathon_doctolib",
    github: "https://github.com/Guillaume18100/hackathon_doctolib",
    status: "completed",
    year: "2025",
    role: "Frontend Developer",
    features: [
      "Image processing for pathology analysis",
      "AI-powered Q&A system",
      "Patient severity ranking",
      "Interactive web-based interface"
    ]
  }
];


// School Projects
export const schoolProjects: Project[] = [
  {
    id: 'fpga-game',
    title: 'FPGA Game Development',
    description: 'Developed a version of the classic Frogger game entirely on FPGA using Nandland\'s Go Board. Designed and implemented game mechanics and visuals in Verilog. Authored the user manual to document gameplay and technical details.',
    image: 'images/projects/fpga-game.jpg',
    technologies: ['Verilog', 'FPGA', 'Technical Writing', 'Game Development'],
    link: '#',
    github: 'https://github.com/algosup/2024-2025-project-1-fpga-team-3',
    role: 'Second-Year Student, Software Engineer, Technical Writer',
    year: '2024-2025',
    status: 'completed'
  },
  {
    id: 'ecosphere',
    title: 'Ecosphere Serious Game',
    description: 'Developed Ecosphere, a climate-change simulation game with Godot 4. Incorporated real-world ecological data to drive strategic decisions.',
    image: 'images/projects/ecosphere.jpg',
    technologies: ['Godot 4', 'Game Development', 'Simulation', 'Team Management'],
    link: '#',
    github: 'https://github.com/algosup/2024-2025-project-2-serious-game-team-2',
    role: 'Second-Year Student, Software Engineer, Team Lead',
    year: '2024-2025',
    status: 'completed'
  },
  {
    id: 'quickest-path',
    title: 'Quickest Path Algorithm Project',
    description: 'Led as Program Manager for a high-performance C++ algorithm project to find the quickest path using a 28 million nodes dataset. Wrote comprehensive technical specifications and coordinated team efforts to meet project objectives.',
    image: 'images/projects/quickest-path.jpg',
    technologies: ['C++', 'Technical Writing', 'Project Management', 'Graph Algorithms'],
    link: '#',
    github: 'https://github.com/algosup/2024-2025-project-3-quickest-path-team-7',
    role: 'Second-Year Student, Program Manager',
    year: '2024-2025',
    status: 'completed'
  },
  {
    id: 'flutter-app',
    title: 'Flutter Application Development',
    description: 'Documented and designed features for Adopt a Candidate, a recruitment app inspired by Tinder.',
    image: 'images/projects/flutter-app.jpg',
    technologies: ['Flutter', 'Technical Writing', 'UI/UX Design', 'Mobile Development'],
    link: '#',
    github: 'https://github.com/algosup/2023-2024-project-5-flutter-team-2',
    role: 'First-Year Student, Technical Writer',
    year: '2023-2024',
    status: 'completed'
  },
  {
    id: 'virtual-processor',
    title: 'Virtual Processor Development',
    description: 'Tested and debugged a custom virtual processor and assembly code interpreter written in C.',
    image: 'images/projects/virtual-processor.jpg',
    technologies: ['C Programming', 'Assembly', 'QA Testing', 'Debugging'],
    link: '#',
    github: 'https://github.com/algosup/2023-2024-project-3-virtual-processor-team-7',
    role: 'First-Year Student, Quality Assurance',
    year: '2023-2024',
    status: 'completed'
  },
  {
    id: 'sportshield',
    title: 'SportShield Project',
    description: 'Led the development of SportShield, an anti-theft system for sports equipment. Integrated GPS tracking, theft alerts, and remote locking features.',
    image: 'images/projects/sportshield.jpg',
    technologies: ['IoT', 'GPS Tracking', 'Hardware Integration', 'Team Leadership'],
    link: '#',
    github: 'https://github.com/algosup/2023-2024-project-4-sportshield-team-3',
    role: 'First-Year Student, Technical Leader',
    year: '2023-2024',
    status: 'completed'
  }
];