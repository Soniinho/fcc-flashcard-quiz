interface FlashCard {
  questionText: string;
  questionAnswer: string;
}

class InvalidUserInputError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidUserInputError";
    Object.setPrototypeOf(this, InvalidUserInputError.prototype);
  }
}

let currentCards: FlashCard[] = [];

const flashCardDiv = document.querySelector<HTMLDivElement>("#flashcard");
if (!flashCardDiv) throw new Error("Flashcard Div not found.");

const deleteBtn = document.querySelector<HTMLButtonElement>("#delete-btn");
if (!deleteBtn) throw new Error("Delete Button not found.");

const form = document.querySelector<HTMLFormElement>("#entry-form");
if (!form) throw new Error("Form not found.");

const questionEntry = document.getElementById(
  "front-text",
) as HTMLTextAreaElement;
const answerEntry = document.getElementById("back-text") as HTMLTextAreaElement;

const showCurrentCard = (currentCard: FlashCard | undefined) => {
  const cardInnerDiv = document.querySelector<HTMLDivElement>("#current-card");
  if (!cardInnerDiv) throw new Error("Card inner div not found.");

  const [cardFront, cardBack] = cardInnerDiv.children;

  if (!currentCard) {
    cardFront.textContent = "";
    cardBack.textContent = "";
  } else {
    cardFront.textContent = currentCard.questionText;
    cardBack.textContent = currentCard.questionAnswer;
  }
};

const addCard = (front: string, back: string) => {
  const newCard = {
    questionText: front,
    questionAnswer: back,
  };

  currentCards.push(newCard);
  showCurrentCard(newCard);
};

flashCardDiv.addEventListener("click", () => {
  flashCardDiv.classList.toggle("flipped");
});

deleteBtn.addEventListener("click", () => {
  currentCards.pop();
  const currentCard = currentCards.at(-1);

  showCurrentCard(currentCard);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const paragraphError =
    document.querySelector<HTMLParagraphElement>("#entry-error");
  if (!paragraphError) throw new Error("Error paragraph not found.");

  const question = questionEntry.value;
  const answer = answerEntry.value;

  try {
    if (question.trim() === "" || answer.trim() === "") {
      throw new InvalidUserInputError("Question and/or Answer can't be empty!");
    }

    if (paragraphError.textContent != "") paragraphError.textContent = "";

    addCard(question, answer);
  } catch (error) {
    if (error instanceof InvalidUserInputError) {
      paragraphError.textContent = error.message;
    } else {
      console.log("Error: ", error);
    }
  }
});
