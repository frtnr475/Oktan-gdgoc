const btnTambah = document.getElementById('btnTambah');
const btnKurang = document.getElementById('btnKurang');
const btnReset = document.getElementById('btnReset');
const label = document.getElementById('label');
const angka1 = document.getElementById('angka1');
const angka2 = document.getElementById('angka2');
const angka3 = document.getElementById('angka3');


let count = 0;

const updateLabel = () => {
  label.textContent = count;
  speakNumber(count); 
};

const tambahBtn = () => {
  count++;
  updateLabel();
  btnTambah.classList.toggle('text-white');
};

const kurangBtn = () => {
    count--;
    if(count < 0){
        alert('angka tidak boleh minus');
        count = 0;
        updateLabel();
    }
    updateLabel();
   btnKurang.classList.toggle('text-white');
};

const resetBtn = () => {
  count = 0;
  updateLabel();
  btnReset.classList.toggle('text-white');
};


const numberOne = () => {
    count = 1;
    updateLabel();
};

const numberTwo = () => {
    count = 2;
    updateLabel();
};
const numberThree = () => {
    count = 3;
    updateLabel();
};


function speakNumber(number) {
  const msg = new SpeechSynthesisUtterance(number);
  msg.lang = "in-ID";
  msg.rate = 1.0; 
  window.speechSynthesis.speak(msg);
}


