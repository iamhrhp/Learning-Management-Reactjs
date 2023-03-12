import { Box, CardMedia } from '@mui/material';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';
import logo from '../../../assets/images/bannerLogo/logo.svg';
import { withStyles } from '@mui/styles';
import { LandingBannerStyles } from './LandingBanner.Style';
import MenuIcon from '@mui/icons-material/Menu';
interface LandingBannerProps {
  classes?: any;
}

interface LandingBannerState {}

class LandingBanner extends React.Component<
  LandingBannerProps,
  LandingBannerState
> {
  constructor(props: LandingBannerProps) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;

    return (
      <>
        <Box className={classes.boxWrapper}>
          <Box className={classes.burgerOptions}>
            <Button>
              <MenuIcon />
            </Button>
          </Box>
          <Box className={classes.imgBox}>
            <CardMedia
              component="img"
              image={logo}
              className={classes.imgLogo}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              width: '50%',
            }}
          >
            <Typography className={classes.bannerText}>Home</Typography>
            <Typography className={classes.bannerText}>About Us</Typography>
            <Typography className={classes.bannerText}>Instructors</Typography>
            <Typography className={classes.bannerText}>Students</Typography>
            <Typography className={classes.bannerText}>Blog</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button className={classes.logBtn}>Login</Button>
            <Button className={classes.regBtn}>Register</Button>
          </Box>
        </Box>
      </>
    );
  }
}

export default withStyles(LandingBannerStyles)(LandingBanner);
