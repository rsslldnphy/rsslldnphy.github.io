// Compiled by ClojureScript 0.0-3058 {}
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null)));
reagent.impl.util.extract_props = (function reagent$impl$util$extract_props(v){
var p = cljs.core.nth.call(null,v,(1),null);
if(cljs.core.map_QMARK_.call(null,p)){
return p;
} else {
return null;
}
});
reagent.impl.util.extract_children = (function reagent$impl$util$extract_children(v){
var p = cljs.core.nth.call(null,v,(1),null);
var first_child = ((((p == null)) || (cljs.core.map_QMARK_.call(null,p)))?(2):(1));
if((cljs.core.count.call(null,v) > first_child)){
return cljs.core.subvec.call(null,v,first_child);
} else {
return null;
}
});
reagent.impl.util.get_argv = (function reagent$impl$util$get_argv(c){
return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function reagent$impl$util$get_props(c){
return reagent.impl.util.extract_props.call(null,(c["props"]["argv"]));
});
reagent.impl.util.get_children = (function reagent$impl$util$get_children(c){
return reagent.impl.util.extract_children.call(null,(c["props"]["argv"]));
});
reagent.impl.util.reagent_component_QMARK_ = (function reagent$impl$util$reagent_component_QMARK_(c){
return !(((c["props"]["argv"]) == null));
});
reagent.impl.util.cached_react_class = (function reagent$impl$util$cached_react_class(c){
return (c["cljsReactClass"]);
});
reagent.impl.util.cache_react_class = (function reagent$impl$util$cache_react_class(c,constructor){
return (c["cljsReactClass"] = constructor);
});
reagent.impl.util.memoize_1 = (function reagent$impl$util$memoize_1(f){
var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (mem){
return (function (arg){
var v = cljs.core.get.call(null,cljs.core.deref.call(null,mem),arg);
if(!((v == null))){
return v;
} else {
var ret = f.call(null,arg);
cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function reagent$impl$util$capitalize(s){
if((cljs.core.count.call(null,s) < (2))){
return clojure.string.upper_case.call(null,s);
} else {
return [cljs.core.str(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,(0),(1)))),cljs.core.str(cljs.core.subs.call(null,s,(1)))].join('');
}
});
reagent.impl.util.dash_to_camel = (function reagent$impl$util$dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name.call(null,dashed);
var vec__27199 = clojure.string.split.call(null,name_str,/-/);
var start = cljs.core.nth.call(null,vec__27199,(0),null);
var parts = cljs.core.nthnext.call(null,vec__27199,(1));
if(cljs.core.truth_(reagent.impl.util.dont_camel_case.call(null,start))){
return name_str;
} else {
return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,reagent.impl.util.capitalize,parts));
}
}
});

/**
* @constructor
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
})
reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args));
});

reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__27201__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__16189__auto___27202 = self__.p;
if(cljs.core.truth_(or__16189__auto___27202)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__27201 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__27203__i = 0, G__27203__a = new Array(arguments.length -  1);
while (G__27203__i < G__27203__a.length) {G__27203__a[G__27203__i] = arguments[G__27203__i + 1]; ++G__27203__i;}
  a = new cljs.core.IndexedSeq(G__27203__a,0);
} 
return G__27201__delegate.call(this,self__,a);};
G__27201.cljs$lang$maxFixedArity = 1;
G__27201.cljs$lang$applyTo = (function (arglist__27204){
var self__ = cljs.core.first(arglist__27204);
var a = cljs.core.rest(arglist__27204);
return G__27201__delegate(self__,a);
});
G__27201.cljs$core$IFn$_invoke$arity$variadic = G__27201__delegate;
return G__27201;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args27200){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args27200)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__27205__delegate = function (a){
var _ = this;
var or__16189__auto___27206 = self__.p;
if(cljs.core.truth_(or__16189__auto___27206)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__27205 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__27207__i = 0, G__27207__a = new Array(arguments.length -  0);
while (G__27207__i < G__27207__a.length) {G__27207__a[G__27207__i] = arguments[G__27207__i + 0]; ++G__27207__i;}
  a = new cljs.core.IndexedSeq(G__27207__a,0);
} 
return G__27205__delegate.call(this,a);};
G__27205.cljs$lang$maxFixedArity = 0;
G__27205.cljs$lang$applyTo = (function (arglist__27208){
var a = cljs.core.seq(arglist__27208);
return G__27205__delegate(a);
});
G__27205.cljs$core$IFn$_invoke$arity$variadic = G__27205__delegate;
return G__27205;
})()
;

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__16776__auto__,writer__16777__auto__,opt__16778__auto__){
return cljs.core._write.call(null,writer__16777__auto__,"reagent.impl.util/partial-ifn");
});

reagent.impl.util.__GT_partial_ifn = (function reagent$impl$util$__GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.merge_class = (function reagent$impl$util$merge_class(p1,p2){
var class$ = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var c1 = temp__4126__auto__;
var temp__4126__auto____$1 = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4126__auto____$1)){
var c2 = temp__4126__auto____$1;
return [cljs.core.str(c1),cljs.core.str(" "),cljs.core.str(c2)].join('');
} else {
return null;
}
} else {
return null;
}
})();
if((class$ == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",-2030961996),class$);
}
});
reagent.impl.util.merge_style = (function reagent$impl$util$merge_style(p1,p2){
var style = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var s1 = temp__4126__auto__;
var temp__4126__auto____$1 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4126__auto____$1)){
var s2 = temp__4126__auto____$1;
return cljs.core.merge.call(null,s1,s2);
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"style","style",-496642736),style);
}
});
reagent.impl.util.merge_props = (function reagent$impl$util$merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {
if(cljs.core.map_QMARK_.call(null,p1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1","p1",703771573,null))))].join('')));
}

return reagent.impl.util.merge_style.call(null,p1,reagent.impl.util.merge_class.call(null,p1,cljs.core.merge.call(null,p1,p2)));
}
});
reagent.impl.util._STAR_always_update_STAR_ = false;
if(typeof reagent.impl.util.roots !== 'undefined'){
} else {
reagent.impl.util.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.impl.util.clear_container = (function reagent$impl$util$clear_container(node){
try{return (React["unmountComponentAtNode"])(node);
}catch (e27210){if((e27210 instanceof Object)){
var e = e27210;
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Error unmounting:")].join(''));
} else {
}

if(typeof console !== 'undefined'){
return console.log(e);
} else {
return null;
}
} else {
throw e27210;

}
}});
reagent.impl.util.render_component = (function reagent$impl$util$render_component(comp,container,callback){
try{var _STAR_always_update_STAR_27215 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (React["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_27215){
return (function (){
var _STAR_always_update_STAR_27216 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_27216;
}});})(_STAR_always_update_STAR_27215))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_27215;
}}catch (e27214){if((e27214 instanceof Object)){
var e = e27214;
reagent.impl.util.clear_container.call(null,container);

throw e;
} else {
throw e27214;

}
}});
reagent.impl.util.re_render_component = (function reagent$impl$util$re_render_component(comp,container){
return reagent.impl.util.render_component.call(null,comp,container,null);
});
reagent.impl.util.unmount_component_at_node = (function reagent$impl$util$unmount_component_at_node(container){
cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.dissoc,container);

return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function reagent$impl$util$force_update_all(){
var seq__27221_27225 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.impl.util.roots)));
var chunk__27222_27226 = null;
var count__27223_27227 = (0);
var i__27224_27228 = (0);
while(true){
if((i__27224_27228 < count__27223_27227)){
var v_27229 = cljs.core._nth.call(null,chunk__27222_27226,i__27224_27228);
cljs.core.apply.call(null,reagent.impl.util.re_render_component,v_27229);

var G__27230 = seq__27221_27225;
var G__27231 = chunk__27222_27226;
var G__27232 = count__27223_27227;
var G__27233 = (i__27224_27228 + (1));
seq__27221_27225 = G__27230;
chunk__27222_27226 = G__27231;
count__27223_27227 = G__27232;
i__27224_27228 = G__27233;
continue;
} else {
var temp__4126__auto___27234 = cljs.core.seq.call(null,seq__27221_27225);
if(temp__4126__auto___27234){
var seq__27221_27235__$1 = temp__4126__auto___27234;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27221_27235__$1)){
var c__16976__auto___27236 = cljs.core.chunk_first.call(null,seq__27221_27235__$1);
var G__27237 = cljs.core.chunk_rest.call(null,seq__27221_27235__$1);
var G__27238 = c__16976__auto___27236;
var G__27239 = cljs.core.count.call(null,c__16976__auto___27236);
var G__27240 = (0);
seq__27221_27225 = G__27237;
chunk__27222_27226 = G__27238;
count__27223_27227 = G__27239;
i__27224_27228 = G__27240;
continue;
} else {
var v_27241 = cljs.core.first.call(null,seq__27221_27235__$1);
cljs.core.apply.call(null,reagent.impl.util.re_render_component,v_27241);

var G__27242 = cljs.core.next.call(null,seq__27221_27235__$1);
var G__27243 = null;
var G__27244 = (0);
var G__27245 = (0);
seq__27221_27225 = G__27242;
chunk__27222_27226 = G__27243;
count__27223_27227 = G__27244;
i__27224_27228 = G__27245;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=util.js.map