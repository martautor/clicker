import { Box, Button, Container } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import '../components/css/default.css'
export default function Default() {
    return (<div>
        <Container sx={{textAlign: 'center'}}>
            <Link to='/home'> <Button>Home</Button>   </Link>
            <Link to='/play'> <Button>Let's play</Button> </Link>
        </Container>
        <Box>
            <Outlet/>
        </Box>
    </div>)
}