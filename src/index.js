import React from 'react';
import Router from 'next/router';

export default () => <button onClick={() => process.browser && Router.push('/')}>click</button>;
