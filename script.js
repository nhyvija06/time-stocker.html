// Sentiment Chart Setup
const ctx = document.getElementById('sentimentChart').getContext('2d');
new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Positive', 'Negative', 'Neutral'],
    datasets: [{
      label: 'Sentiment Distribution',
      data: [5, 1, 2],
      backgroundColor: ['#4caf50', '#f44336', '#ffeb3b'],
      borderWidth: 1,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
      title: { display: true, text: 'Market Sentiment Overview' }
    }
  }
});

// Live Time
function updateTime() {
  const now = new Date();
  document.getElementById("currentTime").innerText = now.toLocaleString();
}
setInterval(updateTime, 1000);
updateTime();

// Search Filter
document.getElementById("search").addEventListener("input", e => {
  const value = e.target.value.toUpperCase();
  document.querySelectorAll(".stock-card").forEach(card => {
    card.style.display = card.id.includes(value) ? "block" : "none";
  });
});
