import "./Page.css";

type PropsType = {
	children?: JSX.Element | JSX.Element[];
};

export default function Page({ children }: PropsType) {
	return <div className='page'>{children}</div>;
}
