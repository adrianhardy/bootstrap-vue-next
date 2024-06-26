import { BvEvent } from '../../utils';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    modelValue: import('vue').PropType<number>;
    ariaLabel: {
        type: import('vue').PropType<string>;
        default: string;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    align: {
        type: import('vue').PropType<"fill" | import('../../types').AlignmentJustifyContent>;
        default: string;
    };
    size: {
        type: import('vue').PropType<keyof import('../../types').BaseSize>;
        default: undefined;
    };
    ariaControls: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    limit: {
        type: import('vue').PropType<import('../../types').Numberish>;
        default: number;
    };
    pills: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    ellipsisClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    ellipsisText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    firstClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    firstNumber: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    firstText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    hideEllipsis: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    hideGotoEndButtons: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    labelFirstPage: {
        type: import('vue').PropType<string>;
        default: string;
    };
    labelLastPage: {
        type: import('vue').PropType<string>;
        default: string;
    };
    labelNextPage: {
        type: import('vue').PropType<string>;
        default: string;
    };
    labelPage: {
        type: import('vue').PropType<string>;
        default: string;
    };
    labelPrevPage: {
        type: import('vue').PropType<string>;
        default: string;
    };
    lastClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    lastNumber: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    lastText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    nextClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    nextText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    pageClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    perPage: {
        type: import('vue').PropType<import('../../types').Numberish>;
        default: number;
    };
    prevClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    prevText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    totalRows: {
        type: import('vue').PropType<import('../../types').Numberish>;
        default: number;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "page-click": (event: BvEvent, pageNumber: number) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<number>;
    ariaLabel: {
        type: import('vue').PropType<string>;
        default: string;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    align: {
        type: import('vue').PropType<"fill" | import('../../types').AlignmentJustifyContent>;
        default: string;
    };
    size: {
        type: import('vue').PropType<keyof import('../../types').BaseSize>;
        default: undefined;
    };
    ariaControls: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    limit: {
        type: import('vue').PropType<import('../../types').Numberish>;
        default: number;
    };
    pills: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    ellipsisClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    ellipsisText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    firstClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    firstNumber: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    firstText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    hideEllipsis: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    hideGotoEndButtons: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    labelFirstPage: {
        type: import('vue').PropType<string>;
        default: string;
    };
    labelLastPage: {
        type: import('vue').PropType<string>;
        default: string;
    };
    labelNextPage: {
        type: import('vue').PropType<string>;
        default: string;
    };
    labelPage: {
        type: import('vue').PropType<string>;
        default: string;
    };
    labelPrevPage: {
        type: import('vue').PropType<string>;
        default: string;
    };
    lastClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    lastNumber: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    lastText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    nextClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    nextText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    pageClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    perPage: {
        type: import('vue').PropType<import('../../types').Numberish>;
        default: number;
    };
    prevClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    prevText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    totalRows: {
        type: import('vue').PropType<import('../../types').Numberish>;
        default: number;
    };
}>> & {
    "onPage-click"?: ((event: BvEvent, pageNumber: number) => any) | undefined;
}, {
    ariaLabel: string;
    disabled: boolean;
    align: "fill" | import('../../types').AlignmentJustifyContent;
    size: keyof import('../../types').BaseSize;
    ariaControls: string;
    limit: import('../../types').Numberish;
    pills: boolean;
    ellipsisClass: any;
    ellipsisText: string;
    firstClass: any;
    firstNumber: boolean;
    firstText: string;
    hideEllipsis: boolean;
    hideGotoEndButtons: boolean;
    labelFirstPage: string;
    labelLastPage: string;
    labelNextPage: string;
    labelPage: string;
    labelPrevPage: string;
    lastClass: any;
    lastNumber: boolean;
    lastText: string;
    nextClass: any;
    nextText: string;
    pageClass: any;
    perPage: import('../../types').Numberish;
    prevClass: any;
    prevText: string;
    totalRows: import('../../types').Numberish;
}, {}>, Partial<Record<string, (_: {
    disabled: boolean;
    page: number;
    index: number;
    active: boolean | undefined;
    content: string | number;
}) => any>> & {
    "ellipsis-text"?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
