import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const PauseCircleFilledPath = () => [
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" key='path0' />,
];

const PauseCircleFilledIcon = styled(Icon).attrs({
  children: PauseCircleFilledPath,
})``;

export default PauseCircleFilledPath;
export { PauseCircleFilledIcon };
