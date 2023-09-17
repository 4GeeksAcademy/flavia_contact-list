import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="titleAdd"><h1>Add a new contact</h1></div>
			<div>
				<form className="formContainer">
					<label>Full Name</label>
					<input type="text" placeholder="Full Name"></input>
					<label>Email</label>
					<input type="text" placeholder="Email"></input>
					<label>Phone</label>
					<input type="number" placeholder="Phone"></input>
					<label>Address</label>
					<input type="text" placeholder="Address"></input>
					<label>Photo</label>
					<input type="file"></input>
					<br />
					<button type="submit" className="submitButton">save</button>
				</form>
			</div>
			<br />
			<Link to="/">
				or get back to contact list
			</Link>
		</div>
	);
};
