(ns russellfail.subs
  (:require-macros
    [reagent.ratom :refer [reaction]])
  (:require
    [re-frame.core :refer [register-sub subscribe]]
    [reagent.core  :as reagent]))

(register-sub
  ::height
  (fn [db _] (reaction (:height @db))))

(register-sub
  ::width
  (fn [db _] (reaction (:width @db))))

(register-sub
  ::columns
  (fn [db _]
    (let [width      (reaction @(subscribe [::width]))
          block-size (reaction @(subscribe [::block-size]))]
      (reaction (/ @width @block-size)))))

(register-sub
  ::rows
  (fn [db _]
    (let [height     (reaction @(subscribe [::height]))
          block-size (reaction @(subscribe [::block-size]))]
      (reaction (/ @height @block-size)))))

(register-sub
  ::block-size
  (fn [db _]
    (let [width (reaction @(subscribe [::width]))]
      (reaction (/ @width
                   (Math/ceil (/ @width 100)))))))

(register-sub
  ::block-color
  (fn [db [_ x y]]
    (reaction (get-in @db [:blocks y x :color] "#fff"))))
