'use client'
import "./banner.css"
import React, {useState} from "react";

function Banner({children} : {children:React.ReactNode}){
	console.log(children.length);
	let [a, setA] = useState("a");


	return (
		<section className="banner-monitor">
			<article className="banner-container">
				{children}
			</article>

			<button className="banner-side">
				<div className="banner-side-left"></div>
				<div className="banner-side-right"></div>
			</button>
			<button className="banner-side">
				<div className="banner-side-right"></div>
				<div className="banner-side-left"></div>
			</button>
		</section>
	)
}

export default Banner