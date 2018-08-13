import React from 'react';
// import styled from 'react-emotion';
import { storiesOf } from '@storybook/react';

import { Tree, Container, TreeState, Leaf } from './treeview';

import { mockdata } from './treeview.mockdata';

const CustomLeaf = p => <Leaf {...p} name={`! ${p.name}`} />;
CustomLeaf.displayName = 'CustomLeaf';

storiesOf('Components|Treeview', module)
  .add('stateless', () => (
    <Container>
      <Tree prefix="stateless" dataset={mockdata.input} />
    </Container>
  ))
  .add('stateful', () => (
    <Container>
      <TreeState prefix="stateful" dataset={mockdata.input} />
    </Container>
  ))
  .add('with custom node', () => (
    <Container>
      <TreeState prefix="stateful" dataset={mockdata.input} LeafNode={CustomLeaf} />
    </Container>
  ));