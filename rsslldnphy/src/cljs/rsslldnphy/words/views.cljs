(ns rsslldnphy.words.views)

(defn story
  [title id img & blurb]
  [:div.story {:style {:border-top "1px solid #f0f0f0" :padding-top "15px" :margin-bottom "15px"}}
     [:a {:href (str "https://medium.com/@rsslldnphy/" id)}
     [:p [:strong title]]
     #_[:div {:style {:height "300px" :overflow "hidden" :margin-bottom "15px"}}
        [:img {:src img
               :style {:width "100%"}}]]
     (into [:p] blurb)]])

(defn words
  []
  [:div
   [:div.col-md-12 {:style {:pointer-events "none" :padding-bottom "30px" :overflow "hidden"}}
    [:div {:style {:padding-right "200px" :pointer-events "none"}}
     [:p
      "for whatever reason, unlike my pictures and songs,"
      [:br]
      "my writing isn't usually about dogs "
      [:br]
      [:br]
      "tbh i'm mainly just throwing ideas round here"
      [:br]
      "wouldn't bother reading it if i were you"]]]
   [:div.col-md-6 {:style {:background "white" :border-right "1px solid #dadada"}}
    [story
     "Hello"
     "hello-224ef700db6f"
     "https://cdn-images-1.medium.com/max/1600/1*CgCvxk-IN6o2THis0YjcDw.jpeg"
     "Hello, Gerry,” I said, spotting the magpie in the empty basketball court as I walked down the street..."]
    [story
     "Meat Cute"
     "meat-cute-b0263c1996eb"
     "https://cdn-images-1.medium.com/max/1600/1*2_kq_SAD8ZeaZKcVdb0kaw.jpeg"
     "It was a local butchers. As at all butchers, the red of the meat was overwhelming, softened only, here and there, by the white marbling of fat..."]
    [story
     "Rocket Man"
     "rocket-man-b01a7d090224"
     "https://cdn-images-1.medium.com/max/1600/1*akiMv4-XYWEzq_wyhUVUjw.jpeg"
     "“I’m a... Rocket Man”...  That song, “sung” by William Shatner, makes me unbearably sad. Much more than the original, he brings out the latent sadness of the song. The sadness of being alone, being unable to communicate with your loved ones. Not for any external reason, simply because you are incapable of communication..."]
    [story
     "Rope Poem"
     "rope-poem-11e279dba05a"
     "https://cdn-images-1.medium.com/max/1600/0*JzxyjCChMjYMR964"
     "uncoiled, like spent rope" [:br]
     "bruised skin a palimpsest of pleasure/pain" [:br]
     "you lie on the floor."]
    [story
     "Dragons"
     "dragons-34cbb5e75d8e"
     "https://cdn-images-1.medium.com/max/1600/1*NhU_wGsnTRAdjbIqIICtzg.jpeg"
     "I think of dragons as peculiarly static creatures. The thought of them flying seems somehow… shocking. And even then, I can only imagine them gliding, motionless, across the sky..."]
    [story
     "Young Bull"
     "young-bull-322b56c202d1"
     "https://cdn-images-1.medium.com/max/1600/0*tlFsQ9sJ2LjnzdPQ"
     "Fat grown-ups who can’t ride, sit" [:br] "beneath a statue of a small boy who smelt of mist..."]
    [story
     "Kissing Lessons"
     "kissing-lessons-5409fe28ae14"
     "https://cdn-images-1.medium.com/max/1600/1*obw2p8OniuPrDqAmmk02Eg.jpeg"
     "kissing lessons, spinning together" [:br] "a hot tub of blue stuff against brown clouds..."]
    [story
     "Thinks"
     "thinks-b4a7d9811b56"
     "https://cdn-images-1.medium.com/max/1600/0*ZvYvlRyikc4hTO9H"
     "Beyond fringe groups" [:br]
     "artists wait" [:br]
     "consider distance" [:br]
     "shake, scatter drops..."]
    [story
     "Red Carpet, Late Arrival"
     "red-carpet-late-arrival-a12e19776e56"
     "https://cdn-images-1.medium.com/max/1600/1*AKo6kKIz6xJRRndHQKn1pw.jpeg"
     "she wondered then, one thick calf complete " [:br]
     "if worrying affected her performance" [:br]
     "crouched in the darkness..."]]])
