import { AppBar, Box, Toolbar, Typography } from '@mui/material';


type BaseLayoutProps = {
  children: React.ReactNode,
  appBarTitle: string
}
export function BaseLayout({ children, appBarTitle }: BaseLayoutProps) {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography
            variant='h5'>
            {appBarTitle}
          </Typography>
        </Toolbar>
      </AppBar>
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
    </>
  )
}