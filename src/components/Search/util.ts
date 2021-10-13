// 级联数据解构
export const convertData = (data: API.XNXQ[]) => {
  if (data?.length) {
    return [].map.call(data, (item: API.XNXQ) => {
      return {
        value: item.id,
        text: `${item.XN} ${item.XQ}`
      }
    })
  }
  return [];
}
// 选择数据结构
export const convertSelectData = (data: API.NJSJ[]) => {
  const selectData: { key: string; title: string; }[] = []
  data.forEach((item) => {

    selectData.push({ key: item.id, title: item.NJMC })
  })
  return selectData;
}
