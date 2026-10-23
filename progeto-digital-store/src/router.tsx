import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InicialPage } from "./inicialPage";
import { FooterApp } from "./componentes/footer";
import { Header } from "./componentes/header";

function RouterApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<InicialPage />} />
      </Routes>
      <FooterApp />
    </BrowserRouter>
  );
}

export default RouterApp;
