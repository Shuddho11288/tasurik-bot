const config = {
  name: "quizfootballer",
  description:
    "Try to answer a QUIZ on a footballer to see your knowledge and love for football",
  usage: "-quizfootballer",
  category: "🎉 Fun Commands",
  author: "Tasawar Ahmed Shuddho",
  version: "1.0.0",
  permission: "all",
};
let msgtemplate = ` make me a quiz on jude NAME_F.. don't reveal the name. Player have to guess. Only make one informative ques and all information have to me statistically correct according to your knowledge. Don't make multiple choice`;
const axios = require("axios");
const gemini_url = "https://gemini-api-by-shuddho.vercel.app/generate?prompt=";
const footballers = `Pele

Diego Maradona

Lionel Messi

Cristiano Ronaldo

Johan Cruyff

Michel Platini

Zinedine Zidane

Franz Beckenbauer

George Best

Alfredo Di Stéfano

Ferenc Puskás

Eusébio

Bobby Charlton

Ronaldo Nazário

Paolo Maldini

Roberto Baggio

Marco van Basten

Gerd Müller

Lothar Matthäus

Andres Iniesta

Xavi Hernandez

Cafu

Franco Baresi

Paolo Rossi

Raul Gonzalez

Thierry Henry

Rivaldo

Lev Yashin

David Beckham

Andrea Pirlo

Alessandro Del Piero

Kaka

Ruud Gullit

Hristo Stoichkov

Karl-Heinz Rummenigge

Rudi Völler

Dennis Bergkamp

Gabriel Batistuta

Roberto Carlos

Fernando Peyroteo

Nandor Hidegkuti

Michael Laudrup

Carlos Alberto

Juan Román Riquelme

Emilio Butragueño

Sócrates

Dino Zoff

Roger Milla

Gheorghe Hagi

Raul Gonzalez

Fabio Cannavaro

Andres Escobar

Gary Lineker

Jürgen Klinsmann

Jean-Pierre Papin

David Villa

Carlos Valderrama

Michel Hidalgo

Raymond Kopa

Luis Suarez

Fernando Redondo

Didier Deschamps

Laurent Blanc

Didier Drogba

Marcel Desailly

Patrick Vieira

Eric Cantona

Gaetano Scirea

Giacinto Facchetti

Alessandro Nesta

Hernán Crespo

Juan Cuadrado

Nwankwo Kanu

Samuel Eto'o

Abedi Pele

Tony Adams

Peter Schmeichel

Ryan Giggs

John Terry

Frank Lampard

Didier Drogba

Gianluigi Buffon

Alessandro Del Piero

Francesco Totti

Francesco Riva

Alessandro Altobelli

Roberto Mancini

Fabio Grosso

Paolo Rossi

Christian Vieri

Dino Zoff

Gianni Rivera

Alessandro Nesta

Sandro Mazzola

Giacomo Bulgarelli

Roberto Boninsegna

Giampiero Boniperti

Paolo Montero

Francesco Graziani

Luigi Riva

Ciro Immobile

Francesco Totti

Francesco Graziani

Alessandro Del Piero

Daniele De Rossi

Paolo Rossi

Marco Materazzi

Gianfranco Zola

Giuseppe Meazza

Alessandro Costacurta

Christian Panucci

Giorgio Chiellini

Alessandro Florenzi

Antonio Cabrini

Roberto Donadoni

Giacomo Bulgarelli

Giorgio Chinaglia

Francesco Coco

Alessandro Matri

Gianluca Vialli

Andrea Barzagli

Angelo Peruzzi

Stefano Tacconi

Paolo Rossi

Sandro Salvadore

Roberto Bettega

Michel Platini

Liam Brady

Pietro Anastasi

Claudio Gentile

Antonio Conte

Alessio Tacchinardi

Filippo Inzaghi

Alberto Gilardino

Rino Gattuso

Fabio Grosso

Simone Perrotta

Marco Amelia

Francesco Acerbi

Salvatore Sirigu

Daniele Bonera

Gianluigi Donnarumma

Andrea Belotti

Ciro Immobile

Federico Chiesa

Nicolo Barella

Stefano Sensi

Marco Verratti

Leonardo Bonucci

Giorgio Chiellini`.split("\n\n");
qf_queue = {};

const run = async (api, event) => {
  api.sendMessage(
    "Loading your quiz! Please Wait ⏰...",
    event.threadID,
    event.messageID
  );
  let ranfootballer =
    footballers[Math.floor(Math.random() * footballers.length)];
  let url =
    gemini_url +
    encodeURIComponent(msgtemplate.replace("NAME_F", ranfootballer));
  let result = await axios.get(url);
  let response = result.data.result;
  console.log(response);
  qf_queue[event.senderID] = ranfootballer;
  console.log(qf_queue);
  console.log(ranfootballer);
  api.sendMessage(response, event.threadID, event.messageID);
};

const handle = async (api, event) => {
  if (qf_queue[event.senderID]) {
    let ranfootballer = qf_queue[event.senderID];
    if (ranfootballer.toLowerCase().includes(event.body.toLowerCase())) {
      api.sendMessage("Correct!", event.threadID, event.messageID);
      delete qf_queue[event.senderID];
    } else {
      api.sendMessage(
        "Wrong. The answer is " + ranfootballer,
        event.threadID,
        event.messageID
      );
      delete qf_queue[event.senderID];
    }
  }
};

module.exports = { run, config, handle };
