import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const ChevronLeftPath = () => [
  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" key='path0' />,
];

const ChevronLeftIcon = styled(Icon).attrs({
  children: ChevronLeftPath,
})``;

export default ChevronLeftPath;
export { ChevronLeftIcon };
