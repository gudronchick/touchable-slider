const wrapper = document.querySelector('.wrapper');
let isPressed = false;
let initialTransform = 0;
let passedDistance = 0;
const pressWrap = (e) => {
  isPressed = true;
  initialTransform = e.pageX;
  passedDistance = +getComputedStyle(wrapper).transform.split(', ')[4];
};

const releaseWrap = (e) => {
  isPressed = false;
  console.log(1);
};

const moveWrap = (e) => {
  if (isPressed) {
    let distance = passedDistance ? e.pageX - initialTransform + passedDistance : e.pageX - initialTransform;
    wrapper.style.transform = `translateX(${distance}px)`
  }
};

const leaveWrap = (e) => {
  isPressed = false;
};

if (window.PointerEvent) {
  wrapper.addEventListener('pointerdown', pressWrap);
  wrapper.addEventListener('pointerup', releaseWrap);
  wrapper.addEventListener('pointermove', moveWrap);
  wrapper.addEventListener('pointerleave', leaveWrap);
} else {
  wrapper.addEventListener('mousedown', pressWrap);
  wrapper.addEventListener('mouseup', releaseWrap);
  wrapper.addEventListener('mousemove', moveWrap);
  wrapper.addEventListener('mouseleave', leaveWrap);
}