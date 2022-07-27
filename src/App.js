import Pages from "./containers/Pages";
import Kategori from "./components/Kategori";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Kategori />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
