// Compiled by ClojureScript 0.0-3058 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
 * @param {...*} var_args
 */
figwheel.client.heads_up.node = (function() { 
var figwheel$client$heads_up$node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__31379_31387 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__31380_31388 = null;
var count__31381_31389 = (0);
var i__31382_31390 = (0);
while(true){
if((i__31382_31390 < count__31381_31389)){
var k_31391 = cljs.core._nth.call(null,chunk__31380_31388,i__31382_31390);
e.setAttribute(cljs.core.name.call(null,k_31391),cljs.core.get.call(null,attrs,k_31391));

var G__31392 = seq__31379_31387;
var G__31393 = chunk__31380_31388;
var G__31394 = count__31381_31389;
var G__31395 = (i__31382_31390 + (1));
seq__31379_31387 = G__31392;
chunk__31380_31388 = G__31393;
count__31381_31389 = G__31394;
i__31382_31390 = G__31395;
continue;
} else {
var temp__4126__auto___31396 = cljs.core.seq.call(null,seq__31379_31387);
if(temp__4126__auto___31396){
var seq__31379_31397__$1 = temp__4126__auto___31396;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31379_31397__$1)){
var c__16976__auto___31398 = cljs.core.chunk_first.call(null,seq__31379_31397__$1);
var G__31399 = cljs.core.chunk_rest.call(null,seq__31379_31397__$1);
var G__31400 = c__16976__auto___31398;
var G__31401 = cljs.core.count.call(null,c__16976__auto___31398);
var G__31402 = (0);
seq__31379_31387 = G__31399;
chunk__31380_31388 = G__31400;
count__31381_31389 = G__31401;
i__31382_31390 = G__31402;
continue;
} else {
var k_31403 = cljs.core.first.call(null,seq__31379_31397__$1);
e.setAttribute(cljs.core.name.call(null,k_31403),cljs.core.get.call(null,attrs,k_31403));

var G__31404 = cljs.core.next.call(null,seq__31379_31397__$1);
var G__31405 = null;
var G__31406 = (0);
var G__31407 = (0);
seq__31379_31387 = G__31404;
chunk__31380_31388 = G__31405;
count__31381_31389 = G__31406;
i__31382_31390 = G__31407;
continue;
}
} else {
}
}
break;
}

var seq__31383_31408 = cljs.core.seq.call(null,children);
var chunk__31384_31409 = null;
var count__31385_31410 = (0);
var i__31386_31411 = (0);
while(true){
if((i__31386_31411 < count__31385_31410)){
var ch_31412 = cljs.core._nth.call(null,chunk__31384_31409,i__31386_31411);
e.appendChild(ch_31412);

var G__31413 = seq__31383_31408;
var G__31414 = chunk__31384_31409;
var G__31415 = count__31385_31410;
var G__31416 = (i__31386_31411 + (1));
seq__31383_31408 = G__31413;
chunk__31384_31409 = G__31414;
count__31385_31410 = G__31415;
i__31386_31411 = G__31416;
continue;
} else {
var temp__4126__auto___31417 = cljs.core.seq.call(null,seq__31383_31408);
if(temp__4126__auto___31417){
var seq__31383_31418__$1 = temp__4126__auto___31417;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31383_31418__$1)){
var c__16976__auto___31419 = cljs.core.chunk_first.call(null,seq__31383_31418__$1);
var G__31420 = cljs.core.chunk_rest.call(null,seq__31383_31418__$1);
var G__31421 = c__16976__auto___31419;
var G__31422 = cljs.core.count.call(null,c__16976__auto___31419);
var G__31423 = (0);
seq__31383_31408 = G__31420;
chunk__31384_31409 = G__31421;
count__31385_31410 = G__31422;
i__31386_31411 = G__31423;
continue;
} else {
var ch_31424 = cljs.core.first.call(null,seq__31383_31418__$1);
e.appendChild(ch_31424);

var G__31425 = cljs.core.next.call(null,seq__31383_31418__$1);
var G__31426 = null;
var G__31427 = (0);
var G__31428 = (0);
seq__31383_31408 = G__31425;
chunk__31384_31409 = G__31426;
count__31385_31410 = G__31427;
i__31386_31411 = G__31428;
continue;
}
} else {
}
}
break;
}

return e;
};
var figwheel$client$heads_up$node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__31429__i = 0, G__31429__a = new Array(arguments.length -  2);
while (G__31429__i < G__31429__a.length) {G__31429__a[G__31429__i] = arguments[G__31429__i + 2]; ++G__31429__i;}
  children = new cljs.core.IndexedSeq(G__31429__a,0);
} 
return figwheel$client$heads_up$node__delegate.call(this,t,attrs,children);};
figwheel$client$heads_up$node.cljs$lang$maxFixedArity = 2;
figwheel$client$heads_up$node.cljs$lang$applyTo = (function (arglist__31430){
var t = cljs.core.first(arglist__31430);
arglist__31430 = cljs.core.next(arglist__31430);
var attrs = cljs.core.first(arglist__31430);
var children = cljs.core.rest(arglist__31430);
return figwheel$client$heads_up$node__delegate(t,attrs,children);
});
figwheel$client$heads_up$node.cljs$core$IFn$_invoke$arity$variadic = figwheel$client$heads_up$node__delegate;
return figwheel$client$heads_up$node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17086__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17087__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17088__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17089__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17090__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17086__auto__,prefer_table__17087__auto__,method_cache__17088__auto__,cached_hierarchy__17089__auto__,hierarchy__17090__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17086__auto__,prefer_table__17087__auto__,method_cache__17088__auto__,cached_hierarchy__17089__auto__,hierarchy__17090__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17090__auto__,method_table__17086__auto__,prefer_table__17087__auto__,method_cache__17088__auto__,cached_hierarchy__17089__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_31431 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_31431.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_31431.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_31431.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_31431);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__31432,st_map){
var map__31436 = p__31432;
var map__31436__$1 = ((cljs.core.seq_QMARK_.call(null,map__31436))?cljs.core.apply.call(null,cljs.core.hash_map,map__31436):map__31436);
var container_el = cljs.core.get.call(null,map__31436__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__31436,map__31436__$1,container_el){
return (function (p__31437){
var vec__31438 = p__31437;
var k = cljs.core.nth.call(null,vec__31438,(0),null);
var v = cljs.core.nth.call(null,vec__31438,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__31436,map__31436__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__31439,dom_str){
var map__31441 = p__31439;
var map__31441__$1 = ((cljs.core.seq_QMARK_.call(null,map__31441))?cljs.core.apply.call(null,cljs.core.hash_map,map__31441):map__31441);
var c = map__31441__$1;
var content_area_el = cljs.core.get.call(null,map__31441__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__31442){
var map__31444 = p__31442;
var map__31444__$1 = ((cljs.core.seq_QMARK_.call(null,map__31444))?cljs.core.apply.call(null,cljs.core.hash_map,map__31444):map__31444);
var content_area_el = cljs.core.get.call(null,map__31444__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__18370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18370__auto__){
return (function (){
var f__18371__auto__ = (function (){var switch__18314__auto__ = ((function (c__18370__auto__){
return (function (state_31486){
var state_val_31487 = (state_31486[(1)]);
if((state_val_31487 === (2))){
var inst_31471 = (state_31486[(7)]);
var inst_31480 = (state_31486[(2)]);
var inst_31481 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_31482 = ["auto"];
var inst_31483 = cljs.core.PersistentHashMap.fromArrays(inst_31481,inst_31482);
var inst_31484 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31471,inst_31483);
var state_31486__$1 = (function (){var statearr_31488 = state_31486;
(statearr_31488[(8)] = inst_31480);

return statearr_31488;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31486__$1,inst_31484);
} else {
if((state_val_31487 === (1))){
var inst_31471 = (state_31486[(7)]);
var inst_31471__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_31472 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_31473 = ["10px","10px","100%","68px","1.0"];
var inst_31474 = cljs.core.PersistentHashMap.fromArrays(inst_31472,inst_31473);
var inst_31475 = cljs.core.merge.call(null,inst_31474,style);
var inst_31476 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31471__$1,inst_31475);
var inst_31477 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_31471__$1,msg);
var inst_31478 = cljs.core.async.timeout.call(null,(300));
var state_31486__$1 = (function (){var statearr_31489 = state_31486;
(statearr_31489[(9)] = inst_31476);

(statearr_31489[(10)] = inst_31477);

(statearr_31489[(7)] = inst_31471__$1);

return statearr_31489;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31486__$1,(2),inst_31478);
} else {
return null;
}
}
});})(c__18370__auto__))
;
return ((function (switch__18314__auto__,c__18370__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__18315__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__18315__auto____0 = (function (){
var statearr_31493 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31493[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__18315__auto__);

(statearr_31493[(1)] = (1));

return statearr_31493;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__18315__auto____1 = (function (state_31486){
while(true){
var ret_value__18316__auto__ = (function (){try{while(true){
var result__18317__auto__ = switch__18314__auto__.call(null,state_31486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18317__auto__;
}
break;
}
}catch (e31494){if((e31494 instanceof Object)){
var ex__18318__auto__ = e31494;
var statearr_31495_31497 = state_31486;
(statearr_31495_31497[(5)] = ex__18318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31498 = state_31486;
state_31486 = G__31498;
continue;
} else {
return ret_value__18316__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__18315__auto__ = function(state_31486){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18315__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18315__auto____1.call(this,state_31486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__18315__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__18315__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__18315__auto__;
})()
;})(switch__18314__auto__,c__18370__auto__))
})();
var state__18372__auto__ = (function (){var statearr_31496 = f__18371__auto__.call(null);
(statearr_31496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18370__auto__);

return statearr_31496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18372__auto__);
});})(c__18370__auto__))
);

return c__18370__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__31500 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__31500,(0),null);
var ln = cljs.core.nth.call(null,vec__31500,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages){
var vec__31503 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__31503,(0),null);
var file_line = cljs.core.nth.call(null,vec__31503,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__31503,file_name,file_line){
return (function (p1__31501_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__31501_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__31503,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__31505 = figwheel.client.heads_up.ensure_container.call(null);
var map__31505__$1 = ((cljs.core.seq_QMARK_.call(null,map__31505))?cljs.core.apply.call(null,cljs.core.hash_map,map__31505):map__31505);
var content_area_el = cljs.core.get.call(null,map__31505__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__18370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18370__auto__){
return (function (){
var f__18371__auto__ = (function (){var switch__18314__auto__ = ((function (c__18370__auto__){
return (function (state_31552){
var state_val_31553 = (state_31552[(1)]);
if((state_val_31553 === (3))){
var inst_31535 = (state_31552[(7)]);
var inst_31549 = (state_31552[(2)]);
var inst_31550 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_31535,"");
var state_31552__$1 = (function (){var statearr_31554 = state_31552;
(statearr_31554[(8)] = inst_31549);

return statearr_31554;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31552__$1,inst_31550);
} else {
if((state_val_31553 === (2))){
var inst_31535 = (state_31552[(7)]);
var inst_31542 = (state_31552[(2)]);
var inst_31543 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_31544 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_31545 = cljs.core.PersistentHashMap.fromArrays(inst_31543,inst_31544);
var inst_31546 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31535,inst_31545);
var inst_31547 = cljs.core.async.timeout.call(null,(200));
var state_31552__$1 = (function (){var statearr_31555 = state_31552;
(statearr_31555[(9)] = inst_31546);

(statearr_31555[(10)] = inst_31542);

return statearr_31555;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31552__$1,(3),inst_31547);
} else {
if((state_val_31553 === (1))){
var inst_31535 = (state_31552[(7)]);
var inst_31535__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_31536 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_31537 = ["0.0"];
var inst_31538 = cljs.core.PersistentHashMap.fromArrays(inst_31536,inst_31537);
var inst_31539 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31535__$1,inst_31538);
var inst_31540 = cljs.core.async.timeout.call(null,(300));
var state_31552__$1 = (function (){var statearr_31556 = state_31552;
(statearr_31556[(7)] = inst_31535__$1);

(statearr_31556[(11)] = inst_31539);

return statearr_31556;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31552__$1,(2),inst_31540);
} else {
return null;
}
}
}
});})(c__18370__auto__))
;
return ((function (switch__18314__auto__,c__18370__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__18315__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__18315__auto____0 = (function (){
var statearr_31560 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31560[(0)] = figwheel$client$heads_up$clear_$_state_machine__18315__auto__);

(statearr_31560[(1)] = (1));

return statearr_31560;
});
var figwheel$client$heads_up$clear_$_state_machine__18315__auto____1 = (function (state_31552){
while(true){
var ret_value__18316__auto__ = (function (){try{while(true){
var result__18317__auto__ = switch__18314__auto__.call(null,state_31552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18317__auto__;
}
break;
}
}catch (e31561){if((e31561 instanceof Object)){
var ex__18318__auto__ = e31561;
var statearr_31562_31564 = state_31552;
(statearr_31562_31564[(5)] = ex__18318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31565 = state_31552;
state_31552 = G__31565;
continue;
} else {
return ret_value__18316__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__18315__auto__ = function(state_31552){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__18315__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__18315__auto____1.call(this,state_31552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__18315__auto____0;
figwheel$client$heads_up$clear_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__18315__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__18315__auto__;
})()
;})(switch__18314__auto__,c__18370__auto__))
})();
var state__18372__auto__ = (function (){var statearr_31563 = f__18371__auto__.call(null);
(statearr_31563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18370__auto__);

return statearr_31563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18372__auto__);
});})(c__18370__auto__))
);

return c__18370__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__18370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18370__auto__){
return (function (){
var f__18371__auto__ = (function (){var switch__18314__auto__ = ((function (c__18370__auto__){
return (function (state_31597){
var state_val_31598 = (state_31597[(1)]);
if((state_val_31598 === (4))){
var inst_31595 = (state_31597[(2)]);
var state_31597__$1 = state_31597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31597__$1,inst_31595);
} else {
if((state_val_31598 === (3))){
var inst_31592 = (state_31597[(2)]);
var inst_31593 = figwheel.client.heads_up.clear.call(null);
var state_31597__$1 = (function (){var statearr_31599 = state_31597;
(statearr_31599[(7)] = inst_31592);

return statearr_31599;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31597__$1,(4),inst_31593);
} else {
if((state_val_31598 === (2))){
var inst_31589 = (state_31597[(2)]);
var inst_31590 = cljs.core.async.timeout.call(null,(400));
var state_31597__$1 = (function (){var statearr_31600 = state_31597;
(statearr_31600[(8)] = inst_31589);

return statearr_31600;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31597__$1,(3),inst_31590);
} else {
if((state_val_31598 === (1))){
var inst_31587 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_31597__$1 = state_31597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31597__$1,(2),inst_31587);
} else {
return null;
}
}
}
}
});})(c__18370__auto__))
;
return ((function (switch__18314__auto__,c__18370__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__18315__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__18315__auto____0 = (function (){
var statearr_31604 = [null,null,null,null,null,null,null,null,null];
(statearr_31604[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__18315__auto__);

(statearr_31604[(1)] = (1));

return statearr_31604;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__18315__auto____1 = (function (state_31597){
while(true){
var ret_value__18316__auto__ = (function (){try{while(true){
var result__18317__auto__ = switch__18314__auto__.call(null,state_31597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18317__auto__;
}
break;
}
}catch (e31605){if((e31605 instanceof Object)){
var ex__18318__auto__ = e31605;
var statearr_31606_31608 = state_31597;
(statearr_31606_31608[(5)] = ex__18318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31609 = state_31597;
state_31597 = G__31609;
continue;
} else {
return ret_value__18316__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__18315__auto__ = function(state_31597){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18315__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18315__auto____1.call(this,state_31597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__18315__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__18315__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__18315__auto__;
})()
;})(switch__18314__auto__,c__18370__auto__))
})();
var state__18372__auto__ = (function (){var statearr_31607 = f__18371__auto__.call(null);
(statearr_31607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18370__auto__);

return statearr_31607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18372__auto__);
});})(c__18370__auto__))
);

return c__18370__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map