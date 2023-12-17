import React from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { Box, List, Typography } from '@mui/material'

const Footer = () => {
  
  return (
    <Box
      sx={{
        bgcolor: '#212529',
        width: '100%',
      }}
    >
      <Grid
        container
        rowSpacing={2}
        columns={{xs: 1,sm: 2,xl: 4}}
        sx={{
          margin: '0 auto',
          textAlign: 'center',
          padding: {
            xs: '40px 20px',
            sm: '40px 30px',
            md: '40px 40px',
          },
          width: '100%',
          maxWidth: '1300px',
        }}
      >
        <Grid 
          xs={1}
          sx={{
            textAlign: {
              xs: 'center',
              sm: 'left'
            }
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: '17px',
              },
              color: '#ffffff',
              fontWeight: {
                xs: '600'
              },
              fontFamily: "'Poppins', sans-serif",
              mb: {
                xs: '7px'
              }
            }}
          >
            Links
          </Typography>
          <List
            sx={{
              color: '#ffffff',
              opacity: '0.8',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: {
                xs: 'center',
                sm: 'flex-start'
              }
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: '15px'
                },
                fontFamily: "'Poppins', sans-serif",
                cursor: 'pointer',
                mb: {
                  xs: '7px'
                }
              }}
            >
              About Us
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: '15px'
                },
                fontFamily: "'Poppins', sans-serif",
                cursor: 'pointer',
                mb: {
                  xs: '7px'
                }
              }}
            >
              Contact Us
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: '15px'
                },
                fontFamily: "'Poppins', sans-serif",
                cursor: 'pointer',
                mb: {
                  xs: '7px'
                }
              }}
            >
              Blog
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: '15px'
                },
                fontFamily: "'Poppins', sans-serif",
                cursor: 'pointer',
                mb: {
                  xs: '7px'
                }
              }}
            >
              FAQ's
            </Typography>
          </List>
        </Grid>
        <Grid 
          xs={1}
          sx={{
            textAlign: {
              xs: 'center',
              sm: 'left'
            }
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: '17px',
              },
              color: '#ffffff',
              fontWeight: {
                xs: '600'
              },
              fontFamily: "'Poppins', sans-serif",
              mb: {
                xs: '7px'
              }
            }}
          >
            Policies
          </Typography>
          <List
            sx={{
              color: '#ffffff',
              opacity: '0.8',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: {
                xs: 'center',
                sm: 'flex-start'
              },
              mb: '20px'
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: '15px'
                },
                fontFamily: "'Poppins', sans-serif",
                cursor: 'pointer',
                mb: {
                  xs: '7px'
                }
              }}
            >
              Terms & Conditions
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: '15px'
                },
                fontFamily: "'Poppins', sans-serif",
                cursor: 'pointer',
                mb: {
                  xs: '7px'
                }
              }}
            >
              Cookies Policy
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: '15px'
                },
                fontFamily: "'Poppins', sans-serif",
                cursor: 'pointer',
                mb: {
                  xs: '7px'
                }
              }}
            >
              Data Policy
            </Typography>
          </List>
        </Grid>
        <Grid 
          xs={1}
          sx={{
            textAlign: {
              xs: 'center',
              sm: 'left'
            }
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: '17px',
              },
              color: '#ffffff',
              fontWeight: {
                xs: '600'
              },
              fontFamily: "'Poppins', sans-serif",
              mb: {
                xs: '7px'
              }
            }}
          >
            About Shopping Hub
          </Typography>
          <List
            sx={{
              color: '#ffffff',
              opacity: '0.8',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              alignItems: {
                xs: 'center',
                sm: 'flex-start'
              },
              mb: '20px'
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: '15px'
                },
                fontFamily: "'Poppins', sans-serif",
                cursor: 'pointer',
                mb: {
                  xs: '7px'
                }
              }}
            >
              Company Info
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: '15px'
                },
                fontFamily: "'Poppins', sans-serif",
                cursor: 'pointer',
                mb: {
                  xs: '7px'
                }
              }}
            >
              Branches
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: '15px'
                },
                fontFamily: "'Poppins', sans-serif",
                cursor: 'pointer',
                mb: {
                  xs: '7px'
                }
              }}
            >
              Store
            </Typography>
          </List>
        </Grid>
        <Grid 
          xs={1}
          sx={{
            textAlign: {
              xs: 'center',
              sm: 'left'
            }
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: '17px',
              },
              color: '#ffffff',
              fontWeight: {
                xs: '600'
              },
              fontFamily: "'Poppins', sans-serif",
              mb: {
                xs: '7px'
              }
            }}
          >
            Contact
          </Typography>
          <List
            sx={{
              color: '#ffffff',
              opacity: '0.8',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: {
                xs: 'center',
                sm: 'flex-start'
              },
              mb: '20px'
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: '15px'
                },
                fontFamily: "'Poppins', sans-serif",
                cursor: 'pointer',
                mb: {
                  xs: '7px'
                }
              }}
            >
              +678 004 5754
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: '15px'
                },
                fontFamily: "'Poppins', sans-serif",
                cursor: 'pointer',
                mb: {
                  xs: '7px'
                }
              }}
            >
              info@shophub.com
            </Typography>
          </List>
        </Grid>

      </Grid>
    </Box>
  )
}

export default Footer