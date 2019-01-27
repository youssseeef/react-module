import React from 'react';
import dynamic from 'next/dynamic'
const Router = dynamic(() => import('next/router'), {
    ssr: false
});
console.log(Router)
export default () => <button onClick={() => process.browser && Router.push('/')}>click</button>;
