/* eslint-disable @typescript-eslint/no-unused-expressions */
/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-11-22 15:12:11
 * @LastEditTime: 2021-12-09 13:49:33
 * @LastEditors: Sissle Lynn
 */
import { useEffect, useState } from 'react';
import { useModel } from 'umi';
import { Card, Col, Row, Switch } from 'antd';
import { updateAgencyApproval, getAgencyApproval } from '@/services/after-class-pxjg/khjyjg';

import styles from './index.less';

const AuditSettings = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  /** 教师代课是否审批 */
  const [supply, setSupply] = useState<boolean>(true);
  const [ids, setIds] = useState<string | undefined>('');
  /**
   * 新增或者更新系统审批配置
   * type: 更新参数类型
   * val: 更新参数值
   */
  const updateSettings = async (type?: string, val?: any) => {
    await updateAgencyApproval(
      { id: ids || '' },
      {
        JSQJ: true,
        JSDK: type === 'Supply' ? val! : supply,
        JSTK: true
      }
    );
  };
  useEffect(() => {
    (async () => {
      const res = await getAgencyApproval({
        KHJYJGId: currentUser?.jgId || ''
      });
      if (res.status === 'ok' && res.data) {
        const { JSDK } = res.data;
        setSupply(JSDK!);
        setIds(res.data?.id);
      } else {
        updateSettings();
      }
    })();
  }, []);

  return (
    <div className={styles.wrapperCard}>
      <Row gutter={24}>
        <Col span={12}>
          <div>
            <h3>代课流程</h3>
            <Row gutter={24}>
              <Col span={24}>
                <Card
                  title="教师代课"
                  bordered={false}
                  extra={
                    <Switch
                      checked={supply}
                      onChange={(checked) => {
                        setSupply(checked);
                        updateSettings('Supply', checked);
                      }}
                    />
                  }
                >
                  <p className={supply ? 'active' : ''}>开启时：教师代课需管理员审批</p>
                  <p className={!supply ? 'active' : ''}>
                    关闭时：教师发起申请，代课教师同意后，系统自动审批，无需管理员操作
                  </p>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

AuditSettings.wrappers = ['@/wrappers/auth'];
export default AuditSettings;
