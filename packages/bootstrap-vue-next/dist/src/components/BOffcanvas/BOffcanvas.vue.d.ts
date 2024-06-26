import { BvTriggerableEvent } from '../../utils';

type SharedSlotsData = {
    visible: boolean;
    placement: 'top' | 'bottom' | 'start' | 'end';
    hide: (trigger?: string) => void;
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
    width: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    lazy: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    placement: {
        type: import('vue').PropType<import('../../types').Placement>;
        default: string;
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
        default: undefined;
    };
    headerClass: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    backdropVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseColorVariant | "white" | "transparent" | null>;
        default: string;
    };
    bodyAttrs: {
        type: import('vue').PropType<Readonly<import('../../types').AttrsValue>>;
        default: undefined;
    };
    bodyScrolling: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    footerClass: {
        type: import('vue').PropType<string>;
        default: undefined;
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
    noCloseOnBackdrop: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noCloseOnEsc: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    backdrop: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    backdropBlur: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    noFocus: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noHeader: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noHeaderClose: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    shadow: {
        type: import('vue').PropType<boolean | keyof import('../../types').BaseSize>;
        default: boolean;
    };
}, {
    hide: (trigger?: string) => void;
    show: () => void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    hidden: (value: BvTriggerableEvent) => void;
    close: (value: BvTriggerableEvent) => void;
    show: (value: BvTriggerableEvent) => void;
    hide: (value: BvTriggerableEvent) => void;
    "hide-prevented": () => void;
    "show-prevented": () => void;
    shown: (value: BvTriggerableEvent) => void;
    esc: (value: BvTriggerableEvent) => void;
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
    width: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    lazy: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    placement: {
        type: import('vue').PropType<import('../../types').Placement>;
        default: string;
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
        default: undefined;
    };
    headerClass: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    backdropVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseColorVariant | "white" | "transparent" | null>;
        default: string;
    };
    bodyAttrs: {
        type: import('vue').PropType<Readonly<import('../../types').AttrsValue>>;
        default: undefined;
    };
    bodyScrolling: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    footerClass: {
        type: import('vue').PropType<string>;
        default: undefined;
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
    noCloseOnBackdrop: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noCloseOnEsc: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    backdrop: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    backdropBlur: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    noFocus: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noHeader: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noHeaderClose: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    shadow: {
        type: import('vue').PropType<boolean | keyof import('../../types').BaseSize>;
        default: boolean;
    };
}>> & {
    onHidden?: ((value: BvTriggerableEvent) => any) | undefined;
    onShow?: ((value: BvTriggerableEvent) => any) | undefined;
    onHide?: ((value: BvTriggerableEvent) => any) | undefined;
    "onHide-prevented"?: (() => any) | undefined;
    "onShow-prevented"?: (() => any) | undefined;
    onShown?: ((value: BvTriggerableEvent) => any) | undefined;
    onClose?: ((value: BvTriggerableEvent) => any) | undefined;
    onEsc?: ((value: BvTriggerableEvent) => any) | undefined;
}, {
    title: string;
    id: string;
    width: string;
    lazy: boolean;
    placement: import('../../types').Placement;
    teleportDisabled: boolean;
    teleportTo: string | import('vue').RendererElement | null;
    bodyClass: any;
    headerClass: string;
    backdropVariant: keyof import('../../types').BaseColorVariant | "white" | "transparent" | null;
    bodyAttrs: Readonly<import('../../types').AttrsValue>;
    bodyScrolling: boolean;
    footerClass: string;
    headerCloseClass: any;
    headerCloseLabel: string;
    headerCloseVariant: keyof import('../../types').BaseButtonVariant | null;
    noCloseOnBackdrop: boolean;
    noCloseOnEsc: boolean;
    backdrop: boolean;
    backdropBlur: string;
    noFocus: boolean;
    noHeader: boolean;
    noHeaderClose: boolean;
    shadow: boolean | keyof import('../../types').BaseSize;
}, {}>, Readonly<{
    backdrop?: ((props: Record<string, never>) => any) | undefined;
    default?: ((props: SharedSlotsData) => any) | undefined;
    footer?: ((props: SharedSlotsData) => any) | undefined;
    header?: ((props: SharedSlotsData) => any) | undefined;
    'header-close'?: ((props: Record<string, never>) => any) | undefined;
    title?: ((props: SharedSlotsData) => any) | undefined;
}> & {
    backdrop?: ((props: Record<string, never>) => any) | undefined;
    default?: ((props: SharedSlotsData) => any) | undefined;
    footer?: ((props: SharedSlotsData) => any) | undefined;
    header?: ((props: SharedSlotsData) => any) | undefined;
    'header-close'?: ((props: Record<string, never>) => any) | undefined;
    title?: ((props: SharedSlotsData) => any) | undefined;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
