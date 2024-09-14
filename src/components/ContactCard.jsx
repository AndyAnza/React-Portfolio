import '../css/contact.css';
import image from '../assets/contactIcons/image.gif';

const contactInfo = [
  {
    name: 'Mail',
    url: 'andrea.anza3@gmail.com',
  },
  {
    name: 'Whatsapp',
    url: 'https://wa.me/5563288837',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/AndyAnza',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/andrearamirezanza/',
  },
];

function ContactCard() {
  return (
    <div className='card-container'>
      <h2 className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent'>{`Let's get in touch :-)`}</h2>
      <div className='card'>
        <b></b>
        <img src={image} alt='image' className='gif-Card'></img>
        <div className='content'>
          <p className='title'>
            Andrea Anza
            <br />
            <span>Full-Stack Web Developer</span>
          </p>
          <ul className='sci'>
            <li>
              <a href={`mailto:${contactInfo[0].url}`}>
                <svg
                  className='fa-brands fa-mail'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  viewBox='0 0 24 24'
                >
                  <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
                  <polyline points='22,6 12,13 2,6'></polyline>
                </svg>
              </a>
            </li>
            <li>
              <a href={contactInfo[1].url} target='_blank'>
                <svg
                  className='fa-brands fa-twitter'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                >
                  <path d='M24 11.7c0 6.45-5.27 11.68-11.78 11.68-2.07 0-4-.53-5.7-1.45L0 24l2.13-6.27a11.57 11.57 0 0 1-1.7-6.04C.44 5.23 5.72 0 12.23 0 18.72 0 24 5.23 24 11.7M12.22 1.85c-5.46 0-9.9 4.41-9.9 9.83 0 2.15.7 4.14 1.88 5.76L2.96 21.1l3.8-1.2a9.9 9.9 0 0 0 5.46 1.62c5.46 0 9.9-4.4 9.9-9.83a9.88 9.88 0 0 0-9.9-9.83m5.95 12.52c-.08-.12-.27-.19-.56-.33-.28-.14-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.14-.2.29-.75.93-.91 1.12-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.43a8.64 8.64 0 0 1-1.6-1.98c-.18-.29-.03-.44.12-.58.13-.13.29-.34.43-.5.15-.17.2-.3.29-.48.1-.2.05-.36-.02-.5-.08-.15-.65-1.56-.9-2.13-.24-.58-.48-.48-.64-.48-.17 0-.37-.03-.56-.03-.2 0-.5.08-.77.36-.26.29-1 .98-1 2.4 0 1.4 1.03 2.76 1.17 2.96.14.19 2 3.17 4.93 4.32 2.94 1.15 2.94.77 3.47.72.53-.05 1.7-.7 1.95-1.36.24-.67.24-1.25.17-1.37' />
                </svg>
              </a>
            </li>
            <li>
              <a href={contactInfo[2].url} target='_blank'>
                <svg
                  className='fa-brands fa-twitter'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 448 512'
                >
                  <path d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'></path>
                </svg>
              </a>
            </li>

            <li>
              <a href={contactInfo[3].url} target='_blank'>
                <svg
                  className='fa-brands fa-linkedin-in'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 448 512'
                >
                  <path d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ContactCard;
