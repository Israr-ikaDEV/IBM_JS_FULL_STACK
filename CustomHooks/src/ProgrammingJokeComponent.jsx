
import useFetch from './useFetch';

const ProgrammingJokeComponent = () => {
  const { data, loading, error } = useFetch('https://v2.jokeapi.dev/joke/Programming?type=single');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>

      <pre>{JSON.stringify(data.joke, null, 2)}</pre>
    </div>
  );
};

export default ProgrammingJokeComponent;
