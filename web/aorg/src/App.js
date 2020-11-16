import Header from "./components/header";
import Footer from "./components/footer"
import Information from './components/information'
import Response from './components/response'

import './styles.css'

function App() {
  return (
    <div className="App">
      <Header />

      <Information />

      <Response />

      <Footer />
    </div>
  );
}

export default App;
