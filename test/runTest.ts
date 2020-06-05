import * as path from 'path';

import { runTests } from 'vscode-test';

async function go() {
	try {
		const extensionDevelopmentPath = path.resolve(__dirname, '../');
		const extensionTestsPath = path.resolve(__dirname, './suite');

		if (process.platform === 'win32') {
			await runTests({
				extensionDevelopmentPath,
				extensionTestsPath,
				platform: 'win32-x64-archive',
				version: 'insiders',
				launchArgs: [
					'--disable-extensions'
				]
			});
		} else {
			await runTests({
				extensionDevelopmentPath,
				extensionTestsPath,
				version: 'insiders',
				launchArgs: [
					'--disable-extensions'
				]
			});
		}
	} catch (err) {
		console.error('Failed to run tests');
		process.exit(1);
	}
}

go();
