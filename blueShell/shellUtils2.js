import { __c, __g, __p, __SYD, __u } from "./sydneyDom_v3.js";

__SYD.robotArmLeft1__holder_b = () =>{
    return __c(
        "div",
        {
            style:"position:absolute;bottom:10%;left:0;width:100%;",
            title:"section 2"
        },
        [
            __SYD.robotArmLeft1_b(),
            __SYD.robotRodLeft1_b(),
            __SYD.robotJointLeft1_b(),
            __SYD.robotRodLeft2_b()
        ],
        {
            createState:{
                stateName:"robotArmLeft1__holder_b",
                state:{
                    stage1:false,
                    stage2:false,
                    stage3:false,
                    updateState:({prop , value}) =>{
                        const state = __g("robotArmLeft1__holder_b");
                        state[`${prop}`] = value;
                        __u("robotArmLeft1__holder_b" , {type:"a" , value:state})
                    },
                    animateBoard_forward:() =>{
                        __p(["robotArmLeft1__holder_b" , "updateState"])({prop:"stage1" , value:true});
                        let timer1 = setTimeout(() => {
                            __p(["robotArmLeft1__holder_b" , "updateState"])({prop:"stage2" , value:true});
                            clearTimeout(timer1);

                            let timer2 = setTimeout(() => {
                                __p(["robotArmLeft1__holder_b" , "updateState"])({prop:"stage3" , value:true});
                                clearTimeout(timer2);
                            }, 500);
                        }, 500);
                    },
                    animateBoard_reverse:() =>{
                        __p(["robotArmLeft1__holder_b" , "updateState"])({prop:"stage3" , value:false});
                        let timer1 = setTimeout(() => {
                            __p(["robotArmLeft1__holder_b" , "updateState"])({prop:"stage2" , value:false});
                            clearTimeout(timer1);

                            let timer2 = setTimeout(() => {
                                __p(["robotArmLeft1__holder_b" , "updateState"])({prop:"stage1" , value:false});
                                clearTimeout(timer2);
                            }, 500);
                        }, 500);
                    }
                }
            }
        }
    )
}

__SYD.robotArmLeft1_b = () =>{
    return __c(
        "div",
        {
            style:"position:absolute;top:50%;transform:translateY(-50%);left:0;z-index:100;",
            class:"metallicHolder_left1"
        }
    )
}


__SYD.robotRodLeft1_b = () =>{
    return __c(
        "div",
        {
            style:`position:absolute;top:50%;transform:translateY(-50%);height:7px;width:${__p(["robotArmLeft1__holder_b" , "stage1"],false) ? "30%" : "0%"};z-index:50;`,
            class:"metallicRod"
        }
    )
}

__SYD.robotJointLeft1_b = () =>{
    return __c(
        "div",
        {
            style:`position:absolute;z-index:110;left:${__p(["robotArmLeft1__holder_b" , "stage1"],false) ? "30%" : "0%"};top:50%;transform:translateY(-50%) translateX(-50%)`,
            class:"metallicJoint"
        }
    )
}

__SYD.robotRodLeft2_b = () =>{
    return __c(
        "div",
        {
            style:`position:absolute;top:50%;left:${__p(["robotArmLeft1__holder_b" , "stage1"],false) ? "30%" : "0%"};transform:translateX(-50%) rotateZ(180deg);transform-origin:top center;height:${__p(["robotArmLeft1__holder_b" , "stage2"],false) ? "50px" : "0px"};width:7px;z-index:50;`,
            class:`metallicRod ${__p(["robotArmLeft1__holder_b" , "stage3"],false) ? "swing_2" : ""}`
        },
        [
            __SYD.robotRodleft2__display_panel_b()
        ]
    )
}

__SYD.robotRodleft2__display_panel_b = () =>{
    return __c(
        "div",
        {
            style:`position:absolute;top:calc(100% - 5px);left:50%;transform:translateX(${__p(["container" , "eSize"],false) ? "-90%" : "-50%"}) rotateZ(180deg);height:${__p(["robotArmLeft1__holder_b" , "stage3"],false) ? __p(["container" , "displaySize"],["200px" , "400px"])[0] : "0px"};width:${__p(["robotArmLeft1__holder_b" , "stage2"],false) ? __p(["container" , "displaySize"],["200px" , "400px"])[1] : "0px"};overflow:hidden;display:flex;flex-direction:column;gap:10px;align-items:center;`,
            class:"display-panel"
        },
        [
            // __c(
            //     "div",
            //     {
            //         style:""
            //     },
            //     [
                    __c("p" , {style:"font-size:20px;text-shadow:unset;text-align:center;width:calc(100% - 20px);" , class:"title"},["Tokenomics"]),
            //     ]
            // ),
            // __c(
            //     "div",
            //     {
            //         style:""
            //     },
            //     [
                    __c("p" , {style:"font-size:12px;text-shadow:unset;text-align:center;max-height:100px;overflow: hidden; text-overflow: ellipsis;width:calc(100% - 20px);" , class:"title"},["Fueling the Shell Strike: Fair, Ruthless, and Built for the Underdogs"]),
            //     ]
            // ),
        ],
        {
            events:{
                onclick: () =>{
                    clearTimeout(__p(["container" , "closeArmTimer"]));
                    const state = __g("container");
                    state.panels_fullScreen = true;
                    state.robotArmIndex = 1;
                    __u("container" , {type:"a" , value:state})

                    __p(["mainOverlayContents" , "updateState"])({prop:"tab" , value:1})
                }
            }
        }
    )
}