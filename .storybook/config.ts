import { configure, addParameters, addDecorator } from '@storybook/react';
import { create } from '@storybook/theming';
import { withInfo } from '@storybook/addon-info';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /button\.stories\.tsx?$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(withInfo);

addParameters({
  options: {
    hierarchyRootSeparator: /\s*\|\s*/,
    theme: create({
      base: 'light',
      colorPrimary: '#1665d8',
      colorSecondary: '#1665d8',
      brandTitle: 'JIMU',
    })
  },
  info: {
    inline: true,
    header: false,
  }
});

configure(loadStories, module);