export  const itemConverter = (data,picsCount) =>{
    const firstNumItems = data.slice(0,picsCount);
    const lastNumItems = data.slice(data.length-picsCount,data.length);
    const items = [...lastNumItems,...data,...firstNumItems];
    return items
  };