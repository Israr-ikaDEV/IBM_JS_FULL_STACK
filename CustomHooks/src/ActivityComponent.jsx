
import useFetch from './useFetch';

const ActivityComponent = () => {
  const { data, loading, error } = useFetch('https://www.boredapi.com/api/activity/');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ActivityComponent;
