import { Collapse } from 'antd';
import styled from 'styled-components';
import { font } from '../../styles/font';

export const AccordionContainer = styled.div``;

export const Accordion = styled(Collapse)`
  border: 0;
  border-radius: 0;
`;
export const MetaInfo = styled.div`
  margin-bottom: 20px;
  text-align: left;
  padding: 12px;
  ${font('caption')}
  display: flex;
  gap: 10px;
  .total-count {
    font-style: normal;
    color: var(--color-primary);
  }
`;
