import { LitElement, html, css } from 'lit';

export class LitInicio extends LitElement {
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
      }

      h1{
        color: #123a72;
        margin: 0;
        text-align: center;
      }

      .main{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 50px;
      }

      .container__logo{
        width: 300px;
      }

      .img__logo{
        width: 100%;
        max-width: 300px;
      }

      .container__info{
        
        margin: 20px 70px;
        font-size: 22px;
        text-align: center;
      }

      .container__info > * {
        margin: 20px 0;
      }

      .container__info p {
        line-height: 1.5;
      }

      button{
        width: 250px;
        background-color: #123a72;
        color: white;
        font-size: 18px;
        padding: 15px;
        border-radius: 8px;
        cursor: pointer;
        border: none;
      }

      .separador{
        margin: 50px 0;
        border: 1px solid #123a72;
      }

      .titulo__seccion{
        text-align: center;
      }

      .container__secciones{
        padding: 40px 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      }

      .container__secciones p{
        text-align: center;
        font-size: 24px;
        font-weight: 300;
        margin: 0;
        padding-bottom: 15px;
        color: black;
      }

      .container__seccion .img__secciones{
        width: 400px;
        height: 300px;
        transition: all 0.5s;
      }

      .container__seccion:hover .img__secciones{
        transform: scale(1.1);
      }

      .container__seccion{
        transition: all 0.5s;
        border-radius: 8px;
        cursor: pointer;
      }

      .container__seccion:hover{
        background-color: #307fff40;
      }

      @media (max-width: 768px) {

        .container__info{  
          margin: 20px 0;      
          width: 100%;
          font-size: 20px;
        }

        button{
          width: 90%;
        }

        .container__seccion .img__secciones{
          width: 300px;
          height: 200px;        
        }
      }


  `
  ];

  static get properties() {
    return {

    };
  }

  constructor() {
    super();

  }

  render() {
    return html`
      <div class="container">

        <div class="main">
          
          <img class="img__logo" src="../assets/logo-fondo.png"/>
         
          <div class="container__info">
            <h1>El sitio web basado en Yu-Gi-Oh</h1>
            <p>Usa la base de datos para buscar cualquier carta que exista de Yu-Gi-Oh</p>
            <app-link href="/buscador">
              <button>Buscar</button>
            </app-link>
          </div>
          
        </div>
        <hr class="separador"/>
        <h1 class="titulo__seccion">¿Que puedes encontrar?</h1>
        <div class="container__secciones">
          <div class="container__seccion">
            <app-link href="/buscador">
              <img class="img__secciones" src="../assets/img-lupa.png"/>
              <p>Buscador</p>
            </app-link>
          </div>
          <div class="container__seccion">
            <app-link href="/calculadora">
              <img class="img__secciones" src="../assets/img-calculadora.png"/>
              <p>Calculadora</p>
            </app-link>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('lit-inicio', LitInicio);
