(ns rsslldnphy.core
  (:require
    [accountant.core :as accountant]
    [reagent.core :as reagent]
    [re-frame.core :as re-frame]
    [rsslldnphy.events :as events]
    [rsslldnphy.views :as views]
    [rsslldnphy.config :as config]
    [rsslldnphy.routes :as routes]))

(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (routes/app-routes)
  (re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root))
