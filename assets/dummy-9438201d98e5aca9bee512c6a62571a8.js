"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,l,i){var o=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,o=t.default.Application.extend({modulePrefix:i.default.modulePrefix,podModulePrefix:i.default.podModulePrefix,Resolver:n.default}),(0,l.default)(o,i.default.modulePrefix),e.default=o}),define("dummy/components/code-snippet",["exports","ember","dummy/snippets"],function(e,t,n){var l=self.require("highlight.js");e.default=t.default.Component.extend({tagName:"pre",classNameBindings:["language"],unindent:!0,_unindent:function(e){if(!this.get("unindent"))return e;for(var t,n,l=e.split("\n").filter(function(e){return""!==e}),i=0;i<l.length;i++)t=/^[ \t]*/.exec(l[i]),t&&("undefined"==typeof n||n>t[0].length)&&(n=t[0].length);return"undefined"!=typeof n&&n>0&&(e=e.replace(new RegExp("^[ \t]{"+n+"}","gm"),"")),e},source:t.default.computed("name",function(){return this._unindent((n.default[this.get("name")]||"").replace(/^(\s*\n)*/,"").replace(/\s*$/,""))}),didInsertElement:function(){l.highlightBlock(this.get("element"))},language:t.default.computed("name",function(){var e=/\.(\w+)$/i.exec(this.get("name"));if(e)switch(e[1].toLowerCase()){case"js":return"javascript";case"coffee":return"coffeescript";case"hbs":return"htmlbars";case"css":return"css";case"scss":return"scss";case"less":return"less";case"emblem":return"emblem";case"ts":return"typescript"}})})}),define("dummy/components/ember-scroll-view",["exports","ember-scroll-view/components/ember-scroll-view"],function(e,t){e.default=t.default.extend()}),define("dummy/helpers/app-version",["exports","ember","dummy/config/environment"],function(e,t,n){function l(){return i}e.appVersion=l;var i=n.default.APP.version;e.default=t.default.Helper.helper(l)}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){var l=n.default.APP,i=l.name,o=l.version;e.default={name:"App Version",initialize:(0,t.default)(i,o)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e.default={name:"ember-data",initialize:t.default}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function l(){var e=arguments[1]||arguments[0];if(n.default.exportApplicationGlobal!==!1){var l;if("undefined"!=typeof window)l=window;else if("undefined"!=typeof global)l=global;else{if("undefined"==typeof self)return;l=self}var i,o=n.default.exportApplicationGlobal;i="string"==typeof o?o:t.default.String.classify(n.default.modulePrefix),l[i]||(l[i]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete l[i]}}))}}e.initialize=l,e.default={name:"export-application-global",initialize:l}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:function(){}}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:function(){}}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var l=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL});l.map(function(){}),e.default=l}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/snippets",["exports"],function(e){e.default={"usage.hbs":'{{#ember-scroll-view\n  position="top-right"\n  offsetTop=85\n}}\n  <!-- page content -->\n{{/ember-scroll-view}}\n'}}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"ykFdmTFR",block:'{"statements":[["block",["ember-scroll-view"],null,[["offsetTop"],[85]],0]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","header-section"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","container"],["flush-element"],["text","\\n      "],["open-element","h1",[]],["flush-element"],["text","Scroll Progress View Demo"],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","content-section"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","container"],["flush-element"],["text","\\n      "],["open-element","h2",[]],["static-attr","class","title"],["flush-element"],["text","ember-scroll-progress"],["close-element"],["text","\\n      "],["open-element","p",[]],["flush-element"],["text","An ember addon to display the progress of the page scroll."],["open-element","br",[]],["flush-element"],["close-element"],["text"," Scroll the page to view this page\'s progress on the bottom right."],["close-element"],["text","\\n\\n      "],["open-element","h3",[]],["flush-element"],["text","Usage:"],["close-element"],["text","\\n      "],["append",["helper",["code-snippet"],null,[["name","class"],["usage.hbs","code-snippet"]]],false],["text","\\n      "],["open-element","h3",[]],["flush-element"],["text","Parameters:"],["close-element"],["text","\\n      "],["open-element","ul",[]],["flush-element"],["text","\\n        "],["open-element","li",[]],["flush-element"],["open-element","b",[]],["flush-element"],["text","position"],["close-element"],["text"," to specify the position of the scroll progress view. Available options: `top-left`, `bottom-left`, `top-right`, `bottom-right`"],["close-element"],["text","\\n        "],["open-element","li",[]],["flush-element"],["open-element","b",[]],["flush-element"],["text","offsetTop"],["close-element"],["text"," to set the top offset based on the scroll container\'s top position inside the page."],["close-element"],["text","\\n      "],["close-element"],["text","\\n\\n      "],["open-element","h3",[]],["flush-element"],["text","Installation:"],["close-element"],["text","\\n      "],["open-element","ul",[]],["flush-element"],["text","\\n        "],["open-element","li",[]],["flush-element"],["text","git clone this repository"],["close-element"],["text","\\n        "],["open-element","li",[]],["flush-element"],["text","cd ember-scroll-view"],["close-element"],["text","\\n        "],["open-element","li",[]],["flush-element"],["text","npm install"],["close-element"],["text","\\n        "],["open-element","li",[]],["flush-element"],["text","bower install"],["close-element"],["text","\\n      "],["close-element"],["text","\\n\\n      "],["open-element","h3",[]],["flush-element"],["text","Running"],["close-element"],["text","\\n      "],["open-element","ul",[]],["flush-element"],["text","\\n        "],["open-element","li",[]],["flush-element"],["text","ember serve"],["close-element"],["text","\\n        "],["open-element","li",[]],["flush-element"],["text","Visit your app at "],["open-element","a",[]],["static-attr","href","http://localhost:4200"],["flush-element"],["text","http://localhost:4200"],["close-element"],["text","."],["close-element"],["text","\\n      "],["close-element"],["text","\\n\\n      "],["open-element","h3",[]],["flush-element"],["text","Running Tests"],["close-element"],["text","\\n      "],["open-element","ul",[]],["flush-element"],["text","\\n        "],["open-element","li",[]],["flush-element"],["text","npm test (Runs `ember try:each` to test your addon against multiple Ember versions)"],["close-element"],["text","\\n        "],["open-element","li",[]],["flush-element"],["text","ember test"],["close-element"],["text","\\n        "],["open-element","li",[]],["flush-element"],["text","ember test --server"],["close-element"],["text","\\n      "],["close-element"],["text","\\n\\n      "],["open-element","h3",[]],["flush-element"],["text","Building"],["close-element"],["text","\\n      "],["open-element","ul",[]],["flush-element"],["text","\\n        "],["open-element","li",[]],["flush-element"],["text","ember build"],["close-element"],["text","\\n      "],["close-element"],["text","\\n\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","footer-section"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","container"],["flush-element"],["text","\\n      "],["open-element","p",[]],["flush-element"],["text","Developed by "],["open-element","a",[]],["static-attr","href","https://github.com/gowthamrm"],["flush-element"],["text","@gowthamrm"],["close-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/components/code-snippet",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"mJxgtHOS",block:'{"statements":[["append",["unknown",["source"]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/components/code-snippet.hbs"}})}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",l=document.querySelector('meta[name="'+n+'"]').getAttribute("content"),i=JSON.parse(unescape(l)),o={default:i};return Object.defineProperty(o,"__esModule",{value:!0}),o}catch(e){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app").default.create({name:"ember-scroll-view",version:"0.0.0+a2d19269"});