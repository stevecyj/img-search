import { Title } from '@/components/Title.jsx';
import { Form } from '@/components/Form.jsx';
import { GridResults } from '@/components/GridResults.jsx';
import { useFormQuery } from '@/hook/index.js';

function App() {
  const { query, handleSubmit, isLoading, handleLoading } = useFormQuery();

  return (
    <div>
      <Title />
      <Form handleSubmit={handleSubmit} isLoading={isLoading} />
      {query.length > 0 && (
        <GridResults query={query} handleLoading={handleLoading} />
      )}
    </div>
  );
}

export default App;
