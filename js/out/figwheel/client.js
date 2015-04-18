// Compiled by ClojureScript 0.0-3058 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30609__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30609 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30610__i = 0, G__30610__a = new Array(arguments.length -  0);
while (G__30610__i < G__30610__a.length) {G__30610__a[G__30610__i] = arguments[G__30610__i + 0]; ++G__30610__i;}
  args = new cljs.core.IndexedSeq(G__30610__a,0);
} 
return G__30609__delegate.call(this,args);};
G__30609.cljs$lang$maxFixedArity = 0;
G__30609.cljs$lang$applyTo = (function (arglist__30611){
var args = cljs.core.seq(arglist__30611);
return G__30609__delegate(args);
});
G__30609.cljs$core$IFn$_invoke$arity$variadic = G__30609__delegate;
return G__30609;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30612){
var map__30614 = p__30612;
var map__30614__$1 = ((cljs.core.seq_QMARK_.call(null,map__30614))?cljs.core.apply.call(null,cljs.core.hash_map,map__30614):map__30614);
var class$ = cljs.core.get.call(null,map__30614__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__30614__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16189__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16189__auto__)){
return or__16189__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16177__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16177__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16177__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18370__auto___30743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18370__auto___30743,ch){
return (function (){
var f__18371__auto__ = (function (){var switch__18314__auto__ = ((function (c__18370__auto___30743,ch){
return (function (state_30717){
var state_val_30718 = (state_30717[(1)]);
if((state_val_30718 === (7))){
var inst_30713 = (state_30717[(2)]);
var state_30717__$1 = state_30717;
var statearr_30719_30744 = state_30717__$1;
(statearr_30719_30744[(2)] = inst_30713);

(statearr_30719_30744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (1))){
var state_30717__$1 = state_30717;
var statearr_30720_30745 = state_30717__$1;
(statearr_30720_30745[(2)] = null);

(statearr_30720_30745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (4))){
var inst_30681 = (state_30717[(7)]);
var inst_30681__$1 = (state_30717[(2)]);
var state_30717__$1 = (function (){var statearr_30721 = state_30717;
(statearr_30721[(7)] = inst_30681__$1);

return statearr_30721;
})();
if(cljs.core.truth_(inst_30681__$1)){
var statearr_30722_30746 = state_30717__$1;
(statearr_30722_30746[(1)] = (5));

} else {
var statearr_30723_30747 = state_30717__$1;
(statearr_30723_30747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (13))){
var state_30717__$1 = state_30717;
var statearr_30724_30748 = state_30717__$1;
(statearr_30724_30748[(2)] = null);

(statearr_30724_30748[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (6))){
var state_30717__$1 = state_30717;
var statearr_30725_30749 = state_30717__$1;
(statearr_30725_30749[(2)] = null);

(statearr_30725_30749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (3))){
var inst_30715 = (state_30717[(2)]);
var state_30717__$1 = state_30717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30717__$1,inst_30715);
} else {
if((state_val_30718 === (12))){
var inst_30688 = (state_30717[(8)]);
var inst_30701 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30688);
var inst_30702 = cljs.core.first.call(null,inst_30701);
var inst_30703 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30702);
var inst_30704 = console.warn("Figwheel: Not loading code with warnings - ",inst_30703);
var state_30717__$1 = state_30717;
var statearr_30726_30750 = state_30717__$1;
(statearr_30726_30750[(2)] = inst_30704);

(statearr_30726_30750[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (2))){
var state_30717__$1 = state_30717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30717__$1,(4),ch);
} else {
if((state_val_30718 === (11))){
var inst_30697 = (state_30717[(2)]);
var state_30717__$1 = state_30717;
var statearr_30727_30751 = state_30717__$1;
(statearr_30727_30751[(2)] = inst_30697);

(statearr_30727_30751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (9))){
var inst_30687 = (state_30717[(9)]);
var inst_30699 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30687,opts);
var state_30717__$1 = state_30717;
if(inst_30699){
var statearr_30728_30752 = state_30717__$1;
(statearr_30728_30752[(1)] = (12));

} else {
var statearr_30729_30753 = state_30717__$1;
(statearr_30729_30753[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (5))){
var inst_30687 = (state_30717[(9)]);
var inst_30681 = (state_30717[(7)]);
var inst_30683 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30684 = (new cljs.core.PersistentArrayMap(null,2,inst_30683,null));
var inst_30685 = (new cljs.core.PersistentHashSet(null,inst_30684,null));
var inst_30686 = figwheel.client.focus_msgs.call(null,inst_30685,inst_30681);
var inst_30687__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30686);
var inst_30688 = cljs.core.first.call(null,inst_30686);
var inst_30689 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30687__$1,opts);
var state_30717__$1 = (function (){var statearr_30730 = state_30717;
(statearr_30730[(8)] = inst_30688);

(statearr_30730[(9)] = inst_30687__$1);

return statearr_30730;
})();
if(cljs.core.truth_(inst_30689)){
var statearr_30731_30754 = state_30717__$1;
(statearr_30731_30754[(1)] = (8));

} else {
var statearr_30732_30755 = state_30717__$1;
(statearr_30732_30755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (14))){
var inst_30707 = (state_30717[(2)]);
var state_30717__$1 = state_30717;
var statearr_30733_30756 = state_30717__$1;
(statearr_30733_30756[(2)] = inst_30707);

(statearr_30733_30756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (10))){
var inst_30709 = (state_30717[(2)]);
var state_30717__$1 = (function (){var statearr_30734 = state_30717;
(statearr_30734[(10)] = inst_30709);

return statearr_30734;
})();
var statearr_30735_30757 = state_30717__$1;
(statearr_30735_30757[(2)] = null);

(statearr_30735_30757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (8))){
var inst_30688 = (state_30717[(8)]);
var inst_30691 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30692 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30688);
var inst_30693 = cljs.core.async.timeout.call(null,(1000));
var inst_30694 = [inst_30692,inst_30693];
var inst_30695 = (new cljs.core.PersistentVector(null,2,(5),inst_30691,inst_30694,null));
var state_30717__$1 = state_30717;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30717__$1,(11),inst_30695);
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
});})(c__18370__auto___30743,ch))
;
return ((function (switch__18314__auto__,c__18370__auto___30743,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18315__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18315__auto____0 = (function (){
var statearr_30739 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30739[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18315__auto__);

(statearr_30739[(1)] = (1));

return statearr_30739;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18315__auto____1 = (function (state_30717){
while(true){
var ret_value__18316__auto__ = (function (){try{while(true){
var result__18317__auto__ = switch__18314__auto__.call(null,state_30717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18317__auto__;
}
break;
}
}catch (e30740){if((e30740 instanceof Object)){
var ex__18318__auto__ = e30740;
var statearr_30741_30758 = state_30717;
(statearr_30741_30758[(5)] = ex__18318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30759 = state_30717;
state_30717 = G__30759;
continue;
} else {
return ret_value__18316__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18315__auto__ = function(state_30717){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18315__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18315__auto____1.call(this,state_30717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18315__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18315__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18315__auto__;
})()
;})(switch__18314__auto__,c__18370__auto___30743,ch))
})();
var state__18372__auto__ = (function (){var statearr_30742 = f__18371__auto__.call(null);
(statearr_30742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18370__auto___30743);

return statearr_30742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18372__auto__);
});})(c__18370__auto___30743,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30760_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30760_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_30769 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__30762_SHARP_,p2__30761_SHARP_){
return [cljs.core.str(p2__30761_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30769){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_30767 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_30768 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_30767,_STAR_print_newline_STAR_30768,base_path_30769){
return (function() { 
var G__30770__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30770 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30771__i = 0, G__30771__a = new Array(arguments.length -  0);
while (G__30771__i < G__30771__a.length) {G__30771__a[G__30771__i] = arguments[G__30771__i + 0]; ++G__30771__i;}
  args = new cljs.core.IndexedSeq(G__30771__a,0);
} 
return G__30770__delegate.call(this,args);};
G__30770.cljs$lang$maxFixedArity = 0;
G__30770.cljs$lang$applyTo = (function (arglist__30772){
var args = cljs.core.seq(arglist__30772);
return G__30770__delegate(args);
});
G__30770.cljs$core$IFn$_invoke$arity$variadic = G__30770__delegate;
return G__30770;
})()
;})(_STAR_print_fn_STAR_30767,_STAR_print_newline_STAR_30768,base_path_30769))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30768;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30767;
}}catch (e30766){if((e30766 instanceof Error)){
var e = e30766;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30769], null));
} else {
var e = e30766;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30769))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30773){
var map__30778 = p__30773;
var map__30778__$1 = ((cljs.core.seq_QMARK_.call(null,map__30778))?cljs.core.apply.call(null,cljs.core.hash_map,map__30778):map__30778);
var opts = map__30778__$1;
var build_id = cljs.core.get.call(null,map__30778__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30778,map__30778__$1,opts,build_id){
return (function (p__30779){
var vec__30780 = p__30779;
var map__30781 = cljs.core.nth.call(null,vec__30780,(0),null);
var map__30781__$1 = ((cljs.core.seq_QMARK_.call(null,map__30781))?cljs.core.apply.call(null,cljs.core.hash_map,map__30781):map__30781);
var msg = map__30781__$1;
var msg_name = cljs.core.get.call(null,map__30781__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30780,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__30780,map__30781,map__30781__$1,msg,msg_name,_,map__30778,map__30778__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30780,map__30781,map__30781__$1,msg,msg_name,_,map__30778,map__30778__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30778,map__30778__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30785){
var vec__30786 = p__30785;
var map__30787 = cljs.core.nth.call(null,vec__30786,(0),null);
var map__30787__$1 = ((cljs.core.seq_QMARK_.call(null,map__30787))?cljs.core.apply.call(null,cljs.core.hash_map,map__30787):map__30787);
var msg = map__30787__$1;
var msg_name = cljs.core.get.call(null,map__30787__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30786,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30788){
var map__30796 = p__30788;
var map__30796__$1 = ((cljs.core.seq_QMARK_.call(null,map__30796))?cljs.core.apply.call(null,cljs.core.hash_map,map__30796):map__30796);
var on_compile_fail = cljs.core.get.call(null,map__30796__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__30796__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__30796,map__30796__$1,on_compile_fail,on_compile_warning){
return (function (p__30797){
var vec__30798 = p__30797;
var map__30799 = cljs.core.nth.call(null,vec__30798,(0),null);
var map__30799__$1 = ((cljs.core.seq_QMARK_.call(null,map__30799))?cljs.core.apply.call(null,cljs.core.hash_map,map__30799):map__30799);
var msg = map__30799__$1;
var msg_name = cljs.core.get.call(null,map__30799__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30798,(1));
var pred__30800 = cljs.core._EQ_;
var expr__30801 = msg_name;
if(cljs.core.truth_(pred__30800.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30801))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30800.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30801))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30796,map__30796__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18370__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18371__auto__ = (function (){var switch__18314__auto__ = ((function (c__18370__auto__,msg_hist,msg_names,msg){
return (function (state_30998){
var state_val_30999 = (state_30998[(1)]);
if((state_val_30999 === (7))){
var inst_30934 = (state_30998[(2)]);
var state_30998__$1 = state_30998;
var statearr_31000_31041 = state_30998__$1;
(statearr_31000_31041[(2)] = inst_30934);

(statearr_31000_31041[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (20))){
var inst_30960 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30998__$1 = state_30998;
if(inst_30960){
var statearr_31001_31042 = state_30998__$1;
(statearr_31001_31042[(1)] = (22));

} else {
var statearr_31002_31043 = state_30998__$1;
(statearr_31002_31043[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (27))){
var inst_30972 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30973 = figwheel.client.heads_up.display_warning.call(null,inst_30972);
var state_30998__$1 = state_30998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30998__$1,(30),inst_30973);
} else {
if((state_val_30999 === (1))){
var inst_30922 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30998__$1 = state_30998;
if(cljs.core.truth_(inst_30922)){
var statearr_31003_31044 = state_30998__$1;
(statearr_31003_31044[(1)] = (2));

} else {
var statearr_31004_31045 = state_30998__$1;
(statearr_31004_31045[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (24))){
var inst_30988 = (state_30998[(2)]);
var state_30998__$1 = state_30998;
var statearr_31005_31046 = state_30998__$1;
(statearr_31005_31046[(2)] = inst_30988);

(statearr_31005_31046[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (4))){
var inst_30996 = (state_30998[(2)]);
var state_30998__$1 = state_30998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30998__$1,inst_30996);
} else {
if((state_val_30999 === (15))){
var inst_30949 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30950 = figwheel.client.format_messages.call(null,inst_30949);
var inst_30951 = figwheel.client.heads_up.display_error.call(null,inst_30950);
var state_30998__$1 = state_30998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30998__$1,(18),inst_30951);
} else {
if((state_val_30999 === (21))){
var inst_30990 = (state_30998[(2)]);
var state_30998__$1 = state_30998;
var statearr_31006_31047 = state_30998__$1;
(statearr_31006_31047[(2)] = inst_30990);

(statearr_31006_31047[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (31))){
var inst_30979 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30998__$1 = state_30998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30998__$1,(34),inst_30979);
} else {
if((state_val_30999 === (32))){
var state_30998__$1 = state_30998;
var statearr_31007_31048 = state_30998__$1;
(statearr_31007_31048[(2)] = null);

(statearr_31007_31048[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (33))){
var inst_30984 = (state_30998[(2)]);
var state_30998__$1 = state_30998;
var statearr_31008_31049 = state_30998__$1;
(statearr_31008_31049[(2)] = inst_30984);

(statearr_31008_31049[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (13))){
var inst_30940 = (state_30998[(2)]);
var inst_30941 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30942 = figwheel.client.format_messages.call(null,inst_30941);
var inst_30943 = figwheel.client.heads_up.display_error.call(null,inst_30942);
var state_30998__$1 = (function (){var statearr_31009 = state_30998;
(statearr_31009[(7)] = inst_30940);

return statearr_31009;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30998__$1,(14),inst_30943);
} else {
if((state_val_30999 === (22))){
var inst_30962 = figwheel.client.heads_up.clear.call(null);
var state_30998__$1 = state_30998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30998__$1,(25),inst_30962);
} else {
if((state_val_30999 === (29))){
var inst_30986 = (state_30998[(2)]);
var state_30998__$1 = state_30998;
var statearr_31010_31050 = state_30998__$1;
(statearr_31010_31050[(2)] = inst_30986);

(statearr_31010_31050[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (6))){
var inst_30930 = figwheel.client.heads_up.clear.call(null);
var state_30998__$1 = state_30998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30998__$1,(9),inst_30930);
} else {
if((state_val_30999 === (28))){
var inst_30977 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30998__$1 = state_30998;
if(inst_30977){
var statearr_31011_31051 = state_30998__$1;
(statearr_31011_31051[(1)] = (31));

} else {
var statearr_31012_31052 = state_30998__$1;
(statearr_31012_31052[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (25))){
var inst_30964 = (state_30998[(2)]);
var inst_30965 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30966 = figwheel.client.heads_up.display_warning.call(null,inst_30965);
var state_30998__$1 = (function (){var statearr_31013 = state_30998;
(statearr_31013[(8)] = inst_30964);

return statearr_31013;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30998__$1,(26),inst_30966);
} else {
if((state_val_30999 === (34))){
var inst_30981 = (state_30998[(2)]);
var state_30998__$1 = state_30998;
var statearr_31014_31053 = state_30998__$1;
(statearr_31014_31053[(2)] = inst_30981);

(statearr_31014_31053[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (17))){
var inst_30992 = (state_30998[(2)]);
var state_30998__$1 = state_30998;
var statearr_31015_31054 = state_30998__$1;
(statearr_31015_31054[(2)] = inst_30992);

(statearr_31015_31054[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (3))){
var inst_30936 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30998__$1 = state_30998;
if(inst_30936){
var statearr_31016_31055 = state_30998__$1;
(statearr_31016_31055[(1)] = (10));

} else {
var statearr_31017_31056 = state_30998__$1;
(statearr_31017_31056[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (12))){
var inst_30994 = (state_30998[(2)]);
var state_30998__$1 = state_30998;
var statearr_31018_31057 = state_30998__$1;
(statearr_31018_31057[(2)] = inst_30994);

(statearr_31018_31057[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (2))){
var inst_30924 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30998__$1 = state_30998;
if(cljs.core.truth_(inst_30924)){
var statearr_31019_31058 = state_30998__$1;
(statearr_31019_31058[(1)] = (5));

} else {
var statearr_31020_31059 = state_30998__$1;
(statearr_31020_31059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (23))){
var inst_30970 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30998__$1 = state_30998;
if(inst_30970){
var statearr_31021_31060 = state_30998__$1;
(statearr_31021_31060[(1)] = (27));

} else {
var statearr_31022_31061 = state_30998__$1;
(statearr_31022_31061[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (19))){
var inst_30957 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30958 = figwheel.client.heads_up.append_message.call(null,inst_30957);
var state_30998__$1 = state_30998;
var statearr_31023_31062 = state_30998__$1;
(statearr_31023_31062[(2)] = inst_30958);

(statearr_31023_31062[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (11))){
var inst_30947 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30998__$1 = state_30998;
if(inst_30947){
var statearr_31024_31063 = state_30998__$1;
(statearr_31024_31063[(1)] = (15));

} else {
var statearr_31025_31064 = state_30998__$1;
(statearr_31025_31064[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (9))){
var inst_30932 = (state_30998[(2)]);
var state_30998__$1 = state_30998;
var statearr_31026_31065 = state_30998__$1;
(statearr_31026_31065[(2)] = inst_30932);

(statearr_31026_31065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (5))){
var inst_30926 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30998__$1 = state_30998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30998__$1,(8),inst_30926);
} else {
if((state_val_30999 === (14))){
var inst_30945 = (state_30998[(2)]);
var state_30998__$1 = state_30998;
var statearr_31027_31066 = state_30998__$1;
(statearr_31027_31066[(2)] = inst_30945);

(statearr_31027_31066[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (26))){
var inst_30968 = (state_30998[(2)]);
var state_30998__$1 = state_30998;
var statearr_31028_31067 = state_30998__$1;
(statearr_31028_31067[(2)] = inst_30968);

(statearr_31028_31067[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (16))){
var inst_30955 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30998__$1 = state_30998;
if(inst_30955){
var statearr_31029_31068 = state_30998__$1;
(statearr_31029_31068[(1)] = (19));

} else {
var statearr_31030_31069 = state_30998__$1;
(statearr_31030_31069[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (30))){
var inst_30975 = (state_30998[(2)]);
var state_30998__$1 = state_30998;
var statearr_31031_31070 = state_30998__$1;
(statearr_31031_31070[(2)] = inst_30975);

(statearr_31031_31070[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (10))){
var inst_30938 = figwheel.client.heads_up.clear.call(null);
var state_30998__$1 = state_30998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30998__$1,(13),inst_30938);
} else {
if((state_val_30999 === (18))){
var inst_30953 = (state_30998[(2)]);
var state_30998__$1 = state_30998;
var statearr_31032_31071 = state_30998__$1;
(statearr_31032_31071[(2)] = inst_30953);

(statearr_31032_31071[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (8))){
var inst_30928 = (state_30998[(2)]);
var state_30998__$1 = state_30998;
var statearr_31033_31072 = state_30998__$1;
(statearr_31033_31072[(2)] = inst_30928);

(statearr_31033_31072[(1)] = (7));


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
});})(c__18370__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18314__auto__,c__18370__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18315__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18315__auto____0 = (function (){
var statearr_31037 = [null,null,null,null,null,null,null,null,null];
(statearr_31037[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18315__auto__);

(statearr_31037[(1)] = (1));

return statearr_31037;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18315__auto____1 = (function (state_30998){
while(true){
var ret_value__18316__auto__ = (function (){try{while(true){
var result__18317__auto__ = switch__18314__auto__.call(null,state_30998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18317__auto__;
}
break;
}
}catch (e31038){if((e31038 instanceof Object)){
var ex__18318__auto__ = e31038;
var statearr_31039_31073 = state_30998;
(statearr_31039_31073[(5)] = ex__18318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31074 = state_30998;
state_30998 = G__31074;
continue;
} else {
return ret_value__18316__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18315__auto__ = function(state_30998){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18315__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18315__auto____1.call(this,state_30998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18315__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18315__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18315__auto__;
})()
;})(switch__18314__auto__,c__18370__auto__,msg_hist,msg_names,msg))
})();
var state__18372__auto__ = (function (){var statearr_31040 = f__18371__auto__.call(null);
(statearr_31040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18370__auto__);

return statearr_31040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18372__auto__);
});})(c__18370__auto__,msg_hist,msg_names,msg))
);

return c__18370__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18370__auto___31137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18370__auto___31137,ch){
return (function (){
var f__18371__auto__ = (function (){var switch__18314__auto__ = ((function (c__18370__auto___31137,ch){
return (function (state_31120){
var state_val_31121 = (state_31120[(1)]);
if((state_val_31121 === (8))){
var inst_31112 = (state_31120[(2)]);
var state_31120__$1 = (function (){var statearr_31122 = state_31120;
(statearr_31122[(7)] = inst_31112);

return statearr_31122;
})();
var statearr_31123_31138 = state_31120__$1;
(statearr_31123_31138[(2)] = null);

(statearr_31123_31138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31121 === (7))){
var inst_31116 = (state_31120[(2)]);
var state_31120__$1 = state_31120;
var statearr_31124_31139 = state_31120__$1;
(statearr_31124_31139[(2)] = inst_31116);

(statearr_31124_31139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31121 === (6))){
var state_31120__$1 = state_31120;
var statearr_31125_31140 = state_31120__$1;
(statearr_31125_31140[(2)] = null);

(statearr_31125_31140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31121 === (5))){
var inst_31108 = (state_31120[(8)]);
var inst_31110 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31108);
var state_31120__$1 = state_31120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31120__$1,(8),inst_31110);
} else {
if((state_val_31121 === (4))){
var inst_31108 = (state_31120[(8)]);
var inst_31108__$1 = (state_31120[(2)]);
var state_31120__$1 = (function (){var statearr_31126 = state_31120;
(statearr_31126[(8)] = inst_31108__$1);

return statearr_31126;
})();
if(cljs.core.truth_(inst_31108__$1)){
var statearr_31127_31141 = state_31120__$1;
(statearr_31127_31141[(1)] = (5));

} else {
var statearr_31128_31142 = state_31120__$1;
(statearr_31128_31142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31121 === (3))){
var inst_31118 = (state_31120[(2)]);
var state_31120__$1 = state_31120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31120__$1,inst_31118);
} else {
if((state_val_31121 === (2))){
var state_31120__$1 = state_31120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31120__$1,(4),ch);
} else {
if((state_val_31121 === (1))){
var state_31120__$1 = state_31120;
var statearr_31129_31143 = state_31120__$1;
(statearr_31129_31143[(2)] = null);

(statearr_31129_31143[(1)] = (2));


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
});})(c__18370__auto___31137,ch))
;
return ((function (switch__18314__auto__,c__18370__auto___31137,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18315__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18315__auto____0 = (function (){
var statearr_31133 = [null,null,null,null,null,null,null,null,null];
(statearr_31133[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18315__auto__);

(statearr_31133[(1)] = (1));

return statearr_31133;
});
var figwheel$client$heads_up_plugin_$_state_machine__18315__auto____1 = (function (state_31120){
while(true){
var ret_value__18316__auto__ = (function (){try{while(true){
var result__18317__auto__ = switch__18314__auto__.call(null,state_31120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18317__auto__;
}
break;
}
}catch (e31134){if((e31134 instanceof Object)){
var ex__18318__auto__ = e31134;
var statearr_31135_31144 = state_31120;
(statearr_31135_31144[(5)] = ex__18318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31145 = state_31120;
state_31120 = G__31145;
continue;
} else {
return ret_value__18316__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18315__auto__ = function(state_31120){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18315__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18315__auto____1.call(this,state_31120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18315__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18315__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18315__auto__;
})()
;})(switch__18314__auto__,c__18370__auto___31137,ch))
})();
var state__18372__auto__ = (function (){var statearr_31136 = f__18371__auto__.call(null);
(statearr_31136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18370__auto___31137);

return statearr_31136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18372__auto__);
});})(c__18370__auto___31137,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18370__auto__){
return (function (){
var f__18371__auto__ = (function (){var switch__18314__auto__ = ((function (c__18370__auto__){
return (function (state_31166){
var state_val_31167 = (state_31166[(1)]);
if((state_val_31167 === (2))){
var inst_31163 = (state_31166[(2)]);
var inst_31164 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31166__$1 = (function (){var statearr_31168 = state_31166;
(statearr_31168[(7)] = inst_31163);

return statearr_31168;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31166__$1,inst_31164);
} else {
if((state_val_31167 === (1))){
var inst_31161 = cljs.core.async.timeout.call(null,(3000));
var state_31166__$1 = state_31166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31166__$1,(2),inst_31161);
} else {
return null;
}
}
});})(c__18370__auto__))
;
return ((function (switch__18314__auto__,c__18370__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18315__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18315__auto____0 = (function (){
var statearr_31172 = [null,null,null,null,null,null,null,null];
(statearr_31172[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18315__auto__);

(statearr_31172[(1)] = (1));

return statearr_31172;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18315__auto____1 = (function (state_31166){
while(true){
var ret_value__18316__auto__ = (function (){try{while(true){
var result__18317__auto__ = switch__18314__auto__.call(null,state_31166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18317__auto__;
}
break;
}
}catch (e31173){if((e31173 instanceof Object)){
var ex__18318__auto__ = e31173;
var statearr_31174_31176 = state_31166;
(statearr_31174_31176[(5)] = ex__18318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31177 = state_31166;
state_31166 = G__31177;
continue;
} else {
return ret_value__18316__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18315__auto__ = function(state_31166){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18315__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18315__auto____1.call(this,state_31166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18315__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18315__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18315__auto__;
})()
;})(switch__18314__auto__,c__18370__auto__))
})();
var state__18372__auto__ = (function (){var statearr_31175 = f__18371__auto__.call(null);
(statearr_31175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18370__auto__);

return statearr_31175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18372__auto__);
});})(c__18370__auto__))
);

return c__18370__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__16177__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__16177__auto__)){
return ("CustomEvent" in window);
} else {
return and__16177__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj31181 = {"detail":url};
return obj31181;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31182){
var map__31188 = p__31182;
var map__31188__$1 = ((cljs.core.seq_QMARK_.call(null,map__31188))?cljs.core.apply.call(null,cljs.core.hash_map,map__31188):map__31188);
var ed = map__31188__$1;
var exception_data = cljs.core.get.call(null,map__31188__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__31188__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31189_31193 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31190_31194 = null;
var count__31191_31195 = (0);
var i__31192_31196 = (0);
while(true){
if((i__31192_31196 < count__31191_31195)){
var msg_31197 = cljs.core._nth.call(null,chunk__31190_31194,i__31192_31196);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31197);

var G__31198 = seq__31189_31193;
var G__31199 = chunk__31190_31194;
var G__31200 = count__31191_31195;
var G__31201 = (i__31192_31196 + (1));
seq__31189_31193 = G__31198;
chunk__31190_31194 = G__31199;
count__31191_31195 = G__31200;
i__31192_31196 = G__31201;
continue;
} else {
var temp__4126__auto___31202 = cljs.core.seq.call(null,seq__31189_31193);
if(temp__4126__auto___31202){
var seq__31189_31203__$1 = temp__4126__auto___31202;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31189_31203__$1)){
var c__16976__auto___31204 = cljs.core.chunk_first.call(null,seq__31189_31203__$1);
var G__31205 = cljs.core.chunk_rest.call(null,seq__31189_31203__$1);
var G__31206 = c__16976__auto___31204;
var G__31207 = cljs.core.count.call(null,c__16976__auto___31204);
var G__31208 = (0);
seq__31189_31193 = G__31205;
chunk__31190_31194 = G__31206;
count__31191_31195 = G__31207;
i__31192_31196 = G__31208;
continue;
} else {
var msg_31209 = cljs.core.first.call(null,seq__31189_31203__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31209);

var G__31210 = cljs.core.next.call(null,seq__31189_31203__$1);
var G__31211 = null;
var G__31212 = (0);
var G__31213 = (0);
seq__31189_31193 = G__31210;
chunk__31190_31194 = G__31211;
count__31191_31195 = G__31212;
i__31192_31196 = G__31213;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31214){
var map__31216 = p__31214;
var map__31216__$1 = ((cljs.core.seq_QMARK_.call(null,map__31216))?cljs.core.apply.call(null,cljs.core.hash_map,map__31216):map__31216);
var w = map__31216__$1;
var message = cljs.core.get.call(null,map__31216__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16177__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16177__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16177__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31223 = cljs.core.seq.call(null,plugins);
var chunk__31224 = null;
var count__31225 = (0);
var i__31226 = (0);
while(true){
if((i__31226 < count__31225)){
var vec__31227 = cljs.core._nth.call(null,chunk__31224,i__31226);
var k = cljs.core.nth.call(null,vec__31227,(0),null);
var plugin = cljs.core.nth.call(null,vec__31227,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31229 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31223,chunk__31224,count__31225,i__31226,pl_31229,vec__31227,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31229.call(null,msg_hist);
});})(seq__31223,chunk__31224,count__31225,i__31226,pl_31229,vec__31227,k,plugin))
);
} else {
}

var G__31230 = seq__31223;
var G__31231 = chunk__31224;
var G__31232 = count__31225;
var G__31233 = (i__31226 + (1));
seq__31223 = G__31230;
chunk__31224 = G__31231;
count__31225 = G__31232;
i__31226 = G__31233;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__31223);
if(temp__4126__auto__){
var seq__31223__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31223__$1)){
var c__16976__auto__ = cljs.core.chunk_first.call(null,seq__31223__$1);
var G__31234 = cljs.core.chunk_rest.call(null,seq__31223__$1);
var G__31235 = c__16976__auto__;
var G__31236 = cljs.core.count.call(null,c__16976__auto__);
var G__31237 = (0);
seq__31223 = G__31234;
chunk__31224 = G__31235;
count__31225 = G__31236;
i__31226 = G__31237;
continue;
} else {
var vec__31228 = cljs.core.first.call(null,seq__31223__$1);
var k = cljs.core.nth.call(null,vec__31228,(0),null);
var plugin = cljs.core.nth.call(null,vec__31228,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31238 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31223,chunk__31224,count__31225,i__31226,pl_31238,vec__31228,k,plugin,seq__31223__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31238.call(null,msg_hist);
});})(seq__31223,chunk__31224,count__31225,i__31226,pl_31238,vec__31228,k,plugin,seq__31223__$1,temp__4126__auto__))
);
} else {
}

var G__31239 = cljs.core.next.call(null,seq__31223__$1);
var G__31240 = null;
var G__31241 = (0);
var G__31242 = (0);
seq__31223 = G__31239;
chunk__31224 = G__31240;
count__31225 = G__31241;
i__31226 = G__31242;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var figwheel$client$start = null;
var figwheel$client$start__0 = (function (){
return figwheel$client$start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var figwheel$client$start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});
figwheel$client$start = function(opts){
switch(arguments.length){
case 0:
return figwheel$client$start__0.call(this);
case 1:
return figwheel$client$start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$start.cljs$core$IFn$_invoke$arity$0 = figwheel$client$start__0;
figwheel$client$start.cljs$core$IFn$_invoke$arity$1 = figwheel$client$start__1;
return figwheel$client$start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
 * @param {...*} var_args
 */
figwheel.client.watch_and_reload = (function() { 
var figwheel$client$watch_and_reload__delegate = function (p__31243){
var map__31245 = p__31243;
var map__31245__$1 = ((cljs.core.seq_QMARK_.call(null,map__31245))?cljs.core.apply.call(null,cljs.core.hash_map,map__31245):map__31245);
var opts = map__31245__$1;
return figwheel.client.start.call(null,opts);
};
var figwheel$client$watch_and_reload = function (var_args){
var p__31243 = null;
if (arguments.length > 0) {
var G__31246__i = 0, G__31246__a = new Array(arguments.length -  0);
while (G__31246__i < G__31246__a.length) {G__31246__a[G__31246__i] = arguments[G__31246__i + 0]; ++G__31246__i;}
  p__31243 = new cljs.core.IndexedSeq(G__31246__a,0);
} 
return figwheel$client$watch_and_reload__delegate.call(this,p__31243);};
figwheel$client$watch_and_reload.cljs$lang$maxFixedArity = 0;
figwheel$client$watch_and_reload.cljs$lang$applyTo = (function (arglist__31247){
var p__31243 = cljs.core.seq(arglist__31247);
return figwheel$client$watch_and_reload__delegate(p__31243);
});
figwheel$client$watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = figwheel$client$watch_and_reload__delegate;
return figwheel$client$watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map