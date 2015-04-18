// Compiled by ClojureScript 0.0-3058 {}
goog.provide('russellfail.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('goog.events');
re_frame.core.register_handler.call(null,new cljs.core.Keyword("window-area","update","window-area/update",-810914670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__26892){
var vec__26893 = p__26892;
var height = cljs.core.nth.call(null,vec__26893,(0),null);
var width = cljs.core.nth.call(null,vec__26893,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"window-height","window-height",368005077),height,new cljs.core.Keyword(null,"window-width","window-width",2057825599),width);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"block-size","block-size",-1062272384),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return (new cljs.core.Keyword(null,"window-width","window-width",2057825599).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)) / Math.ceil.call(null,(new cljs.core.Keyword(null,"window-width","window-width",2057825599).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)) / (100))));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"window-height","window-height",368005077),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"window-height","window-height",368005077).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"window-width","window-width",2057825599),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"window-width","window-width",2057825599).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"window-area","window-area",-1102693693),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return (new cljs.core.Keyword(null,"window-height","window-height",368005077).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)) * new cljs.core.Keyword(null,"window-width","window-width",2057825599).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)));
}));
}));
russellfail.core.hex_digits = cljs.core.concat.call(null,cljs.core.range.call(null,("0" | (0)),(("9" | (0)) + (1))),cljs.core.range.call(null,("a" | (0)),(("f" | (0)) + (1))));
russellfail.core.rand_hex = (function russellfail$core$rand_hex(){
return cljs.core.apply.call(null,cljs.core.str,"#",(function (){var iter__16945__auto__ = (function russellfail$core$rand_hex_$_iter__26898(s__26899){
return (new cljs.core.LazySeq(null,(function (){
var s__26899__$1 = s__26899;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26899__$1);
if(temp__4126__auto__){
var s__26899__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26899__$2)){
var c__16943__auto__ = cljs.core.chunk_first.call(null,s__26899__$2);
var size__16944__auto__ = cljs.core.count.call(null,c__16943__auto__);
var b__26901 = cljs.core.chunk_buffer.call(null,size__16944__auto__);
if((function (){var i__26900 = (0);
while(true){
if((i__26900 < size__16944__auto__)){
var _ = cljs.core._nth.call(null,c__16943__auto__,i__26900);
cljs.core.chunk_append.call(null,b__26901,cljs.core.rand_nth.call(null,russellfail.core.hex_digits));

var G__26902 = (i__26900 + (1));
i__26900 = G__26902;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26901),russellfail$core$rand_hex_$_iter__26898.call(null,cljs.core.chunk_rest.call(null,s__26899__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26901),null);
}
} else {
var _ = cljs.core.first.call(null,s__26899__$2);
return cljs.core.cons.call(null,cljs.core.rand_nth.call(null,russellfail.core.hex_digits),russellfail$core$rand_hex_$_iter__26898.call(null,cljs.core.rest.call(null,s__26899__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16945__auto__.call(null,cljs.core.range.call(null,(6)));
})());
});
russellfail.core.start_random_timer = (function russellfail$core$start_random_timer(timeout,handler){
return cljs.core.reset_BANG_.call(null,timeout,setTimeout((function (){
handler.call(null);

return russellfail$core$start_random_timer.call(null,timeout,handler);
}),cljs.core.rand_int.call(null,(50000))));
});
russellfail.core.div = (function russellfail$core$div(){
var size = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block-size","block-size",-1062272384)], null));
var color = reagent.core.atom.call(null,"#fff");
var change_color = ((function (size,color){
return (function (){
return cljs.core.reset_BANG_.call(null,color,russellfail.core.rand_hex.call(null));
});})(size,color))
;
var timeout = cljs.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (size,color,change_color,timeout){
return (function (p1__26903_SHARP_){
goog.events.listen(reagent.core.dom_node.call(null,p1__26903_SHARP_),"mouseenter",change_color);

return russellfail.core.start_random_timer.call(null,timeout,change_color);
});})(size,color,change_color,timeout))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (size,color,change_color,timeout){
return (function (p1__26904_SHARP_){
goog.events.unlisten(reagent.core.dom_node.call(null,p1__26904_SHARP_),"mouseenter",change_color);

return clearTimeout(cljs.core.deref.call(null,timeout));
});})(size,color,change_color,timeout))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (size,color,change_color,timeout){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block","div.block",1082647483),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(cljs.core.deref.call(null,size)),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str(cljs.core.deref.call(null,size)),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs.core.deref.call(null,color)], null)], null)], null);
});})(size,color,change_color,timeout))
], null));
});
russellfail.core.page = (function russellfail$core$page(){
var area = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-area","window-area",-1102693693)], null));
var height = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-height","window-height",368005077)], null));
var width = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-width","window-width",2057825599)], null));
var size = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block-size","block-size",-1062272384)], null));
return ((function (area,height,width,size){
return (function (){
var area__$1 = cljs.core.deref.call(null,area);
var height__$1 = cljs.core.deref.call(null,height);
var width__$1 = cljs.core.deref.call(null,width);
var size__$1 = cljs.core.deref.call(null,size);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#russellfail","div#russellfail",2129877414),(function (){var iter__16945__auto__ = ((function (area__$1,height__$1,width__$1,size__$1,area,height,width,size){
return (function russellfail$core$page_$_iter__26925(s__26926){
return (new cljs.core.LazySeq(null,((function (area__$1,height__$1,width__$1,size__$1,area,height,width,size){
return (function (){
var s__26926__$1 = s__26926;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26926__$1);
if(temp__4126__auto__){
var s__26926__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26926__$2)){
var c__16943__auto__ = cljs.core.chunk_first.call(null,s__26926__$2);
var size__16944__auto__ = cljs.core.count.call(null,c__16943__auto__);
var b__26928 = cljs.core.chunk_buffer.call(null,size__16944__auto__);
if((function (){var i__26927 = (0);
while(true){
if((i__26927 < size__16944__auto__)){
var y = cljs.core._nth.call(null,c__16943__auto__,i__26927);
cljs.core.chunk_append.call(null,b__26928,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__16945__auto__ = ((function (i__26927,y,c__16943__auto__,size__16944__auto__,b__26928,s__26926__$2,temp__4126__auto__,area__$1,height__$1,width__$1,size__$1,area,height,width,size){
return (function russellfail$core$page_$_iter__26925_$_iter__26937(s__26938){
return (new cljs.core.LazySeq(null,((function (i__26927,y,c__16943__auto__,size__16944__auto__,b__26928,s__26926__$2,temp__4126__auto__,area__$1,height__$1,width__$1,size__$1,area,height,width,size){
return (function (){
var s__26938__$1 = s__26938;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__26938__$1);
if(temp__4126__auto____$1){
var s__26938__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26938__$2)){
var c__16943__auto____$1 = cljs.core.chunk_first.call(null,s__26938__$2);
var size__16944__auto____$1 = cljs.core.count.call(null,c__16943__auto____$1);
var b__26940 = cljs.core.chunk_buffer.call(null,size__16944__auto____$1);
if((function (){var i__26939 = (0);
while(true){
if((i__26939 < size__16944__auto____$1)){
var x = cljs.core._nth.call(null,c__16943__auto____$1,i__26939);
cljs.core.chunk_append.call(null,b__26940,cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [russellfail.core.div], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)));

var G__26945 = (i__26939 + (1));
i__26939 = G__26945;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26940),russellfail$core$page_$_iter__26925_$_iter__26937.call(null,cljs.core.chunk_rest.call(null,s__26938__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26940),null);
}
} else {
var x = cljs.core.first.call(null,s__26938__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [russellfail.core.div], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)),russellfail$core$page_$_iter__26925_$_iter__26937.call(null,cljs.core.rest.call(null,s__26938__$2)));
}
} else {
return null;
}
break;
}
});})(i__26927,y,c__16943__auto__,size__16944__auto__,b__26928,s__26926__$2,temp__4126__auto__,area__$1,height__$1,width__$1,size__$1,area,height,width,size))
,null,null));
});})(i__26927,y,c__16943__auto__,size__16944__auto__,b__26928,s__26926__$2,temp__4126__auto__,area__$1,height__$1,width__$1,size__$1,area,height,width,size))
;
return iter__16945__auto__.call(null,cljs.core.range.call(null,(width__$1 / size__$1)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)));

var G__26946 = (i__26927 + (1));
i__26927 = G__26946;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26928),russellfail$core$page_$_iter__26925.call(null,cljs.core.chunk_rest.call(null,s__26926__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26928),null);
}
} else {
var y = cljs.core.first.call(null,s__26926__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__16945__auto__ = ((function (y,s__26926__$2,temp__4126__auto__,area__$1,height__$1,width__$1,size__$1,area,height,width,size){
return (function russellfail$core$page_$_iter__26925_$_iter__26941(s__26942){
return (new cljs.core.LazySeq(null,((function (y,s__26926__$2,temp__4126__auto__,area__$1,height__$1,width__$1,size__$1,area,height,width,size){
return (function (){
var s__26942__$1 = s__26942;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__26942__$1);
if(temp__4126__auto____$1){
var s__26942__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26942__$2)){
var c__16943__auto__ = cljs.core.chunk_first.call(null,s__26942__$2);
var size__16944__auto__ = cljs.core.count.call(null,c__16943__auto__);
var b__26944 = cljs.core.chunk_buffer.call(null,size__16944__auto__);
if((function (){var i__26943 = (0);
while(true){
if((i__26943 < size__16944__auto__)){
var x = cljs.core._nth.call(null,c__16943__auto__,i__26943);
cljs.core.chunk_append.call(null,b__26944,cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [russellfail.core.div], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)));

var G__26947 = (i__26943 + (1));
i__26943 = G__26947;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26944),russellfail$core$page_$_iter__26925_$_iter__26941.call(null,cljs.core.chunk_rest.call(null,s__26942__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26944),null);
}
} else {
var x = cljs.core.first.call(null,s__26942__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [russellfail.core.div], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)),russellfail$core$page_$_iter__26925_$_iter__26941.call(null,cljs.core.rest.call(null,s__26942__$2)));
}
} else {
return null;
}
break;
}
});})(y,s__26926__$2,temp__4126__auto__,area__$1,height__$1,width__$1,size__$1,area,height,width,size))
,null,null));
});})(y,s__26926__$2,temp__4126__auto__,area__$1,height__$1,width__$1,size__$1,area,height,width,size))
;
return iter__16945__auto__.call(null,cljs.core.range.call(null,(width__$1 / size__$1)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)),russellfail$core$page_$_iter__26925.call(null,cljs.core.rest.call(null,s__26926__$2)));
}
} else {
return null;
}
break;
}
});})(area__$1,height__$1,width__$1,size__$1,area,height,width,size))
,null,null));
});})(area__$1,height__$1,width__$1,size__$1,area,height,width,size))
;
return iter__16945__auto__.call(null,cljs.core.range.call(null,(height__$1 / size__$1)));
})()], null);
});
;})(area,height,width,size))
});
russellfail.core.main = (function russellfail$core$main(){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("window-area","update","window-area/update",-810914670),window.innerHeight,window.innerWidth], null));

window.onresize = (function (p1__26948_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("window-area","update","window-area/update",-810914670),p1__26948_SHARP_.target.innerHeight,p1__26948_SHARP_.target.innerWidth], null));
});

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [russellfail.core.page], null),document.getElementById("app"));
});
goog.exportSymbol('russellfail.core.main', russellfail.core.main);

//# sourceMappingURL=core.js.map