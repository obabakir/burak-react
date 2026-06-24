import React from "react";
// @ts-ignore: side-effect import of CSS without type declarations
import "../css/app.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { RippleBadge } from "./MaterialTheme/styled";

function App() {
  return (
    <Container sx={{ background: "orange" }}>
      <Stack sx={{ flexDirection: "column" }}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component={"h4"}>
            Create React App on TypeScript with Redux
          </Typography>
        </Box>
        <Box>
          <RippleBadge badgeContent={4}>
            <Button variant="contained">Contained</Button>
          </RippleBadge>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
