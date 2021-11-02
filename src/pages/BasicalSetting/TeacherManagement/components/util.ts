import { getHash } from "@/services/after-class-pxjg/redis";

/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-11-01 08:58:42
 * @LastEditTime: 2021-11-01 08:58:42
 * @LastEditors: Sissle Lynn
 */
export const getHashData  = async (type: string) => {
  const res = await getHash({
    key:type,
    fields: [
      'string'
    ],
    isAll: true
  });
  if (res.status === 'ok' && res.data) {
    const { data } = res;
    const list = [];
    if (data) {
      for (let item of data) {
        list.push({
          text: item.dmhy,
          value: item.dmhy
        })
      }
    }
    return list;
  } else {
    return [];
  };
};
