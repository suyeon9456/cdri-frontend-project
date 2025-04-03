import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalStyles } from './styles/globalStyles';
import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import { theme } from './styles/token/customAntd';
const queryClient = new QueryClient();

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
