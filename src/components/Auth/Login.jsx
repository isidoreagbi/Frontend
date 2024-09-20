import { useState } from 'react';
import { login } from '../../services/authService';
import Input from '../shared/Input';
import Button from '../shared/Button';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await login({ email, password });
      console.log(data);
      // Rediriger vers le tableau de bord après connexion réussie
      navigate('/dashboard'); // Utiliser navigate pour rediriger
    } catch (err) {
      setError('Erreur de connexion.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h1 className="text-xl">Connexion</h1>
      {error && <p className="text-red-500">{error}</p>}
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">Se connecter</Button>
    </form>
  );
};

export default Login;
