'use strict';

import * as vscode from 'vscode';
import { Hash } from 'crypto';

const layout_dict = {
	q : 'й',
	w : 'ц',
	e : 'у',
	r : 'к',
	t : 'е',
	y : 'н',
	u : 'г',
	i : 'ш',
	o : 'щ',
	p : 'з',
	'[' : 'х',
	']' : 'ъ',
	a : 'ф',
	s : 'ы',
	d : 'в',
	f : 'а',
	g : 'п',
	h : 'р',
	j : 'о',
	k : 'л',
	l : 'д',
	';' : 'ж',
	'\'' : 'э',
	z : 'я',
	x : 'ч',
	c : 'с',
	v : 'м',
	b : 'и',
	n : 'т',
	m : 'ь',
	',' : 'б',
	'.' : 'ю',
	'/' : '.',
	'`' : 'ё',
	Q : 'Й',
	W : 'Ц',
	E : 'У',
	R : 'К',
	T : 'Е',
	Y : 'Н',
	U : 'Г',
	I : 'Ш',
	O : 'Щ',
	P : 'З',
	'{' : 'Х',
	'}' : 'Ъ',
	A : 'Ф',
	S : 'Ы',
	D : 'В',
	F : 'А',
	G : 'П',
	H : 'Р',
	J : 'О',
	K : 'Л',
	L : 'Д',
	':' : 'Ж',
	'"' : 'Э',
	'|' : '/',
	Z : 'Я',
	X : 'Ч',
	C : 'С',
	V : 'М',
	B : 'И',
	N : 'Т',
	M : 'Ь',
	'<' : 'Б',
	'>' : 'Ю',
	'?' : ',',
	'~' : 'Ё',
	'@' : '"',
	'#' : '№',
	'$' : ';',
	'^' : ':',
	'&' : '?'
};

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('extension.kbfuckup', function () {
		// Get the active text editor
		let editor = vscode.window.activeTextEditor;

		if (editor) {
			let document = editor.document;
			let selection = editor.selection;

			// Get the word within the selection
			let sel = document.getText(selection);
			let res = "";

			const getKeyValue = <T extends object, U extends keyof T>(key: U) => (obj: T) => obj[key];

			sel.split('').forEach(char => {
				if (char in layout_dict) {
					res += getKeyValue<any, string>(char)(layout_dict);
				} else {
					res += char;
				}
			});

			editor.edit(editBuilder => {
				editBuilder.replace(selection, res);
			});
		}
	});

	context.subscriptions.push(disposable);
}