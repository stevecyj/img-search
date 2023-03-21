import { Card } from '@/components/Card.jsx';
import PropTypes from 'prop-types';

const GridResults = ({ query }) => {
  return (
    <>
      <p className='no-results'>
        Results with: <b>{query}</b>
      </p>

      <div className='grid'>{/* TODO: map to data and show cards */}</div>
    </>
  );
};

GridResults.propTypes = {
  query: PropTypes.string,
};
export { GridResults };
