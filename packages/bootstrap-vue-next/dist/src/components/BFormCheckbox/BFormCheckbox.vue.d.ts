import { CheckboxValue } from '../../types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    modelValue: import('vue').PropType<CheckboxValue | CheckboxValue[]>;
    indeterminate: import('vue').PropType<boolean>;
    reverse: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    id: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    ariaLabel: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    autofocus: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    button: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    form: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    switch: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    name: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    value: {
        type: import('vue').PropType<CheckboxValue>;
        default: boolean;
    };
    required: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    size: {
        type: import('vue').PropType<keyof import('../../types').BaseSize>;
        default: undefined;
    };
    plain: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    state: {
        type: import('vue').PropType<boolean | null>;
        default: null;
    };
    inline: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    ariaLabelledby: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    buttonGroup: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    buttonVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseButtonVariant | null>;
        default: null;
    };
    uncheckedValue: {
        type: import('vue').PropType<CheckboxValue>;
        default: boolean;
    };
}, {
    blur: () => void;
    element: import('vue').Ref<HTMLElement | null>;
    focus: () => void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<CheckboxValue | CheckboxValue[]>;
    indeterminate: import('vue').PropType<boolean>;
    reverse: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    id: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    ariaLabel: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    autofocus: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    button: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    form: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    switch: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    name: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    value: {
        type: import('vue').PropType<CheckboxValue>;
        default: boolean;
    };
    required: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    size: {
        type: import('vue').PropType<keyof import('../../types').BaseSize>;
        default: undefined;
    };
    plain: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    state: {
        type: import('vue').PropType<boolean | null>;
        default: null;
    };
    inline: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    ariaLabelledby: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    buttonGroup: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    buttonVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseButtonVariant | null>;
        default: null;
    };
    uncheckedValue: {
        type: import('vue').PropType<CheckboxValue>;
        default: boolean;
    };
}>>, {
    reverse: boolean;
    id: string;
    ariaLabel: string;
    autofocus: boolean;
    button: boolean;
    disabled: boolean;
    form: string;
    switch: boolean;
    name: string;
    value: CheckboxValue;
    required: boolean;
    size: keyof import('../../types').BaseSize;
    plain: boolean;
    state: boolean | null;
    inline: boolean;
    ariaLabelledby: string;
    buttonGroup: boolean;
    buttonVariant: keyof import('../../types').BaseButtonVariant | null;
    uncheckedValue: CheckboxValue;
}, {}>, Readonly<{
    default?: ((props: Record<string, never>) => any) | undefined;
}> & {
    default?: ((props: Record<string, never>) => any) | undefined;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
