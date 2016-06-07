import React from 'react';
import { Form, Select, Input, InputNumber, DatePicker, TimePicker, Switch, Radio, Cascader, Slider, Button, Col, Upload, Icon } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const areaData = [{
  value: 'shanghai',
  label: '上海',
  children: [{
    value: 'shanghaishi',
    label: '上海市',
    children: [{
      value: 'pudongxinqu',
      label: '浦东新区',
    }],
  }],
}];

let FormBasic = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    console.log('收到表单值：', this.props.form.getFieldsValue());
  },

  normFile(e) {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  },

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <Form horizontal onSubmit={this.handleSubmit} >
        <FormItem
          label="Switch 开关"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 10 }}
          required>
          <Switch {...getFieldProps('switch', { valuePropName: 'checked' })} />
        </FormItem>

        <FormItem
          label="数字输入框"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 10 }}>
          <InputNumber min={1} max={10} style={{ width: 100 }}
            {...getFieldProps('inputNumber', { initialValue: 1 })} />
          <span className="ant-form-text"> 人数</span>
        </FormItem>
        
         <FormItem
          label="Radio 单选示例1"
          labelCol={{ span: 8 }}
          required>
          <RadioGroup {...getFieldProps('radio1')}>
            <Radio value="a">选项一</Radio>
            <Radio value="b">选项二</Radio>
            <Radio value="c">选项三</Radio>
          </RadioGroup>
        </FormItem>

        <FormItem
          label="Radio 单选示例2"
          labelCol={{ span: 8 }}
          required>
          <RadioGroup {...getFieldProps('radio2')}>
            <RadioButton value="a">选项一</RadioButton>
            <RadioButton value="b">选项二</RadioButton>
            <RadioButton value="c">选项三</RadioButton>
          </RadioGroup>
        </FormItem>

        <FormItem
          label="Select 单选"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          required>
          <Select style={{ width: 200 }}
            {...getFieldProps('selectSingle')}>
            <Option value="0">摩卡</Option>
            <Option value="1">拿铁</Option>
            <Option value="disabled" disabled>已售罄</Option>
            <Option value="2">卡布奇诺</Option>
          </Select>
        </FormItem>

        <FormItem
          label="Select 多选"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          required>
          <Select style={{ width: 200 }}  multiple
            {...getFieldProps('selectMultiple')}>
            <Option value="0">布丁</Option>
            <Option value="1">雪糕</Option>
            <Option value="2">甜甜圈</Option>
          </Select>
        </FormItem>

        <FormItem
          label="级联选择"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          required
          hasFeedback>
          <Cascader style={{ width: 200 }} options={areaData} {...getFieldProps('area')} />
        </FormItem>

        <FormItem
          label="Slider 滑动输入条"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          required>
          <Slider marks={['A', 'B', 'C', 'D', 'E', 'F']} {...getFieldProps('slider')} />
        </FormItem>

        <FormItem
          label="Input 输入框"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}>
          <Input id="control-input" placeholder="Please enter..." {...getFieldProps('input')}/>
        </FormItem>

        <FormItem
          label="Textarea 文本域"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}>
          <Input type="textarea" rows="3" {...getFieldProps('textarea')} />
        </FormItem>

        <FormItem
          label="DatePicker 日期选择框"
          labelCol={{ span: 8 }}
          required>
          <Col span="4">
            <FormItem>
              <DatePicker {...getFieldProps('startDate')} />
            </FormItem>
          </Col>
          <Col span="1">
            <p className="ant-form-split">-</p>
          </Col>
          <Col span="4">
            <FormItem>
              <DatePicker {...getFieldProps('endDate')} />
            </FormItem>
          </Col>
        </FormItem>


        <FormItem
          label="TimePicker 时间选择器"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          required>
          <TimePicker {...getFieldProps('time')} />
        </FormItem>

        <FormItem
          label="logo图"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          help="上传图片点这里呀">
          <Upload name="logo" action="/upload.do" listType="picture" onChange={this.handleUpload}
            {...getFieldProps('upload', {
              valuePropName: 'fileList',
              normalize: this.normFile,
            })}
          >
            <Button type="ghost">
              <Icon type="upload" /> 点击上传
            </Button>
          </Upload>
        </FormItem>

        <FormItem wrapperCol={{ span: 16, offset: 8 }} style={{ marginTop: 24 }}>
          <Button type="primary" htmlType="submit">确定</Button>
        </FormItem>
      </Form>
    );
  },
});

FormBasic = Form.create()(FormBasic);

export default FormBasic;

