import { useState } from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
	background-color: white;
	margin: 10% auto;
	padding: 20px;
	width: 50%;
`;

export const ControlledModal = ({ children, shouldShow, onClose }) => {

	return (
		<>
		{shouldShow && (
			<ModalBackground onClick={onClose}>
				<ModalBody onClick={e => e.stopPropagation()}>
					<button onClick={onClose}>Hide Modal</button>
					{children}
				</ModalBody>
			</ModalBackground>
		)}
		</>
	);
}