import './App.css'
import {useState} from "react";

function App() {
    const [input, setInput] = useState(0)
    const [output, setOutput] = useState("")

    const clear = () => {
        setInput(0)
        setOutput("")
    }



    const handleClick = (elt) => {
        setInput((prev) => {
            if (prev === 0) {
                return elt
            }

            if(elt === "/" || elt==="+" || elt==="-" || elt==="*")
                return elt

            if(elt >= 0 && elt <= 9)
                if(prev === "/" || prev==="+" || prev==="-" || prev ==="*")
                    return elt


                return prev + elt
        })
        setOutput((prev) => prev +elt)

    }

    const calculate = (chain) => {
        let result = eval(chain)
        setOutput(result)
        setInput(result)
        console.log(output)
    }

  return (
    <>
      <div id="app">
          <div id="screen">
              <div id="result">
                  {output}
              </div>
              <div id="display">
                  {input}
              </div>
          </div>
          <div id="pad">
              <button id="clear" onClick={clear}>AC</button>
              <button id="divide" onClick={()=>handleClick("/")}>/</button>
              <button id="multiply" onClick={()=>handleClick("*")}>x</button>
              <button id="seven" onClick={()=>handleClick("7")}>7</button>
              <button id="eight" onClick={()=>handleClick("8")}>8</button>
              <button id="nine" onClick={()=>handleClick("9")}>9</button>
              <button id="subtract" onClick={()=>handleClick("-")}>-</button>
              <button id="four" onClick={()=>handleClick("4")}>4</button>
              <button id="five" onClick={()=>handleClick("5")}>5</button>
              <button id="six" onClick={()=>handleClick("6")}>6</button>
              <button id="add" onClick={()=>handleClick("+")}>+</button>
              <button id="one" onClick={()=>handleClick("1")}>1</button>
              <button id="two" onClick={()=>handleClick("2")}>2</button>
              <button id="three" onClick={()=>handleClick("3")}>3</button>
              <button id="equals" onClick={()=>calculate(output)}>=</button>
              <button id="zero" onClick={()=>handleClick("0")}>0</button>
              <button id="decimal" onClick={()=>handleClick(".")}>.</button>
          </div>
      </div>
    </>
  )
}

export default App
