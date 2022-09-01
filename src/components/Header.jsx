import githubImg from '../assets/github.png';
import linkedinImg from '../assets/linkedin.png';
import twitterImg from '../assets/twitter.png';

const Header = () => {
  return (
    <div className='jspond-header'>
      <div></div>
      <div className='jspond-header-title'>{`<JS Pond />`}</div>
      <div className='jspond-header-credits'>
        <span>
          <a target='_blank' href='https://github.com/pradeep-mishra/jspond'>
            <img src={githubImg} alt='github' />
          </a>
        </span>
        <span>
          <a target='_blank' href='https://www.linkedin.com/in/ipradeepmishra/'>
            <img src={linkedinImg} alt='linkedin' />
          </a>
        </span>
        <span>
          <a target='_blank' href='https://twitter.com/ipradeepmishra'>
            <img src={twitterImg} alt='twitter' />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Header;
