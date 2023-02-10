const header = {
  homepage: 'https://nvici.github.io/My-React-Portfolio',
  title: 'Nico Vicinanza',
}

const about = {
  name: 'Nico Vicinanza',
  role: 'Front End Engineer',
  description:
    'Engaged and resourceful professional with strong capabilities and experience in managing people, projects, and processes. Customer focused with excellent oral and written communication skills. Adaptable to a variety of environments and interacts effectively and professionally with multiple departments and various stakeholders.',
  resume: 'https://docs.google.com/document/d/1O2Udfw-Lx3b_tYhBdHmpfUhN67soet7z/edit?usp=sharing&ouid=109315098127156025144&rtpof=true&sd=true',
  social: {
    linkedin: 'https://www.linkedin.com/in/nicolas-vicinanza-b49491161/',
    github: 'https://github.com/nvici',
  },
}

const projects = [
  {
    name: 'Playlist Generator',
    description:
      'A Playlist Generator, by searching a genre, randomly generates a new list of music with background information of that genre.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/nvici/All-in-1-music',
    livePreview: 'https://nvici.github.io/All-in-1-music/',
  },
  {
    name: 'Know Mow Worries',
    description:
      'Know Mow Worries is a website where freelancers for yard work can post hiring ads and clientele can find freelancers in their local area to hire for yard work.',
    stack: ['Node.js', 'Express', 'SQL'],
    sourceCode: 'https://github.com/nvici/KnowMowWorries',
    livePreview: 'https://knowmowworries.onrender.com/',
  },
  {
    name: 'Shoe Marketplace',
    description:
      'Jay-on-yo-feet is a shoe marketplace where you can buy shoes where prices are lower then anywhere else',
    stack: ['React', 'NoSQL', 'Express'],
    sourceCode: 'https://github.com/nvici/Jay-on-yo-feet',
    livePreview: 'https://stormy-cliffs-65992.herokuapp.com/',
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Material UI',
  'Express',
  'SQL',
  'NoSQL',
  'MERN',
]

const contact = {
  email: 'nvicinanza@outlook.com',
}

export { header, about, projects, skills,  contact }
