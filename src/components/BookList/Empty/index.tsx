import { EmptyContainer, EmptyImage } from './styles';
import emptyBookImg from '../../../assets/empty_book.png';

const Empty = ({ title }: { title: string }) => {
  return (
    <EmptyContainer>
      <EmptyImage src={emptyBookImg} alt="empty book list" />
      {title}
    </EmptyContainer>
  );
};

export default Empty;
