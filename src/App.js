import './App.css';
import Button from './elements/Button/Button';
import Header from './elements/Header/Header';

function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: 'whitesmoke', marginBottom: '1em' }}>
        <Header>Default Header</Header>
        <Header sm>Small Header</Header>
        <Header md>Medium Header</Header>
        <Header lg>Large Header</Header>
      </div>
      <div style={{ backgroundColor: 'whitesmoke', marginBottom: '1em' }}>
        <Button> Default Header</Button>
        <Button sm>Small Header</Button>
        <Button md>Medium Header</Button>
        <Button lg>Large Header</Button>
      </div>
      <div style={{ backgroundColor: 'whitesmoke', marginBottom: '1em' }}>
        <Button primary> Default Header </Button>
        <Button primary sm>
          Small Header
        </Button>
        <Button primary md>
          Medium Header
        </Button>
        <Button primary lg>
          Large Header
        </Button>
      </div>
      <div style={{ backgroundColor: 'whitesmoke', marginBottom: '1em' }}>
        <Button secondary>Default Header </Button>
        <Button secondary sm>
          Small Header
        </Button>
        <Button secondary md>
          Medium Header
        </Button>
        <Button secondary lg>
          Large Header
        </Button>
      </div>
    </div>
  );
}

export default App;
