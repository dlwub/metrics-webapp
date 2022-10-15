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
      <div className="test-knowledge" />
      <div className="category-text">QUESTIONS BY CATEGORY</div>
      <div className="categories">
        <Link className="links questions-link" to="/questions">
          <button id="general_knowledge" className="btn general_knowledge" onClick={handleClick} aria-label="general_knowledge" type="button" />
        </Link>
        <Link className="links questions-link" to="/questions">
          <button id="entertainment" className="btn entertainment" onClick={handleClick} aria-label="entertainment" type="button" />
        </Link>
        <Link className="links questions-link" to="/questions">
          <button id="science" className="btn science" onClick={handleClick} aria-label="science" type="button" />
        </Link>
        <Link className="links questions-link" to="/questions">
          <button id="social" className="btn social" onClick={handleClick} aria-label="social" type="button" />
        </Link>
      </div>
    </>
  );
}
