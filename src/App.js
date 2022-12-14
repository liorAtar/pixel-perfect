import './style/app.css';
import AppHeader from './cmp/AppHeader';
import MainSection from './cmp/MainSection';
import InfoSection from './cmp/InfoSection';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <MainSection />
      <InfoSection />
    </div>
  );
}

export default App;
