
export const Item = ({  img }) => {
  return (
    <div>
  <img src={require(`../../assets/${img}`)} width="256px" height="256px"/>
    </div>
 )
};