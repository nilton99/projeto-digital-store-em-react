import { Box, Typography } from "@mui/material";

type ProductOptionsProps = {
  label: string;
  options: string[];
  shape: "square" | "circle";
  type: "text" | "color";
  value: string;
  onChange: (value: string) => void;
  radius?: string;
};

export function ProductOptions({ label, options, shape, type, value, onChange, radius = "4px" }: ProductOptionsProps) {
  return <Box sx={{ mt: 2.5 }}>
    <Typography sx={{ fontSize: 14, fontWeight: 700, color: "#8F8F8F", mb: 1 }}>{label}</Typography>
    <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 1 }}>
      {options.map(option => <Box component="button" type="button" key={option} onClick={() => onChange(option)} aria-label={type === "color" ? `Cor ${option}` : `Tamanho ${option}`} aria-pressed={value === option} sx={{ width: shape === "circle" ? 31 : 46, height: shape === "circle" ? 31 : 46, borderRadius: shape === "circle" ? "50%" : radius, bgcolor: type === "color" ? option : value === option ? "#C92071" : "white", color: value === option ? "white" : "#474747", fontSize: 20, fontWeight: 500, cursor: "pointer", border: value === option ? "2px solid #C92071" : type === "color" ? "2px solid white" : "1px solid #CCCCCC", outline: type === "color" && value === option ? "2px solid #C92071" : "none", outlineOffset: type === "color" ? 2 : 0 }}>
        {type === "text" && option}
      </Box>)}
    </Box>
  </Box>;
}
