# Button
按钮组件

### 示例
<div style="display:flex;margin:25px;">
  <m-button />
  <m-button :btnShadow='false'/>
  <m-button type='primary' text='Click'/>
  <m-button type='success'/>
  <m-button type='danger'/>
  <m-button type='warning'/>
</div>



### 代码
```html
  <m-button/>
  <m-button :btnShadow='false'/>
  <m-button type='primary' text='Click'/>
  <m-button type='success'/>
  <m-button type='danger'/>
  <m-button type='warning'/>
```

### Atributes
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| ---  | --- | ---  |   ---   |   ---  |
|`type`      |按钮类型  |`String` |false  |default|
|`btnShadow` |按钮阴影  |`Boolean`|false  |true|
|`text`      |按钮文本  |`String` |false  |按钮|
***
|`type`可选值|说明|
| --- | --- |
|`default`|默认按钮|
|`primary`|主要按钮|
|`success`|成功按钮|
|`danger` |危险按钮|
|`warning`|警告按钮|
