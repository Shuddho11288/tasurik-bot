var gis = require('g-i-s');
const sendImage = require("./basicTools/sendImage");
const axios = require('axios')
const verybiglist = `L. Messi
Cristiano Ronaldo
Neymar Jr
De Gea
K. De Bruyne
E. Hazard
L. Modrić
L. Suárez
Sergio Ramos
J. Oblak
R. Lewandowski
T. Kroos
D. Godín
David Silva
N. Kanté
P. Dybala
H. Kane
A. Griezmann
M. ter Stegen
T. Courtois
Sergio Busquets
E. Cavani
M. Neuer
S. Agüero
G. Chiellini
K. Mbappé
M. Salah
Casemiro
J. Rodríguez
L. Insigne
Isco
C. Eriksen
Coutinho
P. Aubameyang
M. Hummels
Marcelo
G. Bale
H. Lloris
G. Higuaín
Thiago Silva
S. Handanovič
G. Buffon
S. Umtiti
M. Icardi
K. Koulibaly
P. Pogba
K. Navas
R. Lukaku
C. Immobile
Jordi Alba
D. Mertens
J. Vertonghen
M. Hamšík
I. Rakitić
Piqué
L. Sané
Bernardo Silva
Ederson
S. Mané
V. van Dijk
R. Sterling
Roberto Firmino
R. Varane
M. Verratti
Alex Sandro
Douglas Costa
T. Müller
Thiago
M. Reus
Azpilicueta
L. Bonucci
T. Alderweireld
M. Pjanić
M. Benatia
M. Özil
Fernandinho
Iniesta
M. Škriniar
S. Milinković-Savić
Marco Asensio
N. Fekir
Alisson
J. Kimmich
Saúl
R. Mahrez
D. Alaba
Koke
A. Lacazette
K. Manolas
N. Otamendi
Parejo
Paulinho
W. Szczęsny
A. Sánchez
Y. Brahimi
J. Boateng
A. Vidal
I. Perišić
E. Džeko
S. Khedira
Diego Costa
R. Nainggolan
Naldo
B. Matuidi
Miranda
K. Benzema
Filipe Luís
V. Kompany
Pepe
Z. Ibrahimović
D. Sánchez
J. Giménez
Alex Telles
A. Laporte
Bruno Fernandes
N. Süle
A. Martial
D. Alli
Fabinho
Marquinhos
William Carvalho
Jorginho
F. Thauvin
Carvajal
M. Depay
H. Son
A. Lopes
S. de Vrij
M. Perin
J. Cuadrado
Iago Aspas
B. Leno
N. Matić
L. Hrádecký
Illarramendi
K. Walker
I. Gündoğan
José Callejón
A. Di María
M. Mandžukić
Willian
Sergio Asenjo
E. Banega
A. Witsel
D. Payet
Jonas
Sokratis
S. Ruffier
Falcao
K. Schmeichel
Raúl Albiol
A. Gómez
A. Barzagli
Quaresma
A. Robben
O. Dembélé
Gabriel Jesus
Ronaldo Cabrais
Josué Chiamulera
Louri Beretta
P. Kimpembe
N. Keïta
C. Tolisso
T. Lemar
K. Coman
J. Tah
Anderson Talisca
T. Werner
A. Rabiot
L. Goretzka
Q. Promes
H. Ziyech
Lucas Vázquez
Y. Carrasco
Gerard Moreno
Felipe
M. Kovačić
Kepa
Manu Trigueros
S. Gnabry
J. Pickford
S. Savić
J. Stones
Suso
J. Draxler
Felipe Anderson
Lucas Moura
Danilo Pereira
Nacho Fernández
T. Horn
Allan
F. Acerbi
Sergi Roberto
Rodrigo
Pizzi
K. Kampl
Neto
O. Baumann
I. Gueye
H. Mkhitaryan
Marcos Alonso
D. Subašić
K. Glik
K. Strootman
B. Dost
Oscar
M. Balotelli
Luiz Gustavo
Giuliano
David Luiz
R. Fährmann
Juan Mata
Adán
Rui Patrício
Y. Sommer
Javi Martínez
L. Bender
Lucas Leiva
S. Mandanda
Cesc Fàbregas
M. Dembélé
F. Ribéry
R. Jarstein
D. De Rossi
Pepe Reina
J. Pavlenka
M. de Ligt
Rodri
Arthur
G. Donnarumma
Rosberto Dourado
Juiano Mestres
Raphaelito Anjos
Gelson Martins
Gonçalo Guedes
L. Torreira
Malcom
Pau López
L. Hernández
C. Lenglet
A. Kramarić
A. Robertson
Dani García
F. Bernardeschi
J. Brandt
D. Rugani
Samu Castillejo
João Cancelo
A. Romagnoli
T. Partey
Fred
J. Vardy
A. Belotti
E. Forsberg
J. Lingard
F. Vázquez
E. Višća
A. Rüdiger
A. Florenzi
H. Maguire
T. Meunier
S. Sané
G. Kondogbia
Rafinha
Gabriel Paulista
Morata
J. Cillessen
W. Ben Yedder
C. Bakambu
Pablo Sarabia
W. Zaha
Luis Alberto
Jonathan Viera
Bartra
S. Coates
Willian José
Mário Fernandes
Víctor Ruiz
T. Delaney
K. Casteels
M. Götze
S. Mustafi
J. Pastore
Pedro
G. Bonaventura
R. Bürki
Taison
S. Nzonzi
Marlos
A. Ramsey
K. Trippier
A. Kolarov
G. Sigurðsson
S. Giovinco
M. Arnautović
N. Gaitán
J. Henderson
M. Kruse
M. Parolo
L. Fejsa
A. Rami
V. Ćorluka
G. Wijnaldum
F. Fazio
O. Giroud
Marcano
A. Guardado
E. Garay
Jardel
S. Sirigu
E. Viviano
L. Koscielny
A. Consigli
L. Biglia
Dani Alves
David Villa
Aduriz
P. Čech
Casillas
M. Rashford
Laure Santeiro
L. Bailey
M. Akanji
F. de Jong
Nélson Semedo
Pablo Fornals
Fabián
E. Bailly
Dani Ceballos
H. Lozano
Morales
J. Seri
M. Politano
M. Brozović
Williams
A. Correa
A. Christensen
João Mário
T. Strakosha
E. Hysaj
P. Zieliński
Ricardo Pereira
Grimaldo
R. Guerreiro
A. Doucouré
J. Martínez
C. Bacca
A. Plea
B. Davies
M. Nastasić
A. Milik
M. Sabitzer
B. Mendy
C. Kramer
S. Vrsaljko
T. Hazard
K. Bellarabi
S. Zaza
F. Ghoulam
B. Lecomte
J. Iličić
K. Volland
Paco Alcácer
Vitolo
G. Xhaka
D. Tadić
C. Aránguiz
S. Verdi
D. Lovren
G. Medel
X. Shaqiri
J. Corona
A. Areola
K. Vogt
Ander Herrera
E. Salvio
S. El Shaarawy
C. Smalling
Hulk
S. Kagawa
M. Lanzini
F. Smolov
L. Stindl
O. Toprak
D. Perotti
F. Muslera
B. Höwedes
S. Kjær
S. Bender
M. Valbuena
Pedro León
K. Boateng
L. Piszczek
A. Candreva
D. Wass
E. Lamela
D. Rose
C. Vela
Renato Augusto
A. Valencia
L. Fabiański
João Moutinho
Borja Valero
F. Quagliarella
B. Gomis
Manuel Fernandes
H. Herrera
Raffael
Nani
J. Milner
J. Mathieu
Joaquín
M. Gómez
K. Havertz
T. Ndombele
H. Aouar
Carlos Soler
Odriozola
M. Almirón
Welington Dano
Everton Andrão
Oyarzabal
F. Balbuena
M. Marega
B. Pavard
W. Ndidi
A. Onana
G. Lo Celso
M. Acuña
Rúben Neves
Mariano
Raúl
M. Caldara
M. Vecino
T. Bakayoko
M. Dahoud
Rafa
K. Baldé
G. Rulli
F. Armani
Rony Lopes
Santi Mina
K. Demirbay
Gayà
André Gomes
N. Tagliafico
M. Sanson
Pacheco
E. Can
H. Çalhanoğlu
M. Ginter
M. Keane
L. Paredes
T. Stepanenko
L. Shaw
Z. Feddal
S. Haller
Bernard
T. Inui
Portu
M. Batshuayi
E. Zahavi
T. Vaclík
N. Pope
Héctor Bellerín
P. Kadeřábek
J. Butland
J. Vestergaard
J. Tarkowski
Deulofeu
E. Dier
J. Murillo
M. Badelj
Ismaily
N. Schulz
L. Digne
M. Uth
Cristian Tello
D. Vida
L. Muriel
V. Aboubakar
A. Oxlade-Chamberlain
S. Aurier
J. Matip
Y. Rakitskyi
Sergi Enrich
A. Yarmolenko
Hugo Mallo
André Almeida
D. Didavi
R. Rodríguez
R. Pereyra
Mario Gaspar
Maicon
D. Blind
J. Zoet
A. Ljajić
Canales
Iago Falqué
L. de Jong
Guaita
Muniain
Susaeta
S. Rudy
K. Trapp
V. Wanyama
N. Nkoulou
R. Boudebouz
Camacho
S. Ulreich
M. Musacchio
C. Stuani
P. Gulácsi
Bruno
F. Delph
A. Lallana
Marcelo
S. Coleman
Alexandre Pato
Antunes
Nacho Monreal
Beñat
A. Fernández
K. Gameiro
I. Piatti
V. Birsa
S. Romero
D. Criscito
D. Valeri
D. Sturridge
Raúl García
S. Defour
M. Škrtel
S. Radu
G. Cahill
L. Diarra
L. Perrin
Dante
A. Granqvist
A. Gignac
M. Gómez
I. Akinfeev
I. Denisov
Juanfran
Diego López
Santi Cazorla
Jesús Navas
J. Mascherano
A. Mirante
D. Srna
B. Schweinsteiger
Moyá
W. Rooney
Fernando Torres
S. Sorrentino
V. Tsygankov
Rúben Dias
David Neres
Raphinha
A. Harit
Richarlison
L. Martínez
F. Kessié
Luimo Boas Santos
Gabri Prestão
Melvin Parrela
Antônio Chiamuloira
Maikel Catarino
A. Lunev
André Silva
C. Pulisic
M. Dmitrović
L. Tousart
Marcos Llorente
B. Verbič
S. Bergwijn
A. Diallo
A. Golovin
M. Campaña
C. Pavón
K. Toko-Ekambi
Granell
F. Cervi
J. Weigl
V. Lindelöf
A. Rebić
A. Sanabria
R. Battaglia
M. Philipp
A. Saint-Maximin
D. Zappacosta
L. Alario
D. Benedetto
I. Marcone
J. Gbamin
J. Lerma
Ricardo Horta
R. Zobnin
M. Meyer
Bruma
R. Centurión
Jonny
Otávio
J. Hofmann
N. Aké
J. Hector
S. Kolašinac
G. Pizarro
Roger
Sergio Rico
L. Milivojević
D. Baselli
K. Rekik
Denis Suárez
W. Orban
Mário Rui
Iñigo Martínez
K. Zouma
Roque Mesa
J. Brooks
L. Karius
Zé Luís
D. Klaassen
M. Elyounoussi
L. Bittencourt
Sergi Darder
J. Roussillon
D. Demme
J. Gouweleeuw
M. Rojo
J. Veretout
L. Kurzawa
G. Ramírez
David López
C. Tătăruşanu
A. Mandi
D. Sidibé
Y. Konoplyanka
S. Berghuis
H. Vanaken
Campaña
M. van Ginkel
Nolito
M. Gregoritsch
Ibai Gómez
Danilo
R. Barkley
M. Ryan
Sergio León
B. Stambouli
J. Guilavogui
Sérgio Oliveira
D. Caligiuri
C. Wilson
P. Jones
Borja García
Y. Belhanda
G. Pezzella
Jaume Costa
C. Tosun
Escudero
Kike García
Elkeson
Ricardo Goulart
J. Guðmundsson
N. Clyne
M. Hitz
De Marcos
B. Mee
Rafael
Iborra
J. Wilshere
B. Hübner
Souza
F. Coquelin
Alex Teixeira
A. Dzagoev
I. Smolnikov
Y. M'Vila
K. Asamoah
R. Zieler
D. Drinkwater
N. Kalinić
Mariano
S. Feghouli
Adrien Silva
Fernando
I. Traoré
G. Mercado
N. Petersen
O. Karnezis
M. Sakho
Sidnei
S. Jovetić
Eder
J. Hernández
Fabricio
Kiko Casilla
Ángel
M. Schneiderlin
M. Fellaini
P. Wernbloom
D. Ospina
S. Mignolet
A. Begović
N. Şahin
R. Bertrand
A. Masiello
T. Walcott
Charles
T. Heaton
H. Ben Arfa
D. Abraham
E. Lavezzi
S. Kalou
J. Farfán
R. Babel
A. Young
J. Hart
L. López
D. Baier
B. Yılmaz
R. Adler
S. Lichtsteiner
E. Adebayor
E. Belözoğlu
Loren
Éder Militão
F. Chiesa
M. Lazzari
A. Hakimi
S. Nakajima
L. Jović
S. Ascacíbar
A. Lafont
T. Alexander-Arnold
F. Krovinović
Sidney Pessinho
Everticinho
Claudio Coíntra
Ronaldo Esler
P. Lees-Melou
B. Chilwell
João Novais
D. Calabria
F. Mendy
L. Pellegrini
Soares
Daniel Podence
M. Díaz
G. Martínez
M. Eggestein
Trezeguet
N. Amiri
Vallejo
J. Gomez
Diogo Jota
Joan Jordán
Dyego Sousa
A. Marušić
David Soria
V. Rongier
W. Weghorst
O. Al Soma
M. Nakamba
Petros
Pablo Maffeo
Y. Mina
M. Dúbravka
Diego Carlos
D. Djené
G. Simeone
M. Meza
Bastos
S. Lobotka
Y. Tielemans
Marcelo Goiano
K. Tete
Capa
M. Sportiello
Jemerson
N. Maksimović
D. Zapata
J. Correa
E. Rigoni
C. Izquierdoz
W. Barrios
J. Mojica
A. Selikhov
A. Iwobi
D. Laxalt
N. Bentaleb
N. Stark
M. Lemina
L. Dendoncker
Ricardo Esgaio
P. Sisto
P. Max
R. Gagliardini
Pere Pons
D. Berardi
M. Halstenberg
J. Quintero
Tiago Volpi
Óliver Torres
Omar Mascarell
H. Sakai
Andreas Pereira
A. Januzaj
B. Cristante
Matheus
B. Traoré
Y. Poulsen
L. Trossard
M. Arnold
M. De Sciglio
Leo Baptistao
V. Chiricheş
L. Pavoletti
A. Cragno
L. Castro
N. Füllkrug
F. Fajr
R. Jiménez
E. Sala
S. García
S. Arias
B. Reynet
Pozuelo
A. Trebel
J. Lascelles
T. Kongolo
A. Carrillo
Álvaro
G. Defrel
Fernando
V. Darida
R. Saponara
Pedro Mendes
C. Schindler
N. Chadli
Arbilla
L. Dunk
P. Hernández
J. Guidetti
Sergi Gómez
Oriol Romeu
Lucas Pérez
B. Natcho
Cláudio Ramos
F. Lejeune
G. Krychowiak
N. Lodeiro
O. Özyakup
C. Tévez
K. Papadopoulos
M. Gradel
M. Debuchy
V. Moses
Z. Junuzović
Granero
J. Baumgartlinger
Fábio Coentrão
B. Costil
Hilton
N. Gudelj
L. Pratto
E. Hernández
Jurado
R. Cabella
Rafael Tolói
C. Bravo
Hernanes
K. Honda
A. Dzyuba
J. Holebas
Javi García
Sergio
M. Cáceres
Daniel Carriço
J. Cork
J. Tomkins
Guilherme
Gervinho
J. Shelvey
R. Eremenko
R. Vormer
J. Lens
Adriano
S. Cook
L. Podolski
C. Ansaldi
Manu García
R. Alessandrini
J. Ward-Prowse
M. Harnik
B. Moukandjo
G. Pereiro
G. Castro
Aarón Martín
F. Johnson
L. López
M. Dossevi
Caiuby
Gabriel
Iván Ramis
M. Suchý
T. Vilhena
E. Çolak
V. Germain
G. Hoarau
Sergio García
E. Choupo-Moting
J. Pinola
J. Hendrix
J. Izquierdo
S. Sydorchuk
C. Grenier
T. Strobl
V. Odjidja-Ofoe
N. Guzmán
F. Fabra
J. Maddison
K. El Ahmadi
M. Carcela-González
M. Gabbiadini
Gomes
M. Ritchie
G. Bou
Javi Fuego
E. Akbaba
J. Amavi
R. Malinovskyi
D. Welbeck
G. Conti
Bruno
Garry Rodrigues
A. Schwolow
L. Cook
P. Pérez
Gazzolisco
Jonatan Soriano
Rubén Peña
Mikel San José
P. Groß
L. Baines
A. Ogbonna
Juan Jesus
J. Martínez
N. Elvedi
G. Moreno
J. Valdivia
A. Carroll
Luís Neto
A. Pyatov
T. Gutiérrez
Álex Remiro
Wilson Eduardo
Jorge Meré
M. Elneny
D. Torres
Y. Bounou
A. Prijović
A. Jahanbakhsh
J. Calleri
Simão Acunha
N. Müller
L. Ocampos
J. Rodriguez
V. Ibišević
S. Rondón
Victor Sánchez
D. Suárez
K. Huntelaar
L. Dubois
André Pinto
K. Lala
O. Kıvrak
A. Bertolacci
E. Giaccherini
A. Živković
R. Ábila
P. Diop
D. Garmash
T. Chandler
R. Klavan
A. Miranchuk
D. Da Silva
D. Benaglio
T. Rincón
M. Pereira
C. Borges
J. Sand
Markel Bergara
Vágner Love
B. Bourigeaud
R. Soriano
D. Kuzyaev
R. Sambueza
Montoya`.split('\n')
let guessthefootballerqueue = {}
const guessFootballer = async (api, event)=>{
    footballer = verybiglist[Math.floor(Math.random() * verybiglist.length)];
    guessthefootballerqueue[event.senderID] = footballer;
        let url =  'https://www.google.com/search?as_st=y&tbm=isch&as_q=messi&as_epq=&as_oq=&as_eq=&imgsz=&imgar=&imgc=&imgcolor=&imgtype=&cr=&as_sitesearch=&as_filetype=&tbs='.replace('messi', footballer)
    let response =  await axios.get(url)
    console.log(response.data)
    
// Regular expression to extract URLs from img tags
const imgTagRegex = /<img.*?src=["'](.*?)["'].*?>/g;

// Find all matches in the HTML content
const matches = response.data.match(imgTagRegex);

// Extract the URLs from the matches
const imgUrls = matches.map(match => {
    const srcRegex = /src=["'](.*?)["']/;
    const srcMatch = match.match(srcRegex);
    return srcMatch ? srcMatch[1] : null;
}).filter(url => url !== null);
  
  sendImage.sendImage(api, event, 'https://image.thum.io/get/image/fit/100x100/'+imgUrls)

}

const handleGuessTheFootballer = async (api, event) => {

  if (guessthefootballerqueue[event.senderID] != undefined){

    if (guessthefootballerqueue[event.senderID].toLowerCase().split(' ').includes(event.body.toLowerCase())){
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