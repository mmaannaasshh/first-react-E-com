// import logo from './logo.svg';
import './App.css';
import Home from './componants/Home';
import About from './componants/About';
import Products from './componants/Products';
import Contact from './componants/Contact';
import SingleProduct from './componants/SingleProduct';
import Cart from './componants/Cart';
import ErrorPage from './componants/ErrorPage';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './componant/Header';
import Footer from './componant/Footer';
function App() {
  const theme= {
    colors:{
      bg:"#F6F8FA",
      black:"#000",
      helper:"green",
      white:"#fff",
      footer_bg:"#0a1435",
      btn:"rgb(98 84 243)",
      border:"rgba(98,84,243,0.5)",
      hr:"#fff",
      gradient:"linear-gradient(0deg,rgb(132 144 255) 0%,rgb(98 189 252) 100%) ",
      shadow:"rgba(0,0,0,0.02) opx 1px 3px 0px,rgba(27,31,35,0.15) opx 0px 1px;",
      shadowSupport:"rgba(0,0,0,0.16) 0px 1px 4px"
    },
    media:{
      mobile:"768px",
      tab:"998px"
    }





  }
  return (
  <ThemeProvider theme={theme}>
      <BrowserRouter>
      <GlobalStyle/>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/singleProduct/:id' element={<SingleProduct/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
