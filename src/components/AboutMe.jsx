import ProfilePic from '../assets/profilePic/profilepic1.avif';
import GreenButton from './GreenButton';
import '../css/aboutMe.css';
import '../css/greenButton.css';

export default function AboutMe() {
  const links = [
    { text: 'LinkedIn', url: 'https://www.linkedin.com/in/andrearamirezanza/' },
    { text: 'Github', url: 'https://github.com/AndyAnza' },
  ];
  return (
    <>
      <div className='contentCard'>
        <div className='textWrapper'>
          <h2
            className='titleh2'
            id='about-me'
            style={{
              background:
                'linear-gradient(to right, #5f3dc4, #9138b3, #d74391)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {`Hi! I'm Andrea,`}
          </h2>
          <p className=' text-gray-300'>
            as a certified full-stack web developer, I thrive in fast-paced
            environments, love collaborating with teams, and specialize in
            creating seamless web experiences.
          </p>
          <p className=' text-gray-300'>
            Explore my portfolio and lets connect to create web solutions.
          </p>
          <div style={{ display: 'flex' }}>
            {
              links.map((link, index)=>  <GreenButton key={index} url={link.url} text={link.text} />)
            }
          </div>
        </div>

        <img
          src={ProfilePic}
          alt='Profile Picture'
          className='profilePicture'
          loading='lazy'
        />
      </div>
    </>
  );
}
