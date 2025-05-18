import { useState } from 'react';
import Wrapper from '../../assets/wrappers/CardsSection';
import { Cards } from '../../components';
import allProjects from '../../utils/allProjects';

const AllProjectsSection = () => {
  const categories = [
    'all',
    'activation',
    'events',
    'exhibitions',
    'roadshows',
    'pos-marketing',
    'stunts',
    'team-building',
    'digital-marketing',
  ];

  const [current, setCurrent] = useState('all');

  const filteredProjects =
    current === 'all'
      ? allProjects
      : allProjects.filter((proj) => proj.category.toLowerCase() === current);

  return (
    <Wrapper className='section-container'>
      <div className='container'>
        <div className='header'>
          <h2 className='title title-medium'>Category</h2>
          <select
            className='category-select'
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat.toLowerCase()}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <Cards cardsData={filteredProjects} gridRows='big-screen grid' />
      </div>
    </Wrapper>
  );
};

export default AllProjectsSection;
