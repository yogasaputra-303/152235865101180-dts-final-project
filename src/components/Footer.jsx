import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Sriwijaya Resep
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        marginTop: '5rem',
        minHeight: '10vh',
      }}
    >
      
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          width: '100%',
          
          textAlign: 'center',
          mt: 'auto',
          
        }}
      >
        
          <Typography variant="body1">
            <h2><b>YOGA SAPUTRA - 152235865101-180</b></h2>
          </Typography>
          <Copyright />
        
      </Box>
    </Box>
  );
}
