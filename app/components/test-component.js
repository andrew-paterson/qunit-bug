import Component from '@ember/component';

export default Component.extend({
  willDestroyElement() {
    console.log('destroy');
  }
});
