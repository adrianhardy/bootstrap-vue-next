import { BTableSortBy, NoProviderTypes, TableField, TableFieldRaw } from '../../types';

declare const _default: <T>(__VLS_props: {
    filter?: string | undefined;
    fixed?: boolean | undefined;
    small?: boolean | undefined;
    id?: string | undefined;
    caption?: string | undefined;
    align?: import('../../types').VerticalAlign | undefined;
    variant?: keyof import('../../types').BaseColorVariant | null | undefined;
    dark?: boolean | undefined;
    modelValue?: any;
    onChange?: ((value: T[]) => any) | undefined;
    busy?: boolean | undefined;
    items?: readonly T[] | undefined;
    borderVariant?: keyof import('../../types').BaseColorVariant | null | undefined;
    captionHtml?: string | undefined;
    stacked?: boolean | import('../../types').Breakpoint | undefined;
    perPage?: import('../../types').Numberish | undefined;
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
    "onHead-clicked"?: ((key: string, field: TableField<T>, event: MouseEvent, isFooter: boolean) => any) | undefined;
    "onRow-clicked"?: ((item: T, index: number, event: MouseEvent) => any) | undefined;
    "onRow-dbl-clicked"?: ((item: T, index: number, event: MouseEvent) => any) | undefined;
    "onRow-hovered"?: ((item: T, index: number, event: MouseEvent) => any) | undefined;
    "onRow-unhovered"?: ((item: T, index: number, event: MouseEvent) => any) | undefined;
    detailsTdClass?: any;
    emptyFilteredText?: string | undefined;
    emptyText?: string | undefined;
    fieldColumnClass?: string | readonly any[] | Readonly<Record<PropertyKey, any>> | ((field: TableField<T>) => readonly Record<string, any>[]) | undefined;
    fields?: TableFieldRaw<T>[] | undefined;
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
    onFiltered?: ((value: T[]) => any) | undefined;
    "onRow-selected"?: ((value: T) => any) | undefined;
    "onRow-unselected"?: ((value: T) => any) | undefined;
    onSelection?: ((value: T[]) => any) | undefined;
    onSorted?: ((value: BTableSortBy) => any) | undefined;
    provider?: import('../../types').BTableProvider<T> | undefined;
    noProvider?: readonly NoProviderTypes[] | undefined;
    noProviderPaging?: boolean | undefined;
    noProviderSorting?: boolean | undefined;
    noProviderFiltering?: boolean | undefined;
    sortBy?: BTableSortBy[] | undefined;
    mustSort?: boolean | string[] | undefined;
    selectable?: boolean | undefined;
    multisort?: boolean | undefined;
    stickySelect?: boolean | undefined;
    selectHead?: string | boolean | undefined;
    selectMode?: "range" | "single" | "multi" | undefined;
    selectionVariant?: keyof import('../../types').BaseColorVariant | null | undefined;
    busyLoadingText?: string | undefined;
    currentPage?: import('../../types').Numberish | undefined;
    filterable?: readonly string[] | undefined;
    noLocalSorting?: boolean | undefined;
    noSelectOnClick?: boolean | undefined;
    selectedItems?: (readonly T[] & T[]) | undefined;
    noSortableIcon?: boolean | undefined;
} & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, __VLS_ctx?: {
    attrs: any;
    slots: Partial<Record<NonNullable<string | number>, (_: {
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
        value: unknown;
        index: number;
        item: T;
        field: TableField & {
            _noHeader?: true | undefined;
        };
        items: readonly T[];
        toggleDetails: () => void;
        detailsShowing: boolean;
    }) => any>> & {
        "table-busy"?(_: {}): any;
    };
    emit: ((evt: "change", value: T[]) => void) & ((evt: "head-clicked", key: string, field: TableField<T>, event: MouseEvent, isFooter: boolean) => void) & ((evt: "row-clicked", item: T, index: number, event: MouseEvent) => void) & ((evt: "row-dbl-clicked", item: T, index: number, event: MouseEvent) => void) & ((evt: "row-hovered", item: T, index: number, event: MouseEvent) => void) & ((evt: "row-unhovered", item: T, index: number, event: MouseEvent) => void) & ((evt: "filtered", value: T[]) => void) & ((evt: "row-selected", value: T) => void) & ((evt: "row-unselected", value: T) => void) & ((evt: "selection", value: T[]) => void) & ((evt: "sorted", value: BTableSortBy) => void);
} | undefined, __VLS_expose?: ((exposed: import('vue').ShallowUnwrapRef<{
    clearSelected: () => void;
    refresh: () => Promise<void>;
    selectAllRows: () => void;
    selectRow: (index: number) => void;
    unselectRow: (index: number) => void;
}>) => void) | undefined, __VLS_setup?: Promise<{
    props: {
        filter?: string | undefined;
        fixed?: boolean | undefined;
        small?: boolean | undefined;
        id?: string | undefined;
        caption?: string | undefined;
        align?: import('../../types').VerticalAlign | undefined;
        variant?: keyof import('../../types').BaseColorVariant | null | undefined;
        dark?: boolean | undefined;
        modelValue?: any;
        onChange?: ((value: T[]) => any) | undefined;
        busy?: boolean | undefined;
        items?: readonly T[] | undefined;
        borderVariant?: keyof import('../../types').BaseColorVariant | null | undefined;
        captionHtml?: string | undefined;
        stacked?: boolean | import('../../types').Breakpoint | undefined;
        perPage?: import('../../types').Numberish | undefined;
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
        "onHead-clicked"?: ((key: string, field: TableField<T>, event: MouseEvent, isFooter: boolean) => any) | undefined;
        "onRow-clicked"?: ((item: T, index: number, event: MouseEvent) => any) | undefined;
        "onRow-dbl-clicked"?: ((item: T, index: number, event: MouseEvent) => any) | undefined;
        "onRow-hovered"?: ((item: T, index: number, event: MouseEvent) => any) | undefined;
        "onRow-unhovered"?: ((item: T, index: number, event: MouseEvent) => any) | undefined;
        detailsTdClass?: any;
        emptyFilteredText?: string | undefined;
        emptyText?: string | undefined;
        fieldColumnClass?: string | readonly any[] | Readonly<Record<PropertyKey, any>> | ((field: TableField<T>) => readonly Record<string, any>[]) | undefined;
        fields?: TableFieldRaw<T>[] | undefined;
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
        onFiltered?: ((value: T[]) => any) | undefined;
        "onRow-selected"?: ((value: T) => any) | undefined;
        "onRow-unselected"?: ((value: T) => any) | undefined;
        onSelection?: ((value: T[]) => any) | undefined;
        onSorted?: ((value: BTableSortBy) => any) | undefined;
        provider?: import('../../types').BTableProvider<T> | undefined;
        noProvider?: readonly NoProviderTypes[] | undefined;
        noProviderPaging?: boolean | undefined;
        noProviderSorting?: boolean | undefined;
        noProviderFiltering?: boolean | undefined;
        sortBy?: BTableSortBy[] | undefined;
        mustSort?: boolean | string[] | undefined;
        selectable?: boolean | undefined;
        multisort?: boolean | undefined;
        stickySelect?: boolean | undefined;
        selectHead?: string | boolean | undefined;
        selectMode?: "range" | "single" | "multi" | undefined;
        selectionVariant?: keyof import('../../types').BaseColorVariant | null | undefined;
        busyLoadingText?: string | undefined;
        currentPage?: import('../../types').Numberish | undefined;
        filterable?: readonly string[] | undefined;
        noLocalSorting?: boolean | undefined;
        noSelectOnClick?: boolean | undefined;
        selectedItems?: (readonly T[] & T[]) | undefined;
        noSortableIcon?: boolean | undefined;
    } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{
        clearSelected: () => void;
        refresh: () => Promise<void>;
        selectAllRows: () => void;
        selectRow: (index: number) => void;
        unselectRow: (index: number) => void;
    }>): void;
    attrs: any;
    slots: Partial<Record<NonNullable<string | number>, (_: {
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
        value: unknown;
        index: number;
        item: T;
        field: TableField & {
            _noHeader?: true | undefined;
        };
        items: readonly T[];
        toggleDetails: () => void;
        detailsShowing: boolean;
    }) => any>> & {
        "table-busy"?(_: {}): any;
    };
    emit: ((evt: "change", value: T[]) => void) & ((evt: "head-clicked", key: string, field: TableField<T>, event: MouseEvent, isFooter: boolean) => void) & ((evt: "row-clicked", item: T, index: number, event: MouseEvent) => void) & ((evt: "row-dbl-clicked", item: T, index: number, event: MouseEvent) => void) & ((evt: "row-hovered", item: T, index: number, event: MouseEvent) => void) & ((evt: "row-unhovered", item: T, index: number, event: MouseEvent) => void) & ((evt: "filtered", value: T[]) => void) & ((evt: "row-selected", value: T) => void) & ((evt: "row-unselected", value: T) => void) & ((evt: "selection", value: T[]) => void) & ((evt: "sorted", value: BTableSortBy) => void);
}>) => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            filter?: string | undefined;
            fixed?: boolean | undefined;
            small?: boolean | undefined;
            id?: string | undefined;
            caption?: string | undefined;
            align?: import('../../types').VerticalAlign | undefined;
            variant?: keyof import('../../types').BaseColorVariant | null | undefined;
            dark?: boolean | undefined;
            modelValue?: any;
            onChange?: ((value: T[]) => any) | undefined;
            busy?: boolean | undefined;
            items?: readonly T[] | undefined;
            borderVariant?: keyof import('../../types').BaseColorVariant | null | undefined;
            captionHtml?: string | undefined;
            stacked?: boolean | import('../../types').Breakpoint | undefined;
            perPage?: import('../../types').Numberish | undefined;
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
            "onHead-clicked"?: ((key: string, field: TableField<T>, event: MouseEvent, isFooter: boolean) => any) | undefined;
            "onRow-clicked"?: ((item: T, index: number, event: MouseEvent) => any) | undefined;
            "onRow-dbl-clicked"?: ((item: T, index: number, event: MouseEvent) => any) | undefined;
            "onRow-hovered"?: ((item: T, index: number, event: MouseEvent) => any) | undefined;
            "onRow-unhovered"?: ((item: T, index: number, event: MouseEvent) => any) | undefined;
            detailsTdClass?: any;
            emptyFilteredText?: string | undefined;
            emptyText?: string | undefined;
            fieldColumnClass?: string | readonly any[] | Readonly<Record<PropertyKey, any>> | ((field: TableField<T>) => readonly Record<string, any>[]) | undefined;
            fields?: TableFieldRaw<T>[] | undefined;
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
            onFiltered?: ((value: T[]) => any) | undefined;
            "onRow-selected"?: ((value: T) => any) | undefined;
            "onRow-unselected"?: ((value: T) => any) | undefined;
            onSelection?: ((value: T[]) => any) | undefined;
            onSorted?: ((value: BTableSortBy) => any) | undefined;
            provider?: import('../../types').BTableProvider<T> | undefined;
            noProvider?: readonly NoProviderTypes[] | undefined;
            noProviderPaging?: boolean | undefined;
            noProviderSorting?: boolean | undefined;
            noProviderFiltering?: boolean | undefined;
            sortBy?: BTableSortBy[] | undefined;
            mustSort?: boolean | string[] | undefined;
            selectable?: boolean | undefined;
            multisort?: boolean | undefined;
            stickySelect?: boolean | undefined;
            selectHead?: string | boolean | undefined;
            selectMode?: "range" | "single" | "multi" | undefined;
            selectionVariant?: keyof import('../../types').BaseColorVariant | null | undefined;
            busyLoadingText?: string | undefined;
            currentPage?: import('../../types').Numberish | undefined;
            filterable?: readonly string[] | undefined;
            noLocalSorting?: boolean | undefined;
            noSelectOnClick?: boolean | undefined;
            selectedItems?: (readonly T[] & T[]) | undefined;
            noSortableIcon?: boolean | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
        expose(exposed: import('vue').ShallowUnwrapRef<{
            clearSelected: () => void;
            refresh: () => Promise<void>;
            selectAllRows: () => void;
            selectRow: (index: number) => void;
            unselectRow: (index: number) => void;
        }>): void;
        attrs: any;
        slots: Partial<Record<NonNullable<string | number>, (_: {
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
            value: unknown;
            index: number;
            item: T;
            field: TableField & {
                _noHeader?: true | undefined;
            };
            items: readonly T[];
            toggleDetails: () => void;
            detailsShowing: boolean;
        }) => any>> & {
            "table-busy"?(_: {}): any;
        };
        emit: ((evt: "change", value: T[]) => void) & ((evt: "head-clicked", key: string, field: TableField<T>, event: MouseEvent, isFooter: boolean) => void) & ((evt: "row-clicked", item: T, index: number, event: MouseEvent) => void) & ((evt: "row-dbl-clicked", item: T, index: number, event: MouseEvent) => void) & ((evt: "row-hovered", item: T, index: number, event: MouseEvent) => void) & ((evt: "row-unhovered", item: T, index: number, event: MouseEvent) => void) & ((evt: "filtered", value: T[]) => void) & ((evt: "row-selected", value: T) => void) & ((evt: "row-unselected", value: T) => void) & ((evt: "selection", value: T[]) => void) & ((evt: "sorted", value: BTableSortBy) => void);
    } | undefined;
};
export default _default;
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
