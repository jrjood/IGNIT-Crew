/* import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { LiaHandHoldingHeartSolid } from 'react-icons/lia';
import { TbArrowBigUpLinesFilled } from 'react-icons/tb';
import { BsStars } from 'react-icons/bs'; */

import Wrapper from '../../assets/wrappers/AboutPageWrappers/PropositionSection';
import { ValuesBox } from '../../components';

const values = [
  {
    icon: false,
    title: 'originality',
    text: `We put in the work to make sure the experiences we create and ideas we have never been executed before. We are always working on innovating our concepts.

`,
  },
  {
    icon: false,
    title: 'time management',
    text: `With a reliable team and premium resources, we are able to produce within a time bracket unlike like no other.


`,
  },
  {
    icon: false,
    title: 'experience',
    text: `Our work in the field for more than two decades, has resulted in us being one of Egypt's longest standing marketing agencies. Our experience is not only associated with time, but also associated with quality, we’ve consistently delivered state of the art projects throughout the years


`,
  },
  {
    icon: false,
    title: 'quality',
    text: `Having our own production house allows us to implement ideas in the most efficient way and in superior quality. It is one thing to explain your vision to someone else for execution, and a whole other thing when the visionaries themselves get to bring their own ideas to life.


`,
  },
];

const ServicesSection = () => {
  return (
    <>
      <Wrapper className='section-container'>
        {/* <div className='overlay' /> */}
        <div className='container'>
          <div className='content'>
            <h2 className='title title-big'>VALUE PROPOSITION</h2>
            <div className='cards-grid'>
              {values.map((value, index) => (
                <ValuesBox
                  icon={value.icon}
                  title={value.title}
                  text={value.text}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ServicesSection;
