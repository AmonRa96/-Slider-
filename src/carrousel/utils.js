export const itemConverter = (data, picsCount) => {
  const firstNumItems = data.slice(0, picsCount);
  const lastNumItems = data.slice(data.length - picsCount, data.length);
  const items = [...lastNumItems, ...data, ...firstNumItems];
  return items;
};

export function getCurrentDimension() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}
