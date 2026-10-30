import { useEffect, useState } from "react";
import {
    Box,
    Container,
    Divider,
    FormControl,
    IconButton,
    MenuItem,
    Select,
    Typography,
    Drawer,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { ProductListing } from "../../componentes/cardProductList";
import { FilterGroup } from "../../componentes/filterGroup";
import { getProducts, type StoreProduct } from "../../api/products";

export function ProductListingPage() {
    const [products, setProducts] = useState<StoreProduct[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [order, setOrder] = useState("menor");
    const [brands, setBrands] = useState<string[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [genders, setGenders] = useState<string[]>([]);
    const [condition, setCondition] = useState("Novo");

    // 📱 Estado para controlar a abertura da modal de filtros no mobile
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        getProducts()
            .then(setProducts)
            .catch((err) => setError(err instanceof Error ? err.message : "Erro ao carregar produtos."))
            .finally(() => setIsLoading(false));
    }, []);

    const toggleFilter = (value: string, list: string[], setList: (val: string[]) => void) => {
        setList(list.includes(value) ? list.filter((i) => i !== value) : [...list, value]);
    };

    function filteredProducts() {
        return products
            .filter((p) => {
                return (
                    (brands.length === 0 || brands.includes(p.brand)) &&
                    (categories.length === 0 || categories.includes(p.category)) &&
                    (genders.length === 0 || genders.includes(p.gender)) &&
                    (condition === "Todos" || p.condition === condition)
                );
            })
            .sort((a, b) =>
                order === "menor"
                    ? a.priceDiscount - b.priceDiscount
                    : b.priceDiscount - a.priceDiscount
            );
    }

    const currentProducts = filteredProducts();

    const filterGroupsConfig = [
        { title: "Marca", inputType: "checkbox" as const, options: [...new Set(products.map(p => p.brand))].map(v => ({ text: v, value: v })), selectedValues: brands, onChange: (v: string) => toggleFilter(v, brands, setBrands) },
        { title: "Categoria", inputType: "checkbox" as const, options: [...new Set(products.map(p => p.category))].map(v => ({ text: v, value: v })), selectedValues: categories, onChange: (v: string) => toggleFilter(v, categories, setCategories) },
        { title: "Gênero", inputType: "checkbox" as const, options: ["Masculino", "Feminino"].map(v => ({ text: v, value: v })), selectedValues: genders, onChange: (v: string) => toggleFilter(v, genders, setGenders) },
        { title: "Estado", inputType: "radio" as const, options: ["Novo", "Todos"].map(v => ({ text: v, value: v })), selectedValues: [condition], onChange: setCondition },
    ];

    const renderFilterContent = () => (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Typography sx={{ fontSize: 16, fontWeight: 700, color: "#474747" }}>
                    Filtrar por
                </Typography>
                {/* Botão de fechar visível apenas na modal mobile */}
                <IconButton
                    onClick={() => setMobileOpen(false)}
                    sx={{ display: { xs: "block", md: "none" }, color: "#474747" }}
                >
                    <CloseIcon />
                </IconButton>
            </Box>

            <Divider sx={{ mb: 3 }} />

            {filterGroupsConfig.map((group) => (
                <FilterGroup
                    key={group.title}
                    title={group.title}
                    inputType={group.inputType}
                    options={group.options}
                    selectedValues={group.selectedValues}
                    onChange={group.onChange}
                />
            ))}
        </>
    );

    if (isLoading) {
        return <Typography sx={{ py: 5, textAlign: "center" }}>Carregando produtos...</Typography>;
    }

    if (error) {
        return <Typography color="error" sx={{ py: 5, textAlign: "center" }}>{error}</Typography>;
    }

    return (
        <Box sx={{ bgcolor: "#F5F5F5", minHeight: "100vh", py: 4 }}>
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: { xs: "stretch", md: "center" },
                        flexDirection: { xs: "column", md: "row" },
                        gap: 2,
                        mb: 4,
                    }}
                >
                    <Typography sx={{ color: "#474747" }}>
                        <strong>Resultados para "Calçados"</strong> - {currentProducts.length} produtos
                    </Typography>

                    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                        <FormControl sx={{ width: { xs: "100%", md: 308 }, flex: 1 }}>
                            <Select
                                value={order}
                                onChange={(e) => setOrder(e.target.value)}
                                sx={{ bgcolor: "#FFFFFF", height: 60, color: "#474747", fontSize: 16 }}
                            >
                                <MenuItem value="menor">Ordenar por: Menor preço</MenuItem>
                                <MenuItem value="maior">Ordenar por: Maior preço</MenuItem>
                            </Select>
                        </FormControl>

                        <Box
                            component="button"
                            onClick={() => setMobileOpen(true)}
                            sx={{
                                display: { xs: "flex", md: "none" },
                                alignItems: "center",
                                justifyContent: "center",
                                border: "none",
                                borderRadius: "4px",
                                width: 52,
                                height: 60,
                                cursor: "pointer",
                                flexShrink: 0,
                            }}
                        >
                            <Box
                                component="img"
                                src="/filter.png"
                                sx={{
                                    width: "100vw",
                                }}
                            />
                        </Box>
                    </Box>
                </Box>

                {/* Conteúdo Principal */}
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 3, flexDirection: { xs: "column", md: "row" } }}>
                    {/* Sidebar fixa para telas grandes (Desktop) */}
                    <Box
                        component="aside"
                        sx={{
                            width: { xs: "100%", md: 308 },
                            flexShrink: 0,
                            bgcolor: "#FFFFFF",
                            p: 3,
                            borderRadius: "4px",
                            display: { xs: "none", md: "block" },
                        }}
                    >
                        {renderFilterContent()}
                    </Box>

                    {/* Drawer (Modal Lateral) para telas pequenas (Mobile) */}
                    <Drawer
                        anchor="left"
                        open={mobileOpen}
                        onClose={() => setMobileOpen(false)}
                        sx={{
                            display: { xs: "block", md: "none" },
                            "& .MuiDrawer-paper": {
                                width: "80%",
                                maxWidth: 320,
                                p: 3,
                                bgcolor: "#FFFFFF",
                            },
                        }}
                    >
                        {renderFilterContent()}
                    </Drawer>

                    {/* Listagem de Produtos em 3 colunas */}
                    <Box sx={{ flex: 1, width: "100%", minWidth: 0 }}>
                        {currentProducts.length > 0 ? (
                            <ProductListing columns={3} products={currentProducts} />
                        ) : (
                            <Typography sx={{ py: 5, textAlign: "center" }}>
                                Nenhum produto encontrado para os filtros selecionados.
                            </Typography>
                        )}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}