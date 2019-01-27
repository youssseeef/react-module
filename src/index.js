import React from 'react';
import Router from 'next/router';

export default () => <button onClick={() => typeof window !== 'undefined' && Router.push('/')}>click</button>;
