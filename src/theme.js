import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
       main: '#312A2A',
    },
    secondary: {
      main: '#E10C33',
    },
  },
  typography: {
    fontFamily: 'Montserrat, normal',
  },
});

export default theme;
