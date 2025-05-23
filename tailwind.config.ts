/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/providers/**/*.{js,ts,tsx,mdx}",
    "./src/features/**/*.{js,ts,tsx,mdx}",
    "./src/modules/**/*.{js,ts,tsx,mdx}",
    "./src/views/**/*.{js,ts,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				'25': '#F5F3FE',
  				'50': '#EEEAFE',
  				'100': '#DBD3FD',
  				'200': '#C7B9FC',
  				'300': '#B19BFB',
  				'400': '#9775FA',
  				'500': '#783BF9',
  				'600': '#6E36E3',
  				'700': '#6230CB',
  				'800': '#552AB0',
  				'900': '#452290',
  				'950': '#311865'
  			},
  			primaryLight: {
  				'25': '#FBFCFF',
  				'50': '#F8FAFF',
  				'100': '#F1F5FF',
  				'200': '#EAF0FF',
  				'300': '#E3EBFF',
  				'400': '#DBE5FF',
  				'500': '#D3E0FF',
  				'600': '#C1CDE9',
  				'700': '#ACB7D0',
  				'800': '#959EB4',
  				'900': '#7A8193',
  				'950': '#565B68'
  			},
  			green: {
  				'25': '#F3FEF7',
  				'50': '#EAFDF1',
  				'100': '#D3FBE2',
  				'200': '#BAF9D3',
  				'300': '#9CF7C2',
  				'400': '#77F5AF',
  				'500': '#40F39A',
  				'600': '#3ADE8D',
  				'700': '#34C67E',
  				'800': '#2DAC6D',
  				'900': '#258C59',
  				'950': '#1A633F'
  			},
  			neutral: {
  				'25': '#FCFCFD',
  				'50': '#F9FAFB',
  				'100': '#F2F4F7',
  				'200': '#E4E7EC',
  				'300': '#D0D5DD',
  				'400': '#98A2B3',
  				'500': '#667085',
  				'600': '#475467',
  				'700': '#344054',
  				'800': '#1D2939',
  				'900': '#101828',
  				'950': '#0C111D'
  			},
  			black: {
  				'25': '#F2F2F2',
  				'50': '#E9E9E9',
  				'100': '#D0D0D0',
  				'200': '#B5B5B5',
  				'300': '#949494',
  				'400': '#696969',
  				'500': '#121212',
  				'600': '#101010'
  			},
  			glisteningDawn: {
  				'25': '#FEF9F2',
  				'50': '#FEF5E9',
  				'100': '#FDEBD1',
  				'200': '#FCE0B6',
  				'300': '#FBD596',
  				'400': '#FAC96C',
  				'500': '#F9BC21',
  				'600': '#E3AC1E',
  				'700': '#CB991B',
  				'800': '#B08517',
  				'900': '#906D13',
  				'950': '#654D0D'
  			},
  			hotShot: {
  				'25': '#FDF3F2',
  				'50': '#FCEBE9',
  				'100': '#FAD5D1',
  				'200': '#F7BDB6',
  				'300': '#F4A196',
  				'400': '#F27F6D',
  				'500': '#EF5025',
  				'600': '#DA4922',
  				'700': '#C3411E',
  				'800': '#A9391A',
  				'900': '#8A2E15',
  				'950': '#61210F'
  			},
  			brightCareer: {
  				'25': '#FFF2F4',
  				'50': '#FFEAED',
  				'100': '#FFD2D8',
  				'200': '#FFB8C2',
  				'300': '#FF99A9',
  				'400': '#FF728C',
  				'500': '#FF3366',
  				'600': '#E92F5D',
  				'700': '#D02A53',
  				'800': '#B42448',
  				'900': '#931D3B',
  				'950': '#68152A'
  			},
  			perception: {
  				'25': '#FAF6FD',
  				'50': '#F6EFFB',
  				'100': '#EDDEF8',
  				'200': '#E4CCF4',
  				'300': '#DAB8F0',
  				'400': '#D0A2EC',
  				'500': '#C588E8',
  				'600': '#B47CD4',
  				'700': '#A16FBD',
  				'800': '#8B60A4',
  				'900': '#724F86',
  				'950': '#50375F'
  			},
  			error: {
  				'25': '#FEF3F3',
  				'50': '#FDEBEA',
  				'100': '#FAD4D3',
  				'200': '#F8BBB9',
  				'300': '#F59D9A',
  				'400': '#F37974',
  				'500': '#F04438',
  				'600': '#DB3E33',
  				'700': '#C4372E',
  				'800': '#AA3028',
  				'900': '#8B2720',
  				'950': '#621C17'
  			},
  			warning: {
  				'25': '#FEF6F2',
  				'50': '#FEF0E9',
  				'100': '#FCE0D0',
  				'200': '#FBCFB4',
  				'300': '#FABC94',
  				'400': '#F8A868',
  				'500': '#F79009',
  				'600': '#E28408',
  				'700': '#CA7607',
  				'800': '#AF6606',
  				'900': '#8F5305',
  				'950': '#653B04'
  			},
  			success: {
  				'25': '#F2F9F4',
  				'50': '#E9F5ED',
  				'100': '#D0E9D9',
  				'200': '#B5DEC3',
  				'300': '#94D2AB',
  				'400': '#69C58E',
  				'500': '#12B76A',
  				'600': '#10A761',
  				'700': '#0F9557',
  				'800': '#0D814B',
  				'900': '#0A6A3D',
  				'950': '#074B2B'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-poppins)'
  			],
  			stix: [
  				'var(--font-stix-two-text)'
  			],
  			manrope: [
  				'var(--font-manrope)'
  			],
  			dmSans: [
  				'var(--font-dmSans)'
  			],
  			mono: [
  				'var(--font-roboto-mono)'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: '4px'
  		},
  		backgroundImage: {
  			'hero-image': "url('/assets/images/hero-section.png')",
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwind-scrollbar"), require("tailwindcss-animate")],
} satisfies Config;
