const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.exist;
    })

    describe('props', () => {
        it('接收 value', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    value: '1234'
                }
            }).$mount();
            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.value).to.equal('1234');
            vm.$destroy();
        })

        it('接收 disabled 值为 true 时', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount();
            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.disabled).to.equal(true);
            vm.$destroy();
        })

        it('没有接收 disabled 值，即 disabled 为默认值时', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor().$mount();
            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.disabled).to.equal(false);
            vm.$destroy();
        })

        it('接收 readonly 值为 true 时', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount();
            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.readOnly).to.equal(true);
            vm.$destroy();
        })

        it('接收 error', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    error: "有报错"
                }
            }).$mount();
            const useElement = vm.$el.querySelector('use');
            expect(useElement.getAttribute('href')).to.eq('#i-attention');
            const msg = vm.$el.querySelector('.hint-msg');
            expect(msg.innerText).to.eq('有报错');
            vm.$destroy();
        })
    })

    describe('事件', () => {
        const Constructor = Vue.extend(Input);
        let vm;
        afterEach(() => {
            vm.$destroy();
        })
        it('支持 change，input，blur，focus 事件', () => {
            ['change', 'input', 'blur', 'focus'].forEach((eventName) => {
                vm = new Constructor({}).$mount();
                const callback = sinon.fake();
                vm.$on(eventName, callback);
                // 触发input change事件
                let event = new Event(eventName);
                Object.defineProperty(event, 'target', {
                    value: {value: 'hi'}, enumerable: true
                })
                let inputElement = vm.$el.querySelector('input');
                inputElement.dispatchEvent(event);
                expect(callback).to.have.been.calledWith('hi');
            })
        })
    })


})