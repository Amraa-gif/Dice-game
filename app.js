// Аль тоглогч шоог хаяхыг шийддэг хувьсагч. 1-р тоглогч "0", 2-р тоглогч "1".

activePlayer = 1;


// Тоглогчдын нийт цуглуулсан оноог хадгалах хувьсагч.

var scores = [0, 0];


// Тоглогчийн ээлжиндээ цуглуулад байгаа оноо.

var roundScore = 0;


// Шооны буусан тоог хадгалах хувьсагч. 1-6 гэсэн тоо энэ хувьсагчид санамсаргүй байдлаар өгнө.

var diceNumber = Math.floor(Math.random() * 6) + 1;

// Программ эхлэхэд. 
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;

document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;


// Шооны зураг хэсэг.

var shooniiZurag = document.querySelector(".dice");
shooniiZurag.style.display = "none"; 

// Roll-Dice гэсэн товчийг ажилладаг болгоё. "Event"

document.querySelector('.btn-roll').addEventListener('click', function(){
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    shooniiZurag.style.display = 'block';
    shooniiZurag.src = 'dice-' + diceNumber + '.png'
})
