import './App.css';
import RememberButton from './components/rememberButton.js';
import EmailEntry from './components/emailEntry.js';
import EfficiencyLogo from './components/efficiencyLogo.js';
import SocialMediaFooter from './components/socialMediaFooter.js';
import CountdownTimer from './components/countdownTimer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <EfficiencyLogo/>
        <h1>EM BREVE...</h1>
        <p>Estamos preparando algo incrível para você! Fique atento para o lançamento [data prevista].</p>
        <CountdownTimer/>
        <EmailEntry/>
        <RememberButton/>
        <SocialMediaFooter/>
      </header>
    </div>
  );
}

export default App;
