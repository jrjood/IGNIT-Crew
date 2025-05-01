import styled from 'styled-components';

const Wrapper = styled.div`
  background: #111;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  height: 320px;
  margin-bottom: 3rem;
  .client-image {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
  }
  .client-name {
    margin: 0.5rem 0 0;
  }
  .client-role {
    color: #aaa;
    margin: 0;
    font-size: 0.9rem;
  }
  .stars {
    margin: 1rem 0;
    color: gold;
  }
  .feedback {
    font-style: italic;
    color: #ddd;
  }
`;

export default Wrapper;
