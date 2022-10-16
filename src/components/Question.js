import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setChoice } from '../redux/Questions/Questions';
import decodeHtml from './decodeHtml';

export default function Question(props) {
  const { id, question } = props;
  const { choices } = props;
  const dispatch = useDispatch();
  const handleEvent = (e) => {
    e.preventDefault();
    const { id } = e.target;
    const parentId = document.getElementById(`${id}`).className;
    dispatch(setChoice([parentId, id]));
  };
  const displayChoices = choices.map((choice) => (
    <button key={choice} id={choice} className={id} onClick={handleEvent} type="button">{decodeHtml(choice)}</button>
  ));

  return (
    <div key={id}>
      <h4 className="question">
        {decodeHtml(question)}
        <div className="choices">
          {displayChoices}
        </div>
      </h4>
    </div>
  );
}

Question.propTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  choices: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,  
};
