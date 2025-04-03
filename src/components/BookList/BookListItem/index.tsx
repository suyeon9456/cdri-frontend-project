// * 썸네일
//     * 책 타이틀
//     * 책 저자
//     * 할인가

import styled, { css } from 'styled-components';
import { Document } from '../../../models/book';
import Button from '../../common/Button';
import { font } from '../../../styles/font';
import ArrowDown from '../../../assets/arrow-down.svg?react';

interface Props {
  id: string;
  onChangeActiveKey: (activeKey: string) => void;
  open: boolean;
}

const BookListItem = ({
  id,
  thumbnail,
  title,
  authors,
  sale_price,
  url,
  open,
  onChangeActiveKey,
}: Props & Pick<Document, 'title' | 'authors' | 'sale_price' | 'thumbnail' | 'url'>) => {
  return (
    <Item open={open}>
      <Thumbnail src={thumbnail} alt="book thumbnail image" />
      <BookInfo>
        <h5>{title}</h5>
        <span>{authors.join(',')}</span>
      </BookInfo>
      <Price>{sale_price.toLocaleString()}원</Price>
      <ButtonWrap>
        <Button type="primary" label="구매하기" href={url} />
        <Button
          type="lightGray"
          label="상세보기"
          htmlType="button"
          onClick={() => onChangeActiveKey(id)}
          icon={<ArrowDown width={14} />}
        />
      </ButtonWrap>
    </Item>
  );
};

export default BookListItem;

const Item = styled.div<{ open: boolean }>`
  background: var(--color-white);
  height: 100px;
  display: flex;
  align-items: center;
  width: 960px;
  justify-content: space-between;
  padding: 12px;
  box-sizing: border-box;
  opacity: 1;
  transform: scaleY(1);
  ${({ open }) =>
    open === true &&
    css`
      display: none;
      height: 0px;
      opacity: 0;
      transform: scaleY(0.95);
      padding: 0;
    `}
  transition: all 0.3s ease-in-out;
`;

const Thumbnail = styled.img`
  width: 48px;
  height: 68px;
`;

const BookInfo = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 16px;
  width: 408px;
  h5,
  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  h5 {
    ${font('Title3')}
    max-width: 280px;
  }
  span {
    color: var(--color-text-secondary);
  }
`;

const Price = styled.span`
  padding-left: 20px;
`;

const ButtonWrap = styled.div`
  gap: 10px;
  display: inline-flex;
`;
