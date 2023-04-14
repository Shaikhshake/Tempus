import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { Login } from './Login_Register/Login';
import { Register} from './Login_Register/Register';
import ChooseMode from './Choose_Modes/ChooseMode';
import BusinessMode from './Business_Homepage/BusinessMode';
import Business_Employee from './Business_Page/Business_Employee';
import Business_Inventory from './Business_Page/Business_Inventory';
import Business_Invoice from './Business_Page/Business_Invoice';
import FreelancerMode from './Freelancer_Homepage/FreelancerMode'; 
import Freelancer_Employer from './Freelancer_Page/Freelancer_Employer';
import Freelancer_TimeSheet from './Freelancer_Page/Freelancer_TimeSheet';
import Freelancer_Invoice from './Freelancer_Page/Freelancer_Invoice';
import './Homepage/index.css';
import './Choose_Modes/choosemode.css';
import './Business_Homepage/businesshome.css';
import './Business_Page/Styles/business_inventory.css'
import './Business_Page/Styles/business_invoice.css'
import './Freelancer_Homepage/freelancerhome.css';
import './Freelancer_Page/Styles/freelancer_invoice.css';
import './Freelancer_Page/Styles/freelancer_timesheet.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Register />,
  },
  {
    path: "chooseMode",
    element: <ChooseMode />,
  },
  {
    path: "businessmode",
    element: <BusinessMode />,
  },
  {
    path: "freelancermode",
    element: <FreelancerMode />,
  },
  {
    path: "b-employee",
    element: <Business_Employee />,
  },
  {
    path: "b-inventory",
    element: <Business_Inventory />,
  },
  {
    path: "b-invoice",
    element: <Business_Invoice />,
  },
  {
    path: "f-employer",
    element: <Freelancer_Employer />,
  },
  {
    path: "f-timesheet",
    element: <Freelancer_TimeSheet />,
  },
  {
    path: "f-invoice",
    element: <Freelancer_Invoice />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

reportWebVitals();