import { BvTriggerableEvent } from '../../utils';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    modelValue: import('vue').PropType<boolean>;
    split: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    end: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    center: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    offset: {
        type: import('vue').PropType<string | number | Readonly<{
            mainAxis?: number | undefined;
            crossAxis?: number | undefined;
            alignmentAxis?: number | null | undefined;
        }>>;
        default: number;
    };
    id: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    ariaLabel: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    role: {
        type: import('vue').PropType<string>;
        default: string;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    text: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    size: {
        type: import('vue').PropType<keyof import('../../types').BaseSize>;
        default: string;
    };
    variant: {
        type: import('vue').PropType<keyof import('../../types').BaseButtonVariant | null>;
        default: string;
    };
    lazy: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    boundary: {
        type: import('vue').PropType<Element | "document" | "clippingAncestors" | Element[] | import('../../../node_modules/@floating-ui/core').Rect | "viewport">;
        default: string;
    };
    boundaryPadding: {
        type: import('vue').PropType<import('../../../node_modules/@floating-ui/core').Padding>;
        default: undefined;
    };
    floatingMiddleware: {
        type: import('vue').PropType<{
            name: string;
            options?: any;
            fn: (state: {
                x: number;
                y: number;
                placement: import('../../../node_modules/@floating-ui/core').Placement;
                strategy: import('../../../node_modules/@floating-ui/core').Strategy;
                initialPlacement: import('../../../node_modules/@floating-ui/core').Placement;
                middlewareData: import('../../../node_modules/@floating-ui/core').MiddlewareData;
                rects: import('../../../node_modules/@floating-ui/core').ElementRects;
                platform: import('../../../node_modules/@floating-ui/core').Platform;
                elements: import('@floating-ui/vue').Elements;
            }) => import('../../../node_modules/@floating-ui/core').MiddlewareReturn | Promise<import('../../../node_modules/@floating-ui/core').MiddlewareReturn>;
        }[]>;
        default: undefined;
    };
    noFlip: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noShift: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noSize: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    strategy: {
        type: import('vue').PropType<import('../../../node_modules/@floating-ui/core').Strategy>;
        default: string;
    };
    teleportDisabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    teleportTo: {
        type: import('vue').PropType<string | import('vue').RendererElement | null>;
        default: undefined;
    };
    isNav: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    autoClose: {
        type: import('vue').PropType<boolean | "inside" | "outside">;
        default: boolean;
    };
    dropend: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    dropstart: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    dropup: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    menuClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    noCaret: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    splitButtonType: {
        type: import('vue').PropType<import('../../types').ButtonType>;
        default: string;
    };
    splitClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    splitDisabled: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    splitHref: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    splitTo: {
        type: import('vue').PropType<import('vue-router').RouteLocationRaw>;
        default: undefined;
    };
    splitVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseButtonVariant | null>;
        default: undefined;
    };
    toggleClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    toggleText: {
        type: import('vue').PropType<string>;
        default: string;
    };
}, {
    hide: () => void;
    show: () => void;
    toggle: () => void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    hidden: () => void;
    click: (event: MouseEvent) => void;
    toggle: () => void;
    show: (value: BvTriggerableEvent) => void;
    hide: (value: BvTriggerableEvent) => void;
    "hide-prevented": () => void;
    "show-prevented": () => void;
    shown: () => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<boolean>;
    split: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    end: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    center: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    offset: {
        type: import('vue').PropType<string | number | Readonly<{
            mainAxis?: number | undefined;
            crossAxis?: number | undefined;
            alignmentAxis?: number | null | undefined;
        }>>;
        default: number;
    };
    id: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    ariaLabel: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    role: {
        type: import('vue').PropType<string>;
        default: string;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    text: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    size: {
        type: import('vue').PropType<keyof import('../../types').BaseSize>;
        default: string;
    };
    variant: {
        type: import('vue').PropType<keyof import('../../types').BaseButtonVariant | null>;
        default: string;
    };
    lazy: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    boundary: {
        type: import('vue').PropType<Element | "document" | "clippingAncestors" | Element[] | import('../../../node_modules/@floating-ui/core').Rect | "viewport">;
        default: string;
    };
    boundaryPadding: {
        type: import('vue').PropType<import('../../../node_modules/@floating-ui/core').Padding>;
        default: undefined;
    };
    floatingMiddleware: {
        type: import('vue').PropType<{
            name: string;
            options?: any;
            fn: (state: {
                x: number;
                y: number;
                placement: import('../../../node_modules/@floating-ui/core').Placement;
                strategy: import('../../../node_modules/@floating-ui/core').Strategy;
                initialPlacement: import('../../../node_modules/@floating-ui/core').Placement;
                middlewareData: import('../../../node_modules/@floating-ui/core').MiddlewareData;
                rects: import('../../../node_modules/@floating-ui/core').ElementRects;
                platform: import('../../../node_modules/@floating-ui/core').Platform;
                elements: import('@floating-ui/vue').Elements;
            }) => import('../../../node_modules/@floating-ui/core').MiddlewareReturn | Promise<import('../../../node_modules/@floating-ui/core').MiddlewareReturn>;
        }[]>;
        default: undefined;
    };
    noFlip: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noShift: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noSize: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    strategy: {
        type: import('vue').PropType<import('../../../node_modules/@floating-ui/core').Strategy>;
        default: string;
    };
    teleportDisabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    teleportTo: {
        type: import('vue').PropType<string | import('vue').RendererElement | null>;
        default: undefined;
    };
    isNav: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    autoClose: {
        type: import('vue').PropType<boolean | "inside" | "outside">;
        default: boolean;
    };
    dropend: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    dropstart: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    dropup: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    menuClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    noCaret: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    splitButtonType: {
        type: import('vue').PropType<import('../../types').ButtonType>;
        default: string;
    };
    splitClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    splitDisabled: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    splitHref: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    splitTo: {
        type: import('vue').PropType<import('vue-router').RouteLocationRaw>;
        default: undefined;
    };
    splitVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseButtonVariant | null>;
        default: undefined;
    };
    toggleClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    toggleText: {
        type: import('vue').PropType<string>;
        default: string;
    };
}>> & {
    onHidden?: (() => any) | undefined;
    onShow?: ((value: BvTriggerableEvent) => any) | undefined;
    onHide?: ((value: BvTriggerableEvent) => any) | undefined;
    "onHide-prevented"?: (() => any) | undefined;
    "onShow-prevented"?: (() => any) | undefined;
    onShown?: (() => any) | undefined;
    onClick?: ((event: MouseEvent) => any) | undefined;
    onToggle?: (() => any) | undefined;
}, {
    split: boolean;
    end: boolean;
    center: boolean;
    offset: string | number | Readonly<{
        mainAxis?: number | undefined;
        crossAxis?: number | undefined;
        alignmentAxis?: number | null | undefined;
    }>;
    id: string;
    ariaLabel: string;
    role: string;
    disabled: boolean;
    text: string;
    size: keyof import('../../types').BaseSize;
    variant: keyof import('../../types').BaseButtonVariant | null;
    lazy: boolean;
    boundary: Element | "document" | "clippingAncestors" | Element[] | import('../../../node_modules/@floating-ui/core').Rect | "viewport";
    boundaryPadding: import('../../../node_modules/@floating-ui/core').Padding;
    floatingMiddleware: {
        name: string;
        options?: any;
        fn: (state: {
            x: number;
            y: number;
            placement: import('../../../node_modules/@floating-ui/core').Placement;
            strategy: import('../../../node_modules/@floating-ui/core').Strategy;
            initialPlacement: import('../../../node_modules/@floating-ui/core').Placement;
            middlewareData: import('../../../node_modules/@floating-ui/core').MiddlewareData;
            rects: import('../../../node_modules/@floating-ui/core').ElementRects;
            platform: import('../../../node_modules/@floating-ui/core').Platform;
            elements: import('@floating-ui/vue').Elements;
        }) => import('../../../node_modules/@floating-ui/core').MiddlewareReturn | Promise<import('../../../node_modules/@floating-ui/core').MiddlewareReturn>;
    }[];
    noFlip: boolean;
    noShift: boolean;
    noSize: boolean;
    strategy: import('../../../node_modules/@floating-ui/core').Strategy;
    teleportDisabled: boolean;
    teleportTo: string | import('vue').RendererElement | null;
    isNav: boolean;
    autoClose: boolean | "inside" | "outside";
    dropend: boolean;
    dropstart: boolean;
    dropup: boolean;
    menuClass: any;
    noCaret: boolean;
    splitButtonType: import('../../types').ButtonType;
    splitClass: any;
    splitDisabled: boolean;
    splitHref: string;
    splitTo: import('vue-router').RouteLocationRaw;
    splitVariant: keyof import('../../types').BaseButtonVariant | null;
    toggleClass: any;
    toggleText: string;
}, {}>, Readonly<{
    'button-content'?: ((props: Record<string, never>) => any) | undefined;
    default?: ((props: {
        hide: () => void;
        show: () => void;
    }) => any) | undefined;
    'toggle-text'?: ((props: Record<string, never>) => any) | undefined;
}> & {
    'button-content'?: ((props: Record<string, never>) => any) | undefined;
    default?: ((props: {
        hide: () => void;
        show: () => void;
    }) => any) | undefined;
    'toggle-text'?: ((props: Record<string, never>) => any) | undefined;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
