import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { breakPoints } from '../constants/dimension'
import {
  appColors,
  buttonPalette,
} from '../constants/color'
import { typographyCategory } from '../constants/fonts'



const getAppMode = (mode) => {
  return {
    breakpoints: {
      values: {
        xs: breakPoints.xs,
        sm: breakPoints.sm,
        md: breakPoints.md,
        lg: breakPoints.lg,
        xl: breakPoints.xl
      }
    },
    typography: {
      fontFamily: typographyCategory.base,
      color: appColors[mode]
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: appColors[mode],
            color: appColors[mode]
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '0.5rem',
            whiteSpace: 'nowrap',
            boxShadow: 'none',
            outline: 'none',
            textTransform: 'unset',
            fontWeight: 500,
            borderRadius: '4px',
            // minWidth: 'fit-content',
            '&.MuiButton-sizeLarge': {
              padding: '12px 18px',
              fontSize: '14px',
              lineHeight: '19.6px'
            },
            '&.MuiButton-sizeLarge.icon': {
              padding: '10px 10px',
              lineHeight: 1
            },
            '&.MuiButton-sizeMedium': {
              padding: '10px 8px',
              fontSize: '13px',
              lineHeight: '18.2px'
            },
            '&.MuiButton-sizeMedium.icon': {
              padding: '10px 10px',
              lineHeight: 1
            },
            '&.MuiButton-sizeSmall': {
              padding: '8px 6px',
              fontSize: '13px',
              lineHeight: '18.2px'
            },
            '&.MuiButton-sizeSmall.icon': {
              padding: '8px 8px',
              lineHeight: 1
            }
          }
        },
        defaultProps: {
          variant: 'contained'
        }
      },
      MuiContainer: {
        defaultProps: {
          maxWidth: "lg", 
        },
        styleOverrides: {
          root: {
            borderRadius: "8px",
          },
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1300,
        xl: 2136,
      },
    },
    }
  }
  
  const getTheme = (mode) => responsiveFontSizes(createTheme(getAppMode(mode)))
  
  export default getTheme