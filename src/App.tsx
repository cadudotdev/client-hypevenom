import { DrawerAppBar } from './components/DrawerAppBar';

import { GlobalProvider } from './components/globalContext/GlobalProvider';
import { Main } from './components/main/Main';

function App() {
  return (
    <GlobalProvider>
      <div style={{ width: '100%', height: '100%' }}>
        <DrawerAppBar />
        <Main />
      </div>
    </GlobalProvider>
  );
}

export default App;
