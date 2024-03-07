import { LitElement, html, css } from 'lit';

export class LitCalculadora extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                background-color: #307fff40;
                min-height: calc(100vh - 233px);
            }

            .container{
                width: 75%;
                margin: auto;
                padding-top: 30px;
            }

            h1{
                margin: 0;
                color: #123a72;
            }
        `
    ];

    render() {
        return html`
            <div class="container">
                <h1>Calculadora</h1>
            </div>
        `;
    }
}
customElements.define('lit-calculadora', LitCalculadora);
