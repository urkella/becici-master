import { LandingPage, ApartamentPage } from "./containers";

const routeConfiguration = () => {
  return [
    {
      path: "/",
      name: "LandingPage",
      component: <LandingPage />,
    },
    {
      path: "/apartament/:id",
      name: "ApartamentPage",
      component: <ApartamentPage />,
    },
  ];
};

export default routeConfiguration;
