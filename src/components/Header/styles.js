import { white } from 'material-ui/styles/colors';
import { headerHeight } from '../../constants';

const styles = {
    appBar: {
        position: 'fixed',
        top: 0,
        overflow: 'hidden',
        maxHeight: headerHeight,
        backgroundColor: '#283e4a',
    },
    menuButton: {
        width: 'inherit',
        height: 'inherit',
        padding: 0,
    },
    iconsRightContainer: {
        margin: '0 20px',
    },
    tabsScrollbars: {
        overflowX: 'overlay',
        overflowY: 'hidden',
    },
    iconButton: {
        fill: white,
    },
};

export default styles;
