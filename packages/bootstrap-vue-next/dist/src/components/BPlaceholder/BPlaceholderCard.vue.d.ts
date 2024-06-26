import { BPlaceholderCardProps } from '../../types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BPlaceholderCardProps>, {
    animation: undefined;
    footerAnimation: undefined;
    footerSize: string;
    footerVariant: undefined;
    footerWidth: number;
    headerAnimation: undefined;
    headerSize: string;
    headerVariant: undefined;
    headerWidth: number;
    imgBlankColor: string;
    imgPlacement: string;
    imgHeight: number;
    imgSrc: undefined;
    noButton: boolean;
    noFooter: boolean;
    noHeader: boolean;
    noImg: boolean;
    size: string;
    variant: undefined;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BPlaceholderCardProps>, {
    animation: undefined;
    footerAnimation: undefined;
    footerSize: string;
    footerVariant: undefined;
    footerWidth: number;
    headerAnimation: undefined;
    headerSize: string;
    headerVariant: undefined;
    headerWidth: number;
    imgBlankColor: string;
    imgPlacement: string;
    imgHeight: number;
    imgSrc: undefined;
    noButton: boolean;
    noFooter: boolean;
    noHeader: boolean;
    noImg: boolean;
    size: string;
    variant: undefined;
}>>>, {
    size: import('../../types').PlaceholderSize;
    variant: keyof import('../../types').BaseColorVariant | null;
    animation: import('../../types').PlaceholderAnimation;
    footerVariant: keyof import('../../types').BaseColorVariant | null;
    headerVariant: keyof import('../../types').BaseColorVariant | null;
    imgPlacement: "top" | "bottom";
    imgHeight: import('../../types').Numberish;
    imgSrc: string;
    imgBlankColor: string;
    noHeader: boolean;
    footerAnimation: import('../../types').PlaceholderAnimation;
    footerSize: import('../../types').PlaceholderSize;
    footerWidth: import('../../types').Numberish;
    headerAnimation: import('../../types').PlaceholderAnimation;
    headerSize: import('../../types').PlaceholderSize;
    headerWidth: import('../../types').Numberish;
    noButton: boolean;
    noFooter: boolean;
    noImg: boolean;
}, {}>, Readonly<{
    default?: ((props: Record<string, never>) => any) | undefined;
    footer?: ((props: Record<string, never>) => any) | undefined;
    header?: ((props: Record<string, never>) => any) | undefined;
    img?: ((props: Record<string, never>) => any) | undefined;
}> & {
    default?: ((props: Record<string, never>) => any) | undefined;
    footer?: ((props: Record<string, never>) => any) | undefined;
    header?: ((props: Record<string, never>) => any) | undefined;
    img?: ((props: Record<string, never>) => any) | undefined;
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
