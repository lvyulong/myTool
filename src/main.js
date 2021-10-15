// webpack打包入口
import parseModules from './utils/parseModules';

let files = require.context('./utils', false, /\.js/);
let modules = parseModules(files);

(function () {
    window.sfbtool = {
      ...modules
    };
}(window));

