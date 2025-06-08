import React from "react";

const ListsLanding = () => {
	return (
		<section className="bg-creamy-white lg:grid lg:place-content-center">
			<div className="mx-auto w-fit max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
				<div className="mx-auto max-w-prose text-center">
					<h1 className="text-4xl font-bold text-deep-charcoal sm:text-5xl">
						Your Grocery
						<strong className="text-soft-brown"> Lists </strong>
					</h1>

					<p className="mt-4 text-base text-pretty text-deep-charcoal sm:text-lg/relaxed">
						Create, edit, and organize your grocery lists. Use
						real-time price data to estimate costs, compare stores,
						and make every trip to the store more efficient.
					</p>
				</div>
			</div>
		</section>
	);
};

export default ListsLanding;
