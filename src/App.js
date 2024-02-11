import './App.css';
import EmailForm from './components/emailForm.js';
import EfficiencyLogo from './components/efficiencyLogo.js';
import SocialMediaFooter from './components/socialMediaFooter.js';
import CountdownTimer from './components/countdownTimer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <EfficiencyLogo/>
        <h1>EM BREVE...</h1>
        <p>Estamos preparando algo incrível para você! Fique atento para o lançamento no dia primeiro de março (01/03/2024).</p>
        <CountdownTimer/>
        <EmailForm/>
        <SocialMediaFooter/>
      </header>
    </div>
  );
}

export default App;
