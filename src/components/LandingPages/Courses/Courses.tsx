import React, { Component } from "react";
import { Button, Typography, Box, CardMedia,Grid, CardContent,Card,CardActions } from "@mui/material";
import { CoursesStyles } from "./Courses.Style";
import { withStyles } from "@mui/styles";
import { courseImages, latestBlogs} from "../../../assets/data/coursesDataBox";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

interface CoursesProps {
  classes?: any;
}

class Courses extends Component<CoursesProps> {
  render() {
    const { classes } = this.props;
    return (
        <>
        <Box sx={{ backgroundImage: `url("https://dreamslms-wp.dreamguystech.com/wp-content/themes/dreamslms/assets/images/bg-banner-02.png")` }}>
            <Box sx={{margin:"40px",padding:"40px"}}>
                <Typography align="center" component="div" variant="h4" sx={{padding:"20px", fontWeight:"bold",color:"#002058"}}>Latest Blogs</Typography>
                <Typography align="center" variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum<br/>gravida  maecenas augue elementum et neque. Suspendisse imperdiet.
                    </Typography>
            </Box>
        <Box>
          <Grid container >

                    {
                        latestBlogs.map((item,index) => {
                            return (
                                <>
                              
                                   <Grid item lg={3} md={6} sx={{display:"flex", justifyContent:"space-around"}}>
              <Card sx={{ maxWidth: 300,borderRadius:"15px", margin:"20px" }}>
                <CardMedia
                  sx={{ height: 190 }}
                  image={item.imgUrl}
                  title="green iguana"
                />
                <CardContent>
                  <Typography align="center">
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{ fontWeight: "bold", color:"#002058" }}
                    >
                     {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {item.subTitle}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ marginTop: "15px", fontSize: "14px" }}
                    >
                      <CalendarMonthIcon
                        sx={{ fontSize: "15px", color: "red" }}
                      />{" "}
                    {item.date}
                    </Typography>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
                                </>
                            )
                        })

                    }

                    
         
          </Grid>
        </Box>

        <Box
          sx={{
            background:
              "linear-gradient(90deg, rgba(161, 196, 253, 0.79) 0%, rgba(194, 233, 251, 0.36) 100%)",
            borderRadius: "25px",
            margin: "100px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Button
              sx={{
                backgroundColor: "white",
                margin: "30px",
                padding: "10px",
                borderRadius: "10px",
                height: "100px",
                width: "100px",
                marginLeft: "-100px",
              }}
            >
              <Box
                component="img"
                src="https://dreamslms-wp.dreamguystech.com/wp-content/uploads/2023/01/icon-09-1.svg"
                sx={{ width: "100%" }}
              />
            </Button>
            <Box sx={{ marginTop: "30px", marginLeft: "-120px" }}>
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", color: "#002058" }}
              >
                0
              </Typography>
              <Typography
                sx={{ color: "grey", fontSize: "20px", marginTop: "5px" }}
              >
                Students Enrolled{" "}
              </Typography>
            </Box>

            <Button
              sx={{
                backgroundColor: "white",
                margin: "30px",
                padding: "10px",
                borderRadius: "10px",
                height: "100px",
                width: "100px",
              }}
            >
              <Box
                component="img"
                src="https://dreamslms-wp.dreamguystech.com/wp-content/uploads/2023/01/icon-09-1.svg"
                sx={{ width: "100%" }}
              />
            </Button>
            <Box sx={{ marginTop: "30px", marginLeft: "-120px" }}>
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", color: "#002058" }}
              >
                0
              </Typography>
              <Typography
                sx={{ color: "grey", fontSize: "20px", marginTop: "5px" }}
              >
                Total Courses{" "}
              </Typography>
            </Box>

            <Button
              sx={{
                backgroundColor: "white",
                margin: "30px",
                padding: "10px",
                borderRadius: "10px",
                height: "100px",
                width: "100px",
              }}
            >
              <Box
                component="img"
                src="https://dreamslms-wp.dreamguystech.com/wp-content/uploads/2023/01/icon-09-1.svg"
                sx={{ width: "100%" }}
              />
            </Button>
            <Box sx={{ marginTop: "30px", marginLeft: "-120px" }}>
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", color: "#002058" }}
              >
                0
              </Typography>
              <Typography
                sx={{ color: "grey", fontSize: "20px", marginTop: "5px" }}
              >
                Countries{" "}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box>
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: "bold", color: "#002058" }}
          >
            Unlimited access to 360+ courses <br />
            and 1,600+ hands-on labs
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {courseImages.map(item => {
            return (
              <>
                {" "}
                <Button
                  sx={{
                    backgroundColor: "white",
                    margin: "30px",
                    padding: "10px",
                    borderRadius: "10px",
                    height: "70px",
                    width: "70px",
                  }}
                >
                  <Box
                    component="img"
                    src={item.imgUrl}
                    sx={{ width: "100%" }}
                  />
                </Button>
              </>
            );
          })}
        </Box></Box>
      </>
    );
  }
}

export default withStyles(CoursesStyles)(Courses);
