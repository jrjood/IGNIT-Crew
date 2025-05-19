import { Template, InspirationSection } from '../../layout/ProjectTemplate';
import img1 from '../../assets/images/AllProjectsGallery/Biskrem/img1.jpg';
import img2 from '../../assets/images/AllProjectsGallery/Biskrem/img2.jpg';
import img3 from '../../assets/images/AllProjectsGallery/Biskrem/img3.jpg';
import img4 from '../../assets/images/AllProjectsGallery/Biskrem/img4.jpg';
import img5 from '../../assets/images/AllProjectsGallery/Biskrem/img5.jpg';
import img6 from '../../assets/images/AllProjectsGallery/Biskrem/img6.jpg';
import img7 from '../../assets/images/AllProjectsGallery/Biskrem/img7.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7];
const tags = ['BISKREM', 'NORTH COAST, 2024', 'ACTIVATION EVENT', 'FMCG'];
const desc =
  'End of Summer with Biscream in the North Coast ☀️ As summer says goodbye, we celebrated with Biscream in the North Coast—full of games, laughter, and delicious treats! From exciting competitions to those sweet moments of joy, it was a perfect way to wrap up the season! 🎉';

const ProjectBritishPetroleum = () => {
  return (
    <>
      <Template images={images} tags={tags} desc={desc} />
      <InspirationSection quote='SUMMER WITH BISCREAM IN THE NORTH COAST' />
    </>
  );
};
export default ProjectBritishPetroleum;
