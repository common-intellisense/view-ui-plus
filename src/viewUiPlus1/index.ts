import directives from '../directives.json'
import { getComponentMap, getPropsMap } from './mapping'

export function viewUiPlus1() {
  return {
    uiName: 'view-ui-plus1',
    map: getPropsMap(),
    lib: 'view-ui-plus',
  }
}

export function viewUiPlus1Components() {
  return {
    map: getComponentMap(),
    isSeperatorByHyphen: false,
    prefix: '',
    isReact: false,
    lib: 'view-ui-plus',
    directives: directives.viewUiPlus1,
  }
}
