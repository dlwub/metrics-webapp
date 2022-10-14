import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchQuestions } from '../redux/Questions/Questions';
import ammendUrl from './amendUrl';

export default function Category() {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    const { id } = e.target;
    dispatch(fetchQuestions(ammendUrl(id)));
  };

  return (
    <>
      <h3>Test your knowledge:</h3>
      <div className="categories">
        <Link className="links questions-link" to="/questions">
          <button id="general_knowledge" className="btn general_knowledge" onClick={handleClick} type="button">General Knowledge</button>
        </Link>
        <Link className="links questions-link" to="/questions">
          <button id="entertainement" className="btn entertainement" onClick={handleClick} type="button">Entertainement</button>
        </Link>
        <Link className="links questions-link" to="/questions">
          <button id="science" className="btn science" onClick={handleClick} type="button">Science</button>
        </Link>
        <Link className="links questions-link" to="/questions">
          <button id="social" className="btn social" onClick={handleClick} type="button">Social</button>
        </Link>
      </div>
    </>
  );
}
