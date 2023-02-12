import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

export class MyCard extends LitElement {
  static get properties() {
    return {
      title: { type: String },
//<------------JS-CUTOFF---------------------------------------------------------------------------------------------------------> 
/*
      this.shadowRoot.querySelector('#Duplicate').addEventListener('click', function() {
        const node1 = document.getElementById("card1");
        let node2 = node1.cloneNode(true);                             
        document.body.appendChild(node2);         
      });
       
      this.shadowRoot.querySelector('#Color').addEventListener('click', function() {
        if (document.getElementById("card1").className == "card")
          document.getElementById("card1").className = "alt";
        else
          document.getElementById("card1").className = "card";
      });
      
      this.shadowRoot.querySelector('#Header').onclick = function() {
        if (document.getElementById('header1').innerHTML == 'Team Fortress 2 Pyroland')
          document.getElementById('header1').innerHTML = 'Sussy amogus';
        else
          document.getElementById('header1').innerHTML = 'Team Fortress 2 Pyroland';
      };
      
      this.shadowRoot.querySelector('#Delete').addEventListener('click', function() {
        const list1 = [];
        var onetime = false;
        document.querySelectorAll('.card').forEach((item, index) => {
          list1.push(index);
          if (list1.length != 1 && onetime === false) {
            item.remove();
            onetime = true;
          }
        });
      });
      
      
      this.shadowRoot.querySelector('#Details').addEventListener('click', function() {
        if (document.getElementById('bod1').style.visibility == 'hidden') 
        {
          document.getElementById('bod1').style.visibility = 'visible';
          document.getElementById('bod2').style.visibility = 'visible'; 
        }
        else
          {
          document.getElementById('bod1').style.visibility = 'hidden';
          document.getElementById('bod2').style.visibility = 'hidden'; 
          }
      });
*/
    //<------------JS-CUTOFF---------------------------------------------------------------------------------------------------------> 
    };
  }

  static get styles() {
    return css`
    .alt {
      width: 500px;
      height: 565px;
      border: 14px solid #72fc79;
      background-color: cyan;
      text-align: center;
      border-radius: 20px;
      margin: auto;
    }
    .topbuttons {
      display: block;
      text-align: center;
    }
    
    button {
      font-size: 24px;
      margin-top: 12px;
      margin-bottom: 12px;
      background-color: #94FEFB;
      font-family: "Monaco", Monospace;
      border: 4px solid pink;
      border-radius: 20px;
    }
    
    /*BELOW IS ALL ORIGINAL CARD SPACE*/
    
    .card {
      width: 500px;
      height: 565px;
      border: 14px solid pink;
      background-color: #FB94FE;
      text-align: center;
      border-radius: 20px;
      margin: auto;
    }
    
    .header {
      color: #94FEFB;
      font-family: "Lucida Console", monospace;
      font-size: 30px;
      border: 2px solid;
      border-radius: 16px;
      Margin: 16px;
      padding: 8px;
      background-color: #ff66cc;
    }
    
    .bod {
      color: blue;
      font-family: "Monaco", Monospace;
      font-size: 20px;
      margin-left: 8px;
      margin-right: 8px;
      visibility: hidden;
    }
    
    .img {
      width: 460px;
      height: 250px;
      border: 2px inset #94FEFB;
      padding: 8px;
      background-color: #ff66cc;
      border-radius: 20px;
    }
    
    .button {
      background-color: hotpink;
      color: #94FEFB;
      padding: 8px;
      border: 2px dashed #94FEFB;
      font-family: "Monaco", Monospace;
      visibility: hidden;
      border-radius: 24px;
      margin-top: 0px;
      font-size: 20px;
    }
    .button:hover,
    .button:focus,
    .topbuttons button:hover,
    .topbuttons button:focus {
      color: hotpink;
      background-color: #94FEFB;
    }
    .button:active,
    .topbuttons button:active {
      color: #94FEFB;
      background-color: #ec72fc
    }
    
    @media screen and (max-width: 800px) and (min-width: 500px) {
      .button {
        visibility: visible;
      }
    }
    
    @media screen and (max-width: 500px) {
      .card {
        width: auto;
        height: auto;
      }
      .img {
        width: 90%;
        height: auto;
      }
      .header{
        font-size: 4vw;
      }
      .bod {
        font-size: 4vw;
      }
    }
    `;
  }

  constructor() {
    super();
    this.title = 'My app';
  }
  //<------------JS-CUTOFF--------------------------------------------------------------------------------------------------------->  
  /*

  */
//<------------JS-CUTOFF--------------------------------------------------------------------------------------------------------->  

  render() {
    return html`
    <!-- Allen's buttons-->
    <div class="topbuttons">
      <button id="Duplicate">New duplicate</button>
      <button id="Color">Toggle color</button>
      <button id="Header">Change heading</button>
      <button id="Delete">Delete 1 card</button>
    </div>
    <!-- Allen's Card-->
      <div id="card1" class="card">
      <p id="header1" class="header">Team Fortress 2 Pyroland</p>
      <p id="bod1" class="bod">This is a screenshot from a 3D rendered animation posted to Youtube by Valve Corporation to promote the video-game Team Fortress 2</p>
      <p id="bod2" class="bod">The video is called "Meet the Pyro"</p>
      <img class="img" src="https://images.gamebanana.com/img/ss/mods/54f8f277e231a.webp" alt="">
      <button id="Details" class="button">Details</button>
      </div>
    <!-- End of Allen's cards-->
    `;
  }
}
