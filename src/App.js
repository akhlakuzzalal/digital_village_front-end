import './App.css';

function App() {
  return (
    <div>
      <h1 className="text-center text-7xl">Headings</h1>
      <h1 className="heading_lg">Large heading</h1>
      <h3 className="heading_md">medium heading</h3>
      <h6 className="heading_sm">small heading</h6>
      <h1 className="text-center text-7xl">Buttons</h1>
      <button className="btn bg-gradient-to-r from-primary to-secondary">
        Primary
      </button>
      <button className="btn bg-info">info</button>
      <button className="btn bg-warning">warning</button>
    </div>
  );
}

export default App;
