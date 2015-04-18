// Compiled by ClojureScript 0.0-3058 {}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.utils');
goog.require('re_frame.handlers');
goog.require('reagent.core');
re_frame.router.event_chan = cljs.core.async.chan.call(null);
var c__18370__auto___27383 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18370__auto___27383){
return (function (){
var f__18371__auto__ = (function (){var switch__18314__auto__ = ((function (c__18370__auto___27383){
return (function (state_27365){
var state_val_27366 = (state_27365[(1)]);
if((state_val_27366 === (9))){
var inst_27357 = (state_27365[(2)]);
var state_27365__$1 = state_27365;
var statearr_27367_27384 = state_27365__$1;
(statearr_27367_27384[(2)] = inst_27357);

(statearr_27367_27384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27366 === (8))){
var inst_27353 = (state_27365[(2)]);
var state_27365__$1 = state_27365;
var statearr_27368_27385 = state_27365__$1;
(statearr_27368_27385[(2)] = inst_27353);

(statearr_27368_27385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27366 === (7))){
var inst_27346 = (state_27365[(7)]);
var inst_27359 = (state_27365[(2)]);
var inst_27360 = re_frame.handlers.handle.call(null,inst_27346);
var state_27365__$1 = (function (){var statearr_27369 = state_27365;
(statearr_27369[(8)] = inst_27359);

(statearr_27369[(9)] = inst_27360);

return statearr_27369;
})();
var statearr_27370_27386 = state_27365__$1;
(statearr_27370_27386[(2)] = null);

(statearr_27370_27386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27366 === (6))){
var inst_27355 = cljs.core.async.timeout.call(null,(0));
var state_27365__$1 = state_27365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27365__$1,(9),inst_27355);
} else {
if((state_val_27366 === (5))){
var inst_27350 = reagent.core.flush.call(null);
var inst_27351 = cljs.core.async.timeout.call(null,(20));
var state_27365__$1 = (function (){var statearr_27371 = state_27365;
(statearr_27371[(10)] = inst_27350);

return statearr_27371;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27365__$1,(8),inst_27351);
} else {
if((state_val_27366 === (4))){
var inst_27346 = (state_27365[(7)]);
var inst_27346__$1 = (state_27365[(2)]);
var inst_27347 = cljs.core.meta.call(null,inst_27346__$1);
var inst_27348 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_27347);
var state_27365__$1 = (function (){var statearr_27372 = state_27365;
(statearr_27372[(7)] = inst_27346__$1);

return statearr_27372;
})();
if(cljs.core.truth_(inst_27348)){
var statearr_27373_27387 = state_27365__$1;
(statearr_27373_27387[(1)] = (5));

} else {
var statearr_27374_27388 = state_27365__$1;
(statearr_27374_27388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27366 === (3))){
var inst_27363 = (state_27365[(2)]);
var state_27365__$1 = state_27365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27365__$1,inst_27363);
} else {
if((state_val_27366 === (2))){
var state_27365__$1 = state_27365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27365__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_27366 === (1))){
var state_27365__$1 = state_27365;
var statearr_27375_27389 = state_27365__$1;
(statearr_27375_27389[(2)] = null);

(statearr_27375_27389[(1)] = (2));


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
});})(c__18370__auto___27383))
;
return ((function (switch__18314__auto__,c__18370__auto___27383){
return (function() {
var re_frame$router$state_machine__18315__auto__ = null;
var re_frame$router$state_machine__18315__auto____0 = (function (){
var statearr_27379 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27379[(0)] = re_frame$router$state_machine__18315__auto__);

(statearr_27379[(1)] = (1));

return statearr_27379;
});
var re_frame$router$state_machine__18315__auto____1 = (function (state_27365){
while(true){
var ret_value__18316__auto__ = (function (){try{while(true){
var result__18317__auto__ = switch__18314__auto__.call(null,state_27365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18317__auto__;
}
break;
}
}catch (e27380){if((e27380 instanceof Object)){
var ex__18318__auto__ = e27380;
var statearr_27381_27390 = state_27365;
(statearr_27381_27390[(5)] = ex__18318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27391 = state_27365;
state_27365 = G__27391;
continue;
} else {
return ret_value__18316__auto__;
}
break;
}
});
re_frame$router$state_machine__18315__auto__ = function(state_27365){
switch(arguments.length){
case 0:
return re_frame$router$state_machine__18315__auto____0.call(this);
case 1:
return re_frame$router$state_machine__18315__auto____1.call(this,state_27365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$state_machine__18315__auto____0;
re_frame$router$state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$state_machine__18315__auto____1;
return re_frame$router$state_machine__18315__auto__;
})()
;})(switch__18314__auto__,c__18370__auto___27383))
})();
var state__18372__auto__ = (function (){var statearr_27382 = f__18371__auto__.call(null);
(statearr_27382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18370__auto___27383);

return statearr_27382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18372__auto__);
});})(c__18370__auto___27383))
);

/**
 * Send an event to be processed by the registered handler.
 * 
 * Usage example:
 * (dispatch [:delete-item 42])
 * 
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event_v){
if((event_v == null)){
re_frame.utils.warn.call(null,"re-frame: \"dispatch\" is ignoring a nil event.");
} else {
cljs.core.async.put_BANG_.call(null,re_frame.router.event_chan,event_v);
}

return null;
});
/**
 * Send an event to be processed by the registered handler, but avoid the async-inducing
 * use of core.async/chan.
 * 
 * Usage example:
 * (dispatch-sync [:delete-item 42])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.handlers.handle.call(null,event_v);

return null;
});

//# sourceMappingURL=router.js.map