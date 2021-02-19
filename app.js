// Аль тоглогч шоог хаяхыг шийддэг хувьсагч. 1-р тоглогч "0", 2-р тоглогч "1".

activePlayer = 1;



// Тоглогчдын нийт цуглуулсан оноог хадгалах хувьсагч.

var scores = [0, 0];



// Тоглогчийн ээлжиндээ цуглуулад байгаа оноо.

var roundScore = 0;



// Шооны буусан тоог хадгалах хувьсагч. 1-6 гэсэн тоо энэ хувьсагчид санамсаргүй байдлаар өгнө.

var dice = Math.floor(Math.random() * 6) + 1

console.log(dice);



/*************
    Жишээ болгож нэг тоглогчийн оноог DOM-оор өөрчлөе.
    <div class="player-score" id="score-0">43</div> 

    globalThis.document.querySelector('#score-0').textContent = dice
    document.querySelector('#score-1').innerHTML = '<em>Haha</em>' 
*************/


// Программ эхлэхэд. 
document.querySelector('#score-0').innerHTML = 0;
document.querySelector('#score-1').innerHTML = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

// Шооны зураг хэсэг.

document.querySelector(".dice").style.display = "none"; 