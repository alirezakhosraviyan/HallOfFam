import { createSwitchNavigator } from 'react-navigation';
import beforeEntranceNavigation from '../navigations/beforEntrance';

export default createSwitchNavigator(
    {
      beforeEntrance: beforeEntranceNavigation,
    },
    {
      initialRouteName: 'beforeEntrance',
      header: { visible: false },
    },
);
