import { defineStore } from "pinia";
import { ref } from "vue";
export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    searchBarVal:ref(""),
    projects : ref ([
      {
        projectName: "Lovissa/Site",
        lastUpdated: "changed 2 hours ago by pekkaharju",
        tag: "Planning",
        projectOwner: "pekkaharju.png",
        comments: 5,
        checked: false,
        tagColor: {
          "background-color": "#BBDDE6",
        },
      },
      {
        projectName: "Lovissa/Design",
        lastUpdated: "changed 4 hours ago by katrik",
        tag: "Completed",
        projectOwner: "katrik.png",
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
        projectOwner: "pekkaharju.png",
        comments: 22,
        checked: false,
        tagColor: {},
      },
      {
        projectName: "Lovissa/Purchasing",
        lastUpdated: "changed yesterday by anttijuh",
        tag: "Completed",
        projectOwner: "anttijuh.png",
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
        projectOwner: "pekkaharju.png",
        comments: 1,
        checked: false,
        tagColor: {
          "background-color": "#DCF487",
        },
      },
      {
        projectName: "Onkalo/Project",
        lastUpdated:  "changed 12 days ago by pekkaharju",
        tag: "",
        projectOwner: "pekkaharju.png",
        comments: 1,
        checked: false,
        tagColor: {
          "background-color": "#DCF487",
        },
      },   
       {
        projectName: "Onkalo/Geo",
        lastUpdated:  "changed 22 days ago by pekkaharju",
        tag: "Delay",
        projectOwner: "pekkaharju.png",
        comments: 1,
        checked: false,
        tagColor: {
          "background-color": "#E05915",
        }
      },
    ] as userProjects[]),
  }),
  getters: {
    getFilteredProjects(state){
      return state.projects.filter(item=> item.projectName.includes(state.searchBarVal));
    }
  },
  actions: {

  },
});

interface userProjects{
  projectName:string
  lastUpdated:string
  tag:string
  projectOwner:string
  comments:number
  checked:boolean
  tagColor:{
    "background-color":string
  }
}
