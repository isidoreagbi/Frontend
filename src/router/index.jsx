import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from '../pages/AuthPage';
import DashboardPage from '../pages/DashboardPage';
import GroupPage from '../pages/GroupPage';
import NotFound from '../pages/NotFound';
import Confirmation from '../components/Auth/Confirmation';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />}>
          <Route path="login" element={<AuthPage />} />
          <Route path="register" element={<AuthPage />} />
        </Route>
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/dashboard/*" element={<DashboardPage />} />
        <Route path="/groups/*" element={<GroupPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
