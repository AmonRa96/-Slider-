/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable react/prop-types */
export function Item({
  width, name, color, picsCount, src,
}) {
  return (
    <div style={{
      backgroundColor: color,
      color: 'white',
      fontSize: '32px',
      minWidth: `${width / picsCount}px`,
      maxWidth: `${width / picsCount}px`,
      // eslint-disable-next-line no-undef
    }}
    >
      {src ? (
        <img
          alt="icon"
          src={require(`../assets/${src}`)}
          style={{
            minWidth: `${width / picsCount}px`,
            maxWidth: `${width / picsCount}px`,
            height: '100%',
          }}
        />
      ) : name}
    </div>

  );
}
