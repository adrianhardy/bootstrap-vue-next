import { BCarouselSlideProps } from '../../types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BCarouselSlideProps>, {
    background: undefined;
    caption: undefined;
    captionHtml: undefined;
    captionTag: string;
    contentTag: string;
    contentVisibleUp: undefined;
    id: undefined;
    imgAlt: undefined;
    imgBlank: boolean;
    imgBlankColor: string;
    imgHeight: undefined;
    imgSrc: undefined;
    imgSrcset: undefined;
    imgWidth: undefined;
    interval: undefined;
    text: undefined;
    textHtml: undefined;
    textTag: string;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BCarouselSlideProps>, {
    background: undefined;
    caption: undefined;
    captionHtml: undefined;
    captionTag: string;
    contentTag: string;
    contentVisibleUp: undefined;
    id: undefined;
    imgAlt: undefined;
    imgBlank: boolean;
    imgBlankColor: string;
    imgHeight: undefined;
    imgSrc: undefined;
    imgSrcset: undefined;
    imgWidth: undefined;
    interval: undefined;
    text: undefined;
    textHtml: undefined;
    textTag: string;
}>>>, {
    id: string;
    caption: string;
    text: string;
    background: string;
    interval: import('../../types').Numberish;
    imgAlt: string;
    imgHeight: import('../../types').Numberish;
    imgSrc: string;
    imgWidth: import('../../types').Numberish;
    captionHtml: string;
    captionTag: string;
    contentTag: string;
    contentVisibleUp: string;
    imgBlank: boolean;
    imgBlankColor: string;
    imgSrcset: string | readonly string[];
    textHtml: string;
    textTag: string;
}, {}>, Readonly<{
    caption?: ((props: Record<string, never>) => any) | undefined;
    default?: ((props: Record<string, never>) => any) | undefined;
    img?: ((props: Record<string, never>) => any) | undefined;
    text?: ((props: Record<string, never>) => any) | undefined;
}> & {
    caption?: ((props: Record<string, never>) => any) | undefined;
    default?: ((props: Record<string, never>) => any) | undefined;
    img?: ((props: Record<string, never>) => any) | undefined;
    text?: ((props: Record<string, never>) => any) | undefined;
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
