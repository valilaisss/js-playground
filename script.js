document.addEventListener("DOMContentLoaded", () => {
  // вот это лучше вам не трогать, внутри тултипов оставил подсказки к выполнению задач
  enableTooltips();
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


var  button = document.querySelector("[data-js='t1-btn']");
var  hex = document.querySelector("[data-js='t1-hex']");

function colorClick() {
  let r = getRandomNumber(0, 255);
  let g = getRandomNumber(0, 255);
  let b = getRandomNumber(0, 255);
  const color = `rgb(${r}, ${g}, ${b})`;
  button.style.backgroundColor = color;
  hex.textContent = `${rgbToHex(r, g, b)}`;
}
const inputElement = document.querySelector("[data-js='t2-input']");
var  countText = document.querySelector("[data-js='t2-count']");
button.addEventListener("click", colorClick);
let c = 0;
function counter(){
  c = inputElement.value.length;
  countText.textContent = `${c}`;
}

inputElement.addEventListener("input", () => {
  counter()
})

var list = document.querySelector("[data-js='t3-list']");
var  button2 = document.querySelector("[data-js='t3-add']");
var inputList = document.querySelector("[data-js='t3-input']");
function listAppend() {
  var newLi = document.createElement('li');
  newLi.textContent = inputList.value;
  if (!(inputList.value == "")){
    list.appendChild(newLi);
    inputList.value = ""; 
    }
}
  

button2.addEventListener("click", () => {
  listAppend();
});

var  minusKnopka = document.querySelector("[data-js='t4-minus']");
var plusKnopka = document.querySelector("[data-js='t4-plus']");
var resetKnopka = document.querySelector("[data-js='t4-reset']");
var textCount = document.querySelector("[data-js='t4-out']");
var c2 = 0;
function plus() {
  c2++;
  textCount.textContent = `${c2}`;
}
function minus() {
  c2--;
  textCount.textContent = `${c2}`;
}
function reset() {
  c2=0;
  textCount.textContent = `${c2}`;
}

plusKnopka.addEventListener("click", plus);
minusKnopka.addEventListener("click", minus);
resetKnopka.addEventListener("click", reset);

var  modalKnopka = document.querySelector("[data-js='t5-open']");
var modal = document.querySelector("[data-js='t5-modal']");
var  closeKnopka = document.querySelector("[data-js='t5-close']");
var modalCloseBG = document.querySelector("[data-js='t5-backdrop']");

function openModal() {
  modal.removeAttribute('hidden');
}

function closeModal() {
  if (!modal.hasAttribute('hidden')) {
    modal.toggleAttribute('hidden');
  }
}

function handleEscapeKey(event) {
  if (event.key == 'Escape') {
    closeModal();
  } 
}
modalKnopka.addEventListener("click", openModal);
closeKnopka.addEventListener("click", closeModal);
modalCloseBG.addEventListener("click", closeModal);
document.addEventListener('keydown', (e) => {
  handleEscapeKey(e)
})


var  knopkaA = document.querySelector("[data-tab='a']");
var knopkaB = document.querySelector("[data-tab='b']");
var knopkaC = document.querySelector("[data-tab='c']");

var paneA = document.querySelector("[data-pane='a']");
var paneB = document.querySelector("[data-pane='b']");
var paneC = document.querySelector("[data-pane='c']");

function resetTabs() {
  knopkaA.classList.remove('is-active');
  knopkaB.classList.remove('is-active');
  knopkaC.classList.remove('is-active');
  
  paneA.classList.remove('is-active');
  paneB.classList.remove('is-active');
  paneC.classList.remove('is-active');
}

function tabA() {
  resetTabs();
  knopkaA.classList.add('is-active');
  paneA.classList.add('is-active');
}

function tabB() {
  resetTabs();
  knopkaB.classList.add('is-active');
  paneB.classList.add('is-active');
}

function tabC() {
  resetTabs();
  knopkaC.classList.add('is-active');
  paneC.classList.add('is-active');
}

knopkaA.addEventListener("click", tabA);
knopkaB.addEventListener("click", tabB);
knopkaC.addEventListener("click", tabC);

var t7Input = document.querySelector("[data-js='t7-input']");
var t7Run = document.querySelector("[data-js='t7-run']");
var t7Out = document.querySelector("[data-js='t7-out']");

function reverseString() {
  let inputText = t7Input.value;
  t7Out.textContent = inputText.split('').reverse().join('');
}

t7Run.addEventListener("click", reverseString);

var t8A = document.querySelector("[data-js='t8-a']");
var t8B = document.querySelector("[data-js='t8-b']");
var t8Out= document.querySelector("[data-js='t8-out']");
var knopkaAdd = document.querySelector("[data-js='t8-add']");
var knopkaMul = document.querySelector("[data-js='t8-mul']");
function Add(){
  let res = parseFloat(t8A.value) +parseFloat( t8B.value);
  t8Out.value = res;
}

function Mul(){
  let res = parseFloat(t8A.value) * parseFloat( t8B.value);
  t8Out.value = res;
}

knopkaAdd.addEventListener("click", Add);
knopkaMul.addEventListener("click", Mul );

var t9Toggle = document.querySelector("[data-js='t9-toggle']");
var t9Text = document.querySelector("[data-js='t9-text']");

function toggleText() {
  if (t9Text.hasAttribute('hidden')) {
    t9Text.removeAttribute('hidden');
    t9Toggle.textContent = 'Скрыть';
  } else {
    t9Text.setAttribute('hidden', '');
    t9Toggle.textContent = 'Показать';
  }
}

t9Toggle.addEventListener("click", toggleText);

var t10Range = document.querySelector("[data-js='t10-range']");
var t10Out = document.querySelector("[data-js='t10-out']");
var t10Box = document.querySelector("[data-js='t10-box']");

function changeBoxSize() {
  let size = t10Range.value;
  t10Box.style.width = size + 'px';
  t10Box.style.height = size + 'px';
  t10Out.textContent = size + 'px';
}

t10Range.addEventListener("input", changeBoxSize);


var t11Seconds = document.querySelector("[data-js='t11-seconds']");
var t11Start = document.querySelector("[data-js='t11-start']");
var t11Stop = document.querySelector("[data-js='t11-stop']");
var t11Out = document.querySelector("[data-js='t11-out']");
let timerId = null;

function startCountdown() {
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
  }
  
  let seconds = parseInt(t11Seconds.value);
  if (isNaN(seconds) || seconds <= 0) {
    t11Out.textContent = '0';
    return;
  }
  
  t11Out.textContent = seconds;

  timerId = setInterval(() => {
    seconds--;
    t11Out.textContent = seconds;
    if (seconds <= 0) {
      clearInterval(timerId);
      t11Out.textContent = '0';
      timerId = null;
    }
  }, 1000); 
}

function stopCountdown() {
  clearInterval(timerId);
  timerId = null;
}

t11Start.addEventListener("click", startCountdown);
t11Stop.addEventListener("click", stopCountdown);

var t12Plus = document.querySelector("[data-js='t12-plus']");
var t12Label = document.querySelector("[data-js='t12-label']");
var t12Bar = document.querySelector("[data-js='t12-bar']");

let progress = 0; 

function Progress() {
  progress = Math.min(progress + 10, 100);
  t12Bar.style.width = progress + '%';
  t12Label.textContent = progress + '%';
}

t12Plus.addEventListener("click", Progress);



var t13Input = document.querySelector("[data-js='t13-input']");
var t13Out = document.querySelector("[data-js='t13-out']");

document.addEventListener('keydown', function(event) {
  if (event.code === 'KeyK' && event.ctrlKey) {
    event.preventDefault();
    t13Input.value = '';
    t13Out.textContent = 'поле очищено';
  }
  
  else if (event.key === 'Escape') {
    t13Input.blur();
    t13Out.textContent = 'фокус снят';
  }
});



var t14Next = document.querySelector("[data-js='t14-next']");
var t14Out = document.querySelector("[data-js='t14-out']");

var phrases = [
  "У меня джип в Москве. Ну я тебя сейчас сделаю здесь!",
  "Смелое заявление. Проверять я его, конечно, не буду.",
  "Опа, у меня тоже есть птички. У меня тоже есть птички. И в отличие от твоих, у них есть микрофоны-петлички.",
  "Pen-pineapple-apple-pen.",
  "Это фиаско братан.",
  "И если я ношу кандибобер на голове, это не значит, что я женщина или балерина."
];

function getRandomQuote() {
  var random = Math.floor(Math.random() * phrases.length);
  t14Out.textContent = phrases[random];
}

t14Next.addEventListener("click", getRandomQuote);