import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import Question from './Question';
import { countAnswer, setColor } from '../redux/Questions/Questions';

export default function DetailsPage() {
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.questions.count);
  const questions = useSelector((state) => state.questions.list);
  const handleClick = () => {
    setFlag(true);
    dispatch(countAnswer());
    dispatch(setColor());
  };
  const displayQuestions = questions.map((question) => (
    <div key={question.id} className="question-backBtn">
      <Question
        key={question.id}
        id={question.id}
        question={question.question}
        correctAnswer={question.correctAnswer}
        choices={question.choices}
      />
      <Link className="links home-link" to="/">
        <FontAwesomeIcon className="icon-forward" icon={faArrowAltCircleRight} />
      </Link>
    </div>
  ));

  return (
    <>
      <div className="question-bar">
        <Link className="links home-link" to="/">
          <FontAwesomeIcon className="icon" icon={faAngleLeft} />
        </Link>
        <h3 className="questions-title">Questions</h3>
      </div>
      <div className="question-container">{displayQuestions}</div>
      <button type="button" className="check-btn" onClick={() => handleClick()}>Check Answers</button>
      {flag && (
      <div className="view-score">
        <span className="score-span">{`You scored ${count}/5`}</span>
        <Link className="links home-link" to="/">
          <button className="try-btn" type="button">Play Again</button>
        </Link>
      </div>
      )}

    </>
  );
}
