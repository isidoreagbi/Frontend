import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import { Routes, Route } from 'react-router-dom';

const AuthPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-4">Bienvenue</h2>
        <p className="text-gray-600 text-center mb-6">
          Veuillez vous connecter ou créer un compte pour accéder à votre tableau de bord.
        </p>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
};

export default AuthPage;
