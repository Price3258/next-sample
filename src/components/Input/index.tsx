import { JSX, useState } from "react"

type InputProps = JSX.IntrinsicElements['input'] & {
    label: string
}

export const Input = (props: InputProps) => {
    const { label, ...rest } = props
    const [text, setText] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    const onClickReset = () => {
        setText('')
    }

    return (
        <div>
            {/* <label htmlFor={props.id}>{label}</label> */}
            <input {...rest} value={text} onChange={onChange} aria-label={label} />
            <button onClick={onClickReset}>Reset</button>
        </div>
    )
}