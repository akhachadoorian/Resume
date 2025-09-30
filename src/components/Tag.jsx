
export default function Tag({ text, theme }) {

    return (
        <div className={`tag ${theme}`}>
            <p className="tag-text code">{text}</p>                  
        </div>
    )
}