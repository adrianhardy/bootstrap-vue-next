declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    pressed: import('vue').PropType<boolean | undefined>;
    tag: {
        type: import('vue').PropType<string>;
        default: string;
    };
    type: {
        type: import('vue').PropType<import('../../types').ButtonType>;
        default: string;
    };
    replace: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    target: {
        type: import('vue').PropType<import('../../types').LinkTarget>;
        default: undefined;
    };
    to: {
        type: import('vue').PropType<import('vue-router').RouteLocationRaw>;
        default: undefined;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    href: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    rel: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    size: {
        type: import('vue').PropType<keyof import('../../types').BaseSize>;
        default: string;
    };
    active: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    activeClass: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    routerComponentName: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    variant: {
        type: import('vue').PropType<keyof import('../../types').BaseButtonVariant | null>;
        default: string;
    };
    opacity: {
        type: import('vue').PropType<10 | "10" | 100 | 50 | 25 | 75 | "25" | "50" | "75" | "100">;
        default: undefined;
    };
    opacityHover: {
        type: import('vue').PropType<10 | "10" | 100 | 50 | 25 | 75 | "25" | "50" | "75" | "100">;
        default: undefined;
    };
    underlineVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseColorVariant | null>;
        default: undefined;
    };
    underlineOffset: {
        type: import('vue').PropType<1 | 2 | 3 | "1" | "2" | "3">;
        default: undefined;
    };
    underlineOffsetHover: {
        type: import('vue').PropType<1 | 2 | 3 | "1" | "2" | "3">;
        default: undefined;
    };
    underlineOpacity: {
        type: import('vue').PropType<0 | "0" | 10 | "10" | 100 | 50 | 25 | 75 | "25" | "50" | "75" | "100">;
        default: undefined;
    };
    underlineOpacityHover: {
        type: import('vue').PropType<0 | "0" | 10 | "10" | 100 | 50 | 25 | 75 | "25" | "50" | "75" | "100">;
        default: undefined;
    };
    pill: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    icon: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    routerTag: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    exactActiveClass: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    stretched: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    loading: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    loadingFill: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    loadingText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    squared: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (value: MouseEvent) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    pressed: import('vue').PropType<boolean | undefined>;
    tag: {
        type: import('vue').PropType<string>;
        default: string;
    };
    type: {
        type: import('vue').PropType<import('../../types').ButtonType>;
        default: string;
    };
    replace: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    target: {
        type: import('vue').PropType<import('../../types').LinkTarget>;
        default: undefined;
    };
    to: {
        type: import('vue').PropType<import('vue-router').RouteLocationRaw>;
        default: undefined;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    href: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    rel: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    size: {
        type: import('vue').PropType<keyof import('../../types').BaseSize>;
        default: string;
    };
    active: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    activeClass: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    routerComponentName: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    variant: {
        type: import('vue').PropType<keyof import('../../types').BaseButtonVariant | null>;
        default: string;
    };
    opacity: {
        type: import('vue').PropType<10 | "10" | 100 | 50 | 25 | 75 | "25" | "50" | "75" | "100">;
        default: undefined;
    };
    opacityHover: {
        type: import('vue').PropType<10 | "10" | 100 | 50 | 25 | 75 | "25" | "50" | "75" | "100">;
        default: undefined;
    };
    underlineVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseColorVariant | null>;
        default: undefined;
    };
    underlineOffset: {
        type: import('vue').PropType<1 | 2 | 3 | "1" | "2" | "3">;
        default: undefined;
    };
    underlineOffsetHover: {
        type: import('vue').PropType<1 | 2 | 3 | "1" | "2" | "3">;
        default: undefined;
    };
    underlineOpacity: {
        type: import('vue').PropType<0 | "0" | 10 | "10" | 100 | 50 | 25 | 75 | "25" | "50" | "75" | "100">;
        default: undefined;
    };
    underlineOpacityHover: {
        type: import('vue').PropType<0 | "0" | 10 | "10" | 100 | 50 | 25 | 75 | "25" | "50" | "75" | "100">;
        default: undefined;
    };
    pill: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    icon: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    routerTag: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    exactActiveClass: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    stretched: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    loading: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    loadingFill: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    loadingText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    squared: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}>> & {
    onClick?: ((value: MouseEvent) => any) | undefined;
}, {
    tag: string;
    type: import('../../types').ButtonType;
    replace: boolean;
    target: import('../../types').LinkTarget;
    to: import('vue-router').RouteLocationRaw;
    disabled: boolean;
    href: string;
    rel: string;
    size: keyof import('../../types').BaseSize;
    active: boolean;
    activeClass: string;
    routerComponentName: string;
    variant: keyof import('../../types').BaseButtonVariant | null;
    opacity: 10 | "10" | 100 | 50 | 25 | 75 | "25" | "50" | "75" | "100";
    opacityHover: 10 | "10" | 100 | 50 | 25 | 75 | "25" | "50" | "75" | "100";
    underlineVariant: keyof import('../../types').BaseColorVariant | null;
    underlineOffset: 1 | 2 | 3 | "1" | "2" | "3";
    underlineOffsetHover: 1 | 2 | 3 | "1" | "2" | "3";
    underlineOpacity: 0 | "0" | 10 | "10" | 100 | 50 | 25 | 75 | "25" | "50" | "75" | "100";
    underlineOpacityHover: 0 | "0" | 10 | "10" | 100 | 50 | 25 | 75 | "25" | "50" | "75" | "100";
    pill: boolean;
    icon: boolean;
    routerTag: string;
    exactActiveClass: string;
    stretched: boolean;
    loading: boolean;
    loadingFill: boolean;
    loadingText: string;
    squared: boolean;
}, {}>, Readonly<{
    default?: ((props: Record<string, never>) => any) | undefined;
    loading?: ((props: Record<string, never>) => any) | undefined;
    'loading-spinner'?: ((props: Record<string, never>) => any) | undefined;
}> & {
    default?: ((props: Record<string, never>) => any) | undefined;
    loading?: ((props: Record<string, never>) => any) | undefined;
    'loading-spinner'?: ((props: Record<string, never>) => any) | undefined;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
