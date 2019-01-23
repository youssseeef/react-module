import React from 'react';
import Router from 'next/router';

export const B = () => <Button onClick={() => Router.push('/')} />;
