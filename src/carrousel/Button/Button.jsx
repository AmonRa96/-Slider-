/* eslint-disable react/button-has-type */
export function Button({
  buttonContent, handleClick, color, textColor,
}) {
  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: color,
        color: textColor,
        cursor: 'pointer',
      }}
    >
      {buttonContent}
    </button>
  );
}
