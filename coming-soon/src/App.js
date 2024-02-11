import logo from './images/rino.png';
import './App.css';
import RememberButton from './components/rememberButton.js';
import EmailEntry from './components/emailEntry.js';
import EfficiencyLogo from './components/efficiencyLogo.js';
import SocialMediaFooter from './components/socialMediaFooter.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <EfficiencyLogo/>
        <p>EM BREVE...</p>
        <p>Estamos preparando algo incrível para você! Fique atento para o lançamento [data prevista].</p>
        <EmailEntry/>
        <RememberButton/>
        <SocialMediaFooter/>
      </header>
    </div>
  );
}

export default App;
