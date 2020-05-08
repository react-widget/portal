import React from "react";
import pDefer from "p-defer";
import Portal from "../../src";

const styles = {
	fontFamily: "sans-serif",
	textAlign: "center",
};

function Hello({ name }) {
	return <h1 className="t">Hello {name}!</h1>;
}

export default function App() {
	let [v, refresh] = React.useState(1);
	let [container] = React.useState(pDefer());
	let [container2] = React.useState(pDefer());
	let refContainer2 = React.useRef();

	React.useEffect(() => {
		container2.resolve(refContainer2.current);
		setTimeout(() => {
			container.resolve(document.getElementById("ct"));
		}, 2000);
	}, []);

	return (
		<div style={styles} id="ct">
			<button onClick={() => refresh(v + 1)}>refresh {v}</button>
			<div ref={refContainer2}></div>
			<Portal
				key="a"
				container={document.body}
				onChildrenMount={() => console.log("Portal1 mounted")}
			>
				<Hello name="Portal1" />
			</Portal>
			<Portal
				key="b"
				container={container2.promise}
				onChildrenMount={() => console.log("Portal2 mounted")}
			>
				<Hello name="Portal2" />
			</Portal>
			<Portal
				key="c"
				container={container.promise}
				onChildrenMount={() => console.log("Portal3 mounted")}
			>
				<Hello name="Portal3" />
			</Portal>
		</div>
	);
}
