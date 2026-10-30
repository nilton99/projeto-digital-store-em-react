import { useEffect, useState } from "react";
import { Alert, Box, CircularProgress, Container, Link, Typography } from "@mui/material";
import { Link as RouterLink, useParams } from "react-router-dom";
import { Gallery } from "../../componentes/gallery";
import { BuyBox } from "../../componentes/buyBox";
import { ProductListing } from "../../componentes/cardProductList";
import { getProductById, getProducts, type StoreProduct } from "../../api/products";

export function ProductViewPage() {
    const { id } = useParams();

    const [product, setProduct] = useState<StoreProduct | null>(null);
    const [related, setRelated] = useState<StoreProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const ctrl = new AbortController();
        const productId = Number(id);

        if (!Number.isInteger(productId) || productId <= 0) {
            setError("ID inválido");
            setLoading(false);
            return () => ctrl.abort();
        }

        async function loadData() {
            try {
                setLoading(true);
                setError("");

                const [fetchedProduct, allProducts] = await Promise.all([
                    getProductById(productId, ctrl.signal),
                    getProducts(ctrl.signal)
                ]);

                setProduct(fetchedProduct);

                // Filtra os relacionados da mesma categoria (removendo o atual)
                const relatedProducts = allProducts
                    .filter(x => x.id !== fetchedProduct.id && x.category === fetchedProduct.category)
                    .slice(0, 4);

                setRelated(relatedProducts);
            } catch (e) {
                if (!ctrl.signal.aborted) {
                    setError(e instanceof Error ? e.message : "Erro ao buscar produto");
                }
            } finally {
                if (!ctrl.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        loadData();

        return () => ctrl.abort();
    }, [id]);

    if (loading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error || !product) {
        return (
            <Container sx={{ py: 5 }}>
                <Alert severity="error">{error || "Produto não encontrado"}</Alert>
            </Container>
        );
    }

    return (
        <Box sx={{ bgcolor: "#F9F8FE", minHeight: "100vh", pb: 8, textAlign: "left" }}>
            <Container maxWidth="xl" sx={{ pt: 2 }}>

                {/* Breadcrumb */}
                <Box sx={{ display: "flex", gap: 1, mb: 4, fontSize: 13, flexWrap: "wrap" }}>
                    <Link component={RouterLink} to="/">Home</Link> /{" "}
                    <Link component={RouterLink} to="/produtos">Produtos</Link> / {product.category} / {product.name}
                </Box>

                {/* Detalhes do Produto */}
                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "minmax(0,700px) minmax(300px,1fr)" }, gap: { xs: 4, lg: 8 } }}>
                    <Gallery
                        images={product.images.map(src => ({ src }))}
                        showThumbs
                        width="700px"
                        height={570}
                        radius="4px"
                    />
                    <BuyBox
                        name={product.name}
                        reference={String(product.id)}
                        stars={product.rating}
                        rating={product.reviewCount}
                        price={product.price}
                        priceDiscount={product.priceDiscount}
                        description={product.description}
                    />
                </Box>

                {/* Produtos Relacionados */}
                <Box sx={{ mt: { xs: 6, md: 9 } }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                        <Typography component="h2" sx={{ fontWeight: 700, fontSize: 24 }}>
                            Produtos Relacionados
                        </Typography>
                        <Link component={RouterLink} to="/produtos">Ver todos →</Link>
                    </Box>
                    <ProductListing products={related} columns={4} />
                </Box>

            </Container>
        </Box>
    );
}