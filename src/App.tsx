import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalStyles } from './styles/globalStyles';
import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: 'Noto Sans KR, system-ui, Avenir, Helvetica, Arial, sans-serif',
            },
            components: {
              Select: {
                optionSelectedBg: '#FFFFFF',
                activeOutlineColor: 'none',
                activeBorderColor: 'none',
                optionActiveBg: '#FFFFFF',
                optionHeight: 30,
              },
              Collapse: {
                headerBg: '#FFFFFF',
                headerPadding: '10px 30px 10px',
              },
            },
          }}
        >
          <RouterProvider router={router} />
        </ConfigProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
