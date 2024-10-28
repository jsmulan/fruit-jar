import './App.css';
import FruitJar from './components/FruitJar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="font-sans font-black text-4xl w-full p-6">Jason's Fruit Jar</h1>
        <div className="w-full"><FruitJar /></div>
      </header>
    </div>
  );
}

export default App;
