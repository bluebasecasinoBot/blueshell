import { __c, __g, __m, __p, __SYD, __u } from "./sydneyDom_v3.js"

__SYD.mainOverlayContents = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;background:rgba(0,0,0,.8);display:${__p(["container" , "panels_fullScreen"],false) ? "flex" : "none"};justify-content:center;align-items:center;position:fixed;top:0;left:0;z-index:5000;`
        },
        [
            __SYD.mainOverlay_about(),
            __SYD.mainOverlay_tokenomics(),
            __SYD.mainOverlay_roadmap(),
            __SYD.mainOverlay_game(),
        ],
        {
            createState:{
                stateName:"mainOverlayContents",
                state:{
                    headerSize:"50px",
                    mainTextSize:"20px",
                    tab:0,
                    updateState:({prop , value}) =>{
                        const state = __g("mainOverlayContents");
                        state[`${prop}`] = value;
                        __u("mainOverlayContents" , {type:"a" , value:state})
                    }
                }
            },
            mediaQuery:{
                query:[
                    {size:"<1000px" , prop:{headerSize:"25px" ,mainTextSize:"14px"}}
                ],
                defState:{headerSize:"50px" , mainTextSize:"16px"}
            }
        }
    )
}

__SYD.mainOverlay_about = () =>{
    return __c(
        "div",
        {
            style:`height:90%;width:90%;max-height:1000px;max-width:1000px;position:relative;display:${__p(["mainOverlayContents" , "tab"],0) === 0 ? "flex" : "none"};flex-direction:column;gap:10px;justify-content:center;align-items:center;padding:20px;overflow:hidden;`,
            class:`display-panel ${__p(["container" , "panels_fullScreen"],false) ? "drop_down_height" : ""}`
        },
        [
            __c(
                "div",
                {
                    style:"height:40px;width:40px;align-self:flex-end;position:sticky;top:10px;right:10px;display:flex;justify-content:center;align-items:center;",
                    class:"mech_button"
                },
                [
                    __c("i",{style:"font-size:20px;color:#2c8ff1;",class:"fa-solid fa-xmark"})
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
            ),

            __c("p" , {style:`font-size:${__p(["mainOverlayContents" , "headerSize"],"50px")};text-decoration:underline;text-shadow:unset;text-align:center;width:calc(100% - 20px);` , class:"title"},["About Blueshell"]),

            __c("p" , {style:`font-size:${Number(__p(["mainOverlayContents" , "mainTextSize"],"20px").split("px")[0]) + 4}px;text-shadow:unset;text-align:center;max-width:800px;` , class:"title"},["Wreck the rich , empower the underdogs"]),

            __c(
                "div",
                {
                    style:"height:100%;width:100%;max-width:800px;display:flex;flex-direction:column;gap:12px;margin-top:20px;align-items:center;justify-content:flex-start;"
                },
                [
                    __c("p" , {style:`font-size:${__p(["mainOverlayContents" , "mainTextSize"],"20px")};text-shadow:unset;text-align:center;width:100%;max-width:800px;font-weight:300;` , class:"norm_text"},["In the world of Mario Kart, nobody is safe. One second you're winning — the next, a Blue Shell crashes everything.That chaos? We’re bringing it to Base chain.$BLUESHELL is more than just a meme coin — it’s a rebellion.A weapon for underdogs, degens, and everyone who's ever been rugged by whales."]),
            
                    __c("p" , {style:`font-size:${__p(["mainOverlayContents" , "mainTextSize"],"20px")};text-shadow:unset;text-align:center;width:100%;max-width:800px;font-weight:300;` , class:"norm_text"},["The closer you are to the top, the harder you fall. The farther behind you are, the more power you gain."]),


                ]
            )
        ]
    )
}

__SYD.mainOverlay_tokenomics = () =>{
    return __c(
        "div",
        {
            style:`height:90%;width:90%;max-height:1000px;max-width:1000px;position:relative;display:${__p(["mainOverlayContents" , "tab"],0) === 1 ? "flex" : "none"};flex-direction:column;gap:10px;justify-content:flex-start;align-items:center;padding:20px;overflow-x:hidden;overflow-y:scroll;`,
            class:`display-panel ${__p(["container" , "panels_fullScreen"],false) ? "drop_down_height" : ""}`
        },
        [
            __c(
                "div",
                {
                    style:"height:40px;width:40px;align-self:flex-end;position:sticky;top:10px;right:10px;display:flex;justify-content:center;align-items:center;",
                    class:"mech_button"
                },
                [
                    __c("i",{style:"font-size:20px;color:#2c8ff1;",class:"fa-solid fa-xmark"})
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
            ),

            __c("p" , {style:`font-size:${__p(["mainOverlayContents" , "headerSize"],"50px")};text-decoration:underline;text-shadow:unset;text-align:center;width:calc(100% - 20px);` , class:"title"},["Blueshell Tokenomics"]),

            __c("p" , {style:`font-size:${Number(__p(["mainOverlayContents" , "mainTextSize"],"20px").split("px")[0]) + 4}px;text-shadow:unset;text-align:center;max-width:800px;` , class:"title"},["Fueling the Shell Strike: Fair, Ruthless, and Built for the Underdogs"]),

            __c(
                "ul",
                {
                    style:"height:100%;width:100%;max-width:800px;display:flex;flex-direction:column;gap:12px;margin-top:20px;align-items:center;justify-content:flex-start;"
                },
                [
                    __c("li" , {style:`font-size:${__p(["mainOverlayContents" , "mainTextSize"],"20px")};text-shadow:unset;text-align:left;width:100%;max-width:800px;font-weight:300;display:flex;flex-direction:column;gap:5px` , class:"norm_text"},[
                        __c("li",{},["Fair Launch: "]) , __c("p",{style:"padding-left:20px;"},["No private sales, no VC allocations. Everyone starts at the same line."])
                    ]),

                    __c("li" , {style:`font-size:${__p(["mainOverlayContents" , "mainTextSize"],"20px")};text-shadow:unset;text-align:left;width:100%;max-width:800px;font-weight:300;display:flex;flex-direction:column;gap:5px` , class:"norm_text"},[
                        __c("li",{},["Community First: "]) , __c("p",{style:"padding-left:20px;"},["Majority of supply aimed at rewarding players, holders, and contributors."])
                    ]),

                    __c("li" , {style:`font-size:${__p(["mainOverlayContents" , "mainTextSize"],"20px")};text-shadow:unset;text-align:left;width:100%;max-width:800px;font-weight:300;display:flex;flex-direction:column;gap:5px` , class:"norm_text"},[
                        __c("li",{},["Utility Driven: "]) , __c("p",{style:"padding-left:20px;"},["Token integrated into Shell Strike for rewards, upgrades, and governance."])
                    ])
                ]
            )
        ]
    )
}



__SYD.mainOverlay_roadmap = () =>{
    return __c(
        "div",
        {
            style:`height:90%;width:90%;max-height:1000px;max-width:1000px;position:relative;display:${__p(["mainOverlayContents" , "tab"],0) === 2 ? "flex" : "none"};flex-direction:column;gap:10px;justify-content:flex-start;align-items:center;padding:20px;overflow-x:hidden;overflow-y:scroll;`,
            class:`display-panel ${__p(["container" , "panels_fullScreen"],false) ? "drop_down_height" : ""}`
        },
        [
            __c(
                "div",
                {
                    style:"height:40px;width:40px;align-self:flex-end;position:sticky;top:10px;right:10px;display:flex;justify-content:center;align-items:center;",
                    class:"mech_button"
                },
                [
                    __c("i",{style:"font-size:20px;color:#2c8ff1;",class:"fa-solid fa-xmark"})
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
            ),

            __c("p" , {style:`font-size:${__p(["mainOverlayContents" , "headerSize"],"50px")};text-decoration:underline;text-shadow:unset;text-align:center;width:calc(100% - 20px);` , class:"title"},["Blueshell Roadmap"]),

            __c("p" , {style:`font-size:${Number(__p(["mainOverlayContents" , "mainTextSize"],"20px").split("px")[0]) + 4}px;text-shadow:unset;text-align:center;max-width:800px;` , class:"title"},["The Road to Total Degen Domination."]),

            __c(
                "ul",
                {
                    style:"height:fit-content;width:100%;max-width:800px;display:flex;flex-direction:column;gap:30px;margin-top:20px;align-items:center;justify-content:center;"
                },
                [
                    __c("li" , {style:`font-size:${__p(["mainOverlayContents" , "mainTextSize"],"20px")};text-shadow:unset;text-align:left;width:100%;max-width:800px;font-weight:300;display:flex;flex-direction:column;gap:5px` , class:"norm_text"},[
                        __c("li",{},["Phase 1: Launch & Chaos"]) , 
                        __c(
                            "ul",
                            {style:""},
                            [
                                __c("li",{style:"list-style-type:disclosure-closed;margin-left:30px;"},["Deploy $BLUESHELL on Base chain"]),
                                __c("li",{style:"list-style-type:disclosure-closed;margin-left:30px;"},["Release the Manifesto"]),
                                __c("li",{style:"list-style-type:disclosure-closed;margin-left:30px;"},["Meme storm across Crypto Twitter"]),
                                __c("li",{style:"list-style-type:disclosure-closed;margin-left:30px;"},["Stealth launch with fair, public distribution"]),
                                __c("li",{style:"list-style-type:disclosure-closed;margin-left:30px;"},["Community-friendly DEX listings"])
                            ]
                        )
                    ]),

                    __c("li" , {style:`font-size:${__p(["mainOverlayContents" , "mainTextSize"],"20px")};text-shadow:unset;text-align:left;width:100%;max-width:800px;font-weight:300;display:flex;flex-direction:column;gap:5px` , class:"norm_text"},[
                        __c("li",{},["Phase 2: Shell Strike v1"]) , 
                        __c(
                            "ul",
                            {style:""},
                            [
                                __c("li",{style:"list-style-type:disclosure-closed;margin-left:30px;"},["Release Shell Strike: browser-based mini-game"]),
                                __c("li",{style:"list-style-type:disclosure-closed;margin-left:30px;"},["Link wallet rewards (high scores = perks)"]),
                                __c("li",{style:"list-style-type:disclosure-closed;margin-left:30px;"},["First leaderboard competitions (win tokens + NFTs)"]),
                                __c("li",{style:"list-style-type:disclosure-closed;margin-left:30px;"},[`Launch "Blue Shell Strike" events targeting top wallets`])
                            ]
                        )
                    ]),

                    __c("li" , {style:`font-size:${__p(["mainOverlayContents" , "mainTextSize"],"20px")};text-shadow:unset;text-align:left;width:100%;max-width:800px;font-weight:300;display:flex;flex-direction:column;gap:5px` , class:"norm_text"},[
                        __c("li",{},["Phase 3: Expansion Pack"]) , 
                        __c(
                            "ul",
                            {style:""},
                            [
                                __c("li",{style:"list-style-type:disclosure-closed;margin-left:30px;"},["New Shell Strike levels, bosses, and power-ups"]),
                                __c("li",{style:"list-style-type:disclosure-closed;margin-left:30px;"},["NFT utilities integrated into gameplay"]),
                                __c("li",{style:"list-style-type:disclosure-closed;margin-left:30px;"},["Mobile version beta testing"]),
                                __c("li",{style:"list-style-type:disclosure-closed;margin-left:30px;"},["Begin community governance rollout"])
                            ]
                        )
                    ]),

                    __c("li" , {style:`font-size:${__p(["mainOverlayContents" , "mainTextSize"],"20px")};text-shadow:unset;text-align:left;width:100%;max-width:800px;font-weight:300;display:flex;flex-direction:column;gap:5px` , class:"norm_text"},[
                        __c("li",{},["Phase 4: Full Degen Mode"]) , 
                        __c(
                            "ul",
                            {style:""},
                            [
                                __c("li",{style:"list-style-type:disclosure-closed;margin-left:30px;"},["Weekly challenges and power-up drops"]),
                                __c("li",{style:"list-style-type:disclosure-closed;margin-left:30px;"},["Staking programs & holder tier systems"]),
                                __c("li",{style:"list-style-type:disclosure-closed;margin-left:30px;"},["CEX listings and mass adoption pushes"]),
                                __c("li",{style:"list-style-type:disclosure-closed;margin-left:30px;"},["Surprise shell drops (airdrops, burns, partnerships)"])
                            ]
                        )
                    ]),
                ]
            )
        ]
    )
}


__SYD.mainOverlay_game = () =>{
    return __c(
        "div",
        {
            style:`height:90%;width:90%;max-height:1000px;max-width:1000px;position:relative;display:${__p(["mainOverlayContents" , "tab"],0) === 3 ? "flex" : "none"};flex-direction:column;gap:10px;justify-content:flex-start;align-items:center;overflow-x:hidden;overflow-y:scroll;`,
            class:`display-panel ${__p(["container" , "panels_fullScreen"],false) ? "drop_down_height" : ""}`
        },
        [
            __c(
                "div",
                {
                    style:"height:40px;width:40px;align-self:flex-end;position:sticky;top:10px;right:10px;display:flex;justify-content:center;align-items:center;",
                    class:"mech_button"
                },
                [
                    __c("i",{style:"font-size:20px;color:#2c8ff1;",class:"fa-solid fa-xmark"})
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
            ),

            __c("p" , {style:`font-size:${__p(["mainOverlayContents" , "headerSize"],"50px")};text-decoration:underline;text-shadow:unset;text-align:center;width:calc(100% - 20px);` , class:"title"},["Blueshell Game"]),

            __c("div",{style:"height:100%;width:100%;background-image:url(./assets/gameMain.png);"},[],{genericStyle:["bg_fit"]})
        ]
    )
}