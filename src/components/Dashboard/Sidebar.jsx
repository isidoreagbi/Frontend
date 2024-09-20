import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white">
      <div className="p-4">
        <h2 className="text-xl font-bold">Mon Application</h2>
      </div>
      <nav className="mt-4">
        <ul>
          <li>
            <Link to="/dashboard" className="block p-4 hover:bg-gray-700">
              Tableau de Bord
            </Link>
          </li>
          <li>
            <Link to="/groupes" className="block p-4 hover:bg-gray-700">
              Groupes
            </Link>
          </li>
          <li>
            <Link to="/profile" className="block p-4 hover:bg-gray-700">
              Profil
            </Link>
          </li>
          {/* Ajoutez d'autres liens selon les besoins */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
