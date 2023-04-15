const date=document.getElementById('day');
const month=document.getElementById('month');
const year=document.getElementById('year');
const ConvertButton=document.querySelector('#btn')
const errorMessage=document.querySelectorAll('.error')
const CurrentDate=new Date().getDate()
const CurrentMonth=new Date().getMonth()+1
const CurrentYear=new Date().getFullYear()
const output=document.querySelector('.result')
const res_year=document.querySelector('.result-years')
const res_months=document.querySelector('.result-months')
const res_days=document.querySelector('.result-days')
errorMessage.forEach(item=>{
   item.classList.add('none')
})
function IsMonth(M,D,Y){
   switch(M){
       case 1:
       case 3:
       case 5:
       case 7:
       case 8:
       case 10:
       case 12:
           if(D>31){
               return 'error'
           }
           else{
               return 'none'
           }
           break;
       case 4:
       case 6:
       case 9:
       case 11:
           if(D>30){
               return 'error'
           }
           else{
               return 'none'
           }
           break;
       case 2:
           if(Y%400===0 && Y%4===0 && Y%100!==0){
               if(D>28 ){
                   return 'error'
               }
           }
           else if(D>29){
               return 'error'
           }
           else{
               return 'none'
           }
           break;
       default:
           return 'Invalid'
           break;
   }
   
}
function Isyear(Y){
   const Year=new Date().getFullYear()
   if(Y>Year){
    return 'Can\'t predict future'   
   }
   else if(Y<1947){
       return 'error'
   }
   else{
       return 'none'
   }
}
ConvertButton.addEventListener('click',()=>{
   let Year_flag=1;
   let Date_flag=1;
   let Month_flag=1;
   const userInput_month=Number(month.value);
   const userInput_date=Number(date.value);
   const userInput_year=Number(year.value);
   if(userInput_date&&userInput_month&&userInput_year){
       const result=(IsMonth(userInput_month,userInput_date,userInput_year))
       const yearResult=(Isyear(userInput_year))
       
       /* Month  */
       if(result==='none'){
           errorMessage[0].classList.add('none')
           errorMessage[1].classList.add('none')
           Date_flag=0;
           Month_flag=0;
       }
       else if(result==='Invalid'){
           Date_flag=1;
           Month_flag=1;
           Year_flag=1;
           if(userInput_date<=31 ){
               errorMessage[0].classList.add('none')
               
           }
           else if(userInput_date>31){
               errorMessage[0].classList.remove('none')
           }
           errorMessage[1].classList.remove('none')
           
       }
       else if(result==='error'){
           Date_flag=1;
           Month_flag=1;
           Year_flag=1;
           errorMessage[0].classList.remove('none')
           errorMessage[1].classList.add('none')
       }
       else{
           Date_flag=1;
           Month_flag=1;
           Year_flag=1;
           errorMessage[0].classList.remove('none')
           errorMessage[1].classList.remove('none')
          
       }
       /*Year */
      
       if(yearResult==='none'){
           Year_flag=0;
           errorMessage[2].classList.add('none')
       }
       else if(yearResult==='error'){
           Year_flag=1;
           Date_flag=1;
           Month_flag=1;
           errorMessage[2].classList.remove('none')
           errorMessage[2].innerHTML='Invalid Year'
       }
       else if(yearResult==='Can\'t predict future') {
           Year_flag=1;
           Date_flag=1;
           Month_flag=1;
           errorMessage[2].innerHTML='Can\'t predict future'
           errorMessage[2].classList.remove('none')
       }
       
       if((userInput_date)<1){
          errorMessage[0].classList.remove('none')
       }
   if(!Year_flag && !Month_flag && !Date_flag){
       if(!Year_flag){
           res_year.innerHTML=CurrentYear-(userInput_year)
       }
       else{
           res_year.innerHTML='--'
       }
       }
       if(!Month_flag){
           if(CurrentMonth>=userInput_month){
               ageInMonths=CurrentMonth-(userInput_month)
               res_months.innerHTML=ageInMonths
           }
           else{
               ageInMonths=12-(userInput_month)+CurrentMonth
               res_year.innerHTML=CurrentYear-(userInput_year)-1
               res_months.innerHTML=ageInMonths
           }
       }
       if(!Date_flag){
           if(CurrentDate>=userInput_date){
               res_days.innerHTML=CurrentDate-userInput_date
           }
           else{
               const daysinPrevious_Month= new Date(CurrentYear, CurrentMonth - 1, 0).getDate();
               res_months.innerHTML=ageInMonths-1
               res_days.innerHTML=daysinPrevious_Month-userInput_date+CurrentDate
           }
       }
       else{
           res_days.innerHTML='--'
           res_months.innerHTML='--'
           res_year.innerHTML='--'
       }
}
   
})
