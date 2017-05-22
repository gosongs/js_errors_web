;(function () {
  'use strict';

  window.QError = window.QError || {};
  QError.utils = QError.utils || {};
  QError.error = {};
  QError.utils.errorHandler = function (conf) {
    return {
      "conf": conf,

      "req": new window.XMLHttpRequest(),

      "display": function (output) {
        if (!this.conf.silently && ('undefined' != typeof(console))) {
          // console.log(output);
        }
      },

      "handle": function () {
        this.display("QError : " + window.instance.error.error);
        this.send(window.instance.error);
      },

      "send": function (errorObj) {
        var error_str = this.queryStringify(errorObj);
        var that = this;
        this.req.onreadystatechange = function () {
          if (4 === that.req.readyState && 200 === (that.req.status || 0 === that.req.status)) {
            that.display('Report send.');
            that.display(window.instance.error);
          }
        };
        this.req.open("GET", this.conf.url + error_str, true);
        this.req.send(null);
        return true;
      },

      "queryStringify": function (error_Obj) {
        var error_str = "?";
        for (var value in error_Obj) {
          error_str += value + "=" + encodeURIComponent(error_Obj[value]) + "&";
        }
        return error_str;
      }
    }
  };

  navigator.browser = (function () {
    var ua = navigator.userAgent, tem,
      M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
      tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
      return {name: 'IE', version: (tem[1] || '')};
    }
    if (M[1] === 'Chrome') {
      tem = ua.match(/\bOPR|Edge\/(\d+)/)
      if (tem != null) {
        return {name: 'Opera', version: tem[1]};
      }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) {
      M.splice(1, 1, tem[1]);
    }
    return {
      name: M[0],
      version: M[1]
    };
  })();

  window.onerror = function () {
    return function (msg, url, line, col, error) {
      // 没有URL不上报错误, 即使上报了也不知道发生了什么错误
      if (msg !== 'Script error.' && !url) {
        return true;
      }

      setTimeout(function () {
        col = col || (window.event && window.event.errorCharacter) || 0;
        var n = window.navigator;
        window.instance.error = {
          "key": window.instance.conf.key,
          "platform": n.platform, // 暂不上报
          "errName": error.message,
          "errUrl": url,
          "errLine": line,
          "errStack": error.stack,
          "broType": n.browser.name,
          "broVer": n.browser.version,
          "uA": n.userAgent,
          "userData": window.instance.conf.userData || ''
        };
        window.instance.handle();
        return !window.instance.conf.dev; // return true的话浏览器将不输出错误信息到控制台
      }, 0)
    };
  }();
})();