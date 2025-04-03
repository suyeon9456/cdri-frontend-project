import { createBrowserRouter } from 'react-router-dom';
import Search from '../pages/Search';
import Like from '../pages/Like';
import Layout from '../pages/Layout';
import ErrorFallback from '../components/common/ErrorFallback';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorFallback />,
    children: [
      {
        path: '/',
        element: <Search />,
      },
      {
        path: '/search',
        element: <Search />,
      },
      {
        path: '/like',
        element: <Like />,
      },
    ],
  },
]);

export default router;
