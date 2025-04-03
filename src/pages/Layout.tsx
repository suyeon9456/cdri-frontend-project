import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useCallback, useMemo } from 'react';
import { Navigation } from '../components/common/Navigation';
import { TabsProps } from 'antd';

const items: TabsProps['items'] = [
  {
    key: 'search',
    label: '도서 검색',
  },
  {
    key: 'like',
    label: '내가 찜한 책',
  },
];

type TabKey = (typeof items)[number]['key'];

const Layout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const onRefresh = useCallback(() => {
    navigate('/');
  }, []);

  const activePath = useMemo(
    () => items?.find(({ key }) => pathname.includes(key))?.key ?? items[0].key,
    [pathname],
  );

  const onNaviClick = useCallback((activeKey: TabKey) => {
    navigate(`/${activeKey}`);
  }, []);
  return (
    <>
      <Header>
        <div className="header-inner">
          <Logo onClick={onRefresh} type="button">
            CERTICOS BOOKS
          </Logo>
          <div className="center">
            <Navigation items={items} activeKey={activePath} onTabClick={onNaviClick} />
          </div>
        </div>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

const Header = styled.header`
  border-bottom: 1px solid #eff1f5;
  height: 72px;
  padding: 0 2rem;
  .header-inner {
    display: flex;
    height: 100%;
    align-items: center;
  }

  img {
    height: 29px;
    width: 44px;
  }
  .center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 20px;
  }

  @media (max-width: 767px) {
    .header-inner {
      padding: 0 2rem;
    }
  }
`;

const Logo = styled.button`
  background: transparent;
`;

export default Layout;
