import './Form.css'

interface Props{
    numbersOfParagraphs: string;
    setNumbersOfParagraphs:React.Dispatch<React.SetStateAction<string>>
    handleSubmit:(event:React.FormEvent) => void;
}

const Form: React.FC<Props> = ( { handleSubmit, numbersOfParagraphs, setNumbersOfParagraphs } ) => {
    return (
        <form className='form' onSubmit={(e) => handleSubmit(e)}>
            <div>
                <label htmlFor='amount' className='label'>Paragraphs:</label>
                <input
                    name='amount'
                    value={numbersOfParagraphs}
                    className='input'
                    type='number'
                    onChange={
                        (e) => setNumbersOfParagraphs(e.target.value)
                    }
                />
            </div>

            <button className='button'>Submit</button>
        </form>
    )
}

export default Form
