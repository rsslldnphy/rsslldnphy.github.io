(ns rsslldnphy.pictures.views)

(def filenames
  ["fred.jpg"
   "withnail-bites.jpg"
   "toffle.jpg"
   "molly-garden.jpg"
   "molly-perspective.jpg"
   "two-cats.jpg"
   "richard-and-withnail.jpg"
   "me-and-gran.jpg"
   "me-and-mum.jpg"
   "medog.jpg"
   "molly.jpg"
   "kingsley.jpg"
   "laughing-molly-lines.jpg"
   "dovile.jpg"
   "laughing-molly.jpg"
   "gaivile.jpg"
   "kira.jpg"
   "hypnocat.jpg"
   "kitten-whiskers.jpg"
   "lolipomeranian.jpg"
   "me-and-shithead.jpg"
   "me-ill-lines.jpg"
   "mulder.jpg"
   "me-ill.jpg"
   "bang.jpg"
   "mixologist-1.jpg"
   "mixologist-2.jpg"
   "sam.jpg"
   "sun-cat.jpg"
   "binx-dishwasher.jpg"
   "first-painting.jpg"])

(defn pictures
  []
  [:div
  [:div.col-md-12 {:style {:pointer-events "none"}}
   [:div {:style {:padding-right "200px" :pointer-events "none"}}
    [:p
     "i have aphantasia, which means i have no visual imagination"
     [:br]
     "so pretty much all my pictures are copies of photographs"
     [:br]
     [:br]
     "they're also mostly dogs"
     [:br]
     "plus the occassional cat or selfie with someone i care about"
     [:br]
     [:br]
     "they're kind of a mess but i kind of like that"
     [:br]
     "i've never been very good at colouring inside the lines"]]]
  [:div.col-md-6 {:style {:background "white" :border-right "1px solid #dadada"}}
   [:div.row
    (into [:div.col-md-6]
          (for [f (take-nth 2 filenames)]
            [:img {:style {:width "100%" :margin-bottom "15px"} :src (str "/img/thumbnails/" f)}]))
    (into [:div.col-md-6]
          (for [f (take-nth 2 (drop 1 filenames))]
            [:img {:style {:width "100%" :margin-bottom "15px"} :src (str "/img/thumbnails/" f)}]))]]])
