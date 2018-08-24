(ns rsslldnphy.views
  (:require
    [reagent.core :as reagent]
    [re-frame.core :as re-frame]
    [rsslldnphy.colors :as c]
    [rsslldnphy.subs :as subs]))

(defn fizzle
  [{:keys [opacity polarity]}]
  (let [opacity (polarity opacity (/ (rand) 5))]
    (cond (< opacity 0)
          {:opacity 0 :polarity +}
          (> opacity 1)
          {:opacity 1 :polarity -}
          :else
          {:opacity opacity :polarity polarity})))

(defn letter
  [letter]
  (let [state (reagent/atom {:opacity 1 :polarity -})]
    (fn [letter]
      (js/setTimeout #(swap! state fizzle) (+ 50 (rand-int 400)))
      [:span {:style {:opacity (:opacity @state)
                      :display "inline-block"
                      :vertical-align "top"
                      :margin-top (if (> (rand) 0.995) "-30px" "0px")}} letter])))

(defn song
  [id]
  [:iframe {:style {:border "none" :margin "15px 0"}
            :width "100%"
            :height "120"
            :scrolling "no"
            :frameborder "no"
            :allow "autoplay"
            :src (str "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" id "&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true")}])

#_(defn main-panel []
  [:div.container-fluid
   #_[:div.col-md-12 {:style {:text-align "center"
                  :font-size "2em"}}
    (into [:h1 {:style {:margin-top "10vh"
                        :color c/red
                        :font-family "Quicksand, sans-serif"
                        :font-size "3em"
                        :margin-bottom "30px"}}]
          (for [c "RSSLLDNPHY.COM"] [letter c]))]])

(defn music
  []
  [:div
   [:div.col-md-12 {:style {:pointer-events "none"}}
    [:div {:style {:padding-right "200px" :pointer-events "none"}}
     [:p
      "pretty much all of the songs i make these days are about dogs in some form or other."
      [:br]
      "why? well, to paraphrase shellac: because they were dogs"
      [:br]
      [:br]
      "real dogs "
      [:br]
      "(and there were thousands)"
      [:br]
      [:br]
      "this isn't some kind of metaphor"
      [:br]
      "goddamn, this is real"]]]
   [:div.col-md-6
    (into [:div.row]
          (for [id [291809263 292869289 346960292 348591853 390497697 415634163 487243335]]
            [:div.col-md-12 [song id]]))]])

(defn home
  []
  [:div.col-md-12 {:style {:pointer-events "none"}}
   [:div {:style {:padding-right "200px" :pointer-events "none"}}
    [:p
     "hi, i'm russell, i'm a programmer by day"
     [:br]
     "but by night...."
     [:br]
     [:br]
     "i roam the streets"
     [:br]
     "making bad art to inflict on an unsuspecting world"
     [:br]
     [:br]
     "by rights i should be embarrassed to share this stuff with you"
     [:br]
     "but somehow i seem to have managed to turn off that emotion"
     [:br]
     [:br]
     "it's mostly about dogs"
     [:br]
     "i hope it brings you some joy"
     ]]])

(defn main-panel []
  []
  (let [current-page (re-frame/subscribe [:current-page])]
    (fn []
      [:div {:style {:margin-top "15px" :font-family "Quicksand, sans-serif"}}
       (case @current-page
         :home [home]
         :music [music]
         [:div])])))
