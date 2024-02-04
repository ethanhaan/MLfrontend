import { Box } from '@mui/material';

export default ({ defaultBorder, children, icon, onClick, sx }) => (
  <Box 
    sx={{
      color: "#3B3B3B !important",
      transition: "all 200ms ease",
      borderRadius: "4px",
      fontSize: "12px",
      "&:hover": { 
        backgroundColor: "#00000009",
      },
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "4px",
      fontWeight: 500,
      border: defaultBorder && "1px #C4C4C4 solid",
      ...sx
    }}
    onClick={onClick}
  >
    {icon}
    {children}
  </Box>
)
