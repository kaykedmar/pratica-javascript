function verificaNota() {
const inputElement = Number(document.getElementById('js-nota').value);
result = '';

if (isNaN(inputElement) || inputElement === '') { 
  result = "Insira uma nota válida";
} else if (inputElement >= 9) { 
  result = "Excelente trabalho!";
} else if (inputElement >= 6 && inputElement <= 9) { 
  result = "Bom trabalho!";
} else  { 
  result = "Precisa melhorar.";
}

  document.getElementById('js-resultado').innerHTML = result
}


document.getElementById('js-verificar').onclick = verificaNota
