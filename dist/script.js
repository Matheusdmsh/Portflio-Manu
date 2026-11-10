const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.main-nav');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

function updateHeader() {
  header?.classList.toggle('scrolled', window.scrollY > 24);
}

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menu?.classList.toggle('open', !isOpen);
});

menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    menu?.classList.remove('open');
  });
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.transitionDelay = `${Math.min((index % 4) * 80, 240)}ms`;
  revealObserver.observe(element);
});

const playSection = document.querySelector('[data-play-section]');
const playStage = document.querySelector('[data-play-stage]');
const playToys = [...document.querySelectorAll('[data-toy]')];
const playWords = [...document.querySelectorAll('[data-play-word]')];
const playProgress = document.querySelector('[data-play-progress]');
let playPointerX = 0;
let playPointerY = 0;
let playFrame = null;
let playViewportWidth = window.innerWidth;

const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);
const mix = (from, to, progress) => from + (to - from) * progress;
const ease = (progress) => 1 - Math.pow(1 - progress, 3);

function updatePlayScene() {
  playFrame = null;
  if (!playSection || !playStage) return;

  const bounds = playSection.getBoundingClientRect();
  const scrollDistance = Math.max(bounds.height - window.innerHeight, 1);
  const progress = reduceMotion ? 1 : clamp(-bounds.top / scrollDistance);
  const arranged = ease(progress);
  const stageWidth = playStage.clientWidth;
  const stageHeight = playStage.clientHeight;

  playToys.forEach((toy) => {
    const fromX = Number(toy.dataset.fromX);
    const fromY = Number(toy.dataset.fromY);
    const toX = Number(toy.dataset.toX);
    const toY = Number(toy.dataset.toY);
    const fromRotation = Number(toy.dataset.fromR);
    const toRotation = Number(toy.dataset.toR);
    const depth = Number(toy.dataset.depth || 1);
    const toyProgress = toy.hasAttribute('data-traveler') ? progress : arranged;
    const pointerX = playPointerX * depth * 13;
    const pointerY = playPointerY * depth * 10;
    const x = mix(fromX, toX, toyProgress) * stageWidth + pointerX;
    const y = mix(fromY, toY, toyProgress) * stageHeight + pointerY;
    const rotation = mix(fromRotation, toRotation, toyProgress);
    const scale = mix(.72, 1, arranged);

    toy.style.transform = `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), ${depth * 22}px) rotate(${rotation}deg) scale(${scale})`;
  });

  playWords.forEach((word, index) => {
    word.classList.toggle('is-active', progress >= .2 + index * .25);
  });

  if (playProgress) playProgress.style.height = `${progress * 100}%`;
}

function requestPlayUpdate() {
  if (playFrame) return;
  playFrame = requestAnimationFrame(updatePlayScene);
}

if (finePointer && !reduceMotion) {
  playStage?.addEventListener('pointermove', (event) => {
    const bounds = playStage.getBoundingClientRect();
    playPointerX = (event.clientX - bounds.left) / bounds.width - .5;
    playPointerY = (event.clientY - bounds.top) / bounds.height - .5;
    requestPlayUpdate();
  });

  playStage?.addEventListener('pointerleave', () => {
    playPointerX = 0;
    playPointerY = 0;
    requestPlayUpdate();
  });
}

window.addEventListener('scroll', requestPlayUpdate, { passive: true });
window.addEventListener('resize', () => {
  const nextWidth = window.innerWidth;
  if (Math.abs(nextWidth - playViewportWidth) < 4) return;
  playViewportWidth = nextWidth;
  requestPlayUpdate();
});
window.addEventListener('orientationchange', requestPlayUpdate);
requestPlayUpdate();

if (!reduceMotion && finePointer) {
  document.querySelectorAll('[data-tilt]').forEach((card) => {
    const strength = Number(card.dataset.tiltStrength || 4);

    card.addEventListener('pointermove', (event) => {
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${-y * strength}deg) rotateY(${x * strength}deg)`;
    });

    card.addEventListener('pointerleave', () => {
      card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
    });
  });
}

document.querySelector('[data-year]').textContent = new Date().getFullYear();
