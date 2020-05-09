'use strict';
{

    const Number= document.getElementById('point');
    let currentNumber = 0;

    const num = Math.floor(Math.random()*16);





  class Panel{
    constructor(){
      this.el = document.createElement('li');
      this.el.addEventListener('click', () => {
         if(this.el.style.background === "rgba(255, 255, 255, 0)"){
           return;
         }
        this.check();

      });
    }
    getEl(){
      return this.el;
    }

    check(){
      this.el.style.background = "rgba(255, 255, 255, 0)";
      currentNumber++;
      Number.textContent = currentNumber;
      console.log(currentNumber);
    }

  }



  class Board{
    constructor(){
      this.panels=[];
      for(let i=0; i<48; i++){
        this.panels.push(new Panel());
      }
      this.setup();
      this.imgup();

    }
    setup(){
      const board = document.getElementById('board');
      this.panels.forEach(panel => {
        board.appendChild(panel.getEl());
      });
    }

    imgup(){
      const image = document.getElementById('image');
      this.img = document.createElement('img');
      this.img.src = `images2/jojo${num}.jpg`;
      this.img.style.cssText = "width: 300px; height: 400px;";
      image.appendChild(this.img);
    }
  }
  const board = new Board();
}
