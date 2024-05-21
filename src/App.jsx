// App.jsx
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Gallery from './Gallery';

function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          My Gallery
        </Typography>
      </Box>
      <Gallery />
    </Container>
  );
}

export default App;
