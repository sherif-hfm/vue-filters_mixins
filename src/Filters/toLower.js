import Vue from 'vue'

export function toLower(value) {
    return value.toLowerCase();
  }

  Vue.filter('toLower',toLower);