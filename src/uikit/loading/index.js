import React from 'react';
import {createCn} from 'bem-react-classname';

import './loading.scss';

function Loading() {
    const cn = createCn('loading');

    return <h4 className={cn()}>Loading...</h4>
}

export default Loading;