(ns russellfail.core
  (:require [reagent.core :as reagent :refer [atom]]))

(defonce app-state (atom {:text "Hello, what is your name? "}))

(defn page []
  [:div (@app-state :text) "Russell"])

(defn ^:export main []
  (reagent/render-component [page] (.getElementById js/document "app")))
