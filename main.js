//Prompt
var asksurname = prompt("Inserisci il tuo cognome");

//Array cognomi
var surname = ["Bianchi", "Rossi", "Perlari", "Lodigiani","Mastrobattista","Verdi"]
// Inserisco prompt in Array
 surname.push(asksurname)
 surname.sort()
 console.log(surname.sort())

 for (i=0; i < surname.length; i++){
     output.innerHTML +=  "<li>"  + surname[i] + "</li>";
 }
