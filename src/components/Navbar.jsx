import Box from '@mui/material/Box';
import {GiKnifeFork} from 'react-icons/gi';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import MenuLogout from './MenuLogout';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Appbar from '@mui/material/AppBar';


const navItems = [
  { text: 'HOME', link: '/' },
  { text: 'ABOUT', link: '/about' },
];

const Navbar = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Appbar>
        <Toolbar>

        <GiKnifeFork style={{fontSize: '2rem', color: 'white'}}/>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              display: 'block',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
            }}
          >
            <Link style={{ color: 'white', textDecoration: 'inherit', fontFamily: 'Lobster Two', fontSize: '2rem' }} to="/">
              Sriwijaya Resep
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'block' }}>
            {navItems.map((item) => (
              <Button variant="contained" ><NavLink
                to={item.link}
                key={item.text}
                className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'}
              >
                {item.text}
              </NavLink></Button>
            ))}
            <MenuLogout />
          </Box>
        </Toolbar>
        </Appbar>
    </Box>
  );
}

export default Navbar;