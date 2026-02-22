const form = document.querySelector("form");
const input = document.querySelector('input[name="taskName"]');

form.addEventListener("submit", function (e) {
  if (!input.value.trim()) {
    e.preventDefault();
    alert("Please write your task!");
  }
});
