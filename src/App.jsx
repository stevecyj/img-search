import { useState, useEffect } from 'react';
import './App.css';
import { Title } from '@/components/Title.jsx';
import { Form } from '@/components/Form.jsx';
import { GridResults } from '@/components/GridResults.jsx';
import { useFormQuery } from '@/hook/index.js';

function App() {
  const { query, handleSubmit } = useFormQuery();

  return (
    <div>
      <Title />
      <Form handleSubmit={handleSubmit} />
      {query.length > 0 && <GridResults query={query} />}
    </div>
  );
}

export default App;
