interface HardSkill {
  name: string
  icon: string
  colors: { gradientStart: string; gradientEnd: string }
  cardClass?: string
  iconClass: string
  tags: Array<string>
}

const hardSkills: Array<HardSkill> = [
  {
    name: 'ReactJS',
    icon: 'React',
    colors: { gradientStart: '#daffff', gradientEnd: '#c0fffe' },
    cardClass: '',
    iconClass: 'w-8 h-8',
    tags: ['frontend', 'expert']
  },
  {
    name: 'VueJS',
    icon: 'Vue',
    colors: { gradientStart: '#b0e633', gradientEnd: '#53ef7d' },
    cardClass: '',
    iconClass: 'w-8 h-8',
    tags: ['frontend', 'expert']
  },
  {
    name: 'ExpressJS',
    icon: 'Express',
    colors: { gradientStart: '#808080', gradientEnd: '#A9A9A9' },
    cardClass: '',
    iconClass: 'w-8 h-8',
    tags: ['backend', 'expert']
  },
  {
    name: 'PHP',
    icon: 'Php',
    colors: { gradientStart: '#B2B6FF', gradientEnd: '#9ea1e6' },
    cardClass: '',
    iconClass: 'w-8 h-8',
    tags: ['backend', 'advanced']
  },
  {
    name: 'Laravel Framework',
    icon: 'Laravel',
    colors: { gradientStart: '#ff9fac', gradientEnd: '#cf4646' },
    cardClass: '',
    iconClass: 'w-8 h-8',
    tags: ['backend', 'expert']
  },
  {
    name: 'Google Cloud Platform',
    icon: 'Gcp',
    colors: { gradientStart: '#808080', gradientEnd: '#A9A9A9' },
    cardClass: '',
    iconClass: 'w-8 h-8',
    tags: ['advanced', 'devops']
  },
  {
    name: 'Docker',
    icon: 'Docker',
    colors: { gradientStart: '#36dfed', gradientEnd: '#7ab7ff' },
    cardClass: '',
    iconClass: 'w-8 h-8',
    tags: ['devops', 'strong']
  },
  {
    name: 'Typescript',
    icon: 'Typescript',
    colors: { gradientStart: '#2ec6d2', gradientEnd: '#629bde' },
    cardClass: '',
    iconClass: 'w-8 h-8',
    tags: ['frontend', 'backend', 'strong']
  },

  {
    name: 'Javascript',
    icon: 'Javascript',
    colors: { gradientStart: '#fff07a', gradientEnd: '#e6e94b' },
    cardClass: '',
    iconClass: 'w-8 h-8',
    tags: ['frontend', 'backend', 'expert']
  },
  {
    name: 'InertiaJS',
    icon: 'Inertia',
    colors: { gradientStart: '#ed43f5', gradientEnd: '#a946cf' },
    cardClass: 'w-16 h-16 !p-2',
    iconClass: 'w-12 h-12',
    tags: ['frontend', 'backend', 'advanced']
  },

  {
    name: 'Laravel livewire',
    icon: 'Livewire',
    colors: { gradientStart: '#ff758c', gradientEnd: '#FF7EB3' },
    cardClass: '',
    iconClass: 'w-8 h-8',
    tags: ['backend', 'frontend', 'advanced']
  },
  {
    name: 'AlpineJS',
    icon: 'Alpinejs',
    colors: { gradientStart: '#637bca', gradientEnd: '#455d96' },
    cardClass: '',
    iconClass: 'w-8 h-8',
    tags: ['frontend', 'expert']
  },
  {
    name: 'MySQL',
    icon: 'Mysql',
    colors: { gradientStart: '#89F7FE', gradientEnd: '#66a6ff' },
    cardClass: '',
    iconClass: 'w-8 h-8',
    tags: ['backend', 'expert']
  },
  {
    name: 'MongoDB',
    icon: 'MongoDb',
    colors: { gradientStart: '#38ef7d', gradientEnd: '#11998e' },
    cardClass: '',
    iconClass: 'w-8 h-8',
    tags: ['backend', 'strong']
  },
  {
    name: 'Linux',
    icon: 'Linux',
    colors: { gradientStart: '#000', gradientEnd: '#e9e4f0' },
    cardClass: '',
    iconClass: 'w-8 h-8',
    tags: ['devops', 'expert']
  },
  {
    name: 'CSS',
    icon: 'Css',
    colors: { gradientStart: '#0082c8', gradientEnd: '#667db6' },
    cardClass: '',
    iconClass: 'w-8 h-8',
    tags: ['frontend', 'advanced']
  },
  {
    name: 'Bootstrap CSS',
    icon: 'Bootstrap',
    colors: { gradientStart: '#7f00ff', gradientEnd: '#e100ff' },
    cardClass: '',
    iconClass: 'w-8 h-8',
    tags: ['frontend', 'advanced']
  },
  {
    name: 'HTML',
    icon: 'Html',
    colors: { gradientStart: '#fc4a1a', gradientEnd: '#f7b733' },
    cardClass: '',
    iconClass: 'w-8 h-8',
    tags: ['frontend', 'expert']
  },
  {
    name: 'Firebase',
    icon: 'Firebase',
    colors: { gradientStart: '#fff07a', gradientEnd: '#e6e94b' },
    cardClass: '',
    iconClass: 'w-8 h-8',
    tags: ['devops', 'backend', 'expert']
  },
  {
    name: 'NodeJS',
    icon: 'Node',
    colors: { gradientStart: '#808080', gradientEnd: '#A9A9A9' },
    cardClass: '',
    iconClass: 'w-8 h-8',
    tags: ['frontend', 'expert']
  },
  {
    name: 'TailwindCSS',
    icon: 'Tailwind',
    colors: { gradientStart: '#cbffff', gradientEnd: '#affffe' },
    cardClass: '',
    iconClass: 'w-8 h-8',
    tags: ['frontend', 'expert']
  },
  {
    name: 'C++',
    icon: 'Cpp',
    colors: { gradientStart: '#8496ff', gradientEnd: '#7381e2' },
    cardClass: '',
    iconClass: 'w-8 h-8',
    tags: ['backend', 'fundamentals']
  },
  {
    name: 'C#',
    icon: 'CSharp',
    colors: { gradientStart: '#d884ff', gradientEnd: '#bb73e2' },
    cardClass: '',
    iconClass: 'w-8 h-8',
    tags: ['backend', 'fundamentals']
  },
  {
    name: 'Git',
    icon: 'Git',
    colors: { gradientStart: '#ff6638', gradientEnd: '#df4e37' },
    cardClass: '',
    iconClass: 'w-8 h-8',
    tags: ['devops', 'advanced']
  },
  {
    name: 'JQuery',
    icon: 'Jquery',
    colors: { gradientStart: '#B2B6FF', gradientEnd: '#9ea1e6' },
    cardClass: '',
    iconClass: 'w-8 h-8',
    tags: ['frontend', 'advanced']
  }
]

export type { HardSkill }
export { hardSkills }
