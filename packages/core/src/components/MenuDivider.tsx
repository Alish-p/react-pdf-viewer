/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import * as React from 'react';

import ThemeContext from '../theme/ThemeContext';

const MenuDivider: React.FC = () => {
    const theme = React.useContext(ThemeContext);
    return (
        <li className={`${theme.prefixClass}-menu-divider`} />
    );
};

export default MenuDivider;
