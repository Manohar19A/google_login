
const routes = [
  {
    path: "",
    name: "Dashboard",
    icon:<svg class="h-5 w-5 text-black-800"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z" />  <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />  <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z" />  <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z" />  <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z" />  <path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />  <path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z" />  <path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z" /></svg>
  },
  {
    path: "/ac",
    name: "Todos",
    icon:<svg class="h-5 w-5 text-blck-800"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />  <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />  <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />  <line x1="11" y1="6" x2="20" y2="6" />  <line x1="11" y1="12" x2="20" y2="12" />  <line x1="11" y1="18" x2="20" y2="18" /></svg>
    // subMenus: [
    //   {
    //     path: "/club",
    //     name: "SchoolClub",
    //   },
    //   {
    //     path: "/manage",
    //     name: "ManageClub",
    //   },
    // ],
  },
  {
    path:"/teachers",
    name:'Posts',
    icon:<svg class="h-5 w-5 text-black-800"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
    
    // subMenus:[
    //     {
    //         path:"/dep",
    //         name:'Departments'
    //     },
    //     {
    //         path:"/sec",
    //         name:"Sections"
    //     }
    // ]
  },
  {
    path:"/parents",
    name:'Parents',
    icon:<svg class="h-5 w-5 text-black-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
  </svg>
  
  }
];
export default routes
