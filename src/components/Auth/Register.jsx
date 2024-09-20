import { useState } from 'react';
import { register } from '../../services/authService';
import Input from '../shared/Input';
import Button from '../shared/Button';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }

    try {
      const data = await register({ name, email, password, password_confirmation: passwordConfirmation });
      console.log(data);
      // Simuler l'envoi d'un code et rediriger vers la page de saisie du code
      navigate('/dashboard'); // Utiliser navigate pour rediriger
    } catch (err) {
      setError('Erreur d\'inscription.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h1 className="text-xl">Inscription</h1>
      {error && <p className="text-red-500">{error}</p>}
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <Input
        type="password"
        placeholder="Confirmer le mot de passe"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
      <Button type="submit">S inscrire</Button>
    </form>
  );
};

export default Register;
