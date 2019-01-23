import React from 'react';
import Router from 'next/router';

export const B = () => <button onClick={() => Router.push('/')} />;
