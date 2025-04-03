import BookList from '../../components/BookList';
import useLikeStore from '../../stores/useLikeStore';

const Like = () => {
  const likes = useLikeStore((state) => state.likes);
  return (
    <BookList
      items={likes}
      meta={{ total_count: likes.length ?? 0 }}
      metaText="내가 찜한 책"
      emptyTitle="찜한 책이 없습니다."
    />
  );
};

export default Like;
