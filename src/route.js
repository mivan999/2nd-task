import {
  FAVOURITES_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  YOUTUBE_ROUTE,
} from "./utils/consts";
import Youtube from "./page/youtube";
import Favourites from "./page/favourites";
import Auth from "./page/Auth";

export const authRoutes = [
  {
    path: YOUTUBE_ROUTE,
    Component: Youtube,
  },
  {
    path: FAVOURITES_ROUTE,
    Component: Favourites,
  },
];

export const publicRoutes = [
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
];
