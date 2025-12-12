// Human-written interactive JS for the portfolio

// Mobile navigation toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('show');
});

// Reveal email button
const revealEmailBtn = document.getElementById('revealEmail');
revealEmailBtn.addEventListener('click', () => {
  // insert a lightweight anti-scrape trick: reveal in two parts
  const partA = 'hello';
  const partB = '@mail.com';
  const full = partA + '.voice' + partB; // replace with your real email
  revealEmailBtn.textContent = full;
  revealEmailBtn.disabled = true;
});

// Simple contact form validation (front-end only)
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email) {
    formStatus.textContent = 'Please add your name and email.';
    return;
  }
  if (email.indexOf('@') === -1) {
    formStatus.textContent = 'Please provide a valid email address.';
    return;
  }

  // mimic sending (client-only). You should connect this to a server or email service.
  formStatus.textContent = 'Sending message...';
  setTimeout(() => {
    formStatus.textContent = 'Thanks — your message was sent (demo).';
    contactForm.reset();
  }, 900);
});

// Keep only one audio playing at a time
const audios = Array.from(document.querySelectorAll('audio'));
audios.forEach(a => {
  a.addEventListener('play', () => {
    audios.forEach(other => { if (other !== a) other.pause(); });
  });
});

// Download resume link behaviour (demo)
const downloadResume = document.getElementById('downloadResume');
downloadResume.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Resume download is a demo. Replace this with a link to your resume file.');
});
