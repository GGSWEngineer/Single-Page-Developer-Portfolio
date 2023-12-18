// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll events for all elements with the class 'underline-text'
function handleScrollForAll() {
  const elements = document.querySelectorAll(".underline-text");

  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("underlined");
    } else {
      element.classList.remove("underlined");
    }
  });
}

// Attach the scroll event listener
document.addEventListener("scroll", handleScrollForAll);

// Initial check on page load
handleScrollForAll();

//

let hasErrors = false;

function handleInputError(inputElement, errorMessageClass) {
  const input = document.querySelector(inputElement);
  const errorMessage = document.querySelector(errorMessageClass);

//   console.log(input)

//   if (inputElement === "#email" && !input.checkValidity()) {
//     input.classList.add("error");
//     errorMessage.style.display = "block";
//     hasErrors = true; // Set the flag to true if there are errors
//     input.style.marginBottom = "0";
//   } else if (inputElement === "#email" && input.checkValidity()) {
//     input.classList.add("success");
//   }

//   if (input.value.trim() === "") {
//     input.classList.add("error");
//     errorMessage.style.display = "block";
//     hasErrors = true; // Set the flag to true if there are errors
//     input.style.marginBottom = "0"; // Adjust the value as needed
//   } else if (!hasErrors) {
//     console.log(inputElement)
//     input.classList.add("success");
//   }
if (inputElement === "#email") {
    if (!input.checkValidity()) {
      input.classList.add("error");
      errorMessage.style.display = "block";
      hasErrors = true;
      input.style.marginBottom = "0";
    } else {
      input.classList.remove("error");
      input.classList.add("success");
      errorMessage.style.display = "none";
      input.style.marginBottom = "2rem";
    }
  } else {
    if (input.value.trim() === "") {
      input.classList.add("error");
      errorMessage.style.display = "block";
      hasErrors = true;
      input.style.marginBottom = "0";
    } else {
      input.classList.remove("error");
      input.classList.add("success");
      errorMessage.style.display = "none";
      input.style.marginBottom = "2rem";
    }
  }

}

function error(event) {
  hasErrors = false;

  const inputSelectors = ["name", "email", "message"];

  inputSelectors.forEach((selector) => {
    handleInputError(`#${selector}`, `.${selector}-error-message`);
  });

  if (hasErrors) {
    event.preventDefault();
  }
}

document.querySelector(".btn").addEventListener("click", error);

function checkInputHasContent(inputId, errorMessageClass) {
  const input = document.querySelector(inputId);
  const errorMessage = document.querySelector(errorMessageClass);
  console.log(input, errorMessage);
  if (input.value.trim() !== "") {
    errorMessage.style.display = "none";
    input.classList.remove("error");
    input.style.marginBottom = "2rem";
  }
}

function clearError(input) {
  const errorMessageClass = `.${input.id}-error-message`;
  const inputId = `#${input.id}`;
  console.log(inputId, errorMessageClass);

  checkInputHasContent(inputId, errorMessageClass);
}

// the code below selects all the inputs and loops through them with the forEach method
// the function executed for each one of them is that when the user types into the input the function() { clearError(input) } the clearError is executed for the specific input only
document.querySelectorAll("input").forEach(function (input) {
  input.addEventListener("input", function () {
    clearError(input); // Pass the current input element
  });
});

var textarea = document.querySelector("textarea");

textarea.addEventListener("input", function () {
  clearError(textarea); // Pass the current textarea element
});
