function Marquee(selector, speed) {
  const parent = document.querySelector(selector);
  const content = parent.innerHTML;

  parent.insertAdjacentHTML("beforeend", content); // 2x duplicação
  parent.insertAdjacentHTML("beforeend", content);

  let i = 0;
  let isPaused = false;
  const resetPoint = parent.scrollWidth / 3; // porque o conteúdo foi triplicado

  parent.addEventListener("mouseenter", () => {
    isPaused = true;
  });

  parent.addEventListener("mouseleave", () => {
    isPaused = false;
  });

  function animate() {
    if (!isPaused) {
      i -= speed;

      // Quando o conteúdo andar até 1 bloco completo, reseta
      if (Math.abs(i) >= resetPoint) {
        i = 0;
      }

      parent.style.transform = `translateX(${i}px)`;
    }
    requestAnimationFrame(animate);
  }

  parent.style.display = 'flex';
  parent.style.width = 'fit-content';
  parent.style.willChange = 'transform';
  parent.style.transition = 'transform 0s linear';

  animate();
}




Marquee(".carousel", 1.5);
