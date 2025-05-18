const TagList = ({ tags }) => {
  return (
    <div className='tag-list'>
      {tags.map((tag, index) => (
        <span key={index} className='tag-dot'>
          ● {tag}
        </span>
      ))}
    </div>
  );
};

export default TagList;
