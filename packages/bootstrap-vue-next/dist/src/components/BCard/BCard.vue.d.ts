import { BCardProps } from '../../types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BCardProps>, {
    align: undefined;
    bodyBgVariant: undefined;
    bodyClass: undefined;
    bodyTag: string;
    bodyText: string;
    bodyTextVariant: undefined;
    borderVariant: null;
    footer: undefined;
    footerBgVariant: undefined;
    footerBorderVariant: undefined;
    footerClass: undefined;
    footerHtml: string;
    footerTag: string;
    footerTextVariant: undefined;
    footerVariant: null;
    header: undefined;
    headerBgVariant: undefined;
    headerBorderVariant: undefined;
    headerClass: undefined;
    headerHtml: string;
    headerTag: string;
    headerTextVariant: undefined;
    headerVariant: null;
    imgAlt: undefined;
    imgPlacement: string;
    imgHeight: undefined;
    imgSrc: undefined;
    imgWidth: undefined;
    noBody: boolean;
    subtitle: undefined;
    subtitleTag: string;
    subtitleTextVariant: string;
    tag: string;
    title: undefined;
    titleTag: string;
    bgVariant: null;
    textVariant: null;
    variant: null;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BCardProps>, {
    align: undefined;
    bodyBgVariant: undefined;
    bodyClass: undefined;
    bodyTag: string;
    bodyText: string;
    bodyTextVariant: undefined;
    borderVariant: null;
    footer: undefined;
    footerBgVariant: undefined;
    footerBorderVariant: undefined;
    footerClass: undefined;
    footerHtml: string;
    footerTag: string;
    footerTextVariant: undefined;
    footerVariant: null;
    header: undefined;
    headerBgVariant: undefined;
    headerBorderVariant: undefined;
    headerClass: undefined;
    headerHtml: string;
    headerTag: string;
    headerTextVariant: undefined;
    headerVariant: null;
    imgAlt: undefined;
    imgPlacement: string;
    imgHeight: undefined;
    imgSrc: undefined;
    imgWidth: undefined;
    noBody: boolean;
    subtitle: undefined;
    subtitleTag: string;
    subtitleTextVariant: string;
    tag: string;
    title: undefined;
    titleTag: string;
    bgVariant: null;
    textVariant: null;
    variant: null;
}>>>, {
    tag: string;
    title: string;
    footer: string;
    header: string;
    align: import('../../types').AlignmentTextHorizontal;
    variant: keyof import('../../types').BaseColorVariant | null;
    bodyClass: any;
    headerClass: any;
    headerTag: string;
    bgVariant: keyof import('../../types').BaseColorVariant | null;
    textVariant: keyof import('../../types').BaseTextColorVariant | null;
    bodyBgVariant: keyof import('../../types').BaseColorVariant | null;
    bodyTextVariant: keyof import('../../types').BaseTextColorVariant | null;
    footerBgVariant: keyof import('../../types').BaseColorVariant | null;
    footerBorderVariant: keyof import('../../types').BaseColorVariant | null;
    footerClass: any;
    footerTextVariant: keyof import('../../types').BaseTextColorVariant | null;
    footerVariant: keyof import('../../types').BaseColorVariant | null;
    headerBgVariant: keyof import('../../types').BaseColorVariant | null;
    headerBorderVariant: keyof import('../../types').BaseColorVariant | null;
    headerTextVariant: keyof import('../../types').BaseTextColorVariant | null;
    headerVariant: keyof import('../../types').BaseColorVariant | null;
    titleTag: string;
    borderVariant: keyof import('../../types').BaseColorVariant | null;
    subtitle: string;
    subtitleTag: string;
    subtitleTextVariant: keyof import('../../types').BaseTextColorVariant | null;
    bodyTag: string;
    bodyText: string;
    footerHtml: string;
    footerTag: string;
    headerHtml: string;
    imgAlt: string;
    imgPlacement: import('../../types').Placement | "overlay";
    imgHeight: import('../../types').Numberish;
    imgSrc: string;
    imgWidth: import('../../types').Numberish;
    noBody: boolean;
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
