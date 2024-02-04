import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
	components: {
		MuiAccordion: {
			defaultProps: {
				square: true,
				boxShadow: "none",
				border: "solid bottom 1px black"
			}
		},
		MuiButton: {
			styleOverrides: {
				root: {
					fontSize: "50px",
				}
			}
		},
		// MuiSelect: {
		// 	styleOverrides: {
		// 		root: {
		// 			border: "1px #E5E5E5 solid",
		// 			fontFamily: "Poppins",
		// 			"& .MuiOutlinedInput-notchedOutline": {
		// 				border: "none",
		// 			},
		// 		}
		// 	}
		// },
    MuiSlider: {
      styleOverrides: {
        root: {
          width: '187px',
          color: '#E5E5E5',
          height: 8,
          padding: '15px 0'
        },
        thumb: {
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          height: 18,
          width: 18,
          backgroundColor: '#fff',
          border: '1px solid #E5E5E5',
          '&:hover': {
            height: 20,
            width: 20,
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
          },
          '&:active': {
            boxShadow: '0 2px 3px rgba(0,0,0,0.1)',
          },
        }
      }
    },
		MuiPaper: {
			styleOverrides: {
				root: {
					boxShadow: "rgba(149, 157, 165, 0.25) 0px 0px 24px",
					marginTop: "6px"
				}
			}
		},
		MuiMenuItem: {
			styleOverrides: {
				root: {
					fontFamily: "Montserrat",
					fontWeight: 450,
					fontSize: "12px"
				}
			}
		},
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          border: "none",
        }
      }
    },
		MuiInputBase: {
			defaultProps: {
				fullWidth: true,
				fontFamily: "Poppins"
			},
			styleOverrides: {
				root: {
					border: "1px #E5E5E5 solid",
					borderRadius: "5px",
					fontSize: "13px",
					padding: "0 10px",
					transition: "all 100ms ease-out",
					textarea: { fontFamily: "Poppins" },
					input: { fontFamily: "Poppins" },
					"&:hover": {
						borderColor: "#1B56BA",
						boxShadow: "#1B56BA44 0px 0px 5px 1px",
					},
					"&.Mui-focused": {
						borderColor: "#1B56BA"
					},
					"&.Mui-error": {
						borderColor: "#ff3333",
						"&:hover": {
							borderColor: "#ff3333",
							boxShadow: "#ff333344 0px 0px 5px 1px",
						},
					}
				},
			},
			variants: [
				{
          props: { variant: 'no-style' },
          style: {
						border: "none",
						boxShadow: "none",
						"&.Mui-focused": {
							borderColor: "none"
						},
						"&:hover": {
							borderColor: "none",
							boxShadow: "none"
						}
          }
        }
			]
		},
	}
});
