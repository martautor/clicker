import { Box, Button, Container } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import '../components/css/default.css'
export default function Default() {
    return (<Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <Container sx={{textAlign: 'center'}}>
            <Link to='/home'> <Button>Home</Button>   </Link>
            <Link to='/play'> <Button>Let's play</Button> </Link>
        </Container>
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
            <Outlet />
        </Box>
        </Container>)
}