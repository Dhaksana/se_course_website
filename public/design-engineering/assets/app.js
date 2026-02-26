document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  if (themeToggle) {
    themeToggle.textContent = currentTheme === 'dark' ? '☀️ Light' : '🌙 Dark';
    themeToggle.addEventListener('click', () => {
      const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      themeToggle.textContent = newTheme === 'dark' ? '☀️ Light' : '🌙 Dark';
    });
  }

  // Presenter Mode Toggle
  const presenterToggle = document.getElementById('presenter-toggle');
  const isPresenter = localStorage.getItem('presenter') === 'true';
  if (isPresenter) document.body.classList.add('presenter-mode');
  
  if (presenterToggle) {
    presenterToggle.addEventListener('click', () => {
      document.body.classList.toggle('presenter-mode');
      localStorage.setItem('presenter', document.body.classList.contains('presenter-mode'));
    });
  }

  // Instructor Notes Toggle
  const notesToggle = document.getElementById('notes-toggle');
  if (notesToggle) {
    notesToggle.addEventListener('click', () => {
      document.body.classList.toggle('show-notes');
    });
  }

  // Scroll Reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // TOC Highlighting
  const tocLinks = document.querySelectorAll('.sidebar a');
  if (tocLinks.length > 0) {
    const sections = Array.from(document.querySelectorAll('h2[id], h3[id]'));
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          tocLinks.forEach(link => link.classList.remove('active'));
          const id = entry.target.getAttribute('id');
          const activeLink = document.querySelector(`.sidebar a[href="#${id}"]`);
          if (activeLink) activeLink.classList.add('active');
        }
      });
    }, { rootMargin: '-10% 0px -80% 0px' });
    
    sections.forEach(sec => sectionObserver.observe(sec));
  }

  // Progress Checking
  const path = window.location.pathname;
  let pageId = 'index';
  if(path.includes('lecture1')) pageId = 'lecture1';
  if(path.includes('lecture2')) pageId = 'lecture2';
  if(path.includes('lecture3')) pageId = 'lecture3';
  
  const checkboxes = document.querySelectorAll('.progress-check');
  const progressBar = document.getElementById('progress-bar');
  
  const updateProgress = () => {
    if(checkboxes.length === 0) return;
    const checked = document.querySelectorAll('.progress-check:checked').length;
    const pct = (checked / checkboxes.length) * 100;
    if(progressBar) progressBar.style.width = `${pct}%`;
    
    const state = Array.from(checkboxes).map(cb => cb.checked);
    localStorage.setItem(`progress-${pageId}`, JSON.stringify(state));
  };
  
  const savedProgress = JSON.parse(localStorage.getItem(`progress-${pageId}`) || '[]');
  checkboxes.forEach((cb, i) => {
    if(savedProgress[i]) cb.checked = true;
    cb.addEventListener('change', updateProgress);
  });
  updateProgress();

  // Copy Exam Ready Answer
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const textBlock = e.target.nextElementSibling;
      if(textBlock) {
        await navigator.clipboard.writeText(textBlock.innerText);
        const originalText = e.target.innerText;
        e.target.innerText = 'Copied!';
        setTimeout(() => e.target.innerText = originalText, 2000);
      }
    });
  });
  
  // Flashcards
  document.querySelectorAll('.flashcard').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('flipped'));
    card.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('flipped');
      }
    });
  });
});
