import { defineStore } from "pinia";
export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    searchBarVal: "",
    isEmpty: null as boolean | null,
    limit: 3,
    projects: [
      {
        projectName: "Loviisa/Site",
        lastUpdated: "changed 2 hours ago by pekkaharju",
        tag: ["Planning"],
        projectOwner: "pekkaharju.png",
        comments: 5,
        checked: false,
        tagColor: [
          {
            "background-color": "#BBDDE6",
          },
        ],
      },
      {
        projectName: "Loviisa/Design",
        lastUpdated: "changed 4 hours ago by katrik",
        tag: ["Completed"],
        projectOwner: "katrik.png",
        comments: 1,
        checked: false,
        tagColor: [
          {
            "background-color": "#DCF487",
          },
        ],
      },
      {
        projectName: "Loviisa/Project",
        lastUpdated: "changed 7 hours ago by pekkaharju",
        tag: [],
        projectOwner: "pekkaharju.png",
        comments: 22,
        checked: false,
        tagColor: [{}],
      },
      {
        projectName: "Loviisa/Purchasing",
        lastUpdated: "changed yesterday by anttijuh",
        tag: ["Completed"],
        projectOwner: "anttijuh.png",
        comments: 1,
        checked: false,
        tagColor: [
          {
            "background-color": "#DCF487",
          },
        ],
      },
      {
        projectName: "Vaasankatu/Project",
        lastUpdated: "changed 3 days ago by pekkaharju",
        tag: [],
        projectOwner: "pekkaharju.png",
        comments: 1,
        checked: false,
        tagColor: [
          {
            "background-color": "#DCF487",
          },
        ],
      },
      {
        projectName: "Onkalo/Project",
        lastUpdated: "changed 12 days ago by pekkaharju",
        tag: [],
        projectOwner: "pekkaharju.png",
        comments: 1,
        checked: false,
        tagColor: [
          {
            "background-color": "#DCF487",
          },
        ],
      },
      {
        projectName: "Onkalo/Geo",
        lastUpdated: "changed 22 days ago by pekkaharju",
        tag: ["Delay", "Planning"],
        projectOwner: "pekkaharju.png",
        comments: 1,
        checked: false,
        tagColor: [
          {
            "background-color": "#E05915",
          },
          {
            "background-color": "#BBDDE6",
          },
        ],
      },
    ] as ProjectsInterface[],
    changes: [
      {
        userName: "Antii Juhta ",
        action: "commits",
        repo: "Loviisa/purchasing",
        branch: "purchasing-latest",
        pfp: "anttijuh.png",
        logs: [
          {
            code: "ac34534x5",
            msg: "changed roof type to table",
          },
          {
            code: "ye11564u9",
            msg: "changed slab purchase price to match quote ",
          },
        ],
      },
      {
        userName: "Katri Kauniainen ",
        action: "commits",
        repo: "Loviisa/design",
        branch: "design-latest",
        pfp: "katrik.png",
        logs: [
          {
            code: "xz14134a1",
            msg: "roofing material changed",
          },
          {
            code: "ye11564u9",
            msg: "changed pillar type",
          },
        ],
      },
      {
        userName: "Pekka Harju ",
        action: "commits",
        repo: "Loviisa/project",
        branch: "project-latest",
        pfp: "pekkaharju.png",
        logs: [
          {
            code: "ac34534x5",
            msg: "number of toilets increased",
          },
          {
            code: "ye11564u9",
            msg: "new requirements for facade from zoning",
          },
        ],
      },
      {
        userName: "Pekka Harju ",
        action: "commits",
        repo: "Loviisa/project",
        branch: "project-latest",
        pfp: "pekkaharju.png",
        logs: [
          {
            code: "ac34534x5",
            msg: "building footprint reduced",
          },
          {
            code: "ye11564u9",
            msg: "room height increased",
          },
        ],
      },
    ] as ChangesInterface[],
  }),
  getters: {
    getFilteredProjects(state) {
      return state.projects.filter(
        (item) =>
          item.projectName
            .toLowerCase()
            .includes(state.searchBarVal.toLowerCase()) ||
          item.lastUpdated
            .toLowerCase()
            .includes(state.searchBarVal.toLowerCase())
      );
    },
    getLimitedChanges(state) {
      return state.changes.slice(0, state.limit);
    },
  },
  actions: {},
});

export interface ProjectsInterface {
  projectName: string;
  lastUpdated: string;
  tag: string[];
  projectOwner: string;
  comments: number;
  checked: boolean;
  tagColor: [
    {
      "background-color": string;
    }
  ];
}
export interface ChangesInterface {
  userName: string;
  action: string;
  repo: string;
  branch: string;
  pfp: string;
  logs: {
    code: string;
    msg: string;
  }[];
}
