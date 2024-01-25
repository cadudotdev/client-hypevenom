import ReactDOM from 'react-dom/client';
import { GlobalProvider } from './components/globalContext/GlobalProvider.tsx';
import { HeaderProvider } from './components/headerContext/HeaderProvider.tsx';
import { GlobalStyle } from './style.ts';
import { App } from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <GlobalProvider>
      <HeaderProvider>
        <App />
      </HeaderProvider>
    </GlobalProvider>
    <GlobalStyle />
  </>
);
