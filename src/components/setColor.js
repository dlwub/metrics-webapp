import { useSelector } from 'react-redux';

export default function setColor() {
  const questions = useSelector((state) => state.questions.list);
  questions.array.forEach((question) => {
    document.getElementById(question.selected).style.background = 'red';
    document.getElementById(question.correctAnswer).style.background = 'green';
  });
}
