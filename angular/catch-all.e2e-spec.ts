// Perform a basic Protractor test for any examples that don't have
// their own specific tests.

import * as globby from 'globby';
import { browser } from 'protractor';

import { checkConsole } from './e2e-kit';

const dirs = globby.sync(['[0-9]*', '!*SKIP*'], {
  onlyDirectories: true,
  deep: 0
});

const dirsWithSpecs = globby
  .sync(['[0-9]*/*/**.e2e-spec.ts', '!*SKIP*/**'], {
    deep: 3
  })
  .map(filePath => filePath.split('/')[0]);

const dirsWithoutSpecs = dirs.filter(
  d => dirsWithSpecs.indexOf(d) < 0
);

describe('Examples without specific E2E tests (JIT)', async () => {
  for (const dir of dirsWithoutSpecs) {
    it('should have no errors on ' + dir, async () => {
      await browser.waitForAngularEnabled(true);
      await browser.get('/' + dir);
      expect(await checkConsole()).toEqual('');
    });
  }
});
