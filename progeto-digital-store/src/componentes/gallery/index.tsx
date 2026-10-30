import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

type GalleryProps = {
  images: { src: string }[];
  showThumbs?: boolean;
  width?: number | string;
  height?: number | string;
  radius?: string;
};

const backgrounds = ["#E2E3FF", "#FFE8B6", "#FFC5C5", "#E8CEA4", "#E7DDD0"];

export function Gallery({ images, showThumbs = false, width = 700, height = 570, radius = "4px" }: GalleryProps) {
  const [current, setCurrent] = useState(0);
  if (!images.length) return null;
  return (
    <Box sx={{ width: "100%", maxWidth: width }}>
      <Box sx={{ height: { xs: 310, sm: 440, md: height }, position: "relative", overflow: "hidden", borderRadius: radius, bgcolor: backgrounds[current % backgrounds.length] }}>
        <Box sx={{ display: "flex", width: `${images.length * 100}%`, height: "100%", transform: `translateX(-${(current / images.length) * 100}%)`, transition: "transform 350ms ease" }}>
          {images.map((image, index) => (
            <Box key={`${image.src}-${index}`} sx={{ width: `${100 / images.length}%`, height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Box component="img" src={image.src} alt={`Foto ${index + 1} do tênis`} sx={{ width: "90%", height: "82%", objectFit: "contain", mixBlendMode: "multiply" }} />
            </Box>
          ))}
        </Box>
        <IconButton aria-label="Imagem anterior" disabled={current === 0} onClick={() => setCurrent(v => v - 1)} sx={{ position: "absolute", left: 5, top: "50%", transform: "translateY(-50%)", color: "#474747" }}><ChevronLeftIcon /></IconButton>
        <IconButton aria-label="Próxima imagem" disabled={current === images.length - 1} onClick={() => setCurrent(v => v + 1)} sx={{ position: "absolute", right: 5, top: "50%", transform: "translateY(-50%)", color: "#474747" }}><ChevronRightIcon /></IconButton>
      </Box>
      {showThumbs && <Box sx={{ display: "grid", gridTemplateColumns: `repeat(${images.length}, minmax(0, 1fr))`, gap: { xs: 1, md: 2 }, mt: 2 }}>
        {images.map((image, index) => (
          <Box component="button" type="button" key={`${image.src}-thumb-${index}`} aria-label={`Exibir imagem ${index + 1}`} onClick={() => setCurrent(index)} sx={{ minWidth: 0, height: { xs: 60, sm: 80, md: 95 }, cursor: "pointer", bgcolor: backgrounds[index % backgrounds.length], border: current === index ? "2px solid #C92071" : "2px solid transparent", borderRadius: radius, p: 0.5, overflow: "hidden" }}>
            <Box component="img" src={image.src} alt="" sx={{ width: "100%", height: "100%", objectFit: "contain", mixBlendMode: "multiply" }} />
          </Box>
        ))}
      </Box>}
    </Box>
  );
}
