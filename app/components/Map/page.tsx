"use client";

import React from "react";
import { Box, Typography, Tooltip } from "@mui/material";
import Image from "next/image";

/* --- Country data --- */
const countries = [
  { name: "UAE", top: "40%", left: "65%" },
  { name: "India", top: "50%", left: "68%" },
  { name: "Canada", top: "20%", left: "20%" },
  { name: "United States", top: "25%", left: "35%" },
  { name: "United Kingdom", top: "25%", left: "55%" },
];

export default function MapSection() {
  return (
    <Box
      sx={{
        width: "100%",
        py: 10,
        background: "linear-gradient(to bottom, #fff, #ebf4ff)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        color="primary.main"
        sx={{ mb: 6, textShadow: "1px 1px 3px rgba(0,0,0,0.2)" }}
      >
        Highlighted Regions
      </Typography>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 900,
          height: 500,
          borderRadius: 5,
          overflow: "hidden",
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          border: "1px solid #ccc",
        }}
      >
        {/* World map image */}
        <Image
          src="/images/worldmap.png" // replace with your map image
          alt="World Map"
          fill
          style={{ objectFit: "cover" }}
        />

        {/* Country markers */}
        {countries.map((c) => (
          <Tooltip key={c.name} title={c.name} arrow>
            <Box
              sx={{
                position: "absolute",
                top: c.top,
                left: c.left,
                width: 24,
                height: 24,
                backgroundColor: "#3b82f6",
                borderRadius: "50%",
                border: "2px solid white",
                transform: "translate(-50%, -50%)",
                cursor: "pointer",
                "&:hover": {
                  transform: "translate(-50%, -50%) scale(1.2)",
                  transition: "transform 0.2s",
                },
              }}
            />
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
}
