import './styles/global.css'
import Layout from './components/Layout';
import { Routes, Route} from 'react-router-dom';
import Home from './routes/Home'
import Contact from './routes/Contact'
import Portfolio from './routes/Portfolio'
import Services from './routes/Services'

function App() {
  return (
    <>
      <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
              <Route path="contact">
                <Route index element={<Contact />} />
              </Route>
              <Route path="portfolio">
                <Route index element={<Portfolio />} />
              </Route>
              <Route path="services">
                <Route index element={<Services />} />
              </Route>
          </Route>
      </Routes>
    </>
  );
}

export default App;
