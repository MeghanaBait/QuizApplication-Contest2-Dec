
let quizData = [
    {
        "category": "HTML",
        "questions": [
            {
                "question": "What does HTML stand for?",
                "options": ["Hyper Text Markup Language", "High Tech Machine Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
                "answer": "Hyper Text Markup Language"
            },
            {
                "question": "Which tag is used to define a hyperlink?",
                "options": ["<hyper>", "<link>", "<a>", "<url>"],
                "answer": "<a>"
            },
            {
                "question": "Which tag is used to create a numbered list?",
                "options": ["<ul>", "<list>", "<ol>", "<li>"],
                "answer": "<ol>"
            },
            {
                "question": "What is the correct HTML for inserting an image?",
                "options": ["<img href='image.jpg'>", "<image src='image.jpg'>", "<img src='image.jpg'>", "<picture>image.jpg</picture>"],
                "answer": "<img src='image.jpg'>"
            },
            {
                "question": "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
                "options": ["alt", "title", "description", "alttext"],
                "answer": "alt"
            }
        ]
    },
    {
        "category": "CSS",
        "questions": [
            {
                "question": "Which property is used to change the background color?",
                "options": ["text-color", "bgcolor", "color", "background-color"],
                "answer": "background-color"
            },
            {
                "question": "Which CSS property is used to control the text size?",
                "options": ["text-size", "font-style", "text-style", "font-size"],
                "answer": "font-size"
            },
            {
                "question": "How do you select an element with id 'demo'?",
                "options": ["#demo", ".demo", "*demo", "@demo"],
                "answer": "#demo"
            },
            {
                "question": "Which CSS property is used to control the text color of an element?",
                "options": ["color", "font-color", "text-color", "background-color"],
                "answer": "color"
            },
            {
                "question": "Which property is used to add shadows to text?",
                "options": ["text-shadow", "shadow", "font-shadow", "shadow-text"],
                "answer": "text-shadow"
            }
        ]
    },
    // ... Similar structures for JS, Java, SQL, Spring can follow with 5 questions each.
];



const ipCategory = "HTML";//for example

// adding questions to quiz
const quiz = document.getElementById("quiz");
const quizDiv = document.createElement("div");
    // add a qustion text
function addQuestion(categoryObj){
    categoryObj.forEach(ele => {
        if(ele.category === ipCategory){
            ele.questions.forEach(quest => {
                //question
                const questH3 = document.createElement("h3");
                questH3.innerText=quest.question;
                quizDiv.appendChild(questH3);
                //options
                const optionsDiv = document.createElement("div");
                for(let key in quest.options){
                    // options text
                    const serialNo = document.createElement("h5");
                    const cell = document.createElement("h4");
                    serialNo.innerText = String.fromCharCode(65 + parseInt(key)) + ".";
                    cell.innerText = quest.options[key];
                    optionsDiv.appendChild(serialNo); //serial number of options to be appended
                    optionsDiv.appendChild(cell);// options to be appended
                }
                quizDiv.appendChild(optionsDiv);
            });
        }
    });
    
    quiz.appendChild(quizDiv); 
}



//popup form element selected-deselcted

document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('html');
    const closeIcon = document.getElementById('closeIcon');

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            checkbox.parentElement.style.backgroundColor = '#FCC822';
            closeIcon.style.display = 'block';
        } else {
            checkbox.parentElement.style.backgroundColor = '#D1D1D1';
            closeIcon.style.display = 'none';
        }
    });
});