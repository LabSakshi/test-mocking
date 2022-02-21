//GET BY: WHEN THE ELEMENT IS IN THE DOM/////
// QUERY BY: WHEN THE ELEMENT IS NOT IN THE DOM// 
//FIND BY: WHEN ELEMENT WILL BE THERE BUT ONLY AFTER THE API REQUEST IS SUCCESSFULL


import { render, fireEvent, screen , waitForElementToBeRemoved} from "@testing-library/react";
import SummaryForm from '../SummaryForm'
import userEvent from '@testing-library/user-event'

test('Initial Conditions', () => {
    render(<SummaryForm />)

    const tncCheckbox = screen.getByRole('checkbox')
    expect(tncCheckbox).not.toBeChecked()
    const confrimButton = screen.getByRole('button')
    expect(confrimButton).toBeDisabled()
})

test('Checking the Terms and condition checkbox enables the confirm order button', () => {
    render(<SummaryForm />)
    const tncCheckbox = screen.getByRole('checkbox')
    fireEvent.click(tncCheckbox)
    const confirmButton = screen.getByRole('button')
    expect(confirmButton).toBeEnabled()
    userEvent.click(tncCheckbox)
    expect(confirmButton).toBeDisabled()
})

test('popover responds to hover', () => {
    render(<SummaryForm />)
    //popover starts out hidden
    const nullPopover = screen.queryByText(/no icecream will actually be delivered/i)
    expect(nullPopover).not.toBeInTheDocument()
    //popover appears upon mouseover of checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i)
    userEvent.hover(termsAndConditions)
    const popover = screen.getByText(/no icecream will actually be delivered/i)
    expect(popover).toBeInTheDocument() //not need this assertion as get by throws the error when elemtn is not there in the dom
    //popover disappears when we mouseout
    userEvent.click(termsAndConditions)
    //{waitForElementToBeRemoved}  is occuring asynchronously [that is it occurs after the test is completed] so we will await this
    expect(screen.queryByText(/no icecream will actually be delivered/i)).toBeNull();
  
})