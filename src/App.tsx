import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
// import SignIn from './pages/Authentication/SignIn';
// import SignUp from './pages/Authentication/SignUp';
// import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import Dashboard from './pages/Dashboard/Dashboard';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
// import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import Finance from './pages/Finance/Finance';
import MyClients from './pages/Client/MyClients';
// import Repossession from './pages/Repossessions/Repossessions';
import Repossessions from './pages/Repossessions/Repossessions';
import Branches from './pages/Branches/Branches';
import SignUp from '../src/Haseeb_Components/components/SignUp';
import SignIn from '../src/Haseeb_Components/components/SignUp';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
      <Route
          path='/signup'
          element={
            <>
             <SignUp/>
            </>
          }
        />
        <Route
          path='/signin'
          element={
            <>
              <SignIn/>
            </>
          }
        />
        <Route
          path='/'
          element={
            <>
              <PageTitle title="Dashboard" />
              <Dashboard />
            </>
          }
        />
        <Route
          path="/finance"
          element={
            <>
              <PageTitle title="Finance" />
              <Finance />
            </>
          }
        />
        <Route
          path="/clients"
          element={
            <>
              <PageTitle title="Clients" />
              <MyClients/>
            </>
          }
        />
          <Route
          path="/repossessions"
          element={
            <>
              <PageTitle title="Repossessions" />
              <Repossessions />
            </>
          }
        />
              <Route
          path="/branches"
          element={
            <>
              <PageTitle title="Branches" />
              <Branches />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        />
        {/* <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignUp />
            </>
          }
        /> */}
      </Routes>
    </>
  );
}

export default App;