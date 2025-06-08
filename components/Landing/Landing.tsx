import Link from "next/link";
import React from "react";

export const Landing = () => {
	return (
		<section className="bg-creamy-white lg:grid lg:h-screen lg:place-content-center">
			<div className="mx-auto w-fit max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
				<div className="mx-auto max-w-prose text-center">
					<h1 className="text-4xl font-bold text-deep-charcoal sm:text-5xl">
						Smart grocery
						<strong className="text-soft-brown"> planning </strong>
						made simple
					</h1>

					<p className="mt-4 text-base text-pretty text-deep-charcoal sm:text-lg/relaxed">
						Our app helps you track prices, build grocery lists, and
						find the best deals—so you can nourish your family
						without the hassle.
					</p>

					<div className="mt-4 flex flex-col md:flex-row justify-center gap-4 sm:mt-6">
						<Link
							className="inline-block rounded-lg border border-fresh-olive bg-fresh-olive px-8 py-3 font-medium text-creamy-white shadow-sm transition-colors hover:bg-creamy-white hover:text-fresh-olive"
							href="/lists"
						>
							Get Started
						</Link>

						<Link
							className="inline-block rounded-lg border border-fresh-olive px-8 py-3 font-medium text-fresh-olive shadow-sm transition-colors hover:bg-fresh-olive hover:text-creamy-white"
							href="/items"
						>
							View Catalog
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
