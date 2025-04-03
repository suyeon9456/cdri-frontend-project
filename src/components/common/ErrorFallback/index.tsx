import styled from 'styled-components';
import ErrorIcon from '../../../assets/icon/error.svg?react';
import Button from '../Button';
import { font } from '../../../styles/font';

interface Props {
  onReset?: () => void;
}

const ErrorFallback = ({ onReset }: Props) => {
  return (
    <Container>
      <ErrorIcon width={50} />
      <ErrorMessage>이런, 뭔가 문제가 있는 것 같습니다.</ErrorMessage>
      {onReset && (
        <Button
          type="lightGray"
          label="다시 시도하기"
          onClick={() => {
            onReset?.();
          }}
        />
      )}
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 14rem;
`;

export const ErrorMessage = styled.h2`
  ${font('h2')}
  @media (max-width: 767px) {
    ${font('h3')}
  }
`;

export default ErrorFallback;
