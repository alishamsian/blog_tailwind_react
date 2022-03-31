import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-800 w-full  mx-auto flex items-center px-2 py-8">

			<div className="w-full mx-auto flex flex-wrap items-center">
				<div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
					<a className="text-gray-900 no-underline hover:text-gray-900 hover:no-underline" href="#">
						👻 <span className="text-base text-gray-200"> ALi Blog</span>
					</a>
				</div>
				<div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
					<ul className="list-reset flex justify-center flex-1 md:flex-none items-center">
						<li>
							<a className="inline-block py-2 px-3 text-white no-underline" href="#">خانه</a>
						</li>
						<li>
							<a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-3" href="#">پست ها</a>
						</li>
						<li>
							<a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-3" href="#">درباره ما</a>
						</li>
						<li>
							<a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-3" href="#">تماس با ما</a>
						</li>
					</ul>
				</div>
			</div>



		</div>
  )
}

export default Footer