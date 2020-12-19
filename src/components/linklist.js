import { Link } from 'gatsby'
import React from 'react'

const listItems = [
	{
		href:
			'https://translate.google.com/?hl=zh-TW&tab=TT#view=home&op=translate&sl=auto&tl=zh-CN',
		primary: 'Google翻譯',
		icon: <i className="material-icons h-6 w-6 -mt-1 mx-3">g_translate</i>,
	},
	{
		href:
			'https://docs.google.com/spreadsheets/d/1ugnB8DEgdhT5E8YbIidNcF4AI4rObaMCdSjT4qG9lp0/edit#gid=2106039647',
		primary: '日報',
		icon: <i className="material-icons h-6 w-6 -mt-1 mx-3">today</i>,
	},
	{
		href:
			'https://docs.google.com/document/d/1v-Ttj7IFEgzA0Bo_WclSQp1nc-Ek7GPQrHZCerHK8hM/edit#heading=h.d23ii4u9uy4r',
		primary: '批注詞',
		icon: <i className="material-icons h-6 w-6 -mt-1 mx-3">history_edu</i>,
	},
	{
		href:
			'https://docs.google.com/spreadsheets/d/1cCY030BQSbDku2rkaoIjxMFN3U3ePLJSsnWG6qNHR8w/edit#gid=0',
		primary: '數據計算',
		icon: <i className="material-icons h-6 w-6 -mt-1 mx-3">calculate</i>,
	},
	{
		href:
			'https://docs.google.com/spreadsheets/d/1rcSdSl6M-ruV4bHOlzOmHvYEJFsbOxRjqVr0KXcQdCc/edit#gid=184557706',
		primary: '篩選總表',
		icon: <i className="material-icons h-6 w-6 -mt-1 mx-3">filter_alt</i>,
	},
	{
		href:
			'https://docs.google.com/spreadsheets/d/1_uNZrvOgcgTYnTA97Ygv3jJEAMCkjmTlCd4KWaeb2V8/edit#gid=0',
		primary: '匯入處理',
		icon: <i className="material-icons h-6 w-6 -mt-1 mx-3">source</i>,
	},
	{
		href:
			'https://docs.google.com/spreadsheets/d/1k9zLpIV5fNq66qujBc8cWxpvCa2nTqWScxlTmowG7Ws',
		primary: '採購部共用',
		icon: <i className="material-icons h-6 w-6 -mt-1 mx-3">folder_shared</i>,
	},
	{
		href:
			'https://docs.google.com/spreadsheets/d/1gqruDNC_8Dp3r5BEuD-lDiL8jlvb4rZMfvXWk1hrYHA',
		primary: 'Jayden共用',
		icon: <i className="material-icons h-6 w-6 -mt-1 mx-3">folder_shared</i>,
	},
]

function LinkList() {
	return (
		<div className="w-full lg:w-full">
			<ul className="flex flex-col list-none lg:ml-auto divide-y-1 divide-lightBlue-400 border border-lightBlue-400 rounded-lg">
				{listItems.map(({ href, icon, primary }) => (
					<li
						className="nav-item hover:text-lightBlue-500 hover:bg-gray-100 hover:bg-opacity-10"
						key={primary}
					>
						<Link
							className="px-6 py-3 inline-flex items-center text-md uppercase font-bold text-gray-100hover:opacity-75"
							href={href}
							target="_blank"
							rel="noreferrer"
						>
							{icon}

							<span className="ml-2">{primary}</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default LinkList
