import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import AppLayout from './src/App';
import ReactAllComponent from './src/ReactAllComponent'
import ProgressBar from './src/ProgressBar'
import Autocomplete from './src/Autocomplete'
import Error from './src/Error';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children: [
            {
                path: '/',
                element: <ReactAllComponent/>,
            },
            {
                path: '/progressBar',
                element: <ProgressBar />,
            },
            {
                path: '/autocomplete',
                element: <Autocomplete />,
            }
        ],
        errorElement: <Error/>
    }
])


root.render(<RouterProvider router={appRouter} />);
