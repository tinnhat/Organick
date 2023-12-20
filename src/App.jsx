import { Route, Routes } from "react-router-dom"
import Footer from "./components/footer"
import Header from "./components/header"
import NewsLatteer from "./components/newslatter"
import ErrorPage from "./pages/404"
import AboutPage from "./pages/about"
import HomePage from "./pages/home"
import Portfolio from "./pages/portfolio"
import Quality from "./pages/quality"
import Service from "./pages/services"
import Shop from "./pages/shop"
import ShopSingle from "./pages/shopSingle"

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop-single' element={<ShopSingle />} />
        <Route path='/service' element={<Service />} />
        <Route path='/quality' element={<Quality />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <NewsLatteer/>
      <Footer />
    </div>
  )
}

export default App
