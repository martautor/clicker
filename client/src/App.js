import { Container } from "@mui/material";
import ProgressSlide from "./components/ProgressSlide";
import { useState } from "react";
import Default from "./routes/Default";

function App() {
const [loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false)
  },5000)
  return (
    <div className="App">
      <Container maxWidth="sm">
        {loading ? <ProgressSlide/> : <Default/>}
      </Container>
    </div>
  );
}

export default App;
