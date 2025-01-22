import { render, screen, RenderResult } from '@testing-library/react'
import { Input } from './index'
import { expect } from '@storybook/test'

describe('Input', () => {
    let renderResult: RenderResult
    beforeEach(() => {
        renderResult = render(<Input label="Username" id="username" />)
    })

    afterEach(() => {
        renderResult.unmount()
    })

    it('should empty in input on initial render', () => {
        const inputNode = screen.getByLabelText('Username') as HTMLInputElement

        expect(inputNode).toHaveValue('')
    })

})