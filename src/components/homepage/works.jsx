import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./da.jpeg"
								alt="DataAnnotation"
								className="work-image"
							/>
							<div className="work-title">DataAnnotation</div>
							<div className="work-subtitle">
								Data Annotator
							</div>
							<div className="work-duration">2025</div>
						</div>

						<div className="work">
							<img
								src="./ek.jpeg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">EVENTKAMI.ID</div>
							<div className="work-subtitle">
								Graphic & UI/UX Designer
							</div>
							<div className="work-duration">2023 - 2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
