/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors:
                {
                    'rich_black': {
                        DEFAULT: '#0d1b2a',
                        100: '#030609',
                        200: '#050b11',
                        300: '#08111a',
                        400: '#0b1622',
                        500: '#0d1b2a',
                        600: '#234870',
                        700: '#3875b6',
                        800: '#74a3d4',
                        900: '#bad1ea'
                    },
                    'oxford_blue': {
                        DEFAULT: '#1b263b',
                        100: '#05080c',
                        200: '#0b0f18',
                        300: '#101724',
                        400: '#161f30',
                        500: '#1b263b',
                        600: '#364c75',
                        700: '#5172af',
                        800: '#8ba1ca',
                        900: '#c5d0e4'
                    },
                    'yinmn_blue': {
                        DEFAULT: '#415a77',
                        100: '#0d1218',
                        200: '#1a242f',
                        300: '#273647',
                        400: '#34485f',
                        500: '#415a77',
                        600: '#587aa1',
                        700: '#819bb9',
                        800: '#abbcd1',
                        900: '#d5dee8'
                    },
                    'silver_lake_blue': {
                        DEFAULT: '#778da9',
                        100: '#161c23',
                        200: '#2c3746',
                        300: '#425369',
                        400: '#586f8d',
                        500: '#778da9',
                        600: '#91a2ba',
                        700: '#acbacb',
                        800: '#c8d1dc',
                        900: '#e3e8ee'
                    },
                    'platinum': {
                        DEFAULT: '#e0e1dd',
                        100: '#2e2f2a',
                        200: '#5b5e53',
                        300: '#898c7e',
                        400: '#b4b6ad',
                        500: '#e0e1dd',
                        600: '#e5e6e3',
                        700: '#ececea',
                        800: '#f2f3f1',
                        900: '#f9f9f8'
                    },


                    'floral_white': {
                        DEFAULT: '#fffcf2',
                        100: '#634c00',
                        200: '#c69800',
                        300: '#ffcd2a',
                        400: '#ffe48d',
                        500: '#fffcf2',
                        600: '#fffcf3',
                        700: '#fffdf6',
                        800: '#fffef9',
                        900: '#fffefc'
                    },
                    'timberwolf': {
                        DEFAULT: '#ccc5b9',
                        100: '#2d2821',
                        200: '#5a5141',
                        300: '#877962',
                        400: '#ab9f8b',
                        500: '#ccc5b9',
                        600: '#d6d0c6',
                        700: '#e0dcd4',
                        800: '#eae8e3',
                        900: '#f5f3f1'
                    },
                    'black_olive': {
                        DEFAULT: '#403d39',
                        100: '#0d0c0c',
                        200: '#1a1917',
                        300: '#272523',
                        400: '#34312e',
                        500: '#403d39',
                        600: '#6a655e',
                        700: '#928c84',
                        800: '#b6b2ad',
                        900: '#dbd9d6'
                    },
                    'eerie_black': {
                        DEFAULT: '#252422',
                        100: '#070707',
                        200: '#0f0e0e',
                        300: '#161615',
                        400: '#1e1d1b',
                        500: '#252422',
                        600: '#53514c',
                        700: '#807d76',
                        800: '#aba8a4',
                        900: '#d5d4d1'
                    },
                    'flame': {
                        DEFAULT: '#eb5e28',
                        100: '#321205',
                        200: '#652309',
                        300: '#97350e',
                        400: '#ca4713',
                        500: '#eb5e28',
                        600: '#ef7f53',
                        700: '#f39f7e',
                        800: '#f7bfa9',
                        900: '#fbdfd4'
                    },


                    'orange_web': {
                        DEFAULT: '#fca311',
                        100: '#362101',
                        200: '#6b4201',
                        300: '#a16402',
                        400: '#d68502',
                        500: '#fca311',
                        600: '#fdb541',
                        700: '#fec871',
                        800: '#fedaa0',
                        900: '#ffedd0'
                    }
                }
        },
    },
    plugins: [],
}
