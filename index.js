var questions = [];
var dispQuestions = [];
var score = 0;  
document.querySelector('.start').addEventListener('click', function() {
    playAudio("start");
    addQuestion('What is the capital of India?', ['Mumbai', 'Delhi', 'Kolkata', 'Chennai'], 'Delhi');
    addQuestion('What is the capital of USA?', ['New York', 'Washington DC', 'Los Angeles', 'Chicago'], 'Washington DC');
    addQuestion('What is the capital of UK?', ['Manchester', 'Birmingham', 'London', 'Liverpool'], 'London');
    addQuestion('What is the capital of Australia?', ['Sydney', 'Melbourne', 'Canberra', 'Perth'], 'Canberra');
    addQuestion('What is the capital of Japan?', ['Tokyo', 'Osaka', 'Kyoto', 'Hiroshima'], 'Tokyo');
    addQuestion('What is the capital of France?', ['Paris', 'Lyon', 'Marseille', 'Toulouse'], 'Paris');
    addQuestion('What is the capital of Germany?', ['Berlin', 'Munich', 'Hamburg', 'Frankfurt'], 'Berlin');
    addQuestion('What is the capital of China?', ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen'], 'Beijing');
    addQuestion('What is the capital of Russia?', ['Moscow', 'Saint Petersburg', 'Novosibirsk', 'Yekaterinburg'], 'Moscow');
    addQuestion('What is the capital of Brazil?', ['Sao Paulo', 'Rio de Janeiro', 'Brasilia', 'Salvador'], 'Brasilia');
    addQuestion('What is the capital of Canada?', ['Toronto', 'Montreal', 'Vancouver', 'Ottawa'], 'Ottawa');
    addQuestion('What is the capital of Italy?', ['Rome', 'Milan', 'Naples', 'Turin'], 'Rome');
    addQuestion('What is the capital of South Korea?', ['Seoul', 'Busan', 'Incheon', 'Daegu'], 'Seoul');
    addQuestion('What is the capital of Spain?', ['Madrid', 'Barcelona', 'Valencia', 'Seville'], 'Madrid');
    addQuestion('What is the capital of Mexico?', ['Mexico City', 'Guadalajara', 'Monterrey', 'Puebla'], 'Mexico City');
    addQuestion('What is the capital of South Africa?', ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria'], 'Pretoria');
    addQuestion('What is the capital of Argentina?', ['Buenos Aires', 'Cordoba', 'Rosario', 'Mendoza'], 'Buenos Aires');
    addQuestion('What is the capital of Indonesia?', ['Jakarta', 'Surabaya', 'Bandung', 'Medan'], 'Jakarta');
    addQuestion('What is the capital of Turkey?', ['Istanbul', 'Ankara', 'Izmir', 'Bursa'], 'Ankara');
    addQuestion('What is the capital of Egypt?', ['Cairo', 'Alexandria', 'Giza', 'Shubra El-Kheima'], 'Cairo');
    addQuestion('What is the capital of Saudi Arabia?', ['Riyadh', 'Jeddah', 'Mecca', 'Medina'], 'Riyadh');
    addQuestion('What is the capital of Pakistan?', ['Karachi', 'Lahore', 'Islamabad', 'Faisalabad'], 'Islamabad');
    addQuestion('What is the capital of Bangladesh?', ['Dhaka', 'Chittagong', 'Khulna', 'Rajshahi'], 'Dhaka');
    addQuestion('What is the capital of Nigeria?', ['Lagos', 'Kano', 'Ibadan', 'Abuja'], 'Abuja');
    addQuestion('What is the capital of Iran?', ['Tehran', 'Mashhad', 'Isfahan', 'Karaj'], 'Tehran');
    addQuestion('What is the capital of Iraq?', ['Baghdad', 'Basra', 'Sulaymaniyah', 'Erbil'], 'Baghdad');
    addQuestion('What is the capital of Afghanistan?', ['Kabul', 'Kandahar', 'Herat', 'Mazar-i-Sharif'], 'Kabul');
    addQuestion('What is the capital of Nepal?', ['Kathmandu', 'Pokhara', 'Lalitpur', 'Bharatpur'], 'Kathmandu');
    document.querySelector('.dummy').style.display = 'none';
    document.querySelector('.container .question').style.display = 'flex';
    document.querySelector('.container .option-container').style.display = 'grid';
    document.querySelector('.score').style.display = 'flex';
    this.style.display = 'none';
    displayQuestion(askQuestion());
});

function Question(question, options, answer) {
    this.question = question;
    this.options = options;
    this.answer = answer;
}

function addQuestion(question, options, answer) {
    var q = new Question(question, options, answer);
    questions.push(q);
}

function askQuestion() {
    return Math.floor(Math.random() * questions.length);
}
function playAudio(audio){
    var audio = new Audio("assests/"+audio+".mp3");
    audio.play();

}
function displayQuestion(n) {
    var answers=[];
    if (dispQuestions.includes(n) == false) {
        dispQuestions.push(n);
        var q = questions[n];
        var answer = q.answer;
        var question = document.querySelector('.question');
        question.innerHTML = q.question;
        for(i=1;i<=4;i++){
            var j=Math.floor(Math.random() * q.options.length);
            if(!answers.includes(j)){
                answers.push(q.options[j]);
            }
        }
        console.log(answers);
        q.options.forEach((optionText, index) => {
            var option = document.querySelector(".option" + (index + 1));
            option.innerHTML = optionText;
            option.onclick = function() {
                if (this.innerHTML == answer) {
                    playAudio("correct");
                    score++;
                    document.querySelector('.score').textContent= "Score: " +score;
                    document.querySelector('.container').classList.add('correct');
                    setTimeout(function() {
                        document.querySelector('.container').classList.remove('correct');
                    }, 500);
                }
                else{
                    playAudio("wrong");
                    document.querySelector('.container').classList.add('wrong');
                    setTimeout(function() {
                        document.querySelector('.container').classList.remove('wrong');
                    }, 500);
                }
                if (dispQuestions.length === questions.length) {
                    document.querySelector('.congrats').style.display = 'block';
                    playAudio("congrats");
                   document.querySelector('.score').textContent = "Your Score is: " + score;
                   document.querySelector('.score').style.height = '200px';
                   document.querySelector('.option-container').style.display = 'none';
                   document.querySelector('.container').style.display = 'none';
                } else {
                    displayQuestion(askQuestion());
                }
            };
        });
    } else if (dispQuestions.length === questions.length) {
        document.querySelector('.congrats').style.display = 'block';
        playAudio("congrats");
       document.querySelector('.score').textContent = "Your Score is: " + score;
       document.querySelector('.score').style.height = '200px';
       document.querySelector('.option-container').style.display = 'none';
       document.querySelector('.container').style.display = 'none';

    } else {
        displayQuestion(askQuestion());
    }
}