function createLeaf() {
  // create a new div element with the class name leaf and appends it to the document body
  const leaf = document.createElement('div');
  leaf.classList.add('leaf');
  leaf.innerText = '🍁';
  document.body.append(leaf);

  // Set style properties
  leaf.style.left = Math.random() * 100 + 'vw';
  leaf.style.transform = `rotate(${Math.random() * 360}deg)`;
  
  // Random duration between 3 and 7 seconds
  leaf.style.animationDuration = Math.random() * 4 + 3 + 's';
  
  // Random size of leaf
  leaf.style.fontSize = Math.random() * 1 + 2 + 'rem';

  // Make the leaf fall down the screen
  leaf.animate([
    { top: 0, transform: `rotate(${Math.random() * 180 - 90}deg)`},
    { top: `${window.innerHeight}px`, transform: `rotate(${Math.random() * 180 - 45}deg)`}
  ], {
    easing: 'ease-in-out'
  })
}

// Repeatedly call the createLeaf funtion every 300ms
setInterval(createLeaf, 300);