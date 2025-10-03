
import useFetch from './useFetch';

const CatFactComponent = () => {
  const { data, loading, error } = useFetch('https://catfact.ninja/fact');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      
      <pre>{JSON.stringify(data.fact, null, 2)}</pre>
    </div>
  );
};

export default CatFactComponent;
