import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 40px 20px;
  background: #f9f9f9;
  text-align: center;

  .logos-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 1fr));
    column-gap: 1rem;
    row-gap: 7rem;
    justify-items: center;
    align-items: center;
    transition: var(--transition);
    opacity: 1;
  }

  .fade-out {
    opacity: 0;
  }

  .fade-in {
    opacity: 1;
  }
  .logos-grid img {
    max-width: 10rem;
    transition: var(--transition);
  }

  .logos-grid img:hover {
    transform: scale(1.1);
  }

  .pagination {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .pagination span {
    padding: 8px 12px;
    background: #fff;
    border-radius: var(--border-radius);
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  }

  .pagination .active {
    background: #007bff;
    color: white;
  }
  @media (max-width: 52.5rem) {
    .logos-grid {
      grid-template-columns: repeat(3, minmax(100px, 1fr));
    }
  }
  @media (max-width: 44rem) {
    .logos-grid {
      grid-template-columns: repeat(2, minmax(100px, 1fr));
    }
  }
  @media (max-width: 22rem) {
    .logos-grid {
      grid-template-columns: repeat(1, minmax(100px, 1fr));
    }
  }
`;

export default Wrapper;
