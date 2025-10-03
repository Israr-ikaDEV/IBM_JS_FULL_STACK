
import useFetch from './useFetch';

const KanyeWestComponent = () => {
  const { data, loading, error } = useFetch('https://api.kanye.rest');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      
      <pre>{JSON.stringify(data.quote, null, 2)}</pre>
    </div>
  );
};

export default KanyeWestComponent;
