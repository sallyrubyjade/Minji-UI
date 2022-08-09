# Minji UI Component Library (Vue2 Version)

> This is my first try to build my own component library. Hope you can try and like it! And if I have time, I will keep improving it 👩🏻‍💻

🚀 [项目主页](https://sallyrubyjade.github.io/Minji-UI/)

![主页预览](https://github.com/sallyrubyjade/pics/blob/main/minji-ui-vue2.png?raw=true)
## What I built 有哪些轮子
- Record Player Component (for fun!)  唱片机
- Button Component  按钮
- Input Component  输入框
- Layout Component  布局
- Toast Component  消息提示
- Tab Component  标签栏
- Popover Component  弹出提示条
- Highlight Component  高亮

## Before you use 使用前
Please add this in your CSS 使用本框架前，请在CSS中开启`border-box`

```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
```

## How to use 使用步骤
1. Install the package
    ```
   npm i minji-ui
   
   // or
   
   yarn add minji-ui
   ```
2. In your code
   ```html
   <template>
   <div id="app">
   <m-player color="purple"></m-player>
   <m-button type="primary">欢迎使用Minji UI</m-button>
   </div>
   </template>

   <script>
      import { Button, RecordPlayer } from "minji-ui";
      import "minji-ui/dist/index.css";
      export default {
         name: "App",
	     components: {
		      HelloWorld,
		      "m-button": Button,
		      "m-player": RecordPlayer,
      },
     };
   </script>