import './App.css';
import Header from './elements/Header/Header';

function App() {
  return (
    <div className="App">
      <Header> Default Header </Header>
      <Header sm> Small Header </Header>
      <Header md> Medium Header </Header>
      <Header lg> Large Header </Header>
    </div>
  );
}

export default App;
