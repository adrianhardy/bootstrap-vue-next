import { TableField, TableFieldAttribute } from '../../types';

declare const _default: <T>(__VLS_props: {
    fixed?: boolean | undefined;
    small?: boolean | undefined;
    id?: string | undefined;
    caption?: string | undefined;
    align?: import('../../types').VerticalAlign | undefined;
    variant?: keyof import('../../types').BaseColorVariant | null | undefined;
    dark?: boolean | undefined;
    modelValue?: any;
    items?: readonly T[] | undefined;
    borderVariant?: keyof import('../../types').BaseColorVariant | null | undefined;
    captionHtml?: string | undefined;
    stacked?: boolean | import('../../types').Breakpoint | undefined;
    bordered?: boolean | undefined;
    borderless?: boolean | undefined;
    captionTop?: boolean | undefined;
    hover?: boolean | undefined;
    noBorderCollapse?: boolean | undefined;
    outlined?: boolean | undefined;
    responsive?: boolean | import('../../types').Breakpoint | undefined;
    stickyHeader?: boolean | import('../../types').Numberish | undefined;
    striped?: boolean | undefined;
    stripedColumns?: boolean | undefined;
    tableAttrs?: Readonly<import('../../types').AttrsValue> | undefined;
    tableClass?: any;
    "onHead-clicked"?: ((key: string, field: TableField<T>, event: MouseEvent, isFooter: boolean) => any) | undefined;
    "onRow-clicked"?: ((item: T, index: number, event: MouseEvent) => any) | undefined;
    "onRow-dbl-clicked"?: ((item: T, index: number, event: MouseEvent) => any) | undefined;
    "onRow-hovered"?: ((item: T, index: number, event: MouseEvent) => any) | undefined;
    "onRow-unhovered"?: ((item: T, index: number, event: MouseEvent) => any) | undefined;
    detailsTdClass?: any;
    emptyFilteredText?: string | undefined;
    emptyText?: string | undefined;
    fieldColumnClass?: string | readonly any[] | Readonly<Record<PropertyKey, any>> | ((field: TableField<T>) => readonly Record<string, any>[]) | undefined;
    fields?: import('../../types').TableFieldRaw<T>[] | undefined;
    footClone?: boolean | undefined;
    footRowVariant?: keyof import('../../types').BaseColorVariant | null | undefined;
    footVariant?: keyof import('../../types').BaseColorVariant | null | undefined;
    headRowVariant?: keyof import('../../types').BaseColorVariant | null | undefined;
    headVariant?: keyof import('../../types').BaseColorVariant | null | undefined;
    labelStacked?: boolean | undefined;
    primaryKey?: string | undefined;
    showEmpty?: boolean | undefined;
    tbodyClass?: any;
    tbodyTrAttrs?: any;
    tbodyTrClass?: string | readonly any[] | Readonly<Record<PropertyKey, any>> | ((item: T | null, type: string) => string | readonly any[] | null | undefined) | undefined;
    tfootClass?: any;
    tfootTrClass?: any;
    theadClass?: any;
    theadTrClass?: any;
} & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, __VLS_ctx?: {
    attrs: any;
    slots: Partial<Record<string, (_: {
        label: string | undefined;
        column: import('../../types').LiteralUnion<string | number | symbol>;
        field: TableField & {
            _noHeader?: true | undefined;
        };
        isFoot: boolean;
    }) => any>> & Partial<Record<string, (_: {
        value: unknown;
        index: number;
        item: T;
        field: TableField & {
            _noHeader?: true | undefined;
        };
        items: readonly T[];
        toggleDetails: () => void;
        detailsShowing: boolean;
    }) => any>> & Partial<Record<string, (_: {
        label: string | undefined;
        column: import('../../types').LiteralUnion<string | number | symbol>;
        field: TableField & {
            _noHeader?: true | undefined;
        };
        isFoot: boolean;
    }) => any>> & {
        "thead-top"?(_: {}): any;
        "thead-sub"?(_: {
            key: import('../../types').LiteralUnion<string | number | symbol>;
            label?: string | undefined;
            headerTitle?: string | undefined;
            headerAbbr?: string | undefined;
            class?: any;
            formatter?: import('../../types').TableFieldFormatter<any> | undefined;
            sortable?: boolean | undefined;
            sortKey?: string | undefined;
            sortDirection?: string | undefined;
            sortByFormatted?: boolean | import('../../types').TableFieldFormatter<any> | undefined;
            filterByFormatted?: boolean | import('../../types').TableFieldFormatter<any> | undefined;
            tdClass?: any;
            thClass?: any;
            thStyle?: import('vue').StyleValue;
            variant?: keyof import('../../types').BaseColorVariant | null | undefined;
            tdAttr?: TableFieldAttribute<any> | undefined;
            thAttr?: TableFieldAttribute<any> | undefined;
            isRowHeader?: boolean | undefined;
            stickyColumn?: boolean | undefined;
            _noHeader?: true | undefined;
            items: (TableField & {
                _noHeader?: true | undefined;
            })[];
        }): any;
        "custom-body"?(_: {
            fields: (TableField & {
                _noHeader?: true | undefined;
            })[];
            items: readonly T[];
            columns: number;
        }): any;
        "top-row"?(_: {}): any;
        "row-details"?(_: {
            item: T & Record<string, unknown> & {
                _rowVariant?: keyof import('../../types').BaseColorVariant | null | undefined;
                _cellVariants?: Partial<Record<string, keyof import('../../types').BaseColorVariant>> | undefined;
                _showDetails?: boolean | undefined;
            };
            toggleDetails: () => void;
            fields: import('../../types').TableFieldRaw<T>[];
            index: number;
        }): any;
        empty?(_: {
            items: readonly T[];
        }): any;
        "bottom-row"?(_: {}): any;
        "custom-foot"?(_: {
            fields: (TableField & {
                _noHeader?: true | undefined;
            })[];
            items: readonly T[];
            columns: number;
        }): any;
        "table-caption"?(_: {}): any;
    };
    emit: ((evt: "head-clicked", key: string, field: TableField<T>, event: MouseEvent, isFooter: boolean) => void) & ((evt: "row-clicked", item: T, index: number, event: MouseEvent) => void) & ((evt: "row-dbl-clicked", item: T, index: number, event: MouseEvent) => void) & ((evt: "row-hovered", item: T, index: number, event: MouseEvent) => void) & ((evt: "row-unhovered", item: T, index: number, event: MouseEvent) => void);
} | undefined, __VLS_expose?: ((exposed: import('vue').ShallowUnwrapRef<{}>) => void) | undefined, __VLS_setup?: Promise<{
    props: {
        fixed?: boolean | undefined;
        small?: boolean | undefined;
        id?: string | undefined;
        caption?: string | undefined;
        align?: import('../../types').VerticalAlign | undefined;
        variant?: keyof import('../../types').BaseColorVariant | null | undefined;
        dark?: boolean | undefined;
        modelValue?: any;
        items?: readonly T[] | undefined;
        borderVariant?: keyof import('../../types').BaseColorVariant | null | undefined;
        captionHtml?: string | undefined;
        stacked?: boolean | import('../../types').Breakpoint | undefined;
        bordered?: boolean | undefined;
        borderless?: boolean | undefined;
        captionTop?: boolean | undefined;
        hover?: boolean | undefined;
        noBorderCollapse?: boolean | undefined;
        outlined?: boolean | undefined;
        responsive?: boolean | import('../../types').Breakpoint | undefined;
        stickyHeader?: boolean | import('../../types').Numberish | undefined;
        striped?: boolean | undefined;
        stripedColumns?: boolean | undefined;
        tableAttrs?: Readonly<import('../../types').AttrsValue> | undefined;
        tableClass?: any;
        "onHead-clicked"?: ((key: string, field: TableField<T>, event: MouseEvent, isFooter: boolean) => any) | undefined;
        "onRow-clicked"?: ((item: T, index: number, event: MouseEvent) => any) | undefined;
        "onRow-dbl-clicked"?: ((item: T, index: number, event: MouseEvent) => any) | undefined;
        "onRow-hovered"?: ((item: T, index: number, event: MouseEvent) => any) | undefined;
        "onRow-unhovered"?: ((item: T, index: number, event: MouseEvent) => any) | undefined;
        detailsTdClass?: any;
        emptyFilteredText?: string | undefined;
        emptyText?: string | undefined;
        fieldColumnClass?: string | readonly any[] | Readonly<Record<PropertyKey, any>> | ((field: TableField<T>) => readonly Record<string, any>[]) | undefined;
        fields?: import('../../types').TableFieldRaw<T>[] | undefined;
        footClone?: boolean | undefined;
        footRowVariant?: keyof import('../../types').BaseColorVariant | null | undefined;
        footVariant?: keyof import('../../types').BaseColorVariant | null | undefined;
        headRowVariant?: keyof import('../../types').BaseColorVariant | null | undefined;
        headVariant?: keyof import('../../types').BaseColorVariant | null | undefined;
        labelStacked?: boolean | undefined;
        primaryKey?: string | undefined;
        showEmpty?: boolean | undefined;
        tbodyClass?: any;
        tbodyTrAttrs?: any;
        tbodyTrClass?: string | readonly any[] | Readonly<Record<PropertyKey, any>> | ((item: T | null, type: string) => string | readonly any[] | null | undefined) | undefined;
        tfootClass?: any;
        tfootTrClass?: any;
        theadClass?: any;
        theadTrClass?: any;
    } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: Partial<Record<string, (_: {
        label: string | undefined;
        column: import('../../types').LiteralUnion<string | number | symbol>;
        field: TableField & {
            _noHeader?: true | undefined;
        };
        isFoot: boolean;
    }) => any>> & Partial<Record<string, (_: {
        value: unknown;
        index: number;
        item: T;
        field: TableField & {
            _noHeader?: true | undefined;
        };
        items: readonly T[];
        toggleDetails: () => void;
        detailsShowing: boolean;
    }) => any>> & Partial<Record<string, (_: {
        label: string | undefined;
        column: import('../../types').LiteralUnion<string | number | symbol>;
        field: TableField & {
            _noHeader?: true | undefined;
        };
        isFoot: boolean;
    }) => any>> & {
        "thead-top"?(_: {}): any;
        "thead-sub"?(_: {
            key: import('../../types').LiteralUnion<string | number | symbol>;
            label?: string | undefined;
            headerTitle?: string | undefined;
            headerAbbr?: string | undefined;
            class?: any;
            formatter?: import('../../types').TableFieldFormatter<any> | undefined;
            sortable?: boolean | undefined;
            sortKey?: string | undefined;
            sortDirection?: string | undefined;
            sortByFormatted?: boolean | import('../../types').TableFieldFormatter<any> | undefined;
            filterByFormatted?: boolean | import('../../types').TableFieldFormatter<any> | undefined;
            tdClass?: any;
            thClass?: any;
            thStyle?: import('vue').StyleValue;
            variant?: keyof import('../../types').BaseColorVariant | null | undefined;
            tdAttr?: TableFieldAttribute<any> | undefined;
            thAttr?: TableFieldAttribute<any> | undefined;
            isRowHeader?: boolean | undefined;
            stickyColumn?: boolean | undefined;
            _noHeader?: true | undefined;
            items: (TableField & {
                _noHeader?: true | undefined;
            })[];
        }): any;
        "custom-body"?(_: {
            fields: (TableField & {
                _noHeader?: true | undefined;
            })[];
            items: readonly T[];
            columns: number;
        }): any;
        "top-row"?(_: {}): any;
        "row-details"?(_: {
            item: T & Record<string, unknown> & {
                _rowVariant?: keyof import('../../types').BaseColorVariant | null | undefined;
                _cellVariants?: Partial<Record<string, keyof import('../../types').BaseColorVariant>> | undefined;
                _showDetails?: boolean | undefined;
            };
            toggleDetails: () => void;
            fields: import('../../types').TableFieldRaw<T>[];
            index: number;
        }): any;
        empty?(_: {
            items: readonly T[];
        }): any;
        "bottom-row"?(_: {}): any;
        "custom-foot"?(_: {
            fields: (TableField & {
                _noHeader?: true | undefined;
            })[];
            items: readonly T[];
            columns: number;
        }): any;
        "table-caption"?(_: {}): any;
    };
    emit: ((evt: "head-clicked", key: string, field: TableField<T>, event: MouseEvent, isFooter: boolean) => void) & ((evt: "row-clicked", item: T, index: number, event: MouseEvent) => void) & ((evt: "row-dbl-clicked", item: T, index: number, event: MouseEvent) => void) & ((evt: "row-hovered", item: T, index: number, event: MouseEvent) => void) & ((evt: "row-unhovered", item: T, index: number, event: MouseEvent) => void);
}>) => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            fixed?: boolean | undefined;
            small?: boolean | undefined;
            id?: string | undefined;
            caption?: string | undefined;
            align?: import('../../types').VerticalAlign | undefined;
            variant?: keyof import('../../types').BaseColorVariant | null | undefined;
            dark?: boolean | undefined;
            modelValue?: any;
            items?: readonly T[] | undefined;
            borderVariant?: keyof import('../../types').BaseColorVariant | null | undefined;
            captionHtml?: string | undefined;
            stacked?: boolean | import('../../types').Breakpoint | undefined;
            bordered?: boolean | undefined;
            borderless?: boolean | undefined;
            captionTop?: boolean | undefined;
            hover?: boolean | undefined;
            noBorderCollapse?: boolean | undefined;
            outlined?: boolean | undefined;
            responsive?: boolean | import('../../types').Breakpoint | undefined;
            stickyHeader?: boolean | import('../../types').Numberish | undefined;
            striped?: boolean | undefined;
            stripedColumns?: boolean | undefined;
            tableAttrs?: Readonly<import('../../types').AttrsValue> | undefined;
            tableClass?: any;
            "onHead-clicked"?: ((key: string, field: TableField<T>, event: MouseEvent, isFooter: boolean) => any) | undefined;
            "onRow-clicked"?: ((item: T, index: number, event: MouseEvent) => any) | undefined;
            "onRow-dbl-clicked"?: ((item: T, index: number, event: MouseEvent) => any) | undefined;
            "onRow-hovered"?: ((item: T, index: number, event: MouseEvent) => any) | undefined;
            "onRow-unhovered"?: ((item: T, index: number, event: MouseEvent) => any) | undefined;
            detailsTdClass?: any;
            emptyFilteredText?: string | undefined;
            emptyText?: string | undefined;
            fieldColumnClass?: string | readonly any[] | Readonly<Record<PropertyKey, any>> | ((field: TableField<T>) => readonly Record<string, any>[]) | undefined;
            fields?: import('../../types').TableFieldRaw<T>[] | undefined;
            footClone?: boolean | undefined;
            footRowVariant?: keyof import('../../types').BaseColorVariant | null | undefined;
            footVariant?: keyof import('../../types').BaseColorVariant | null | undefined;
            headRowVariant?: keyof import('../../types').BaseColorVariant | null | undefined;
            headVariant?: keyof import('../../types').BaseColorVariant | null | undefined;
            labelStacked?: boolean | undefined;
            primaryKey?: string | undefined;
            showEmpty?: boolean | undefined;
            tbodyClass?: any;
            tbodyTrAttrs?: any;
            tbodyTrClass?: string | readonly any[] | Readonly<Record<PropertyKey, any>> | ((item: T | null, type: string) => string | readonly any[] | null | undefined) | undefined;
            tfootClass?: any;
            tfootTrClass?: any;
            theadClass?: any;
            theadTrClass?: any;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
        expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
        attrs: any;
        slots: Partial<Record<string, (_: {
            label: string | undefined;
            column: import('../../types').LiteralUnion<string | number | symbol>;
            field: TableField & {
                _noHeader?: true | undefined;
            };
            isFoot: boolean;
        }) => any>> & Partial<Record<string, (_: {
            value: unknown;
            index: number;
            item: T;
            field: TableField & {
                _noHeader?: true | undefined;
            };
            items: readonly T[];
            toggleDetails: () => void;
            detailsShowing: boolean;
        }) => any>> & Partial<Record<string, (_: {
            label: string | undefined;
            column: import('../../types').LiteralUnion<string | number | symbol>;
            field: TableField & {
                _noHeader?: true | undefined;
            };
            isFoot: boolean;
        }) => any>> & {
            "thead-top"?(_: {}): any;
            "thead-sub"?(_: {
                key: import('../../types').LiteralUnion<string | number | symbol>;
                label?: string | undefined;
                headerTitle?: string | undefined;
                headerAbbr?: string | undefined;
                class?: any;
                formatter?: import('../../types').TableFieldFormatter<any> | undefined;
                sortable?: boolean | undefined;
                sortKey?: string | undefined;
                sortDirection?: string | undefined;
                sortByFormatted?: boolean | import('../../types').TableFieldFormatter<any> | undefined;
                filterByFormatted?: boolean | import('../../types').TableFieldFormatter<any> | undefined;
                tdClass?: any;
                thClass?: any;
                thStyle?: import('vue').StyleValue;
                variant?: keyof import('../../types').BaseColorVariant | null | undefined;
                tdAttr?: TableFieldAttribute<any> | undefined;
                thAttr?: TableFieldAttribute<any> | undefined;
                isRowHeader?: boolean | undefined;
                stickyColumn?: boolean | undefined;
                _noHeader?: true | undefined;
                items: (TableField & {
                    _noHeader?: true | undefined;
                })[];
            }): any;
            "custom-body"?(_: {
                fields: (TableField & {
                    _noHeader?: true | undefined;
                })[];
                items: readonly T[];
                columns: number;
            }): any;
            "top-row"?(_: {}): any;
            "row-details"?(_: {
                item: T & Record<string, unknown> & {
                    _rowVariant?: keyof import('../../types').BaseColorVariant | null | undefined;
                    _cellVariants?: Partial<Record<string, keyof import('../../types').BaseColorVariant>> | undefined;
                    _showDetails?: boolean | undefined;
                };
                toggleDetails: () => void;
                fields: import('../../types').TableFieldRaw<T>[];
                index: number;
            }): any;
            empty?(_: {
                items: readonly T[];
            }): any;
            "bottom-row"?(_: {}): any;
            "custom-foot"?(_: {
                fields: (TableField & {
                    _noHeader?: true | undefined;
                })[];
                items: readonly T[];
                columns: number;
            }): any;
            "table-caption"?(_: {}): any;
        };
        emit: ((evt: "head-clicked", key: string, field: TableField<T>, event: MouseEvent, isFooter: boolean) => void) & ((evt: "row-clicked", item: T, index: number, event: MouseEvent) => void) & ((evt: "row-dbl-clicked", item: T, index: number, event: MouseEvent) => void) & ((evt: "row-hovered", item: T, index: number, event: MouseEvent) => void) & ((evt: "row-unhovered", item: T, index: number, event: MouseEvent) => void);
    } | undefined;
};
export default _default;
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
