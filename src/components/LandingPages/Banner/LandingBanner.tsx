import { Box, CardMedia } from '@mui/material';
import { Button, Typography, Drawer, Divider } from '@mui/material';
import React from 'react';
import logo from '../../../assets/images/bannerLogo/logo.svg';
import { withStyles } from '@mui/styles';
import { LandingBannerStyles } from './LandingBanner.Style';
import MenuIcon from '@mui/icons-material/Menu';
interface LandingBannerProps {
  classes?: any;
}

interface LandingBannerState {
  sidebar: boolean;
}

class LandingBanner extends React.Component<
  LandingBannerProps,
  LandingBannerState
> {
  constructor(props: LandingBannerProps) {
    super(props);
    this.state = { sidebar: false };
  }

  handleDrawer = () => {
    this.setState({ sidebar: true });
  };

  handleCloseDrawer = () => {
    this.setState({ sidebar: false });
  };

  render() {
    const { classes } = this.props;
    const options = [
      { id: 1, title: 'Home' },
      { id: 2, title: 'Courses' },
      { id: 3, title: 'Instructor' },
      { id: 4, title: 'Student' },
      { id: 5, title: 'Blog' },
      { id: 6, title: 'About Us' },
    ];
    return (
      <>
        <Box className={classes.boxWrapper}>
          <Box className={classes.burgerOptions}>
            <Button onClick={this.handleDrawer}>
              <MenuIcon />
            </Button>
            <Drawer open={this.state.sidebar} onClose={this.handleCloseDrawer}>
              <Box className={classes.sidebarBoxWrapper}>
                {options.map((element) => {
                  return (
                    <Box>
                      <Typography className={classes.sidebarOptionText}>
                        {element.title}
                      </Typography>
                      <Divider />
                    </Box>
                  );
                })}
              </Box>
            </Drawer>
          </Box>
          <Box className={classes.imgBox}>
            <CardMedia
              component="img"
              image={logo}
              className={classes.imgLogo}
            />
          </Box>
          <Box className={classes.bannerOptions}>
            <Typography className={classes.bannerText}>Home</Typography>
            <Typography className={classes.bannerText}>Courses</Typography>
            <Typography className={classes.bannerText}>Instructors</Typography>
            <Typography className={classes.bannerText}>Students</Typography>
            <Typography className={classes.bannerText}>Blog</Typography>
            <Typography className={classes.bannerText}>About Us</Typography>
          </Box>
          <Box className={classes.ButtonBox}>
            <Button className={classes.logBtn}>Login</Button>
            <Button className={classes.regBtn}>Register</Button>
          </Box>
        </Box>
      </>
    );
  }
}

export default withStyles(LandingBannerStyles)(LandingBanner);
