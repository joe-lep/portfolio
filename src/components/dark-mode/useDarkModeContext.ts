'use client';

import { useContext } from 'react';
import { darkModeContext } from './context';

export const useDarkModeContext = () => useContext(darkModeContext);
