const $ = e => document.querySelector(e)

const input = $("textarea")
const consola = $("#console-codes")
const button = $("button")

button.onclick = run

function run(){
  let value = transform(input.value)
  
  if(value == "clear"){
    consola.innerHTML = ""
  }
  else if(value){
    try{
      let result = window.eval(value) 
      if(typeof result == "string"){
        result = result.replaceAll("\n", "<br>")
      }
      
      if(result instanceof Array){
        result = `[${result.join(", ")}]`
      }
    
      consola.innerHTML += `
        <p class="code">${value}</p>
        <p class="output">${result}</p>
      `
    } catch (e) {
      let result = e
    
      consola.innerHTML += `
        <p class="code">${value}</p>
        <p class="output">${result}</p>
        `
    }
    
    
    consola.scrollTop = consola.scrollHeight
  }
  input.focus()
  input.value = ""
}
function transform(str){
  return str//.replaceAll("<", "&lt;").replaceAll(">", "&gt;")//.replaceAll("\\n", "<br>")
}