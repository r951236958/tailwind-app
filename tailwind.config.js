// See https://tailwindcss.com/docs/configuration for details
module.exports = {
	purge: ['./src/**/*.js'],
	// https://github.com/tailwindlabs/tailwindcss-forms
	plugins: [require('@tailwindcss/forms'), require('tailwindcss-toggle')()],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {
			inset: {
				'-1/4': '-.25rem', //For A perfect position , you can change it to your desired width and height for your toogle
			},
			colors: {
				black: '#000',
				white: '#fff',
				darkBlue: {
					50: '#f3f5f7',
					100: '#e7ebef',
					200: '#c4ced6',
					300: '#a1b1be',
					400: '#5a768d',
					500: '#133b5c',
					600: '#113553',
					700: '#0e2c45',
					800: '#0b2337',
					900: '#091d2d',
				},
				deepBlue: {
					50: '#f7fafc',
					100: '#f0f5fa',
					200: '#d9e6f2',
					300: '#c2d6eb',
					400: '#94b8db',
					500: '#6699cc',
					600: '#5c8ab8',
					700: '#4d7399',
					800: '#3d5c7a',
					900: '#324b64',
				},
				navyBlue: {
					50: '#f2f2f9',
					100: '#e6e6f2',
					200: '#bfbfdf',
					300: '#9999cc',
					400: '#4d4da6',
					500: '#000080',
					600: '#000073',
					700: '#000060',
					800: '#00004d',
					900: '#00003f',
				},
				steelBlue: {
					50: '#f6f9fb',
					100: '#edf3f8',
					200: '#d1e0ec',
					300: '#b5cde1',
					400: '#7ea8cb',
					500: '#4682B4',
					600: '#3f75a2',
					700: '#356287',
					800: '#2a4e6c',
					900: '#224058',
				},
				ocean: {
					50: '#32a9f0',
					100: '#289fe6',
					200: '#1e95dc',
					300: '#148bd2',
					400: '#0a81c8',
					500: '#0077be',
					600: '#006db4',
					700: '#0063aa',
					800: '#0059a0',
					900: '#004f96',
				},
				primary: {
					50: '#ffff6f',
					100: '#ffff65',
					200: '#ffff5b',
					300: '#ffff51',
					400: '#fff647',
					500: '#ffec3d',
					600: '#f5e233',
					700: '#ebd829',
					800: '#e1ce1f',
					900: '#d7c415',
				},
				secondary: {
					50: '#ffb6ff',
					100: '#ffacff',
					200: '#ffa2ff',
					300: '#ff98f9',
					400: '#ff8eef',
					500: '#f984e5',
					600: '#ef7adb',
					700: '#e570d1',
					800: '#db66c7',
					900: '#d15cbd',
				},
				error: {
					50: '#ff7266',
					100: '#ff685c',
					200: '#ff5e52',
					300: '#ff5448',
					400: '#fe4a3e',
					500: '#f44034',
					600: '#ea362a',
					700: '#e02c20',
					800: '#d62216',
					900: '#cc180c',
				},
				warning: {
					50: '#ffcb32',
					100: '#ffc128',
					200: '#ffb71e',
					300: '#ffad14',
					400: '#ffa30a',
					500: '#ff9900',
					600: '#f58f00',
					700: '#eb8500',
					800: '#e17b00',
					900: '#d77100',
				},
				info: {
					50: '#52c6ff',
					100: '#48bcff',
					200: '#3eb2ff',
					300: '#34a8ff',
					400: '#2a9efd',
					500: '#2094f3',
					600: '#168ae9',
					700: '#0c80df',
					800: '#0276d5',
					900: '#006ccb',
				},
				success: {
					50: '#7ee081',
					100: '#74d677',
					200: '#6acc6d',
					300: '#60c263',
					400: '#56b859',
					500: '#4cae4f',
					600: '#42a445',
					700: '#389a3b',
					800: '#2e9031',
					900: '#248627',
				},
				darkGray: {
					50: '#626262',
					100: '#585858',
					200: '#4e4e4e',
					300: '#444444',
					400: '#3a3a3a',
					500: '#303030',
					600: '#262626',
					700: '#1c1c1c',
					800: '#121212',
					900: '#080808',
				},
				onyx: {
					50: '#414141',
					100: '#373737',
					200: '#2d2d2d',
					300: '#232323',
					400: '#191919',
					500: '#0f0f0f',
					600: '#050505',
					700: '#000000',
					800: '#000000',
					900: '#000000',
				},
				outerSpace: {
					50: '#737c7e',
					100: '#697274',
					200: '#5f686a',
					300: '#555e60',
					400: '#4b5456',
					500: '#414a4c',
					600: '#374042',
					700: '#2d3638',
					800: '#232c2e',
					900: '#192224',
				},
				teal: {
					50: '#32b2b2',
					100: '#28a8a8',
					200: '#1e9e9e',
					300: '#149494',
					400: '#0a8a8a',
					500: '#008080',
					600: '#007676',
					700: '#006c6c',
					800: '#006262',
					900: '#005858',
				},
				gold: {
					50: '#ffff32',
					100: '#ffff28',
					200: '#fff51e',
					300: '#ffeb14',
					400: '#ffe10a',
					500: '#ffd700',
					600: '#f5cd00',
					700: '#ebc300',
					800: '#e1b900',
					900: '#d7af00',
				},
				darkCyan: {
					50: '#32bdbd',
					100: '#28b3b3',
					200: '#1ea9a9',
					300: '#149f9f',
					400: '#0a9595',
					500: '#008b8b',
					600: '#008181',
					700: '#007777',
					800: '#006d6d',
					900: '#006363',
				},
				goldenYellow: {
					50: '#ffff32',
					100: '#ffff28',
					200: '#fffd1e',
					300: '#fff314',
					400: '#ffe90a',
					500: '#ffdf00',
					600: '#f5d500',
					700: '#ebcb00',
					800: '#e1c100',
					900: '#d7b700',
				},
				paper: {
					default: '#424242',
					100: '#A8A8A8',
					200: '#8F8F8F',
					300: '#757575',
					400: '#5C5C5C',
					500: '#424242',
					600: '#292929',
					700: '#0F0F0F',
					800: '#000000',
					900: '#000000',
				},
				rose: {
					50: '#fff1f2',
					100: '#ffe4e6',
					200: '#fecdd3',
					300: '#fda4af',
					400: '#fb7185',
					500: '#f43f5e',
					600: '#e11d48',
					700: '#be123c',
					800: '#9f1239',
					900: '#881337',
				},
				pink: {
					50: '#fdf2f8',
					100: '#fce7f3',
					200: '#fbcfe8',
					300: '#f9a8d4',
					400: '#f472b6',
					500: '#ec4899',
					600: '#db2777',
					700: '#be185d',
					800: '#9d174d',
					900: '#831843',
				},
				fuchsia: {
					50: '#fdf4ff',
					100: '#fae8ff',
					200: '#f5d0fe',
					300: '#f0abfc',
					400: '#e879f9',
					500: '#d946ef',
					600: '#c026d3',
					700: '#a21caf',
					800: '#86198f',
					900: '#701a75',
				},
				purple: {
					50: '#faf5ff',
					100: '#f3e8ff',
					200: '#e9d5ff',
					300: '#d8b4fe',
					400: '#c084fc',
					500: '#a855f7',
					600: '#9333ea',
					700: '#7e22ce',
					800: '#6b21a8',
					900: '#581c87',
				},
				violet: {
					50: '#f5f3ff',
					100: '#ede9fe',
					200: '#ddd6fe',
					300: '#c4b5fd',
					400: '#a78bfa',
					500: '#8b5cf6',
					600: '#7c3aed',
					700: '#6d28d9',
					800: '#5b21b6',
					900: '#4c1d95',
				},
				indigo: {
					50: '#eef2ff',
					100: '#e0e7ff',
					200: '#c7d2fe',
					300: '#a5b4fc',
					400: '#818cf8',
					500: '#6366f1',
					600: '#4f46e5',
					700: '#4338ca',
					800: '#3730a3',
					900: '#312e81',
				},
				blue: {
					50: '#eff6ff',
					100: '#dbeafe',
					200: '#bfdbfe',
					300: '#93c5fd',
					400: '#60a5fa',
					500: '#3b82f6',
					600: '#2563eb',
					700: '#1d4ed8',
					800: '#1e40af',
					900: '#1e3a8a',
				},
				lightBlue: {
					50: '#f0f9ff',
					100: '#e0f2fe',
					200: '#bae6fd',
					300: '#7dd3fc',
					400: '#38bdf8',
					500: '#0ea5e9',
					600: '#0284c7',
					700: '#0369a1',
					800: '#075985',
					900: '#0c4a6e',
				},
				cyan: {
					50: '#ecfeff',
					100: '#cffafe',
					200: '#a5f3fc',
					300: '#67e8f9',
					400: '#22d3ee',
					500: '#06b6d4',
					600: '#0891b2',
					700: '#0e7490',
					800: '#155e75',
					900: '#164e63',
				},

				emerald: {
					50: '#ecfdf5',
					100: '#d1fae5',
					200: '#a7f3d0',
					300: '#6ee7b7',
					400: '#34d399',
					500: '#10b981',
					600: '#059669',
					700: '#047857',
					800: '#065f46',
					900: '#064e3b',
				},
				green: {
					50: '#f0fdf4',
					100: '#dcfce7',
					200: '#bbf7d0',
					300: '#86efac',
					400: '#4ade80',
					500: '#22c55e',
					600: '#16a34a',
					700: '#15803d',
					800: '#166534',
					900: '#14532d',
				},
				lime: {
					50: '#f7fee7',
					100: '#ecfccb',
					200: '#d9f99d',
					300: '#bef264',
					400: '#a3e635',
					500: '#84cc16',
					600: '#65a30d',
					700: '#4d7c0f',
					800: '#3f6212',
					900: '#365314',
				},
				yellow: {
					50: '#fefce8',
					100: '#fef9c3',
					200: '#fef08a',
					300: '#fde047',
					400: '#facc15',
					500: '#eab308',
					600: '#ca8a04',
					700: '#a16207',
					800: '#854d0e',
					900: '#713f12',
				},
				amber: {
					50: '#fffbeb',
					100: '#fef3c7',
					200: '#fde68a',
					300: '#fcd34d',
					400: '#fbbf24',
					500: '#f59e0b',
					600: '#d97706',
					700: '#b45309',
					800: '#92400e',
					900: '#78350f',
				},
				orange: {
					50: '#fff7ed',
					100: '#ffedd5',
					200: '#fed7aa',
					300: '#fdba74',
					400: '#fb923c',
					500: '#f97316',
					600: '#ea580c',
					700: '#c2410c',
					800: '#9a3412',
					900: '#7c2d12',
				},
				red: {
					50: '#fef2f2',
					100: '#fee2e2',
					200: '#fecaca',
					300: '#fca5a5',
					400: '#f87171',
					500: '#ef4444',
					600: '#dc2626',
					700: '#b91c1c',
					800: '#991b1b',
					900: '#7f1d1d',
				},
				warmGray: {
					50: '#fafaf9',
					100: '#f5f5f4',
					200: '#e7e5e4',
					300: '#d6d3d1',
					400: '#a8a29e',
					500: '#78716c',
					600: '#57534e',
					700: '#44403c',
					800: '#292524',
					900: '#1c1917',
				},
				trueGray: {
					50: '#fafafa',
					100: '#f5f5f5',
					200: '#e5e5e5',
					300: '#d4d4d4',
					400: '#a3a3a3',
					500: '#737373',
					600: '#525252',
					700: '#404040',
					800: '#262626',
					900: '#171717',
				},
				gray: {
					50: '#fafafa',
					100: '#f4f4f5',
					200: '#e4e4e7',
					300: '#d4d4d8',
					400: '#a1a1aa',
					500: '#71717a',
					600: '#52525b',
					700: '#3f3f46',
					800: '#27272a',
					900: '#18181b',
				},
				coolGray: {
					50: '#f9fafb',
					100: '#f3f4f6',
					200: '#e5e7eb',
					300: '#d1d5db',
					400: '#9ca3af',
					500: '#6b7280',
					600: '#4b5563',
					700: '#374151',
					800: '#1f2937',
					900: '#111827',
				},
				blueGray: {
					50: '#f8fafc',
					100: '#f1f5f9',
					200: '#e2e8f0',
					300: '#cbd5e1',
					400: '#94a3b8',
					500: '#64748b',
					600: '#475569',
					700: '#334155',
					800: '#1e293b',
					900: '#0f172a',
				},

				lightYellow: {
					50: '#fffde7',
					100: '#fff9c4',
					200: '#fff59d',
					300: '#fff176',
					400: '#ffee58',
					500: '#ffea00',
					600: '#ffeb3b',
					700: '#fdd835',
					800: '#ffca28',
					900: '#c7a500',
				},
			},
			backgroundOpacity: {
				5: '0.05',
				10: '0.1',
				20: '0.2',
				30: '0.3',
				40: '0.4',
				50: '0.5',
				60: '0.6',
				70: '0.7',
				80: '0.8',
				90: '0.9',
				95: '0.95',
			},
			borderWidth: {
				DEFAULT: '1px',
				0: '0',
				1: '1px',
				2: '2px',
				3: '3px',
				4: '4px',
				6: '6px',
				8: '8px',
			},
		},
	},
	variants: {
		extend: {
			borderRadius: ['hover', 'focus'],
			borderWidth: ['hover', 'focus'],
			backgroundColor: ['checked'],
			borderColor: ['checked'],
			inset: ['hover', 'focus', 'checked'],
		},
	},
}
