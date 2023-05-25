const { useParams } = require('react-router-dom');

export const Reviews = () => {
  const { dogId } = useParams();

  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  return <div>Image Gallery: {dogId}</div>;
};