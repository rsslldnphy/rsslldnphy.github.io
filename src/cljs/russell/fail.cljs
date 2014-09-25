(ns russell.fail
  (:require [russell.isomorphic-html    :as i]
            [reagent.core :refer [atom] :as reagent]))

(defn ^:export run  []
  (reagent/render-component [:div [i/doctype]]
                            (.getElementById js/document "fail")))
