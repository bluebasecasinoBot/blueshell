import { __c, __g, __p, __SYD, __u } from "./sydneyDom_v3.js";

__SYD.robotArmright1__holder_b = () =>{
    return __c(
        "div",
        {
            style:"position:absolute;bottom:10%;right:0;width:100%;",
            title:"section 4"
        },
        [
            __SYD.robotArmright1_b(),
            __SYD.robotRodright1_b(),
            __SYD.robotJointright1_b(),
            __SYD.robotRodright2_b()
        ],
        {
            createState:{
                stateName:"robotArmright1__holder_b",
                state:{
                    stage1:false,
                    stage2:false,
                    stage3:false,
                    updateState:({prop , value}) =>{
                        const state = __g("robotArmright1__holder_b");
                        state[`${prop}`] = value;
                        __u("robotArmright1__holder_b" , {type:"a" , value:state})
                    },
                    animateBoard_forward:() =>{
                        __p(["robotArmright1__holder_b" , "updateState"])({prop:"stage1" , value:true});
                        let timer1 = setTimeout(() => {
                            __p(["robotArmright1__holder_b" , "updateState"])({prop:"stage2" , value:true});
                            clearTimeout(timer1);

                            let timer2 = setTimeout(() => {
                                __p(["robotArmright1__holder_b" , "updateState"])({prop:"stage3" , value:true});
                                clearTimeout(timer2);
                            }, 500);
                        }, 500);
                    },
                    animateBoard_reverse:() =>{
                        __p(["robotArmright1__holder_b" , "updateState"])({prop:"stage3" , value:false});
                        let timer1 = setTimeout(() => {
                            __p(["robotArmright1__holder_b" , "updateState"])({prop:"stage2" , value:false});
                            clearTimeout(timer1);

                            let timer2 = setTimeout(() => {
                                __p(["robotArmright1__holder_b" , "updateState"])({prop:"stage1" , value:false});
                                clearTimeout(timer2);
                            }, 500);
                        }, 500);
                    }
                }
            }
        }
    )
}

__SYD.robotArmright1_b = () =>{
    return __c(
        "div",
        {
            style:"position:absolute;top:50%;transform:translateY(-50%);right:0;z-index:100;",
            class:"metallicHolder_right1"
        }
    )
}


__SYD.robotRodright1_b = () =>{
    return __c(
        "div",
        {
            style:`position:absolute;top:50%;right:0px;transform:translateY(-50%);height:7px;width:${__p(["robotArmright1__holder_b" , "stage1"],false) ? "30%" : "0%"};z-index:50;`,
            class:"metallicRod"
        }
    )
}

__SYD.robotJointright1_b = () =>{
    return __c(
        "div",
        {
            style:`position:absolute;z-index:110;right:${__p(["robotArmright1__holder_b" , "stage1"],false) ? "30%" : "0%"};top:50%;transform:translateY(-50%) translateX(50%)`,
            class:"metallicJoint"
        }
    )
}

__SYD.robotRodright2_b = () =>{
    return __c(
        "div",
        {
            style:`position:absolute;top:50%;right:${__p(["robotArmright1__holder_b" , "stage1"],false) ? "30%" : "0%"};transform:translateX(50%) rotateZ(180deg);transform-origin:top center;height:${__p(["robotArmright1__holder_b" , "stage2"],false) ? "50px" : "0px"};width:7px;z-index:50;`,
            class:`metallicRod ${__p(["robotArmright1__holder_b" , "stage3"],false) ? "swing_4" : ""}`
        },
        [
            __SYD.robotRodright2__display_panel_b()
        ]
    )
}

__SYD.robotRodright2__display_panel_b = () =>{
    return __c(
        "div",
        {
            style:`position:absolute;top:calc(100% - 5px);left:50%;transform:translateX(${__p(["container" , "eSize"],false) ? "-10%" : "-50%"}) rotateZ(180deg);height:${__p(["robotArmright1__holder_b" , "stage3"],false) ? __p(["container" , "displaySize"],["200px" , "400px"])[0] : "0px"};width:${__p(["robotArmright1__holder_b" , "stage2"],false) ? __p(["container" , "displaySize"],["200px" , "400px"])[1] : "0px"};overflow:hidden;display:flex;flex-direction:column;gap:10px;align-items:center;`,
            class:"display-panel"
        },
        [
            // __c(
            //     "div",
            //     {
            //         style:""
            //     },
            //     [
                    __c("p" , {style:"font-size:20px;text-shadow:unset;text-align:center;width:calc(100% - 20px);" , class:"title"},["Blueshell Game"]),
            //     ]
            // ),
            // __c(
            //     "div",
            //     {
            //         style:""
            //     },
            //     [
                    __c("p" , {style:"font-size:12px;text-shadow:unset;text-align:center;max-height:100px;overflow: hidden; text-overflow: ellipsis;width:calc(100% - 20px);" , class:"title"},["Coming soon ..."]),
            //     ]
            // ),
            // __c(
            //     "div",
            //     {
            //         style:"height:20px;width:20px;position:absolute;bottom:10px;left:10px;display:flex;justify-content:center;align-items:center;",
            //         class:"mech_button"
            //     },
            //     [
            //         __c("i",{style:"font-size:16px;color:#2c8ff1;",class:"fa-solid fa-maximize"})
            //     ]
            // )
        ],
        {
            events:{
                onclick: () =>{
                    clearTimeout(__p(["container" , "closeArmTimer"]));
                    const state = __g("container");
                    state.panels_fullScreen = true;
                    state.robotArmIndex = 3;
                    __u("container" , {type:"a" , value:state})

                    __p(["mainOverlayContents" , "updateState"])({prop:"tab" , value:3})
                }
            }
        }
    )
}