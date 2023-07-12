export function getRandomAnswer(answers) {
  const randomIndex = Math.floor(Math.random() * answers.length);
  return answers[randomIndex];
}
