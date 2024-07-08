import { ThemeProvider } from 'styled-components';
import './App.css';
import { darkTheme, lightTheme } from './style/theme';
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';
import { Reset } from 'styled-reset';

const router = createBrowserRouter(routes)

function App() {

  const [themeState,setThemeState] = useState<string>('light')


  return (
    <Provider store={store}>
      <Reset/>
    <ThemeProvider theme={themeState === 'light' ? lightTheme : darkTheme}>
    <RouterProvider router={router}/>
    </ThemeProvider>
    </Provider>
  );
}

export default App;
