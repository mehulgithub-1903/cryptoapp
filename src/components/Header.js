  import { AppBar,Container,MenuItem,Select,Toolbar,Typography,} from "@material-ui/core";import React from 'react'
  import {makeStyles,createTheme,ThemeProvider} from "@material-ui/core/styles"
  import { useHistory } from "react-router-dom";
  import { CryptoState } from "../CryptoContext";

  const useStyles = makeStyles((theme) => ({
    title: {
      flex: 1,
      color: "#76ff03",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      cursor: "pointer",
      
    },
  }));
  const darkTheme = createTheme({
    palette: {
      primary: {  
        main:'#fff',
      },
      type:"dark"
    }
  })

  const Header = () => {
  
  const classes=useStyles();
  
  const history = useHistory();
  
  const {currency,setCurrency} =CryptoState()

  
  return (
    <ThemeProvider theme={darkTheme} >

    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
         <Typography 
         onClick={()=> history.push(`/`)}
         className={classes.title}
         varian='h6'>
          C R Y P T O N I C
         </Typography>
          <Select variant='outlined'
          style={{ 
            width: 100,
            height: 40,  
            marginRight: 15,
          }}
          value={currency}
          onChange={(e)=>setCurrency(e.target.value)}
          >
           <MenuItem value={"USD"}>USD</MenuItem>
           <MenuItem value={"INR"}>INR</MenuItem>
           <MenuItem value={"EUR"}>Euro</MenuItem>
           
         </Select>
        </Toolbar>
      </Container>
    </AppBar>
  </ThemeProvider>
    
  )
}

export default Header