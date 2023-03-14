const h1 = document.querySelector("#h1");
const inp1 = document.querySelector(".in1")
const inp2 = document.querySelector(".in2")
const btn = document.querySelector("#btn")


const result = document.querySelector("#result")

function btnOnclick(){
    const sumaInputs = Number(inp1.value) + Number(inp2.value);
    result.innerText = "Resultado: " + sumaInputs; 
}