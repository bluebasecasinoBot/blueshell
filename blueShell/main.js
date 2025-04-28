import { __c, __g, __m, __p, __SYD, __u, manage_mediaQuery } from "./sydneyDom_v3.js"
import "./shellUtils1.js"
import "./shellUtils2.js"
import "./shellUtils3.js"
import "./shellUtils4.js"

__SYD.container = () =>{
    return __c(
        "div",
        {
            style:"height:100vh;width:100vw;overflow:hidden;position:relative;background-image:url(./assets/garage.jpg);font-family:normFont;"
        },
        [
            __SYD.floatingBlueShellCont(),
            __SYD.titleText(),
            __SYD.mainOverlayContents(),
            __SYD.robotArmLeft1__holder(),
            __SYD.robotArmLeft1__holder_b(),
            __SYD.robotArmright1__holder(),
            __SYD.robotArmright1__holder_b()
            // __SYD.robotArmLeft2()
        ],
        {
            genericStyle:["bg_cover"],
            mediaQuery:{
                query:[
                    {size:"<700px" , prop:{titleFont:"2rem" , displaySize:["150px" , "220px"]}}
                ],
                defState:{titleFont:"4rem" , displaySize:["200px" , "400px"]}
            },
            createState:{
                stateName:"container",
                state:{
                    robotArmIndex:0,
                    renderArm:true,
                    panels_fullScreen:false,
                    fullScreenIndex:0,
                    closeArmTimer:null,
                    titleFont:"4rem",
                    displaySize:["200px" , "400px"],
                    arms:["robotArmLeft1__holder" , "robotArmLeft1__holder_b" , "robotArmright1__holder" , "robotArmright1__holder_b"],
                    updateState:({prop , value}) =>{
                        const state = __g("container");
                        state[`${prop}`] = value;
                        __u("container" , {type:"a" , value:state})
                    },
                    renderArmFunc:() =>{
                        let defTimer = setTimeout(() => {
                            render_min();
                            clearTimeout(defTimer)
                        }, 50);

                        function render_min()
                        {
                            const ind = __p(["container" , "robotArmIndex"],0);
                            const arms = __p(["container" , "arms"],["robotArmLeft1__holder" , "robotArmLeft1__holder_b" , "robotArmright1__holder" , "robotArmright1__holder_b"]);

                            __p([arms[ind] , "animateBoard_forward"])();

                            let timer2 = setTimeout(() => {
                                __p([arms[ind] , "animateBoard_reverse"])();
                                clearTimeout(__p(["container" , "closeArmTimer"]));

                                __p(["container" , "updateState"])({prop:"robotArmIndex" , value:ind === arms.length-1 ? 0 : ind+1 });

                                render_min();
                            }, 5000);
                            __p(["container" , "updateState"])({prop:"closeArmTimer" , value:timer2 })
                            

                        }
                    }
                }
            }
        }
    )
}

__SYD.mainOverlayContents = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;background:rgba(0,0,0,.8);display:${__p(["container" , "panels_fullScreen"],false) ? "flex" : "none"};justify-content:center;align-items:center;position:fixed;top:0;left:0;z-index:10000;`
        },
        [
            __c(
                "div",
                {
                    style:`height:90%;width:90%;max-height:1000px;max-width:1000px;position:relative;`,
                    class:"display-panel"
                },
                [
                    __c(
                        "div",
                        {
                            style:"height:20px;width:20px;position:absolute;top:10px;right:10px;display:flex;justify-content:center;align-items:center;",
                            class:"mech_button"
                        },
                        [
                            __c("i",{style:"font-size:16px;color:#2c8ff1;",class:"fa-solid fa-xmark"})
                        ],
                        {
                            events:{
                                onclick: () =>{
                                    const state = __g("container");
                                    state.panels_fullScreen = false;
                                    __u("container" , {type:"a" , value:state});

                                    __p(["container" , "renderArmFunc"])()
                                }
                            }
                        }
                    )
                ]
            )
        ]
    )
}

__SYD.titleText = () =>{
    return __c(
        "div",
        {
            style:`min-width:max-content;position:absolute;top:5px;left:50%;transform:translateX(-50%);z-index:999;font-size:${__p(["container" , "titleFont"],"4rem")}`,
            class:"title"
        },
        [
            "BlueShell"
        ]
    )
}

__SYD.floatingBlueShellCont = () =>{
    return __c(
        "div",
        {
            style:"position:absolute;top:60%;left:50%;transform:translateX(-50%);width:100%;height:fit-content;display:flex;justify-content:center;align-items:center;"
        },
        [
            __c(
                "div",
                {
                    class:"blueShell"
                }
            )
        ]
    )
}

__m(__SYD.container() , () =>{
    manage_mediaQuery(window.innerWidth);

    // // let timer = setTimeout(() => {
    //     __p(["robotArmLeft1__holder" , "animateBoard_forward"])();
    //     __p(["robotArmLeft1__holder_b" , "animateBoard_forward"])();
    //     __p(["robotArmright1__holder" , "animateBoard_forward"])();
    //     __p(["robotArmright1__holder_b" , "animateBoard_forward"])();


    //     // let timer2 = setTimeout(() => {
    //     //     // __p(["robotArmLeft1__holder_b" , "animateBoard_reverse"])();

    //     //     clearTimeout(timer2)
    //     // }, 3000);

    //     clearTimeout(timer)
    // }, 500);

    __p(["container" , "renderArmFunc"])()
})