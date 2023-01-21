type Props = {
	message: string;
};
import { width, height } from './const';

export const OgImage: React.FC<Props> = ({
	message = 'しゃもきっとブログ',
}) => {
	return (
		<div
			style={{
				position: 'relative',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				boxSizing: 'border-box',
				width,
				height,
				padding: '30px 30px 16px 30px',
				background: '#0B445A',
				color: '#fff',
			}}
		>
			<div
				style={{
					position: 'absolute',
					top: '30px',
					left: '30px',
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<div
					style={{
						display: 'flex',
						width: '60px',
						height: '60px',
						marginRight: '20px',
						background: '#fff',
						padding: '10px',
						borderRadius: '999px',
					}}
				>
					<img
						src="https://shamokit.com/favicon.png"
						style={{
							display: 'flex',
							width: '100%',
							maxWidth: '100%',
							height: '100%',
						}}
					/>
				</div>
				<p style={{ fontSize: '22px' }}>しゃもきっとブログ</p>
			</div>
			<p
				style={{
					width: '20em',
					fontSize: '52px',
					wordBreak: 'break-all',
					whiteSpace: 'pre-wrap',
				}}
			>
				{message}
			</p>
			<p
				style={{
					position: 'absolute',
					bottom: '16px',
					right: '30px',
					fontSize: '28px',
					lineHeight: 1,
				}}
			>
				@shamokit
			</p>
		</div>
	);
};
