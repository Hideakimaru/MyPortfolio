import React from "react";
import "./Main.css";

type PropsType = {
	children?: React.ReactNode;
};

export default function Main({ children }: PropsType) {
	return <main className='main'>{children}</main>;
}
