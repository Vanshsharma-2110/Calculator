const display = document.querySelector('#display');
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    const value = button.textContent;


    if (value === "Clear") {
      display.value = "0";
      return;
    }

    if (value === "Backspace") {
      display.value = display.value.slice(0, -1) || "0";
      return;
    }

    if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
      return;
    }

    if (display.value === "0") {
      display.value = value;
    } else {
      display.value += value;
    }

  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key;

  // Numbers and operators
  if (
    (key >= "0" && key <= "9") ||
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/" ||
    key === "."
  ) {
    if (display.value === "0") {
      display.value = key;
    } else {
      display.value += key;
    }
  }

  // Enter = result
  if (key === "Enter") {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  }

  // Backspace
  if (key === "Backspace") {
    display.value = display.value.slice(0, -1) || "0";
  }

  // Escape = Clear
  if (key === "Escape") {
    display.value = "0";
  }
});

