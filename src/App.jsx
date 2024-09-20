import AppRouter from './router';
import './index.css'; 

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <AppRouter />
    </div>
  );
};

export default App;
