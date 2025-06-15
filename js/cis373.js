  function validateForm() {
      let name = document.getElementById("name").value.trim();
      // ... (full validation code)
      if (name === "") {
          alert("Name must be filled in");
          return false;
      }
      let email = document.getElementById("email").value.trim();
      if (email === "") {
          alert("Email must be filled in");
          return false;
      }
      let mailformat = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
      if (!mailformat.test(email)) {
          alert("You have entered an invalid email address");
          return false;
      }
      let phone = document.getElementById("phone").value.trim();
      if (phone === "") {
          alert("Phone must be filled in");
          return false;
      }
      let message = document.getElementById("message").value.trim();
      if (message === "") {
          alert("Message must be filled in");
          return false;
      }
      // if all validations pass, allow form submission
      return true;
  }
  function getRadioValue(radio) {
      if (radio.checked) {
          alert("You selected: " + radio.value);
      } else {
          alert("You unselected: " + checkbox.value);
      }
  }
  function getCheckboxValue(checkbox) {
      if (checkbox.checked) {
          alert("You selected: " + checkbox.value);
      } else {
          alert("You unselected: " + checkbox.value);
      }
  }
  function getMenuSelection(menu) {
      alert("You selected " + menu.value)
  }
  function getTextboxEntry(textbox) {
      alert("You entered " + textbox.value)
  }