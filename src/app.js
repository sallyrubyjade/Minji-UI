import Vue from "vue"
import Button from './button'
import Icon from './icon'
import ButtonGroup from "./button-group"
import Input from "./input"
import Row from "./row"
import Column from "./col"
import Layout from "./layout"
import Header from "./header"
import Sider from "./sider"
import Content from "./content"
import Footer from "./footer"
import Toast from "./toast"
import plugin from "./plugin"
import Tab from "./tab"
import TabHead from "./tab-head";
import TabBody from "./tab-body";
import TabLabel from "./tab-label";
import TabPane from "./tab-pane";
import Popover from "./popover";
import Highlight from "./highlight";
import Player from "./record-player";

Vue.component('m-button', Button);
Vue.component('m-icon', Icon);
Vue.component('m-button-group', ButtonGroup);
Vue.component('m-input', Input);
Vue.component('m-row', Row);
Vue.component('m-col', Column);
Vue.component('m-layout', Layout);
Vue.component('m-header', Header);
Vue.component('m-sider', Sider);
Vue.component('m-content', Content);
Vue.component('m-footer', Footer);
Vue.component('m-toast', Toast);
Vue.component('m-tab', Tab);
Vue.component('m-tab-head', TabHead);
Vue.component('m-tab-body', TabBody);
Vue.component('m-tab-label', TabLabel);
Vue.component('m-tab-pane', TabPane);
Vue.component('m-popover', Popover);
Vue.component('m-highlight', Highlight);
Vue.component('m-player', Player);
Vue.use(plugin);

new Vue({
    el: '#app',
    data: {
        message: 'hi',
        selectedTab: 'suzi'
    },
    created() {
    },
    methods: {
        inputChange(e) {
            console.log(e);
        },
        inputListening(e) {
            console.log(e);
        },
        useDefaultToast(){
            this.$toast(`无close，你的智商目前为${parseInt(Math.random() * 100)}.`)
        },
        useToastSetting() {
            this.$toast(`你的智商目前为${parseInt(Math.random() * 100)}.`, {
                position: 'bottom',
                autoClose: false,
                closeBtn: {
                    text: '知道了',
                    callback(toast) {
                        console.log('用户说知道了');
                    }
                }
            });
        },
        useToastSetting2() {
            this.$toast(`你的智商目前为${parseInt(Math.random() * 100)}.`, {
                position: 'bottom',
                autoClose: false,
                type: 'warning',
                closeBtn: {
                    text: '知道了',
                    callback(toast) {
                        console.log('用户说知道了');
                    }
                }
            });
        }
    }
})

// 单元测试
import chai from 'chai';

const expect = chai.expect;

// 测试用例1 - 测试icon
{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            iconName: 'left'
        }
    });
    vm.$mount("#test");
    let useElement = vm.$el.querySelector('use');
    // console.log(useElement.getAttribute('href'))
    expect(useElement.getAttribute('href')).to.eq('#i-left');
    vm.$el.remove();
    vm.$destroy();
}

// 测试用例2 - 测试loading
{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            iconName: 'right',
            loading: true
        }
    });
    vm.$mount();
    let useElement = vm.$el.querySelector('use');
    expect(useElement.getAttribute('href')).to.eq('#i-loading');
    vm.$el.remove();
    vm.$destroy();
}

// 单元测试3 - 测试iconPosition
{
    const div = document.createElement('div');
    document.body.appendChild(div);

    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            iconName: "settings"
        }
    });
    vm.$mount(div);
    let svg = vm.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg);
    expect(order).to.eq("1");
    vm.$el.remove();
    vm.$destroy();
}

// 单元测试4 - 测试iconPosition
{
    const div = document.createElement('div');
    document.body.appendChild(div);

    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            iconName: "settings",
            iconPosition: "right"
        }
    });
    vm.$mount(div);
    let svg = vm.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg);
    expect(order).to.eq("2");
    vm.$el.remove();
    vm.$destroy();
}
