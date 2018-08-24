(ns rsslldnphy.views
  (:require
    [reagent.core :as reagent]
    [re-frame.core :as re-frame]
    [rsslldnphy.colors :as c]
    [rsslldnphy.subs :as subs]
    [rsslldnphy.home.views :as home]
    [rsslldnphy.pictures.views :as pictures]
    [rsslldnphy.songs.views :as songs]
    [rsslldnphy.words.views :as words]))

(defn main-panel []
  []
  (let [current-page (re-frame/subscribe [:current-page])]
    (fn []
      [:div {:style {:margin-top "15px" :font-family "Quicksand, sans-serif"}}
       (case @current-page
         :home     [home/home]
         :songs    [songs/songs]
         :pictures [pictures/pictures]
         :words    [words/words]
         [:div])])))
