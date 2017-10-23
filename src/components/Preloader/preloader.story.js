import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Preloader from './index';

storiesOf('Div', module)
  .add('first story', () => (
    <Preloader />
  ))
