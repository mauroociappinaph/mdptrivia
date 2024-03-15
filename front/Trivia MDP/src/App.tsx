import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="bg-blue-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">
          ¡Bienvenido a MDP QUIZ!
        </h1>
        <p className="text-lg mb-6 text-center">
          Demuestra tus conocimientos sobre Mar del Plata con MDP QUIZ.
          ¡Comienza a jugar ahora mismo!
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 w-full block">
          Comenzar
        </button>
      </div>
      <footer className="text-gray-500 text-center mt-8">
        {/* Aquí podrías agregar información de contacto o derechos de autor */}
        © 2024 MDP QUIZ. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default App;
