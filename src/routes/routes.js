import { NotFound } from "http-errors";
import {
  PAGE_ABOUT_ME,
  PAGE_CONTACT,
  PAGE_INDEX,
  PAGE_PROJECT,
  PAGE_RESUME,
} from "../constants/Config";
import AboutMe from "../screens/AboutMe";
import Contact from "../screens/Contact";
import Projects from "../screens/Projects";
import Resume from "../screens/Resume";

const routes = [
  {
    to: PAGE_ABOUT_ME,
    main: () => <AboutMe />,
    exact: true,
    name: "ABOUT ME",
  },
  {
    to: PAGE_RESUME,
    main: () => <Resume />,
    exact: true,
    name: "RESUME",
  },
  {
    to: PAGE_PROJECT,
    main: () => <Projects />,
    exact: true,
    name: "PROJECTS",
  },
  {
    to: PAGE_CONTACT,
    main: () => <Contact />,
    exact: true,
    name: "CONTACT",
  },
  {
    to: "",
    main: () => <NotFound />,
    exact: true,
    name: "",
  },
];
export default routes;
