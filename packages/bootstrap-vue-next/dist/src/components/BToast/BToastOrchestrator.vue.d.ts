import { BToastOrchestratorProps } from '../../types';

declare const _default: import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BToastOrchestratorProps>, {
    teleportDisabled: boolean;
    teleportTo: string;
    appendToast: boolean;
}>, {
    remove: ((self: symbol) => void) | undefined;
    show: ((obj: {
        component?: Readonly<import('vue').Component> | undefined;
        props?: import('vue').MaybeRefOrGetter<Readonly<import('../../types').OrchestratedToast>> | undefined;
    }) => symbol) | undefined;
    toasts: import('vue').ShallowRef<import('vue').ComputedRef<{
        component: unknown;
        props: Omit<import('../../types').OrchestratedToast, "value"> & {
            _self: symbol;
            _modelValue: number | boolean | undefined;
        };
    }>[]> | undefined;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BToastOrchestratorProps>, {
    teleportDisabled: boolean;
    teleportTo: string;
    appendToast: boolean;
}>>>, {
    teleportDisabled: boolean;
    teleportTo: string | import('vue').RendererElement | null;
    appendToast: boolean;
}, {}>;
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
