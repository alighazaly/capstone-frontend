import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignIn from './components/SignInFolder/SignIn.jsx';
import  { Toaster } from 'react-hot-toast';
import SignUp from './components/SignUpFolder/SignUp.jsx';
import AppartmentsPage from './components/AppartmentFolder/AppartmentsPage.jsx';
import Forms from "./components/FormsFolder/Forms.jsx";
import Profile from './components/HomePage/NavbarFolder/ProfileFolder/Profile.jsx';
import ListingsPage from './components/HomePage/NavbarFolder/MyListingsFolder/ListingsPage.jsx';
import SavedPage from './components/HomePage/NavbarFolder/SavedFolder/SavedPage.jsx';
import Dashboard from './components/HomePage/NavbarFolder/DashboardFolder/Dashboard.jsx';
import EditForm from './components/HomePage/NavbarFolder/MyListingsFolder/EditFolder/EditForm.jsx';
import { UserProvider } from './components/UserProvider.js';
import RequestsPage from './components/HomePage/NavbarFolder/RequestsFolder/RequestsPage.jsx';
import Sign from './components/SignInFolder/Sign.jsx';
import ReservationPage from './ReservationsFolder/ReservationPage.jsx';
import ResponsePage from './components/HomePage/ResponseFolder/ResponsePage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/signin',
    element: <Sign />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/appartmentspage/:id',
    element: <AppartmentsPage />
  },
  {
    path: '/upload',
    element: <Forms />
  },
  {
    path:'/requests',
    element: <RequestsPage />
  },
  {
    path:'/profile',
    element: <Profile />
  },
  {
    path: '/mylistings',
    element: <ListingsPage />
  },
  {
    path: '/savedpage',
    element: <SavedPage />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/editform',
    element: <EditForm />
  },
  {
    path: '/reservations',
    element: <ReservationPage />
  },
  {
    path: '/responses',
    element: <ResponsePage />
  }
]);

const AppRouter = () => {

  return (
    <UserProvider>
      <Toaster />
      <RouterProvider router={router}></RouterProvider>
    </UserProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRouter />);
