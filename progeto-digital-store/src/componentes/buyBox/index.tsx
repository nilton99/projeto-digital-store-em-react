import { useState, type ReactNode } from "react";
import { Box, Button, Rating, Snackbar, Alert, Typography } from "@mui/material";
import { ProductOptions } from "../productOptions";

type BuyBoxProps = { name: string; reference: string; stars: number; rating: number; price: number; priceDiscount?: number; description: string; children?: ReactNode };
const money = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "USD" });

export function BuyBox({ name, reference, stars, rating, price, priceDiscount, description, children }: BuyBoxProps) {
  const [size, setSize] = useState("41");
  const [color, setColor] = useState("#EE4266");
  const [notice, setNotice] = useState(false);
  return <Box sx={{ maxWidth: 450, textAlign: "left" }}>
    <Typography component="h1" sx={{ color: "#1F1F1F", fontWeight: 750, fontSize: { xs: 25, md: 32 }, lineHeight: 1.15, letterSpacing: 0, m: 0 }}>{name}</Typography>
    <Typography sx={{ color: "#666", fontSize: 12, mt: 1 }}>Produto da API | REF: {reference}</Typography>
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1.5 }}>
      <Rating value={5} size="small" readOnly sx={{ color: "#F6AA1C" }} />
      <Box sx={{ color: "white", bgcolor: "#F6AA1C", borderRadius: "4px", px: 1, py: 0.25, fontSize: 13 }}>★ {stars.toFixed(1)}</Box>
      <Typography sx={{ color: "#8F8F8F", fontSize: 13 }}>({rating} avaliações)</Typography>
    </Box>
    <Box sx={{ display: "flex", alignItems: "baseline", gap: 1.5, mt: 3.5 }}>
      <Typography sx={{ color: "#474747", fontSize: 32, fontWeight: 750 }}>{money(priceDiscount ?? price)}</Typography>
      {priceDiscount !== undefined && priceDiscount < price && <Typography sx={{ color: "#CCCCCC", textDecoration: "line-through", fontSize: 16 }}>{money(price)}</Typography>}
    </Box>
    <Typography sx={{ fontWeight: 700, color: "#8F8F8F", fontSize: 14, mt: 3 }}>Descrição do produto</Typography>
    <Typography sx={{ color: "#474747", fontSize: 14, mt: 0.5, lineHeight: 1.55 }}>{description}</Typography>
    <ProductOptions label="Tamanho" options={["39", "40", "41", "42", "43"]} shape="square" type="text" value={size} onChange={setSize} />
    <ProductOptions label="Cor" options={["#63E5EB", "#EE4266", "#666666", "#7774BD"]} shape="circle" type="color" value={color} onChange={setColor} />
    {children}
    <Button variant="contained" onClick={() => setNotice(true)} sx={{ mt: 3, bgcolor: "#F6AA1C", color: "white", width: 220, maxWidth: "100%", height: 48, fontWeight: 700, letterSpacing: 1, '&:hover': { bgcolor: "#DF930E" } }}>COMPRAR</Button>
    <Snackbar open={notice} autoHideDuration={3500} onClose={() => setNotice(false)}><Alert severity="info" onClose={() => setNotice(false)}>Seleção: tamanho {size}, cor {color}. O checkout ainda não foi configurado.</Alert></Snackbar>
  </Box>;
}
