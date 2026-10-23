import { useState } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { CardColecao } from "../componentes/cardColecao";
import { ProductListing, type Product } from "../componentes/cardProductList";
import { Brightness1, East } from "@mui/icons-material";

// Importações do Swiper para o Carrossel
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Importação dos estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";

import "./index.css";

export function InicialPage() {
    const products: Product[] = [
        {
            name: "Tênis V8 - Masculino",
            image: "/product-thumb-1.jpeg",
            price: 200,
            priceDiscount: 100,
        },
        {
            name: "Tênis V8 - Feminino",
            image: "/product-thumb-2.jpeg",
            price: 180,
            priceDiscount: 90,
        },
        {
            name: "Air Jordan edição limitada",
            image: "/product-thumb-3.jpeg",
            price: 500,
            priceDiscount: 399.9,
        },
        {
            name: "Tênis V8 - Masculino",
            image: "/product-thumb-1.jpeg",
            price: 200,
            priceDiscount: 100,
        },
        {
            name: "Tênis V8 - Feminino",
            image: "/product-thumb-2.jpeg",
            price: 180,
            priceDiscount: 90,
        },
        {
            name: "Air Jordan edição limitada",
            image: "/product-thumb-3.jpeg",
            price: 500,
            priceDiscount: 399.9,
        },
    ];

    const bannerSlides = [
        {
            tag: "Melhores ofertas personalizadas",
            title: "Queima de estoque Nike 🔥",
            description:
                "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
            image: "/sapatoBaner.png",
            ornament: "/Ornament 11.png",
            buttonText: "Ver Ofertas",
        },
        {
            tag: "Lançamentos Exclusivos",
            title: "Nova Coleção Adidas 👟",
            description:
                "Encontre os melhores modelos para o seu estilo com descontos imperdíveis nesta temporada.",
            image: "/sapatoBaner.png", // Você pode trocar por outra imagem de banner se tiver
            ornament: "/Ornament 11.png",
            buttonText: "Conferir",
        },
        {
            tag: "Edição Limitada",
            title: "Tênis Urban Street 🚀",
            description:
                "Conforto e durabilidade para acompanhar o seu ritmo em qualquer lugar da cidade.",
            image: "/sapatoBaner.png",
            ornament: "/Ornament 11.png",
            buttonText: "Comprar Agora",
        },
    ];

    return (
        <Box
            sx={{
                bgcolor: { xs: "#F8F8F8", md: "#F9F8FE" },
                minHeight: "100vh",
                width: "100%",
            }}
        >
            <Box sx={{ width: "100%", bgcolor: "#F5F5F5" }}>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    style={{ paddingBottom: "30px" }}
                >
                    {bannerSlides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                sx={{
                                    color: "white",
                                    textAlign: "center",
                                    display: "flex",
                                    flexDirection: { xs: "column-reverse", md: "row" },
                                    maxWidth: "100vw",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    height: { xs: "auto", md: "400px" },
                                    py: { xs: 4, md: 0 },
                                }}
                            >
                                <Box
                                    sx={{
                                        ml: { xs: "25px", md: "100px" },
                                        mr: { xs: "25px", md: "0" },
                                        maxWidth: { xs: "100%", md: "35%" },
                                        mt: { xs: "20px", md: "0" },
                                        mb: { xs: "40px", md: "0" },
                                        textAlign: { xs: "center", md: "left" },
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        component="h5"
                                        sx={{
                                            color: { xs: "#C92071", md: "#F6AA1C" },
                                            mb: 2,
                                        }}
                                    >
                                        {slide.tag}
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        component="h4"
                                        sx={{ color: "primary.main", mb: "20px" }}
                                    >
                                        {slide.title}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        component="p"
                                        sx={{ color: "#474747", mb: "40px" }}
                                    >
                                        {slide.description}
                                    </Typography>

                                    <Box sx={{ mt: 2 }}>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            sx={{
                                                width: { xs: "100%", md: "auto" },
                                                height: "48px",
                                                fontSize: { xs: "0.875rem", md: "1rem" },
                                            }}
                                        >
                                            {slide.buttonText}
                                        </Button>
                                    </Box>
                                </Box>

                                <Box
                                    sx={{
                                        mr: { xs: "20px", md: "100px" },
                                        ml: { xs: "20px" },
                                        width: { xs: "100%", md: "auto" },
                                        position: "relative",
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={slide.image}
                                        alt={slide.title}
                                        sx={{
                                            width: "100%",
                                            maxWidth: "730px",
                                            height: { xs: "auto", md: "430px" },
                                            objectFit: "cover",
                                        }}
                                    />

                                    <Box
                                        component="img"
                                        src={slide.ornament}
                                        alt="Ornament"
                                        sx={{
                                            position: "absolute",
                                            top: { xs: "10px", md: "20px" },
                                            right: { xs: "10px", md: "-50px" },
                                            width: { xs: "140px", md: "140px" },
                                            height: { xs: "140px", md: "140px" },
                                            pointerEvents: "none",
                                        }}
                                    />
                                </Box>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>

            {/* SEÇÃO DE COLEÇÕES */}
            <Box
                sx={{
                    mr: { xs: "20px", md: "100px" },
                    ml: { xs: "20px", md: "100px" },
                }}
            >
                <Typography
                    sx={{
                        fontSize: "1.5rem",
                        fontWeight: 600,
                        mb: 2,
                        mt: 4,
                        textAlign: "left",
                        color: "#000000",
                    }}
                >
                    Coleções em destaque
                </Typography>
                <Grid container spacing={2}>
                    <CardColecao
                        image="collection-1.png"
                        alt="imagem da coleção 1"
                        discount="30% OFF"
                    />
                    <CardColecao
                        image="collection-2.png"
                        alt="imagem da coleção 2"
                        discount="30% OFF"
                    />
                    <CardColecao
                        image="collection-3.png"
                        alt="imagem da coleção 3"
                        discount="30% OFF"
                    />
                </Grid>
            </Box>

            {/* SEÇÃO DE CATEGORIAS SCROLLÁVEL */}
            <Box
                sx={{
                    mr: { xs: "20px", md: "100px" },
                    ml: { xs: "20px", md: "100px" },
                    mt: { xs: "80px", md: "100px" },
                }}
            >
                <Typography
                    variant="body1"
                    sx={{ textAlign: "center", color: "#474747" }}
                >
                    Coleções em destaque
                </Typography>
                <Grid
                    container
                    spacing={2}
                    sx={{
                        justifyContent: { xs: "flex-start", md: "center" },
                        marginTop: "20px",
                        flexWrap: "nowrap",
                        overflowX: "auto",
                        width: "100%",
                        paddingBottom: "12px",
                        "&::-webkit-scrollbar": {
                            display: "none",
                        },
                        scrollbarWidth: "none",
                    }}
                >
                    <Grid size="auto" sx={{ flexShrink: 0, textAlign: "center" }}>
                        <Box
                            className="produto"
                            sx={{
                                borderRadius: "100%",
                                overflow: "hidden",
                                width: "104px",
                                height: "104px",
                                bgcolor: "#FFFFFF",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                            }}
                        >
                            <img
                                src="/camisa.png"
                                alt="Camisetas"
                                style={{ width: "64px", height: "55px" }}
                            />
                        </Box>
                        <Typography sx={{ mt: 1 }}>Camisetas</Typography>
                    </Grid>

                    <Grid size="auto" sx={{ flexShrink: 0, textAlign: "center" }}>
                        <Box
                            className="produto"
                            sx={{
                                borderRadius: "100%",
                                overflow: "hidden",
                                width: "104px",
                                height: "104px",
                                bgcolor: "#FFFFFF",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                            }}
                        >
                            <img
                                src="/calcas.png"
                                alt="Calças"
                                style={{ width: "64px", height: "55px" }}
                            />
                        </Box>
                        <Typography sx={{ mt: 1 }}>Calças</Typography>
                    </Grid>

                    <Grid size="auto" sx={{ flexShrink: 0, textAlign: "center" }}>
                        <Box
                            className="produto"
                            sx={{
                                borderRadius: "100%",
                                overflow: "hidden",
                                width: "104px",
                                height: "104px",
                                bgcolor: "#FFFFFF",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                            }}
                        >
                            <img
                                src="/bone.png"
                                alt="Bonés"
                                style={{ width: "64px", height: "55px" }}
                            />
                        </Box>
                        <Typography sx={{ mt: 1 }}>Bonés</Typography>
                    </Grid>

                    <Grid size="auto" sx={{ flexShrink: 0, textAlign: "center" }}>
                        <Box
                            className="produto"
                            sx={{
                                borderRadius: "100%",
                                overflow: "hidden",
                                width: "104px",
                                height: "104px",
                                bgcolor: "#FFFFFF",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                            }}
                        >
                            <img
                                src="/readphones.png"
                                alt="Headphones"
                                style={{ width: "64px", height: "55px" }}
                            />
                        </Box>
                        <Typography sx={{ mt: 1 }}>Headphones</Typography>
                    </Grid>

                    <Grid size="auto" sx={{ flexShrink: 0, textAlign: "center" }}>
                        <Box
                            className="produto"
                            sx={{
                                borderRadius: "100%",
                                overflow: "hidden",
                                width: "104px",
                                height: "104px",
                                bgcolor: "#FFFFFF",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                            }}
                        >
                            <img
                                src="/tenis.png"
                                alt="Tênis"
                                style={{ width: "64px", height: "55px" }}
                            />
                        </Box>
                        <Typography sx={{ mt: 1 }}>Tênis</Typography>
                    </Grid>
                </Grid>
            </Box>

            {/* PRODUTOS EM ALTA */}
            <Box
                sx={{
                    mt: 4,
                    ml: { xs: "20px", md: "100px" },
                    mr: { xs: "20px", md: "100px" },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            mb: 2,
                            mt: 4,
                            textAlign: "left",
                            color: "#000000",
                            fontWeight: 600,
                        }}
                    >
                        Produtos em alta
                    </Typography>
                    <Box>
                        <Button
                            sx={{ color: "#C92071", textTransform: "none", fontSize: "18px" }}
                        >
                            Ver todos
                            <East sx={{ marginLeft: "10px" }} />
                        </Button>
                    </Box>
                </Box>
                <ProductListing products={products} />
            </Box>

            {/* SEÇÃO OFERTA ESPECIAL */}
            <Box
                sx={{
                    mt: "235px",
                    display: "flex",
                    ml: { xs: "20px", md: "100px" },
                    mr: "100px",
                    mb: 5,
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: "center", md: "flex-start" },
                }}
            >
                <Box
                    sx={{
                        bgcolor: "#fcfcfc",
                        borderRadius: "100%",
                        backgroundSize: "cover",
                        width: { xs: "100%", md: "573px" },
                        height: { xs: "auto", md: "400px" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        boxShadow:
                            "inset 0px 100px 50px color-mix(in srgb, #cabdf3 80%, transparent)",
                        mr: { xs: 0, md: "67px" },
                        mb: { xs: "20px", md: 0 },
                        ml: { xs: "25%", md: "0" },
                    }}
                >
                    <Box
                        component="img"
                        src="/Laye 1.png"
                        alt="Air Jordan edição de colecionador"
                        sx={{
                            width: "573px",
                            mb: "17px",
                            height: { xs: "auto", md: "400px" },
                            maxWidth: { xs: "100%", md: "573px" },
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        mt: 2,
                        textAlign: { xs: "left", md: "left" },
                        ml: { xs: "20px", md: 4 },
                    }}
                >
                    <Typography
                        sx={{ mb: "20px", color: { xs: "#F6AA1C", md: "#C92071" } }}
                    >
                        Oferta especial
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{ fontWeight: 600, mb: 2, color: "#000000" }}
                    >
                        Air Jordan edição de colecionador
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#474747", mb: "30px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </Typography>
                    <Button
                        variant="contained"
                        color="warning"
                        sx={{ width: { xs: "70%" } }}
                    >
                        Ver Oferta
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
