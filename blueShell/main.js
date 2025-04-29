import { __c, __g, __m, __p, __SYD, __u, manage_mediaQuery } from "./sydneyDom_v3.js"
import "./shellUtils1.js"
import "./shellUtils2.js"
import "./shellUtils3.js"
import "./shellUtils4.js"
import "./mainOverlay.js"

__SYD.container = () =>{
    return __c(
        "div",
        {
            style:"height:100vh;width:100vw;overflow:hidden;position:relative;background-image:url(./assets/garage.jpg);font-family:normFont;"
        },
        [
            __SYD.floatingBlueShellCont(),
            __SYD.titleText(),
            __SYD.frontalPage(),
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
                            // const aud = new Audio("./assets/gearSound.flac");
                            // aud.loop = false;
                            const ind = __p(["container" , "robotArmIndex"],0);
                            const arms = __p(["container" , "arms"],["robotArmLeft1__holder" , "robotArmLeft1__holder_b" , "robotArmright1__holder" , "robotArmright1__holder_b"]);
                            // aud.volume = .3
                            // aud.play();
                            __p([arms[ind] , "animateBoard_forward"])();
                            // setTimeout(() => {
                            //     aud.pause();
                            // }, 1500);
                            

                            let timer2 = setTimeout(() => {
                                // const aud2 = new Audio("./assets/gearSound.flac");
                                // aud2.volume = .3
                                // aud2.play();
                                // setTimeout(() => {
                                //     aud2.pause();
                                // }, 1500);

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

__SYD.frontalPage = () =>{
    return __c(
        "div",
        {
            style:`height:100vh;width:100vw;position:fixed;top:0;left:0;background:rgba(0,0,0,.9);backdrop-filter:blur(2px);display:${__p(["frontalPage" , "display"],"flex")};justify-content:center;align-items:center;z-index:9000;`
        },
        [
            __c(
                "div",
                {
                    style:"color:#fff;font-family:title;",
                    class:"mech_button"
                },
                [
                    "Enter"
                ],
                {
                    events:{
                        onclick: e =>{
                            const state = __g("frontalPage");
                            state.display = "none";
                            __u("frontalPage" , {type:"a" , value:state});

                            const aud = new Audio("./assets/mainSound.m4a");
                            aud.loop = true;
                            aud.volume = .2;
                            aud.play();
                        }
                    }
                }
            )
        ],
        {
            createState:{
                stateName:"frontalPage",
                state:{
                    display:"flex"
                }
            }
        }
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
            style:"position:absolute;top:60%;left:50%;transform:translateX(-50%);width:100%;height:fit-content;display:flex;justify-content:center;align-items:center;",
            class:`${__p(["floatingBlueShellCont" , "animationClass"],"")}`
        },
        [
            __c(
                "div",
                {
                    style:`background-image:url(./assets/${__p(["floatingBlueShellCont" , "animationClass"],"") === "animateBall" ? "blueshell2.png" : "blueshell.png"});`,
                    class:"blueShell"
                }
            )
        ],
        {
            createState:{
                stateName:"floatingBlueShellCont",
                state:{
                    animationClass:""
                }
            },
            events:{
                onclick:e =>{
                    const state = __g("floatingBlueShellCont");
                    state.animationClass = "animateBall";
                    __u("floatingBlueShellCont" , {type:"a" , value:state});

                    let timer = setTimeout(() => {
                        const state = __g("floatingBlueShellCont");
                        state.animationClass = "";
                        __u("floatingBlueShellCont" , {type:"a" , value:state});
                    }, 3000);
                }
            }
        }
    )
}

__m(__SYD.container() , () =>{
    manage_mediaQuery(window.innerWidth);

    // // let timer = setTimeout(() => {
        // __p(["robotArmLeft1__holder" , "animateBoard_forward"])();
        // __p(["robotArmLeft1__holder_b" , "animateBoard_forward"])();
        // __p(["robotArmright1__holder" , "animateBoard_forward"])();
        // __p(["robotArmright1__holder_b" , "animateBoard_forward"])();


    //     // let timer2 = setTimeout(() => {
    //     //     // __p(["robotArmLeft1__holder_b" , "animateBoard_reverse"])();

    //     //     clearTimeout(timer2)
    //     // }, 3000);

    //     clearTimeout(timer)
    // }, 500);

    __p(["container" , "renderArmFunc"])()
})