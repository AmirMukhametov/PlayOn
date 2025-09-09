import { Navigate, RouteObject } from 'react-router';
import App from '../App';
import { routesMasks } from '../../shared/config/routesMasks';
import { HomePage } from 'pages/home/ui';
import { SignInPage } from 'pages/SignInPage';
import { SignUpPage } from 'pages/sign-up';
import { MoviesPage } from 'pages/movies/ui';
import { ProfilePage } from 'pages/profile';
import { SeriesPage } from 'pages/series';
import { TopPage } from 'pages/top';
import { CommingSoonPage } from 'pages/commingSoon';


export const routes: RouteObject[] = [
  {
    path: routesMasks.main.mask,
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <HomePage />
        ),
      },
      {
        path: routesMasks.login.mask,
        element: <SignInPage />,
      },
      {
        path: routesMasks.signup.mask,
        element: <SignUpPage />,
      },
      {
        path: routesMasks.movies.mask,
        element: <MoviesPage />,
      },
      {
        path: routesMasks.series.mask,
        element: <SeriesPage />,
      },
      {
        path: routesMasks.top.mask,
        element: <TopPage />,
      },
      {
        path: routesMasks.profile.mask,
        element: <ProfilePage />,
      },
      {
        path: routesMasks.commingSoon.mask,
        element: <CommingSoonPage />,
      },
      {
        path: '*',
        element: <Navigate to={routesMasks.main.mask} replace />,
      },
      // {
      //   path: routesMasks.draftsById.mask,
      //   element: (
      //     <ProtectedPage>
      //       <DraftsPage />
      //     </ProtectedPage>
      //   ),
      // },
    ],
  },
];
