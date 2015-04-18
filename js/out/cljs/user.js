// Compiled by ClojureScript 0.0-3058 {}
goog.provide('cljs.user');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('russellfail.core');
cljs.core.enable_console_print_BANG_.call(null);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){
return russellfail.core.main.call(null);
}));
russellfail.core.main.call(null);

//# sourceMappingURL=user.js.map