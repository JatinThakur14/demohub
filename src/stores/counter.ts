import { defineStore } from "pinia";
import { ref } from "vue";
export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    searchBarVal:ref(""),
    projects : ref([
      {
        projectName: "Lovissa/Site",
        lastUpdated: "changed 2 hours ago by pekkaharju",
        tag: "Planning",
        projectOwner: "src/assets/pekkaharju.png",
        comments: 5,
        checked: false,
        tagColor: {
          "background-color": "lightblue",
        },
      },
      {
        projectName: "Lovissa/Design",
        lastUpdated: "changed 4 hours ago by katrik",
        tag: "Completed",
        projectOwner: "src/assets/katrik.png",
        comments: 1,
        checked: false,
        tagColor: {
          "background-color": "#DCF487",
        },
      },
      {
        projectName: "Lovissa/Project",
        lastUpdated: "changed 7 hours ago by pekkaharju",
        tag: "",
        projectOwner: "src/assets/pekkaharju.png",
        comments: 22,
        checked: false,
        tagColor: {},
      },
      {
        projectName: "Lovissa/Purchasing",
        lastUpdated: "changed yesterday by anttijuh",
        tag: "Completed",
        projectOwner: "src/assets/anttijuh.png",
        comments: 1,
        checked: false,
        tagColor: {
          "background-color": "#DCF487",
        },
      },
         {
        projectName: "Vaasankatu/Project",
        lastUpdated:  "changed 3 days ago by pekkaharju",
        tag: "",
        projectOwner: "src/assets/pekkaharju.png",
        comments: 1,
        checked: false,
        tagColor: {
          "background-color": "#DCF487",
        },
      },
    ]),
  }),
  getters: {
    getFilteredProjects(state){
      return state.projects.filter(item=>{ return item.projectName.includes(state.searchBarVal);});
    }
  },
  actions: {

  },
});
