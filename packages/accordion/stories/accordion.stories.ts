/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import { html, TemplateResult } from '@spectrum-web-components/base';

import '../sp-accordion.js';
import '../sp-accordion-item.js';
import { Story } from '../../../.storybook/types';

export default {
    title: 'Accordion',
    component: 'sp-accordion',
    argTypes: {
        open: { control: 'boolean' },
        allowMultiple: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
};

interface StoryArgs {
    open?: boolean;
    disabled?: boolean;
    allowMultiple?: boolean;
}

const Template = (
    { allowMultiple, disabled, open }: StoryArgs = {
        allowMultiple: false,
        disabled: false,
        open: false,
    }
): TemplateResult => {
    return html`
        <sp-accordion
            ?allow-multiple=${allowMultiple}
            style="color: var(--spectrum-global-color-gray-800)"
        >
            <sp-accordion-item label="Heading 1" .disabed=${disabled}>
                <div>Item 1</div>
            </sp-accordion-item>
            <sp-accordion-item label="Heading 2" ?open=${open}>
                Item 2
            </sp-accordion-item>
            <sp-accordion-item label="Heading 3">
                Item 3
            </sp-accordion-item>
        </sp-accordion>
    `;
};
export const Default = (args: StoryArgs = {}): TemplateResult => Template(args);

export const Open: Story<StoryArgs> = (
    args: StoryArgs = Open.args
): TemplateResult => Template(args);
Open.args = {
    open: true,
};

export const AllowMultiple: Story<StoryArgs> = (
    args: StoryArgs = AllowMultiple.args
): TemplateResult => Template(args);
AllowMultiple.args = {
    allowMultiple: true,
};

export const Disabled: Story<StoryArgs> = (
    args: StoryArgs = Disabled.args
): TemplateResult => Template(args);
Disabled.args = {
    disabled: true,
};
