(ns rsslldnphy.routes
  (:require-macros [secretary.core :refer [defroute]])
  (:require [accountant.core :as accountant]
            [re-frame.core :as re-frame]
            [secretary.core :as secretary]))

(defn app-routes []

  (defroute "/" []
    (re-frame/dispatch [:set-current-page :home]))

  (defroute "/songs" []
    (re-frame/dispatch [:set-current-page :songs]))

  (defroute "/pictures" []
    (re-frame/dispatch [:set-current-page :pictures]))

  (defroute "/writing" []
    (re-frame/dispatch [:set-current-page :writing]))

  (defroute "/cv" []
    (re-frame/dispatch [:set-current-page :cv]))

  (accountant/configure-navigation! {:nav-handler secretary/dispatch!
                                     :path-exists? secretary/locate-route}))
