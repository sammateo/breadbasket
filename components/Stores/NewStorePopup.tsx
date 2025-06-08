"use client";
import React from "react";
import { FaPlus } from "react-icons/fa6";

const NewStorePopup = () => {
	return (
		<div>
			<dialog id="new_store_modal" className="modal">
				<div className="modal-box">
					<form
						method="dialog"
						className="flex justify-between items-center text-creamy-white bg-fresh-olive py-4 px-4"
					>
						{/* if there is a button in form, it will close the modal */}
						<h2 className="text-2xl font-bold">Add Store</h2>
						<button className="btn text-lg btn-sm btn-circle btn-ghost ">
							✕
						</button>
					</form>
					<form className="px-8 pt-10 pb-14 flex flex-col gap-y-4">
						<input
							className="border-2 py-1 px-2 outline-none text-soft-brown placeholder:text-soft-brown rounded-lg border-soft-brown"
							type="text"
							placeholder="Name"
							name="Name"
						/>
						<input
							className="border-2 py-1 px-2 outline-none text-soft-brown placeholder:text-soft-brown rounded-lg border-soft-brown"
							type="text"
							placeholder="City"
							name="City"
						/>

						<select
							defaultValue="Select a country"
							name="Country"
							className="select select-ghost w-full border-2 border-soft-brown rounded-lg"
						>
							<option value={"Select a country"} disabled={true}>
								Select a country
							</option>
							<option value={"BB"}>Barbados</option>
							<option value={"JM"}>Jamaica</option>
						</select>
						<button className="flex gap-2 justify-center items-center cursor-pointer rounded-lg px-8 py-1 border-2 border-fresh-olive bg-fresh-olive text-creamy-white hover:bg-creamy-white hover:text-fresh-olive transition-colors">
							Submit
						</button>
					</form>
				</div>
			</dialog>
		</div>
	);
};

export const NewStoreButton = () => {
	return (
		<button
			onClick={() => {
				if (document) {
					// open modal
					(
						document.getElementById(
							"new_store_modal"
						) as HTMLFormElement
					)?.showModal();
				}
			}}
			className="flex gap-2 justify-center items-center cursor-pointer rounded-lg px-8 py-1 border-2 border-fresh-olive bg-fresh-olive text-creamy-white hover:bg-creamy-white hover:text-fresh-olive transition-colors"
		>
			<FaPlus />
			Add Store
		</button>
	);
};

export default NewStorePopup;
