import { Button, Input } from './Movies.styled';

const Movies = () => {
  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  return (
    <div>
      <form>
        <Input />
        <Button>Search</Button>
      </form>
    </div>
  );
};

export default Movies;