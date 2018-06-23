/**
 * Tag-closer extension for CodeMirror.
 *
 * This extension adds a "closeTag" utility function that can be used with key bindings to
 * insert a matching end tag after the ">" character of a start tag has been typed.  It can
 * also complete "</" if a matching start tag is found.  It will correctly ignore signal
 * characters for empty tags, comments, CDATA, etc.
 *
 * The function depends on internal parser state to identify tags.  It is compatible with the
 * following CodeMirror modes and will ignore all others:
 * - htmlmixed
 * - xml
 *
 * See demos/closetag.html for a usage example.
 *
 * @author Nathan Williams <nathan@nlwillia.net>
 * Contributed under the same license terms as CodeMirror.
 */
(function() {
	/** Option that allows tag closing behavior to be toggled.  Default is true. */
	CodeMirror.defaults['closeTagEnabled'] = true;

	/** Array of tag names to add indentation after the start tag for.  Default is the list of block-level html tags. */
	CodeMirror.defaults['closeTagIndent'] = ['{','(','['];

	/**
	 * Call during key processing to close tags.  Handles the key event if the tag is closed, otherwise throws CodeMirror.Pass.
	 * - cm: The editor instance.
	 * - ch: The character being processed.
	 * - indent: Optional.  Omit or pass true to use the default indentation tag list defined in the 'closeTagIndent' option.
	 *   Pass false to disable indentation.  Pass an array to override the default list of tag names.
	 */
	CodeMirror.defineExtension("bracketComplete", function(cm, ch, indent) {
		if (!cm.getOption('closeTagEnabled')) {
			throw CodeMirror.Pass;
		}

		var mode = cm.getOption('mode');

		if (mode == 'vertical') {

			/*
			 * Relevant structure of token:
			 *
			 * htmlmixed
			 * 		className
			 * 		state
			 * 			htmlState
			 * 				type
			 * 				context
			 * 					tagName
			 * 			mode
			 *
			 * xml
			 * 		className
			 * 		state
			 * 			tagName
			 * 			type
			 */

			var pos = cm.getCursor();
			//indent = cm.getOption('closeTagIndent');
			//cm.setSelection({line: pos.line, ch: pos.ch - 1}, pos);
			if (ch == '{') {
				cm.replaceSelection('{'+'\n\n'+ '}', 'end');
				//cm.setCursor({line: pos.line + 1, ch: cm.getLine(pos.line + 1).length});
				cm.indentLine(pos.line + 1,"prev");
				cm.indentLine(pos.line + 2,"prev");

				cm.setCursor({line: pos.line + 1, ch: cm.getLine(pos.line + 1).length});
				cm.indentLine(pos.line+1,1);
			} else if (ch == '(') {
				cm.replaceSelection('('+'\n\n'+ ')', 'end');
				cm.indentLine(pos.line + 1,"prev");
				cm.indentLine(pos.line + 2,"prev");
				cm.setCursor({line: pos.line + 1, ch: cm.getLine(pos.line + 1).length});
				cm.indentLine(pos.line+1,1);
			}else if (ch == '['){
				cm.replaceSelection('['+'\n\n'+ ']', 'end');
				cm.indentLine(pos.line + 1,"prev");
				cm.indentLine(pos.line + 2,"prev");
				cm.setCursor({line: pos.line + 1, ch: cm.getLine(pos.line + 1).length});
				cm.indentLine(pos.line+1,1);

			}else {

			}

		}
	});

		//throw CodeMirror.Pass; // Bubble if not handled
	})();
