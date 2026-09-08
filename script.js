document.addEventListener('DOMContentLoaded', () => {

  /* ---------- sticky nav background ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 40);
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('is-open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('is-open'));
  });

  /* ---------- rim selector ---------- */
  const car = document.getElementById('carSvg');
  const swatches = document.querySelectorAll('.swatch');
  const fittedName = document.getElementById('fittedName');

  swatches.forEach(btn => {
    btn.addEventListener('click', () => {
      const rim = btn.dataset.rim;
      car.setAttribute('data-rim', rim);
      swatches.forEach(s => s.classList.remove('is-active'));
      btn.classList.add('is-active');
      fittedName.textContent = btn.dataset.name;
    });
  });

  /* ---------- engine reveal toggle ---------- */
  const btnExterior = document.getElementById('btnExterior');
  const btnEngine = document.getElementById('btnEngine');
  const fuelToggle = document.getElementById('fuelToggle');
  const engineFuelText = document.getElementById('engineFuel');
  const enginePowerText = document.getElementById('enginePower');

  const fuelData = {
    petrol: { label: '2.0L TURBO PETROL', power: '174 PS · 380 Nm' },
    diesel: { label: '2.2L TURBO DIESEL', power: '172 PS · 400 Nm' }
  };

  function setEngineMode(on) {
    car.classList.toggle('is-engine-mode', on);
    btnEngine.classList.toggle('is-active', on);
    btnExterior.classList.toggle('is-active', !on);
    btnEngine.textContent = on ? 'Viewing Engine' : 'Reveal Engine';
    fuelToggle.hidden = !on;
  }

  btnEngine.addEventListener('click', () => setEngineMode(true));
  btnExterior.addEventListener('click', () => setEngineMode(false));

  fuelToggle.querySelectorAll('.fuel-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const fuel = btn.dataset.fuel;
      fuelToggle.querySelectorAll('.fuel-btn').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      engineFuelText.textContent = fuelData[fuel].label;
      enginePowerText.textContent = fuelData[fuel].power;
    });
  });

  /* ---------- colour picker ---------- */
  const colourImg = document.getElementById('colourImg');
  const colourName = document.getElementById('colourName');
  const cswatches = document.querySelectorAll('.cswatch');

  cswatches.forEach(btn => {
    btn.addEventListener('click', () => {
      colourImg.src = btn.dataset.img;
      colourImg.alt = `Mahindra Thar Roxx in ${btn.dataset.name}`;
      colourName.textContent = btn.dataset.name;
      cswatches.forEach(s => s.classList.remove('is-active'));
      btn.classList.add('is-active');
    });
  });

  /* ---------- engine section tabs ---------- */
  const etabs = document.querySelectorAll('.etab');
  const enginePanels = document.querySelectorAll('.engine-card');

  etabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.engine;
      etabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      enginePanels.forEach(panel => {
        panel.hidden = panel.dataset.panel !== target;
      });
    });
  });

  /* ---------- scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

});
/* ---------- rim selector ---------- */

const carPhoto = document.getElementById('carPhoto');
const swatches = document.querySelectorAll('.swatch');
const fittedName = document.getElementById('fittedName');

const rimImages = {
    sport: 'images/thar-sport.webp',
    offroad: 'images/thar-trail.webp',
    diamond: 'images/thar-diamond.webp',
    black: 'images/thar-blackout.webp'
};

swatches.forEach(btn => {
    btn.addEventListener('click', () => {

        const rim = btn.dataset.rim;

        // Change the full Thar image
        carPhoto.src = rimImages[rim];

        // Highlight selected button
        swatches.forEach(s => s.classList.remove('is-active'));
        btn.classList.add('is-active');

        // Change the name
        fittedName.textContent = btn.dataset.name;
    });
});