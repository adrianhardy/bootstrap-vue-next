declare const _default: () => {
    toasts?: import('vue').ShallowRef<import('vue').ComputedRef<{
        component: unknown;
        props: Omit<import('../types').OrchestratedToast, "value"> & {
            _self: symbol;
            _modelValue: number | boolean | undefined;
        };
    }>[]> | undefined;
    _setIsAppend?: ((value: boolean) => void) | undefined;
    show?: ((obj: {
        component?: Readonly<import('vue').Component> | undefined;
        props?: import('vue').MaybeRefOrGetter<Readonly<import('../types').OrchestratedToast>> | undefined;
    }) => symbol) | undefined;
    remove?: ((self: symbol) => void) | undefined;
};
export default _default;
