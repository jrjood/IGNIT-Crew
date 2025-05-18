import { ImageSlider, TagList } from '../../components';

const Template = ({ images, tags, desc }) => {
  return (
    <div>
      <div className='gallery-wrapper'>
        <TagList tags={tags} />
        <ImageSlider images={images} />
      </div>

      <div className='project-details'>
        <h2 className='details-title'>Project details</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};
export default Template;
