
let numeroSecreto = Math.floor(Math.random()*100)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 10;

while(numeroUsuario != numeroSecreto){
     numeroUsuario = parseInt(prompt('Me indicas un numero entre 1 y 100: '));

    typeof(console.log(numeroUsuario));

    if(numeroUsuario == numeroSecreto){

        alert(`Acertaste, el numero es: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos==1 ? 'vez' : 'veces'}`);
    }else{
        if(numeroUsuario >numeroSecreto){
            alert('El numero secreto es menor');
        }else{
            alert('El numero secreto es mayor');
        }
    }
    intentos++;
    palabraVeces = 'veces';
    if(intentos>maximosIntentos){
        alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
        break;
    }
}
 