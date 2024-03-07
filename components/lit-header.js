import { LitElement, html, css } from 'lit-element';
import "../app-main.js";
import "../app-link.js";

export class LitHeader extends LitElement {

  static styles = [
    css`
      :host {
        display: block;
        font-family: Verdana, sans-serif;
        color: white;
        background-color: #123a72;
      }

      *{
        margin: 0;
        box-sizing: border-box;
      }

      .header{
        padding: 5px 0;
      }

      .nav{
        width: 75%;
        min-height: 120px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .logo{
        width: 120px;
        cursor: pointer;
      }

      .list{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        list-style: none;
        padding: 0;
      }

      li{
        text-decoration: none;
        color: white;
        margin: 0 20px;
        font-size: 20px;
        font-weight: 500;
      }

      @media (max-width: 768px) {
        .nav{
          flex-direction: column;

        }

        .list{
          flex-direction: column;
          margin: 20px 0;
        }

        li{
          margin: 10px 0;
        }
      }


    `
  ];


  render() {
    return html`
      
      <div class="header">
        <div class="nav">
          <app-link href="/">
            <img class="logo" src="../assets/logo.png"/>
          </app-link>
          <ul class="list">
            <app-link href="/">
              <li>Inicio</li>
            </app-link>
            <app-link href="/buscador">
              <li>Buscador de cartas</li>
            </app-link>
            <app-link href="/calculadora">
              <li>Calculadora</li>
            </app-link>
          </ul>
        </div>
  </div>
    `;
  }
}
customElements.define('lit-header', LitHeader);
