/* @flow */

import { BUTTON_LABEL, BUTTON_COLOR, BUTTON_SHAPE, BUTTON_LAYOUT } from '../../src/constants';

const RESPONSIVE_WIDTHS = [ 144, 222, 465, 670 ];

type ButtonConfig = {|
    filename? : string,
    userAgent? : string,
    container? : {
        width : number
    },
    button : {
        locale? : string,
        style? : {
            color? : string,
            size? : string,
            shape? : string,
            label? : string,
            period? : number
        }
    }
|};

export const buttonConfigs : Array<ButtonConfig> = [];

buttonConfigs.push({
    button: {}
});

for (const label of [ BUTTON_LABEL.PAYPAL ]) {

    for (const width of RESPONSIVE_WIDTHS) {
        buttonConfigs.push({
            container: {
                width
            },
            button: {
                style: {
                    label
                }
            }
        });
    }

    for (const color of [ BUTTON_COLOR.GOLD, BUTTON_COLOR.BLUE, BUTTON_COLOR.SILVER ]) {
        buttonConfigs.push({
            button: {
                style: {
                    label,
                    color
                }
            }
        });
    }

    for (const shape of [ BUTTON_SHAPE.RECT, BUTTON_SHAPE.PILL ]) {
        buttonConfigs.push({
            button: {
                style: {
                    label,
                    shape
                }
            }
        });

        buttonConfigs.push({
            button: {
                style: {
                    label,
                    shape,
                    height: 45
                }
            }
        });
    }

    for (const layout of [ BUTTON_LAYOUT.VERTICAL, BUTTON_LAYOUT.HORIZONTAL ]) {
        buttonConfigs.push({
            button: {
                style: {
                    label,
                    layout
                }
            }
        });
    }

    buttonConfigs.push({
        button: {
            style: {
                label,
                layout:  'horizontal',
                tagline: false
            }
        }
    });

    buttonConfigs.push({
        container: {
            width: 340
        },
        button: {
            style: {
                label,
                height: 44
            }
        }
    });

    buttonConfigs.push({
        container: {
            width: 550
        },
        button: {
            style: {
                label,
                height: 55
            }
        }
    });
}
