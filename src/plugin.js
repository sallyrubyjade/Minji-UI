import Toast from "./toast";

let currentToast;
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions) {
            if (currentToast) {
                currentToast.close();
            }
            currentToast = createToast({
                Vue, message, propsData: toastOptions, onClose: () => {
                    currentToast = null;
                }
            });
        }
    }
}

// helper function
function createToast({Vue, message, propsData, onClose}) {
    let Constructor = Vue.extend(Toast);
    let toast = new Constructor({
        propsData
    });
    // 给 toast 的插槽传来内容
    toast.$slots.default = [message];
    // 必须mount
    toast.$mount();
    toast.$on('close', onClose);
    document.body.appendChild(toast.$el);

    return toast;
}