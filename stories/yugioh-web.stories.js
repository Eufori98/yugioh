import { html } from 'lit';
import '../src/yugioh-web.js';

export default {
  title: 'YugiohWeb',
  component: 'yugioh-web',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <yugioh-web
      style="--yugioh-web-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </yugioh-web>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
