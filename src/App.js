import './App.css';
import { Fragment } from 'react';
import NavBar from './components/header';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import DeviceCatalog from './pages/device-catalog';
import Emails from './pages/emails';
import Services from './pages/services';
import Storage from './pages/storage';
import Subscription from './pages/subscription';
import PhotoLibrary from './pages/photo-library';
function App() {
  return (
    <Fragment>
      <NavBar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/services' element={<Services />}>
          <Route path="emails" element={<Emails />} />
          <Route path="devices" element={<DeviceCatalog />} />
          <Route path="storage" element={<Storage />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="photolibrary" element={<PhotoLibrary />} />
        </Route>
        <Route path="/profile" element={<div className='m-10'>Your profile (coming soon)</div>} />
        <Route path="/logout" element={<div className='m-10'>Signed out successfully!</div>} />

      </Routes>
    </Fragment>
  );
}

export default App;
