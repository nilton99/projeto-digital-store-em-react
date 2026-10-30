import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InicialPage } from "./pages/inicialPage";
import { FooterApp } from "./componentes/footer";
import { Header } from "./componentes/header";
import { ProductListingPage } from "./pages/produtosPage";
import { ProductViewPage } from "./pages/productViewPage";

function RouterApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<InicialPage />} />
        <Route path="/produtos" element={<ProductListingPage />} />
        <Route path="/product/:id" element={<ProductViewPage />} />
      </Routes>
      <FooterApp />
    </BrowserRouter>
  );
}

export default RouterApp;
