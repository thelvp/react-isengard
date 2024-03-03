import './App.css';

const background = (
  <img
    className="background"
    src="https://i.kym-cdn.com/entries/icons/original/000/000/673/maxresdefault.jpg"
    alt="Aragorn and Legolas running in the fields of Rohan, searching for the kidnapped Hobbits Merry and Pippin."
  />
);

function App() {
  return (
    <div className="container">
      <header className="app-header">
        <p>Click Legolas and see what happens!</p>
      </header>
      { background }
    </div>
  );
}

export default App;
