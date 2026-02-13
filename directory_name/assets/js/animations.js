document.documentElement.classList.add("js-ready");

const revealElements = document.querySelectorAll(".reveal, .reveal-fade, .reveal-scale");
const animateElements = document.querySelectorAll("[data-animate]");

const applyTiming = (element) => {
  const delay = element.dataset.delay;
  const duration = element.dataset.duration;
  if (delay) {
    element.style.setProperty("--delay", `${delay}ms`);
  }
  if (duration) {
    element.style.setProperty("--duration", `${duration}ms`);
  }
};

const reveal = (element) => {
  applyTiming(element);
  element.classList.add("is-visible");
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          reveal(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  [...revealElements, ...animateElements].forEach((element) => {
    observer.observe(element);
  });
} else {
  [...revealElements, ...animateElements].forEach((element) => reveal(element));
}
