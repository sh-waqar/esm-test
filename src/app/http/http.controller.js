import a from '../mocks/a'
import b from '../mocks/b'
import c from '../mocks/c'
import d from '../mocks/d'
import e from '../mocks/e'
import f from '../mocks/f'
import g from '../mocks/g'
import h from '../mocks/h'
import i from '../mocks/i'

function HttpController($state, $stateParams, $window) {
  'ngInject';
  var vm = this;

  vm.runTestA = runTestA;
  vm.runTestB = runTestB;
  vm.runTestC = runTestC;
  vm.runTestD = runTestD;
  vm.runTestE = runTestE;
  vm.runTestF = runTestF;
  vm.runTestG = runTestG;
  vm.runTestH = runTestH;
  vm.runTestI = runTestI;

  vm.request = request;
  vm.requestDirect = requestDirect;

  vm.load = '';
  vm.query = null;

  _init()

  function request() {
    var params = {
      q: _makeRandomQ(vm.load)
    }
    _loadRoute(params)
  }

  function requestDirect() {
    var params = {
      q: _makeRandomQ(vm.load)
    }
    _makeRequest(params)
  }

  function _makeRandomQ(len) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < len; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  function runTestA() {
    _loadRoute(a)
  }

  function runTestB() {
    _loadRoute(b)
  }

  function runTestC() {
    _loadRoute(c)
  }

  function runTestD() {
    _loadRoute(d)
  }

  function runTestE() {
    _loadRoute(e)
  }

  function runTestF() {
    _loadRoute(f)
  }

  function runTestG() {
    _loadRoute(g)
  }

  function runTestG() {
    _loadRoute(g)
  }

  function runTestH() {
    _loadRoute(h)
  }

  function runTestI() {
    _loadRoute(i)
  }

  function _loadRoute(params) {
    $state.go('http', params)
  }

  function _makeRequest(q) {
    var query = _jsonToQueryString(q)

    $window.fetch(`https://jsonplaceholder.typicode.com/todos/1?${query}`)
      .then(res => {
        if (res.status === 200) {
          console.log(res)
          alert('Works!');
        } else {
          alert(`Failed with ${res.status}`);
        }
      })
      .catch(err => {
        alert('Failed!');
      })
  }

  function _jsonToQueryString(json) {
    return Object.keys(json).map(function(key) {
        return encodeURIComponent(key) + '=' +
          encodeURIComponent(json[key]);
      }).join('&');
  }

  function _init() {
    _makeRequest($stateParams)
    vm.query = $stateParams.q;
  }

}

export { HttpController };
