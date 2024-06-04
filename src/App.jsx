import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import About from './pages/About';
import Home from './pages/Home';
import CreateTemplate from "./pages/CreateTemplate";
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element ={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='createTemplate' element={<CreateTemplate />} />
        </Route>
      </Routes>
      </>
     )
}

export default App
