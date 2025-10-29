import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './customer/components/Navbar/Navbar';
import { ThemeProvider } from '@mui/material/styles';
import customeTheme from './Theme/customTheme';
import Home from './customer/components/Navbar/pages/Home/home';
import CategoryGrid from './customer/components/Navbar/pages/Home/CategoryGrid/categoryGrid';
function App() {
  return (
   <ThemeProvider theme={customeTheme}>
     <div> 
      <Navbar /> 
      <Home />
      <CategoryGrid />
      </div>
   </ThemeProvider>
  );
}

export default App;
