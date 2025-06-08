import React from "react";

const StoresLanding = () => {
	return (
		<section className="bg-creamy-white lg:grid lg:place-content-center">
			<div className="mx-auto w-fit max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
				<div className="mx-auto max-w-prose text-center">
					<h1 className="text-4xl font-bold text-deep-charcoal sm:text-5xl">
						Your Grocery
						<strong className="text-soft-brown"> Stores </strong>
					</h1>

					<p className="mt-4 text-base text-pretty text-deep-charcoal sm:text-lg/relaxed">
						View and manage the stores where you shop, compare
						prices, and contribute updates.
					</p>
				</div>
			</div>
		</section>
	);
};

export default StoresLanding;
