import { BAvatarProps } from '../../types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BAvatarProps>, {
    alt: string;
    badge: boolean;
    badgeBgVariant: null;
    badgeTextVariant: null;
    badgeVariant: string;
    badgePlacement: string;
    badgeDotIndicator: boolean;
    badgePill: boolean;
    button: boolean;
    buttonType: string;
    size: undefined;
    square: boolean;
    src: undefined;
    text: undefined;
    variant: string;
    active: undefined;
    activeClass: undefined;
    disabled: undefined;
    exactActiveClass: undefined;
    href: undefined;
    opacity: undefined;
    opacityHover: undefined;
    rel: undefined;
    replace: undefined;
    stretched: boolean;
    routerComponentName: undefined;
    target: undefined;
    to: undefined;
    underlineOffset: undefined;
    underlineOffsetHover: undefined;
    underlineOpacity: undefined;
    underlineOpacityHover: undefined;
    underlineVariant: undefined;
    bgVariant: null;
    textVariant: null;
    rounded: boolean;
    roundedBottom: undefined;
    roundedEnd: undefined;
    roundedStart: undefined;
    roundedTop: undefined;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (value: MouseEvent) => void;
    "img-error": (value: Event) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BAvatarProps>, {
    alt: string;
    badge: boolean;
    badgeBgVariant: null;
    badgeTextVariant: null;
    badgeVariant: string;
    badgePlacement: string;
    badgeDotIndicator: boolean;
    badgePill: boolean;
    button: boolean;
    buttonType: string;
    size: undefined;
    square: boolean;
    src: undefined;
    text: undefined;
    variant: string;
    active: undefined;
    activeClass: undefined;
    disabled: undefined;
    exactActiveClass: undefined;
    href: undefined;
    opacity: undefined;
    opacityHover: undefined;
    rel: undefined;
    replace: undefined;
    stretched: boolean;
    routerComponentName: undefined;
    target: undefined;
    to: undefined;
    underlineOffset: undefined;
    underlineOffsetHover: undefined;
    underlineOpacity: undefined;
    underlineOpacityHover: undefined;
    underlineVariant: undefined;
    bgVariant: null;
    textVariant: null;
    rounded: boolean;
    roundedBottom: undefined;
    roundedEnd: undefined;
    roundedStart: undefined;
    roundedTop: undefined;
}>>> & {
    onClick?: ((value: MouseEvent) => any) | undefined;
    "onImg-error"?: ((value: Event) => any) | undefined;
}, {
    replace: boolean;
    target: import('../../types').LinkTarget;
    to: import('vue-router').RouteLocationRaw;
    button: boolean;
    disabled: boolean;
    text: string;
    href: string;
    src: string;
    rel: string;
    alt: string;
    size: import('../../types').LiteralUnion<keyof import('../../types').BaseSize, import('../../types').Numberish>;
    active: boolean;
    activeClass: string;
    routerComponentName: string;
    variant: keyof import('../../types').BaseColorVariant | null;
    opacity: 10 | "10" | 100 | 50 | 25 | 75 | "25" | "50" | "75" | "100";
    opacityHover: 10 | "10" | 100 | 50 | 25 | 75 | "25" | "50" | "75" | "100";
    underlineVariant: keyof import('../../types').BaseColorVariant | null;
    underlineOffset: 1 | 2 | 3 | "1" | "2" | "3";
    underlineOffsetHover: 1 | 2 | 3 | "1" | "2" | "3";
    underlineOpacity: 0 | "0" | 10 | "10" | 100 | 50 | 25 | 75 | "25" | "50" | "75" | "100";
    underlineOpacityHover: 0 | "0" | 10 | "10" | 100 | 50 | 25 | 75 | "25" | "50" | "75" | "100";
    square: boolean;
    exactActiveClass: string;
    stretched: boolean;
    bgVariant: keyof import('../../types').BaseColorVariant | null;
    textVariant: keyof import('../../types').BaseTextColorVariant | null;
    badge: string | boolean;
    badgeBgVariant: keyof import('../../types').BaseColorVariant | null;
    badgePlacement: import('../../types').CombinedPlacement;
    badgeTextVariant: keyof import('../../types').BaseTextColorVariant | null;
    badgeVariant: keyof import('../../types').BaseColorVariant | null;
    badgePill: boolean;
    badgeDotIndicator: boolean;
    buttonType: import('../../types').ButtonType;
    rounded: boolean | import('../../types').RadiusElement;
    roundedTop: boolean | import('../../types').RadiusElement;
    roundedBottom: boolean | import('../../types').RadiusElement;
    roundedStart: boolean | import('../../types').RadiusElement;
    roundedEnd: boolean | import('../../types').RadiusElement;
}, {}>, Readonly<{
    badge?: ((props: Record<string, never>) => any) | undefined;
    default?: ((props: Record<string, never>) => any) | undefined;
}> & {
    badge?: ((props: Record<string, never>) => any) | undefined;
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
