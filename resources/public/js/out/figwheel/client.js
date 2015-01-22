// Compiled by ClojureScript 0.0-2371
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__22780,args){var map__22782 = p__22780;var map__22782__$1 = ((cljs.core.seq_QMARK_.call(null,map__22782))?cljs.core.apply.call(null,cljs.core.hash_map,map__22782):map__22782);var debug = cljs.core.get.call(null,map__22782__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__22780,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__22780,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__22783){
var p__22780 = cljs.core.first(arglist__22783);
var args = cljs.core.rest(arglist__22783);
return log__delegate(p__22780,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__22784){var map__22786 = p__22784;var map__22786__$1 = ((cljs.core.seq_QMARK_.call(null,map__22786))?cljs.core.apply.call(null,cljs.core.hash_map,map__22786):map__22786);var websocket_url = cljs.core.get.call(null,map__22786__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__22787,callback){var map__22789 = p__22787;var map__22789__$1 = ((cljs.core.seq_QMARK_.call(null,map__22789))?cljs.core.apply.call(null,cljs.core.hash_map,map__22789):map__22789);var msg = map__22789__$1;var dependency_file = cljs.core.get.call(null,map__22789__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__22789__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__22789__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__15826__auto__ = dependency_file;if(cljs.core.truth_(or__15826__auto__))
{return or__15826__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__22789,map__22789__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__22789,map__22789__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__22790,p__22791){var map__22794 = p__22790;var map__22794__$1 = ((cljs.core.seq_QMARK_.call(null,map__22794))?cljs.core.apply.call(null,cljs.core.hash_map,map__22794):map__22794);var opts = map__22794__$1;var url_rewriter = cljs.core.get.call(null,map__22794__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__22795 = p__22791;var map__22795__$1 = ((cljs.core.seq_QMARK_.call(null,map__22795))?cljs.core.apply.call(null,cljs.core.hash_map,map__22795):map__22795);var d = map__22795__$1;var file = cljs.core.get.call(null,map__22795__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__22796,p__22797){var map__22839 = p__22796;var map__22839__$1 = ((cljs.core.seq_QMARK_.call(null,map__22839))?cljs.core.apply.call(null,cljs.core.hash_map,map__22839):map__22839);var opts = map__22839__$1;var on_jsload = cljs.core.get.call(null,map__22839__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__22839__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__22840 = p__22797;var map__22840__$1 = ((cljs.core.seq_QMARK_.call(null,map__22840))?cljs.core.apply.call(null,cljs.core.hash_map,map__22840):map__22840);var files = cljs.core.get.call(null,map__22840__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__18391__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18391__auto__,map__22839,map__22839__$1,opts,on_jsload,before_jsload,map__22840,map__22840__$1,files){
return (function (){var f__18392__auto__ = (function (){var switch__18335__auto__ = ((function (c__18391__auto__,map__22839,map__22839__$1,opts,on_jsload,before_jsload,map__22840,map__22840__$1,files){
return (function (state_22863){var state_val_22864 = (state_22863[(1)]);if((state_val_22864 === (6)))
{var inst_22845 = (state_22863[(7)]);var inst_22854 = (state_22863[(2)]);var inst_22855 = cljs.core.PersistentVector.EMPTY_NODE;var inst_22856 = [inst_22845];var inst_22857 = (new cljs.core.PersistentVector(null,1,(5),inst_22855,inst_22856,null));var inst_22858 = cljs.core.apply.call(null,on_jsload,inst_22857);var state_22863__$1 = (function (){var statearr_22865 = state_22863;(statearr_22865[(8)] = inst_22854);
return statearr_22865;
})();var statearr_22866_22880 = state_22863__$1;(statearr_22866_22880[(2)] = inst_22858);
(statearr_22866_22880[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22864 === (5)))
{var inst_22861 = (state_22863[(2)]);var state_22863__$1 = state_22863;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22863__$1,inst_22861);
} else
{if((state_val_22864 === (4)))
{var state_22863__$1 = state_22863;var statearr_22867_22881 = state_22863__$1;(statearr_22867_22881[(2)] = null);
(statearr_22867_22881[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22864 === (3)))
{var inst_22845 = (state_22863[(7)]);var inst_22848 = console.debug("Figwheel: loaded these files");var inst_22849 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22845);var inst_22850 = cljs.core.prn_str.call(null,inst_22849);var inst_22851 = console.log(inst_22850);var inst_22852 = cljs.core.async.timeout.call(null,(10));var state_22863__$1 = (function (){var statearr_22868 = state_22863;(statearr_22868[(9)] = inst_22851);
(statearr_22868[(10)] = inst_22848);
return statearr_22868;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22863__$1,(6),inst_22852);
} else
{if((state_val_22864 === (2)))
{var inst_22845 = (state_22863[(7)]);var inst_22845__$1 = (state_22863[(2)]);var inst_22846 = cljs.core.not_empty.call(null,inst_22845__$1);var state_22863__$1 = (function (){var statearr_22869 = state_22863;(statearr_22869[(7)] = inst_22845__$1);
return statearr_22869;
})();if(cljs.core.truth_(inst_22846))
{var statearr_22870_22882 = state_22863__$1;(statearr_22870_22882[(1)] = (3));
} else
{var statearr_22871_22883 = state_22863__$1;(statearr_22871_22883[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22864 === (1)))
{var inst_22841 = before_jsload.call(null,files);var inst_22842 = figwheel.client.add_request_urls.call(null,opts,files);var inst_22843 = figwheel.client.load_all_js_files.call(null,inst_22842);var state_22863__$1 = (function (){var statearr_22872 = state_22863;(statearr_22872[(11)] = inst_22841);
return statearr_22872;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22863__$1,(2),inst_22843);
} else
{return null;
}
}
}
}
}
}
});})(c__18391__auto__,map__22839,map__22839__$1,opts,on_jsload,before_jsload,map__22840,map__22840__$1,files))
;return ((function (switch__18335__auto__,c__18391__auto__,map__22839,map__22839__$1,opts,on_jsload,before_jsload,map__22840,map__22840__$1,files){
return (function() {
var state_machine__18336__auto__ = null;
var state_machine__18336__auto____0 = (function (){var statearr_22876 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22876[(0)] = state_machine__18336__auto__);
(statearr_22876[(1)] = (1));
return statearr_22876;
});
var state_machine__18336__auto____1 = (function (state_22863){while(true){
var ret_value__18337__auto__ = (function (){try{while(true){
var result__18338__auto__ = switch__18335__auto__.call(null,state_22863);if(cljs.core.keyword_identical_QMARK_.call(null,result__18338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18338__auto__;
}
break;
}
}catch (e22877){if((e22877 instanceof Object))
{var ex__18339__auto__ = e22877;var statearr_22878_22884 = state_22863;(statearr_22878_22884[(5)] = ex__18339__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22863);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22877;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22885 = state_22863;
state_22863 = G__22885;
continue;
}
} else
{return ret_value__18337__auto__;
}
break;
}
});
state_machine__18336__auto__ = function(state_22863){
switch(arguments.length){
case 0:
return state_machine__18336__auto____0.call(this);
case 1:
return state_machine__18336__auto____1.call(this,state_22863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18336__auto____0;
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18336__auto____1;
return state_machine__18336__auto__;
})()
;})(switch__18335__auto__,c__18391__auto__,map__22839,map__22839__$1,opts,on_jsload,before_jsload,map__22840,map__22840__$1,files))
})();var state__18393__auto__ = (function (){var statearr_22879 = f__18392__auto__.call(null);(statearr_22879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18391__auto__);
return statearr_22879;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18393__auto__);
});})(c__18391__auto__,map__22839,map__22839__$1,opts,on_jsload,before_jsload,map__22840,map__22840__$1,files))
);
return c__18391__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__22886,link_href){var map__22888 = p__22886;var map__22888__$1 = ((cljs.core.seq_QMARK_.call(null,map__22888))?cljs.core.apply.call(null,cljs.core.hash_map,map__22888):map__22888);var request_url = cljs.core.get.call(null,map__22888__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__22888__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__18391__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18391__auto__,parent){
return (function (){var f__18392__auto__ = (function (){var switch__18335__auto__ = ((function (c__18391__auto__,parent){
return (function (state_22909){var state_val_22910 = (state_22909[(1)]);if((state_val_22910 === (2)))
{var inst_22906 = (state_22909[(2)]);var inst_22907 = parent.removeChild(orig_link);var state_22909__$1 = (function (){var statearr_22911 = state_22909;(statearr_22911[(7)] = inst_22906);
return statearr_22911;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22909__$1,inst_22907);
} else
{if((state_val_22910 === (1)))
{var inst_22904 = cljs.core.async.timeout.call(null,(200));var state_22909__$1 = state_22909;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22909__$1,(2),inst_22904);
} else
{return null;
}
}
});})(c__18391__auto__,parent))
;return ((function (switch__18335__auto__,c__18391__auto__,parent){
return (function() {
var state_machine__18336__auto__ = null;
var state_machine__18336__auto____0 = (function (){var statearr_22915 = [null,null,null,null,null,null,null,null];(statearr_22915[(0)] = state_machine__18336__auto__);
(statearr_22915[(1)] = (1));
return statearr_22915;
});
var state_machine__18336__auto____1 = (function (state_22909){while(true){
var ret_value__18337__auto__ = (function (){try{while(true){
var result__18338__auto__ = switch__18335__auto__.call(null,state_22909);if(cljs.core.keyword_identical_QMARK_.call(null,result__18338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18338__auto__;
}
break;
}
}catch (e22916){if((e22916 instanceof Object))
{var ex__18339__auto__ = e22916;var statearr_22917_22919 = state_22909;(statearr_22917_22919[(5)] = ex__18339__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22909);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22916;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22920 = state_22909;
state_22909 = G__22920;
continue;
}
} else
{return ret_value__18337__auto__;
}
break;
}
});
state_machine__18336__auto__ = function(state_22909){
switch(arguments.length){
case 0:
return state_machine__18336__auto____0.call(this);
case 1:
return state_machine__18336__auto____1.call(this,state_22909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18336__auto____0;
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18336__auto____1;
return state_machine__18336__auto__;
})()
;})(switch__18335__auto__,c__18391__auto__,parent))
})();var state__18393__auto__ = (function (){var statearr_22918 = f__18392__auto__.call(null);(statearr_22918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18391__auto__);
return statearr_22918;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18393__auto__);
});})(c__18391__auto__,parent))
);
return c__18391__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__22921){var map__22923 = p__22921;var map__22923__$1 = ((cljs.core.seq_QMARK_.call(null,map__22923))?cljs.core.apply.call(null,cljs.core.hash_map,map__22923):map__22923);var f_data = map__22923__$1;var request_url = cljs.core.get.call(null,map__22923__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__22923__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__22924,files_msg){var map__22946 = p__22924;var map__22946__$1 = ((cljs.core.seq_QMARK_.call(null,map__22946))?cljs.core.apply.call(null,cljs.core.hash_map,map__22946):map__22946);var opts = map__22946__$1;var on_cssload = cljs.core.get.call(null,map__22946__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__22947_22967 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__22948_22968 = null;var count__22949_22969 = (0);var i__22950_22970 = (0);while(true){
if((i__22950_22970 < count__22949_22969))
{var f_22971 = cljs.core._nth.call(null,chunk__22948_22968,i__22950_22970);figwheel.client.reload_css_file.call(null,f_22971);
{
var G__22972 = seq__22947_22967;
var G__22973 = chunk__22948_22968;
var G__22974 = count__22949_22969;
var G__22975 = (i__22950_22970 + (1));
seq__22947_22967 = G__22972;
chunk__22948_22968 = G__22973;
count__22949_22969 = G__22974;
i__22950_22970 = G__22975;
continue;
}
} else
{var temp__4126__auto___22976 = cljs.core.seq.call(null,seq__22947_22967);if(temp__4126__auto___22976)
{var seq__22947_22977__$1 = temp__4126__auto___22976;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22947_22977__$1))
{var c__16596__auto___22978 = cljs.core.chunk_first.call(null,seq__22947_22977__$1);{
var G__22979 = cljs.core.chunk_rest.call(null,seq__22947_22977__$1);
var G__22980 = c__16596__auto___22978;
var G__22981 = cljs.core.count.call(null,c__16596__auto___22978);
var G__22982 = (0);
seq__22947_22967 = G__22979;
chunk__22948_22968 = G__22980;
count__22949_22969 = G__22981;
i__22950_22970 = G__22982;
continue;
}
} else
{var f_22983 = cljs.core.first.call(null,seq__22947_22977__$1);figwheel.client.reload_css_file.call(null,f_22983);
{
var G__22984 = cljs.core.next.call(null,seq__22947_22977__$1);
var G__22985 = null;
var G__22986 = (0);
var G__22987 = (0);
seq__22947_22967 = G__22984;
chunk__22948_22968 = G__22985;
count__22949_22969 = G__22986;
i__22950_22970 = G__22987;
continue;
}
}
} else
{}
}
break;
}
var c__18391__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18391__auto__,map__22946,map__22946__$1,opts,on_cssload){
return (function (){var f__18392__auto__ = (function (){var switch__18335__auto__ = ((function (c__18391__auto__,map__22946,map__22946__$1,opts,on_cssload){
return (function (state_22957){var state_val_22958 = (state_22957[(1)]);if((state_val_22958 === (2)))
{var inst_22953 = (state_22957[(2)]);var inst_22954 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_22955 = on_cssload.call(null,inst_22954);var state_22957__$1 = (function (){var statearr_22959 = state_22957;(statearr_22959[(7)] = inst_22953);
return statearr_22959;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22957__$1,inst_22955);
} else
{if((state_val_22958 === (1)))
{var inst_22951 = cljs.core.async.timeout.call(null,(100));var state_22957__$1 = state_22957;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22957__$1,(2),inst_22951);
} else
{return null;
}
}
});})(c__18391__auto__,map__22946,map__22946__$1,opts,on_cssload))
;return ((function (switch__18335__auto__,c__18391__auto__,map__22946,map__22946__$1,opts,on_cssload){
return (function() {
var state_machine__18336__auto__ = null;
var state_machine__18336__auto____0 = (function (){var statearr_22963 = [null,null,null,null,null,null,null,null];(statearr_22963[(0)] = state_machine__18336__auto__);
(statearr_22963[(1)] = (1));
return statearr_22963;
});
var state_machine__18336__auto____1 = (function (state_22957){while(true){
var ret_value__18337__auto__ = (function (){try{while(true){
var result__18338__auto__ = switch__18335__auto__.call(null,state_22957);if(cljs.core.keyword_identical_QMARK_.call(null,result__18338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18338__auto__;
}
break;
}
}catch (e22964){if((e22964 instanceof Object))
{var ex__18339__auto__ = e22964;var statearr_22965_22988 = state_22957;(statearr_22965_22988[(5)] = ex__18339__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22957);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22964;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22989 = state_22957;
state_22957 = G__22989;
continue;
}
} else
{return ret_value__18337__auto__;
}
break;
}
});
state_machine__18336__auto__ = function(state_22957){
switch(arguments.length){
case 0:
return state_machine__18336__auto____0.call(this);
case 1:
return state_machine__18336__auto____1.call(this,state_22957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18336__auto____0;
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18336__auto____1;
return state_machine__18336__auto__;
})()
;})(switch__18335__auto__,c__18391__auto__,map__22946,map__22946__$1,opts,on_cssload))
})();var state__18393__auto__ = (function (){var statearr_22966 = f__18392__auto__.call(null);(statearr_22966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18391__auto__);
return statearr_22966;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18393__auto__);
});})(c__18391__auto__,map__22946,map__22946__$1,opts,on_cssload))
);
return c__18391__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__22990){var map__22995 = p__22990;var map__22995__$1 = ((cljs.core.seq_QMARK_.call(null,map__22995))?cljs.core.apply.call(null,cljs.core.hash_map,map__22995):map__22995);var opts = map__22995__$1;var on_compile_fail = cljs.core.get.call(null,map__22995__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__22995__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__22995__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__22995__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__22995,map__22995__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__22996 = cljs.core._EQ_;var expr__22997 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__22996.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__22997)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__22996.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__22997)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__22996.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__22997)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__22995,map__22995__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__22995,map__22995__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__22995,map__22995__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__22995,map__22995__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__22995,map__22995__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__22995,map__22995__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__22995,map__22995__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__22995,map__22995__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__22995,map__22995__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj23002 = {"detail":url};return obj23002;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__23003){var map__23005 = p__23003;var map__23005__$1 = ((cljs.core.seq_QMARK_.call(null,map__23005))?cljs.core.apply.call(null,cljs.core.hash_map,map__23005):map__23005);var class$ = cljs.core.get.call(null,map__23005__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__23005__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__23006){var map__23012 = p__23006;var map__23012__$1 = ((cljs.core.seq_QMARK_.call(null,map__23012))?cljs.core.apply.call(null,cljs.core.hash_map,map__23012):map__23012);var ed = map__23012__$1;var exception_data = cljs.core.get.call(null,map__23012__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__23012__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__23013_23017 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__23014_23018 = null;var count__23015_23019 = (0);var i__23016_23020 = (0);while(true){
if((i__23016_23020 < count__23015_23019))
{var msg_23021 = cljs.core._nth.call(null,chunk__23014_23018,i__23016_23020);console.log(msg_23021);
{
var G__23022 = seq__23013_23017;
var G__23023 = chunk__23014_23018;
var G__23024 = count__23015_23019;
var G__23025 = (i__23016_23020 + (1));
seq__23013_23017 = G__23022;
chunk__23014_23018 = G__23023;
count__23015_23019 = G__23024;
i__23016_23020 = G__23025;
continue;
}
} else
{var temp__4126__auto___23026 = cljs.core.seq.call(null,seq__23013_23017);if(temp__4126__auto___23026)
{var seq__23013_23027__$1 = temp__4126__auto___23026;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23013_23027__$1))
{var c__16596__auto___23028 = cljs.core.chunk_first.call(null,seq__23013_23027__$1);{
var G__23029 = cljs.core.chunk_rest.call(null,seq__23013_23027__$1);
var G__23030 = c__16596__auto___23028;
var G__23031 = cljs.core.count.call(null,c__16596__auto___23028);
var G__23032 = (0);
seq__23013_23017 = G__23029;
chunk__23014_23018 = G__23030;
count__23015_23019 = G__23031;
i__23016_23020 = G__23032;
continue;
}
} else
{var msg_23033 = cljs.core.first.call(null,seq__23013_23027__$1);console.log(msg_23033);
{
var G__23034 = cljs.core.next.call(null,seq__23013_23027__$1);
var G__23035 = null;
var G__23036 = (0);
var G__23037 = (0);
seq__23013_23017 = G__23034;
chunk__23014_23018 = G__23035;
count__23015_23019 = G__23036;
i__23016_23020 = G__23037;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__15826__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__15826__auto__))
{return or__15826__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__23038){var map__23040 = p__23038;var map__23040__$1 = ((cljs.core.seq_QMARK_.call(null,map__23040))?cljs.core.apply.call(null,cljs.core.hash_map,map__23040):map__23040);var opts = map__23040__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__23038 = null;if (arguments.length > 0) {
  p__23038 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__23038);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__23041){
var p__23038 = cljs.core.seq(arglist__23041);
return watch_and_reload__delegate(p__23038);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map