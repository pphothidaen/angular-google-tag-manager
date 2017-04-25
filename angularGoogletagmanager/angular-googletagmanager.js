/* angular-googletagmanager.js */

/* global define */

(function (root) {
	'use strict';

	function angularGoogletagmanager(angular) {
		/**
		 * @name angularGoogletagmanager
		 *
		 * @description
		 * angularGoogletagmanager module provides googletagmanager functionality to angular.js apps.
		 */
		return angular.module('angular-googletagmanager', [])

			/**
			 * @name angularGoogletagmanager.googletagmanager
			 *
			 * @description
			 * accounting global as a constant
			 */
			.constant('googletagmanager', {
				googletagmanager: function (id, datalayer) {
					if (typeof datalayer === 'undefined') {
						datalayer = 'dataLayer';
					}

					if (typeof id !== 'string' || id.length === 0) {
						console.warn(
							'Expected a Google Tag Manager ID. Received: "%s". ' +
							'Must be something like: "GTM-ABC123". ' +
							'Not loading Google Tag Manager.',
							id
						);
						return;
					}

					/* jshint ignore:start */
					/* Google Tag Manager */
					(function (w, d, s, l, i) {
						console.log("w", w);
						console.log("d", d);
						w[l] = w[l] || []; w[l].push({
							'gtm.start':
							new Date().getTime(), event: 'gtm.js'
						}); var f = d.getElementsByTagName(s)[0],
							j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
								'//www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
					})(window, window.document || { title: '', hidden: false }, 'script', datalayer, id);
					/* End Google Tag Manager */
					/* jshint ignore:end */
				}
			});
	}

	if (typeof define === 'function' && define.amd) {
		define('angular-googletagmanager', ['angular'], angularGoogletagmanager);
	} else if (typeof exports === 'object') {
		module.exports = angularGoogletagmanager(angular);
	} else {
		root.angularGoogletagmanager = angularGoogletagmanager(angular);
	}
	
})(this);