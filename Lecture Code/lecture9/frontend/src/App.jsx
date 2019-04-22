import React from 'react';
import BadMessageComponent1 from './BadMessageComponent1';
import BadMessageComponent2 from './BadMessageComponent2';
import LiftingStateUp from './LiftingStateUp';
import MessagesComposition from './MessagesComposition';
import Tabs from './Tabs';

const tabs = [
  { name: 'D1: Bad Message Component 1', component: BadMessageComponent1 },
  { name: 'D1: Bad Message Component 2', component: BadMessageComponent2 },
  { name: 'D1: Lifting State Up', component: LiftingStateUp },
  { name: 'D2: Messages Composition', component: MessagesComposition },
]

export default () => <Tabs tabs={tabs} />;
