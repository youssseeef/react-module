import React from 'react';
import GlobalNavigation from '@atlaskit/global-navigation';
import { MdDirectionsBus } from "react-icons/md";

export const NavBar = () => (
  <GlobalNavigation
    productIcon={MdDirectionsBus}
    productHref='/'
  />
);