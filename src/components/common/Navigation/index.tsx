import { Tabs, TabsProps } from 'antd';
import styled from 'styled-components';
import { font } from '../../../styles/font';

type Props = Pick<TabsProps, 'items' | 'activeKey' | 'onTabClick'>;

export const Navigation = ({ items, activeKey, onTabClick }: Props) => {
  return (
    <StyledTabs items={items} activeKey={activeKey} onTabClick={onTabClick} tabBarStyle={{}} />
  );
};

export const StyledTabs = styled(Tabs)`
  .ant-tabs-tab-btn {
    ${font('body1')}
  }
  .ant-tabs-ink-bar {
    background: var(--color-primary);
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: var(--color-primary);
    text-shadow: 0 0 0.25px var(--color-primary);
  }

  .ant-tabs-nav::before {
    border: 0 !important;
  }
`;
