import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  TextField,
  IconButton,
  Button,
  Link,
  InputAdornment,
  Container,
  Modal,
  Typography,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logoHeader from "../../assets/logo-header.svg";
import miniCart from "../../assets/mini-cart.svg";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#FFFFFF",
        color: "#1F1F1F",
        boxShadow: "none",
        borderBottom: "1px solid #EFEFEF",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            py: 2,
            px: { xs: 2, md: 0 },
            position: "relative",
          }}
        >
          {/* Botão do Menu Hamburguer (Visível apenas no mobile) */}
          <IconButton
            color="inherit"
            aria-label="abrir menu"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "flex", md: "none" }, zIndex: 1 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo (Centralizada no mobile, fluxo normal no desktop) */}
          <Box
            component="img"
            src={logoHeader}
            alt="Digital Store"
            sx={{
              width: { xs: "130px", md: "253px" },
              height: "auto",
              position: { xs: "absolute", md: "static" },
              left: { xs: "50%", md: "auto" },
              transform: { xs: "translateX(-50%)", md: "none" },
            }}
          />

          {/* Campo de Pesquisa Desktop */}
          <TextField
            placeholder="Pesquisar produto..."
            size="small"
            variant="outlined"
            sx={{
              width: { sm: "200px", md: "300px" },
              bgcolor: "#F8F8F8",
              display: { xs: "none", sm: "flex" },
            }}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon sx={{ color: "#AFAFAF" }} />
                  </InputAdornment>
                ),
              },
            }}
          />

          {/* Links e Botões Desktop */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            <Link
              href="/cadastro"
              underline="always"
              sx={{ fontSize: "16px", color: "#474747" }}
            >
              Cadastre-se
            </Link>
            <Button
              href="/login"
              variant="contained"
              sx={{
                bgcolor: "#C92071",
                color: "white",
                fontWeight: "bold",
                width: 114,
                height: 40,
                borderRadius: "4px",
                fontSize: "14px",
                "&:hover": { bgcolor: "#991552" },
              }}
            >
              Entrar
            </Button>
            <Box
              component="img"
              src={miniCart}
              alt="Carrinho de compras"
              sx={{ ml: "70px" }}
            />
          </Box>

          {/* Ícones do Lado Direito no Mobile (Lupa + Carrinho) */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              gap: 1,
              zIndex: 1,
            }}
          >
            <IconButton
              aria-label="pesquisar"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <SearchIcon sx={{ color: "#1F1F1F" }} />
            </IconButton>
            <IconButton
              aria-label="Carrinho de compras"
              href="/carrinho"
              sx={{ p: 0.5 }}
            >
              <Box
                component="img"
                src={miniCart}
                alt="Carrinho de compras"
                sx={{ width: "24px", height: "24px" }}
              />
            </IconButton>
          </Box>
        </Toolbar>

        {/* Campo de Pesquisa Retrátil no Mobile */}
        {searchOpen && (
          <Box sx={{ pb: 2, display: { xs: "block", md: "none" } }}>
            <TextField
              placeholder="Pesquisar produto..."
              size="small"
              fullWidth
              variant="outlined"
              sx={{ bgcolor: "#F8F8F8" }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon sx={{ color: "#AFAFAF" }} />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>
        )}

        {/* Menu Desktop (Abaixo do toolbar) */}
        <Box
          className="menu"
          sx={{
            bgcolor: "white",
            py: 1,
            display: { xs: "none", md: "flex" },
            gap: 4,
          }}
        >
          <Link href="/" underline="none" color="inherit">
            Home
          </Link>
          <Link href="/produtos" underline="none" color="inherit">
            Produtos
          </Link>
          <Link href="/categorias" underline="none" color="inherit">
            Categorias
          </Link>
          <Link href="/pedidos" underline="none" color="inherit">
            Meus Pedidos
          </Link>
        </Box>

        {/* MODAL / MENU LATERAL MOBILE */}
        <Modal
          open={mobileOpen}
          onClose={handleDrawerToggle}
          aria-labelledby="menu-lateral"
          slotProps={{
            backdrop: {
              sx: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              width: "280px",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Conteúdo Superior do Modal */}
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 3,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#1F1F1F" }}
                >
                  Páginas
                </Typography>
                <IconButton onClick={handleDrawerToggle}>
                  <CloseIcon />
                </IconButton>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Link
                  href="/"
                  underline="none"
                  sx={{
                    color: "#C92071",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  Home
                </Link>
                <Link
                  href="/produtos"
                  underline="none"
                  sx={{ color: "#474747", fontSize: "16px" }}
                >
                  Produtos
                </Link>
                <Link
                  href="/categorias"
                  underline="none"
                  sx={{ color: "#474747", fontSize: "16px" }}
                >
                  Categorias
                </Link>
                <Link
                  href="/pedidos"
                  underline="none"
                  sx={{ color: "#474747", fontSize: "16px" }}
                >
                  Meus Pedidos
                </Link>
              </Box>
            </Box>

            {/* Conteúdo Inferior do Modal (Botões de Autenticação) */}
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, pb: 2 }}
            >
              <Divider />
              <Button
                href="/login"
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: "#C92071",
                  color: "white",
                  fontWeight: "bold",
                  height: 40,
                  borderRadius: "4px",
                  fontSize: "14px",
                  "&:hover": { bgcolor: "#991552" },
                }}
              >
                Entrar
              </Button>
              <Box sx={{ textAlign: "center" }}>
                <Link
                  href="/cadastro"
                  underline="always"
                  sx={{ fontSize: "14px", color: "#474747", fontWeight: "500" }}
                >
                  Cadastre-se
                </Link>
              </Box>
            </Box>
          </Box>
        </Modal>
      </Container>
    </AppBar>
  );
}
