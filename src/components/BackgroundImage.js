import React from 'react'

const BackgroundImage = () => {
	return (
		<div
			className="w-full h-40 bg-gray-100 "
			style={{ backgroundImage: 'url("https://fakeimg.pl/1200x200/")' }}
		>
			<div
				className="flex items-end w-full h-full"
				style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
			>
				<div className="px-4 py-2">
					<div className="text-sm text-green-400 mb-2">Entertainment</div>
					<div className="mb-2">
						<a
							href="/"
							className="font-semibold leading-tight text-2xl text-gray-100 hover:text-gray-100"
						>
							Bootstrap Card&apos;s Title using Tailwind
						</a>
					</div>
					<div className="flex text-gray-200 text-sm ">
						<div className="pr-3">May 6, 2020</div>
						<div>Posted by Admin</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BackgroundImage
