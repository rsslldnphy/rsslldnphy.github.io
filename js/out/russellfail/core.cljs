(ns russellfail.core
  (:require-macros
    [reagent.ratom :refer [reaction]])
  (:require
    [goog.events   :as e]
    [re-frame.core :refer [subscribe dispatch register-handler register-sub trim-v]]
    [reagent.core  :as reagent]))

(register-handler
  :window-area/update
  [trim-v]
  (fn [db [height width]]
    (assoc db :window-height height :window-width width)))

(register-sub
  :block-size
  (fn [db]
    (reaction (/ (:window-width @db)
                 (Math/ceil (/ (:window-width @db) 100))))))

(register-sub
  :window-height
  (fn [db]
    (reaction (:window-height @db) )))

(register-sub
  :window-width
  (fn [db]
    (reaction (:window-width @db) )))

(register-sub
  :window-area
  (fn [db]
    (reaction (* (:window-height @db) (:window-width @db)))))

(def hex-digits
  (concat (range (int \0) (inc (int \9))) (range (int \a) (inc (int \f)))))

(defn rand-hex
  []
  (apply str "#" (for [_ (range 6)] (rand-nth hex-digits))))

(defn start-random-timer
  [timeout handler]
  (reset! timeout (js/setTimeout #(do (handler)
                                      (start-random-timer timeout handler))
                                 (rand-int 50000))))

(defn div
  []
  (let [size         (subscribe [:block-size])
        color        (reagent/atom "#fff")
        change-color #(reset! color (rand-hex))
        timeout      (atom nil)]
    (reagent/create-class
      {:component-did-mount
       #(do (e/listen (reagent/dom-node %) "mouseenter" change-color)
            (start-random-timer timeout change-color))
       :component-will-unmount
       #(do (e/unlisten (reagent/dom-node %) "mouseenter" change-color)
            (js/clearTimeout @timeout))
       :reagent-render
       (fn []
         [:div.block {:style {:width (str @size "px")
                              :height (str @size "px")
                              :background-color @color}}])})))

(defn page
  []
  (let [area   (subscribe [:window-area])
        height (subscribe [:window-height])
        width  (subscribe [:window-width])
        size   (subscribe [:block-size])]
    (fn []
      (let [area @area
            height @height
            width @width
            size @size]
      [:div#russellfail
       (for [y (range (/ height size))]
         ^{:key y }
         [:div (for [x (range (/ width size))] ^{:key x} [div])])]))))

(defn ^:export main
  []
  (dispatch [:window-area/update (.-innerHeight js/window) (.-innerWidth js/window)])
  (set! (.-onresize js/window)
    #(dispatch [:window-area/update (.-innerHeight (.-target %)) (.-innerWidth (.-target %))]))
  (reagent/render-component [page] (.getElementById js/document "app")))
