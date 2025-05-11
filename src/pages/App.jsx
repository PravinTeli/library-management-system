import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LoginPage from './LoginPage';
import SearchPage from './SearchPage';
import BookDetailsPage from './BookDetailsPage';
import RegistrationPage from './RegistrationPage';
import '../App.css'; // Updated path to relative from src

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<h1 className="p-6">Welcome to the Library Management System!</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/book-details" element={<BookDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;