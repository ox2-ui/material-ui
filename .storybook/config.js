import { configure } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
import '@ox2/css-font-roboto-condensed';
import '@ox2/css-font-roboto';

const req = require.context('../src/', true, /.story\.js$/);

function loadStories() {
  req.keys().forEach(req);
}

// Custom storybook options
setOptions({
  name: 'material-ui',
});


configure(loadStories, module);
