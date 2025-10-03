
import useFetch from './useFetch';

const CustomHookComponent = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts/3');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
     
      <pre>{JSON.stringify(data.title, null, 2)}</pre>
    </div>
  );
};

export default CustomHookComponent;
