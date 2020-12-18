import React from "react";

import { render } from "@testing-library/react";
import App from './App'

describe('Main app renders', () => {
    test('App renders to DOM ', () => {
        render(<App />)
    })
    
});
