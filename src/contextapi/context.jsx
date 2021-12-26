import { createContext } from "react";
import { cardstate } from "./cardstate";

export const Context= createContext()


export const aboutstate={
    aboutustexttitle:"aboutustexttitle",
    aboutustext:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum mollitia ipsum error imet consectetur adipisicing elit. Earum mollitia ipsum error imet consectetur adipisicing elit. Earum mollitia ipsum error imet consectetur adipisicing elit. Earum mollitia ipsum error imet consectetur adipisicing elit. Earum moius porro officia. Animi?",
    aboutustexttwo:"met consectetur adipisicing elit. Earum mollitia ipsum llitia ipsum error imet consectetur adipisicing elit. Earum mollitia ipsum error incidunt possimus optio, eos, facere ipsa veritatis quia voluptatem animi ab, corporis impedit rerum e error imet consectetur adipisicing elit. Earum mollitia ipsum error i",
    aboutusimage:"/images/a.jpg",
    aboutuslink:"fb.com"
}


export const homestate= {
    name:"Anjan",
    description:"Mornin nice day for fishing ain't it  1?",
    backgroundimage:"/images/a.jpg",
    backgroundtext:"Some text here",
    _id:"34824827"
}

export const wholestate={
   homestate:homestate,
   aboutstate:aboutstate,
   cardstate:cardstate
}