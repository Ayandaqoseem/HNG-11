document.addEventListener("DOMContentLoaded", () => {
  function updateTimeAndDay() {
    const date = new Date();
    const utcTime = date.toUTCString().split(" ")[4];
    const day = date.toLocaleString("en-US", { weekday: "long" });


    document.getElementById("utc-time").textContent = utcTime;
    document.getElementById("current-day").textContent = day;
  }

  setInterval(updateTimeAndDay, 1000);

  updateTimeAndDay();



//   Animation
const animateOnViewElements = document.querySelectorAll('li');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, {
    threshold: 0.1
});

animateOnViewElements.forEach(element => {
    observer.observe(element);
});

});
