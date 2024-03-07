import { LitElement, html, css } from 'lit';

export class LitFooter extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        font-family: Arial, Helvetica, sans-serif;
        color: white;
        background-color: #123a72;
      }

      .footer{
        height: 100px;

      }

      p{
        margin: 0;
        text-align: center;
        line-height: 100px;
      }
    `
  ];

  render() {
    return html`
      <div class="footer">
        <p>Alejandro Javier Peco Romero ©</p>
      </div>
    `;
  }
}
customElements.define('lit-footer', LitFooter);
