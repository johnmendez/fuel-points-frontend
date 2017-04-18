
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('polyline-decode', 'helper:polyline-decode', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{polyline-decode inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

