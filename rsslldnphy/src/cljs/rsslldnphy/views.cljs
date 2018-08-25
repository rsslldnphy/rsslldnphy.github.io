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

(defn layout
  [current-page & forms]
  (into [:div {:style {:margin-top "15px" :font-family "Quicksand, sans-serif"}}
         (when-not (= :home current-page)
           [:div.col-md-12 {:style {:pointer-events "none" :overflow "hidden"}}
            [:strong (name current-page)]
            [:br]
            [:br]])]
        forms))

(defn main-panel []
  []
  (let [current-page (re-frame/subscribe [:current-page])]
    (fn []
      (case @current-page
        :home     [layout :home     [home/home]]
        :songs    [layout :songs    [songs/songs]]
        :pictures [layout :pictures [pictures/pictures]]
        :words    [layout :words    [words/words]]
        [:div]))))
