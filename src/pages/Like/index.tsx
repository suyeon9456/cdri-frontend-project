import { lazy, Suspense } from 'react';
import useLikeStore from '../../stores/useLikeStore';
import LoadingIndicator from '../../components/common/LoadingIndicator';
const BookList = lazy(() => import('../../components/BookList'));

const Like = () => {
  const likes = useLikeStore((state) => state.likes);
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <BookList
        items={likes}
        meta={{ total_count: likes.length ?? 0 }}
        metaText="내가 찜한 책"
        emptyTitle="찜한 책이 없습니다."
      />
    </Suspense>
  );
};

export default Like;
