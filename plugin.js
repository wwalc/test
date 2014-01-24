/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

/**
 * @fileOverview [Language](http://ckeditor.com/addon/language) plugin.
 */

'use strict';

( function() {

	var allowedContent = 'kbd;cite',
		requiredContent = 'kbd;cite';

	CKEDITOR.plugins.add( 'test', {
		requires: 'menubutton',
		icons: 'test', // %REMOVE_LINE_CORE%

		init: function( editor ) {
			var plugin = this,
				items = {};

			// Remove language indicator button.
			items.test_kbd = {
				label: 'Insert kbd',
				group: 'test',
				state: CKEDITOR.TRISTATE_DISABLED,
				order: items.length,
				onClick: function() {
					editor.insertHtml('<kbd>Test kbd</kbd>');
				}
			};

			// Remove language indicator button.
			items.test_cite = {
				label: 'Insert cite',
				group: 'test',
				state: CKEDITOR.TRISTATE_DISABLED,
				order: items.length,
				onClick: function() {
					editor.insertHtml('<cite>Test cite</cite>');
				}
			};

			// Initialize groups for menu.
			editor.addMenuGroup( 'test', 1 );
			editor.addMenuItems( items );

			editor.ui.add( 'Test', CKEDITOR.UI_MENUBUTTON, {
				label: 'Test',
				// MenuButtons do not (yet) has toFeature method, so we cannot do this:
				// toFeature: function( editor ) { return editor.getCommand( 'test' ); }
				// Set feature's properties directly on button.
				allowedContent: allowedContent,
				requiredContent: requiredContent,
				toolbar: 'bidi,30',
				modes : { wysiwyg: 1, source: 1 },
				onMenu: function() {
					var activeItems = {};

					for ( var prop in items )
						activeItems[ prop ] = CKEDITOR.TRISTATE_ON;

					return activeItems;
				}
			} );
		}
	} );
} )();

