import { AppBar, Box, Toolbar, Typography, useTheme } from '@mui/material';
import { Rocket } from '@phosphor-icons/react';


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
            component='h1'
            sx={{
              display: 'flex',
              gap: theme.spacing(2),
              alignItems: 'center',
              color: theme.palette.primary.light,
            }}>
            <Rocket size={32} />
            {appBarTitle}
          </Typography>
        </Toolbar>
      </AppBar >
      <Box>
        {children}
      </Box>
    </>
  )
}