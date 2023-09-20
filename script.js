const percentageInput = document.getElementById("percentVal");
const amountInput = document.getElementById("amountVal");
const ansPer = document.getElementById("percent");
const ansAmount = document.getElementById("amount");
const answer = document.getElementById("ans");
const ansSection = document.getElementById("ansSection");

const calculate = () => {
  const percent = percentageInput.value;
  const amount = amountInput.value;
  const result = (percent / 100) * amount;
  ansPer.textContent = `${percent}%`;
  ansAmount.textContent = amount;
  answer.textContent = result;
  ansSection.style.display = "block";
  return result;
};
