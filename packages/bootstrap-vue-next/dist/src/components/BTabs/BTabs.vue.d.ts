import { BvEvent } from '../../utils';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    modelValue: import('vue').PropType<number>;
    activeId: import('vue').PropType<string | undefined>;
    fill: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    tag: {
        type: import('vue').PropType<string>;
        default: string;
    };
    small: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    end: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    id: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    align: {
        type: import('vue').PropType<import('../../types').AlignmentJustifyContent>;
        default: undefined;
    };
    lazy: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noFade: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    vertical: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    contentClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    card: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    justified: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    pills: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    activeTabClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    activeNavItemClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    inactiveNavItemClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    inactiveTabClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    navClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    navItemClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    navWrapperClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    noNavStyle: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    tabClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: () => void;
    "activate-tab": (v1: number, v2: number, v3: BvEvent) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<number>;
    activeId: import('vue').PropType<string | undefined>;
    fill: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    tag: {
        type: import('vue').PropType<string>;
        default: string;
    };
    small: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    end: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    id: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    align: {
        type: import('vue').PropType<import('../../types').AlignmentJustifyContent>;
        default: undefined;
    };
    lazy: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noFade: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    vertical: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    contentClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    card: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    justified: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    pills: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    activeTabClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    activeNavItemClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    inactiveNavItemClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    inactiveTabClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    navClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    navItemClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    navWrapperClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    noNavStyle: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    tabClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
}>> & {
    onClick?: (() => any) | undefined;
    "onActivate-tab"?: ((v1: number, v2: number, v3: BvEvent) => any) | undefined;
}, {
    fill: boolean;
    tag: string;
    small: boolean;
    end: boolean;
    id: string;
    align: import('../../types').AlignmentJustifyContent;
    lazy: boolean;
    noFade: boolean;
    vertical: boolean;
    contentClass: any;
    card: boolean;
    justified: boolean;
    pills: boolean;
    activeTabClass: any;
    activeNavItemClass: any;
    inactiveNavItemClass: any;
    inactiveTabClass: any;
    navClass: any;
    navItemClass: any;
    navWrapperClass: any;
    noNavStyle: boolean;
    tabClass: any;
}, {}>, Readonly<{
    default?: ((props: Record<string, never>) => any) | undefined;
    empty?: ((props: Record<string, never>) => any) | undefined;
    'tabs-end'?: ((props: Record<string, never>) => any) | undefined;
    'tabs-start'?: ((props: Record<string, never>) => any) | undefined;
}> & {
    default?: ((props: Record<string, never>) => any) | undefined;
    empty?: ((props: Record<string, never>) => any) | undefined;
    'tabs-end'?: ((props: Record<string, never>) => any) | undefined;
    'tabs-start'?: ((props: Record<string, never>) => any) | undefined;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
