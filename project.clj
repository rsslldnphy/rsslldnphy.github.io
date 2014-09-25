(defproject russell-fail "0.0.1-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2342"]
                 [reagent "0.4.2"]]
  :plugins [[lein-cljsbuild "1.0.3"]]
  :source-paths ["src/cljs"]
  :hooks [leiningen.cljsbuild]
  :profiles {:prod {:cljsbuild
                    {:builds
                     {:fail {:compiler
                               {:optimizations :advanced
                                :preamble ^:replace ["reagent/react.min.js"]
                                :pretty-print false}}}}}
             :srcmap {:cljsbuild
                      {:builds
                       {:fail {:compiler
                               {:source-map "fail.js.map"
                                :source-map-path "fail"}}}}}}
  :cljsbuild
  {:builds
   {:fail {:source-paths ["src/cljs"]
           :compiler
           {:preamble ["reagent/react.js"]
            :output-dir "target"
            :output-to "fail.js"
            :pretty-print true}}}})
