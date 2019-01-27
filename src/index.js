import React from 'react';
import Router from 'next/router';

export const B = () => {
    const isClient = typeof document !== 'undefined';
    return (<button onClick={() => isClient && Router.push('/')}>click</button>);
}
