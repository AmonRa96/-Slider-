export const Button = ({buttonContent,handleClick,color,textColor}) =>{
    return (
        <button onClick={handleClick}
                style={{
                    backgroundColor: color,
                    color: textColor,
                    cursor: "pointer"
                }}
         >
            {buttonContent}
        </button >
    )
}