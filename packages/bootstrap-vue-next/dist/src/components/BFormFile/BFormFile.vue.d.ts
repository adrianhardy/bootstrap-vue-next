declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    modelValue: import('vue').PropType<File | File[] | null>;
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
    capture: {
        type: import('vue').PropType<boolean | "user" | "environment">;
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
    label: {
        type: import('vue').PropType<string>;
        default: string;
    };
    name: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    accept: {
        type: import('vue').PropType<string | readonly string[]>;
        default: string;
    };
    multiple: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    required: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    size: {
        type: import('vue').PropType<keyof import('../../types').BaseSize>;
        default: undefined;
    };
    state: {
        type: import('vue').PropType<boolean | null>;
        default: null;
    };
    placement: {
        type: import('vue').PropType<"start" | "end">;
        default: string;
    };
    ariaLabelledby: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    browserText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    directory: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    labelClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    noDrop: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noTraverse: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}, {
    blur: () => void;
    element: import('vue').Ref<HTMLInputElement | null>;
    focus: () => void;
    reset: () => void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<File | File[] | null>;
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
    capture: {
        type: import('vue').PropType<boolean | "user" | "environment">;
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
    label: {
        type: import('vue').PropType<string>;
        default: string;
    };
    name: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    accept: {
        type: import('vue').PropType<string | readonly string[]>;
        default: string;
    };
    multiple: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    required: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    size: {
        type: import('vue').PropType<keyof import('../../types').BaseSize>;
        default: undefined;
    };
    state: {
        type: import('vue').PropType<boolean | null>;
        default: null;
    };
    placement: {
        type: import('vue').PropType<"start" | "end">;
        default: string;
    };
    ariaLabelledby: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    browserText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    directory: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    labelClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    noDrop: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noTraverse: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}>>, {
    id: string;
    ariaLabel: string;
    autofocus: boolean;
    capture: boolean | "user" | "environment";
    disabled: boolean;
    form: string;
    label: string;
    name: string;
    accept: string | readonly string[];
    multiple: boolean;
    required: boolean;
    size: keyof import('../../types').BaseSize;
    state: boolean | null;
    placement: "start" | "end";
    ariaLabelledby: string;
    browserText: string;
    directory: boolean;
    labelClass: any;
    noDrop: boolean;
    noTraverse: boolean;
}, {}>, Readonly<{
    label?: ((props: Record<string, never>) => any) | undefined;
}> & {
    label?: ((props: Record<string, never>) => any) | undefined;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
