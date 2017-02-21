/**
 * Created by Jackie on 2017/2/21.
 */

import Vue from 'vue'

export function MockService() {
    return Vue.resource('/static/json/mock.json')
}

