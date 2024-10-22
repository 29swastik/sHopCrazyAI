console.log("E-commerce Helper Extension loaded");

// Dictionary of terms and their definitions
const hardcodedTerms = {
  "RAM": "Random Access Memory, a type of computer memory that can be accessed randomly.",
  "SSD": "Solid State Drive, a storage device that uses flash memory.",
  "4K": "A resolution standard used by modern TVs and monitors, roughly 4000 pixels wide."
};

// Debounce function to limit the rate at which a function can fire
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Function to highlight terms throughout the entire page
function highlightTerms() {
  console.log("Highlighting terms...");
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let node;
  let highlightCount = 0;
  const nodesToReplace = [];

  // Walk through all text nodes in the document
  while (node = walker.nextNode()) {
    const parent = node.parentNode;
    if (parent && !parent.classList.contains('highlighted-term') && parent.tagName !== 'SCRIPT' && parent.tagName !== 'STYLE') {
      let content = node.nodeValue;
      let highlightedContent = content;
      let hasHighlights = false;

      // Check each term against the current text node
      Object.keys(hardcodedTerms).forEach(term => {
        const regex = new RegExp(`\\b(${term})\\b`, 'gi');
        if (regex.test(content)) {
          hasHighlights = true;
          highlightedContent = highlightedContent.replace(regex, `<span class="highlighted-term" data-term="$1">$1</span>`);
          highlightCount++;
        }
      });

      // If highlights were found, add the node to the replacement list
      if (hasHighlights) {
        nodesToReplace.push({ node, highlightedContent });
      }
    }
  }

  // Replace all highlighted nodes in a single batch
  nodesToReplace.forEach(({ node, highlightedContent }) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = highlightedContent;
    const fragment = document.createDocumentFragment();
    while (tempDiv.firstChild) {
      fragment.appendChild(tempDiv.firstChild);
    }
    node.parentNode.replaceChild(fragment, node);
  });

  console.log(`Highlighted ${highlightCount} terms.`);
}

// Create a debounced version of the highlightTerms function
const debouncedHighlightTerms = debounce(highlightTerms, 300);

// Run the highlighting function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', debouncedHighlightTerms);

// Event listener for tooltips
document.body.addEventListener('mouseover', (event) => {
  if (event.target.classList.contains('highlighted-term')) {
    const term = event.target.dataset.term;
    const tooltipText = hardcodedTerms[term];

    // Create and display tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerHTML = `<strong>${term}:</strong> ${tooltipText}`;
    document.body.appendChild(tooltip);

    // Position the tooltip near the cursor
    tooltip.style.left = `${event.pageX + 10}px`;
    tooltip.style.top = `${event.pageY + 10}px`;

    // Remove the tooltip on mouse out
    event.target.addEventListener('mouseout', () => {
      tooltip.remove();
    }, { once: true });
  }
});

// Fallback: Run highlighting after a short delay in case DOMContentLoaded has already fired
setTimeout(debouncedHighlightTerms, 1000);

// Observe DOM changes and highlight new content
const observer = new MutationObserver(debounce((mutations) => {
  let shouldHighlight = false;
  for (let mutation of mutations) {
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      shouldHighlight = true;
      break;
    }
  }
  if (shouldHighlight) {
    debouncedHighlightTerms();
  }
}, 300));

// Start observing the document with the configured parameters
observer.observe(document.body, { childList: true, subtree: true });