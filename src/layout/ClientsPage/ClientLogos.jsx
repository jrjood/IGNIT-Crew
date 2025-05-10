import React, { useState } from 'react';

import logos from '../../assets/images/sponsorLogo';
import Wrapper from '../../assets/wrappers/ClientsPageWrappers/ClientsLogos';

const logosPerPage = 16;

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
