import { Component } from 'vue';
import { BvnComponentProps } from './ComponentProps';

import * as Components from '../components';
import * as Directives from '../directives';
export type ComponentType = keyof typeof Components;
export type DirectiveType = keyof typeof Directives;
export type ConfigurationOption<T extends string> = Partial<Record<T, boolean>> & {
    all: boolean;
};
export interface BootstrapVueOptions {
    /**
     * @default false
     */
    components?: boolean | ConfigurationOption<ComponentType>;
    /**
     * Aliases for components where the key is the alias name and the value is the component name
     *
     * @default {}
     */
    aliases?: Record<string, ComponentType | Component>;
    /**
     * @default false
     */
    directives?: boolean | ConfigurationOption<DirectiveType>;
    plugins?: {
        /**
         * @default true
         */
        breadcrumb?: boolean;
        /**
         * @default true
         */
        id?: boolean
        /**
         * This function is allows users to provide a custom id generator
         * as a workaround for the lack of stable SSR IDs in Vue 3.x
         *
         * This lets the Nuxt module swap in the Nuxt `useId` function
         * which is stable across SSR and client.
         *
         * @default undefined
         */
         | {
            getId?: () => string;
        };
        /**
         * @default true
         */
        modalController?: boolean;
        /**
         * @default true
         */
        modalManager?: boolean;
        /**
         * @default true
         */
        rtl?: boolean | {
            /**
             * @default false
             */
            rtlInitial: boolean;
            /**
             * @default undefined
             */
            localeInitial: string | undefined;
        };
        /**
         * @default true
         */
        toast?: boolean;
        components?: Partial<BvnComponentProps & {
            /**
             * @hint Globally sets all props with the matching name
             */
            global: Record<string, any>;
        }>;
    };
}
