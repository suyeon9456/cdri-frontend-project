import styled from 'styled-components';
import { Document } from '../../models/book';
import { font } from '../../styles/font';
import Button from '../common/Button';
import ArrowUp from '../../assets/icon/arrow-up.svg?react';
import LikeIcon from '../../assets/icon/like.svg?react';
import useLikeStore from '../../stores/useLikeStore';

interface Props {
  id: string;
  onChangeActiveKey: (id: string) => void;
}

const BookListDetailItem = ({
  id,
  thumbnail,
  title,
  authors,
  contents,
  url,
  sale_price,
  price,
  onChangeActiveKey,
}: Props & Omit<Document, 'isbn' | 'publisher' | 'translators' | 'status'>) => {
  const { toggleLike } = useLikeStore();
  return (
    <DetailBox>
      <ThumbnailWrap>
        <Thumbnail src={thumbnail} alt={`${title} thumbnail`} />
        <button
          onClick={() =>
            toggleLike({ id, thumbnail, title, authors, contents, url, sale_price, price })
          }
        >
          <LikeIcon width={20} />
        </button>
      </ThumbnailWrap>
      <BookInfo>
        <div className="header">
          <h5>{title}</h5>
          <span className="authors">{authors}</span>
        </div>
        <div className="contents">
          <h6>책 소개</h6>
          {contents}
        </div>
      </BookInfo>
      <PaymentInfo>
        <Button
          type="lightGray"
          label="상세보기"
          icon={<ArrowUp width={14} />}
          onClick={() => onChangeActiveKey('')}
        />
        <div className="price-info">
          <span className="price">
            <em>원가</em>
            <span>{price.toLocaleString()}원</span>
          </span>
          <span className="sale_price">
            <em>할인가</em>
            {sale_price.toLocaleString()}원
          </span>
        </div>
        <Button type="primary" label="구매하기" block href={url} />
      </PaymentInfo>
    </DetailBox>
  );
};

export const DetailBox = styled.div`
  height: 344px;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
`;

export const Thumbnail = styled.img`
  width: 210px;
  height: 280px;
`;

export const BookInfo = styled.div`
  height: 280px;
  display: inline-flex;
  flex-direction: column;
  align-items: start;
  width: 360px;
  .header {
    width: 100%;
    display: inline-flex;
    h5,
    span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    h5 {
      ${font('Title3')}
      margin: 0;
      max-width: 230px;
    }

    span.authors {
      ${font('caption')}
      color: var(--color-text-sub-title);
    }
  }
  h6 {
    ${font('body2Bold')}
    margin: 24px 0;
  }
  .contents {
    text-align: left;
  }
`;

export const PaymentInfo = styled.div`
  display: inline-flex;
  flex-direction: column;
  height: 280px;
  justify-content: space-between;
  align-items: end;
  width: 240px;
  .price-info {
    display: inline-flex;
    flex-direction: column;
    gap: 10px;
    span {
      ${font('Title3')}
      &.price {
        span {
          font-weight: 350;
          text-decoration: line-through;
        }
      }
    }
    em {
      margin-right: 5px;
      font-weight: 500;
      font-size: 10px;
      line-height: 22px;
      color: var(--color-text-sub-title);
    }
  }
`;

export const ThumbnailWrap = styled.div`
  position: relative;
  button {
    position: absolute;
    right: 10px;
    top: 10px;
    background: transparent;
  }
`;
export default BookListDetailItem;
