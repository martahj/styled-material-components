import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const CallSplitPath = () => [
  <path d="M14 4l2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10V4zm-4 0H4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3z" key='path0' />,
];

const CallSplitIcon = styled(Icon).attrs({
  children: CallSplitPath,
})``;

export default CallSplitPath;
export { CallSplitIcon };
