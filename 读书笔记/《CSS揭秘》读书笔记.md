# CSS揭秘

## CSS编码技巧

* 尽量减少代码重复
* 相信你的眼睛，而不是数字
* 响应式网页设计
* 合理使用简写
* 是否选用预处理器

## 第一章

所需知识：

RGBA:

R: 红色值。 正整数 | 百分比

G: 绿色值。 正整数 | 百分比

B: 蓝色值。 正整数 | 百分比

A: Alpha透明度。 取值0~1之间

HSLA:

H: Hue(色调)。0(或360)表示红色，120表示绿色，240表示蓝色，也可取其他数值来指定颜色。取值为：0 - 360

S: Saturation(饱和度)。取值为：0.0% - 100.0%

L: Lightness(亮度)。取值为：0.0% - 100.0%

A: Alpha透明度。取值0~1之间。

---

box-shadow:  none | [inset? && [ offset-x offset-y blur-radius? spread-radius? color? ] ]

inset 默认阴影在边框外。使用inset后，阴影在边框内（即使是透明边框），背景之上内容之下。

offset-x 设置水平偏移量，如果是负值则阴影位于元素左边。

offset-y 设置垂直偏移量，如果是负值则阴影位于元素上面。

如果两者都是0，那么阴影位于元素后面。这时如果设置了 blur-radius 或 spread-radius 则有模糊效果。

blur-radius 值越大，模糊面积越大，阴影就越大越淡。 不能为负值。默认为0，此时阴影边缘锐利。

spread-radius 取正值时，阴影扩大；取负值时，阴影.收缩。默认为0，此时阴影与元素同样大。

color 如果没有指定，则由浏览器决定——通常是color的值，不过目前Safari取透明。

### 半透明边框

实现半透明边框的css:

```css
border: 10px soild hsla(0, 0%, 100%, 0.5);
background: white;
background-clip: padding-box;
```

![](http://ozar6ogjb.bkt.clouddn.com/%E5%8D%8A%E9%80%8F%E6%98%8E%E8%BE%B9%E6%A1%86.png)

### 多重边框

利用`box-shadow`因为它是层层叠加的，所以我们只需要按规律来调整扩张半径。

![](http://ozar6ogjb.bkt.clouddn.com/%E5%A4%9A%E9%87%8D%E8%BE%B9%E6%A1%86.png)

### 灵活的背景定位

用`background-position`:

```css
background: url(code-pirate.svg)
            no-repeat bottom right #58a;
background-position: right 10px bottom 10px;
```

![](http://ozar6ogjb.bkt.clouddn.com/%E7%81%B5%E6%B4%BB%E7%9A%84%E8%83%8C%E6%99%AF%E5%AE%9A%E4%BD%8D.png)

如果我们希望偏移量与容器的内边距的外沿宽（padding box）一致。我们可以用`background-orgin`:

```css
background: url(code-pirate.svg)
            no-repeat bottom right #58a;
background-orgin: content-box;
```

那么`content-box`是什么？

那么我们想想，每个元素身上都存在三个矩形框。最外边到最里面的是`boder box(边框的外沿框)`、`padding box(内边距的外沿框)`、`content box(内容区的外沿框)`。

还有`calc()`方案：

css如下:

```css
background: url(code-pirate.svg)
            no-repeat bottom right #58a;
background-position: calc(100% - 20px) calc(100% - 10px);
```

### 边框内圆角

```css
outline: .6em solid #655;
box-shadow: 0 0 0 .4em #655; /* todo calculate max of this */

max-width: 10em;
border-radius: .8em;
padding: 1em;
margin: 1em;
background: tan;
font: 100%/1.5 sans-serif;
```

![](http://ozar6ogjb.bkt.clouddn.com/%E8%BE%B9%E6%A1%86%E5%86%85%E5%9C%86%E8%A7%92.png)

