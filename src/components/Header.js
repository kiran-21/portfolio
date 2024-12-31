import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ()=>{

    return(
        <>
        <AppBar position="static" color="dark" background="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Kiran S Radhakrishnan
        </Typography>
      </Toolbar>
    </AppBar>
        
        </>
    )

}
export default Header;