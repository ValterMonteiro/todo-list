import { ThemeProvider, createTheme } from '@mui/material/styles';

type ThemeProps = {
  children: React.ReactNode
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
}