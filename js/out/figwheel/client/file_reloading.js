// Compiled by ClojureScript 0.0-3058 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__31655_SHARP_,p2__31656_SHARP_){
var and__16177__auto__ = p1__31655_SHARP_;
if(cljs.core.truth_(and__16177__auto__)){
return p2__31656_SHARP_;
} else {
return and__16177__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16189__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16189__auto__){
return or__16189__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__31658_SHARP_,p2__31657_SHARP_){
return [cljs.core.str(p2__31657_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__16189__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16189__auto__){
return or__16189__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16189__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16189__auto__)){
return or__16189__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
figwheel.client.file_reloading.resolve_url = (function (){var method_table__17086__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17087__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17088__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17089__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17090__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17090__auto__,method_table__17086__auto__,prefer_table__17087__auto__,method_cache__17088__auto__,cached_hierarchy__17089__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__31659){
var map__31660 = p__31659;
var map__31660__$1 = ((cljs.core.seq_QMARK_.call(null,map__31660))?cljs.core.apply.call(null,cljs.core.hash_map,map__31660):map__31660);
var file = cljs.core.get.call(null,map__31660__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__31661){
var map__31662 = p__31661;
var map__31662__$1 = ((cljs.core.seq_QMARK_.call(null,map__31662))?cljs.core.apply.call(null,cljs.core.hash_map,map__31662):map__31662);
var namespace = cljs.core.get.call(null,map__31662__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__17086__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17087__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17088__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17089__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17090__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17090__auto__,method_table__17086__auto__,prefer_table__17087__auto__,method_cache__17088__auto__,cached_hierarchy__17089__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e31663){if((e31663 instanceof Error)){
var e = e31663;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31663;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function() {
var figwheel$client$file_reloading$reload_file_STAR_ = null;
var figwheel$client$file_reloading$reload_file_STAR___1 = (function (request_url){
return figwheel$client$file_reloading$reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var figwheel$client$file_reloading$reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
figwheel$client$file_reloading$reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$reload_file_STAR___1.call(this,request_url);
case 2:
return figwheel$client$file_reloading$reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_file_STAR___1;
figwheel$client$file_reloading$reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = figwheel$client$file_reloading$reload_file_STAR___2;
return figwheel$client$file_reloading$reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31664,callback){
var map__31666 = p__31664;
var map__31666__$1 = ((cljs.core.seq_QMARK_.call(null,map__31666))?cljs.core.apply.call(null,cljs.core.hash_map,map__31666):map__31666);
var file_msg = map__31666__$1;
var request_url = cljs.core.get.call(null,map__31666__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31666,map__31666__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31666,map__31666__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31667){
var map__31669 = p__31667;
var map__31669__$1 = ((cljs.core.seq_QMARK_.call(null,map__31669))?cljs.core.apply.call(null,cljs.core.hash_map,map__31669):map__31669);
var file_msg = map__31669__$1;
var meta_data = cljs.core.get.call(null,map__31669__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__31669__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__16189__auto__ = meta_data;
if(cljs.core.truth_(or__16189__auto__)){
return or__16189__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16177__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16177__auto__){
var or__16189__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16189__auto__)){
return or__16189__auto__;
} else {
var or__16189__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16189__auto____$1)){
return or__16189__auto____$1;
} else {
var and__16177__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16177__auto____$1){
var or__16189__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16189__auto____$2){
return or__16189__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16177__auto____$1;
}
}
}
} else {
return and__16177__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31670,callback){
var map__31672 = p__31670;
var map__31672__$1 = ((cljs.core.seq_QMARK_.call(null,map__31672))?cljs.core.apply.call(null,cljs.core.hash_map,map__31672):map__31672);
var file_msg = map__31672__$1;
var namespace = cljs.core.get.call(null,map__31672__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__31672__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__18370__auto___31759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18370__auto___31759,out){
return (function (){
var f__18371__auto__ = (function (){var switch__18314__auto__ = ((function (c__18370__auto___31759,out){
return (function (state_31741){
var state_val_31742 = (state_31741[(1)]);
if((state_val_31742 === (7))){
var inst_31725 = (state_31741[(7)]);
var inst_31731 = (state_31741[(2)]);
var inst_31732 = cljs.core.async.put_BANG_.call(null,out,inst_31731);
var inst_31721 = inst_31725;
var state_31741__$1 = (function (){var statearr_31743 = state_31741;
(statearr_31743[(8)] = inst_31732);

(statearr_31743[(9)] = inst_31721);

return statearr_31743;
})();
var statearr_31744_31760 = state_31741__$1;
(statearr_31744_31760[(2)] = null);

(statearr_31744_31760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31742 === (6))){
var inst_31737 = (state_31741[(2)]);
var state_31741__$1 = state_31741;
var statearr_31745_31761 = state_31741__$1;
(statearr_31745_31761[(2)] = inst_31737);

(statearr_31745_31761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31742 === (5))){
var inst_31735 = cljs.core.async.close_BANG_.call(null,out);
var state_31741__$1 = state_31741;
var statearr_31746_31762 = state_31741__$1;
(statearr_31746_31762[(2)] = inst_31735);

(statearr_31746_31762[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31742 === (4))){
var inst_31724 = (state_31741[(10)]);
var inst_31729 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31724);
var state_31741__$1 = state_31741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31741__$1,(7),inst_31729);
} else {
if((state_val_31742 === (3))){
var inst_31739 = (state_31741[(2)]);
var state_31741__$1 = state_31741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31741__$1,inst_31739);
} else {
if((state_val_31742 === (2))){
var inst_31721 = (state_31741[(9)]);
var inst_31724 = (state_31741[(10)]);
var inst_31724__$1 = cljs.core.nth.call(null,inst_31721,(0),null);
var inst_31725 = cljs.core.nthnext.call(null,inst_31721,(1));
var inst_31726 = (inst_31724__$1 == null);
var inst_31727 = cljs.core.not.call(null,inst_31726);
var state_31741__$1 = (function (){var statearr_31747 = state_31741;
(statearr_31747[(7)] = inst_31725);

(statearr_31747[(10)] = inst_31724__$1);

return statearr_31747;
})();
if(inst_31727){
var statearr_31748_31763 = state_31741__$1;
(statearr_31748_31763[(1)] = (4));

} else {
var statearr_31749_31764 = state_31741__$1;
(statearr_31749_31764[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31742 === (1))){
var inst_31719 = cljs.core.nth.call(null,files,(0),null);
var inst_31720 = cljs.core.nthnext.call(null,files,(1));
var inst_31721 = files;
var state_31741__$1 = (function (){var statearr_31750 = state_31741;
(statearr_31750[(11)] = inst_31720);

(statearr_31750[(9)] = inst_31721);

(statearr_31750[(12)] = inst_31719);

return statearr_31750;
})();
var statearr_31751_31765 = state_31741__$1;
(statearr_31751_31765[(2)] = null);

(statearr_31751_31765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__18370__auto___31759,out))
;
return ((function (switch__18314__auto__,c__18370__auto___31759,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18315__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18315__auto____0 = (function (){
var statearr_31755 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31755[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18315__auto__);

(statearr_31755[(1)] = (1));

return statearr_31755;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18315__auto____1 = (function (state_31741){
while(true){
var ret_value__18316__auto__ = (function (){try{while(true){
var result__18317__auto__ = switch__18314__auto__.call(null,state_31741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18317__auto__;
}
break;
}
}catch (e31756){if((e31756 instanceof Object)){
var ex__18318__auto__ = e31756;
var statearr_31757_31766 = state_31741;
(statearr_31757_31766[(5)] = ex__18318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31767 = state_31741;
state_31741 = G__31767;
continue;
} else {
return ret_value__18316__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18315__auto__ = function(state_31741){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18315__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18315__auto____1.call(this,state_31741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18315__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18315__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18315__auto__;
})()
;})(switch__18314__auto__,c__18370__auto___31759,out))
})();
var state__18372__auto__ = (function (){var statearr_31758 = f__18371__auto__.call(null);
(statearr_31758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18370__auto___31759);

return statearr_31758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18372__auto__);
});})(c__18370__auto___31759,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__31768,p__31769){
var map__31772 = p__31768;
var map__31772__$1 = ((cljs.core.seq_QMARK_.call(null,map__31772))?cljs.core.apply.call(null,cljs.core.hash_map,map__31772):map__31772);
var opts = map__31772__$1;
var url_rewriter = cljs.core.get.call(null,map__31772__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__31773 = p__31769;
var map__31773__$1 = ((cljs.core.seq_QMARK_.call(null,map__31773))?cljs.core.apply.call(null,cljs.core.hash_map,map__31773):map__31773);
var file_msg = map__31773__$1;
var file = cljs.core.get.call(null,map__31773__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31774){
var map__31777 = p__31774;
var map__31777__$1 = ((cljs.core.seq_QMARK_.call(null,map__31777))?cljs.core.apply.call(null,cljs.core.hash_map,map__31777):map__31777);
var file = cljs.core.get.call(null,map__31777__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__31777__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__16177__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16177__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16177__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e31778){var e = e31778;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31783,p__31784){
var map__31985 = p__31783;
var map__31985__$1 = ((cljs.core.seq_QMARK_.call(null,map__31985))?cljs.core.apply.call(null,cljs.core.hash_map,map__31985):map__31985);
var opts = map__31985__$1;
var load_unchanged_files = cljs.core.get.call(null,map__31985__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__31985__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__31985__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__31986 = p__31784;
var map__31986__$1 = ((cljs.core.seq_QMARK_.call(null,map__31986))?cljs.core.apply.call(null,cljs.core.hash_map,map__31986):map__31986);
var msg = map__31986__$1;
var files = cljs.core.get.call(null,map__31986__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__18370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18370__auto__,map__31985,map__31985__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31986,map__31986__$1,msg,files){
return (function (){
var f__18371__auto__ = (function (){var switch__18314__auto__ = ((function (c__18370__auto__,map__31985,map__31985__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31986,map__31986__$1,msg,files){
return (function (state_32110){
var state_val_32111 = (state_32110[(1)]);
if((state_val_32111 === (7))){
var inst_31997 = (state_32110[(7)]);
var inst_32000 = (state_32110[(8)]);
var inst_31999 = (state_32110[(9)]);
var inst_31998 = (state_32110[(10)]);
var inst_32005 = cljs.core._nth.call(null,inst_31998,inst_32000);
var inst_32006 = figwheel.client.file_reloading.eval_body.call(null,inst_32005);
var inst_32007 = (inst_32000 + (1));
var tmp32112 = inst_31997;
var tmp32113 = inst_31999;
var tmp32114 = inst_31998;
var inst_31997__$1 = tmp32112;
var inst_31998__$1 = tmp32114;
var inst_31999__$1 = tmp32113;
var inst_32000__$1 = inst_32007;
var state_32110__$1 = (function (){var statearr_32115 = state_32110;
(statearr_32115[(7)] = inst_31997__$1);

(statearr_32115[(8)] = inst_32000__$1);

(statearr_32115[(9)] = inst_31999__$1);

(statearr_32115[(11)] = inst_32006);

(statearr_32115[(10)] = inst_31998__$1);

return statearr_32115;
})();
var statearr_32116_32185 = state_32110__$1;
(statearr_32116_32185[(2)] = null);

(statearr_32116_32185[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (20))){
var inst_32043 = (state_32110[(12)]);
var inst_32049 = (state_32110[(13)]);
var inst_32046 = (state_32110[(14)]);
var inst_32042 = (state_32110[(15)]);
var inst_32047 = (state_32110[(16)]);
var inst_32052 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32054 = (function (){var files_not_loaded = inst_32049;
var res = inst_32047;
var res_SINGLEQUOTE_ = inst_32046;
var files_SINGLEQUOTE_ = inst_32043;
var all_files = inst_32042;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32043,inst_32049,inst_32046,inst_32042,inst_32047,inst_32052,state_val_32111,c__18370__auto__,map__31985,map__31985__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31986,map__31986__$1,msg,files){
return (function (p__32053){
var map__32117 = p__32053;
var map__32117__$1 = ((cljs.core.seq_QMARK_.call(null,map__32117))?cljs.core.apply.call(null,cljs.core.hash_map,map__32117):map__32117);
var file = cljs.core.get.call(null,map__32117__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__32117__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32043,inst_32049,inst_32046,inst_32042,inst_32047,inst_32052,state_val_32111,c__18370__auto__,map__31985,map__31985__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31986,map__31986__$1,msg,files))
})();
var inst_32055 = cljs.core.map.call(null,inst_32054,inst_32047);
var inst_32056 = cljs.core.pr_str.call(null,inst_32055);
var inst_32057 = figwheel.client.utils.log.call(null,inst_32056);
var inst_32058 = (function (){var files_not_loaded = inst_32049;
var res = inst_32047;
var res_SINGLEQUOTE_ = inst_32046;
var files_SINGLEQUOTE_ = inst_32043;
var all_files = inst_32042;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32043,inst_32049,inst_32046,inst_32042,inst_32047,inst_32052,inst_32054,inst_32055,inst_32056,inst_32057,state_val_32111,c__18370__auto__,map__31985,map__31985__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31986,map__31986__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32043,inst_32049,inst_32046,inst_32042,inst_32047,inst_32052,inst_32054,inst_32055,inst_32056,inst_32057,state_val_32111,c__18370__auto__,map__31985,map__31985__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31986,map__31986__$1,msg,files))
})();
var inst_32059 = setTimeout(inst_32058,(10));
var state_32110__$1 = (function (){var statearr_32118 = state_32110;
(statearr_32118[(17)] = inst_32052);

(statearr_32118[(18)] = inst_32057);

return statearr_32118;
})();
var statearr_32119_32186 = state_32110__$1;
(statearr_32119_32186[(2)] = inst_32059);

(statearr_32119_32186[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (27))){
var inst_32069 = (state_32110[(19)]);
var state_32110__$1 = state_32110;
var statearr_32120_32187 = state_32110__$1;
(statearr_32120_32187[(2)] = inst_32069);

(statearr_32120_32187[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (1))){
var inst_31989 = (state_32110[(20)]);
var inst_31987 = before_jsload.call(null,files);
var inst_31988 = (function (){return ((function (inst_31989,inst_31987,state_val_32111,c__18370__auto__,map__31985,map__31985__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31986,map__31986__$1,msg,files){
return (function (p1__31779_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31779_SHARP_);
});
;})(inst_31989,inst_31987,state_val_32111,c__18370__auto__,map__31985,map__31985__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31986,map__31986__$1,msg,files))
})();
var inst_31989__$1 = cljs.core.filter.call(null,inst_31988,files);
var inst_31990 = cljs.core.not_empty.call(null,inst_31989__$1);
var state_32110__$1 = (function (){var statearr_32121 = state_32110;
(statearr_32121[(21)] = inst_31987);

(statearr_32121[(20)] = inst_31989__$1);

return statearr_32121;
})();
if(cljs.core.truth_(inst_31990)){
var statearr_32122_32188 = state_32110__$1;
(statearr_32122_32188[(1)] = (2));

} else {
var statearr_32123_32189 = state_32110__$1;
(statearr_32123_32189[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (24))){
var state_32110__$1 = state_32110;
var statearr_32124_32190 = state_32110__$1;
(statearr_32124_32190[(2)] = null);

(statearr_32124_32190[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (4))){
var inst_32034 = (state_32110[(2)]);
var inst_32035 = (function (){return ((function (inst_32034,state_val_32111,c__18370__auto__,map__31985,map__31985__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31986,map__31986__$1,msg,files){
return (function (p1__31780_SHARP_){
var and__16177__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31780_SHARP_);
if(cljs.core.truth_(and__16177__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31780_SHARP_));
} else {
return and__16177__auto__;
}
});
;})(inst_32034,state_val_32111,c__18370__auto__,map__31985,map__31985__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31986,map__31986__$1,msg,files))
})();
var inst_32036 = cljs.core.filter.call(null,inst_32035,files);
var state_32110__$1 = (function (){var statearr_32125 = state_32110;
(statearr_32125[(22)] = inst_32036);

(statearr_32125[(23)] = inst_32034);

return statearr_32125;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_32126_32191 = state_32110__$1;
(statearr_32126_32191[(1)] = (16));

} else {
var statearr_32127_32192 = state_32110__$1;
(statearr_32127_32192[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (15))){
var inst_32024 = (state_32110[(2)]);
var state_32110__$1 = state_32110;
var statearr_32128_32193 = state_32110__$1;
(statearr_32128_32193[(2)] = inst_32024);

(statearr_32128_32193[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (21))){
var state_32110__$1 = state_32110;
var statearr_32129_32194 = state_32110__$1;
(statearr_32129_32194[(2)] = null);

(statearr_32129_32194[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (31))){
var inst_32077 = (state_32110[(24)]);
var inst_32087 = (state_32110[(2)]);
var inst_32088 = cljs.core.not_empty.call(null,inst_32077);
var state_32110__$1 = (function (){var statearr_32130 = state_32110;
(statearr_32130[(25)] = inst_32087);

return statearr_32130;
})();
if(cljs.core.truth_(inst_32088)){
var statearr_32131_32195 = state_32110__$1;
(statearr_32131_32195[(1)] = (32));

} else {
var statearr_32132_32196 = state_32110__$1;
(statearr_32132_32196[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (32))){
var inst_32077 = (state_32110[(24)]);
var inst_32090 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32077);
var inst_32091 = cljs.core.pr_str.call(null,inst_32090);
var inst_32092 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_32091)].join('');
var inst_32093 = figwheel.client.utils.log.call(null,inst_32092);
var state_32110__$1 = state_32110;
var statearr_32133_32197 = state_32110__$1;
(statearr_32133_32197[(2)] = inst_32093);

(statearr_32133_32197[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (33))){
var state_32110__$1 = state_32110;
var statearr_32134_32198 = state_32110__$1;
(statearr_32134_32198[(2)] = null);

(statearr_32134_32198[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (13))){
var inst_32010 = (state_32110[(26)]);
var inst_32014 = cljs.core.chunk_first.call(null,inst_32010);
var inst_32015 = cljs.core.chunk_rest.call(null,inst_32010);
var inst_32016 = cljs.core.count.call(null,inst_32014);
var inst_31997 = inst_32015;
var inst_31998 = inst_32014;
var inst_31999 = inst_32016;
var inst_32000 = (0);
var state_32110__$1 = (function (){var statearr_32135 = state_32110;
(statearr_32135[(7)] = inst_31997);

(statearr_32135[(8)] = inst_32000);

(statearr_32135[(9)] = inst_31999);

(statearr_32135[(10)] = inst_31998);

return statearr_32135;
})();
var statearr_32136_32199 = state_32110__$1;
(statearr_32136_32199[(2)] = null);

(statearr_32136_32199[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (22))){
var inst_32049 = (state_32110[(13)]);
var inst_32062 = (state_32110[(2)]);
var inst_32063 = cljs.core.not_empty.call(null,inst_32049);
var state_32110__$1 = (function (){var statearr_32137 = state_32110;
(statearr_32137[(27)] = inst_32062);

return statearr_32137;
})();
if(cljs.core.truth_(inst_32063)){
var statearr_32138_32200 = state_32110__$1;
(statearr_32138_32200[(1)] = (23));

} else {
var statearr_32139_32201 = state_32110__$1;
(statearr_32139_32201[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (36))){
var state_32110__$1 = state_32110;
var statearr_32140_32202 = state_32110__$1;
(statearr_32140_32202[(2)] = null);

(statearr_32140_32202[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (29))){
var inst_32078 = (state_32110[(28)]);
var inst_32081 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32078);
var inst_32082 = cljs.core.pr_str.call(null,inst_32081);
var inst_32083 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_32082)].join('');
var inst_32084 = figwheel.client.utils.log.call(null,inst_32083);
var state_32110__$1 = state_32110;
var statearr_32141_32203 = state_32110__$1;
(statearr_32141_32203[(2)] = inst_32084);

(statearr_32141_32203[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (6))){
var inst_32031 = (state_32110[(2)]);
var state_32110__$1 = state_32110;
var statearr_32142_32204 = state_32110__$1;
(statearr_32142_32204[(2)] = inst_32031);

(statearr_32142_32204[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (28))){
var inst_32078 = (state_32110[(28)]);
var inst_32075 = (state_32110[(2)]);
var inst_32076 = cljs.core.get.call(null,inst_32075,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32077 = cljs.core.get.call(null,inst_32075,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_32078__$1 = cljs.core.get.call(null,inst_32075,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32079 = cljs.core.not_empty.call(null,inst_32078__$1);
var state_32110__$1 = (function (){var statearr_32143 = state_32110;
(statearr_32143[(28)] = inst_32078__$1);

(statearr_32143[(29)] = inst_32076);

(statearr_32143[(24)] = inst_32077);

return statearr_32143;
})();
if(cljs.core.truth_(inst_32079)){
var statearr_32144_32205 = state_32110__$1;
(statearr_32144_32205[(1)] = (29));

} else {
var statearr_32145_32206 = state_32110__$1;
(statearr_32145_32206[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (25))){
var inst_32108 = (state_32110[(2)]);
var state_32110__$1 = state_32110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32110__$1,inst_32108);
} else {
if((state_val_32111 === (34))){
var inst_32076 = (state_32110[(29)]);
var inst_32096 = (state_32110[(2)]);
var inst_32097 = cljs.core.not_empty.call(null,inst_32076);
var state_32110__$1 = (function (){var statearr_32146 = state_32110;
(statearr_32146[(30)] = inst_32096);

return statearr_32146;
})();
if(cljs.core.truth_(inst_32097)){
var statearr_32147_32207 = state_32110__$1;
(statearr_32147_32207[(1)] = (35));

} else {
var statearr_32148_32208 = state_32110__$1;
(statearr_32148_32208[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (17))){
var inst_32036 = (state_32110[(22)]);
var state_32110__$1 = state_32110;
var statearr_32149_32209 = state_32110__$1;
(statearr_32149_32209[(2)] = inst_32036);

(statearr_32149_32209[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (3))){
var state_32110__$1 = state_32110;
var statearr_32150_32210 = state_32110__$1;
(statearr_32150_32210[(2)] = null);

(statearr_32150_32210[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (12))){
var inst_32027 = (state_32110[(2)]);
var state_32110__$1 = state_32110;
var statearr_32151_32211 = state_32110__$1;
(statearr_32151_32211[(2)] = inst_32027);

(statearr_32151_32211[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (2))){
var inst_31989 = (state_32110[(20)]);
var inst_31996 = cljs.core.seq.call(null,inst_31989);
var inst_31997 = inst_31996;
var inst_31998 = null;
var inst_31999 = (0);
var inst_32000 = (0);
var state_32110__$1 = (function (){var statearr_32152 = state_32110;
(statearr_32152[(7)] = inst_31997);

(statearr_32152[(8)] = inst_32000);

(statearr_32152[(9)] = inst_31999);

(statearr_32152[(10)] = inst_31998);

return statearr_32152;
})();
var statearr_32153_32212 = state_32110__$1;
(statearr_32153_32212[(2)] = null);

(statearr_32153_32212[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (23))){
var inst_32043 = (state_32110[(12)]);
var inst_32049 = (state_32110[(13)]);
var inst_32046 = (state_32110[(14)]);
var inst_32069 = (state_32110[(19)]);
var inst_32042 = (state_32110[(15)]);
var inst_32047 = (state_32110[(16)]);
var inst_32065 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32068 = (function (){var files_not_loaded = inst_32049;
var res = inst_32047;
var res_SINGLEQUOTE_ = inst_32046;
var files_SINGLEQUOTE_ = inst_32043;
var all_files = inst_32042;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32043,inst_32049,inst_32046,inst_32069,inst_32042,inst_32047,inst_32065,state_val_32111,c__18370__auto__,map__31985,map__31985__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31986,map__31986__$1,msg,files){
return (function (p__32067){
var map__32154 = p__32067;
var map__32154__$1 = ((cljs.core.seq_QMARK_.call(null,map__32154))?cljs.core.apply.call(null,cljs.core.hash_map,map__32154):map__32154);
var meta_data = cljs.core.get.call(null,map__32154__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32043,inst_32049,inst_32046,inst_32069,inst_32042,inst_32047,inst_32065,state_val_32111,c__18370__auto__,map__31985,map__31985__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31986,map__31986__$1,msg,files))
})();
var inst_32069__$1 = cljs.core.group_by.call(null,inst_32068,inst_32049);
var inst_32070 = cljs.core.seq_QMARK_.call(null,inst_32069__$1);
var state_32110__$1 = (function (){var statearr_32155 = state_32110;
(statearr_32155[(31)] = inst_32065);

(statearr_32155[(19)] = inst_32069__$1);

return statearr_32155;
})();
if(inst_32070){
var statearr_32156_32213 = state_32110__$1;
(statearr_32156_32213[(1)] = (26));

} else {
var statearr_32157_32214 = state_32110__$1;
(statearr_32157_32214[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (35))){
var inst_32076 = (state_32110[(29)]);
var inst_32099 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32076);
var inst_32100 = cljs.core.pr_str.call(null,inst_32099);
var inst_32101 = [cljs.core.str("not required: "),cljs.core.str(inst_32100)].join('');
var inst_32102 = figwheel.client.utils.log.call(null,inst_32101);
var state_32110__$1 = state_32110;
var statearr_32158_32215 = state_32110__$1;
(statearr_32158_32215[(2)] = inst_32102);

(statearr_32158_32215[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (19))){
var inst_32043 = (state_32110[(12)]);
var inst_32046 = (state_32110[(14)]);
var inst_32042 = (state_32110[(15)]);
var inst_32047 = (state_32110[(16)]);
var inst_32046__$1 = (state_32110[(2)]);
var inst_32047__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32046__$1);
var inst_32048 = (function (){var res = inst_32047__$1;
var res_SINGLEQUOTE_ = inst_32046__$1;
var files_SINGLEQUOTE_ = inst_32043;
var all_files = inst_32042;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32043,inst_32046,inst_32042,inst_32047,inst_32046__$1,inst_32047__$1,state_val_32111,c__18370__auto__,map__31985,map__31985__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31986,map__31986__$1,msg,files){
return (function (p1__31782_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31782_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32043,inst_32046,inst_32042,inst_32047,inst_32046__$1,inst_32047__$1,state_val_32111,c__18370__auto__,map__31985,map__31985__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31986,map__31986__$1,msg,files))
})();
var inst_32049 = cljs.core.filter.call(null,inst_32048,inst_32046__$1);
var inst_32050 = cljs.core.not_empty.call(null,inst_32047__$1);
var state_32110__$1 = (function (){var statearr_32159 = state_32110;
(statearr_32159[(13)] = inst_32049);

(statearr_32159[(14)] = inst_32046__$1);

(statearr_32159[(16)] = inst_32047__$1);

return statearr_32159;
})();
if(cljs.core.truth_(inst_32050)){
var statearr_32160_32216 = state_32110__$1;
(statearr_32160_32216[(1)] = (20));

} else {
var statearr_32161_32217 = state_32110__$1;
(statearr_32161_32217[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (11))){
var state_32110__$1 = state_32110;
var statearr_32162_32218 = state_32110__$1;
(statearr_32162_32218[(2)] = null);

(statearr_32162_32218[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (9))){
var inst_32029 = (state_32110[(2)]);
var state_32110__$1 = state_32110;
var statearr_32163_32219 = state_32110__$1;
(statearr_32163_32219[(2)] = inst_32029);

(statearr_32163_32219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (5))){
var inst_32000 = (state_32110[(8)]);
var inst_31999 = (state_32110[(9)]);
var inst_32002 = (inst_32000 < inst_31999);
var inst_32003 = inst_32002;
var state_32110__$1 = state_32110;
if(cljs.core.truth_(inst_32003)){
var statearr_32164_32220 = state_32110__$1;
(statearr_32164_32220[(1)] = (7));

} else {
var statearr_32165_32221 = state_32110__$1;
(statearr_32165_32221[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (14))){
var inst_32010 = (state_32110[(26)]);
var inst_32019 = cljs.core.first.call(null,inst_32010);
var inst_32020 = figwheel.client.file_reloading.eval_body.call(null,inst_32019);
var inst_32021 = cljs.core.next.call(null,inst_32010);
var inst_31997 = inst_32021;
var inst_31998 = null;
var inst_31999 = (0);
var inst_32000 = (0);
var state_32110__$1 = (function (){var statearr_32166 = state_32110;
(statearr_32166[(7)] = inst_31997);

(statearr_32166[(8)] = inst_32000);

(statearr_32166[(9)] = inst_31999);

(statearr_32166[(32)] = inst_32020);

(statearr_32166[(10)] = inst_31998);

return statearr_32166;
})();
var statearr_32167_32222 = state_32110__$1;
(statearr_32167_32222[(2)] = null);

(statearr_32167_32222[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (26))){
var inst_32069 = (state_32110[(19)]);
var inst_32072 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32069);
var state_32110__$1 = state_32110;
var statearr_32168_32223 = state_32110__$1;
(statearr_32168_32223[(2)] = inst_32072);

(statearr_32168_32223[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (16))){
var inst_32036 = (state_32110[(22)]);
var inst_32038 = (function (){var all_files = inst_32036;
return ((function (all_files,inst_32036,state_val_32111,c__18370__auto__,map__31985,map__31985__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31986,map__31986__$1,msg,files){
return (function (p1__31781_SHARP_){
return cljs.core.update_in.call(null,p1__31781_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_32036,state_val_32111,c__18370__auto__,map__31985,map__31985__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31986,map__31986__$1,msg,files))
})();
var inst_32039 = cljs.core.map.call(null,inst_32038,inst_32036);
var state_32110__$1 = state_32110;
var statearr_32169_32224 = state_32110__$1;
(statearr_32169_32224[(2)] = inst_32039);

(statearr_32169_32224[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (30))){
var state_32110__$1 = state_32110;
var statearr_32170_32225 = state_32110__$1;
(statearr_32170_32225[(2)] = null);

(statearr_32170_32225[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (10))){
var inst_32010 = (state_32110[(26)]);
var inst_32012 = cljs.core.chunked_seq_QMARK_.call(null,inst_32010);
var state_32110__$1 = state_32110;
if(inst_32012){
var statearr_32171_32226 = state_32110__$1;
(statearr_32171_32226[(1)] = (13));

} else {
var statearr_32172_32227 = state_32110__$1;
(statearr_32172_32227[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (18))){
var inst_32043 = (state_32110[(12)]);
var inst_32042 = (state_32110[(15)]);
var inst_32042__$1 = (state_32110[(2)]);
var inst_32043__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_32042__$1);
var inst_32044 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32043__$1);
var state_32110__$1 = (function (){var statearr_32173 = state_32110;
(statearr_32173[(12)] = inst_32043__$1);

(statearr_32173[(15)] = inst_32042__$1);

return statearr_32173;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32110__$1,(19),inst_32044);
} else {
if((state_val_32111 === (37))){
var inst_32105 = (state_32110[(2)]);
var state_32110__$1 = state_32110;
var statearr_32174_32228 = state_32110__$1;
(statearr_32174_32228[(2)] = inst_32105);

(statearr_32174_32228[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (8))){
var inst_31997 = (state_32110[(7)]);
var inst_32010 = (state_32110[(26)]);
var inst_32010__$1 = cljs.core.seq.call(null,inst_31997);
var state_32110__$1 = (function (){var statearr_32175 = state_32110;
(statearr_32175[(26)] = inst_32010__$1);

return statearr_32175;
})();
if(inst_32010__$1){
var statearr_32176_32229 = state_32110__$1;
(statearr_32176_32229[(1)] = (10));

} else {
var statearr_32177_32230 = state_32110__$1;
(statearr_32177_32230[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18370__auto__,map__31985,map__31985__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31986,map__31986__$1,msg,files))
;
return ((function (switch__18314__auto__,c__18370__auto__,map__31985,map__31985__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31986,map__31986__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18315__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18315__auto____0 = (function (){
var statearr_32181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32181[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18315__auto__);

(statearr_32181[(1)] = (1));

return statearr_32181;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18315__auto____1 = (function (state_32110){
while(true){
var ret_value__18316__auto__ = (function (){try{while(true){
var result__18317__auto__ = switch__18314__auto__.call(null,state_32110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18317__auto__;
}
break;
}
}catch (e32182){if((e32182 instanceof Object)){
var ex__18318__auto__ = e32182;
var statearr_32183_32231 = state_32110;
(statearr_32183_32231[(5)] = ex__18318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32232 = state_32110;
state_32110 = G__32232;
continue;
} else {
return ret_value__18316__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18315__auto__ = function(state_32110){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18315__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18315__auto____1.call(this,state_32110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18315__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18315__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18315__auto__;
})()
;})(switch__18314__auto__,c__18370__auto__,map__31985,map__31985__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31986,map__31986__$1,msg,files))
})();
var state__18372__auto__ = (function (){var statearr_32184 = f__18371__auto__.call(null);
(statearr_32184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18370__auto__);

return statearr_32184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18372__auto__);
});})(c__18370__auto__,map__31985,map__31985__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31986,map__31986__$1,msg,files))
);

return c__18370__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32235,link){
var map__32237 = p__32235;
var map__32237__$1 = ((cljs.core.seq_QMARK_.call(null,map__32237))?cljs.core.apply.call(null,cljs.core.hash_map,map__32237):map__32237);
var file = cljs.core.get.call(null,map__32237__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__32237,map__32237__$1,file){
return (function (p1__32233_SHARP_,p2__32234_SHARP_){
if(cljs.core._EQ_.call(null,p1__32233_SHARP_,p2__32234_SHARP_)){
return p1__32233_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__32237,map__32237__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32241){
var map__32242 = p__32241;
var map__32242__$1 = ((cljs.core.seq_QMARK_.call(null,map__32242))?cljs.core.apply.call(null,cljs.core.hash_map,map__32242):map__32242);
var current_url_length = cljs.core.get.call(null,map__32242__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__32242__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32238_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32238_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var figwheel$client$file_reloading$add_link_to_doc = null;
var figwheel$client$file_reloading$add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var figwheel$client$file_reloading$add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});
figwheel$client$file_reloading$add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$add_link_to_doc__1.call(this,orig_link);
case 2:
return figwheel$client$file_reloading$add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$add_link_to_doc__1;
figwheel$client$file_reloading$add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = figwheel$client$file_reloading$add_link_to_doc__2;
return figwheel$client$file_reloading$add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__32243){
var map__32245 = p__32243;
var map__32245__$1 = ((cljs.core.seq_QMARK_.call(null,map__32245))?cljs.core.apply.call(null,cljs.core.hash_map,map__32245):map__32245);
var f_data = map__32245__$1;
var request_url = cljs.core.get.call(null,map__32245__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__32245__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16189__auto__ = request_url;
if(cljs.core.truth_(or__16189__auto__)){
return or__16189__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32246,files_msg){
var map__32268 = p__32246;
var map__32268__$1 = ((cljs.core.seq_QMARK_.call(null,map__32268))?cljs.core.apply.call(null,cljs.core.hash_map,map__32268):map__32268);
var opts = map__32268__$1;
var on_cssload = cljs.core.get.call(null,map__32268__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__32269_32289 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__32270_32290 = null;
var count__32271_32291 = (0);
var i__32272_32292 = (0);
while(true){
if((i__32272_32292 < count__32271_32291)){
var f_32293 = cljs.core._nth.call(null,chunk__32270_32290,i__32272_32292);
figwheel.client.file_reloading.reload_css_file.call(null,f_32293);

var G__32294 = seq__32269_32289;
var G__32295 = chunk__32270_32290;
var G__32296 = count__32271_32291;
var G__32297 = (i__32272_32292 + (1));
seq__32269_32289 = G__32294;
chunk__32270_32290 = G__32295;
count__32271_32291 = G__32296;
i__32272_32292 = G__32297;
continue;
} else {
var temp__4126__auto___32298 = cljs.core.seq.call(null,seq__32269_32289);
if(temp__4126__auto___32298){
var seq__32269_32299__$1 = temp__4126__auto___32298;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32269_32299__$1)){
var c__16976__auto___32300 = cljs.core.chunk_first.call(null,seq__32269_32299__$1);
var G__32301 = cljs.core.chunk_rest.call(null,seq__32269_32299__$1);
var G__32302 = c__16976__auto___32300;
var G__32303 = cljs.core.count.call(null,c__16976__auto___32300);
var G__32304 = (0);
seq__32269_32289 = G__32301;
chunk__32270_32290 = G__32302;
count__32271_32291 = G__32303;
i__32272_32292 = G__32304;
continue;
} else {
var f_32305 = cljs.core.first.call(null,seq__32269_32299__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_32305);

var G__32306 = cljs.core.next.call(null,seq__32269_32299__$1);
var G__32307 = null;
var G__32308 = (0);
var G__32309 = (0);
seq__32269_32289 = G__32306;
chunk__32270_32290 = G__32307;
count__32271_32291 = G__32308;
i__32272_32292 = G__32309;
continue;
}
} else {
}
}
break;
}

var c__18370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18370__auto__,map__32268,map__32268__$1,opts,on_cssload){
return (function (){
var f__18371__auto__ = (function (){var switch__18314__auto__ = ((function (c__18370__auto__,map__32268,map__32268__$1,opts,on_cssload){
return (function (state_32279){
var state_val_32280 = (state_32279[(1)]);
if((state_val_32280 === (2))){
var inst_32275 = (state_32279[(2)]);
var inst_32276 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_32277 = on_cssload.call(null,inst_32276);
var state_32279__$1 = (function (){var statearr_32281 = state_32279;
(statearr_32281[(7)] = inst_32275);

return statearr_32281;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32279__$1,inst_32277);
} else {
if((state_val_32280 === (1))){
var inst_32273 = cljs.core.async.timeout.call(null,(100));
var state_32279__$1 = state_32279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32279__$1,(2),inst_32273);
} else {
return null;
}
}
});})(c__18370__auto__,map__32268,map__32268__$1,opts,on_cssload))
;
return ((function (switch__18314__auto__,c__18370__auto__,map__32268,map__32268__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__18315__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__18315__auto____0 = (function (){
var statearr_32285 = [null,null,null,null,null,null,null,null];
(statearr_32285[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__18315__auto__);

(statearr_32285[(1)] = (1));

return statearr_32285;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__18315__auto____1 = (function (state_32279){
while(true){
var ret_value__18316__auto__ = (function (){try{while(true){
var result__18317__auto__ = switch__18314__auto__.call(null,state_32279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18317__auto__;
}
break;
}
}catch (e32286){if((e32286 instanceof Object)){
var ex__18318__auto__ = e32286;
var statearr_32287_32310 = state_32279;
(statearr_32287_32310[(5)] = ex__18318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32311 = state_32279;
state_32279 = G__32311;
continue;
} else {
return ret_value__18316__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__18315__auto__ = function(state_32279){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__18315__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__18315__auto____1.call(this,state_32279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__18315__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__18315__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__18315__auto__;
})()
;})(switch__18314__auto__,c__18370__auto__,map__32268,map__32268__$1,opts,on_cssload))
})();
var state__18372__auto__ = (function (){var statearr_32288 = f__18371__auto__.call(null);
(statearr_32288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18370__auto__);

return statearr_32288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18372__auto__);
});})(c__18370__auto__,map__32268,map__32268__$1,opts,on_cssload))
);

return c__18370__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map