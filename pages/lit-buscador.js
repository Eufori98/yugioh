import { LitElement, html, css } from 'lit';

export class LitBuscador extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        background-color: #307fff40;
        min-height: calc(100vh - 233px);
      }

      h1{
        margin: 0;
        color: #123a72;
      }

      .container{
        width: 75%;
        margin: auto;
        padding-top: 30px;
      }

      .container_card{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        margin-top: 30px;
      }

      .card{
        width: 350px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;
        font-size: 20px;
        font-weight:100;
        margin-top: 40px;
      }

      .imagen_carta{
        width: 300px;
        cursor: pointer;
        transition: all 1s;
      }

      .imagen_carta:hover{
        transform: scale(1.05);
      }

      

      form{
        margin-top: 15px;
        display: flex;
        flex-direction: row;
      }

      input{
        width: 400px;
        height: 50px;
        font-size: 20px;
        border-radius: 5px 0 0 5px;
        border: 0;
        outline: none;
      }

      button{
        width: 100px;
        font-size: 20px;
        background-color: #123572;
        color: white;
        border-radius: 0 5px 5px 0;
        border: 0px solid #ffffff00;
        cursor: pointer;
      }

      button:active{
        background-color: #164088;
        color: #ffffff;
      }

      .ningunResultado{
        text-align: center;
        font-size: 22px;
        margin-top: 80px;
      }

      @media (max-width: 768px) {
        h1{
          text-align: center;
          margin: 20px 0;
          
        }

        form{
          justify-content: center;
        }

        .container__form{
          text-align: center;
        }
        
        .container{
          width: 90%;
        }
       
      }

      @media (max-width: 375px) {
        form{
          width: 200px;
          margin: auto;
        }
      }
        

    `

  ];

  static get properties() {
    return {
      cartas: { type: Array },
      cartasFiltradas: { type: Array },
    };
  }

  constructor() {
    super();
    this.cartas = [];
    this.cartasFiltradas = [];
    this.array = [];
  }

  firstUpdated() {
    fetch("../cardinfo.php.json")
      .then(res => res.json())
      .then(data => {
        this.cartas = [...data.data];
        console.log(this.cartas)
      })
  }

  render() {
    return html`
      <div class="container">
        <h1>Buscador de cartas</h1>
        <div class="container__form">
          <form >
            <input type="text" placeholder="Nombre de la carta" @input=${(e) => this._buscarCarta(e)}/>
            <button type="button">Buscar</button>
          </form>
        </div>
        ${!this.cartasFiltradas.length ? html`<p class="ningunResultado">No se ha encontrado ningún resultado</p>` : ""}
        <div class="container_card">

          ${this.cartasFiltradas.map(carta =>
      html`
              <div class="card">
                  <app-link href="/carta/${carta.id}">
                    <img class="imagen_carta" src=${carta.card_images[0].image_url}/>
                    <!--<img class="imagen_carta" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/96269ce8-4a07-4702-936a-6860e1b5594f/debylmy-673eeb1e-b695-4758-9fd4-14c896d0fbde.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk2MjY5Y2U4LTRhMDctNDcwMi05MzZhLTY4NjBlMWI1NTk0ZlwvZGVieWxteS02NzNlZWIxZS1iNjk1LTQ3NTgtOWZkNC0xNGM4OTZkMGZiZGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ltBPjI3IDeEXfFhx3l9DS9F5Qu8-crS62-Dp5uwMfEw"/>-->
                  </app-link>
                  <p>${carta.name}</p>

              </div>
            `
    )}
        </div>
      </div>

    `;
  }

  _buscarCarta(e) {
    let nombre = e.target.value.trim();
    this.cartasFiltradas = [...this.cartas.filter(carta => carta.name.toLowerCase().includes(nombre))]
    this.cartasFiltradas = this.cartasFiltradas.splice(0, 15);
    if (nombre == "") {
      this.cartasFiltradas = [];
    }
  }


}
customElements.define('lit-buscador', LitBuscador);
