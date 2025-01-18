// Default balance
let balance = 10000000;

// Login logic
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const userId = document.getElementById("userId").value;
  const pin = document.getElementById("pin").value;

  if (userId.length === 6 && pin.length === 4) {
    // Redirect to dashboard
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid User ID or PIN. Please try again.");
  }
});

// Dashboard logic
document.getElementById("transactionForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const transactionType = document.getElementById("transactionType").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (amount > 0) {
    if (transactionType === "deposit") {
      balance += amount;
    } else if (transactionType === "withdraw") {
      if (amount <= balance) {
        balance -= amount;
      } else {
        alert("Insufficient balance!");
        return;
      }
    } else if (transactionType === "transfer") {
      if (amount <= balance) {
        balance -= amount;
      } else {
        alert("Insufficient balance!");
        return;
      }
    }

    // Update balance display
    document.getElementById("balanceDisplay").innerText = `Current Balance: $${balance.toLocaleString()}`;
    alert(`${transactionType.charAt(0).toUpperCase() + transactionType.slice(1)} successful!`);
  } else {
    alert("Please enter a valid amount.");
  }
});
