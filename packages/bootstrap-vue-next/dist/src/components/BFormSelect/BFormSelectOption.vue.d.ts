declare const _default: <T>(__VLS_props: {
    disabled?: boolean | undefined;
    value?: T | undefined;
} & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, __VLS_ctx?: {
    attrs: any;
    slots: Readonly<{
        default?: ((props: Record<string, never>) => any) | undefined;
    }> & {
        default?: ((props: Record<string, never>) => any) | undefined;
    };
    emit: any;
} | undefined, __VLS_expose?: ((exposed: import('vue').ShallowUnwrapRef<{}>) => void) | undefined, __VLS_setup?: Promise<{
    props: {
        disabled?: boolean | undefined;
        value?: T | undefined;
    } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: Readonly<{
        default?: ((props: Record<string, never>) => any) | undefined;
    }> & {
        default?: ((props: Record<string, never>) => any) | undefined;
    };
    emit: any;
}>) => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            disabled?: boolean | undefined;
            value?: T | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
        expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
        attrs: any;
        slots: Readonly<{
            default?: ((props: Record<string, never>) => any) | undefined;
        }> & {
            default?: ((props: Record<string, never>) => any) | undefined;
        };
        emit: any;
    } | undefined;
};
export default _default;
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
