import { FC } from "react";
import { Navigate, PathRouteProps } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import type { SvgIconProps } from "@mui/material/SvgIcon";
import { Login } from "@/pages";

enum Pages {
  Login,
}

type PathRouteCustomProps = {
  title?: string;
  component: FC;
  icon?: FC<SvgIconProps>;
  isPrivate?: boolean;
};

export function PrivatePage({ children }: any) {
  const authed = true;

  return authed === true ? children : <Navigate to="/" replace />;
}

type Routes = Record<Pages, PathRouteProps & PathRouteCustomProps>;

export const routes: Routes = {
  [Pages.Login]: {
    component: Login,
    path: "/",
    title: "Login",
    icon: HomeIcon,
    isPrivate: false,
  },
};
