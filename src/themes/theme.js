import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto'; 

// Create custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF9800', 
      dark: '#0B0014',
      white:'#FAFAFA'
    },
    secondary: {
      main: '#FF9800',
      dark:'#191919',
      white:'#E6E8E6'
    },
    background: {
      default: '#F5F5F5',
      dark:'#000eee' // Light background
    },
    text: {
      primary: '#fefefe', // Primary text (black)
      secondary: '#FAFAFA', // Secondary text (gray)
    },
    success: {
      main: '#4CAF50', // Success color (green)
    },
    error: {
      main: '#D32F2F', // Error color (red)
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Arial', sans-serif`,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.8,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
});

export default theme;
