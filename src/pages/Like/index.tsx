import BookList from '../../components/BookList';
import useLikeStore from '../../stores/useLikeStore';

const Like = () => {
  const likes = useLikeStore((state) => state.likes);
  console.log('🚀 ~ Like ~ likes:', likes.length);
  return (
    <BookList items={likes} meta={{ total_count: likes.length ?? 0 }} metaText="내가 찜한 책" />
  );
};

export default Like;
