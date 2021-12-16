import React from "react";
import * as UI from "@mui/material";
import images, { image37 } from "./images";
import _ from "lodash";

function App() {
  const theme = UI.useTheme();
  const sm = UI.useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <UI.Box sx={{ overflow: "hidden" }}>
      <img
        src={image37}
        alt="Christmas cartoon"
        style={{ width: "calc(100% - 16px)", margin: "8px 8px 0 8px" }}
      />
      <UI.ImageList
        variant="masonry"
        cols={sm ? 2 : 1}
        gap={8}
        sx={{ mx: 1, mt: 0, mb: 1 }}
      >
        {_.reverse(images).map((image, index) => (
          <UI.ImageListItem key={index}>
            <img src={image} loading="lazy" />
          </UI.ImageListItem>
        ))}
      </UI.ImageList>
    </UI.Box>
  );
}

export default App;
