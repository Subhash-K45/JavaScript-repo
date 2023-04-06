const database =  [{
  id: 1,
  questions: `Which of the following is not the javascript datatypes ?`,
  option: {
    a: 'Number',
    b: 'Boolean',
    c: 'Integer',
    d: 'String'
  },
  correctAnswer: 'Number'
},
{
  id: 2,
  questions: "Choose the Invalid syntax in the options",
  option: {
    a: 'a_',
    b: 'b+',
    c: '#c',
    d: 'd1'
  },
  correctAnswer: '#c'
},
{
  id: 3,
  questions: `Choose a valid output a following code 
(1 && null && undefined)`,
  option: {
    a: '1',
    b: 'null',
    c: 'undefined',
    d: 'true'
  },
  correctAnswer: 'null'
}
]
let index=0,score=0
let CheckAnswer =(props,props2)=>{
try{
for(let key in props){
if(props[key]===props2[index].correctAnswer){
score++

}
index++
}
//console.log(score)
}
catch(error){
alert('Submit allowed of one time')
}finally{
root.classList.add('remove')
btn.classList.add('remove')
console.log(Display)
Display.innerHTML=`Your Score is ${score}`
};
}

const Display=document.getElementById('Score')
const root =document.getElementById('root')
const btn=document.getElementById('btn')
let Question,div,submit
let obj={}
btn.addEventListener('click',()=>{
CheckAnswer({...obj},{...database})
})

function ShowData(){
for(let i in database){
const div=document.createElement('div')
div.classList.add('container')
Question=document.createElement('h3')
Question.classList.add('Quiz-Questions')
Question.innerText=database[index].questions
div.append(Question)
for(let key in database[i].option){
const input=document.createElement('input')
const label=document.createElement('label')
input.setAttribute('type','radio')
input.setAttribute('name',database[i].id)
input.setAttribute('id',database[i].option[key])
input.setAttribute('value',database[i].option[key])
div.append(input)
label.setAttribute('for',database[i].option[key])
label.innerText=database[i].option[key]
div.append(label)
input.addEventListener('click',(e)=>{
  // console.log(e.target.value,database[i].id)
  let key=database[i].id
  console.log(key)
  obj[key]=e.target.value
})

}
root.append(div)
}
}
ShowData()
