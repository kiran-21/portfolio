import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import profileImage from '../assets/logo.svg';
import { FaBars } from 'react-icons/fa';
import Link from '@mui/material/Link';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';

const Header = ({ onNavigate }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Drawer state for mobile menu
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle Drawer
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{
          background: theme.palette.primary.dark,
          color: theme.palette.primary.white,
          padding: '20px',
        }}
      >
        {/* Profile Image and Name */}
        <Grid item display="flex" alignItems="center">
          <Avatar
            alt="Kiran S Radhakrishnan"
            src={profileImage}
            sx={{ width: 70, height: 70, marginRight: 3 }}
          />
          <Typography
            sx={{
              fontSize: theme.typography.h6,
              fontFamily: theme.typography.fontFamily,
              color: theme.palette.primary.white,
            }}
          >
            {/* Kiran S Radhakrishnan */}
          </Typography>
        </Grid>

        {/* Desktop Navigation */}
        {!isMobile ? (
          <Grid item>
            <Link
              sx={{
                color: theme.palette.primary.white,
                marginRight: '20px',
                cursor: 'pointer',
                textDecoration: 'none',
                '&:hover': { color: theme.palette.secondary.main },
              }}
              onClick={() => onNavigate('About')}
            >
              ABOUT
            </Link>
            <Link
              sx={{
                color: theme.palette.primary.white,
                marginRight: '20px',
                cursor: 'pointer',
                textDecoration: 'none',
                '&:hover': { color: theme.palette.secondary.main },
              }}
              onClick={() => onNavigate('Project')}
            >
              PROJECT
            </Link>
          </Grid>
        ) : (
          // Mobile Navigation (Hamburger Menu)
          <IconButton
            onClick={toggleDrawer(true)}
            sx={{
              color: theme.palette.primary.white
            }}
          >
            <FaBars size={24} />
          </IconButton>
        )}
      </Grid>

      {/* Mobile Drawer for Navigation */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} >
        <List sx={{ width: 200 }}>
          <ListItem button onClick={() => { onNavigate('About'); setDrawerOpen(false); }} sx={{color:theme.palette.primary.main}}>
            <ListItemText primary="ABOUT" />
          </ListItem>
          <ListItem button onClick={() => { onNavigate('Project'); setDrawerOpen(false); }} sx={{color:theme.palette.primary.main}}>
            <ListItemText primary="PROJECT" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </>
  );
};

export default Header;
