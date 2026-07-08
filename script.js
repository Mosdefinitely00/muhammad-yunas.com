// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Narration lines per section
const narrationMap = {
  hero: "Starting strong. Let’s set the tone.",
  about: "Clarity drives momentum.",
  story: "Every system tells a story — this one’s mine.",
  work: "These aren’t projects. They’re inflection points.",
  "case-study": "Transformation is never accidental.",
  "sense-analyze-act": "Precision is the operating system.",
  portfolio: "Every frame is a signal.",
  contact: "Good work. Let’s continue building forward."
};

const narrationEl = document.getElementById('personaNarration');
const personaWrapper = document.querySelector('.persona-wrapper');

let narrationTimeout = null;

// IntersectionObserver for sections
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const id = entry.target.id;
      const line = narrationMap[id];
      if (!line) return;

      // Set narration text
      narrationEl.textContent = line;

      // Show bubble
      narrationEl.classList.add('visible');

      // Persona glow on
      if (personaWrapper) {
        personaWrapper.classList.add('glow');
      }

      // Clear previous timeout
      if (narrationTimeout) {
        clearTimeout(narrationTimeout);
      }

      // Hide after a few seconds
      narrationTimeout = setTimeout(() => {
        narrationEl.classList.remove('visible');
        if (personaWrapper) {
          personaWrapper.classList.remove('glow');
        }
      }, 4000);
    });
  },
  {
    threshold: 0.4
  }
);

// Observe key sections
[
  'hero',
  'about',
  'story',
  'work',
  'case-study',
  'sense-analyze-act',
  'portfolio',
  'contact'
].forEach((id) => {
  const el = document.getElementById(id);
  if (el) observer.observe(el);
});
