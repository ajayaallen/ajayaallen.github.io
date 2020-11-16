const mode = document.querySelector('.mode');
const body = document.querySelector('body');
const nav_bar = document.querySelector('.nav_bar');
const heading_6 = document.querySelector('.heading_6');
const nav__link = document.querySelectorAll('.nav__link');
const image = document.querySelector('.image');
const heading_1 = document.querySelector('.heading_1');
const heading_3 = document.querySelector('.heading_3');
const heading_4 = document.querySelectorAll('.heading_4');
const heading_5 = document.querySelector('.heading_5');
const about = document.querySelector('.about');
const about_p = document.querySelectorAll('.about_p');
const footer = document.querySelector('.footer');
const footer__p = document.querySelectorAll('.footer__p');
const projects = document.querySelector('.projects');
const hr = document.querySelector('.hr');
const project__heading = document.querySelectorAll('.project__heading');
const project__description = document.querySelectorAll('.project__description');
const project__description__p = document.querySelectorAll(
  '.project__description--p'
);

const modeChange = () => {
  mode.classList.toggle('dark');
  body.classList.toggle('body__dark');
  nav_bar.classList.toggle('nav_bar__dark');
  heading_6.classList.toggle('heading_6__dark');
  nav__link.forEach((el) => el.classList.toggle('nav__link__dark'));
  image.classList.toggle('image__dark');
  heading_1.classList.toggle('heading_1__dark');
  heading_3.classList.toggle('heading_3__dark');
  heading_4.forEach((el) => el.classList.toggle('heading_4__dark'));
  heading_5.classList.toggle('heading_5__dark');
  about.classList.toggle('about__dark');
  about_p.forEach((el) => el.classList.toggle('about_p__dark'));
  footer.classList.toggle('footer__dark');
  footer__p.forEach((el) => el.classList.toggle('about_p__dark'));
  projects.classList.toggle('projects__dark');
  hr.classList.toggle('hr__dark');
  project__heading.forEach((el) =>
    el.classList.toggle('project__heading__dark')
  );
  project__description.forEach((el) =>
    el.classList.toggle('project__description__dark')
  );
  project__description__p.forEach((el) =>
    el.classList.toggle('project__description--p__dark')
  );
};

window.addEventListener('DOMContentLoaded', modeChange);
mode.addEventListener('click', modeChange);
