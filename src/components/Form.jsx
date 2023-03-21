import PropTypes from 'prop-types';

const Form = ({ handleSubmit, isLoading }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='form'
        disabled={isLoading}
        placeholder='Example: batman'
      />
      <button>Search</button>
    </form>
  );
};
Form.propTypes = {
  handleSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
};

export { Form };
