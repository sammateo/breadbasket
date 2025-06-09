import { auth0 } from "@/lib/auth0";
import Link from "next/link";
import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
export const NavigationBar = async () => {
	const session = await auth0.getSession();

	const navigationItems = [
		{
			label: "Lists",
			link: "/lists",
		},
		{
			label: "Items",
			link: "/items",
		},
		{
			label: "Stores",
			link: "/stores",
		},
	];
	return (
		<div className="drawer">
			<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col">
				{/* Navbar */}
				<div className="navbar shadow-lg shadow-warm-wheat lg:fixed bg-fresh-olive text-warm-wheat w-full">
					<div className="flex-none lg:hidden">
						<label
							htmlFor="my-drawer-3"
							aria-label="open sidebar"
							className="btn btn-square btn-ghost"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="inline-block h-6 w-6 stroke-current"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								></path>
							</svg>
						</label>
					</div>
					<Link
						href={"/"}
						className="md:mx-2 flex-1 flex items-center md:px-2 text-4xl font-semibold"
					>
						<img
							className="w-14 h-14 relative top-1 object-cover"
							src="/images/breadbasket_icon.png"
							alt="BreadBasket icon"
						/>
						<p>
							<span>Bread</span>
							<span className="text-deep-charcoal">Basket</span>
						</p>
					</Link>
					<div className="hidden flex-none lg:block">
						<div className="menu menu-horizontal items-center gap-4">
							{navigationItems.map((navItem) => (
								<Link
									key={navItem.label}
									href={navItem.link}
									className="menu-item rounded-md text-lg px-2 py-1 hover:bg-warm-wheat hover:text-deep-charcoal"
								>
									{navItem.label}
								</Link>
							))}
							{session && (
								<div>
									<Link href={"/profile"} className="">
										<MdOutlineAccountCircle className="text-3xl" />
									</Link>
								</div>
							)}
							{!session && (
								<Link
									className="menu-item rounded-md text-lg px-2 py-1 hover:bg-warm-wheat hover:text-deep-charcoal"
									href="/auth/login"
								>
									Login
								</Link>
							)}
						</div>
					</div>
				</div>
				{/* Page content here
				Content */}
			</div>
			<div className="drawer-side">
				<label
					htmlFor="my-drawer-3"
					aria-label="close sidebar"
					className="drawer-overlay"
				></label>
				<div className="menu bg-fresh-olive text-warm-wheat min-h-full w-80">
					{navigationItems.map((navItem) => (
						<Link
							className="drawer-menu-item py-2 hover:bg-warm-wheat hover:text-deep-charcoal"
							key={navItem.label}
							href={navItem.link}
						>
							{navItem.label}
						</Link>
					))}
					{session && (
						<div>
							<Link href={"/profile"} className="">
								<MdOutlineAccountCircle className="text-3xl mx-auto w-full" />
							</Link>
						</div>
					)}
					{!session && (
						<Link
							className="drawer-menu-item py-2 hover:bg-warm-wheat hover:text-deep-charcoal"
							href="/auth/login"
						>
							Login
						</Link>
					)}
					{/* <Link href={"/profile"}>
						<MdOutlineAccountCircle className="text-3xl mx-auto w-full" />
					</Link> */}
				</div>
			</div>
		</div>
	);
};
