import games from './games.js';
import data from './data.js';
import { Quiz } from './quiz.js';
import { UI } from './ui.js';

class game {

  constructor(){
     this.root = document.getElementById("root");
     this.door = document.getElementById("door");
     this.puerta = document.getElementById("puertas");
     this.curtainContainer= document.getElementById("curtainContainer");
     
    /*this.backgroundStart = document.createElement("div");
     this.backgroundStart.className = "background-start"; 
     this.title = document.createElement("h1");
     this.title.innerHTML = "FIVE FINANCE THINKERS"
     this.root.appendChild(this.title);
     this.title.classList.add("principalTitle");
     this.container = document.createElement("div");
     this.carousel = document.createElement("div");
     this.root.appendChild(this.container);
     this.container.appendChild(this.carousel);
    */
     
    }

    selectDoor(){

       const opened = this.dardos.bind(this)

        this.door.addEventListener("click", opened);
        
       
    }

    dardos(){
      this.open();
     this.botonInicio= document.getElementById("botonInicio");
      const StartGameDardo = this.StartGameDardos.bind(this)
      this.botonInicio.addEventListener("click", function(e){
        e.preventDefault();
        StartGameDardo()
      });
    }

    open(){

     this.curtain= document.getElementById("curtain");
     this.curtain.style.animationName="wepaje";
     
     setTimeout(function(){
        this.curtain.style.animationName="none";
        this.title= document.getElementById("principalTitle").style.display="none";
        this.container = document.getElementById("carousel__container").style.display="none";
     }, 5000)

     setTimeout(function(){
      
      this.curtainContainer.style.height= "110vh";
      this.curtainRight = document.getElementById("curtainRight");
      this.curtainLeft = document.getElementById("curtainLeft");
      this.curtainRight.style.width= "50%"
      this.curtainLeft.style.width= "50%";
      this.curtainRight.style.animationName="toLeft"
      this.curtainLeft.style.animationName="toRight"
      this.root.style.backgroundImage= "url(../img/background.png)";
     
   }, 5100)

   setTimeout(function(){
    this.curtainContainer.style.display= "none";
    this.carpa = document.getElementById("carpa");
    this.presentador =document.getElementById("presentador");
    this.tiroDardos = document.getElementById("tiroDardos");
    this.botonInicio = document.getElementById("botonInicio");
    this.tresGlobos = document.getElementById("tresglobos");
    this.dardo = document.getElementById("dardo");
    this.dardo.style.height = "350px";
    this.carpa.style.height= "150px";
    this.presentador.style.height = "500px";
    this.botonInicio.style.height = "200px";
    this.tiroDardos.style.height = "300px"; 
    this.tresGlobos.style.height = "300px";

   },10100)

    }

    StartGameDardos(){
      this.presentador =document.getElementById("presentador");
      this.tiroDardos = document.getElementById("tiroDardos");
      this.botonInicio = document.getElementById("botonInicio");
      this.tresGlobos = document.getElementById("tresglobos");
      this.dardo = document.getElementById("dardo");
      this.dardo.style.height = "0";
      this.presentador.style.height = "0";
      this.botonInicio.style.height = "0";
      this.tiroDardos.style.height = "0"; 
      this.tresGlobos.style.height = "0";
     this.tablero =  document.getElementById("tablero");
     this.tableroPremios = document.getElementById("premios");
     this.contenedorJuegoDardos = document.getElementById("contenedorJuegoDardos");
     
     this.contenedorJuegoDardos.style.height = "500px";
     this.tablero.style.height = "400px";
     this.tableroPremios.style.height = "100px";
      const globos = [
      {
        name: "Globo",
        color: "Azul",
        img: "../img/globoazul.png"
      },
      {
        name: "Globo",
        color: "Purpura",
        img: "../img/globopurpura.png"
      },
      {
        name: "Globo",
        color: "Verde",
        img: "../img/globoverde.png"
      },

      {
        name: "Globo",
        color: "Rojo",
        img: "../img/globorojo.png"
      },
      {
        name: "Globo",
        color: "Azul",
        img: "../img/globoazul.png"
      },
      {
        name: "Globo",
        color: "Purpura",
        img: "../img/globopurpura.png"
      },

      {
        name: "Globo",
        color: "Verde",
        img: "../img/globoverde.png"
      },

      {
        name: "Globo",
        color: "Rojo",
        img: "../img/globorojo.png"
      },
      {
        name: "Globo",
        color: "Azul",
        img: "../img/globoazul.png"
      },
      {
        name: "Globo",
        color: "Purpura",
        img: "../img/globopurpura.png"
      },

      {
        name: "Globo",
        color: "Verde",
        img: "../img/globoverde.png"
      },

      {
        name: "Globo",
        color: "Rojo",
        img: "../img/globorojo.png"
      },
      {
        name: "Globo",
        color: "Azul",
        img: "../img/globoazul.png"
      },
      {
        name: "Globo",
        color: "Purpura",
        img: "../img/globopurpura.png"
      },

      {
        name: "Globo",
        color: "Verde",
        img: "../img/globoverde.png"
      },

      {
        name: "Globo",
        color: "Rojo",
        img: "../img/globorojo.png"
      },
      {
        name: "Globo",
        color: "Azul",
        img: "../img/globoazul.png"
      },
      {
        name: "Globo",
        color: "Purpura",
        img: "../img/globopurpura.png"
      },

      {
        name: "Globo",
        color: "Verde",
        img: "../img/globoverde.png"
      },

      {
        name: "Globo",
        color: "Rojo",
        img: "../img/globorojo.png"
      },
      {
        name: "Globo",
        color: "Azul",
        img: "../img/globoazul.png"
      },
      {
        name: "Globo",
        color: "Purpura",
        img: "../img/globopurpura.png"
      },

      {
        name: "Globo",
        color: "Verde",
        img: "../img/globoverde.png"
      },

      {
        name: "Globo",
        color: "Rojo",
        img: "../img/globorojo.png"
      },
      {
        name: "Globo",
        color: "Azul",
        img: "../img/globoazul.png"
      },
      {
        name: "Globo",
        color: "Purpura",
        img: "../img/globopurpura.png"
      },

      {
        name: "Globo",
        color: "Verde",
        img: "../img/globoverde.png"
      },

      {
        name: "Globo",
        color: "Rojo",
        img: "../img/globorojo.png"
      },
      {
        name: "Globo",
        color: "Azul",
        img: "../img/globoazul.png"
      },
      {
        name: "Globo",
        color: "Purpura",
        img: "../img/globopurpura.png"
      },

      {
        name: "Globo",
        color: "Verde",
        img: "../img/globoverde.png"
      },

      {
        name: "Globo",
        color: "Rojo",
        img: "../img/globorojo.png"
      }
    
    ]

    const premios = [
    {
      name:"Dado",
      img: "../img/premio1.png",
    },
    {
      name:"Osito morado",
      img: "../img/premio2.png",
    },
    {
      name:"Conejo con bufanda",
      img: "../img/premio3.png",
    },
    {
      name:"Pelota sonriente",
      img: "../img/premio4.png",
    },
    {
      name:"Jirafa",
      img: "../img/premio5.png",
    },
    {
      name:"Cerdito",
      img: "../img/premio6.png",
    },
    {
      name:"Perro robot",
      img: "../img/premio7.png",
    },
    {
      name:"Pollito",
      img: "../img/premio8.png",
    },
    {
      name:"Dragon",
      img: "../img/premio9.png",
    },
    {
      name:"Tigre",
      img: "../img/premio10.png",
    }

  ]
    const preguntas = [
      {
        name: "Pregunta 1",
        img: "../img/pregunta1.png"
      },
      {
        name: "Pregunta 2",
        img: "../img/pregunta2.png"
      },
      {
        name: "Pregunta 3",
        img: "../img/pregunta3.png"
      },
      {
        name: "Preguntas 4",
        img: "../img/pregunta4.png"
      },
      {
        name: "Preguntas 5",
        img: "../img/pregunta5.png"
      },
      {
        name: "Preguntas 6",
        img: "../img/pregunta6.png"
      },
      {
        name: "Preguntas 7",
        img: "../img/pregunta7.png"
      },
      {
        name: "Preguntas 8",
        img: "../img/pregunta8.png"
      },
      {
        name: "Preguntas 9",
        img: "../img/pregunta9.png"
      },
      {
        name: "Preguntas 10",
        img: "../img/pregunta10.png"
      },
    ]
  
  globos.sort(
   ()=> Math.random() - 0.5
  )

  console.log(globos)
  for (var i = 0; i < globos.length; i++) {
   const globoImg = document.createElement("img")

   globoImg.setAttribute("src", globos[i].img)
   globoImg.setAttribute("data-id", i)
   this.tablero.appendChild(globoImg)
   globoImg.setAttribute("class", "globo")
   globoImg.addEventListener("click", this.tiroDardo)
  /* console.log(globoImg)*/


  }

  for (i = 0; i < premios.length; i++){
    const premiosImg = document.createElement("img");
    premiosImg.setAttribute("src", premios[i].img)
    premiosImg.setAttribute("data-id", i)
    this.tableroPremios.appendChild(premiosImg)
  }

      
    }

    tiroDardo (){
    let globoId = this.getAttribute("data-id");
    const numeroAleatorio = Math.floor(Math.random() * (globoId - 0 + 1) + 0);
    const preguntas = [
      {
        name: "Pregunta 1",
        img: "../img/pregunta1.png"
      },
      {
        name: "Pregunta 2",
        img: "../img/pregunta2.png"
      },
      {
        name: "Pregunta 3",
        img: "../img/pregunta3.png"
      },
      {
        name: "Preguntas 4",
        img: "../img/pregunta4.png"
      },
      {
        name: "Preguntas 5",
        img: "../img/pregunta5.png"
      },
      {
        name: "Preguntas 6",
        img: "../img/pregunta6.png"
      },
      {
        name: "Preguntas 7",
        img: "../img/pregunta7.png"
      },
      {
        name: "Preguntas 8",
        img: "../img/pregunta8.png"
      },
      {
        name: "Preguntas 9",
        img: "../img/pregunta9.png"
      },
      {
        name: "Preguntas 10",
        img: "../img/pregunta10.png"
      },
    ]
  
    console.log("clicked", globoId, numeroAleatorio);
    
    this.setAttribute("class", "pinchado")
 

    this.style.animation = "explosion 0.5 linear"
    if(preguntas[globoId]){
      this.setAttribute("src", preguntas[globoId].img);
      this.tableroPreguntas = document.getElementById("preguntas")
      this.addEventListener("click",function(){
        this.preguntas = document.getElementById("preguntas");
     this.preguntas.style.height = "500px";
     this.preguntas.style.padding ="50px"
      const quiz = new Quiz(data)
      const ui = new UI();
      ui.showQuestion(quiz.getQuestionIndex().text);
      ui.showChoices(quiz.getQuestionIndex().choices,(currentChoices)=>{
        quiz.guess(currentchoices)
      } )
      }
      );
    }
    else{
      this.style.display = "none"
    }
    

    }


    
    



}


let juego = new game();

juego.selectDoor()


