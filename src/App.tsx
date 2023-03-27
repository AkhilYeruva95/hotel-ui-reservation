import React from 'react';
import './App.css';
import Header from './component/CommonComponents/Header/Header';
import Footer from './component/CommonComponents/Footer/Footer';
import { Container } from '@mui/system';
import SearchComponent from './component/SearchComponent/SearchComponent';
import { Box } from '@mui/material';

const App = () => {
  return (
    <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
      <Header />
      <Container>
        <Box mt={2} alignItems='center' sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
          <SearchComponent />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
