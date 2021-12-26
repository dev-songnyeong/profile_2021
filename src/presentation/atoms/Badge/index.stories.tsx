/**
 * @copyright Copyright 2020 Corretto, Inc. All rights reserved.
 */

'use strict';
import { FC } from 'react';

import Badge from './index';

export default {
  title: 'Atoms/Badge',
  component: Badge,
};

export const Basic: FC = () => {
  return <Badge label="3성급" badgeType="black" />;
};
