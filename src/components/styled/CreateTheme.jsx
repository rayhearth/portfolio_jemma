export const createTheme = (theme) => ({
  colors: {
    primary: theme.colors.body,
    secondary:theme.colors.body ,
    tertiary: theme.colors.body,
  },
  paddings: {
    container: '15px',
    pageTop: '30px',
  },
  fonts: {
    xs: '0.8rem',
    sm: '0.9rem',
    base: '1rem',
    md: '1.2rem'
  }
});