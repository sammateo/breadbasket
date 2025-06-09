import React from "react";
import { auth0 } from "@/lib/auth0";
import { NavigationBar } from "@/components/Navigation/NavigationBar";
import Link from "next/link";

const page = async () => {
	const session = await auth0.getSession();
	const user = session?.user;
	return (
		<div>
			<NavigationBar />
			<div className="lg:grid lg:place-content-center">
				{user && (
					<div className="flex flex-col gap-5 mx-auto text-center w-fit max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
						<img
							className="mx-auto rounded-full"
							src={user.picture}
							alt={user.name}
						/>
						<h2>{user.name}</h2>
						<p>{user.email}</p>
						<Link
							className="inline-block rounded-lg border border-fresh-olive px-8 py-3 font-medium text-fresh-olive shadow-sm transition-colors hover:bg-fresh-olive hover:text-creamy-white"
							href="/auth/logout"
						>
							Logout
						</Link>
					</div>
				)}

				{!user && (
					<div className="flex flex-col gap-5 mx-auto text-center w-fit max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
						<Link
							className="inline-block rounded-lg border border-fresh-olive bg-fresh-olive px-8 py-3 font-medium text-creamy-white shadow-sm transition-colors hover:bg-creamy-white hover:text-fresh-olive"
							href="/auth/login"
						>
							Login
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default page;
