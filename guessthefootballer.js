var gis = require('g-i-s');
const sendImage = require("./basicTools/sendImage");

verybiglist = `Lionel Messi
Cristiano Ronaldo
Neymar Jr.
Kylian Mbappé
Robert Lewandowski
Mohamed Salah
Kevin De Bruyne
Harry Kane
Erling Haaland
Luka Modric
Bruno Fernandes
Joshua Kimmich
Sergio Ramos
Virgil van Dijk
N'Golo Kanté
Karim Benzema
Gianluigi Donnarumma
Alisson Becker
Manuel Neuer
Thiago Alcantara
Mason Mount
Romelu Lukaku
Toni Kroos
Thomas Müller
Jordan Henderson
Casemiro
Marco Verratti
Andrew Robertson
Trent Alexander-Arnold
Edinson Cavani
Raheem Sterling
Paul Pogba
João Cancelo
Ruben Dias
Bruno Guimarães
Bukayo Saka
Jack Grealish
Frenkie de Jong
Antoine Griezmann
Romelu Lukaku
Son Heung-Min
João Felix
Ansu Fati
Vinicius Jr.
Mason Greenwood
Kai Havertz
Aymeric Laporte
Gerard Moreno
Luis Suárez
Jordan Pickford
Rodri
Hakim Ziyech
Serge Gnabry
Riyad Mahrez
Kalvin Phillips
Leonardo Bonucci
Nicolo Barella
Ciro Immobile
Lorenzo Insigne
Domenico Berardi
Federico Chiesa
Jorginho
Georginio Wijnaldum
Memphis Depay
Wilfred Ndidi
Jamie Vardy
Ruben Neves
Pedro Neto
Bruno Lage
Raphinha
Ederson
Gabriel Jesus
Raphael Varane
Danilo Pereira
Alex Sandro
Wilfred Zaha
Ismaïla Sarr
Adama Traoré
Aaron Wan-Bissaka
Bukayo Saka
Declan Rice
Thomas Partey
Kieran Tierney
Edouard Mendy
Olivier Giroud
Cesar Azpilicueta
Timo Werner
Hakim Ziyech
Christian Pulisic
Giovanni Reyna
Erling Braut Haaland
Jude Bellingham
Jadon Sancho
Manuel Locatelli
Bryan Gil
Alexander Isak
Thibaut Courtois
Ferland Mendy
Marco Asensio
Karim Benzema
Vinicius Jr.
Federico Valverde
Casemiro
David Alaba
N'Golo Kanté
Hakim Ziyech
Christian Pulisic
Marcus Rashford
Phil Foden
John Stones
Ruben Dias
Oleksandr Zinchenko
Aymeric Laporte
Jack Grealish
Riyad Mahrez
Rodri
Ferran Torres
Bernardo Silva
Raheem Sterling
Nathan Ake
Erling Braut Haaland
Marco Reus
Jude Bellingham
Giovanni Reyna
Mats Hummels
Manuel Akanji
Thorgan Hazard
Jadon Sancho
Axel Witsel
Thomas Meunier
Toby Alderweireld
Harry Kane
Son Heung-Min
Hugo Lloris
Lucas Moura
Dele Alli
Pierre-Emile Hojbjerg
Ruben Neves
Rui Patricio
Conor Coady
Nelson Semedo
Joao Moutinho
Adama Traoré
Raúl Jiménez
Pedro Neto
Bruno Lage
Bruno Fernandes
Cristiano Ronaldo
Diogo Jota
Ruben Neves
Bruno Lage
João Cancelo
Ruben Dias
Bernardo Silva
Rúben Neves
Bruno Fernandes
Cristiano Ronaldo
Diogo Jota
João Cancelo
Bruno Lage
Ruben Dias
Cristiano Ronaldo
Diogo Jota
Ruben Dias
Bernardo Silva
Bruno Fernandes
João Cancelo
Bruno Lage
Rúben Neves
Cristiano Ronaldo
Diogo Jota
Ruben Dias
Bernardo Silva
Bruno Fernandes
João Cancelo
Bruno Lage
Rúben Neves
Cristiano Ronaldo
Diogo Jota
Ruben Dias
Bernardo Silva
Bruno Fernandes
João Cancelo
Bruno Lage
Rúben Neves
Cristiano Ronaldo
Diogo Jota
Ruben Dias
Bernardo Silva
Bruno Fernandes
João Cancelo
Bruno Lage
Rúben Neves
Cristiano Ronaldo
Diogo Jota
Ruben Dias
Bernardo Silva
Bruno Fernandes
João Cancelo
Bruno Lage
Rúben Neves
Cristiano Ronaldo
Diogo Jota
Ruben Dias
Bernardo Silva
Bruno Fernandes
João Cancelo
Bruno Lage
Rúben Neves
Cristiano Ronaldo
Diogo Jota
Ruben Dias
Bernardo Silva
Bruno Fernandes
João Cancelo
Bruno Lage
Rúben Neves
Cristiano Ronaldo
Diogo Jota
Ruben Dias
Bernardo Silva
Bruno Fernandes
João Cancelo
Bruno Lage
Rúben Neves
Cristiano Ronaldo
Diogo Jota`.split('\n')
let guessthefootballerqueue = {}
const guessFootballer = (api, event)=>{
    footballer = verybiglist[Math.floor(Math.random() * verybiglist.length)];
    guessthefootballerqueue[event.senderID] = footballer;
    gis(footballer, logResults);

function logResults(error, results) {
  if (error) {
    console.log(error);
  }
  else {
    // sendRandomImage
    let ranURL = results[Math.floor(Math.random() * results.length)].url
    sendImage.sendImageWithMessage(api, event, ranURL, 'Guess The Footballer! ','.png');
  }
}
}

const handleGuessTheFootballer = async (api, event) => {

  if (guessthefootballerqueue[event.senderID] != undefined){

    if (guessthefootballerqueue[event.senderID].toLowerCase() == event.body.toLowerCase()){
      api.sendMessage("Correct!", event.threadID, event.messageID);
      delete guessthefootballerqueue[event.senderID];
    }
    else{
      api.sendMessage("Wrong! The Correct Answer will be "+ guessthefootballerqueue[event.senderID], event.threadID, event.messageID);
      delete guessthefootballerqueue[event.senderID];
    }
    
  }
}

module.exports = {
  guessFootballer,
  handleGuessTheFootballer
}