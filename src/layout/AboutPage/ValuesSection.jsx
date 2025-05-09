import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { LiaHandHoldingHeartSolid } from 'react-icons/lia';
import { TbArrowBigUpLinesFilled } from 'react-icons/tb';
import { BsStars } from 'react-icons/bs';

import Wrapper from '../../assets/wrappers/AboutPageWrappers/ValuesSection';
import { ValuesBox } from '../../components';

const values = [
  {
    icon: <IoMdCheckmarkCircleOutline />,
    title: 'get it done',
    text: `We're all about making things happen. We don't just talk the talk; we walk the walk. We're determined to bring our ideas to life and make them a reality. And we don't stop until we've achieved the results you deserve. It's all about working together to reach our goals and celebrate our wins!
`,
  },
  {
    icon: <LiaHandHoldingHeartSolid />,
    title: 'love what we do',
    text: `We're all about that passion! We're not just working for a paycheck; we're working for the brands we love. We know that every brand has a story to tell, and we're dedicated to bringing that story to life. We put our heart and soul into every project we take on to create an unforgettable experience that perfectly captures the essence of the brand.

`,
  },
  {
    icon: <TbArrowBigUpLinesFilled />,
    title: 'always growing',
    text: `We believe that growth is a daily journey. We're constantly looking for ways to improve and be better at what we do. We're not afraid of honest feedback, because we know it helps us grow. And when we hit a roadblock, we don't give up - we find a way to overcome it and come out even stronger.

`,
  },
  {
    icon: <BsStars />,
    title: 'keep it real',
    text: `We're all about honesty and integrity. We treat others with respect and dignity, because that's just the right thing to do. We start with trust, and we take the time to understand different perspectives. We hold ourselves accountable and always do the right thing. With us, you can always count on integrity!

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
            <h2 className='title title-big'>values</h2>
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
