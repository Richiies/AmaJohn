import { Route,BrowserRouter } from "react-router-dom";
import Home from "../src/Routes/Home"
import ProductScreen from "./Routes/ProductScreen";


function App() {
  return (
    <BrowserRouter>
    <div className="App">

    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">Ama<span className="logo">John</span></a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
        <Route path="/" exact component= {Home}/>
        <Route path="/product/:id" component={ProductScreen} />

        
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
