import styled from 'styled-components';
import bgImage from '../images/backgrounds/milestones-bg.jpg'; // background image

const Wrapper = styled.section`
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
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #000, transparent);
    z-index: 1;
  }
  .content {
    position: relative;
    padding-left: 3rem;
    z-index: 2;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .top-text {
    font-size: 0.8rem;
    line-height: 1.6;
    max-width: 700px;
  }
  .stats-container {
    display: flex;
    justify-content: center;
    height: 100%;
    flex-direction: column;
    gap: 3rem;
    font-weight: bold;
    position: relative;
  }
  .stats {
    display: flex;
    align-items: center;
    gap: 3rem;
  }
  .stat-block {
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
  }
  .since {
    font-size: 4.5rem;
    font-weight: bold;
    color: #ffc107;
    position: absolute;
    bottom: 1.5rem;
    right: -6rem;
  }
  .logo {
    background: linear-gradient(
      90deg,
      rgba(255, 200, 0, 0.01),
      rgba(255, 200, 0, 0.1)
    );
    img {
      padding-right: 2rem;
      width: 100%;
    }
  }
`;

export default Wrapper;
