import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { GlobalContext } from './globalContext/GlobalContext';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const siteName = 'HypeVenom Records';
const drawerWidth = 240;

interface NavActionProps {
  title: string;
  onClick: (() => void) | null;
}

export function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navActions, setNavActions] = useState<NavActionProps[]>([]);
  const globalContext = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    setNavActions([
      {
        title: 'Início',
        onClick: () => handleRedirectTo('/'),
      },
      {
        title: 'Artistas',
        onClick: () => handleRedirectTo('/artists'),
      },
      {
        title: 'Sobre',
        onClick: () => handleRedirectTo('/about'),
      },
      {
        title: 'Contatos',
        onClick: () => {
          globalContext.setOpenModalContact(true);
        },
      },
    ]);
  }, []);

  const handleRedirectTo = (path: string) => {
    navigate(path);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {siteName}
      </Typography>
      <Divider />
      <List>
        {navActions.map(({ title, onClick }) => (
          <ListItem
            key={title}
            onClick={() => onClick && onClick()}
            disablePadding
          >
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: '#0D0D0D' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {siteName}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navActions.map(({ title, onClick }) => (
              <Button
                key={title}
                onClick={() => onClick && onClick()}
                sx={{ color: '#fff' }}
              >
                {title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
