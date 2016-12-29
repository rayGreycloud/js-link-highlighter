// Grab all links
const triggers = document.querySelectorAll('a');
// Create highlight element
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
  // Get coords of link
  const linkCoords = this.getBoundingClientRect();
  // Set highlight width/height
  highlight.style.width = `${linkCoords.width}px`;
  highlight.style.height = `${linkCoords.height}px`;
  // Set position with transform
  highlight.style.transform = `translate(${linkCoords.left}px, ${linkCoords.top}px)`;
}
// Listen for mouse over
triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
