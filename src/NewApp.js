import React, {useState, useEffect} from 'react';
import './App.css'

const NewApp =()=> {
    const [form, setForm] = useState({})

    const onChangeHandler= (e, inputField)=>{
        setForm({
            ...form,
            [inputField]:e.target.value
        })
    }

    const calculate =(operator)=> {
        const result = document.querySelector('#result');
        let calculate;
        // if(operator === "add"){
        //     calculate = +form.firstNumber + +form.secondNumber
        //         result.textContent = calculate
        //     }else if(operator === "multiply"){
        //         calculate = form.firstNumber * form.secondNumber
        //         result.textContent = calculate
        //     }else if(operator === "divide"){
        //         if(form.secondNumber < form.firstNumber)
        //         alert("Get Out!!!")
        //     }else{
        //         calculate = form.firstNumber / form.secondNumber
        //         result.textContent = calculate
        // } 
        console.log("outside",calculate)
        console.log(form)
        switch (operator) {
            case "add":
                 calculate = Number(form.firstNumber) + Number(form.secondNumber)
                 console.log(calculate)
             result.textContent = calculate
                break;
             case "multiply":
                  calculate = form.firstNumber * form.secondNumber
                   result.textContent = calculate
                   break;
             case "divide":
                     if(form.firstNumber < form.secondNumber){
                         alert("First Number is Bigger!!!")
                     }else{
                         calculate = form.firstNumber / form.secondNumber
                       result.textContent = calculate
                     }

                 break;
             default:
                 result.textContent = "really!"
            
         }      
    }



    return(
        <div className="App">
            {console.log(form)}
            <h1>Welcome to Skillz/Cyjrox Calculator Class</h1>
            <label>First Number</label><input onChange={(event)=> onChangeHandler(event,'firstNumber')} type="number" /><br/><br/>
            <label>Second Number</label><input onChange={(e)=>onChangeHandler(e, 'secondNumber')} type="number" /><br />
            <button onClick={()=>calculate('add')}>Add</button>
            <button onClick={()=>calculate('multiply')}>Multiply</button>  
            <button onClick={()=>calculate('divide')}>Divide</button>
            <h3>Result is: <span id="result" style={{color:"Red"}}></span> </h3>
        </div>
    )
}
export default NewApp;