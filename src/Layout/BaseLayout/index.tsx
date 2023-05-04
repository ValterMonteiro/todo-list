import { AppBar, Box, Button, Container, Grid, TextField, Toolbar, Typography, useTheme } from '@mui/material';


type BaseLayoutProps = {
  children: React.ReactNode,
  appBarTitle: string
}
export function BaseLayout({ children, appBarTitle }: BaseLayoutProps) {

  const theme = useTheme();

  return (
    <>
      <AppBar position='static'>
        <Toolbar
          sx={{
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media all': {
              minHeight: 200
            },
          }}
        >
          <Typography
            variant='h5'
            component='h1'>
            {appBarTitle}
          </Typography>
        </Toolbar>
      </AppBar >
      <Box
        display='flex'
        flexDirection='row'
        alignItems='center'
        padding={2}
        mt={10}
        sx={{
          bgcolor: "palette.background.default",
          width: "100%",
        }}
        minHeight={100}
      >
        {children}
      </Box>
      {/* <main>
        <Container>
          <Grid container spacing={theme.spacing(0.5)}>
            <Grid item xl={6}>
              <TextField name='Task' fullWidth />
            </Grid>
            <Grid item xl={6} sm={12}>
              <Button vatiant='contained' fullWidth>Adicionar</Button>
            </Grid>
          </Grid>
        </Container>
      </main> */}
    </>
  )
}