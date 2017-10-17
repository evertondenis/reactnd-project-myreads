import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Foo from './index';

storiesOf('Div', module)
  .add('first story', () => (
    <Foo />
  ))
