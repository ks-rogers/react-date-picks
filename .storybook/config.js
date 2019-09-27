
import { configure, addDecorator } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import { withOptions } from '@storybook/addon-options';
import withSource from 'storybook-addon-source';

function loadStories() {
  require('/Users/shuheitagawa/ksrogers/react-date-picks/.storybook/index.js');
}

addDecorator(withNotes);
addDecorator(withSource);

addDecorator(
  withOptions({
    name: 'react-date-picks',
    url: 'http://github.com/buraburaInc',
    title:'react-date-picks'
  })
);

configure(loadStories, module);