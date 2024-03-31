import './App.css';

const quotes = [
  "they've taken",
  "the hobbits",
  "to Isengard!",
  "Isen",
  "gard!",
  "Isen",
  "g-g-gard!",
  "*squint*",
  "the hobbits",
  "to Isengard!",
  "to Isen",
  "gard!",
  "*que music*",
];

let clickCount = 0;

const displayText = (e) => {
  const p = document.getElementById("textbubble");
  p.innerText = quotes[clickCount];
  if (clickCount < quotes.length - 1) {
    clickCount += 1;
  } else {
    clickCount = 0
  }
};

const legolas = (
  <div
    id="background"
    onClick={displayText}>
    <p id="textbubble"></p>
  </div>
);

function App() {
  return (
    <div className="container">
      <header className="app-header">
        <p>Click Legolas and see what happens!</p>
      </header>
      { legolas }
    </div>
  );
}

export default App;
