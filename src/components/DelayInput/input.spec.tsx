import { render, RenderResult, screen } from "@testing-library/react";
import { DelayInput } from ".";
import '@testing-library/jest-dom';


describe('DelayInput', () => {
    let renderResult: RenderResult
    let handleChange: jest.Mock
    beforeEach(() => {
        handleChange = jest.fn()
        renderResult = render(<DelayInput onChange={handleChange} />)
    })

    afterEach(() => {
        renderResult.unmount()
    })

    it('shoud display empty text on initial render', () => {
        const spanNode = screen.getByTestId('display-text') as HTMLSpanElement

        expect(spanNode).toHaveTextContent('입력한 텍스트:')
    });

});