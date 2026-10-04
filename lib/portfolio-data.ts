export const profile = {
  name: 'K Om Kumar',
  title: 'Process Associate – Content Creation AI',
  headline: 'Computer Science graduate working in AI-assisted content creation, prompt writing, SEO and WordPress.',
  summary:
    'Computer Science graduate with professional experience in AI-assisted content creation, prompt writing, content optimization, SEO and WordPress. Skilled in using ChatGPT, Claude and Google Gemini to generate, refine and evaluate content based on specific requirements. Familiar with Java, Python, JavaScript, HTML, CSS and SQL, with strong attention to detail, problem-solving and communication skills.',
  location: 'Hyderabad, TS',
  phone: '+91 9618138529',
  phoneHref: 'tel:+919618138529',
  email: 'k.omkumar20@gmail.com',
  linkedin: 'www.linkedin.com/in/om-kumar-k-b96342267',
  linkedinHref: 'https://www.linkedin.com/in/om-kumar-k-b96342267',
}

export const strengths = ['Attention to detail', 'Problem-solving', 'Communication']

export type Experience = {
  company: string
  role: string
  location: string
  start: string
  end: string
  highlights: string[]
  responsibilities: string[]
}

export const experience: Experience[] = [
  {
    company: 'Blueberry Digital Labs Private Limited',
    role: 'Process Associate – Content Creation AI',
    location: 'Hyderabad, TS',
    start: 'March 2024',
    end: 'October 2026',
    highlights: ['Prompt writing', 'ChatGPT', 'Claude', 'Google Gemini', 'SEO', 'WordPress', 'HTML', 'JavaScript', 'LaTeX'],
    responsibilities: [
      'Created and refined prompts for generative AI tools to produce content according to specific project requirements and guidelines.',
      'Used ChatGPT, Claude, and Google Gemini for AI-assisted content creation, optimization, and content improvement.',
      'Evaluated AI-generated outputs for relevance, accuracy, structure, tone, formatting, and overall content quality.',
      'Refined prompts and instructions based on output quality to achieve accurate, consistent, and requirement-focused results.',
      'Created, reviewed, and optimized digital content according to established content requirements, quality standards, and editorial guidelines.',
      'Applied SEO principles to improve content structure, readability, search visibility, and user engagement.',
      'Managed and updated website content using WordPress and content management systems.',
      'Created and optimized article layouts, graphics, and supporting digital content.',
      'Collaborated with technical and content teams.',
      'Used HTML, JavaScript, and LaTeX for content formatting, technical presentation, and document development.',
      'Performed quality checks to identify errors, inconsistencies, and formatting issues.',
      'Managed multiple content-related tasks while meeting project requirements, quality standards, and deadlines.',
    ],
  },
]

export type SkillCategory = {
  id: string
  label: string
  description: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'ai-digital',
    label: 'AI & Digital',
    description: 'Prompting, AI-assisted content workflows, output evaluation and web content.',
    skills: [
      'Prompt Writing and Refinement',
      'AI-Assisted Content Creation',
      'Prompt Optimization',
      'AI Output Evaluation',
      'ChatGPT',
      'Claude',
      'Google Gemini',
      'SEO',
      'WordPress',
      'Content Optimization',
      'Content Strategy',
      'Content Management Systems',
      'Content Research',
      'Content Editing',
    ],
  },
  {
    id: 'programming',
    label: 'Programming',
    description: 'Languages from my Computer Science background.',
    skills: ['Java', 'Python', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    description: 'Java frameworks I am familiar with.',
    skills: ['Spring', 'Spring Boot', 'Hibernate'],
  },
  {
    id: 'databases',
    label: 'Databases',
    description: 'Relational databases.',
    skills: ['Oracle SQL', 'MySQL'],
  },
  {
    id: 'tools',
    label: 'Developer Tools',
    description: 'Editors and IDEs I work with.',
    skills: ['Visual Studio Code', 'Eclipse', 'MySQL Workbench'],
  },
]

export type Project = {
  id: string
  index: string
  title: string
  short: string
  domain: string
  approaches: string[]
  details: string[]
}

export const projects: Project[] = [
  {
    id: 'fake-image-detection',
    index: '01',
    title: 'Fake Image Detection Using Machine Learning',
    short: 'A machine learning-based approach for detecting manipulated and fake images.',
    domain: 'Computer Vision',
    approaches: ['Machine Learning', 'Deep Learning', 'Image Datasets', 'Performance Metrics'],
    details: [
      'Developed a machine learning-based approach for detecting manipulated and fake images.',
      'Worked with image datasets for model training, testing, and evaluation.',
      'Applied machine learning and deep learning techniques to identify patterns associated with image manipulation.',
      'Evaluated model performance using appropriate performance metrics.',
    ],
  },
  {
    id: 'sql-injection-detection',
    index: '02',
    title: 'Machine Learning-Based SQL Injection Attack Detection and Prevention',
    short: 'A machine learning-based approach for detecting and preventing SQL injection attacks.',
    domain: 'Security',
    approaches: ['Random Forest', 'Support Vector Machines', 'Neural Networks', 'SQL Query Datasets'],
    details: [
      'Developed a machine learning-based approach for detecting and preventing SQL injection attacks.',
      'Worked with normal and malicious SQL query datasets for model training and testing.',
      'Applied Random Forest, Support Vector Machines, and Neural Networks to identify attack patterns.',
      'Developed detection and prevention mechanisms for potentially malicious SQL queries.',
      'Evaluated machine learning techniques for SQL injection detection using relevant performance metrics.',
    ],
  },
]

export type Education = {
  institution: string
  qualification: string
  location: string
  period: string
}

export const education: Education[] = [
  {
    institution: 'St Mary’s Integrated Campus',
    qualification: 'Bachelor of Technology in Computer Science and Engineering',
    location: 'Hyderabad, TS',
    period: '2019 – 2023',
  },
  {
    institution: 'Sri Chaitanya Junior College',
    qualification: 'Intermediate, MPC',
    location: 'Hyderabad, TS',
    period: '2017 – 2019',
  },
  {
    institution: 'Pratibha High School',
    qualification: 'Board of Secondary',
    location: 'Hyderabad, TS',
    period: '2016 – 2017',
  },
]

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
] as const
