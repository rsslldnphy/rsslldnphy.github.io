(ns rsslldnphy.songs.views)

(def song-ids
  [291809263
   292869289
   346960292
   348591853
   390497697
   415634163
   487243335])

(defn song
  [id]
  [:iframe {:style {:background "#f0f0f0" :border-radius "5px" :border "none" :margin-bottom "15px"}
            :width "100%"
            :height "120"
            :scrolling "no"
            :frame-border "no"
            :allow "autoplay"
            :src (str "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"
                      id
                      "&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true")}])

(defn songs
  []
  [:div
   [:div.col-md-12 {:style {:pointer-events "none"}}
    [:div {:style {:padding-right "200px" :pointer-events "none"}}
     [:p
      "pretty much all of the songs i make these days are about dogs in some form or other"
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
   [:div.col-md-6 {:style {:background "white" :border-right "1px solid #dadada" :padding-bottom "25px"}}
    (into [:div.row]
          (for [id song-ids]
            [:div.col-md-12 [song id]]))]])
