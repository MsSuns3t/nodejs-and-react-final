import './App.css';
import { Routes , Route} from 'react-router'
import Home from './pages/Home'
import DestinationDetails from './pages/DestinationDetails'
import Booking from './pages/Booking'
import NotFound from './pages/NotFound'

function App() {
  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/destinations/:id" element={<DestinationDetails />} />
    <Route path="/destinations/:id/booking" element={<Booking />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  )
}

export default App
