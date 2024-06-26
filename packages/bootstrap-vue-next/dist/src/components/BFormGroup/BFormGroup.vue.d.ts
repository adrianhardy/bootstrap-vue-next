import { PropType } from 'vue';
import { AriaInvalid } from '../../types';

export declare const SLOT_NAME_LABEL = "label";
export declare const SLOT_NAME_INVALID_FEEDBACK = "invalid-feedback";
export declare const SLOT_NAME_VALID_FEEDBACK = "valid-feedback";
export declare const SLOT_NAME_DESCRIPTION = "description";
export declare const SLOT_NAME_DEFAULT = "default";
declare const _default: import('vue').DefineComponent<{
    ariaInvalid: {
        type: PropType<AriaInvalid>;
        default: undefined;
    };
    contentCols: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    contentColsLg: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    contentColsMd: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    contentColsSm: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    contentColsXl: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    description: {
        type: StringConstructor[];
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    feedbackAriaLive: {
        type: StringConstructor;
        default: string;
    };
    id: {
        type: StringConstructor;
        default: undefined;
    };
    invalidFeedback: {
        type: StringConstructor;
        default: undefined;
    };
    label: {
        type: StringConstructor;
        default: undefined;
    };
    labelAlign: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    labelAlignLg: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    labelAlignMd: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    labelAlignSm: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    labelAlignXl: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    labelClass: {
        type: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
        default: undefined;
    };
    labelCols: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    labelColsLg: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    labelColsMd: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    labelColsSm: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    labelColsXl: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    labelFor: {
        type: StringConstructor;
        default: undefined;
    };
    labelSize: {
        type: StringConstructor;
        default: undefined;
    };
    labelSrOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    state: {
        type: PropType<boolean | null>;
        default: null;
    };
    tooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    validFeedback: {
        type: StringConstructor;
        default: undefined;
    };
    validated: {
        type: BooleanConstructor;
        default: boolean;
    };
    floating: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    ariaDescribedby: string | null;
    computedAriaInvalid: import('vue').ComputedRef<"grammar" | "spelling" | "true" | "false" | undefined>;
    contentColProps: import('vue').ComputedRef<any>;
    isHorizontal: import('vue').ComputedRef<boolean>;
    labelAlignClasses: import('vue').ComputedRef<string[]>;
    labelColProps: import('vue').ComputedRef<any>;
    onLegendClick: (event: Readonly<MouseEvent>) => void;
    stateClass: import('vue').ComputedRef<"is-valid" | "is-invalid" | null>;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    ariaInvalid: {
        type: PropType<AriaInvalid>;
        default: undefined;
    };
    contentCols: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    contentColsLg: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    contentColsMd: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    contentColsSm: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    contentColsXl: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    description: {
        type: StringConstructor[];
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    feedbackAriaLive: {
        type: StringConstructor;
        default: string;
    };
    id: {
        type: StringConstructor;
        default: undefined;
    };
    invalidFeedback: {
        type: StringConstructor;
        default: undefined;
    };
    label: {
        type: StringConstructor;
        default: undefined;
    };
    labelAlign: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    labelAlignLg: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    labelAlignMd: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    labelAlignSm: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    labelAlignXl: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    labelClass: {
        type: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
        default: undefined;
    };
    labelCols: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    labelColsLg: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    labelColsMd: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    labelColsSm: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    labelColsXl: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    labelFor: {
        type: StringConstructor;
        default: undefined;
    };
    labelSize: {
        type: StringConstructor;
        default: undefined;
    };
    labelSrOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    state: {
        type: PropType<boolean | null>;
        default: null;
    };
    tooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    validFeedback: {
        type: StringConstructor;
        default: undefined;
    };
    validated: {
        type: BooleanConstructor;
        default: boolean;
    };
    floating: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    id: string;
    ariaInvalid: AriaInvalid;
    disabled: boolean;
    label: string;
    description: string;
    state: boolean | null;
    tooltip: boolean;
    floating: boolean;
    validated: boolean;
    labelFor: string;
    labelClass: string | Record<string, any> | unknown[];
    contentCols: string | number | boolean;
    contentColsLg: string | number | boolean;
    contentColsMd: string | number | boolean;
    contentColsSm: string | number | boolean;
    contentColsXl: string | number | boolean;
    feedbackAriaLive: string;
    invalidFeedback: string;
    labelAlign: string | number | boolean;
    labelAlignLg: string | number | boolean;
    labelAlignMd: string | number | boolean;
    labelAlignSm: string | number | boolean;
    labelAlignXl: string | number | boolean;
    labelCols: string | number | boolean;
    labelColsLg: string | number | boolean;
    labelColsMd: string | number | boolean;
    labelColsSm: string | number | boolean;
    labelColsXl: string | number | boolean;
    labelSize: string;
    labelSrOnly: boolean;
    validFeedback: string;
}, {}>;
export default _default;
