import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as myExt from '../../extension';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('ru-en (small letters) test', () => {
		assert.equal(myExt.switchText('й'), 'q');
		assert.equal(myExt.switchText('ц'), 'w');
		assert.equal(myExt.switchText('у'), 'e');
		assert.equal(myExt.switchText('к'), 'r');
		assert.equal(myExt.switchText('е'), 't');
		assert.equal(myExt.switchText('н'), 'y');
		assert.equal(myExt.switchText('г'), 'u');
		assert.equal(myExt.switchText('ш'), 'i');
		assert.equal(myExt.switchText('щ'), 'o');
		assert.equal(myExt.switchText('з'), 'p');
		assert.equal(myExt.switchText('х'), '[');
		assert.equal(myExt.switchText('ъ'), ']');
		assert.equal(myExt.switchText('ф'), 'a');
		assert.equal(myExt.switchText('ы'), 's');
		assert.equal(myExt.switchText('в'), 'd');
		assert.equal(myExt.switchText('а'), 'f');
		assert.equal(myExt.switchText('п'), 'g');
		assert.equal(myExt.switchText('р'), 'h');
		assert.equal(myExt.switchText('о'), 'j');
		assert.equal(myExt.switchText('л'), 'k');
		assert.equal(myExt.switchText('д'), 'l');
		assert.equal(myExt.switchText('ж'), ';');
		assert.equal(myExt.switchText('э'), "'");
		assert.equal(myExt.switchText('я'), 'z');
		assert.equal(myExt.switchText('ч'), 'x');
		assert.equal(myExt.switchText('с'), 'c');
		assert.equal(myExt.switchText('м'), 'v');
		assert.equal(myExt.switchText('и'), 'b');
		assert.equal(myExt.switchText('т'), 'n');
		assert.equal(myExt.switchText('ь'), 'm');
		assert.equal(myExt.switchText('б'), ',');
		assert.equal(myExt.switchText('ю'), '.');
		assert.equal(myExt.switchText('ё'), '`');
	});

	test('ru-en (capital letters) test', () => {
		assert.equal(myExt.switchText('Й'), 'Q');
		assert.equal(myExt.switchText('Ц'), 'W');
		assert.equal(myExt.switchText('У'), 'E');
		assert.equal(myExt.switchText('К'), 'R');
		assert.equal(myExt.switchText('Е'), 'T');
		assert.equal(myExt.switchText('Н'), 'Y');
		assert.equal(myExt.switchText('Г'), 'U');
		assert.equal(myExt.switchText('Ш'), 'I');
		assert.equal(myExt.switchText('Щ'), 'O');
		assert.equal(myExt.switchText('З'), 'P');
		assert.equal(myExt.switchText('Х'), '{');
		assert.equal(myExt.switchText('Ъ'), '}');
		assert.equal(myExt.switchText('Ф'), 'A');
		assert.equal(myExt.switchText('Ы'), 'S');
		assert.equal(myExt.switchText('В'), 'D');
		assert.equal(myExt.switchText('А'), 'F');
		assert.equal(myExt.switchText('П'), 'G');
		assert.equal(myExt.switchText('Р'), 'H');
		assert.equal(myExt.switchText('О'), 'J');
		assert.equal(myExt.switchText('Л'), 'K');
		assert.equal(myExt.switchText('Д'), 'L');
		assert.equal(myExt.switchText('Ж'), ':');
		assert.equal(myExt.switchText('Э'), '"');
		assert.equal(myExt.switchText('Я'), 'Z');
		assert.equal(myExt.switchText('Ч'), 'X');
		assert.equal(myExt.switchText('С'), 'C');
		assert.equal(myExt.switchText('М'), 'V');
		assert.equal(myExt.switchText('И'), 'B');
		assert.equal(myExt.switchText('Т'), 'N');
		assert.equal(myExt.switchText('Ь'), 'M');
		assert.equal(myExt.switchText('Б'), '<');
		assert.equal(myExt.switchText('Ю'), '>');
		assert.equal(myExt.switchText('Ё'), '~');
	});

	test('ru-en (special characters) test', () => {
		assert.equal(myExt.switchText('№'), '#');
	});

	test('en-ru (small letters) test', () => {
		assert.equal(myExt.switchText('q'), 'й');
		assert.equal(myExt.switchText('w'), 'ц');
		assert.equal(myExt.switchText('e'), 'у');
		assert.equal(myExt.switchText('r'), 'к');
		assert.equal(myExt.switchText('t'), 'е');
		assert.equal(myExt.switchText('y'), 'н');
		assert.equal(myExt.switchText('u'), 'г');
		assert.equal(myExt.switchText('i'), 'ш');
		assert.equal(myExt.switchText('o'), 'щ');
		assert.equal(myExt.switchText('p'), 'з');
		assert.equal(myExt.switchText('['), 'х');
		assert.equal(myExt.switchText(']'), 'ъ');
		assert.equal(myExt.switchText('a'), 'ф');
		assert.equal(myExt.switchText('s'), 'ы');
		assert.equal(myExt.switchText('d'), 'в');
		assert.equal(myExt.switchText('f'), 'а');
		assert.equal(myExt.switchText('g'), 'п');
		assert.equal(myExt.switchText('h'), 'р');
		assert.equal(myExt.switchText('j'), 'о');
		assert.equal(myExt.switchText('k'), 'л');
		assert.equal(myExt.switchText('l'), 'д');
		assert.equal(myExt.switchText(';'), 'ж');
		assert.equal(myExt.switchText("'"), 'э');
		assert.equal(myExt.switchText('z'), 'я');
		assert.equal(myExt.switchText('x'), 'ч');
		assert.equal(myExt.switchText('c'), 'с');
		assert.equal(myExt.switchText('v'), 'м');
		assert.equal(myExt.switchText('b'), 'и');
		assert.equal(myExt.switchText('n'), 'т');
		assert.equal(myExt.switchText('m'), 'ь');
		assert.equal(myExt.switchText(','), 'б');
		assert.equal(myExt.switchText('.'), 'ю');
		assert.equal(myExt.switchText('`'), 'ё');
	});

	test('en-ru (capital letters) test', () => {
		assert.equal(myExt.switchText('Q'), 'Й');
		assert.equal(myExt.switchText('W'), 'Ц');
		assert.equal(myExt.switchText('E'), 'У');
		assert.equal(myExt.switchText('R'), 'К');
		assert.equal(myExt.switchText('T'), 'Е');
		assert.equal(myExt.switchText('Y'), 'Н');
		assert.equal(myExt.switchText('U'), 'Г');
		assert.equal(myExt.switchText('I'), 'Ш');
		assert.equal(myExt.switchText('O'), 'Щ');
		assert.equal(myExt.switchText('P'), 'З');
		assert.equal(myExt.switchText('{'), 'Х');
		assert.equal(myExt.switchText('}'), 'Ъ');
		assert.equal(myExt.switchText('A'), 'Ф');
		assert.equal(myExt.switchText('S'), 'Ы');
		assert.equal(myExt.switchText('D'), 'В');
		assert.equal(myExt.switchText('F'), 'А');
		assert.equal(myExt.switchText('G'), 'П');
		assert.equal(myExt.switchText('H'), 'Р');
		assert.equal(myExt.switchText('J'), 'О');
		assert.equal(myExt.switchText('K'), 'Л');
		assert.equal(myExt.switchText('L'), 'Д');
		assert.equal(myExt.switchText(':'), 'Ж');
		assert.equal(myExt.switchText('"'), 'Э');
		assert.equal(myExt.switchText('Z'), 'Я');
		assert.equal(myExt.switchText('X'), 'Ч');
		assert.equal(myExt.switchText('C'), 'С');
		assert.equal(myExt.switchText('V'), 'М');
		assert.equal(myExt.switchText('B'), 'И');
		assert.equal(myExt.switchText('N'), 'Т');
		assert.equal(myExt.switchText('M'), 'Ь');
		assert.equal(myExt.switchText('<'), 'Б');
		assert.equal(myExt.switchText('>'), 'Ю');
		assert.equal(myExt.switchText('~'), 'Ё');
	});

	test('en-ru (special characters) test', () => {
		assert.equal(myExt.switchText('@'), '"');
		assert.equal(myExt.switchText('#'), '№');
		assert.equal(myExt.switchText('$'), ';');
		assert.equal(myExt.switchText('^'), ':');
		assert.equal(myExt.switchText('&'), '?');
		assert.equal(myExt.switchText('/'), '.');
		assert.equal(myExt.switchText('|'), '/');
		assert.equal(myExt.switchText('?'), ',');
	});
});
