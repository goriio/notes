import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle({
  '*': {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
    fontFamily: 'sans-serif',
  },

  body: {
    minHeight: '100vh',
  },
});
