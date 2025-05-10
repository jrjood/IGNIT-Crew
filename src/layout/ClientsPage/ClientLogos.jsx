import React, { useState } from 'react';
import styled from 'styled-components';
import logos from '../../assets/images/sponsorLogo';

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
const logosPerPage = 18;

const ClientLogos = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(logos.length / logosPerPage);
  const [fade, setFade] = useState(false);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setFade(true);
    setTimeout(() => {
      setCurrentPage(page);
      setFade(false);
    }, 300); // Match this with CSS transition duration
  };

  const displayedLogos = logos.slice(
    (currentPage - 1) * logosPerPage,
    currentPage * logosPerPage
  );

  return (
    <Wrapper className='client-logos'>
      <div className={`logos-grid ${fade ? 'fade-out' : 'fade-in'}`}>
        {displayedLogos.map((logo, idx) => (
          <img key={idx} src={logo.src} alt={logo.alt} />
        ))}
      </div>

      <div className='pagination'>
        {/* First Page */}
        <span onClick={() => handlePageChange(1)}>&laquo;</span>

        {/* Previous Page */}
        <span onClick={() => handlePageChange(currentPage - 1)}>&lsaquo;</span>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => (
          <span
            key={i}
            className={i + 1 === currentPage ? 'active' : ''}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </span>
        ))}

        {/* Next Page */}
        <span onClick={() => handlePageChange(currentPage + 1)}>&rsaquo;</span>

        {/* Last Page */}
        <span onClick={() => handlePageChange(totalPages)}>&raquo;</span>
      </div>
    </Wrapper>
  );
};

export default ClientLogos;
