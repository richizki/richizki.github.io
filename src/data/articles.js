import React from "react";

function article_1() {
	return {
		date: "Jun - Sep 2025",
		title: "RevoU | Full-stack Data Analytics",
		description:
			"Completed an intensive Full-Stack Data Analytics program covering fundamentals, technical, and communication skills through hands-on projects with instructor feedback. Gained expertise in Business Problem Framing, Data Preparation & Exploration, Advanced SQL, Python (Pandas, NumPy), Hypothesis & A/B Testing, EDA, Tableau dashboards, and Power BI; delivered a Technical Capstone Project with data-driven recommendations.",
		keywords: [
			"FUll",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Completed an intensive Full-Stack Data Analytics program covering fundamentals, technical, and communication skills through hands-on projects with instructor feedback. Gained expertise in Business Problem Framing, Data Preparation & Exploration, Advanced SQL, Python (Pandas, NumPy), Hypothesis & A/B Testing, EDA, Tableau dashboards, and Power BI; delivered a Technical Capstone Project with data-driven recommendations.
</div>
					{/* <img
						src=""
						alt=""
						className="randImage"
					/> */}
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "Aug 2022 - Jul 2024",
		title: "Institut Teknologi Sepuluh Nopember | Technology Management",
		description:
			"Applied Design Thinking and UX principles to define problems, analyze user and market data, and create actionable, user-centered solutions; built skills in usability, accessibility, and data-driven decision-making. EventKami.id Landing Page Redesign (Thesis): Conducted user research and analysis to identify 5 key usability issues, improving design relevance by ~30% and boosting CTA conversion by ~25%; validated with A/B testing, achieving SUS 84.5 (+20% vs baseline) and usability score 89.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h2>GPA: 3.75 / 4.00</h2>
				<div className="paragraph">Applied Design Thinking and UX principles to define problems, analyze user and market data, and create actionable, user-centered solutions; built skills in usability, accessibility, and data-driven decision-making. EventKami.id Landing Page Redesign (Thesis): Conducted user research and analysis to identify 5 key usability issues, improving design relevance by ~30% and boosting CTA conversion by ~25%; validated with A/B testing, achieving SUS 84.5 (+20% vs baseline) and usability score 89.</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
