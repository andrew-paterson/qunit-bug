import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | Index', function(hooks) {
  setupApplicationTest(hooks);

  test('Index', async function (assert) {
    await visit('/');
    await assert.equal(currentURL(), '/', 'Land on home page');  
  });

  test('Index 2', async function (assert) {
    await visit('/');
    await assert.equal(currentURL(), '/', 'Land on home page'); 
    // await visit('/test') 
  });

});