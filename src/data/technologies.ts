export interface Technology {
  name: string
  iconNames: string[]
  iconWidths?: number
  shortDescription: string
  longDescription: string
  projects: string[]
  uses: string[]
}

const technologies: Technology[] = [
  {
    name: 'golang',
    iconNames: ['go'],
    iconWidths: 120,
    shortDescription:
      'A general purpose, blazing fast, and minimal programming language by Google.',
    longDescription:
      "I've been working with go since May of 2020. It isn't my favorite language but I'm very comfortable and experienced writing it. From APIs to CLIs I can always rely on go for getting the job done.",
    projects: [
      'https://github.com/gleich/fgh',
      'https://github.com/gleich/gh_fsync',
      'https://github.com/gleich/nuke',
      'https://github.com/gleich/logoru',
      'https://github.com/gleich/statuser',
      'https://github.com/gleich/texsch',
      'https://github.com/gleich/contrihat',
      'https://github.com/gleich/clockhat',
      'https://github.com/gleich/verpi',
      'https://github.com/rootlyhq/cli',
    ],
    uses: [
      'Command Line Tools',
      'APIs (REST & GraphQL)',
      'Microservices',
      'General Automation',
      'Hardware (IOT Devices)',
    ],
  },
  {
    name: 'Rust',
    iconNames: ['rust'],
    shortDescription:
      'Low-level and fast systems programming language for the modern software developer.',
    longDescription:
      "It's currently my favorite language to write but I'm still quit new. The memory safety, speed, modern syntax, and amazing community make me believe it is a programming language for the future.",
    projects: [
      'https://github.com/gleich/profile_stack',
      'https://github.com/gleich/auto_shorty',
      'https://github.com/gleich/rust_template',
      'https://github.com/gleich/full-tilt-sort',
      'https://github.com/gleich/resin',
      'https://github.com/gleich/kiwi',
      'https://github.com/gleich/daily_poll',
    ],
    uses: [
      'Microservices',
      'General Automation',
      'Hardware (IOT Devices)',
      'Command Line Tools',
    ],
  },
  {
    name: 'JS/TS',
    iconNames: ['javascript', 'typescript'],
    shortDescription:
      'JavaScript, and its superset called TypeScript, are JIT programming languages for modern UI applications.',
    longDescription:
      "It's an essential part of this website and other websites I've worked on over the past year. I've also used it for writing extensions for applications like vscode and raycast.",
    projects: [
      'https://github.com/gleich/www',
      'https://github.com/gleich/emojicast',
      'https://github.com/gleich/vercast',
      'https://github.com/gleich/cratecast',
      'https://github.com/gleich/texsch-code',
      'https://github.com/blackbirdtheme/website',
      'https://github.com/gleich/kiwi.docs',
    ],
    uses: [
      'SPAs (Single-Page Apps)',
      'Application Extensions',
      'APIs (REST)',
      'Command Line Tools',
    ],
  },
  {
    name: 'Python',
    iconNames: ['python'],
    shortDescription:
      'High-level, JIT language for quick scripts with english-like syntax.',
    longDescription:
      "It was my first language and is great for beginners. As I've grown as a developer I've discovered other languages that help me write better applications. I still use python all the time but mainly for writing scripts.",
    projects: [
      'https://github.com/gleich/Conribution-Hat',
      'https://github.com/gleich/Doc-Dockerfiles',
      'https://github.com/gleich/verpi',
      'https://github.com/Team-501-The-PowerKnights/Vision2020',
      'https://github.com/gleich/math_animations',
      'https://github.com/gleich/nfl_game_stats',
    ],
    uses: [
      'Automation Scripts',
      'Build Scripts',
      'Data Analysis',
      'Computer Vision',
    ],
  },
]

export default technologies
