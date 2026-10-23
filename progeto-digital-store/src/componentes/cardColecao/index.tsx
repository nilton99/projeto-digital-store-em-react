import { Button, Card, CardMedia, Grid, Typography, Box } from "@mui/material";

type CardColecaoProps = {
  image: string;
  alt: string;
  discount: string;
};

export function CardColecao({ image, alt, discount }: CardColecaoProps) {
  return (
    <Grid size={{ xs: 12, md: 4 }}>
      <Card sx={{ position: "relative", width: "100%", height: "100%" }}>
        <CardMedia component="img" {...{ image }} {...{ alt }} height="200" />
        <Box sx={{ position: "absolute", top: 8, left: 16 }}>
          <Typography
            variant="subtitle1"
            sx={{
              bgcolor: "#E7FF86",
              width: "96px",
              height: "32px",
              borderRadius: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {discount}
          </Typography>
        </Box>
        <Box sx={{ position: "absolute", bottom: "35px", left: 16 }}>
          <Button
            sx={{
              color: "#C92071",
              bgcolor: "#F5F5F5",
              width: "153px",
              height: "48px",
            }}
            variant="contained"
          >
            Comprar
          </Button>
        </Box>
      </Card>
    </Grid>
  );
}
