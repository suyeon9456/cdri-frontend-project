import { Accordion, AccordionContainer, MetaInfo } from './styles';
import BookListItem from './BookListItem';
import { Document } from '../../models/book';
import { useCallback, useMemo, useState } from 'react';
import BookListDetailItem from './BookListDetailItem';
import { Meta } from '../../types/getBooks';

interface Props {
  items: Document[];
  meta: Meta;
  metaText: string;
}

const BookList = ({ items, meta, metaText }: Props) => {
  console.log('🚀 ~ BookList ~ meta:', meta);
  const [activeKey, setActiveKey] = useState<string>('');

  const onChangeActiveKey = useCallback((id: string) => {
    setActiveKey(id);
  }, []);

  const bookItems = useMemo(() => {
    return items.map(({ title, authors, sale_price, thumbnail, price, contents, url }, i) => ({
      key: title + i,
      label: (
        <BookListItem
          id={title + i}
          title={title}
          authors={authors}
          sale_price={sale_price}
          thumbnail={thumbnail}
          url={url}
          onChangeActiveKey={onChangeActiveKey}
          open={`${title}${i}` === activeKey}
        />
      ),
      children: (
        <BookListDetailItem
          title={title}
          authors={authors}
          price={price}
          thumbnail={thumbnail}
          contents={contents}
          url={url}
          sale_price={sale_price}
          onChangeActiveKey={onChangeActiveKey}
        />
      ),
    }));
  }, [items, activeKey]);
  return (
    <AccordionContainer>
      <MetaInfo>
        <span>{metaText}</span>
        <span>
          총 <em className="total-count">{meta.total_count}</em>건
        </span>
      </MetaInfo>
      <Accordion items={bookItems} activeKey={activeKey} />
    </AccordionContainer>
  );
};

export default BookList;
