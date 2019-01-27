import React from 'react';
import Router from 'next/router';

export const B = () => {
    console.log('test');
    const isClient = process.browser;
    return (<button onClick={() => isClient && Router.push('/')}>click</button>);
}
