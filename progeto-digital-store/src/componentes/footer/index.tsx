import { Box, Typography, Grid, Link, Divider } from "@mui/material";
import logoFooter from "../../assets/logo-footer.svg";
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitter.svg";

export function FooterApp() {
  const infoLinks = [
    { text: "Sobre Drip Store", link: "/about" },
    { text: "Segurança", link: "/security" },
    { text: "Wishlist", link: "/wishlist" },
    { text: "Blog", link: "/blog" },
    { text: "Trabalhe conosco", link: "/jobs" },
    { text: "Meus Pedidos", link: "/orders" },
  ];

  const categoryLinks = [
    { text: "Camisetas", link: "/camisetas" },
    { text: "Calças", link: "/calcas" },
    { text: "Bonés", link: "/bones" },
    { text: "Headphones", link: "/headphones" },
    { text: "Tênis", link: "/tenis" },
  ];

  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#1F1F1F", color: "white", p: 4, textAlign: "left" }}
    >
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 3 }}>
          <Box
            component="img"
            src={logoFooter}
            alt="Digital Store"
            sx={{ display: "block", maxWidth: "100%", height: "auto", mb: 2 }}
          />
          <Typography variant="body2" sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </Typography>
          <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
            <Link
              href="https://facebook.com"
              target="_blank"
              color="inherit"
              sx={{ mr: 2 }}
            >
              <img
                src={facebookIcon}
                alt="icone facebook"
                style={{ width: "24px", height: "24px" }}
              />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              color="inherit"
              sx={{ mr: 2 }}
            >
              <img
                src={instagramIcon}
                alt="icone instagram"
                style={{ width: "24px", height: "24px" }}
              />
            </Link>
            <Link href="https://twitter.com" target="_blank" color="inherit">
              <img
                src={twitterIcon}
                alt="icone twitter"
                style={{ width: "24px", height: "24px" }}
              />
            </Link>
          </Box>
        </Grid>

        <Grid size={{ xs: 6, md: 3 }}>
          <Typography variant="h6" gutterBottom>
            Informação
          </Typography>
          {infoLinks.map((info, index) => (
            <Link
              key={index}
              href={info.link}
              underline="hover"
              color="inherit"
              sx={{ display: "block", mb: 1 }}
            >
              {info.text}
            </Link>
          ))}
        </Grid>

        <Grid size={{ xs: 6, md: 3 }}>
          <Typography variant="h6" gutterBottom>
            Categorias
          </Typography>
          {categoryLinks.map((cat, index) => (
            <Link
              key={index}
              href={cat.link}
              underline="hover"
              color="inherit"
              sx={{ display: "block", mb: 1 }}
            >
              {cat.text}
            </Link>
          ))}
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <Typography variant="h6" gutterBottom>
            Contato
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
            60150-161
          </Typography>
          <Typography variant="body2" sx={{ mt: "40px" }}>
            (85) 3051-3411
          </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3, borderColor: "rgba(255, 255, 255, 0.2)" }} />
      <Typography variant="body2" align="center">
        © 2024 Digital Store
      </Typography>
    </Box>
  );
}
