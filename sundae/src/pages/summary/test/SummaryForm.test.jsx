import { render, fireEvent, screen } from "@testing-library/react";
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

test('popover responds to hover',()=>{
    //popover starts out hidden

    //popover appears upon mouseover of checkbox label
    
    //popover disappears when we mouseout
})