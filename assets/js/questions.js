const s_name = document.getElementById("s_name");
const email = document.getElementById("email");
const question = document.getElementById("question");
const submitbtn = document.getElementById("ques-submit");
const database = firebase.database();

submitbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    database.ref('/questions/'+ s_name.value).set({
        s_name: s_name.value,
        question: question.value,
        email: email.value
    });
    alert("Successfully submitted!");
    s_name.value = "";
    question.value = "";
    email.value = "";
    
});

