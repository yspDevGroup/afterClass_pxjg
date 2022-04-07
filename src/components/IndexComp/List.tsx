/* eslint-disable prettier/prettier */
/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-09-01 11:07:27
 * @LastEditTime: 2022-01-13 10:43:20
 * @LastEditors: wsl
 */
import React from 'react';
import { Empty, Tooltip } from 'antd';
import noData from '@/assets/noData.png';

import styles from './index.less';
import moment from 'moment';
import { Link } from 'umi';
import ShowName from '../ShowName';

const List = (props: { type: string; data?: any; noDataImg?: any; noDataText?: string }) => {
  const { type, data, noDataImg = noData, noDataText = '暂无信息' } = props;
  return (
    <div className={styles.annceList}>
      {data?.length ? (
        <ul>
          {data.map((item: any) => {
            return (
              <li key={item.BT}>
                <Link
                  key="ck"
                  to={{
                    pathname: `${
                      type === 'padding'
                        ? '/businessManagement/courseManagement'
                        : type === 'Audit'
                        ? '/audit/substituteCourse'
                        : `/announcements/${type}/articleDetails`
                    }`,
                    state: item
                  }}
                >
                  {item.SFTT === 1 ? <div className={styles.Headlines}>头条</div> : <></>}
                  <span>
                    {type === 'padding' ? (
                      <>
                        收到一条来自{item?.XXJBSJ?.XXMC}（{item?.KHKCSJ?.KCMC}）的合作申请，请及时处理
                      </>
                    ) : (
                      <>
                        {' '}
                        {type === 'Audit' ? (
                          <>
                            {' '}
                            <Tooltip
                              title={
                                <>
                                  {' '}
                                  收到来自
                                  <ShowName type="userName" openid={item?.SKJS?.WechatUserId} XM={item?.SKJS?.XM} />
                                  教师，{item?.KHBJSJ?.KHKCSJ?.KCMC}的代课申请，请及时处理。
                                </>
                              }
                            >
                              收到来自
                              <ShowName type="userName" openid={item?.SKJS?.WechatUserId} XM={item?.SKJS?.XM} />
                              教师，{item?.KHBJSJ?.KHKCSJ?.KCMC}的代课申请，请及时处理。
                            </Tooltip>
                          </>
                        ) : (
                          <>{item.BT} </>
                        )}{' '}
                      </>
                    )}
                  </span>
                </Link>
                <p>
                  <span>{item.updatedAt || item.RQ}</span>
                </p>
              </li>
            );
          })}
        </ul>
      ) : (
        <Empty
          image={noDataImg}
          imageStyle={{
            height: 80
          }}
          description={noDataText}
        />
      )}
    </div>
  );
};
export default List;
