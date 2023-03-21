import PropTypes from 'prop-types';

const Card = ({ res }) => {
  return (
    <div>
      <img
        src={res.urls.small}
        alt={res.alt_description || 'photo'}
        loading='lazy'
      />
      <div className='hidden'>
        <h4>{res.description}</h4>
        <b>{res.likes} ❤️</b>
      </div>
    </div>
  );
};
Card.propTypes = {
  res: PropTypes.object,
};

export { Card };
