import { useState } from 'react';

export const useFormQuery = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const { form } = Object.fromEntries(new FormData(target));
    console.log(form);
    if (form.toString().trim().length === 0) return;
    setQuery(form.toString());
    target.reset();
    target.focus();
  };

  const handleLoading = (loading) => setIsLoading(loading);

  return { query, handleSubmit, isLoading, handleLoading };
};
