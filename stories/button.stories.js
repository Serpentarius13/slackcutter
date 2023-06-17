import BaseButton from "../components/common/ui-kit/BaseButton.vue";
import '../styles/base/tailwind.scss';
export default {
    title: "Button",
    component: BaseButton,
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: 'select'
        },
        theme: {
            options: ['warning', 'danger', 'error', "primary"],
            control: 'select'
        },
        rounded: {
            options: ["sm", "md", "lg", "full"],
            control: 'select'
        }
    },
}

const Template = (args, { argTypes }) => ({
    components: { BaseButton },
    props: Object.keys(argTypes),
    setup() {
        return {
            args
        }
    },
    template: `<BaseButton v-bind="$props">Первый текст</BaseButton>`
})

export const Primary = Template.bind({});
Primary.args = {
    size: "md",
    theme: "danger"
}