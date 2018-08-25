(ns rsslldnphy.events
  (:require
    [re-frame.core :as re-frame]
    [rsslldnphy.db :as db]))

(re-frame/reg-event-db
  ::initialize-db
  (fn [_ _]
    db/default-db))


(re-frame/reg-event-db
  :set-current-page
  (fn [db [_ page]]
    (assoc db :current-page page)))
