import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './customer/components/Navbar/Navbar';
import { ThemeProvider } from '@mui/material/styles';
import customeTheme from './Theme/customTheme';

function App() {
  return (
   <ThemeProvider theme={customeTheme}>
     <div> 
      <Navbar /> 
      </div>
   </ThemeProvider>
  );
}

export default App;
