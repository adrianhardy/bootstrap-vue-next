import { BvTriggerableEvent } from '../../utils';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    modelValue: import('vue').PropType<number | boolean>;
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
    title: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    id: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    body: {
        type: import('vue').PropType<string>;
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
    active: {
        type: import('vue').PropType<boolean>;
        default: undefined;
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
        type: import('vue').PropType<keyof import('../../types').BaseColorVariant | null>;
        default: undefined;
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
    noFade: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    solid: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    icon: {
        type: import('vue').PropType<boolean>;
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
    bodyClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    headerClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    headerTag: {
        type: import('vue').PropType<string>;
        default: string;
    };
    interval: {
        type: import('vue').PropType<import('../../types').Numberish>;
        default: number;
    };
    isStatus: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noCloseButton: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noHoverPause: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    progressProps: {
        type: import('vue').PropType<Omit<import('../../types').BProgressBarProps, "label" | "value" | "max" | "labelHtml">>;
        default: undefined;
    };
    showOnPause: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    toastClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    transProps: {
        type: import('vue').PropType<Readonly<import('../../types').BTransitionProps>>;
        default: undefined;
    };
    bgVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseColorVariant | null>;
        default: null;
    };
    textVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseTextColorVariant | null>;
        default: null;
    };
}, {
    pause: () => void;
    restart: () => void;
    resume: () => void;
    stop: () => void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    hidden: (value: BvTriggerableEvent) => void;
    close: (value: BvTriggerableEvent) => void;
    show: (value: BvTriggerableEvent) => void;
    hide: (value: BvTriggerableEvent) => void;
    "hide-prevented": () => void;
    "show-prevented": () => void;
    shown: (value: BvTriggerableEvent) => void;
    "close-countdown": (value: number) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<number | boolean>;
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
    title: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    id: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    body: {
        type: import('vue').PropType<string>;
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
    active: {
        type: import('vue').PropType<boolean>;
        default: undefined;
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
        type: import('vue').PropType<keyof import('../../types').BaseColorVariant | null>;
        default: undefined;
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
    noFade: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    solid: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    icon: {
        type: import('vue').PropType<boolean>;
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
    bodyClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    headerClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    headerTag: {
        type: import('vue').PropType<string>;
        default: string;
    };
    interval: {
        type: import('vue').PropType<import('../../types').Numberish>;
        default: number;
    };
    isStatus: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noCloseButton: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noHoverPause: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    progressProps: {
        type: import('vue').PropType<Omit<import('../../types').BProgressBarProps, "label" | "value" | "max" | "labelHtml">>;
        default: undefined;
    };
    showOnPause: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    toastClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    transProps: {
        type: import('vue').PropType<Readonly<import('../../types').BTransitionProps>>;
        default: undefined;
    };
    bgVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseColorVariant | null>;
        default: null;
    };
    textVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseTextColorVariant | null>;
        default: null;
    };
}>> & {
    onHidden?: ((value: BvTriggerableEvent) => any) | undefined;
    onShow?: ((value: BvTriggerableEvent) => any) | undefined;
    onHide?: ((value: BvTriggerableEvent) => any) | undefined;
    "onHide-prevented"?: (() => any) | undefined;
    "onShow-prevented"?: (() => any) | undefined;
    onShown?: ((value: BvTriggerableEvent) => any) | undefined;
    onClose?: ((value: BvTriggerableEvent) => any) | undefined;
    "onClose-countdown"?: ((value: number) => any) | undefined;
}, {
    replace: boolean;
    target: import('../../types').LinkTarget;
    to: import('vue-router').RouteLocationRaw;
    title: string;
    id: string;
    disabled: boolean;
    body: string;
    href: string;
    rel: string;
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
    noFade: boolean;
    solid: boolean;
    icon: boolean;
    exactActiveClass: string;
    stretched: boolean;
    bodyClass: any;
    headerClass: any;
    headerTag: string;
    interval: import('../../types').Numberish;
    isStatus: boolean;
    noCloseButton: boolean;
    noHoverPause: boolean;
    progressProps: Omit<import('../../types').BProgressBarProps, "label" | "value" | "max" | "labelHtml">;
    showOnPause: boolean;
    toastClass: any;
    transProps: Readonly<import('../../types').BTransitionProps>;
    bgVariant: keyof import('../../types').BaseColorVariant | null;
    textVariant: keyof import('../../types').BaseTextColorVariant | null;
}, {}>, {
    title?(_: {
        hide: (trigger?: string) => void;
    }): any;
    default?(_: {
        hide: (trigger?: string) => void;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
