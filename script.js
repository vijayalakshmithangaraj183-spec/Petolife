function scrollToDemo() {
  document.getElementById("demo").scrollIntoView();
}

function generate() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;

  if (!name || !age) {
    alert("Enter details");
    return;
  }

  let id = "PET_" + Math.floor(Math.random() * 10000);

  // Show digital identity
  document.getElementById("output").innerHTML = `
    <h3>🐾 Digital ID Created</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>ID:</b> ${id}</p>
  `;

  // 🤖 AI Logic (important for selection)
  let ai = "";
  if (age < 2) {
    ai = "🐶 Puppy: Needs vaccination tracking";
  } else if (age < 8) {
    ai = "💪 Healthy: Maintain routine care";
  } else {
    ai = "⚠️ Senior: Frequent vet monitoring needed";
  }

  document.getElementById("ai").innerHTML = `<h4>AI Insight:</h4> ${ai}`;
}