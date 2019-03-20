import React from 'react';
import { hpe } from 'grommet-theme-hpe';
import { Grommet } from '../src/js/components/Grommet';

export default function UXPinWrapper({children}) {
  return(
    <Grommet theme={hpe}>
       {children}
    </Grommet>
  )
}