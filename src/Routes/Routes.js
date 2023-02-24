import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home';
import Skills from '../Pages/Skills/Skills';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/#contact',
        element: <Contact />
      },
      {
        path: '/#skills',
        element: <Skills />
      }
    ]
  }
]);
