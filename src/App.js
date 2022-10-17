import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import DetailsPage from './components/DetailsPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
