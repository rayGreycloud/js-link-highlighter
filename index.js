// Grab all links
const triggers = document.querySelectorAll('a');
// Create highlight element
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
  // Get coords of link
  const linkCoords = this.getBoundingClientRect();
  // Adjust coords for scroll
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  };

  // Set highlight width/height
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  // Set position with transform
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}
// Listen for mouse over
triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
