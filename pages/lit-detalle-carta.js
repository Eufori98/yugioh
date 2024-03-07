import { LitElement, html, css } from 'lit';
import { router } from 'lit-element-router';

export class LitDetalleCarta extends router(LitElement) {
  static styles = [
    css`
        :host {
          display: flex;
          align-items: center;
          background-color: #cadffb;
          /*background-color: #f0f8ff;*/
          min-height: calc(100vh - 233px);
        }

        *{
          margin: 0;
        }

        .container{
          width: 75%;
          margin: auto;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }

        .card{
          width: 80%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
          overflow: hidden;
          padding: 20px;
          background-color: #307fff25;
          border-radius: 8px;
          margin-top: 30px;
        }

        .imagen_carta{
          max-width: 300px;
          object-fit: contain;
          flex: auto;
          
         
        }

        .card__info{
          width: 60%; 
          padding: 0 50px;
          
          flex: auto;
        }

        .card__info{
          padding: 0 50px;
        }

        .card__info > *{
          margin: 10px 0;
        }

        h1 {
          font-size: 36px;
        }

        .estadistica{
          font-size: 24px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .tipo{
          font-size: 22px;
        }

        .efecto{
          font-size: 20px;
          overflow: auto;
          line-height: 1.5;
        }

       
        .container__tabla{
          width: 100%;
          margin: 70px 0;
        }

        .container__tabla {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          font-size: 20px;
        }

        .columna {
          width: 100%;
          max-width: 300px; /* Ajusta el ancho máximo según tus necesidades */
          text-align: center;
          margin-bottom: 20px; /* Espacio entre columnas */
          
        }

        .imagen_logo {
          max-width: 200px;
          height: auto;
          margin-bottom: 10px; /* Espacio entre la imagen y el precio */
        }

        .fila_precio{
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @media (max-width: 768px) { /* Cambio de diseño en pantallas más pequeñas */
          .card{
            width: 100%;
          } 

          .imagen_carta{
            width: 100%;
          }

          .card__info{
            padding: 50px 0;
          }

          .card__info h1{
            font-size: 28px;
            text-align: center;
          }

          .card__info .estadistica{
            font-size: 20px;
            align-items: center;
            justify-content: center;
          }

          .card__info .tipo{
            font-size: 18px;
            text-align: center;
          }

          .card__info .efecto{
            font-size: 20px;
            
          }

         
        }
    `
  ];

  static get properties() {
    return {
      carta: { type: Object },
      idCarta: { type: Number },
      loaded: { type: Boolean }
    };
  }

  firstUpdated() {
    fetch("../cardinfo.php.json")
      .then(res => res.json())
      .then(data => {
        this.carta = data.data.filter(carta => carta.id == this.idCarta)[0];
        this.loaded = true;
        console.log(this.carta)
      })

  }

  constructor() {
    super();
    this.carta = {};
    this.loaded = false;
  }

  render() {
    return html`
      <div class="container">
        <div class="card">
          
          ${this.loaded ? html `<img class="imagen_carta" src=${this.carta.card_images[0].image_url}/>` : html `<img class="imagen_carta" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/96269ce8-4a07-4702-936a-6860e1b5594f/debylmy-673eeb1e-b695-4758-9fd4-14c896d0fbde.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk2MjY5Y2U4LTRhMDctNDcwMi05MzZhLTY4NjBlMWI1NTk0ZlwvZGVieWxteS02NzNlZWIxZS1iNjk1LTQ3NTgtOWZkNC0xNGM4OTZkMGZiZGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ltBPjI3IDeEXfFhx3l9DS9F5Qu8-crS62-Dp5uwMfEw" alt="Carta de Yu-Gi-Oh">`}
          
          <div class="card__info">
            <h1>${this.carta.name}</h1>
            ${this.carta.type != "Spell Card" && this.carta.type != "Trap Card" && this.carta.type != "Skill Card" ? 
              html `
                <div class="estadistica">
                  <p>ATK ${this.carta.atk}</p>
                  ${this.carta.type != "Link Monster" ? 
                    html `
                      <p>DEF ${this.carta.def}</p>
                  ` : ""}  
                  
                </div>
              ` : ""}  
            <p class="tipo">${this.carta.type}</p>
            <p class="efecto">${this.carta.desc}</p>
          </div>
        </div>
        <div class="container__tabla">
          <div class="columna">
            <img class="imagen_logo" src="https://static.cardmarket.com/img/75b96e78c35ea027396cde754c99f595/Downloads/Logos/CardmarketLogoBlue1.png"/>
            <div class="fila_precio">
              <div class="f__precio">$10</div>
            </div>
          </div>
          <div class="columna">
            <img class="imagen_logo" src="https://mp-assets.tcgplayer.com/img/TCGplayer-logo-primary@2x.png"/>
            <div class="fila_precio">
              <div class="f__precio">$11</div>
            </div>
          </div>
          <div class="columna">
            <img class="imagen_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2560px-EBay_logo.svg.png"/>
            <div class="fila_precio">
              <div class="f__precio">$12</div>
            </div>
          </div>
          <div class="columna">
            <img class="imagen_logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"/>
            <div class="fila_precio">
              <div class="f__precio">$13</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('lit-detalle-carta', LitDetalleCarta);

