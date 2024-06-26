import { Component, ComponentInternalInstance, ComputedRef, InjectionKey, MaybeRefOrGetter, Ref, ShallowRef } from 'vue';
import { BModalProps, BreadcrumbItemRaw, ButtonVariant, BvnComponentProps, CheckboxValue, ClassValue, ColorVariant, LiteralUnion, Numberish, OrchestratedModal, OrchestratedToast, RadioValue, RadiusElement, Size, TabType, TextColorVariant } from '../types';

export declare const carouselInjectionKey: InjectionKey<{
    background: Readonly<Ref<string | undefined>>;
    width: Readonly<Ref<string | undefined>>;
    height: Readonly<Ref<string | undefined>>;
}>;
export declare const tabsInjectionKey: InjectionKey<{
    lazy: Readonly<Ref<boolean>>;
    card: Readonly<Ref<boolean>>;
    noFade: Readonly<Ref<boolean>>;
    registerTab: (tab: Readonly<Ref<TabType>>) => void;
    unregisterTab: (id: string) => void;
    activateTab: (id: string | undefined) => void;
    activeTabClass: Readonly<Ref<ClassValue>>;
    inactiveTabClass: Readonly<Ref<ClassValue>>;
    tabClass: Readonly<Ref<ClassValue>>;
    activeId: Readonly<Ref<string | undefined>>;
}>;
export declare const progressInjectionKey: InjectionKey<{
    animated: Readonly<Ref<boolean | undefined>>;
    max: Readonly<Ref<Numberish>>;
    showProgress: Readonly<Ref<boolean | undefined>>;
    showValue: Readonly<Ref<boolean | undefined>>;
    striped: Readonly<Ref<boolean | undefined>>;
}>;
export declare const listGroupInjectionKey: InjectionKey<{
    numbered: Readonly<Ref<boolean>>;
}>;
export declare const avatarGroupInjectionKey: InjectionKey<{
    overlapScale: Readonly<Ref<number>>;
    size: Readonly<Ref<LiteralUnion<Size, Numberish> | undefined>>;
    square: Readonly<Ref<boolean>>;
    rounded: Readonly<Ref<RadiusElement | boolean>>;
    roundedTop: Readonly<Ref<RadiusElement | boolean | undefined>>;
    roundedBottom: Readonly<Ref<RadiusElement | boolean | undefined>>;
    roundedStart: Readonly<Ref<RadiusElement | boolean | undefined>>;
    roundedEnd: Readonly<Ref<RadiusElement | boolean | undefined>>;
    variant: Readonly<Ref<ColorVariant | null>>;
    bgVariant: Readonly<Ref<ColorVariant | null>>;
    textVariant: Readonly<Ref<TextColorVariant | null>>;
}>;
export declare const accordionInjectionKey: InjectionKey<{
    openItem: Readonly<Ref<string | undefined>>;
    free: Readonly<Ref<boolean>>;
    setOpenItem: (id: string) => void;
}>;
export declare const checkboxGroupKey: InjectionKey<{
    modelValue: Ref<readonly CheckboxValue[]>;
    switch: Readonly<Ref<boolean>>;
    buttonVariant: Readonly<Ref<ButtonVariant | null>>;
    form: Readonly<Ref<string | undefined>>;
    name: Readonly<Ref<string>>;
    state: Readonly<Ref<boolean | undefined | null>>;
    plain: Readonly<Ref<boolean>>;
    size: Readonly<Ref<Size>>;
    inline: Readonly<Ref<boolean>>;
    reverse: Readonly<Ref<boolean>>;
    required: Readonly<Ref<boolean>>;
    buttons: Readonly<Ref<boolean>>;
    disabled: Readonly<Ref<boolean>>;
}>;
export declare const radioGroupKey: InjectionKey<{
    modelValue: Ref<RadioValue>;
    buttonVariant: Readonly<Ref<ButtonVariant | null>>;
    form: Readonly<Ref<string | undefined>>;
    name: Readonly<Ref<string>>;
    buttons: Readonly<Ref<boolean>>;
    state: Readonly<Ref<boolean | undefined | null>>;
    plain: Readonly<Ref<boolean>>;
    size: Readonly<Ref<Size>>;
    inline: Readonly<Ref<boolean>>;
    reverse: Readonly<Ref<boolean>>;
    required: Readonly<Ref<boolean>>;
    disabled: Readonly<Ref<boolean>>;
}>;
export declare const collapseInjectionKey: InjectionKey<{
    id?: Readonly<Ref<string>>;
    readonly hide?: () => void;
    readonly show?: () => void;
    readonly toggle?: () => void;
    visible?: Readonly<Ref<boolean>>;
    isNav?: Readonly<Ref<boolean>>;
}>;
export declare const dropdownInjectionKey: InjectionKey<{
    id?: Readonly<Ref<string>>;
    readonly hide?: () => void;
    readonly show?: () => void;
    readonly toggle?: () => void;
    visible?: Readonly<Ref<boolean>>;
    isNav?: Readonly<Ref<boolean>>;
}>;
export declare const navbarInjectionKey: InjectionKey<{
    tag?: Readonly<Ref<string>>;
    autoClose?: Readonly<Ref<boolean>>;
}>;
export declare const toastPluginKey: InjectionKey<{
    toasts: ShallowRef<ComputedRef<{
        component: unknown;
        props: Omit<OrchestratedToast, 'value'> & {
            _self: symbol;
            _modelValue: OrchestratedToast['value'];
        };
    }>[]>;
    _setIsAppend: (value: boolean) => void;
    show: (obj: {
        component?: Readonly<Component>;
        props?: MaybeRefOrGetter<Readonly<OrchestratedToast>>;
    }) => symbol;
    remove: (self: symbol) => void;
}>;
export declare const rtlPluginKey: InjectionKey<{
    isRtl: Ref<boolean>;
    locale: Ref<string | undefined>;
}>;
export declare const breadcrumbPluginKey: InjectionKey<{
    items: Ref<BreadcrumbItemRaw[]>;
    reset: () => void;
}>;
export declare const modalControllerPluginKey: InjectionKey<{
    modals: ShallowRef<ComputedRef<{
        component: unknown;
        props: OrchestratedModal & {
            _self: symbol;
            _modelValue: BModalProps['modelValue'];
            _promise: {
                value: Promise<boolean | null>;
                resolve: (value: boolean | null) => void;
            };
            _isConfirm: boolean;
        };
    }>[]>;
    show: (obj: {
        component?: Readonly<Component>;
        props?: MaybeRefOrGetter<Readonly<OrchestratedModal>>;
    }) => Promise<boolean | null>;
    confirm: (obj: {
        component?: Readonly<Component>;
        props?: MaybeRefOrGetter<Readonly<OrchestratedModal>>;
    }) => Promise<boolean | null>;
    remove: (self: symbol) => void;
}>;
export declare const modalManagerPluginKey: InjectionKey<{
    stack: ShallowRef<Readonly<ComponentInternalInstance>[]>;
    countStack: Readonly<Ref<number>>;
    lastStack: Readonly<Ref<ComponentInternalInstance | undefined>>;
    pushStack: (modal: Readonly<ComponentInternalInstance>) => void;
    removeStack: (modal: Readonly<ComponentInternalInstance>) => void;
    registry: ShallowRef<Readonly<ComponentInternalInstance>[]>;
    pushRegistry: (modal: Readonly<ComponentInternalInstance>) => void;
    removeRegistry: (modal: Readonly<ComponentInternalInstance>) => void;
}>;
export declare const idPluginKey: InjectionKey<() => string>;
export declare const defaultsKey: InjectionKey<Ref<Partial<BvnComponentProps>>>;
