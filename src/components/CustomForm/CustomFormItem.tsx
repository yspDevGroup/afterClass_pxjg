import React from 'react';
import {
  Form,
  Input,
  Select,
  DatePicker,
  Radio,
  Switch,
  TreeSelect,
  InputNumber,
  Checkbox,
  Row,
  Col,
  TimePicker,
  Button
} from 'antd';
import type { Moment } from 'moment';
import moment from 'moment';
import { UploadOutlined } from '@ant-design/icons/lib/icons';
import { useModel } from 'umi';

import type {
  FormInputProps,
  FormPasswordProps,
  FormSelectProps,
  FormRadioProps,
  FormTimeRangeProps,
  FormTextAreaProps,
  FormCustomProps,
  FormSwitchProps,
  FormTimeProps,
  FormTreeSelectProps,
  FormUploadProps,
  FormInputNumberProps,
  FormCheckboxProps,
  FormButtonProps
} from './interfice';

const { TextArea } = Input;

// -----------------------------FormInput------------------------------------
/**
 * 表单输入框
 *
 * @param {FormInputProps} props
 * @returns
 */
export const FormInput = (props: FormInputProps) => {
  const { disabled, placeholder, onChange, addonAfter, suffix, ...formProps } = props;
  return (
    <Form.Item {...formProps}>
      <Input
        disabled={disabled}
        placeholder={placeholder || '请输入'}
        addonAfter={addonAfter}
        onChange={onChange}
        suffix={suffix}
      />
    </Form.Item>
  );
};
// -----------------------------FormInputNumber------------------------------------
/**
 * 表单输入框
 *
 * @param {FormInputNumberProps} props
 * @returns
 */
export const FormInputNumber = (props: FormInputNumberProps) => {
  const { disabled, percent, ...formProps } = props;
  return (
    <Form.Item {...formProps}>
      {percent ? (
        <InputNumber
          disabled={disabled}
          formatter={(value) => `${value}%`}
          parser={(value) => value!.replace('%', '')}
        />
      ) : (
        <InputNumber disabled={disabled} />
      )}
    </Form.Item>
  );
};
// -----------------------------FormPassword------------------------------------
/**
 * 表单输入框
 *
 * @param {FormPasswordProps} props
 * @returns
 */
export const FormPassword = (props: FormPasswordProps) => {
  const { disabled, placeholder, onChange, ...formProps } = props;

  return (
    <Form.Item {...formProps}>
      <Input.Password
        disabled={disabled}
        placeholder={placeholder || '请输入'}
        onChange={onChange}
      />
    </Form.Item>
  );
};

// -----------------------------FormSelect------------------------------------
/**
 * 表单下拉框
 *
 * @param {FormSelectProps} props
 * @returns
 */
export const FormSelect = (props: FormSelectProps) => {
  const { disabled, placeholder, items, onChange, mode, showSearch, ...formProps } = props;
  return (
    <Form.Item {...formProps}>
      <Select
        mode={mode}
        disabled={disabled}
        placeholder={placeholder || '请选择'}
        showSearch={showSearch}
        optionFilterProp="children"
        onChange={onChange}
        filterOption={(inputValue: string, option: any) =>
          option.children.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
        }
      >
        {items.map((item) => (
          <Select.Option key={item.value} value={item.value}>
            {item.text}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

// -----------------------------FormTreeSelect------------------------------------
/**
 * 表单树选择
 *
 * @param {FormTreeSelectProps} props
 * @returns
 */
export const FormTreeSelect = (props: FormTreeSelectProps) => {
  const {
    disabled,
    dropdownStyle,
    placeholder,
    treeData,
    onChange,
    defaultExpandAll,
    ...formProps
  } = props;
  return (
    <Form.Item {...formProps}>
      <TreeSelect
        style={{ width: '100%' }}
        disabled={disabled}
        dropdownStyle={dropdownStyle || { maxHeight: 400, overflow: 'auto' }}
        placeholder={placeholder || '请选择'}
        treeData={treeData}
        treeDefaultExpandAll={defaultExpandAll}
        onChange={onChange}
        allowClear
      />
    </Form.Item>
  );
};

// -----------------------------FormRadio------------------------------------
/**
 * 表单radio选择框
 *
 * @param {FormRadioProps} props
 * @returns
 */
export const FormRadio = (props: FormRadioProps) => {
  const { disabled, items, defaultValue, ...formProps } = props;
  return (
    <Form.Item {...formProps}>
      <Radio.Group disabled={disabled} defaultValue={defaultValue}>
        {items.map((item) => (
          <Radio key={item.value} value={item.value}>
            {item.text}
          </Radio>
        ))}
      </Radio.Group>
    </Form.Item>
  );
};

// -----------------------------FormTime------------------------------------
/**
 * 表单时间选择器
 *
 * @param {FormTimeProps} props
 * @return {*}
 */
export const FormTime = (props: FormTimeProps) => {
  const { disabled, subtype = 'date', onChange, ...formProps } = props;
  return (
    <Form.Item {...formProps}>
      {subtype === 'time' ? (
        <TimePicker
          disabled={disabled}
          minuteStep={15}
          format="HH:mm"
          onChange={onChange}
          style={{ width: '100%' }}
        />
      ) : (
        <DatePicker disabled={disabled} showTime onChange={onChange} format="YYYY-MM-DD" />
      )}
    </Form.Item>
  );
};

// -----------------------------FormTimeRange------------------------------------
const range = (start: number, end: number) => {
  const result = [];
  for (let i = start; i < end; i += 1) {
    result.push(i);
  }
  return result;
};
const disabledRangeTime = () => {
  return {
    disabledMinutes: () => range(1, 30).concat(range(31, 60)),
  };
};
const disabledDate = (current: Moment) => {
  // Can not select days before today
  return current < moment().endOf('day');
};

/**
 * 表单时间范围选择框
 *
 * @param {FormTimeRangeProps} props
 * @returns
 */
export const FormTimeRange = (props: FormTimeRangeProps) => {
  const { disabled, onChange, ...formProps } = props;
  return (
    <Form.Item {...formProps}>
      <DatePicker.RangePicker
        disabled={disabled}
        showTime={{
          hideDisabledOptions: true,
          defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('23:59:59', 'HH:mm:ss')],
        }}
        disabledDate={disabledDate}
        disabledTime={disabledRangeTime}
        format="YYYY-MM-DD HH:mm"
        onChange={onChange}
        style={{ width: '100%' }}
      />
    </Form.Item>
  );
};

/**
 * 表单时间(日期)范围选择框
 *
 * @param {FormTimeRangeProps} props
 * @returns
 */
export const FormDateRange = (props: FormTimeRangeProps) => {
  const { disabled, onChange, ...formProps } = props;
  return (
    <Form.Item {...formProps}>
      <DatePicker.RangePicker
        disabled={disabled}
        format="YYYY-MM-DD"
        onChange={onChange}
        style={{ width: '100%' }}
      />
    </Form.Item>
  );
};

// -----------------------------FormTextArea------------------------------------
export const FormTextArea = (props: FormTextAreaProps) => {
  const { disabled, rows = 4, showCount, maxLength, placeholder, ...formProps } = props;
  return (
    <div>
      <Form.Item {...formProps}>
        <TextArea
          disabled={disabled}
          rows={rows}
          showCount={showCount}
          maxLength={maxLength}
          placeholder={placeholder || '请输入'}
        />
      </Form.Item>
    </div>
  );
};

// -----------------------------FormSwitch------------------------------------
export const FormSwitch = (props: FormSwitchProps) => {
  const { disabled, onChange, ...formProps } = props;
  return (
    <Form.Item {...formProps} valuePropName="checked">
      <Switch disabled={disabled} defaultChecked onChange={onChange} />
    </Form.Item>
  );
};

// -----------------------------FormCustom------------------------------------
export const FormCustom = (props: FormCustomProps) => {
  const { children, ...formProps } = props;
  return <Form.Item {...formProps}>{children}</Form.Item>;
};

// -----------------------------FormCheckbox------------------------------------
/**
 * 表单Checkbox选择框
 *
 * @param {FormCheckboxProps} props
 * @returns
 */
export const FormCheckbox = (props: FormCheckboxProps) => {
  const { disabled, items,desc, colNum = 6, defaultValue, ...formProps } = props;
  return (
    <Form.Item {...formProps}>

     {desc ? <Checkbox disabled={disabled}>{desc}</Checkbox> :''}


      {items ? <Checkbox.Group disabled={disabled} defaultValue={defaultValue}>
        <Row>
          {items?.map((item) => (
            <Col span={colNum} key={item.value}>
              <Checkbox key={item.value} value={item.value} />
              {item.text}
            </Col>
          ))}
        </Row>
      </Checkbox.Group> : ''}
    </Form.Item>
  );
};

/**
 * 表单上传
 *
 * @param {FormUploadProps} props
 * @returns
 */
export const FormUpload = (props: FormUploadProps) => {
  const { disabled, name, action, listType, normFile, accept, uploadProps, ...formProps } = props;
  return (
    <Form.Item {...formProps} name={name} valuePropName="fileList" getValueFromEvent={normFile}>
      <Upload {...uploadProps} disabled={disabled} accept={accept}>
        <Button icon={<UploadOutlined />}>上传附件</Button>
      </Upload>
    </Form.Item>
  );
};


export const FormButton = (props: FormButtonProps) => {
  const { disabled, text, onClick, ghost, block, ...formProps } = props;
  return (
    <Form.Item {...formProps}>
      <Button disabled={disabled} onClick={onClick} ghost={ghost} block={block}>
        {text}
      </Button>
    </Form.Item>
  );
};
