import './App.css';
import Button from './elements/Button/Button';
import Header from './elements/Header/Header';
import Menu from './components/Menu/Menu';
import SocialItem from './elements/SocialItem/SocialItem';
import ProfilePicture from './elements/ProfilePicture/ProfilePicture';
import Text from './elements/Text/Text';
import Icon from './elements/Icon/Icon';
import ProgressBar from './elements/ProgressBar/ProgressBar';
import SkillItem from './elements/SkillItem/SkillItem';
import Card from './elements/Card/Card';
import Input from './elements/Input/Input';

function App() {
  return (
    <div className="App">
      {/* Header */}
      {/* <div style={{ backgroundColor: 'whitesmoke', marginBottom: '1em' }}>
        <Header>Default Header</Header>
        <Header sm>Small Header</Header>
        <Header md>Medium Header</Header>
        <Header lg>Large Header</Header>
      </div> */}
      {/* Button */}
      {/* <div style={{ backgroundColor: 'whitesmoke', marginBottom: '1em' }}>
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
      </div> */}
      {/* SocialItem */}
      {/* <div style={{ backgroundColor: 'whitesmoke', marginBottom: '1em' }}>
        <SocialItem sm name="TikTok" url="google.com" />
        <SocialItem sm />
        <SocialItem md />
        <SocialItem lg />
        <SocialItem xl />
      </div> */}
      {/* Menu */}
      {/* <div style={{ backgroundColor: 'whitesmoke', marginBottom: '1em' }}>
        <Menu
          items={[
            <Button secondary md>
              Home
            </Button>,
            <Button secondary md>
              About
            </Button>,
            <Button secondary md>
              Skills
            </Button>,
            <Button secondary md>
              Work
            </Button>,
            <Button secondary md>
              Contact
            </Button>,
          ]}
        />
      </div> */}
      {/* ProfilePicture */}
      {/* <ProfilePicture src="https://avatars.githubusercontent.com/u/13524077?s=460&u=a7f857421c86667518064906c87d5262268bdddd&v=4" />
      <ProfilePicture width="200px" height="200px" />
      <ProfilePicture
        src="https://avatars.githubusercontent.com/u/13524077?s=460&u=a7f857421c86667518064906c87d5262268bdddd&v=4"
        height="600px"
      />
      <ProfilePicture src="https://avatars.githubusercontent.com/u/13524077?s=460&u=a7f857421c86667518064906c87d5262268bdddd&v=4" /> */}
      {/* Text */}
      {/* <Text>Hello World!</Text> */}
      {/* Icon */}
      {/* <Icon />
      <Icon xs />
      <Icon sm name="menu" />
      <Icon md />
      <Icon lg />
      <Icon xl /> */}

      {/* ProgressBar */}
      {/* <ProgressBar status={50} /> */}

      {/* SkillItem */}
      {/* <SkillItem
        key="1"
        logo={'https://source.unsplash.com/random/300x200'}
        name="HTML"
        proficiency={90}
      />
      <SkillItem
        key="2"
        logo={'https://source.unsplash.com/random/1000x300'}
        name="CSS"
        proficiency={75}
      />
      <SkillItem
        key="3"
        logo={'https://source.unsplash.com/random/100x200'}
        name="JS"
        proficiency={50}
      /> */}

      {/* Card */}
      {/* <Card
        coverImage="https://source.unsplash.com/random/1000x300"
        overlay={<div>Hello World!</div>}
      />
      <Card coverColor="orange" overlay={<div>Hello World!</div>} />
      <Card
        overlay={<div>Hello World!</div>}
        reference="http://www.google.com"
      /> */}

      {/* Input */}
      <Input
        type="text"
        name="firstName"
        initialValue="John"
        onChange={(e) => console.log('logging onChange', e.target.value)}
        onBlur={(e) => console.log('logging onBlur', e.target.value)}
      />
    </div>
  );
}

export default App;
