/*let numeroParaSumar = 0;

while (numeroParaSumar < 10){
    numeroParaSumar++;
    document.write(numeroParaSumar); 
          EJ WHILE
    
}*/
             

/*let numeroParaSumar = 0; EJ DO WHILE

do {
    
    document.write(numeroParaSumar); 
    numeroParaSumar++;
}
            EJ DO WHILE
while (numeroParaSumar < 10); */

/*let numeroParaSumar = 0;  

while (numeroParaSumar < 10) {
    numeroParaSumar++;
    document.write(numeroParaSumar);
    if (numeroParaSumar == 10) {
        break;
}}
         
document.write("fin");*/  /*EJ DE BREAK*/




/*for (let i =0; i <6; i++) {
    document.write(i + "<br>")
}*/

array1 = ["mariano","marcelo","juan"];
array2 = ["pedro","carlos","array1","josefina"];

for (array in array2) {
    if (array == 2){
        for (let array of array1){
            document.write(array + "<br>")
        }
    } else {
        document.write(array2[array]+ "<br>")
    }
}

