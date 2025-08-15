function Marquee(selector, speed) {
  const parent = document.querySelector(selector);
  const content = parent.innerHTML;

  parent.style.display = 'flex';
  parent.style.width = 'fit-content';
  parent.style.willChange = 'transform';
  parent.style.transition = 'transform 0s linear';

  parent.insertAdjacentHTML("beforeend", content);
  parent.insertAdjacentHTML("beforeend", content);

  let i = 0;
  let isPaused = false;
  const resetPoint = parent.scrollWidth / 3;

  parent.addEventListener("mouseenter", () => {
    isPaused = true;
  });

  parent.addEventListener("mouseleave", () => {
    isPaused = false;
  });

  function animate() {
    if (!isPaused) {
      i -= speed;

      if (Math.abs(i) >= resetPoint) {
        i = 0;
      }

      parent.style.transform = `translateX(${i}px)`;
    }
    requestAnimationFrame(animate);
  }



  animate();
}

Marquee(".carousel", 1.5);

function MarqueeTwo(selector, speed) {
  const parent = document.querySelector(selector);
  const content = parent.innerHTML;

  parent.insertAdjacentHTML("beforeend", content);
  parent.insertAdjacentHTML("beforeend", content);
  parent.insertAdjacentHTML("beforeend", content);

  parent.style.display = 'flex';
  parent.style.width = 'fit-content';
  parent.style.willChange = 'transform';
  parent.style.transition = 'transform 0s linear';

  let i = 0;
  const resetPoint = parent.scrollWidth / 4;

  function animate() {
    i -= speed;
    if (Math.abs(i) >= resetPoint) {
      i = 0;
    }
    parent.style.transform = `translateX(${i}px)`;
    requestAnimationFrame(animate);
  }

  animate();

  return {
    moveBy(amount) {
      i += amount;
    }
  };
}

const marqueeOrange = MarqueeTwo(".carousel-orange", 1.0);

const carouselNext = document.getElementById("carousel-next");
const carouselPrev = document.getElementById("carousel-prev");

carouselNext.addEventListener("click", () => {
  marqueeOrange.moveBy(-300);
});

carouselPrev.addEventListener("click", () => {
  marqueeOrange.moveBy(300);
});
