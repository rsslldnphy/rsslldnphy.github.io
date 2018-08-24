(ns rsslldnphy.routes
  (:require-macros [secretary.core :refer [defroute]])
  (:require [accountant.core :as accountant]
            [re-frame.core :as re-frame]
            [secretary.core :as secretary]))

(defn app-routes []

  (defroute "/" []
    (re-frame/dispatch [:set-current-page :home]))

  (defroute "/music" []
    (re-frame/dispatch [:set-current-page :music]))

  (defroute "/pictures" []
    (re-frame/dispatch [:set-current-page :pictures]))

  (defroute "/stories" []
    (re-frame/dispatch [:set-current-page :stories]))

  (defroute "/cv" []
    (re-frame/dispatch [:set-current-page :cv]))

  (accountant/configure-navigation! {:nav-handler secretary/dispatch!
                                     :path-exists? secretary/locate-route}))
