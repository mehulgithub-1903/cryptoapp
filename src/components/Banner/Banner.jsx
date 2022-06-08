import { Container,makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Carousel from './Carousel'


const useStyle= makeStyles((theme)=>({
    name:{
      fontWeight: "bold",
      marginBottom: 15,
      fontFamily: "Montserrat",
      [theme.breakpoints.down("sm")]: {
        fontSize:"2.5em"
      },
  },
    banner:{
        backgroundImage:"url(./banner3.jpg)",
    }, 
    bannerContent: {
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
      },
      tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      },
      carousel: {
        height: "50%",
        display: "flex",
        alignItems: "center",
      },
}))
const Banner = () => {
    const classes=useStyle()
  return (
    <div className={classes.banner}>
        <Container className={classes.bannerContent}>
            <div className={classes.tagline}>
            
                <Typography      
                variant="h2"
                className={classes.name}>
                    C R Y P T O N I C
                </Typography>  
                <Typography
            variant="subtitle2 "
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            ONE STOP TO MONITOR ALL YOUR CRYPTOCURRENCY
          </Typography>

            </div>
            <Carousel></Carousel>
        </Container>
    </div>
  )
}

export default Banner