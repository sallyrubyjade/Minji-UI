---
title: 快速上手
---
### 如何快速上手
> 在项目中[安装](/guide/usage)完组件库后
1. 找一个 Vue 文件
2. 在该文件中引入 Component 和 CSS 样式，举个例子🌰
```html
<template>
	<div id="app">
		<m-player></m-player>
        <m-player color="purple"></m-player>
		<m-button type="tertiary" icon-name="moon">欢迎来到Minji UI</m-button>
		<m-popover>
			<template v-slot:content>
				<div>popover里的内容</div>
			</template>
			<m-button>点我</m-button>
		</m-popover>
	</div>
</template>

<script>
import { RecordPlayer, Button, Popover } from "minji-ui";
import "minji-ui/dist/index.css";
export default {
	name: "App",
	components: {
		"m-button": Button,
		"m-player": RecordPlayer,
		"m-popover": Popover,
	},
};
</script>
```