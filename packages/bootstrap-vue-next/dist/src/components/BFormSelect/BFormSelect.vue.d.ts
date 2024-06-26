declare const _default: <T>(__VLS_props: {
    id?: string | undefined;
    ariaInvalid?: import('../../types').AriaInvalid | undefined;
    autofocus?: boolean | undefined;
    disabled?: boolean | undefined;
    form?: string | undefined;
    name?: string | undefined;
    multiple?: boolean | undefined;
    required?: boolean | undefined;
    size?: keyof import('../../types').BaseSize | undefined;
    plain?: boolean | undefined;
    state?: boolean | null | undefined;
    modelValue?: ((string | number | boolean | readonly unknown[] | Readonly<Record<string, unknown>> | null) & T) | undefined;
    options?: readonly unknown[] | undefined;
    valueField?: string | undefined;
    textField?: string | undefined;
    htmlField?: string | undefined;
    disabledField?: string | undefined;
    optionsField?: string | undefined;
    labelField?: string | undefined;
    selectSize?: import('../../types').Numberish | undefined;
} & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, __VLS_ctx?: {
    attrs: any;
    slots: Readonly<{
        default?: ((props: Record<string, never>) => any) | undefined;
        first?: ((props: Record<string, never>) => any) | undefined;
    }> & {
        default?: ((props: Record<string, never>) => any) | undefined;
        first?: ((props: Record<string, never>) => any) | undefined;
    };
    emit: any;
} | undefined, __VLS_expose?: ((exposed: import('vue').ShallowUnwrapRef<{
    blur: () => void;
    element: import('vue').Ref<HTMLElement | null>;
    focus: () => void;
}>) => void) | undefined, __VLS_setup?: Promise<{
    props: {
        id?: string | undefined;
        ariaInvalid?: import('../../types').AriaInvalid | undefined;
        autofocus?: boolean | undefined;
        disabled?: boolean | undefined;
        form?: string | undefined;
        name?: string | undefined;
        multiple?: boolean | undefined;
        required?: boolean | undefined;
        size?: keyof import('../../types').BaseSize | undefined;
        plain?: boolean | undefined;
        state?: boolean | null | undefined;
        modelValue?: ((string | number | boolean | readonly unknown[] | Readonly<Record<string, unknown>> | null) & T) | undefined;
        options?: readonly unknown[] | undefined;
        valueField?: string | undefined;
        textField?: string | undefined;
        htmlField?: string | undefined;
        disabledField?: string | undefined;
        optionsField?: string | undefined;
        labelField?: string | undefined;
        selectSize?: import('../../types').Numberish | undefined;
    } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{
        blur: () => void;
        element: import('vue').Ref<HTMLElement | null>;
        focus: () => void;
    }>): void;
    attrs: any;
    slots: Readonly<{
        default?: ((props: Record<string, never>) => any) | undefined;
        first?: ((props: Record<string, never>) => any) | undefined;
    }> & {
        default?: ((props: Record<string, never>) => any) | undefined;
        first?: ((props: Record<string, never>) => any) | undefined;
    };
    emit: any;
}>) => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            id?: string | undefined;
            ariaInvalid?: import('../../types').AriaInvalid | undefined;
            autofocus?: boolean | undefined;
            disabled?: boolean | undefined;
            form?: string | undefined;
            name?: string | undefined;
            multiple?: boolean | undefined;
            required?: boolean | undefined;
            size?: keyof import('../../types').BaseSize | undefined;
            plain?: boolean | undefined;
            state?: boolean | null | undefined;
            modelValue?: ((string | number | boolean | readonly unknown[] | Readonly<Record<string, unknown>> | null) & T) | undefined;
            options?: readonly unknown[] | undefined;
            valueField?: string | undefined;
            textField?: string | undefined;
            htmlField?: string | undefined;
            disabledField?: string | undefined;
            optionsField?: string | undefined;
            labelField?: string | undefined;
            selectSize?: import('../../types').Numberish | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
        expose(exposed: import('vue').ShallowUnwrapRef<{
            blur: () => void;
            element: import('vue').Ref<HTMLElement | null>;
            focus: () => void;
        }>): void;
        attrs: any;
        slots: Readonly<{
            default?: ((props: Record<string, never>) => any) | undefined;
            first?: ((props: Record<string, never>) => any) | undefined;
        }> & {
            default?: ((props: Record<string, never>) => any) | undefined;
            first?: ((props: Record<string, never>) => any) | undefined;
        };
        emit: any;
    } | undefined;
};
export default _default;
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
