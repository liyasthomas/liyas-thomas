/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import {
	PolymerElement,
	html
} from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/app-layout/app-grid/app-grid-style.js';

class MyProjects extends PolymerElement {
	static get template() {
		return html `
      <style include="app-grid-style">
      </style>
      <style include="shared-styles">
        :host {
          display: block;
          --app-grid-item-height: 100%;
        }
				@media all and (min-width: 0) and (max-width: 360px) {
					:host {
						--app-grid-columns: 1;
						--app-grid-gutter: 16px;
						--app-grid-item-height: 120vw;
						--app-grid-expandible-item-columns: 1;
					}
					.list {
						width: 100%;
					}
				}
				@media all and (min-width: 361px) and (max-width: 640px) {
					:host {
						--app-grid-columns: 1;
						--app-grid-gutter: 16px;
						--app-grid-item-height: 80vw;
						--app-grid-expandible-item-columns: 1;
					}
					.list {
						width: 100%;
					}
				}
				@media all and (min-width: 641px) and (max-width: 960px) {
					:host {
						--app-grid-columns: 2;
						--app-grid-gutter: 32px;
						--app-grid-item-height: 60vw;
						--app-grid-expandible-item-columns: 2;
					}
					.list {
						width: 80vw;
					}
					.item:nth-child(5n+3) {
						@apply --app-grid-expandible-item;
					}
				}
				@media all and (min-width: 961px) {
					:host {
						--app-grid-columns: 3;
						--app-grid-gutter: 32px;
						--app-grid-item-height: 30vw;
						--app-grid-expandible-item-columns: 2;
					}
					.list {
						width: 60vw;
					}
					.item:nth-child(10n+4) {
						@apply --app-grid-expandible-item;
					}
					.item:nth-child(10n+10) {
						@apply --app-grid-expandible-item;
					}
				}
      </style>
			<iron-media-query query="min-width: 641px" query-matches="{{wideLayout}}"></iron-media-query>
			<div class="banner flexchild flex-vertical">
				<iron-image class="bg" preload fade sizing="cover" src="../images/assets/projects/banner.svg"  alt="{{sub.title}}"></iron-image>
			</div>
			<iron-ajax auto url="../data/projects_feeds.json" id="ajax0" loading="{{loading0}}" handle-as="json" last-error="{{error0}}" last-response="{{ajaxResponse0}}">
			</iron-ajax>
			<template is="dom-if" if="{{loading0}}">
				<div class="actions flex-center-center" hidden\$="[[!loading0]]">
					<paper-spinner-lite active\$="[[loading0]]"></paper-spinner-lite>
				</div>
			</template>
			<template is="dom-if" if="{{error0}}">
				<div class="error">
					<div>Failed to load feeds.</div>
					<div>Make sure you're connected to internet.</div>
					<a href="javascript:location.reload();"><paper-icon-button icon="my-icons:refresh"></paper-icon-button></a>
				</div>
			</template>
			<template is="dom-repeat" items="[[ajaxResponse0.android]]" as="android">
				<template is="dom-if" if="{{!error0}}">
					<div class="actions flex-justified">
						<div class="title">
							<span>{{android.title}}</span>
						</div>
						<paper-icon-button
								hidden\$="{{!wideLayout}}"
								toggles
								active="{{UI}}"
								icon\$="my-icons:[[getUIIcon(UI)]]">
						</paper-icon-button>
					</div>
				</template>
				<div class\$="[[getUIType(UI)]] app-grid" has-aspect-ratio>
					<template is="dom-repeat" items="[[android.sub]]" as="sub">
						<div class="item">
							<div class="container">
								<div class="block top">
									<div class="title">{{sub.title}}</div>
								</div>
								<div class="block mid">
									<div class="description">{{sub.description}}</div>
								</div>
								<div class\$="[[_computeBgClass(sub.color)]] flexchild flex-vertical">
									<iron-image class="bg" preload fade sizing="cover" src="{{sub.img}}"  alt="{{sub.title}}"></iron-image>
								</div>
								<div class="block bottom">
									<div class="info">
										<div class="flexchild">
											<a href="{{sub.link}}"><paper-button class\$="[[_computeFgClass(sub.color)]]">{{sub.info}}</paper-button></a>
										</div>
										<div>
											<a href="{{sub.link}}"><paper-icon-button class\$="[[_computeFgClass(sub.color)]]" icon="my-icons:{{sub.icon}}">{{sub.info}}</paper-icon-button></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</template>
				</div>
				<div class="actions flex-center-center">
					<a href="android">
						<paper-button class="primary">View all Android projects<iron-icon icon="my-icons:arrow-forward"></iron-icon></paper-button>
					</a>
				</div>
			</template>
			<template is="dom-repeat" items="[[ajaxResponse0.web]]" as="web">
				<template is="dom-if" if="{{!error0}}">
					<div class="actions flex-justified">
						<div class="title">
							<span>{{web.title}}</span>
						</div>
						<paper-icon-button
								hidden\$="{{!wideLayout}}"
								toggles
								active="{{UI}}"
								icon\$="my-icons:[[getUIIcon(UI)]]">
						</paper-icon-button>
					</div>
				</template>
				<div class\$="[[getUIType(UI)]] app-grid" has-aspect-ratio>
					<template is="dom-repeat" items="[[web.sub]]" as="sub">
						<div class="item">
							<div class="container">
								<div class="block top">
									<div class="title">{{sub.title}}</div>
								</div>
								<div class="block mid">
									<div class="description">{{sub.description}}</div>
								</div>
								<div class\$="[[_computeBgClass(sub.color)]] flexchild flex-vertical">
									<iron-image class="bg" preload fade sizing="cover" src="{{sub.img}}"  alt="{{sub.title}}"></iron-image>
								</div>
								<div class="block bottom">
									<div class="info">
										<div class="flexchild">
											<a href="{{sub.link}}"><paper-button class\$="[[_computeFgClass(sub.color)]]">{{sub.info}}</paper-button></a>
										</div>
										<div>
											<a href="{{sub.link}}"><paper-icon-button class\$="[[_computeFgClass(sub.color)]]" icon="my-icons:{{sub.icon}}">{{sub.info}}</paper-icon-button></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</template>
				</div>
				<div class="actions flex-center-center">
					<a href="web">
						<paper-button class="primary">View all Web projects<iron-icon icon="my-icons:arrow-forward"></iron-icon></paper-button>
					</a>
				</div>
			</template>
			<template is="dom-repeat" items="[[ajaxResponse0.others]]" as="others">
				<template is="dom-if" if="{{!error0}}">
					<div class="actions flex-justified">
						<div class="title">
							<span>{{others.title}}</span>
						</div>
						<paper-icon-button
								hidden\$="{{!wideLayout}}"
								toggles
								active="{{UI}}"
								icon\$="my-icons:[[getUIIcon(UI)]]">
						</paper-icon-button>
					</div>
				</template>
				<div class\$="[[getUIType(UI)]] app-grid" has-aspect-ratio>
					<template is="dom-repeat" items="[[others.sub]]" as="sub">
						<div class="item">
							<div class="container">
								<div class="block top">
									<div class="title">{{sub.title}}</div>
								</div>
								<div class="block mid">
									<div class="description">{{sub.description}}</div>
								</div>
								<div class\$="[[_computeBgClass(sub.color)]] flexchild flex-vertical">
									<iron-image class="bg" preload fade sizing="cover" src="{{sub.img}}"  alt="{{sub.title}}"></iron-image>
								</div>
								<div class="block bottom">
									<div class="info">
										<div class="flexchild">
											<a href="{{sub.link}}"><paper-button class\$="[[_computeFgClass(sub.color)]]">{{sub.info}}</paper-button></a>
										</div>
										<div>
											<a href="{{sub.link}}"><paper-icon-button class\$="[[_computeFgClass(sub.color)]]" icon="my-icons:{{sub.icon}}">{{sub.info}}</paper-icon-button></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</template>
				</div>
				<div class="actions flex-center-center">
					<a href="others">
						<paper-button class="primary">View all other projects<iron-icon icon="my-icons:arrow-forward"></iron-icon></paper-button>
					</a>
				</div>
			</template>
			<div class="content">
				<div class="title">
					<span>Contact</span> me
				</div>
				<p>
					<a href="mailto:liyascthomas@gmail.com?&subject=Hello%20Liyas!&body=Hi,"><paper-button class="primary">Email<iron-icon icon="my-icons:mail"></iron-icon></paper-button></a>
					<a href="about"><paper-button class="secondary">Read more<iron-icon icon="my-icons:face"></iron-icon></paper-button></a>
				</p>
			</div>
    `;
	}

	attached() {
		this._updateGridStyles = this._updateGridStyles || function () {
			this.updateStyles();
		}.bind(this);
		window.addEventListener('resize', this._updateGridStyles);
	}

	detached() {
		window.removeEventListener('resize', this._updateGridStyles);
	}

	getUIType(UI) {
		return UI ? 'list' : 'grid';
	}

	getUIIcon(icon) {
		return icon ? 'dashboard' : 'view-agenda';
	}

	_computeBgClass(color) {
		return color + '-bg';
	}

	_computeFgClass(color) {
		return color + '-fg';
	}
}

window.customElements.define('my-projects', MyProjects);
