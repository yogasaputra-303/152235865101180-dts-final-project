import Pages from "./containers/Pages";
import Kategori from "./components/Kategori";
import { BrowserRouter } from 'react-router-dom';
import Pencarian from "./components/Pencarian";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Pencarian />
        <Kategori />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
