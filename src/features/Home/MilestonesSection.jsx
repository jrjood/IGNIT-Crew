import React from 'react';
import styled from 'styled-components';
import bgImage from '../../assets/milestones-bg.jpg'; // background image
import logo2001 from '../../assets/logo-2001.png'; // the big transparent 2001
import Counter from '../../components/Counter';

const Section = styled.section`
  color: #a9a9a9;
  display: flex;
  align-items: stretch;
  justify-content: center;
  background: url(${bgImage});
  height: 80vh;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  object-fit: cover;
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #000, transparent);
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  padding-left: 3rem;
  z-index: 2;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const TopText = styled.p`
  font-size: 0.8rem;
  line-height: 1.6;
  max-width: 700px;
`;

const Stats = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  gap: 3rem;
  font-weight: bold;
  position: relative;
`;
const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;
const StatBlock = styled.div`
  font-size: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: start;
  color: #ffc800;
  span {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    font-size: 2rem;
    font-weight: bold;
    color: #a9a9a9;
    /* margin-top: 0.5rem; */
  }
`;

const Since = styled.h2`
  font-size: 4.5rem;
  font-weight: bold;
  color: #ffc107;
  position: absolute;
  bottom: 1.5rem;
  right: -6rem;
`;

const LogoImg = styled.div`
  background: linear-gradient(
    90deg,
    rgba(255, 200, 0, 0.01),
    rgba(255, 200, 0, 0.1)
  );
  img {
    padding-right: 2rem;
    width: 100%;
  }
`;

const MilestonesSection = () => {
  return (
    <Section>
      <Overlay />
      <Content>
        <Stats>
          <TopText>
            These projects were executed in Egypt, USA, KSA, Lebanon, Morocco,
            Algeria, Jordan, Qatar, Kuwait, Bahrain, Sudan, Libya, and Syria
          </TopText>
          <StatsContainer>
            <StatBlock>
              CLIENTS
              <span>
                <Counter start='0' end='300' duration={7} /> +
              </span>
            </StatBlock>
            <StatBlock>
              PROJECTS
              <span>
                <Counter start='0' end='2000' duration={7} /> +
              </span>
            </StatBlock>
          </StatsContainer>
          <Since>SINCE</Since>
        </Stats>

        <LogoImg>
          <img src={logo2001} alt='2001' />
        </LogoImg>
      </Content>
    </Section>
  );
};

export default MilestonesSection;
