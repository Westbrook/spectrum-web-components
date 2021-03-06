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

import '../sp-card.js';
import { landscape, portrait } from './images';
import { FileTxtIcon } from '@spectrum-web-components/icons-workflow';
import '@spectrum-web-components/textfield/sp-textfield.js';
import '@spectrum-web-components/action-menu/sp-action-menu.js';
import '@spectrum-web-components/menu/sp-menu.js';
import '@spectrum-web-components/menu/sp-menu-item.js';
import '@spectrum-web-components/menu/sp-menu-divider.js';

export default {
    component: 'sp-card',
    title: 'Card',
};

export const Default = (): TemplateResult => {
    return html`
        <div>
            <sp-card heading="Card Heading" subheading="JPG">
                <img slot="cover-photo" src=${portrait} alt="Demo Graphic" />
                <div slot="footer">Footer</div>
            </sp-card>
        </div>
    `;
};

export const actions = (): TemplateResult => {
    return html`
        <div>
            <sp-card heading="Card Heading" subheading="JPG">
                <img slot="cover-photo" src=${portrait} alt="Demo Graphic" />
                <div slot="footer">Footer</div>
                <sp-action-menu slot="actions" placement="bottom-end">
                    <sp-menu>
                        <sp-menu-item>
                            Deselect
                        </sp-menu-item>
                        <sp-menu-item>
                            Select Inverse
                        </sp-menu-item>
                        <sp-menu-item>
                            Feather...
                        </sp-menu-item>
                        <sp-menu-item>
                            Select and Mask...
                        </sp-menu-item>
                        <sp-menu-divider></sp-menu-divider>
                        <sp-menu-item>
                            Save Selection
                        </sp-menu-item>
                        <sp-menu-item disabled>
                            Make Work Path
                        </sp-menu-item>
                    </sp-menu>
                </sp-action-menu>
            </sp-card>
        </div>
    `;
};

export const empty = (): TemplateResult => {
    return html`
        <div>
            <sp-card></sp-card>
        </div>
    `;
};

export const Gallery = (): TemplateResult => {
    return html`
        <div style="width: 532px; height: 224px">
            <sp-card variant="gallery" heading="Card Heading" subheading="JPG">
                <img
                    slot="preview"
                    src=${landscape}
                    style="object-fit: cover"
                    alt="Demo Graphic"
                />
                <div slot="description">10/15/18</div>
            </sp-card>
        </div>
    `;
};

export const Quiet = (): TemplateResult => {
    return html`
        <div style="width: 208px; height: 264px">
            <sp-card variant="quiet" heading="Card Heading" subheading="JPG">
                <img src=${portrait} alt="Demo Graphic" slot="preview" />
                <div slot="description">10/15/18</div>
            </sp-card>
        </div>
    `;
};

export const quietFile = (): TemplateResult => {
    return html`
        <div style="width: 208px; height: 264px">
            <sp-card variant="quiet" subheading="JPG" asset="file">
                <img src=${portrait} alt="Demo Graphic" slot="preview" />
                <div slot="heading">File Name</div>
                <div slot="description">10/15/18</div>
            </sp-card>
        </div>
    `;
};

export const quietFolder = (): TemplateResult => {
    return html`
        <div style="width: 208px; height: 264px">
            <sp-card variant="quiet" subheading="JPG" asset="folder">
                <img src=${portrait} alt="Demo Graphic" slot="preview" />
                <div slot="heading">Folder Name</div>
                <div slot="description">10/15/18</div>
            </sp-card>
        </div>
    `;
};

export const quietActions = (): TemplateResult => {
    return html`
        <div style="width: 208px; height: 264px">
            <sp-card variant="quiet" heading="Card Heading" subheading="JPG">
                <img src=${portrait} alt="Demo Graphic" slot="preview" />
                <div slot="description">10/15/18</div>
                <sp-action-menu slot="actions" placement="bottom-end">
                    <sp-menu>
                        <sp-menu-item>
                            Deselect
                        </sp-menu-item>
                        <sp-menu-item>
                            Select Inverse
                        </sp-menu-item>
                        <sp-menu-item>
                            Feather...
                        </sp-menu-item>
                        <sp-menu-item>
                            Select and Mask...
                        </sp-menu-item>
                        <sp-menu-divider></sp-menu-divider>
                        <sp-menu-item>
                            Save Selection
                        </sp-menu-item>
                        <sp-menu-item disabled>
                            Make Work Path
                        </sp-menu-item>
                    </sp-menu>
                </sp-action-menu>
            </sp-card>
        </div>
    `;
};

quietActions.story = {
    name: 'Quiet w/ Actions',
};

export const small = (): TemplateResult => {
    return html`
        <div
            style="--spectrum-card-title-padding-right: 0; --spectrum-card-title-padding-left: 0;"
        >
            <sp-card small heading="Card Heading" subheading="JPG">
                <img
                    slot="cover-photo"
                    src=${portrait}
                    alt="Demo Graphic"
                    style="width: 130px"
                />
                <div slot="footer">Footer</div>
            </sp-card>
        </div>
    `;
};

export const smallHorizontal = (): TemplateResult => {
    return html`
        <div>
            <sp-card small horizontal heading="Card Heading" subheading="JPG">
                <sp-icon slot="preview" style="width: 36px; height: 36px;">
                    ${FileTxtIcon({ hidden: false })}
                </sp-icon>
            </sp-card>
        </div>
        .
    `;
};

export const smallQuiet = (): TemplateResult => {
    return html`
        <div style="width: 115px">
            <sp-card
                small
                heading="Card Heading"
                subheading="JPG"
                variant="quiet"
            >
                <img src=${portrait} alt="Demo Graphic" slot="preview" />
                <div slot="footer">Footer</div>
                <sp-action-menu slot="actions" placement="bottom-end">
                    <sp-menu>
                        <sp-menu-item>
                            Deselect
                        </sp-menu-item>
                        <sp-menu-item>
                            Select Inverse
                        </sp-menu-item>
                        <sp-menu-item>
                            Feather...
                        </sp-menu-item>
                        <sp-menu-item>
                            Select and Mask...
                        </sp-menu-item>
                        <sp-menu-divider></sp-menu-divider>
                        <sp-menu-item>
                            Save Selection
                        </sp-menu-item>
                        <sp-menu-item disabled>
                            Make Work Path
                        </sp-menu-item>
                    </sp-menu>
                </sp-action-menu>
            </sp-card>
        </div>
    `;
};

export const SlottedHeading = (): TemplateResult => {
    return html`
        <style>
            .slotted-textfield-heading {
                width: 100%;
            }
        </style>
        <div
            style="
            width: 318px;
            --spectrum-card-title-width: 100%;
            --spectrum-card-title-padding-right: 0;
            --spectrum-card-title-padding-left: 0;
            --spectrum-card-body-header-height: auto;
            --spectrum-alias-single-line-width: 100%;
        "
        >
            <sp-card>
                <img slot="cover-photo" src=${portrait} alt="Demo Graphic" />
                <sp-textfield
                    class="slotted-textfield-heading"
                    slot="heading"
                    value="Apr 23 Project"
                    quiet
                ></sp-textfield>
                <div slot="subheading">Last modified on 6/17/2020, 3:37 PM</div>
                <sp-action-menu slot="actions" placement="bottom-end">
                    <sp-menu>
                        <sp-menu-item>
                            Deselect
                        </sp-menu-item>
                        <sp-menu-item>
                            Select Inverse
                        </sp-menu-item>
                        <sp-menu-item>
                            Feather...
                        </sp-menu-item>
                        <sp-menu-item>
                            Select and Mask...
                        </sp-menu-item>
                        <sp-menu-divider></sp-menu-divider>
                        <sp-menu-item>
                            Save Selection
                        </sp-menu-item>
                        <sp-menu-item disabled>
                            Make Work Path
                        </sp-menu-item>
                    </sp-menu>
                </sp-action-menu>
            </sp-card>
        </div>
    `;
};
