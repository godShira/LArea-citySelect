# LArea citySelect 省市区联动移动端控件
简易版的移动端省市区联动的选择框，仿ios选择器
## 更新
纯原生js的移动端城市选择插件，不依赖任何库,演示效果请在移动端或PC浏览器模拟移动端查看效果。
##使用方法
###载入 CSS 文件
```css
<link href="css/LArea.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css" href="css/reset.css" />
<link rel="stylesheet" type="text/css" href="css/style.css" />
```

###DOM底部载入 JavaScript 文件
```javascript
<script type="text/javascript" src="js/common.js"></script>
<script type="text/javascript" src="js/province.js"></script>
<script type="text/javascript" src="js/LArea1.js"></script>
```

###DOM 结构
```html
<div class="content-block">
    <input id="demo" type="text" readonly="" placeholder="城市选择特效" value="广东省,深圳市"/>
    <input id="value" type="hidden" value="20,234,504"/>
</div>
```

###调用 LArea
```javascript
var area = new LArea();
    area.init({
        'trigger': '#demo', //触发选择控件的文本框，同时选择完毕后name属性输出到该位置
        'valueTo': '#value', //选择完毕后id属性输出到该位置
        'keys': {
            id: 'code',
            name: 'name'
        }, //绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
        'type': 1, //数据源类型
        'data': LAreaData //数据源
    });
    area.value=[1,13,3];//控制初始位置，注意：该方法并不会影响到input的value
```

### v2.0.0 省市联动
![image](https://github.com/godkillerdan/LArea-citySelect/blob/master/LArea_citySelect/img/sketch_01.jpg)
### v2.0.0 省市区联动
![image](https://github.com/godkillerdan/LArea-citySelect/blob/master/LArea_citySelect/img/sketch_02.jpg)

代码会持续优化，如果喜欢望赏颗星。

