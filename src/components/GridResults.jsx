import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card } from '@/components/Card.jsx';
import { useQuery } from '@tanstack/react-query';
import { getImages } from '@/utils/index.js';
import { Loading } from '@/components/Loading.jsx';

const GridResults = ({ query, handleLoading }) => {
  const { data, isLoading, error, isError } = useQuery(['images', query], () =>
    getImages(query),
  );

  useEffect(() => handleLoading(isLoading), [isLoading]);

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
  handleLoading: PropTypes.func,
};
export { GridResults };
