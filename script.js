function calculos(){
        var inputPeso = (document.getElementById('peso').value);
        var peso= parseFloat (inputPeso);
        var valorDiario;
        var matD_HS, matM_HS; 
        var matD_SC, matM_SC, matD2_SC, matM2_SC;
      


if ( isNaN(peso) || peso<1){         //está verificando si "peso" no es un número o si inputPeso está vacío

    document.getElementById('error').innerText= "Valor no valido, intentelo de nuevo";
    document.getElementById('error').classList.add("show");
    setTimeout (function(){          //llamamos a la funcion y le decimos que no muestre en pantalla luego de un tiempo con el settimeout.
    document.getElementById('error').classList.remove("show");},1500);
        

    // mensajeError.textContent = "Valor no valido, intentelo de nuevo";
return;

}else{
    document.getElementById('error').textContent = "";
}


// peso en H-Segar
if (peso<=10){
    valorDiario = (peso *100);
}
else if (peso <=20){
    valorDiario = ( ( (peso-10) *50) + 1000);
}
else {
    valorDiario = ( ( (peso-20) *20) + 1500);
}

//matenimiento H-Segar
matD_HS= Math.ceil(valorDiario / 24);
matM_HS= Math.ceil(matD_HS + ( matD_HS/ 2) );
 


//peso en SC
if (peso>30){
matD_SC=Math.ceil(( ( ( ( peso*4) +7) *1500) / (peso+90) )/24);
matM_Sc=Math.ceil(matD_SC + (matD_SC / 2) )

matD2_SC=Math.ceil( ( ( ( ( peso*4) +7) *2000) / (peso+90) )/24);
matM2_SC=Math.ceil(matD2_SC + (matD2_SC / 2) );        

document.getElementById('mante').textContent = 'x1500:\t' + matD_SC + '\tcc/hr\t' + matM_Sc + '\tcc/hr'
document.getElementById('mante_2').textContent = 'x2000:\t' + matD2_SC + '\tcc/hr\t'+matM2_SC+'\tcc/hr';}
else {
  
  document.getElementById('mante').textContent = matD_HS + "\tcc/hr\t";
  document.getElementById('mante_2').textContent ="\tm+m/2:\t" + matM_HS + "\tcc/hr\t";}
}





