import { useParams, useNavigate } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/CardsSection';
import { Cards } from '../../components';
import allProjects from '../../utils/allProjects';

const AllProjectsSection = () => {
  const { category } = useParams();
  const navigate = useNavigate();

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

  const current = category ? category.toLowerCase() : 'all';

  const filteredProjects =
    current === 'all'
      ? allProjects
      : allProjects.filter((proj) => proj.category.toLowerCase() === current);

  return (
    <Wrapper className='section-container'>
      <div className='container'>
        <div className='header'>
          <h2 className='title title-medium'>Projects</h2>
          <select
            className='category-select'
            value={current}
            onChange={(e) => {
              const selected = e.target.value;
              navigate(
                selected === 'all'
                  ? '/IGNIT-Crew/projects'
                  : `/IGNIT-Crew/projects/${selected}`
              );
            }}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat.toLowerCase()}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <Cards cardsData={filteredProjects} gridRows='big-screen grid ' />
      </div>
    </Wrapper>
  );
};

export default AllProjectsSection;
