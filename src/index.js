import React from 'react';
const Router = null;
const isBrowser = typeof window !== 'undefined';
if (isBrowser) {
    import('next/router').then((nextRouter) => {
        Router = nextRouter;
    });
}

class B extends React.Component {
    render() {
        return (<button onClick={() => Router && Router.push('/')}>click</button>);
    }
}
export default B;

