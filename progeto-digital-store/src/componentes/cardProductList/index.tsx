import { Link as RouterLink } from "react-router-dom";
import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

export type Product = {
  id?: number;
  name: string;
  image: string;
  price: number;
  priceDiscount: number;
  isOffer?: boolean;  
};

type ProductListingProps = {
  products: Product[];
  columns?: 3 | 4; 
};

export function ProductListing({ products, columns = 4 }: ProductListingProps) {
  const mdSize = 12 / columns;

  return (
    <Grid container spacing={2}>
      {products.map((product) => {
        const hasDiscount = product.price > product.priceDiscount;
        const discountPercentage = hasDiscount
          ? Math.round(((product.price - product.priceDiscount) / product.price) * 100)
          : 0;

        const shouldShowBadge = product.isOffer && hasDiscount;

        return (
          <Grid key={product.id ?? product.name} size={{ xs: 6, sm: 6, md: mdSize as any }}>
            <Card component={RouterLink} to={product.id ? `/product/${product.id}` : "/produtos"} sx={{ textDecoration: "none", color: "inherit", height: "100%", display: "flex", flexDirection: "column" }}>
              
              <Box sx={{ position: "relative" }}>
                {shouldShowBadge && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      bgcolor: "#E7FF86",
                      width: "96px",
                      height: "32px",
                      borderRadius: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "0.875rem",
                      color: "#474747",
                      zIndex: 1,
                    }}
                  >
                    {discountPercentage}% OFF
                  </Box>
                )}

                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  height="240"
                />
              </Box>

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
                  US$ {product.price.toFixed(2)}
                </Typography>
                <Typography component="span" sx={{ fontWeight: "bold" }}>
                  US$ {product.priceDiscount.toFixed(2)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}