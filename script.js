document.getElementById("go").addEventListener("click", function () {
    const date = document.getElementById("selectedate").value;
    if (date) {
      // Store date in local storage to use it on the second page
      localStorage.setItem("targetDate", date);
      // Redirect to the second page
      window.location.href = "daysleft.html";
    } else {
      alert("Please select a date!");
    }
  });