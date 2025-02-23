import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#312620' }}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontFamily: 'Arial, sans-serif',
            fontSize: '1.5rem',
            textTransform: 'uppercase',
            color: '#fff',
          }}
        >
          Guillermo Trigo
        </Typography>

        <Box>
          <Button
            href="#about"
            sx={{
              color: '#fff',
              fontWeight: 'bold',
              '&:hover': { color: '#ff6347' },
            }}
          >
            About Me
          </Button>
          <Button
            href="#education"
            sx={{
              color: '#fff',
              fontWeight: 'bold',
              '&:hover': { color: '#ff6347' },
            }}
          >
            Education
          </Button>
          <Button
            href="#skills"
            sx={{
              color: '#fff',
              fontWeight: 'bold',
              '&:hover': { color: '#ff6347' },
            }}
          >
            Skills
          </Button>
          <Button
            href="#projects"
            sx={{
              color: '#fff',
              fontWeight: 'bold',
              '&:hover': { color: '#ff6347' },
            }}
          >
            Projects
          </Button>
          <Button
            href="#contact"
            sx={{
              color: '#fff',
              fontWeight: 'bold',
              '&:hover': { color: '#ff6347' },
            }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
