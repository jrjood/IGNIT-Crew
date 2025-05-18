import Wrapper from '../assets/wrappers/InspirationSection';

const InspirationSection = ({ children, quote }) => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='content '>
          <div className='feature'>
            {quote && <h2 className='quote'>{quote}</h2>}
            {children}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default InspirationSection;
