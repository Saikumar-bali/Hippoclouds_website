import React, { useState, useRef } from "react";
import { Menu, Box } from "@mui/material";

const HoverMenu = ({ trigger, content }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const closeTimeoutRef = useRef(null);

  const handleOpen = (event) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setAnchorEl(null);
    }, 50); 
  };

  const handleMenuEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
  };

  const renderContent = () => {
    if (typeof content === "function") {
      return content(() => setAnchorEl(null));
    }
    return content;
  };

  return (
    <Box
      sx={{ display: "inline-block" }}
      onMouseLeave={handleClose}
    >
      {React.cloneElement(trigger, {
        onMouseEnter: handleOpen,
        sx: {
          ...(trigger.props.sx || {}),
          bgcolor: anchorEl ? "action.hover" : "transparent",
        },
      })}

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        disableRestoreFocus
        disableScrollLock
        sx={{ pointerEvents: "none" }}
        PaperProps={{
          sx: {
            pointerEvents: "auto",
            mt: 2.1,
            minWidth: 200,
          },
        }}
        MenuListProps={{
          onMouseEnter: handleMenuEnter,
          onMouseLeave: handleClose,
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        {renderContent()}
      </Menu>
    </Box>
  );
};

export default HoverMenu;