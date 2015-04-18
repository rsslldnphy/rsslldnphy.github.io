(ns russellfail.handlers
  (:require
    [russellfail.hex :as hex]
    [re-frame.core   :refer [dispatch dispatch-sync register-handler trim-v]]
    [reagent.ratom   :refer [IReactiveAtom]])
  (:import ))

(defn bang!
  "Middleware that allows you to do side-effecty things,
  but not to change the value of app-db. You get a dereffed copy of app-db
  but any return value is ignored."
  [handler!]
  (fn bang-handler
    [app-db event-vec]
    (if (satisfies? IReactiveAtom app-db)
      (handler! @app-db event-vec )
      (handler! app-db event-vec))
    app-db))

(register-handler
  ::initialize
  [bang!]
  (fn [db _]
    (let [height (.-innerHeight js/window)
          width  (.-innerWidth js/window)]
      (dispatch-sync [::update-window-size height width])
      (set! (.-onresize js/window)
        #(dispatch [::update-window-size (.-innerHeight (.-target %)) (.-innerWidth (.-target %))])))))

(register-handler
  ::update-window-size
  [trim-v]
  (fn [db [height width]]
    (assoc db :height height :width width)))

(register-handler
  ::update-block-color
  [trim-v]
  (fn [db [x y & [color]]]
    (assoc-in db [:blocks y x :color] (or color (hex/rand-hex)))))
