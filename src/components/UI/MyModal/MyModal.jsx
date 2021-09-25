import React from "react";
import cl from "./MyModal.module.css";

function MyModal({ children, visible, setVisible }) {
	const rootClasses = [];

	if (visible) {
		rootClasses.push(cl.active);
		console.log(rootClasses);
	}

	return (
		<div className={`${cl.myModal} ${rootClasses.join(" ")}`} onClick={() => setVisible(false)}>
			<div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
}

export default MyModal;
