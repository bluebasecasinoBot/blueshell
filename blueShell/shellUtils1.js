import { __c, __g, __p, __SYD, __u } from "./sydneyDom_v3.js";

__SYD.robotArmLeft1__holder = () =>{
    return __c(
        "div",
        {
            style:"position:absolute;top:10%;left:0;width:100%;",
            title:"section 1"
        },
        [
            __SYD.robotArmLeft1(),
            __SYD.robotRodLeft1(),
            __SYD.robotJointLeft1(),
            __SYD.robotRodLeft2()
        ],
        {
            createState:{
                stateName:"robotArmLeft1__holder",
                state:{
                    stage1:false,
                    stage2:false,
                    stage3:false,
                    updateState:({prop , value}) =>{
                        const state = __g("robotArmLeft1__holder");
                        state[`${prop}`] = value;
                        __u("robotArmLeft1__holder" , {type:"a" , value:state})
                    },
                    animateBoard_forward:() =>{
                        __p(["robotArmLeft1__holder" , "updateState"])({prop:"stage1" , value:true});
                        let timer1 = setTimeout(() => {
                            __p(["robotArmLeft1__holder" , "updateState"])({prop:"stage2" , value:true});
                            clearTimeout(timer1);

                            let timer2 = setTimeout(() => {
                                __p(["robotArmLeft1__holder" , "updateState"])({prop:"stage3" , value:true});
                                clearTimeout(timer2);
                            }, 500);
                        }, 500);
                    },
                    animateBoard_reverse:() =>{
                        __p(["robotArmLeft1__holder" , "updateState"])({prop:"stage3" , value:false});
                        let timer1 = setTimeout(() => {
                            __p(["robotArmLeft1__holder" , "updateState"])({prop:"stage2" , value:false});
                            clearTimeout(timer1);

                            let timer2 = setTimeout(() => {
                                __p(["robotArmLeft1__holder" , "updateState"])({prop:"stage1" , value:false});
                                clearTimeout(timer2);
                            }, 500);
                        }, 500);
                    },
                }
            }
        }
    )
}

__SYD.robotArmLeft1 = () =>{
    return __c(
        "div",
        {
            style:"position:absolute;top:50%;transform:translateY(-50%);left:0;z-index:100;",
            class:"metallicHolder_left1"
        }
    )
}


__SYD.robotRodLeft1 = () =>{
    return __c(
        "div",
        {
            style:`position:absolute;top:50%;transform:translateY(-50%);height:7px;width:${__p(["robotArmLeft1__holder" , "stage1"],false) ? "30%" : "0%"};z-index:50;`,
            class:"metallicRod"
        }
    )
}

__SYD.robotJointLeft1 = () =>{
    return __c(
        "div",
        {
            style:`position:absolute;z-index:110;left:${__p(["robotArmLeft1__holder" , "stage1"],false) ? "30%" : "0%"};top:50%;transform:translateY(-50%) translateX(-50%)`,
            class:"metallicJoint"
        }
    )
}

__SYD.robotRodLeft2 = () =>{
    return __c(
        "div",
        {
            style:`position:absolute;top:50%;left:${__p(["robotArmLeft1__holder" , "stage1"],false) ? "30%" : "0%"};transform:translateX(-50%) rotateZ(0deg);transform-origin:top center;height:${__p(["robotArmLeft1__holder" , "stage2"],false) ? "50px" : "0px"};width:7px;z-index:50;`,
            class:`metallicRod ${__p(["robotArmLeft1__holder" , "stage3"],false) ? "swing_1" : ""}`
        },
        [
            __SYD.robotRodleft2__display_panel()
        ]
    )
}

__SYD.robotRodleft2__display_panel = () =>{
    return __c(
        "div",
        {
            style:`position:absolute;top:calc(100% - 5px);left:50%;transform:translateX(${__p(["container" , "eSize"],false) ? "-10%" : "-50%"});height:${__p(["robotArmLeft1__holder" , "stage3"],false) ? __p(["container" , "displaySize"],["200px" , "400px"])[0] : "0px"};width:${__p(["robotArmLeft1__holder" , "stage2"],false) ? __p(["container" , "displaySize"],["200px" , "400px"])[1] : "0px"};overflow:hidden;display:flex;flex-direction:column;gap:10px;align-items:center;justify-conetnt:center;`,
            class:"display-panel"
        },
        [
            // __c(
            //     "div",
            //     {
            //         style:""
            //     },
            //     [
                    __c("p" , {style:"font-size:20px;text-shadow:unset;text-align:center;width:calc(100% - 20px);" , class:"title"},["About"]),
            //     ]
            // ),
            // __c(
            //     "div",
            //     {
            //         style:""
            //     },
            //     [
                    __c("p" , {style:"font-size:12px;text-shadow:unset;text-align:center;max-height:100px;overflow: hidden; text-overflow: ellipsis;max-width:calc(100% - 20px);" , class:"title"},["Wreck the rich , empower the underdogs"]),
            //     ]
            // ),
            // __c(
            //     "div",
            //     {
            //         style:"font-size:12px;color:#171717;margin-top:10px;max-height:100px;white-space: nowrap;overflow: hidden; text-overflow: ellipsis;width:100%;max-width:calc(100% - 20px);"
            //     },
            //     [
            //         "In the world of Mario Kart, nobody is safe. One second you're winning — the next, a Blue Shell crashes everything."
            //     ]
            // ),
        ],
        {
            events:{
                onclick: () =>{
                    clearTimeout(__p(["container" , "closeArmTimer"]));
                    const state = __g("container");
                    state.panels_fullScreen = true;
                    state.robotArmIndex = 0;
                    __u("container" , {type:"a" , value:state})

                    __p(["mainOverlayContents" , "updateState"])({prop:"tab" , value:0})
                }
            }
        }
    )
}