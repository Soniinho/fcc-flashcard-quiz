Build an app that is functionally similar to this example project. Try not to copy the example project, give it your own personal style.

In this lab, you will create an app that displays and stores flashcard data that can be retrieved later.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

    You should have an HTML element with an id of flashcard.
    You should have an interface called FlashCard.
    The FlashCard interface should contain the following properties questionText and questionAnswer both of type string.
    You should have a collection of FlashCard elements called currentCards.
    When the #flashcard element is clicked, the card should have the flipped class.
    You should have an element with an id of delete-btn.
    When the #delete-btn element is clicked, it should remove current card and display the previous card data.
    You should create an entry form with an id of entry-form to be able to add more flashcards to the currentCards collection on submit.
    The two elements inside of the form should have an id of front-text and back-text respectively.
    You should create and call an InvalidUserInputError when either the question text or question answer is empty in the entry form.

Tests:

    Waiting: 1. You should have an HTML element with an id of flashcard.
    Waiting: 2. You should have a FlashCard interface.
    Waiting: 3. The FlashCard interface should have a questionText property of type string.
    Waiting: 4. The FlashCard interface should have a questionAnswer property of type string.
    Waiting: 5. You should have a collection of FlashCard elements called currentCards with the type FlashCard[].
    Waiting: 6. When the #flashcard element is first clicked, the element should receive the flipped class.
    Waiting: 7. You should have an element with an id of delete-btn.
    Waiting: 8. When the delete-btn is clicked, a flashcard element should be removed from the currentCards collection.
    Waiting: 9. When the delete-btn is clicked, the previous flashcard data should be displayed.
    Waiting: 10. You should create an entry form with an id of entry-form.
    Waiting: 11. You should have two textarea elements of ids front-text and back-text respectively inside the form.
    Waiting: 12. An InvalidUserInputError should be thrown when either the question text or question answer is empty in the entry form.
