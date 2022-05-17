import "./styles.css";
let btnEnv = document.getElementById("enviar");
let numeros, contar, contarposi, porcentaje: number;

btnEnv.addEventListener("click", () => {
  contar = 0;
  contarposi = 0;
  numeros = Number(prompt("Ingrese un numero: "));
  while (numeros !== 0) {
    contar += 1;
    if (numeros > 0) {
      contarposi += 1;
    }
    numeros = Number(prompt("Ingrese un numero: "));
  }
  porcentaje = (contarposi / contar) * 100;

  console.log(contarposi + " Positivos, " + porcentaje + " % del total");
});
