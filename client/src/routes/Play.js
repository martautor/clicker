import { Box, Button, Container, Paper } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect, useState } from "react";

export default function Play() {
    const [value, setValue] = useState(0)
    const [xpoint, setXpoint] = useState(1)
    const [radius, setRadius] = useState(0)

    useEffect(() => {
        blockRadiusUp()
    })
    

    const addPoint = () => {
        setValue(value + xpoint)
    }
    const blockRadiusUp = () => {
        setRadius(value + 0.5)
    }
    return (<Paper  onClick={addPoint} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '1000px', height: '1000px', background: grey[300], borderRadius: 5}}>
                
                <h4>{value}</h4>
                <Box onClick={blockRadiusUp} width={radius} height={radius} sx={{background: 'green', borderRadius: 10}} color='error'>
                </Box>
            </Paper>)
}