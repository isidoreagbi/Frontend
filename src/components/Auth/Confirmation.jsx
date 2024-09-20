import { useState } from 'react';
import Input from '../shared/Input';
import Button from '../shared/Button';
import { useNavigate } from 'react-router-dom';

const Confirmation = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Valider le code ici, par exemple en appelant une API
    if (code === '123456') { // Remplacez par votre logique de validation
      // Rediriger vers le tableau de bord
      navigate('/dashboard'); // Utiliser navigate pour rediriger
    } else {
      setError('Code invalide.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h1 className="text-xl">Confirmation de l'Inscription</h1>
      {error && <p className="text-red-500">{error}</p>}
      <Input
        type="text"
        placeholder="Entrez le code de confirmation"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <Button type="submit">Confirmer</Button>
    </form>
  );
};

export default Confirmation;
