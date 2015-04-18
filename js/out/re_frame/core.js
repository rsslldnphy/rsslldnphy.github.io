// Compiled by ClojureScript 0.0-3058 {}
goog.provide('re_frame.core');
goog.require('cljs.core');
goog.require('re_frame.middleware');
goog.require('re_frame.router');
goog.require('re_frame.subs');
goog.require('re_frame.handlers');
re_frame.core.dispatch = re_frame.router.dispatch;
re_frame.core.dispatch_sync = re_frame.router.dispatch_sync;
re_frame.core.register_sub = re_frame.subs.register;
re_frame.core.subscribe = re_frame.subs.subscribe;
re_frame.core.pure = re_frame.middleware.pure;
re_frame.core.debug = re_frame.middleware.debug;
re_frame.core.undoable = re_frame.middleware.undoable;
re_frame.core.path = re_frame.middleware.path;
re_frame.core.enrich = re_frame.middleware.enrich;
re_frame.core.trim_v = re_frame.middleware.trim_v;
re_frame.core.after = re_frame.middleware.after;
re_frame.core.register_handler = (function() {
var re_frame$core$register_handler = null;
var re_frame$core$register_handler__2 = (function (id,handler){
return re_frame.handlers.register_base.call(null,id,re_frame.core.pure,handler);
});
var re_frame$core$register_handler__3 = (function (id,middleware,handler){
return re_frame.handlers.register_base.call(null,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.pure,middleware], null),handler);
});
re_frame$core$register_handler = function(id,middleware,handler){
switch(arguments.length){
case 2:
return re_frame$core$register_handler__2.call(this,id,middleware);
case 3:
return re_frame$core$register_handler__3.call(this,id,middleware,handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$core$register_handler.cljs$core$IFn$_invoke$arity$2 = re_frame$core$register_handler__2;
re_frame$core$register_handler.cljs$core$IFn$_invoke$arity$3 = re_frame$core$register_handler__3;
return re_frame$core$register_handler;
})()
;

//# sourceMappingURL=core.js.map