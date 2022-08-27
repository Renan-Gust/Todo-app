import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {  
        colors: {
            BrightBlue: string;
            BackgroundLinearGradient1: string;
            BackgroundLinearGradient2: string;
            lightTheme: {
                [key: string]: string;
            };
            darkTheme: {
                [key: string]: string;
            }
        };
    }
}

export const theme: DefaultTheme = {
    colors: {
        BrightBlue: 'hsl(220, 98%, 61%)',
        BackgroundLinearGradient1: 'hsl(192, 100%, 67%)',
        BackgroundLinearGradient2: 'hsl(280, 87%, 65%)',
        lightTheme: {
            VeryLightGray: 'hsl(0, 0%, 98%)',
            VeryLightGrayishBlue: 'hsl(236, 33%, 92%)',
            LightGrayishBlue: 'hsl(233, 11%, 84%)',
            DarkGrayishBlue: 'hsl(236, 9%, 61%)',
            VeryDarkGrayishBlue: 'hsl(235, 19%, 35%)'
        },
        darkTheme: {
            VeryDarkBlue: 'hsl(235, 21%, 11%)',
            VeryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
            LightGrayishBlue: 'hsl(234, 39%, 85%)',
            LightGrayishBlueHover: 'hsl(236, 33%, 92%)',
            DarkGrayishBlue: 'hsl(234, 11%, 52%)',
            VeryDarkGrayishBlue: 'hsl(233, 14%, 35%)',
            VeryDarkGrayishBlueHover: 'hsl(237, 14%, 26%)'
        }
    }
}