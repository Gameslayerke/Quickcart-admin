import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { AuthProvider } from './Components/AuthContext';
import PublicLayout from './Components/PublicLayout';
import PrivateLayout from './Components/PrivateLayout';
import AdminLogin from './Components/AdminLogin';
import Dashboard from './Components/Dashboard';
import Users from './Components/Users';
import Carousel from './Components/Carousel';
import UnderDevelopment from './Components/UnderDevelopment';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Routes>
            {/* Public Routes */}
            <Route element={<PublicLayout />}>
              <Route path="/login" element={<AdminLogin />} />
              <Route path="/notfound" element={<UnderDevelopment />} />
            </Route>

            {/* Protected Admin Routes */}
            <Route element={<PrivateLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/carousel" element={<Carousel />} />
            </Route>

            {/* Fallback Route */}
            <Route path="*" element={<UnderDevelopment />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;