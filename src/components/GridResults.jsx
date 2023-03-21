import { Card } from '@/components/Card.jsx';
import PropTypes from 'prop-types';
import { useQuery } from '@tanstack/react-query';
import { getImages } from '@/utils/index.js';

const GridResults = ({ query }) => {
  const { data, isLoading, error, isError } = useQuery(['images', query], () =>
    getImages(query),
  );
  if (isLoading) return <Loading />;

  if (isError) return <p>{error.message}</p>;

  return (
    <>
      <p className='no-results'>
        Results with: <b>{query}</b>
      </p>

      <div className='grid'>
        {/* TODO: map to data and show cards */}
        {data.results.map((res) => (
          <Card key={res.id} res={res} />
        ))}
      </div>
    </>
  );
};

GridResults.propTypes = {
  query: PropTypes.string,
};
export { GridResults };
