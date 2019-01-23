import GlobalNavigation from '@atlaskit/global-navigation';
import { MdDirectionsBus } from "react-icons/md";

export default ({ isAuthenticated }) => (
  <GlobalNavigation
    productIcon={MdDirectionsBus}
    productHref='/'
  />
);