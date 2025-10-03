
import useFetch from './useFetch';

const AdviseComponent = () => {
  const { data, loading, error } = useFetch('https://api.adviceslip.com/advice');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>

      <pre>{JSON.stringify(data.slip.advice, null, 2)}</pre>
    </div>
  );
};

export default AdviseComponent;
