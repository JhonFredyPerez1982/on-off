let value1 = "BOMBILLO ";
const tomacorriente1=document.querySelector("[data-tomaCorriente1]");
const tomacorriente3=document.querySelector("[data-tomaCorriente3]");
const Switch=document.querySelector("[data-Switch]");
tomacorriente1.classList.add("tomaCorriente");
tomacorriente3.classList.add("tomaCorriente");
Switch.classList.add("off");
      const bombillo1 = document.createElement("span");
      const bombillo3 = document.createElement("span");
      tomacorriente1.appendChild(bombillo1);
      tomacorriente3.appendChild(bombillo3);
      bombillo1.innerText=value1;
      bombillo3.innerText=value1;
      const funcion=() => {
          Switch.appendChild(encender());
      }
Switch.addEventListener("click",funcion);
const encender = () =>{
      tomacorriente1.classList.add("bombilloApagado");
      tomacorriente3.classList.add("bombilloApagado");
      
      Switch.classList.add("off");
      Switch.addEventListener("click",apagar);
}
   const apagar = (event) =>{
      const element=event.target
      element.classList.toggle("on");
      tomacorriente1.classList.toggle("bombilloEncendido");
      tomacorriente3.classList.toggle("bombilloEncendido");
}; 