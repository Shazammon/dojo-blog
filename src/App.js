import './App.css';
import Navbar from './Navbar';

function App() {
  const title = 'Welcome to the New Blog';
  const likes = 50;
  // const person = { name: 'yoshi', age: 30 };
  const link = "http://google.com"

  return (
    <div className="App">
      <Navbar />
      <div className="content ">
        <h1>App Component</h1>
      </div>
    </div>
  );
}

export default App;
