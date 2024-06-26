declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    modelValue: import('vue').PropType<string[]>;
    autofocus: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    form: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    name: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    placeholder: {
        type: import('vue').PropType<string>;
        default: string;
    };
    required: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    size: {
        type: import('vue').PropType<keyof import('../../types').BaseSize>;
        default: string;
    };
    state: {
        type: import('vue').PropType<boolean | null>;
        default: null;
    };
    separator: {
        type: import('vue').PropType<string | readonly string[]>;
        default: undefined;
    };
    addButtonText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    addButtonVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseButtonVariant | null>;
        default: string;
    };
    addOnChange: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    duplicateTagText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    inputAttrs: {
        type: import('vue').PropType<Readonly<import('../../types').AttrsValue>>;
        default: undefined;
    };
    inputClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    inputId: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    inputType: {
        type: import('vue').PropType<import('../../types').InputType>;
        default: string;
    };
    invalidTagText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    limit: {
        type: import('vue').PropType<import('../../types').Numberish>;
        default: undefined;
    };
    limitTagsText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    noAddOnEnter: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noOuterFocus: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noTagRemove: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    removeOnDelete: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    tagClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    tagPills: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    tagRemoveLabel: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    tagRemovedLabel: {
        type: import('vue').PropType<string>;
        default: string;
    };
    tagValidator: {
        type: import('vue').PropType<(t: string) => boolean>;
        default: () => true;
    };
    tagVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseColorVariant | null>;
        default: string;
    };
}, {
    blur: () => void;
    element: import('vue').Ref<HTMLInputElement | null>;
    focus: () => void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    blur: (value: FocusEvent) => void;
    focus: (value: FocusEvent) => void;
    focusin: (value: FocusEvent) => void;
    focusout: (value: FocusEvent) => void;
    "tag-state": (...args: string[][]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<string[]>;
    autofocus: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    form: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    name: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    placeholder: {
        type: import('vue').PropType<string>;
        default: string;
    };
    required: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    size: {
        type: import('vue').PropType<keyof import('../../types').BaseSize>;
        default: string;
    };
    state: {
        type: import('vue').PropType<boolean | null>;
        default: null;
    };
    separator: {
        type: import('vue').PropType<string | readonly string[]>;
        default: undefined;
    };
    addButtonText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    addButtonVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseButtonVariant | null>;
        default: string;
    };
    addOnChange: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    duplicateTagText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    inputAttrs: {
        type: import('vue').PropType<Readonly<import('../../types').AttrsValue>>;
        default: undefined;
    };
    inputClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    inputId: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    inputType: {
        type: import('vue').PropType<import('../../types').InputType>;
        default: string;
    };
    invalidTagText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    limit: {
        type: import('vue').PropType<import('../../types').Numberish>;
        default: undefined;
    };
    limitTagsText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    noAddOnEnter: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noOuterFocus: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noTagRemove: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    removeOnDelete: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    tagClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    tagPills: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    tagRemoveLabel: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    tagRemovedLabel: {
        type: import('vue').PropType<string>;
        default: string;
    };
    tagValidator: {
        type: import('vue').PropType<(t: string) => boolean>;
        default: () => true;
    };
    tagVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseColorVariant | null>;
        default: string;
    };
}>> & {
    onFocus?: ((value: FocusEvent) => any) | undefined;
    onFocusin?: ((value: FocusEvent) => any) | undefined;
    onFocusout?: ((value: FocusEvent) => any) | undefined;
    onBlur?: ((value: FocusEvent) => any) | undefined;
    "onTag-state"?: ((...args: string[][]) => any) | undefined;
}, {
    autofocus: boolean;
    disabled: boolean;
    form: string;
    name: string;
    placeholder: string;
    required: boolean;
    size: keyof import('../../types').BaseSize;
    state: boolean | null;
    separator: string | readonly string[];
    addButtonText: string;
    addButtonVariant: keyof import('../../types').BaseButtonVariant | null;
    addOnChange: boolean;
    duplicateTagText: string;
    inputAttrs: Readonly<import('../../types').AttrsValue>;
    inputClass: any;
    inputId: string;
    inputType: import('../../types').InputType;
    invalidTagText: string;
    limit: import('../../types').Numberish;
    limitTagsText: string;
    noAddOnEnter: boolean;
    noOuterFocus: boolean;
    noTagRemove: boolean;
    removeOnDelete: boolean;
    tagClass: any;
    tagPills: boolean;
    tagRemoveLabel: string;
    tagRemovedLabel: string;
    tagValidator: (t: string) => boolean;
    tagVariant: keyof import('../../types').BaseColorVariant | null;
}, {}>, Readonly<{
    'add-button-text'?: ((props: Record<string, never>) => any) | undefined;
    default?: ((props: {
        addButtonText: string;
        addButtonVariant: keyof import('../../types').BaseButtonVariant | null;
        addTag: (tag?: string | undefined) => void;
        disableAddButton: boolean;
        disabled: boolean;
        duplicateTagText: string;
        duplicateTags: string[];
        form: string | undefined;
        inputAttrs: {
            disabled: boolean;
            form: string | undefined;
            id: Readonly<import('vue').Ref<string>>;
            value: import('vue').Ref<string>;
        };
        inputHandlers: {
            input: (e: string | Readonly<Event>) => void;
            keydown: (e: Readonly<KeyboardEvent>) => void;
            change: (e: Readonly<Event>) => void;
        };
        inputId: Readonly<import('vue').Ref<string>>;
        inputType: import('../../types').InputType;
        invalidTagText: string;
        invalidTags: string[];
        isDuplicate: boolean;
        isInvalid: boolean;
        isLimitReached: boolean;
        limitTagsText: string;
        limit: number;
        noTagRemove: boolean;
        placeholder: string;
        removeTag: (tag?: string | undefined) => void;
        required: boolean;
        separator: string | readonly string[] | undefined;
        size: keyof import('../../types').BaseSize;
        state: boolean | null;
        tagClass: any;
        tagPills: boolean;
        tagRemoveLabel: string | undefined;
        tagVariant: keyof import('../../types').BaseColorVariant | null;
        tags: string[];
    }) => any) | undefined;
    tag?: ((props: {
        tag: string;
        tagClass: any;
        tagVariant: keyof import('../../types').BaseColorVariant | null;
        tagPills: boolean;
        removeTag: (tag?: string | undefined) => void;
    }) => any) | undefined;
}> & {
    'add-button-text'?: ((props: Record<string, never>) => any) | undefined;
    default?: ((props: {
        addButtonText: string;
        addButtonVariant: keyof import('../../types').BaseButtonVariant | null;
        addTag: (tag?: string | undefined) => void;
        disableAddButton: boolean;
        disabled: boolean;
        duplicateTagText: string;
        duplicateTags: string[];
        form: string | undefined;
        inputAttrs: {
            disabled: boolean;
            form: string | undefined;
            id: Readonly<import('vue').Ref<string>>;
            value: import('vue').Ref<string>;
        };
        inputHandlers: {
            input: (e: string | Readonly<Event>) => void;
            keydown: (e: Readonly<KeyboardEvent>) => void;
            change: (e: Readonly<Event>) => void;
        };
        inputId: Readonly<import('vue').Ref<string>>;
        inputType: import('../../types').InputType;
        invalidTagText: string;
        invalidTags: string[];
        isDuplicate: boolean;
        isInvalid: boolean;
        isLimitReached: boolean;
        limitTagsText: string;
        limit: number;
        noTagRemove: boolean;
        placeholder: string;
        removeTag: (tag?: string | undefined) => void;
        required: boolean;
        separator: string | readonly string[] | undefined;
        size: keyof import('../../types').BaseSize;
        state: boolean | null;
        tagClass: any;
        tagPills: boolean;
        tagRemoveLabel: string | undefined;
        tagVariant: keyof import('../../types').BaseColorVariant | null;
        tags: string[];
    }) => any) | undefined;
    tag?: ((props: {
        tag: string;
        tagClass: any;
        tagVariant: keyof import('../../types').BaseColorVariant | null;
        tagPills: boolean;
        removeTag: (tag?: string | undefined) => void;
    }) => any) | undefined;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
