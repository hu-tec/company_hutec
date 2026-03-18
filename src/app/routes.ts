import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import BusinessPage from "./pages/BusinessPage";
import { EducationPage } from "./pages/EducationPage";
import { CSRPage } from "./pages/CSRPage";
import { PressPage } from "./pages/PressPage";
import { PartnershipsAndCertificationsPage } from "./pages/PartnershipsAndCertificationsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "business", Component: BusinessPage },
      { path: "education", Component: EducationPage },
      { path: "csr", Component: CSRPage },
      { path: "press", Component: PressPage },
      { path: "partnerships", Component: PartnershipsAndCertificationsPage },
    ],
  },
], { basename: '/company_hutec/' });
