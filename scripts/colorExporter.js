// the json exported by the Design Tokenizer plugin in figma
let colors = {
    "style": {
        "color": {
            "Red": {
                " Primary": {
                    "type": "SOLID",
                    "value": "#ae2c17"
                },
                " Secondary": {
                    "type": "SOLID",
                    "value": "#dd472e"
                },
                " Highlight": {
                    "type": "SOLID",
                    "value": "#f83312"
                },
                " Subtle": {
                    "type": "SOLID",
                    "value": "#f5c7c7"
                }
            },
            "Orange": {
                " Primary": {
                    "type": "SOLID",
                    "value": "#de7224"
                },
                " Secondary": {
                    "type": "SOLID",
                    "value": "#f08538"
                },
                " Hightlight": {
                    "type": "SOLID",
                    "value": "#f76903"
                },
                " Subtle": {
                    "type": "SOLID",
                    "value": "#fccfaf"
                }
            },
            "Yellow": {
                " Primary": {
                    "type": "SOLID",
                    "value": "#f7ca45"
                },
                " Secondary": {
                    "type": "SOLID",
                    "value": "#f7e666"
                },
                " Highlight": {
                    "type": "SOLID",
                    "value": "#fde428"
                },
                " Subtle": {
                    "type": "SOLID",
                    "value": "#fdfbc2"
                }
            },
            "Green": {
                " Primary": {
                    "type": "SOLID",
                    "value": "#239e4c"
                },
                " Secondary": {
                    "type": "SOLID",
                    "value": "#59c57e"
                },
                " Highlight": {
                    "type": "SOLID",
                    "value": "#07d74e"
                },
                " Subtle": {
                    "type": "SOLID",
                    "value": "#ccfadb"
                }
            },
            "Teal": {
                " Primary": {
                    "type": "SOLID",
                    "value": "#1ba3ba"
                },
                " Secondary": {
                    "type": "SOLID",
                    "value": "#66d5e2"
                },
                " Highlight": {
                    "type": "SOLID",
                    "value": "#07deec"
                },
                " Subtle": {
                    "type": "SOLID",
                    "value": "#c8f7f9"
                }
            },
            "Blue": {
                " Primary": {
                    "type": "SOLID",
                    "value": "#0e5ba2"
                },
                " Secondary": {
                    "type": "SOLID",
                    "value": "#418ed4"
                },
                " Highlight": {
                    "type": "SOLID",
                    "value": "#0076e3"
                },
                " Subtle": {
                    "type": "SOLID",
                    "value": "#d5e9fb"
                }
            },
            "Purple": {
                " Primary": {
                    "type": "SOLID",
                    "value": "#7043a6"
                },
                " Secondary": {
                    "type": "SOLID",
                    "value": "#9367c8"
                },
                " Highlight": {
                    "type": "SOLID",
                    "value": "#9342f6"
                },
                " Subtle": {
                    "type": "SOLID",
                    "value": "#e2cff9"
                }
            },
            "Magenta": {
                " Primary": {
                    "type": "SOLID",
                    "value": "#b33a6c"
                },
                " Secondary": {
                    "type": "SOLID",
                    "value": "#d35a8d"
                },
                " Highlight": {
                    "type": "SOLID",
                    "value": "#e82477"
                },
                " Subtle": {
                    "type": "SOLID",
                    "value": "#fcd0e3"
                }
            },
            "Neutral": {
                " 0": {
                    "type": "SOLID",
                    "value": "#ffffff"
                },
                " 100": {
                    "type": "SOLID",
                    "value": "#e4e5e6"
                },
                " 200": {
                    "type": "SOLID",
                    "value": "#cfd1d2"
                },
                " 300": {
                    "type": "SOLID",
                    "value": "#afb2b5"
                },
                " 400": {
                    "type": "SOLID",
                    "value": "#8c9296"
                },
                " 500": {
                    "type": "SOLID",
                    "value": "#6a7176"
                },
                " 600": {
                    "type": "SOLID",
                    "value": "#464c50"
                },
                " 700": {
                    "type": "SOLID",
                    "value": "#1c1e21"
                }
            }
        }
    }
}

colors = colors.style.color
for(let color in colors){
    console.log('')
    for(let level in colors[color]){
        console.log(`--bendi-${color.toLowerCase()}-${level.trim().toLowerCase()}: ${colors[color][level].value};`)
    }
}