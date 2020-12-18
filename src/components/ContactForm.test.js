import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

describe("Main app renders", () => {

    test("App renders to DOM ", () => {

        render(<ContactForm />);
    });

    test('check if first name renders ', () => {
        render(<ContactForm/>)
        const fName = screen.getByLabelText(/first name/i);
  });
  
    test('user can fill out form', () => {
        render(<ContactForm />);

        const fNameInput = screen.getByLabelText(/first name/i)
        const button = screen.getByRole('button', { name: /submit/i})
        // console.log(button)
        fireEvent.change(fNameInput, {
            target: { value: 'carlos'}
        })
        expect(fNameInput.value).toBe('carlos')
    });
    
    test('input value', () => {
        const { queryByPlaceholderText } = render (<ContactForm />)
        const searchInput = queryByPlaceholderText("Edd");
        // console.log(searchInput)
        fireEvent.change(searchInput, { target: {value: 'billy'}})
        expect(searchInput.value).not.toBe('tim')
    });

    test(' test for placeholders', () => {
        const { getByLabelText } = render(<ContactForm />)
        const firstNameLabel = getByLabelText(/first name/i)
        expect(firstNameLabel).toHaveAttribute('placeholder')
        expect(firstNameLabel).toHaveAttribute("id");
    });
    
    
    // test('throws a error', () => {
    //     const reqSearch = jest.fn()

    //     const {queryByTestId } = render(<ContactForm reqSearch={reqSearch}  />)
        
    //     fireEvent.click(queryByTestId('findme'))
    //     expect(reqSearch).not.toHaveBeenCalled()

    // });
    

    
});
