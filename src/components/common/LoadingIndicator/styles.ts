import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 50vh;
`;

export const Dot = styled.span<{ delay: string }>`
  width: 10px;
  height: 10px;
  background-color: #555;
  border-radius: 50%;
  animation: ${bounce} 1.4s infinite ease-in-out;
  animation-delay: ${(props) => props.delay};
`;
