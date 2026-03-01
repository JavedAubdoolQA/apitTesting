// Generated from: tests/feature/api-tests.feature
import { test } from "playwright-bdd";

test.describe('api testing', () => {

  test('Successfully grab token and get profile', async ({ Given }) => { 
    await Given('I have a valid token'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests/feature/api-tests.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I have a valid token","stepMatchArguments":[]}]},
]; // bdd-data-end