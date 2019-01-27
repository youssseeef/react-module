import React from 'react';
const Router = null;
if (typeof window !== 'undefined') {
    import('next/router').then((Router) => {
        Router = Router;
    });
}

class B extends React.Component {
    render() {
        return (<button onClick={() => Router && Router.push('/')}>click</button>);
    }
}
export default B;

