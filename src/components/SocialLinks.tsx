import Image from "next/image";
import React from "react";

const links = [
	{
		icon: "resume",
		url: "/Wai_Yan_Min_Lwin_-_Software_Engineer.pdf",
		label: "Resume",
		isMail: false,
	},
	{
		icon: "github",
		url: "https://github.com/wyMinLwin",
		label: "GitHub",
		isMail: false,
	},
	{
		icon: "linkedin",
		url: "https://www.linkedin.com/in/wyMinLwin",
		label: "LinkedIn",
		isMail: false,
	},
	{
		icon: "mail",
		url: "waiyanminlwin421@gmail.com",
		label: "Mail",
		isMail: true,
	},
];

const SocialLinks = () => {
	return (
		<ul className="flex justify-start items-center flex-wrap gap-3">
			{links.map((link) => (
				<li key={link.icon}>
					<a href={link.isMail ? `mailto:${link.url}` : link.url} target="_blank" rel="noreferrer">
						<button className="c-btn">
							<Image
								priority
								width={16}
								height={16}
								src={`/${link.icon}.svg`}
								alt={link.icon}
							/>
							<span>{link.label}</span>
						</button>
					</a>
				</li>
			))}
		</ul>
	);
};

export default SocialLinks;
