import React from "react"

interface ErrorComponentProps {
	message: string
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message }) => {
	return (
		<div>
			<p style={{ color: "red" }}>{message}</p>
		</div>
	)
}

export default ErrorComponent
