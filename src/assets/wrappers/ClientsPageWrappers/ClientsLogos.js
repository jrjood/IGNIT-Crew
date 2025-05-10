import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 40px 20px;
  background: #f9f9f9;
  text-align: center;

  .logos-grid {
    display: grid;
    grid-template-columns: repeat(6, minmax(100px, 1fr));
    gap: 30px;
    justify-items: center;
    align-items: center;
    transition: opacity 0.3s ease;
    opacity: 1;
  }

  .fade-out {
    opacity: 0;
  }

  .fade-in {
    opacity: 1;
  }
  .logos-grid img {
    max-width: 80px;
    transition: transform 0.3s ease;
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
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  }

  .pagination .active {
    background: #007bff;
    color: white;
  }
`;

export default Wrapper;
