import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const PermContactCalendarPath = () => [
  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z" key='path0' />,
];

const PermContactCalendarIcon = styled(Icon).attrs({
  children: PermContactCalendarPath,
})``;

export default PermContactCalendarPath;
export { PermContactCalendarIcon };
