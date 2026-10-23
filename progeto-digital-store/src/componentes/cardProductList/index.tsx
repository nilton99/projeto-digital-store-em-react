import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
export type Product = {
  name: string;
  image: string;
  price: number;
  priceDiscount: number;
};
export function ProductListing({ products }: { products: Product[] }) {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid key={product.name} size={{ xs: 6, sm: 6, md: 3 }}>
          <Card sx={{ height: "100%" }}>
            <CardMedia
              component="img"
              image={product.image}
              alt={product.name}
              height="240"
            />
            <CardContent>
              <Typography variant="subtitle1">{product.name}</Typography>
              <Typography
                component="span"
                sx={{
                  mr: 1,
                  color: "text.secondary",
                  textDecoration: "line-through",
                }}
              >
                R$ {product.price.toFixed(2).replace(".", ",")}
              </Typography>
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                R$ {product.priceDiscount.toFixed(2).replace(".", ",")}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
