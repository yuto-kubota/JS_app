 'use strict';
 {
    const top = document.getElementById('top');
    const Number= document.getElementById('point');
    let currentNumber = 0;
    let num = Math.floor(Math.random()*16);
    Number.textContent = currentNumber;
    let Playing = true;
    let First = true;


//--------------------Panelclass-------------------------------
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
      // console.log(currentNumber);
    }

  }
// ---------------------------------------------------------------

// ---------------------Boardclass--------------------------------
  class Board{
    constructor(){
      this.panels=[];
    }

    setup(){
      for(let i=0; i<48; i++){
        this.panels.push(new Panel());
      }
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

    resetup(){
      const image = document.getElementById('image');
      while (image.firstChild) {
        image.removeChild(image.firstChild);
      }
    }


  }
// -------------------------------------------------------------

// ------------------Btnclass-----------------------------------
   class Btn{
     constructor(i){
       this.el = document.createElement('li');
       this.el.textContent = i+48;
       this.el.addEventListener('click', () => {
         if(i === num){
           if(currentNumber===0){
             alert("天才かよ！？");
           }else if(currentNumber===1){
             alert("ジョジョマニア！");
           }else if(currentNumber<5){
             alert("なかなかいいね〜！");
           }else if(currentNumber<10){
             alert("普通だね〜！");
           }else{
             alert("もっと漫画を読み込もう！");
           }
         }else{
           alert("間違ってるぞ！！");
         }
        // top.textContent = "クリックしてリプレイ";
        Playing = false;

       });
     }
     getEl(){
       return this.el;
     }

   }

 // -----------------------------------------------------------

// --------------------Btnboard--------------------------------
   class Btnboard{
     constructor(){
       this.btns=[];
       for(let i=0; i<16; i++){
         this.btns.push(new Btn(i));
       }
       this.setup();
     }

     setup(){
       const btnboard = document.getElementById('btn');
       this.btns.forEach(btn => {
         btnboard.appendChild(btn.getEl());

       });
     }
   }

// 終わった後-------------------------------------------------------------

  window.addEventListener('click', () => {
      if(Playing === true){
        return;
      }
      Playing = true;
      currentNumber = 0;
      num = Math.floor(Math.random()*16);
      top.textContent = "JOJO";
      board.resetup();
      board.panels.forEach(panel => {
        panel.getEl().style.background = "white";
      });
      board.imgup();
      Number.textContent = currentNumber;
    });
 　
     const btnboard = new Btnboard();
     const board = new Board();
     board.setup();
     board.imgup();


 }
