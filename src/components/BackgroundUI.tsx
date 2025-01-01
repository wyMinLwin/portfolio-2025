const BackgroundUI = () => {
	return (
		<>
			<svg
				style={{
					position: "fixed",
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
					zIndex: 1,
					height: "100vh",
					width: "100vw",
					stroke: "#dedfe09a",
					maskImage:
						"linear-gradient(90deg, white, transparent 22%, transparent 78%, white)",
				}}
			>
				<rect width="100%" height="100%" fill="url(#grid-1)"></rect>
				<defs>
					<pattern
						id="grid-1"
						width="150"
						height="150"
						x="50%"
						y="-1"
						patternUnits="userSpaceOnUse"
					>
						<path fill="none" d="M.5 200V.5H200"></path>
					</pattern>
				</defs>
			</svg>
		</>
	);
};

export default BackgroundUI;
