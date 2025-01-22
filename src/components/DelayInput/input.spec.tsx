import { act, fireEvent, render, RenderResult, screen } from "@testing-library/react";
import { DelayInput } from ".";
import '@testing-library/jest-dom';


describe('DelayInput', () => {
    let renderResult: RenderResult
    let handleChange: jest.Mock
    beforeEach(() => {
        jest.useFakeTimers()
        handleChange = jest.fn()
        renderResult = render(<DelayInput onChange={handleChange} />)
    })

    afterEach(() => {
        renderResult.unmount()
        jest.useFakeTimers()
    })

    it('shoud display empty text on initial render', () => {
        const spanNode = screen.getByTestId('display-text') as HTMLSpanElement

        expect(spanNode).toHaveTextContent('입력한 텍스트:')
    });

    it('should display "입력 중..." immediately after onChange envent occurs', () => {
        const inputText = 'Test Input Text'
        const inputNode = screen.getByTestId('input-text') as HTMLInputElement
        fireEvent.change(inputNode, { target: { value: inputText } })

        const spanNode = screen.getByTestId('display-text') as HTMLSpanElement
        expect(spanNode).toHaveTextContent('입력 중...')
    });

    it('shoud display "입력한 텍스트: Test Input Text" after 1 second', async () => {
        const inputText = 'Test Input Text'
        const inputNode = screen.getByTestId('input-text') as HTMLInputElement
        fireEvent.change(inputNode, { target: { value: inputText } })

        await act(() => {
            jest.runAllTimers()
        })

        const spanNode = screen.getByTestId('display-text') as HTMLSpanElement
        expect(spanNode).toHaveTextContent(`입력한 텍스트: ${inputText}`)
    })

});