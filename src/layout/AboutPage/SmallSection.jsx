import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: var(--primary-400);
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 6rem;
  h3 {
    color: var(--white);
    font-weight: 700;
    font-size: 3.2rem;
    text-transform: uppercase;
    text-align: center;
  }
  @media (max-width: 36rem) {
    padding: 6rem 6rem;
    h3 {
      font-size: 2rem;
    }
  }
`;
const SmallSection = () => {
  return (
    <Wrapper>
      <h3>EMPOWERING INNOVATIONS</h3>
    </Wrapper>
  );
};

export default SmallSection;
