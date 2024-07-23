import { Box, Paper } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect, useState } from "react";

export default function Play() {
    
    const [value, setValue] = useState(1)
    const [xpoint, setXpoint] = useState(1)
    const [radius, setRadius] = useState(0)
    const [color, setColor] = useState()
    
    const blockRadiusUp = () => {
        setRadius(value + 1)
        setValue(value + xpoint)
        if(value < 10) {
            setColor('#00ff0' + value)
        } else if (value < 100) {
            setColor('#00ff' + value)
        } else if (value > 99) {
            let sval = String(value)[1] + String(value)[2] 
            if(value > 200 && value < 300) 
                return setColor('#ffff' + sval)
            if(value > 300) 
                return setColor('#30ff' + sval)  
            return setColor('#10ff' + sval)
        } else if (value > 199 && value < 499) {
            let sval = String(value)[1] + String(value)[2]
            setColor('#10ff' + sval)
        }
        console.log(color)
    } 
    console.log('radius:', radius)

    return (
            <Paper  onClick={blockRadiusUp} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '75vw', height: '75vh', background: grey[300], borderRadius: 5}}>    
                <h4>{value}</h4>
                <Box width={radius + 'px'} height={radius + 'px'} sx={{background: color, borderRadius: 25}} color='error'>
                </Box>
            </Paper>)
}