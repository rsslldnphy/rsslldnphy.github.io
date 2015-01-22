// Compiled by ClojureScript 0.0-2371
goog.provide('russellfail.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('reagent.core');
if(typeof russellfail.core.app_state !== 'undefined')
{} else
{russellfail.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$31,"Hello, what is your name? "], null));
}
russellfail.core.page = (function page(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$32,(function (){var G__14957 = russellfail.core.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14957) : cljs.core.deref.call(null,G__14957));
})().call(null,cljs.core.constant$keyword$31),"Russell"], null);
});
russellfail.core.main = (function main(){return reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [russellfail.core.page], null),document.getElementById("app"));
});
goog.exportSymbol('russellfail.core.main', russellfail.core.main);
