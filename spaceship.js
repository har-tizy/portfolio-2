const spaceship = document.getElementById('spaceship');

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let currentX = mouseX;
let currentY = mouseY;
let currentAngle = 0;

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  currentX += (mouseX - currentX) * 0.05;
  currentY += (mouseY - currentY) * 0.05;

  const offsetX = spaceship.offsetWidth / 2;
  const offsetY = spaceship.offsetHeight / 2;

  // Calculate target angle
  const deltaX = mouseX - currentX;
  const deltaY = mouseY - currentY;
  const targetAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

  // Smooth angle follow
  const angleDiff = targetAngle - currentAngle;
  currentAngle += angleDiff * 0.1; // smaller = slower rotation

  // Update style
  spaceship.style.left = (currentX - offsetX) + 'px';
  spaceship.style.top = (currentY - offsetY) + 'px';
  spaceship.style.transform = `rotate(${currentAngle}deg)`;

  requestAnimationFrame(animate);
}

animate();
