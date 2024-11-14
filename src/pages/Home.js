import DeviceList from "../components/DeviceList";
import { Container } from "@mui/material";

function Home() {
  return (
    <>
      <Container maxWidth="xl">
        <DeviceList />
      </Container>
    </>
  );
}

export default Home;
