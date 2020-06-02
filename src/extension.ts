/*eslint prefer-const: "warn"*/

import * as vscode from 'vscode';

interface Dictionary<T> {
	[Key: string]: T;
}

class TwoWayMap {
	map: Dictionary<string>;
	reverseMap: Dictionary<string>;

	constructor(map: Dictionary<string>) {
		this.map = map;
		this.reverseMap = {};

		for (let key in map)
			this.reverseMap[map[key]] = key;
	}

	get(key: string): string {
		return this.map[key] || this.reverseMap[key] || key;
	}
}

const lang = {
	"ru-en":
		{ "`": "ё", "q": "й", "w": "ц", "e": "у", "r": "к", "t": "е", "y": "н", "u": "г", "i": "ш", "o": "щ", "p": "з", "[": "х", "]": "ъ", "a": "ф", "s": "ы", "d": "в", "f": "а", "g": "п", "h": "р", "j": "о", "k": "л", "l": "д", ";": "ж", "'": "э", "z": "я", "x": "ч", "c": "с", "v": "м", "b": "и", "n": "т", "m": "ь", ",": "б", ".": "ю", "/": ".", "~": "Ё", "Q": "Й", "W": "Ц", "E": "У", "R": "К", "T": "Е", "Y": "Н", "U": "Г", "I": "Ш", "O": "Щ", "P": "З", "{": "Х", "}": "Ъ", "A": "Ф", "S": "Ы", "D": "В", "F": "А", "G": "П", "H": "Р", "J": "О", "K": "Л", "L": "Д", ":": "Ж", "\"": "Э", "Z": "Я", "X": "Ч", "C": "С", "V": "М", "B": "И", "N": "Т", "M": "Ь", "<": "Б", ">": "Ю", "?": ",", "@": "\"", "#": "№", "$": ";", "^": ":", "&": "?", "|": "/" }
};

export function switchText(text: string) {
	const dict = new TwoWayMap(lang['ru-en']);

	return text.split('').reduce(function (acc, val) {
		return acc + dict.get(val);
	}, '');
}

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('kb-layout-switcher.switch', function () {
		let editor = vscode.window.activeTextEditor;

		if (editor) {
			let document = editor.document;
			let selection = editor.selection;

			let sel = document.getText(selection);
			let res = switchText(sel);

			editor.edit(editBuilder => {
				editBuilder.replace(selection, res);
			});
		}
	});

	context.subscriptions.push(disposable);
}