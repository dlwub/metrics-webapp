import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Category from './components/Category';
import QuestionsView from './components/QuestionsView';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/questions" element={<QuestionsView />} />
      </Routes>
    </div>
  );
}

export default App;
