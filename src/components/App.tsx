import Form from './Form';
import {  ThemeProvider, CssBaseline, Container, Grid, Paper } from '@mui/material';
import { theme, TITLE } from '../constants'

function App() {

 return (
  <ThemeProvider theme={theme}>
    <CssBaseline>
        <Container maxWidth="md" >
        <Grid container spacing={1} justifyContent="center" alignItems="center" sx={{minHeight: '100vh'}}>
          <Grid item></Grid>
          <Grid item xs={10} sm={8} md={6}>
            <Paper elevation={12} >
              <Form title={ TITLE } />
            </Paper>
          </Grid>
          <Grid item></Grid>
        </Grid >
      </Container>
    </CssBaseline>
  </ThemeProvider>
  );
}

export default App;
