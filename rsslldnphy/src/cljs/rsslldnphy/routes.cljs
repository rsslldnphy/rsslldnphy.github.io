(ns rsslldnphy.routes
  (:require-macros [secretary.core :refer [defroute]])
  (:require [accountant.core :as accountant]
            [re-frame.core :as re-frame]
            [secretary.core :as secretary]))

(defn app-routes []

  (defroute "/" []
    (re-frame/dispatch [:set-current-page :home]))

  (defroute "/:page" [page]
    (re-frame/dispatch [:set-current-page (keyword page)]))

  (accountant/configure-navigation! {:nav-handler secretary/dispatch!
                                     :path-exists? secretary/locate-route}))
