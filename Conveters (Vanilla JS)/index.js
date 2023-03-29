const kilogram=document.getElementById('kilogram');
const pound=document.getElementById('pound');
const meter=document.getElementById('meter');
const inches =document.getElementById('inches');
const weight_button=document.getElementById('weight');
const length_button=document.getElementById('length');
const invalid_weight=document.querySelector('.weight_invalid');
const invalid_length=document.querySelector('.length_invalid');
kilogram.addEventListener('click',function(){
    pound.value="";
})
pound.addEventListener('click',function(){
    kilogram.value="";
})
meter.addEventListener('click',function(){
    inches.value="";
})
inches.addEventListener('click',function(){
    meter.value="";
})
weight_button.addEventListener('click',()=>{
    const lbs=2.2;
    if((kilogram.value.length>0 && kilogram.value>0) && (pound.value.length>0 && pound.value>0)){
        pound.value=0;
        pound.value=((kilogram.value*2.2).toFixed(3))
    }
    else if(kilogram.value.length>0 && kilogram.value>0){
        pound.value=((kilogram.value*2.2).toFixed(3))
    }
    else if(pound.value.length>0 && pound.value>0){
        kilogram.value=((pound.value*0.454 ).toFixed(3))
    }
    if(!Number(kilogram.value)){
        console.log('hello')
    }
})
length_button.addEventListener('click',()=>{
    const inch = 0.0254
    
    if((meter.value.length>0 && meter.value>0) && (inches.value.length>0 && inches.value>0)){
        inches.value=0;
        inches.value=((meter.value/inch).toFixed(3))
    }
    else if(meter.value.length>0 && meter.value>0){
        inches.value=((meter.value/inch).toFixed(3))
    }
    else if(inches.value.length>0 && inches.value>0){
       meter.value=((inches.value*inch).toFixed(3))
    }
    
})