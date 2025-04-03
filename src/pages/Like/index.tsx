import BookList from '../../components/BookList';
import useLike from '../../hooks/useLike';

const Like = () => {
  const { likes } = useLike();
  return (
    <BookList items={likes} meta={{ total_count: likes.length ?? 0 }} metaText="내가 찜한 책" />
  );
};

export default Like;
