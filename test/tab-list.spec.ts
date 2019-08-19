/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import { TabList } from '../lib/tab-list';
import '../lib/tab-list';
import { Tab } from '../lib/tab';
import '../lib/tab';
import { fixture, elementUpdated } from '@open-wc/testing';
import { html } from 'lit-html';
import { chai } from '@bundled-es-modules/chai';
const expect = chai.expect;

describe('TabList', () => {
    let testDiv!: HTMLDivElement;

    beforeEach(async () => {
        testDiv = await fixture<HTMLDivElement>(
            html`
                <div id="test-tab-list">
                    <sp-tab-list selected="first">
                        <sp-tab
                            label="Tab 1"
                            value="first"
                            tabindex="1"
                        ></sp-tab>
                        <sp-tab
                            label="Tab 2"
                            value="second"
                            tabindex="2"
                        ></sp-tab>
                        <sp-tab
                            label="Tab 3"
                            value="third"
                            tabindex="3"
                        ></sp-tab>
                    </sp-tab-list>
                </div>
            `
        );
    });

    it('loads', () => {
        const tabList = testDiv.querySelector('sp-tab-list') as TabList;
        const tabs = tabList.querySelectorAll('sp-tab');

        expect(tabList).to.exist;
        expect(tabs.length).to.equal(3);
    });

    it('reflects selected tab with selected property', async () => {
        const tabList = testDiv.querySelector('sp-tab-list') as TabList;
        const firstTab = tabList.querySelector('sp-tab[value=first]') as Tab;
        const secondTab = tabList.querySelector('sp-tab[value=second]') as Tab;
        const thirdTab = tabList.querySelector('sp-tab[value=third]') as Tab;

        expect(firstTab.selected).to.be.true;
        expect(secondTab.selected).to.be.false;
        expect(thirdTab.selected).to.be.false;
        expect(tabList.selected).to.equal(firstTab.value);

        secondTab.click();
        await elementUpdated(tabList);

        expect(firstTab.selected).to.be.false;
        expect(secondTab.selected).to.be.true;
        expect(thirdTab.selected).to.be.false;
        expect(tabList.selected).to.equal(secondTab.value);

        thirdTab.click();
        await elementUpdated(tabList);

        expect(firstTab.selected).to.be.false;
        expect(secondTab.selected).to.be.false;
        expect(thirdTab.selected).to.be.true;
        expect(tabList.selected).to.equal(thirdTab.value);
    });

    it('forces only one tab to be selected', () => {
        const tabList = testDiv.querySelector('sp-tab-list') as TabList;
        const selectedTabs = tabList.querySelectorAll('sp-tab[selected]');

        expect(tabList.selected).to.equal('first');
        expect(selectedTabs.length).to.equal(1);
    });

    it('de-selects all but first selected tab if multiple selected', () => {
        const tabList = testDiv.querySelector('sp-tab-list') as TabList;
        const tab1 = tabList.querySelector('sp-tab[value=first]') as Tab;
        const tab2 = tabList.querySelector('sp-tab[value=second]') as Tab;

        expect(tabList.selected).to.equal('first');
        expect(tab1.selected).to.be.true;
        expect(tab2.selected).to.be.false;
    });

    it('ensures setting selection updates selected tab', async () => {
        const tabList = testDiv.querySelector('sp-tab-list') as TabList;
        const tab1 = tabList.querySelector('sp-tab[value=first]') as Tab;
        const tab2 = tabList.querySelector('sp-tab[value=second]') as Tab;
        const tab3 = tabList.querySelector('sp-tab[value=third]') as Tab;

        expect(tabList.selected).to.equal('first');
        expect(tab1.selected).to.be.true;
        expect(tab2.selected).to.be.false;
        expect(tab3.selected).to.be.false;

        tabList.selected = 'second';
        await elementUpdated(tabList);

        expect(tabList.selected).to.equal('second');
        expect(tab1.selected).to.be.false;
        expect(tab2.selected).to.be.true;
        expect(tab3.selected).to.be.false;

        tabList.selected = 'third';

        expect(tabList.selected).to.equal('third');
        expect(tab1.selected).to.be.false;
        expect(tab2.selected).to.be.false;
        expect(tab3.selected).to.be.true;
    });

    it('ensures setting selected and clicking on tab both work together', async () => {
        const tabList = testDiv.querySelector('sp-tab-list') as TabList;
        const tab1 = tabList.querySelector('sp-tab[value=first]') as Tab;
        const tab2 = tabList.querySelector('sp-tab[value=second]') as Tab;
        const tab3 = tabList.querySelector('sp-tab[value=third]') as Tab;

        tab2.click();
        await elementUpdated(tabList);

        expect(tabList.selected).to.equal('second');
        expect(tab1.selected).to.be.false;
        expect(tab2.selected).to.be.true;
        expect(tab3.selected).to.be.false;

        tabList.selected = 'first';
        await elementUpdated(tabList);

        expect(tabList.selected).to.equal('first');
        expect(tab1.selected).to.be.true;
        expect(tab2.selected).to.be.false;
        expect(tab3.selected).to.be.false;
    });
});