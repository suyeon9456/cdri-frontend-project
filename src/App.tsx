import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalStyles } from './styles/globalStyles';
import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import { theme } from './styles/token/customAntd';

const MINUTE = 1000 * 60;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 10 * MINUTE,
    },
  },
});

function App() {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <ConfigProvider theme={theme}>
          <RouterProvider router={router} />
        </ConfigProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
