import { ThemeProvider } from 'styled-components';
import './App.css';
import { darkTheme, lightTheme } from './style/theme';
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {

  const [themeState,setThemeState] = useState<string>('light')

  return (
    <Provider store={store}>
    <ThemeProvider theme={themeState === 'light' ? lightTheme : darkTheme}>
    <div className="App">
      
    </div>
    </ThemeProvider>
    </Provider>
  );
}

export default App;
