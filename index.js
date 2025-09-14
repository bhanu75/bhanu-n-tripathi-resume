#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');

// Resume data based on your CV
const resumeData = {
  name: 'Bhanu Tripathi',
  title: 'Frontend Developer | UI Engineer | Web Developer',
  contact: {
    location: '490 Amba Mata Scheme, Udaipur, Rajasthan',
    phone: '+91-7597145489',
    email: 'Bhanutripathi91@gmail.com',
    website: 'www.bt12.netlify.app',
    linkedin: 'https://in.linkedin.com/in/bhanu-n-tripathi'
  },
  summary: 'Experienced Frontend Developer with 7+ years in digital, client-facing, and operational roles. Skilled in crafting responsive user interfaces using HTML, CSS, and JavaScript, along with strong experience in client communication, data handling, Excel (MIS), and cross-functional collaboration.',
  experience: [
    {
      title: 'Frontend Developer & Tech Associate',
      company: 'Taj Finance',
      period: 'Feb 2023 – Present',
      description: 'Develop responsive and user-friendly internal tools using HTML, CSS, and JavaScript. Collaborate with cross-functional teams to enhance digital workflows and support UI improvement for business applications.'
    },
    {
      title: 'Sales Officer',
      company: 'Reliance Retail',
      period: 'Aug 2021 – Jan 2023',
      description: 'Handled product placement, promotions, and daily operations. Tracked performance data using Excel, contributed to campaign planning, and supported regional sales targets through direct client interaction.'
    },
    {
      title: 'Frontend Support & Ops Assistant',
      company: 'Taj Finance',
      period: 'May 2019 – Jul 2021',
      description: 'Updated static pages and digitized internal forms to streamline workflows. Assisted with UI enhancements on customer-facing tools and coordinated closely with operations and tech support teams.'
    },
    {
      title: 'Trainee – Web & Data Support',
      company: 'Taj Finance',
      period: 'Apr 2018 – Apr 2019',
      description: 'Maintained HTML content for internal platforms. Supported CRM tool updates, managed structured data entry, and helped resolve basic web issues under team supervision.'
    }
  ],
  education: {
    degree: 'B.Tech',
    institution: 'Rajasthan Technical University, Kota',
    year: '2019',
    coursework: 'Web Fundamentals, UI/UX'
  },
  skills: {
    technical: ['HTML', 'CSS', 'JavaScript', 'Git', 'Figma', 'Canva'],
    tools: ['Excel', 'MIS', 'CRM (Zoho, Salesforce)', 'Zendesk'],
    soft: ['Client Communication', 'Leadership', 'Team Collaboration']
  },
  volunteer: {
    role: 'Volunteer – Social Media & Outreach',
    organization: 'Aarohi Seva Sanstha',
    period: '2022 – Present',
    description: 'Manages animal welfare campaigns online. Created content to boost adoptions and awareness. Actively contributed during the 2022 Lumpy Skin Disease outbreak by coordinating posts and mobilizing local support.'
  },
  projects: 'Built and deployed frontend projects at bt12.netlify.app with responsive layout, form validation, and JS components.'
};

// Function to display resume
function displayResume() {
  console.log('\n');
  
  // Header
  const header = `${chalk.bold.cyan(resumeData.name)}\n${chalk.gray(resumeData.title)}`;
  console.log(boxen(header, {
    padding: 1,
    margin: 1,
    borderStyle: 'double',
    borderColor: 'cyan'
  }));

  // Contact Information
  const contact = [
    `📍 ${resumeData.contact.location}`,
    `📞 ${resumeData.contact.phone}`,
    `✉️  ${resumeData.contact.email}`,
    `🌐 ${resumeData.contact.website}`,
    `🔗 ${resumeData.contact.linkedin}`
  ].join('\n');
  
  console.log(boxen(contact, {
    title: chalk.bold.white('Contact'),
    padding: 1,
    margin: 1,
    borderColor: 'white'
  }));

  // Professional Summary
  console.log(boxen(resumeData.summary, {
    title: chalk.bold.green('Professional Summary'),
    padding: 1,
    margin: 1,
    borderColor: 'green'
  }));

  // Work Experience
  let experienceText = '';
  resumeData.experience.forEach(job => {
    experienceText += `${chalk.bold.yellow(job.title)}\n`;
    experienceText += `${chalk.blue(job.company)} | ${chalk.gray(job.period)}\n`;
    experienceText += `${job.description}\n\n`;
  });
  
  console.log(boxen(experienceText.trim(), {
    title: chalk.bold.yellow('Work Experience'),
    padding: 1,
    margin: 1,
    borderColor: 'yellow'
  }));

  // Education
  const education = `${chalk.bold(resumeData.education.degree)} - ${resumeData.education.year}\n${resumeData.education.institution}\nRelevant Coursework: ${resumeData.education.coursework}`;
  
  console.log(boxen(education, {
    title: chalk.bold.magenta('Education'),
    padding: 1,
    margin: 1,
    borderColor: 'magenta'
  }));

  // Skills
  const skills = [
    `${chalk.bold('Technical:')} ${resumeData.skills.technical.join(', ')}`,
    `${chalk.bold('Tools:')} ${resumeData.skills.tools.join(', ')}`,
    `${chalk.bold('Soft Skills:')} ${resumeData.skills.soft.join(', ')}`
  ].join('\n');
  
  console.log(boxen(skills, {
    title: chalk.bold.blue('Skills & Proficiencies'),
    padding: 1,
    margin: 1,
    borderColor: 'blue'
  }));

  // Volunteer Work
  const volunteer = `${chalk.bold.green(resumeData.volunteer.role)}\n${chalk.blue(resumeData.volunteer.organization)} | ${chalk.gray(resumeData.volunteer.period)}\n${resumeData.volunteer.description}`;
  
  console.log(boxen(volunteer, {
    title: chalk.bold.green('Volunteer Work'),
    padding: 1,
    margin: 1,
    borderColor: 'green'
  }));

  // Projects
  console.log(boxen(resumeData.projects, {
    title: chalk.bold.cyan('Projects'),
    padding: 1,
    margin: 1,
    borderColor: 'cyan'
  }));

  // Footer
  console.log('\n' + chalk.bold.white('Thank you for viewing my resume! 🚀'));
  console.log(chalk.gray('Connect with me on LinkedIn or check out my portfolio!\n'));
}

// Display the resume
displayResume();