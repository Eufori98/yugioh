import { LitElement, html, css } from 'lit';
import "../components/lit-header";
import "../components/lit-footer";
import "../pages/lit-inicio";
import "../pages/lit-buscador";
import "../pages/lit-detalle-carta";
import "../pages/lit-calculadora";
import { router } from 'lit-element-router';

class YugiohWeb extends router(LitElement) {

  static styles = css`
    :host {
      display: block;
      font-family: Verdana, sans-serif;
    }

  `;

  static properties = {
    route: { type: String },
    params: { type: Object },
    query: { type: Object },

  }

  static get routes() {
    return [{
      name: 'home',
      pattern: '',
      data: { title: 'Home' }
    }, {
      name: 'buscador',
      pattern: 'buscador'
    }, {
      name: 'carta',
      pattern: 'carta/:id'
    }, {
      name: 'calculadora',
      pattern: 'calculadora'
    }, {
      name: 'not-found',
      pattern: '*'
    }];
  }

  constructor() {
    super();
    this.route = '';
    this.params = {};
    this.query = {};

  }

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
  }


  render() {
    return html`
    <div class="container">
      <lit-header></lit-header>
      ${this.route == "home" ? html` <lit-inicio route="home"></lit-inicio>` : ""}
      ${this.route == "buscador" ? html` <lit-buscador route="buscador"></lit-buscador>` : ""}
      ${this.route == "carta" ? html` <lit-detalle-carta route="carta" .idCarta=${this.params.id}></lit-detalle-carta>` : ""}
      ${this.route == "calculadora" ? html` <lit-calculadora route="calculadora"></lit-calculadora>` : ""}
      <lit-footer></lit-footer>
    </div>
    `;
  }
}

customElements.define('yugioh-web', YugiohWeb);
