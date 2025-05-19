// Simple script to add any needed interactive functionality
document.addEventListener('DOMContentLoaded', () => {
  console.log('Page loaded successfully');

  // Add smooth scrolling for anchor links if needed
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(this: HTMLAnchorElement, e: Event) {
      e.preventDefault();
      const href = this.getAttribute('href') || '';
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
