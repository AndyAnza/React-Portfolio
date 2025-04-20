import Header from '../components/Header.jsx';
import MobileNavbar from '../components/MobileNavbar.jsx';
import Skills from '../components/Skills.jsx';
import html from '../assets/skillsIcons/html.png';
import css from '../assets/skillsIcons/css.png';
import javascript from '../assets/skillsIcons/javascript.png';
import typescript from '../assets/skillsIcons/typescript.png';
import node from '../assets/skillsIcons/node.png';
import express from '../assets/skillsIcons/express.png';
import react from '../assets/skillsIcons/react.png';
import vue from '../assets/skillsIcons/vue.svg';
import tailwind from '../assets/skillsIcons/tailwind.png';
import bootstrap from '../assets/skillsIcons/bootstrap.png';
import sql from '../assets/skillsIcons/sql.png';
import mongoDB from '../assets/skillsIcons/mongoDB.png';
import git from '../assets/skillsIcons/git.svg';
import windows from '../assets/skillsIcons/windows.png';
import jest from '../assets/skillsIcons/jest.png';
import php from '../assets/skillsIcons/php.svg';
import laravel from '../assets/skillsIcons/laravel.svg';
import github from '../assets/skillsIcons/github.svg';
import postman from '../assets/skillsIcons/postman.svg';
import jira from '../assets/skillsIcons/jira.svg';
import bitbucket from '../assets/skillsIcons/bitbucket.svg';

const mainStack = [
  { name: 'HTML', image: html },
  { name: 'CSS', image: css },
  { name: 'JavaScript', image: javascript },
  { name: 'TypeScript', image: typescript },
  { name: 'React', image: react },
  { name: 'Vue', image: vue },
  { name: 'Tailwind', image: tailwind },
  { name: 'SQL', image: sql },
  { name: 'Git', image: git },
  { name: 'Windows', image: windows },
  { name: 'Jest', image: jest },
];
const haveWorkedWith = [
  { name: 'PHP', image: php },
  { name: 'Laravel', image: laravel },
  { name: 'Node.js', image: node },
  { name: 'Express.js', image: express },
  { name: 'Bootstrap', image: bootstrap },
  { name: 'MongoDB', image: mongoDB },
];

const tools = [
  {
    name: 'GitHub',
    image: github,
  },
  { name: 'Bitbucket', image: bitbucket },
  { name: 'Jira', image: jira },
  { name: 'Postman', image: postman },
];

export default function SkillsPage() {
  return (
    <>
      <Header />
      <MobileNavbar />

      <main className='flex items-center flex-col'>
        <Skills description={`My Tech Stack`} skills={mainStack} />
        <Skills description={`Have Worked with`} skills={haveWorkedWith} />
        <Skills description={`Tools`} skills={tools} />
      </main>
    </>
  );
}
