import React from 'react';
import {storiesOf} from '@storybook/react';

storiesOf('Typography', module)
    // .addDecorator(storyFn => <div style={{ padding: "0 40px" }}>{storyFn()}</div>)
    .add('Headings', () => <>
      <h1>Heading level 1 example</h1>
      <h2>Heading level 2 example</h2>
      <h3>Heading level 3 example</h3>
      <h4>Heading level 4 example</h4>
      <h5>Heading level 5 example</h5>
      <h6>Heading level 6 example</h6>
    </>)

    .add('Font style',() => <>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        At dolorem ducimus ea exercitationem maxime minus molestias mollitia nihil nobis, officia,
        temporibus veniam voluptate voluptates! Alias deleniti et eum iusto quae.
      </span><br/>
      <strong>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        At dolorem ducimus ea exercitationem maxime minus molestias mollitia nihil nobis, officia,
        temporibus veniam voluptate voluptates! Alias deleniti et eum iusto quae.
      </strong><br/>
      <em>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        At dolorem ducimus ea exercitationem maxime minus molestias mollitia nihil nobis, officia,
        temporibus veniam voluptate voluptates! Alias deleniti et eum iusto quae.
      </em><br/>
      <small>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        At dolorem ducimus ea exercitationem maxime minus molestias mollitia nihil nobis, officia,
        temporibus veniam voluptate voluptates! Alias deleniti et eum iusto quae.
      </small><br/>
    </>);
