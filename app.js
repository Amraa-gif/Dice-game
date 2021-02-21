// Аль тоглогч шоог хаяхыг шийддэг хувьсагч. 1-р тоглогч "0", 2-р тоглогч "1".
activePlayer = 0;


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


// Roll-Dice гэсэн товчийг ажилладаг болгоё. "Event listener"
document.querySelector('.btn-roll').addEventListener('click', function(){
    // Шооны санамсаргүй буусан тоог хийнэ. 
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    shooniiZurag.style.display = 'block';
    shooniiZurag.src = 'dice-' + diceNumber + '.png';
    // 1-ээс ялгаатай тоо буувал ээлжийн оноо хэсэгт тухайн тоог нэмж өгнө.
    if(diceNumber !== 1){
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }else{
        shooHayahErh();
    } 
});


// Ээлжиндээ цуглуулсан оноогоо ерөнхий онооруу шилжүүлэх. HOLD товчоо ажлуулах.
document.querySelector('.btn-hold').addEventListener('click', function(){
    // Уг тоглогчийн цуглуулсан оноог нийт оноонд нь нэмж өгнө.
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    // Уг тоглогчийг хожсон үгүйг шалгах.
    if(scores[activePlayer] >= 100){
        // Ялсан хүний нэрийг WINNER болгоно
        document.getElementById('name-' + activePlayer).textContent = 'Winner';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
    }else{
        shooHayahErh();
    }
});


// Тоглогчийн Шоо хаях эрхийг дараачийн тоглогчид өгнө. 
function shooHayahErh(){    
    // 1 буусан тохиолдолт ээлжийн оноо устах.
    roundScore = 0; 
    document.getElementById('current-' + activePlayer).textContent = 0;

    // 1 буусан тохиолдолд нөгөө тоглогч хаяна.
    // Идэвхтэй тоглогч 0 байвал 1 болгоно. 1 байвал 0 болгоно.
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    // Шоо хаях тоглогчид улаан цэгийг шилжүүлж өгнө.
    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle("active")
    
    // Шоог хаяад 1 буусан үед шоог алга болгоно.
    shooniiZurag.style.display = "none"; }
