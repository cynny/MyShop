import {Container} from 'react-bootstrap';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homescreen from './screens/Homescreen';

//arrow functions
const App = () => {
  return (
    <>

    <Header />

    <main>
      <Container>
    <Homescreen />
    </Container>
    </main>

    <Footer />

    </>

   );

}

export default App;
