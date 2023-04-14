 const date=document.getElementById('day');
 const month=document.getElementById('month');
 const year=document.getElementById('year');
 const ConvertButton=document.querySelector('#btn')
 const errorMessage=document.querySelectorAll('.error')
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
                if(D>28){
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
    const userInput_month=month.value;
    const userInput_date=date.value;
    const userInput_year=year.value;
    if(userInput_date&&userInput_month&&userInput_year){
        const result=(IsMonth(Number(userInput_month),Number(userInput_date),Number(userInput_year)))
        const yearResult=(Isyear(userInput_year))
        /* Month  */
        if(result==='none'){
            errorMessage[0].classList.add('none')
            errorMessage[1].classList.add('none')
        }
        else if(result==='Invalid'){
            if(userInput_date<31){
                errorMessage[0].classList.add('none')
            }
            
            errorMessage[1].classList.remove('none')
        }
        else if(result==='error'){
            errorMessage[0].classList.remove('none')
            errorMessage[1].classList.add('none')
        }
        else{
            errorMessage[0].classList.remove('none')
            errorMessage[1].classList.remove('none')
        }
        /*Year */
        console.log(yearResult)
        if(yearResult==='none'){
            errorMessage[2].classList.add('none')
        }
        else if(yearResult==='error'){
            errorMessage[2].classList.remove('none')
        }
        else if(yearResult==='Can\'t predict future') {
            errorMessage[2].innerHTML='Can\'t predict future'
            errorMessage[2].classList.remove('none')
        }

    }
    
    const CurrentDate=new Date().getDate()
    const CurrentMonth=new Date().getMonth()
    const CurrentYear=new Date().getFullYear()
    
 })
