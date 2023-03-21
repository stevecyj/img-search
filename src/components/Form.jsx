import { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Example: batman' name='form' />
      <button>Search</button>
    </form>
  );
};
Form.propTypes = {
  handleSubmit: PropTypes.func,
};

export { Form };
