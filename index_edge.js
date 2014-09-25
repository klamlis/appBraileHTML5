/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Text',
                type: 'text',
                rect: ['14px', '12px','auto','auto','auto', 'auto'],
                text: "App Braile",
                font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'btn_1',
                type: 'rect',
                rect: ['294', '64','auto','auto','auto', 'auto']
            },
            {
                id: 'btn_2',
                type: 'rect',
                rect: ['257', '200','auto','auto','auto', 'auto']
            },
            {
                id: 'btn_3',
                type: 'rect',
                rect: ['319', '200','auto','auto','auto', 'auto']
            },
            {
                id: 'btn_4',
                type: 'rect',
                rect: ['219', '64','auto','auto','auto', 'auto']
            },
            {
                id: 'btn_5',
                type: 'rect',
                rect: ['243', '162','auto','auto','auto', 'auto']
            },
            {
                id: 'btn_6',
                type: 'rect',
                rect: ['220', '209','auto','auto','auto', 'auto']
            },
            {
                id: 'texto',
                type: 'text',
                rect: ['124px', '266px','319px','111px','auto', 'auto'],
                text: "Texto",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(53,53,53,1)", "400", "none", "normal"]
            },
            {
                id: 'imprimir',
                type: 'rect',
                rect: ['390', '127','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            }],
            symbolInstances: [
            {
                id: 'btn_6',
                symbolName: 'btn_6'
            },
            {
                id: 'btn_3',
                symbolName: 'btn_3'
            },
            {
                id: 'btn_2',
                symbolName: 'btn_2'
            },
            {
                id: 'imprimir',
                symbolName: 'imprimir'
            },
            {
                id: 'btn_4',
                symbolName: 'btn_4'
            },
            {
                id: 'btn_5',
                symbolName: 'btn_5'
            },
            {
                id: 'btn_1',
                symbolName: 'btn_1'
            }
            ]
        },
    states: {
        "Base State": {
            "${_btn_2}": [
                ["style", "left", '294px'],
                ["style", "top", '121px']
            ],
            "${_btn_6}": [
                ["style", "left", '206px'],
                ["style", "top", '175px']
            ],
            "${_Text}": [
                ["style", "left", '14px'],
                ["style", "top", '12px']
            ],
            "${_imprimir}": [
                ["style", "cursor", 'pointer']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '550px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_btn_5}": [
                ["style", "left", '206px'],
                ["style", "top", '121px']
            ],
            "${_btn_4}": [
                ["style", "left", '206px']
            ],
            "${_btn_3}": [
                ["style", "left", '294px'],
                ["style", "top", '175px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: true,
            timeline: [
                { id: "eid13", tween: [ "style", "${_btn_4}", "left", '206px', { fromValue: '206px'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "style", "${_btn_6}", "top", '175px', { fromValue: '175px'}], position: 0, duration: 0 },
                { id: "eid14", tween: [ "style", "${_btn_5}", "left", '206px', { fromValue: '206px'}], position: 0, duration: 0 },
                { id: "eid9", tween: [ "style", "${_btn_2}", "left", '294px', { fromValue: '294px'}], position: 0, duration: 0 },
                { id: "eid15", tween: [ "style", "${_btn_5}", "top", '121px', { fromValue: '121px'}], position: 0, duration: 0 },
                { id: "eid16", tween: [ "style", "${_btn_6}", "left", '206px', { fromValue: '206px'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${_btn_3}", "top", '175px', { fromValue: '175px'}], position: 0, duration: 0 },
                { id: "eid11", tween: [ "style", "${_btn_3}", "left", '294px', { fromValue: '294px'}], position: 0, duration: 0 },
                { id: "eid10", tween: [ "style", "${_btn_2}", "top", '121px', { fromValue: '121px'}], position: 0, duration: 0 }            ]
        }
    }
},
"btn_1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '49px', '49px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [1, 'rgba(0,0,0,1)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(64,64,64,1.00)']
                },
                {
                    rect: ['17px', '10px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    id: 'Text2',
                    text: '1',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['1px', '0px', '47px', '47px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '49px'],
                ["style", "width", '49px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "border-width", '1px']
            ],
            "${_Text2}": [
                ["style", "top", '10px'],
                ["style", "left", '17px'],
                ["color", "color", 'rgba(53,53,53,1.00)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: true,
            labels: {
                "reposo": 0,
                "presionado": 250
            },
            timeline: [
                { id: "eid7", tween: [ "style", "${_Rectangle2}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_Rectangle2}", "opacity", '0', { fromValue: '0'}], position: 250, duration: 0 },
                { id: "eid2", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(64,64,64,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 250 },
                { id: "eid4", tween: [ "color", "${_Text2}", "color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(53,53,53,1.00)'}], position: 0, duration: 250 }            ]
        }
    }
},
"btn_2": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '49px', '49px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [1, 'rgba(0,0,0,1)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(64,64,64,1.00)']
                },
                {
                    rect: ['17px', '10px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    id: 'Text2',
                    text: '2',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['1px', '0px', '47px', '47px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '49px'],
                ["style", "width", '49px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text2}": [
                ["style", "top", '10px'],
                ["style", "left", '17px'],
                ["color", "color", 'rgba(53,53,53,1.00)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: true,
            labels: {
                "reposo": 0,
                "presionado": 250
            },
            timeline: [
                { id: "eid7", tween: [ "style", "${_Rectangle2}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_Rectangle2}", "opacity", '0', { fromValue: '0'}], position: 250, duration: 0 },
                { id: "eid2", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(64,64,64,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 250 },
                { id: "eid4", tween: [ "color", "${_Text2}", "color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(53,53,53,1.00)'}], position: 0, duration: 250 }            ]
        }
    }
},
"btn_3": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '49px', '49px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [1, 'rgba(0,0,0,1)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(64,64,64,1.00)']
                },
                {
                    rect: ['17px', '10px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    id: 'Text2',
                    text: '3',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['1px', '0px', '47px', '47px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '49px'],
                ["style", "width", '49px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "border-width", '1px']
            ],
            "${_Text2}": [
                ["style", "top", '10px'],
                ["style", "left", '17px'],
                ["color", "color", 'rgba(53,53,53,1.00)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: true,
            labels: {
                "reposo": 0,
                "presionado": 250
            },
            timeline: [
                { id: "eid7", tween: [ "style", "${_Rectangle2}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_Rectangle2}", "opacity", '0', { fromValue: '0'}], position: 250, duration: 0 },
                { id: "eid2", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(64,64,64,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 250 },
                { id: "eid4", tween: [ "color", "${_Text2}", "color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(53,53,53,1.00)'}], position: 0, duration: 250 }            ]
        }
    }
},
"btn_4": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '49px', '49px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [1, 'rgba(0,0,0,1)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(64,64,64,1.00)']
                },
                {
                    rect: ['17px', '10px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    id: 'Text2',
                    text: '4',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['1px', '0px', '47px', '47px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '49px'],
                ["style", "width", '49px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text2}": [
                ["style", "top", '10px'],
                ["style", "left", '17px'],
                ["color", "color", 'rgba(53,53,53,1.00)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: true,
            labels: {
                "reposo": 0,
                "presionado": 250
            },
            timeline: [
                { id: "eid7", tween: [ "style", "${_Rectangle2}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_Rectangle2}", "opacity", '0', { fromValue: '0'}], position: 250, duration: 0 },
                { id: "eid2", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(64,64,64,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 250 },
                { id: "eid4", tween: [ "color", "${_Text2}", "color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(53,53,53,1.00)'}], position: 0, duration: 250 }            ]
        }
    }
},
"btn_5": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '49px', '49px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [1, 'rgba(0,0,0,1)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(64,64,64,1.00)']
                },
                {
                    rect: ['17px', '10px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    id: 'Text2',
                    text: '5',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['1px', '0px', '47px', '47px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '49px'],
                ["style", "width", '49px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "border-width", '1px']
            ],
            "${_Text2}": [
                ["style", "top", '10px'],
                ["style", "left", '17px'],
                ["color", "color", 'rgba(53,53,53,1.00)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: true,
            labels: {
                "reposo": 0,
                "presionado": 250
            },
            timeline: [
                { id: "eid7", tween: [ "style", "${_Rectangle2}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_Rectangle2}", "opacity", '0', { fromValue: '0'}], position: 250, duration: 0 },
                { id: "eid2", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(64,64,64,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 250 },
                { id: "eid4", tween: [ "color", "${_Text2}", "color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(53,53,53,1.00)'}], position: 0, duration: 250 }            ]
        }
    }
},
"btn_6": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '49px', '49px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [1, 'rgba(0,0,0,1)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(64,64,64,1.00)']
                },
                {
                    rect: ['17px', '10px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    id: 'Text2',
                    text: '6',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['1px', '0px', '47px', '47px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '49px'],
                ["style", "width", '49px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text2}": [
                ["style", "top", '10px'],
                ["style", "left", '17px'],
                ["color", "color", 'rgba(53,53,53,1.00)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: true,
            labels: {
                "reposo": 0,
                "presionado": 250
            },
            timeline: [
                { id: "eid7", tween: [ "style", "${_Rectangle2}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_Rectangle2}", "opacity", '0', { fromValue: '0'}], position: 250, duration: 0 },
                { id: "eid2", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(64,64,64,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 250 },
                { id: "eid4", tween: [ "color", "${_Text2}", "color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(53,53,53,1.00)'}], position: 0, duration: 250 }            ]
        }
    }
},
"imprimir": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '134px', '47px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRect',
                    stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    rect: ['25px', '11px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(53,53,53,1)', '400', 'none', 'normal'],
                    id: 'Text5',
                    text: 'Imprimir',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RoundRect}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text5}": [
                ["style", "left", '25px'],
                ["style", "top", '11px']
            ],
            "${symbolSelector}": [
                ["style", "height", '49px'],
                ["style", "width", '136px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-3323973");
