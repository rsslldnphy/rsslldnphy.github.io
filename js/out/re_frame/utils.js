// Compiled by ClojureScript 0.0-3058 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
/**
 * @param {...*} var_args
 */
re_frame.utils.warn = (function() { 
var re_frame$utils$warn__delegate = function (args){
return console.warn(cljs.core.apply.call(null,cljs.core.str,args));
};
var re_frame$utils$warn = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27316__i = 0, G__27316__a = new Array(arguments.length -  0);
while (G__27316__i < G__27316__a.length) {G__27316__a[G__27316__i] = arguments[G__27316__i + 0]; ++G__27316__i;}
  args = new cljs.core.IndexedSeq(G__27316__a,0);
} 
return re_frame$utils$warn__delegate.call(this,args);};
re_frame$utils$warn.cljs$lang$maxFixedArity = 0;
re_frame$utils$warn.cljs$lang$applyTo = (function (arglist__27317){
var args = cljs.core.seq(arglist__27317);
return re_frame$utils$warn__delegate(args);
});
re_frame$utils$warn.cljs$core$IFn$_invoke$arity$variadic = re_frame$utils$warn__delegate;
return re_frame$utils$warn;
})()
;
/**
 * @param {...*} var_args
 */
re_frame.utils.dbg = (function() { 
var re_frame$utils$dbg__delegate = function (args){
return console.debug(cljs.core.apply.call(null,cljs.core.str,args));
};
var re_frame$utils$dbg = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27318__i = 0, G__27318__a = new Array(arguments.length -  0);
while (G__27318__i < G__27318__a.length) {G__27318__a[G__27318__i] = arguments[G__27318__i + 0]; ++G__27318__i;}
  args = new cljs.core.IndexedSeq(G__27318__a,0);
} 
return re_frame$utils$dbg__delegate.call(this,args);};
re_frame$utils$dbg.cljs$lang$maxFixedArity = 0;
re_frame$utils$dbg.cljs$lang$applyTo = (function (arglist__27319){
var args = cljs.core.seq(arglist__27319);
return re_frame$utils$dbg__delegate(args);
});
re_frame$utils$dbg.cljs$core$IFn$_invoke$arity$variadic = re_frame$utils$dbg__delegate;
return re_frame$utils$dbg;
})()
;
/**
 * @param {...*} var_args
 */
re_frame.utils.log = (function() { 
var re_frame$utils$log__delegate = function (args){
return console.log(cljs.core.apply.call(null,cljs.core.str,args));
};
var re_frame$utils$log = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27320__i = 0, G__27320__a = new Array(arguments.length -  0);
while (G__27320__i < G__27320__a.length) {G__27320__a[G__27320__i] = arguments[G__27320__i + 0]; ++G__27320__i;}
  args = new cljs.core.IndexedSeq(G__27320__a,0);
} 
return re_frame$utils$log__delegate.call(this,args);};
re_frame$utils$log.cljs$lang$maxFixedArity = 0;
re_frame$utils$log.cljs$lang$applyTo = (function (arglist__27321){
var args = cljs.core.seq(arglist__27321);
return re_frame$utils$log__delegate(args);
});
re_frame$utils$log.cljs$core$IFn$_invoke$arity$variadic = re_frame$utils$log__delegate;
return re_frame$utils$log;
})()
;
/**
 * @param {...*} var_args
 */
re_frame.utils.group = (function() { 
var re_frame$utils$group__delegate = function (args){
return console.group(cljs.core.apply.call(null,cljs.core.str,args));
};
var re_frame$utils$group = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27322__i = 0, G__27322__a = new Array(arguments.length -  0);
while (G__27322__i < G__27322__a.length) {G__27322__a[G__27322__i] = arguments[G__27322__i + 0]; ++G__27322__i;}
  args = new cljs.core.IndexedSeq(G__27322__a,0);
} 
return re_frame$utils$group__delegate.call(this,args);};
re_frame$utils$group.cljs$lang$maxFixedArity = 0;
re_frame$utils$group.cljs$lang$applyTo = (function (arglist__27323){
var args = cljs.core.seq(arglist__27323);
return re_frame$utils$group__delegate(args);
});
re_frame$utils$group.cljs$core$IFn$_invoke$arity$variadic = re_frame$utils$group__delegate;
return re_frame$utils$group;
})()
;
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(){
return console.groupEnd();
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.warn.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map