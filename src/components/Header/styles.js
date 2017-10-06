import ThemeConfig from '../../themes/themeConfig';
import { headerHeight } from '../../constants';
import { white } from 'material-ui/styles/colors';

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
        marginLeft: 20,
    },
    tabsScrollbars: {
        overflowX: 'overlay',
        overflowY: 'hidden',
    },
};

export default styles;
