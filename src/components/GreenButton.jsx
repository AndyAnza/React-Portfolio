import '../css/greenButton.css';

function GreenButton({ url, text }) {
  return (
    <>
      <a data-text='Awesome' className='greenButton' href={url} target='_blank'>
        <span className='actual-text'>&nbsp;{text}&nbsp;</span>
        <span className='hover-text' aria-hidden='true'>
          &nbsp;{text}&nbsp;
        </span>
      </a>
    </>
  );
}

export default GreenButton;
