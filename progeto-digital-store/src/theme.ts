// theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#9c27b0", // roxo
    },
    warning: {
      main: "#C92071", // laranja
    },
    background: {
      default: "#f5f5f5", // fundo geral
      paper: "#ffffff", // fundo de cards
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: { fontSize: "64px", fontWeight: 800 },
    h2: { fontSize: "2rem", fontWeight: 700 },
    h3: { fontSize: "48px", fontWeight: 600 },
    h4: { fontSize: "40px", fontWeight: 600 },
    h5: { fontSize: "16px", fontWeight: 400 },
    h6: { fontSize: "1rem", fontWeight: 500 },
    body1: { fontSize: "1rem", fontWeight: 400 },
    body2: { fontSize: "0.875rem", fontWeight: 400 },
    caption: { fontSize: "0.75rem", fontWeight: 600 }, // small bold
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: {
    borderRadius: 8, // bordas arredondadas padrão
  },
  spacing: 8,
});

export default theme;
