import { BModalOrchestratorProps } from '../../types';

declare const _default: import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BModalOrchestratorProps>, {
    teleportDisabled: boolean;
    teleportTo: string;
}>, {
    modals: import('vue').ShallowRef<import('vue').ComputedRef<{
        component: unknown;
        props: import('../../types').OrchestratedModal & {
            _self: symbol;
            _modelValue: boolean | undefined;
            _promise: {
                value: Promise<boolean | null>;
                resolve: (value: boolean | null) => void;
            };
            _isConfirm: boolean;
        };
    }>[]> | undefined;
    show: ((obj: {
        component?: Readonly<import('vue').Component> | undefined;
        props?: import('vue').MaybeRefOrGetter<Readonly<import('../../types').OrchestratedModal>> | undefined;
    }) => Promise<boolean | null>) | undefined;
    confirm: ((obj: {
        component?: Readonly<import('vue').Component> | undefined;
        props?: import('vue').MaybeRefOrGetter<Readonly<import('../../types').OrchestratedModal>> | undefined;
    }) => Promise<boolean | null>) | undefined;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BModalOrchestratorProps>, {
    teleportDisabled: boolean;
    teleportTo: string;
}>>>, {
    teleportDisabled: boolean;
    teleportTo: string | import('vue').RendererElement | null;
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
