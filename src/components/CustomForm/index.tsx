/* eslint-disable complexity */
import React, { useEffect } from 'react';
import { Button, Col, Form, Row, Divider } from 'antd';
import {
  FormInput,
  FormPassword,
  FormSelect,
  FormTreeSelect,
  FormTime,
  FormTimeRange,
  FormTextArea,
  FormRadio,
  FormSwitch,
  FormCustom,
  FormUpload,
  FormInputNumber,
  FormCheckbox,
  FormDateRange,
  FormButton
} from './CustomFormItem';

import type { FormInstance } from 'antd';
import type {
  FormInputProps,
  FormPasswordProps,
  FormSelectProps,
  FormTreeSelectProps,
  FormRadioProps,
  FormTimeProps,
  FormTimeRangeProps,
  FormTextAreaProps,
  FormSwitchProps,
  FormCustomProps,
  FormItemType,
  FormUploadProps,
  FormCheckboxProps,
  FormDropMenuProps,
  FormButtonProps
} from './interfice';

import styles from './index.module.less';

const onPdfClick = (url: string | undefined) => {
  window.open(`${url}`);
};
const renderFormItems = (formItems: FormItemType[], formDisabled: boolean) => {
  return formItems.map((formItem) => {
    const { type, key, groupItems, cls, span, flex, ...currentProps } = formItem;
    currentProps.disabled = currentProps.disabled ? currentProps.disabled : formDisabled;
    switch (type) {
      case 'input':
        return <FormInput {...(currentProps as FormInputProps)} key={key} />;
      case 'inputNumber':
        return <FormInputNumber {...(currentProps as FormInputProps)} key={key} />;
      case 'password':
        return <FormPassword {...(currentProps as FormPasswordProps)} key={key} />;
      case 'select':
        return <FormSelect {...(currentProps as FormSelectProps)} key={key} />;
      case 'treeSelect':
        return <FormTreeSelect {...(currentProps as FormTreeSelectProps)} key={key} />;
      case 'time':
        return <FormTime {...(currentProps as FormTimeProps)} key={key} />;
      case 'timeRange':
        return <FormTimeRange {...(currentProps as FormTimeRangeProps)} key={key} />;
      case 'dateRange':
        return <FormDateRange {...(currentProps as FormTimeRangeProps)} key={key} />;
      case 'textArea':
        return <FormTextArea {...(currentProps as FormTextAreaProps)} key={key} />;
      case 'radio':
        return <FormRadio {...(currentProps as FormRadioProps)} key={key} />;
      case 'switch':
        return <FormSwitch {...(currentProps as FormSwitchProps)} key={key} />;
      case 'custom':
        return <FormCustom {...(currentProps as FormCustomProps)} key={key} />;
      case 'upload':
        return <FormUpload {...(currentProps as FormUploadProps)} key={key} />;
      case 'checkbox':
        return <FormCheckbox {...(currentProps as FormCheckboxProps)} key={key} />;
      case 'button':
        return <FormButton {...(currentProps as FormButtonProps)} key={key} />;
      case 'group': {
        const colW = 24 / (groupItems ? groupItems.length : 1);
        return (
          <Row
            className={cls}
            gutter={typeof formItem.gutter === 'undefined' ? 10 : formItem.gutter}
            key={key}
          >
            {groupItems?.map((item) => {
              const wInfo: {
                span?: number | string;
                flex?: number | 'none' | 'auto' | string;
                push?: number;
              } = {};
              if (item.hidden) {
                wInfo.span = 0;
              } else if (item.span) {
                wInfo.span = item.span;
              } else if (item.flex) {
                wInfo.flex = item.flex;
              } else if (item.push) {
                wInfo.push = item.push;
              } else {
                wInfo.span = colW;
              }
              // eslint-disable-next-line no-param-reassign
              item.style = { ...item.style, flexWrap: 'nowrap' };
              const colKey = `Col${item.key || item.label}`;
              return (
                <Col className={item.cls} {...wInfo} key={colKey}>
                  {renderFormItems([item], formDisabled)}
                </Col>
              );
            })}
          </Row>
        );
      }
      case 'label':
        return (
          <span className="titleBar" key={key}>
            {{ ...currentProps }.label}
          </span>
        );
      case 'pdf':
        return (
          <div className={styles.pdfCol} key={key}>
            <label>{formItem.label}：</label>
            <a onClick={() => onPdfClick(formItem.url)}>{formItem.text}</a>
          </div>
        );
      case 'empty':
      default:
        return '';
    }
  });
};

type Props = {
  formLayout: {
    labelCol: {
      span?: number | string;
      flex?: number | 'none' | 'auto' | string;
    };
    wrapperCol: {
      span?: number | string;
      flex?: number | 'none' | 'auto' | string;
    };
  };
  formItems: FormItemType[];
  formDisabled?: boolean; // form是否为可读状态
  values?: any;
  hideBtn?: boolean;
  layoutType?: 'horizontal' | 'vertical' | 'inline';
  onFinish?: (values: any) => void;
  onFinishFailed?: ({
    errorFields
  }: {
    errorFields: {
      name: (string | number)[];
      errors: string[];
    }[];
  }) => void;
  onCancel?: () => void;
  /**
   * 可选，获取表单对象，支持在外部进行操作
   *
   * @memberof Props
   */
  setForm?: (form: FormInstance<any>) => void;
  style?: React.CSSProperties;
};

const CustomForm = (props: Props) => {
  const {
    formLayout,
    formItems,
    values,
    layoutType = 'horizontal',
    hideBtn = false,
    formDisabled = false,
    setForm,
    onFinish,
    onFinishFailed,
    onCancel,
    style
  } = props;
  const [form] = Form.useForm();

  useEffect(() => {
    if (typeof setForm === 'function') {
      setForm(form);
    }
  }, [form, setForm]);

  useEffect(() => {
    if (values) {
      form.setFieldsValue(values);
    }
  }, [values]);

  return (
    <>
      <Form
        {...formLayout}
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout={layoutType}
        style={style}
      >
        {renderFormItems(formItems, formDisabled)}
      </Form>
      {!hideBtn && (
        <Row justify="center" className={styles.footer}>
          <Col span={12}>
            <Button
              type="primary"
              ghost
              style={{ border: 'none', boxShadow: 'none' }}
              onClick={() => {
                if (form) form.submit();
              }}
            >
              提交
            </Button>
            <Divider type="vertical" className={styles.divider} />
          </Col>
          <Col span={12}>
            <Button style={{ border: 'none' }} onClick={onCancel}>
              取消
            </Button>
          </Col>
        </Row>
      )}
    </>
  );
};

export default CustomForm;
