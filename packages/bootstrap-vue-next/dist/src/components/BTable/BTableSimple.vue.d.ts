import { BTableSimpleProps } from '../../types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BTableSimpleProps>, {
    borderVariant: null;
    tableClass: undefined;
    variant: null;
    bordered: boolean;
    borderless: boolean;
    captionTop: boolean;
    dark: boolean;
    hover: boolean;
    id: undefined;
    noBorderCollapse: boolean;
    outlined: boolean;
    fixed: boolean;
    responsive: boolean;
    stacked: boolean;
    striped: boolean;
    stripedColumns: boolean;
    small: boolean;
    stickyHeader: boolean;
    tableAttrs: undefined;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BTableSimpleProps>, {
    borderVariant: null;
    tableClass: undefined;
    variant: null;
    bordered: boolean;
    borderless: boolean;
    captionTop: boolean;
    dark: boolean;
    hover: boolean;
    id: undefined;
    noBorderCollapse: boolean;
    outlined: boolean;
    fixed: boolean;
    responsive: boolean;
    stacked: boolean;
    striped: boolean;
    stripedColumns: boolean;
    small: boolean;
    stickyHeader: boolean;
    tableAttrs: undefined;
}>>>, {
    fixed: boolean;
    small: boolean;
    id: string;
    variant: keyof import('../../types').BaseColorVariant | null;
    dark: boolean;
    borderVariant: keyof import('../../types').BaseColorVariant | null;
    stacked: boolean | import('../../types').Breakpoint;
    bordered: boolean;
    borderless: boolean;
    captionTop: boolean;
    hover: boolean;
    noBorderCollapse: boolean;
    outlined: boolean;
    responsive: boolean | import('../../types').Breakpoint;
    stickyHeader: boolean | import('../../types').Numberish;
    striped: boolean;
    stripedColumns: boolean;
    tableAttrs: Readonly<import('../../types').AttrsValue>;
    tableClass: any;
}, {}>, Readonly<{
    default?: ((props: Record<string, never>) => any) | undefined;
}> & {
    default?: ((props: Record<string, never>) => any) | undefined;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
