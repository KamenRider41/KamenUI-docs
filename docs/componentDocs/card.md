# Card
卡片组件

### 示例
<div style="display:flex;margin:25px;">
  <m-card  imgSrc="/KamenUI-docs/test2.jpg" summary="国王排名" :width="170" level="烂尾番" price="100人追番" />
  <m-card  imgSrc="/KamenUI-docs/test.jpg" summary="间谍过家家！" :width="170" level="好康番" price="1万+正在观看"/>
</div>



### 代码
```html
  <m-card  
    imgSrc="/test2.jpg" 
    summary="国王排名" 
    :width="170" 
    level="烂尾番" 
    price="100人追番" />

  <m-card  
    imgSrc="/test.jpg" 
    summary="间谍过家家！" 
    :width="170" 
    level="好康番" 
    price="1万+正在观看"/>
```

### Atributes
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| ---  | --- | ---  |   ---   |   ---  |
|`width`    |卡片的宽度  |`Number`|false  |-|
|`imgSrc`   |图片资源地址|`String`|true   |-|
|`imgHeight`|图片高度    |`Number`|false  |-|
|`summary`  |卡片概要    |`String`|false  |-|
|`level`    |footer1    |`String`|false  |-|
|`price`    |footer2    |`String`|false  |-|