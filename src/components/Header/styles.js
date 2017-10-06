import { white } from 'material-ui/styles/colors';
import { headerHeight } from '../../constants';

const styles = {
    appBar: {
        position: 'fixed',
        top: 0,
        overflow: 'hidden',
        maxHeight: headerHeight,
        backgroundColor: white,
    },
    menuButton: {
        display: 'none',
    },
    iconsRightContainer: {
        margin: '0 20px',
    },
    tabsScrollbars: {
        overflowX: 'overlay',
        overflowY: 'hidden',
    },
    iconButton: {
        fill: '#18a689',
    },
    iconMenuList: {
        color: 'red',
    },
};

export default styles;
