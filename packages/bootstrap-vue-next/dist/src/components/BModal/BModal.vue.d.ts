import { BvTriggerableEvent } from '../../utils';

type SharedSlotsData = {
    cancel: () => void;
    close: () => void;
    hide: (trigger?: string) => void;
    ok: () => void;
    visible: boolean;
};
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    modelValue: import('vue').PropType<boolean>;
    title: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    id: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    body: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    size: {
        type: import('vue').PropType<"xl" | keyof import('../../types').BaseSize>;
        default: string;
    };
    lazy: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noFade: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    teleportDisabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    teleportTo: {
        type: import('vue').PropType<string | import('vue').RendererElement | null>;
        default: string;
    };
    bodyClass: {
        type: import('vue').PropType<any>;
        default: null;
    };
    headerClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    transProps: {
        type: import('vue').PropType<Readonly<import('../../types').BTransitionProps>>;
        default: undefined;
    };
    autoFocus: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    autoFocusButton: {
        type: import('vue').PropType<"close" | "cancel" | "ok">;
        default: undefined;
    };
    backdropVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseColorVariant | null>;
        default: undefined;
    };
    bodyAttrs: {
        type: import('vue').PropType<Readonly<import('../../types').AttrsValue>>;
        default: undefined;
    };
    bodyBgVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseColorVariant | null>;
        default: null;
    };
    bodyScrolling: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    bodyTextVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseTextColorVariant | null>;
        default: null;
    };
    bodyVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseColorVariant | null>;
        default: null;
    };
    busy: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    buttonSize: {
        type: import('vue').PropType<keyof import('../../types').BaseSize>;
        default: string;
    };
    cancelDisabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    cancelTitle: {
        type: import('vue').PropType<string>;
        default: string;
    };
    cancelVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseButtonVariant | null>;
        default: string;
    };
    centered: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    contentClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    dialogClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    footerBgVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseColorVariant | null>;
        default: null;
    };
    footerBorderVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseColorVariant | null>;
        default: null;
    };
    footerClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    footerTextVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseTextColorVariant | null>;
        default: null;
    };
    footerVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseColorVariant | null>;
        default: null;
    };
    fullscreen: {
        type: import('vue').PropType<boolean | import('../../types').Breakpoint>;
        default: boolean;
    };
    headerBgVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseColorVariant | null>;
        default: null;
    };
    headerBorderVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseColorVariant | null>;
        default: null;
    };
    headerCloseClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    headerCloseLabel: {
        type: import('vue').PropType<string>;
        default: string;
    };
    headerCloseVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseButtonVariant | null>;
        default: string;
    };
    headerTextVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseTextColorVariant | null>;
        default: null;
    };
    headerVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseColorVariant | null>;
        default: null;
    };
    hideBackdrop: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    hideFooter: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    hideHeader: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    hideHeaderClose: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    modalClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    noCloseOnBackdrop: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noCloseOnEsc: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    okDisabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    okOnly: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    okTitle: {
        type: import('vue').PropType<string>;
        default: string;
    };
    okVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseButtonVariant | null>;
        default: string;
    };
    scrollable: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    titleClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    titleSrOnly: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    titleTag: {
        type: import('vue').PropType<string>;
        default: string;
    };
}, {
    hide: (trigger?: string) => void;
    id: import('vue').ComputedRef<string>;
    show: () => void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    hidden: (value: BvTriggerableEvent) => void;
    close: (value: BvTriggerableEvent) => void;
    cancel: (value: BvTriggerableEvent) => void;
    show: (value: BvTriggerableEvent) => void;
    hide: (value: BvTriggerableEvent) => void;
    "hide-prevented": () => void;
    "show-prevented": () => void;
    shown: (value: BvTriggerableEvent) => void;
    ok: (value: BvTriggerableEvent) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<boolean>;
    title: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    id: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    body: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    size: {
        type: import('vue').PropType<"xl" | keyof import('../../types').BaseSize>;
        default: string;
    };
    lazy: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noFade: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    teleportDisabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    teleportTo: {
        type: import('vue').PropType<string | import('vue').RendererElement | null>;
        default: string;
    };
    bodyClass: {
        type: import('vue').PropType<any>;
        default: null;
    };
    headerClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    transProps: {
        type: import('vue').PropType<Readonly<import('../../types').BTransitionProps>>;
        default: undefined;
    };
    autoFocus: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    autoFocusButton: {
        type: import('vue').PropType<"close" | "cancel" | "ok">;
        default: undefined;
    };
    backdropVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseColorVariant | null>;
        default: undefined;
    };
    bodyAttrs: {
        type: import('vue').PropType<Readonly<import('../../types').AttrsValue>>;
        default: undefined;
    };
    bodyBgVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseColorVariant | null>;
        default: null;
    };
    bodyScrolling: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    bodyTextVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseTextColorVariant | null>;
        default: null;
    };
    bodyVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseColorVariant | null>;
        default: null;
    };
    busy: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    buttonSize: {
        type: import('vue').PropType<keyof import('../../types').BaseSize>;
        default: string;
    };
    cancelDisabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    cancelTitle: {
        type: import('vue').PropType<string>;
        default: string;
    };
    cancelVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseButtonVariant | null>;
        default: string;
    };
    centered: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    contentClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    dialogClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    footerBgVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseColorVariant | null>;
        default: null;
    };
    footerBorderVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseColorVariant | null>;
        default: null;
    };
    footerClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    footerTextVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseTextColorVariant | null>;
        default: null;
    };
    footerVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseColorVariant | null>;
        default: null;
    };
    fullscreen: {
        type: import('vue').PropType<boolean | import('../../types').Breakpoint>;
        default: boolean;
    };
    headerBgVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseColorVariant | null>;
        default: null;
    };
    headerBorderVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseColorVariant | null>;
        default: null;
    };
    headerCloseClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    headerCloseLabel: {
        type: import('vue').PropType<string>;
        default: string;
    };
    headerCloseVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseButtonVariant | null>;
        default: string;
    };
    headerTextVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseTextColorVariant | null>;
        default: null;
    };
    headerVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseColorVariant | null>;
        default: null;
    };
    hideBackdrop: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    hideFooter: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    hideHeader: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    hideHeaderClose: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    modalClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    noCloseOnBackdrop: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noCloseOnEsc: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    okDisabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    okOnly: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    okTitle: {
        type: import('vue').PropType<string>;
        default: string;
    };
    okVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseButtonVariant | null>;
        default: string;
    };
    scrollable: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    titleClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    titleSrOnly: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    titleTag: {
        type: import('vue').PropType<string>;
        default: string;
    };
}>> & {
    onHidden?: ((value: BvTriggerableEvent) => any) | undefined;
    onShow?: ((value: BvTriggerableEvent) => any) | undefined;
    onHide?: ((value: BvTriggerableEvent) => any) | undefined;
    "onHide-prevented"?: (() => any) | undefined;
    "onShow-prevented"?: (() => any) | undefined;
    onShown?: ((value: BvTriggerableEvent) => any) | undefined;
    onClose?: ((value: BvTriggerableEvent) => any) | undefined;
    onCancel?: ((value: BvTriggerableEvent) => any) | undefined;
    onOk?: ((value: BvTriggerableEvent) => any) | undefined;
}, {
    title: string;
    id: string;
    body: string;
    size: "xl" | keyof import('../../types').BaseSize;
    lazy: boolean;
    noFade: boolean;
    teleportDisabled: boolean;
    teleportTo: string | import('vue').RendererElement | null;
    bodyClass: any;
    headerClass: any;
    transProps: Readonly<import('../../types').BTransitionProps>;
    autoFocus: boolean;
    autoFocusButton: "close" | "cancel" | "ok";
    backdropVariant: keyof import('../../types').BaseColorVariant | null;
    bodyAttrs: Readonly<import('../../types').AttrsValue>;
    bodyBgVariant: keyof import('../../types').BaseColorVariant | null;
    bodyScrolling: boolean;
    bodyTextVariant: keyof import('../../types').BaseTextColorVariant | null;
    bodyVariant: keyof import('../../types').BaseColorVariant | null;
    busy: boolean;
    buttonSize: keyof import('../../types').BaseSize;
    cancelDisabled: boolean;
    cancelTitle: string;
    cancelVariant: keyof import('../../types').BaseButtonVariant | null;
    centered: boolean;
    contentClass: any;
    dialogClass: any;
    footerBgVariant: keyof import('../../types').BaseColorVariant | null;
    footerBorderVariant: keyof import('../../types').BaseColorVariant | null;
    footerClass: any;
    footerTextVariant: keyof import('../../types').BaseTextColorVariant | null;
    footerVariant: keyof import('../../types').BaseColorVariant | null;
    fullscreen: boolean | import('../../types').Breakpoint;
    headerBgVariant: keyof import('../../types').BaseColorVariant | null;
    headerBorderVariant: keyof import('../../types').BaseColorVariant | null;
    headerCloseClass: any;
    headerCloseLabel: string;
    headerCloseVariant: keyof import('../../types').BaseButtonVariant | null;
    headerTextVariant: keyof import('../../types').BaseTextColorVariant | null;
    headerVariant: keyof import('../../types').BaseColorVariant | null;
    hideBackdrop: boolean;
    hideFooter: boolean;
    hideHeader: boolean;
    hideHeaderClose: boolean;
    modalClass: any;
    noCloseOnBackdrop: boolean;
    noCloseOnEsc: boolean;
    okDisabled: boolean;
    okOnly: boolean;
    okTitle: string;
    okVariant: keyof import('../../types').BaseButtonVariant | null;
    scrollable: boolean;
    titleClass: any;
    titleSrOnly: boolean;
    titleTag: string;
}, {}>, Readonly<{
    backdrop?: ((props: Record<string, never>) => any) | undefined;
    cancel?: ((props: SharedSlotsData) => any) | undefined;
    default?: ((props: SharedSlotsData) => any) | undefined;
    footer?: ((props: SharedSlotsData) => any) | undefined;
    header?: ((props: SharedSlotsData) => any) | undefined;
    'header-close'?: ((props: Record<string, never>) => any) | undefined;
    ok?: ((props: SharedSlotsData) => any) | undefined;
    title?: ((props: SharedSlotsData) => any) | undefined;
}> & {
    backdrop?: ((props: Record<string, never>) => any) | undefined;
    cancel?: ((props: SharedSlotsData) => any) | undefined;
    default?: ((props: SharedSlotsData) => any) | undefined;
    footer?: ((props: SharedSlotsData) => any) | undefined;
    header?: ((props: SharedSlotsData) => any) | undefined;
    'header-close'?: ((props: Record<string, never>) => any) | undefined;
    ok?: ((props: SharedSlotsData) => any) | undefined;
    title?: ((props: SharedSlotsData) => any) | undefined;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
