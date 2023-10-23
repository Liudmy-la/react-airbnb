import "./index.css";

export default function ListItem({children, imageSrc, title}) {
	return (
		<li className="list-item">
			{imageSrc && <img src={imageSrc} alt="Icon" height={24} width={24} />}
			<div className="list-item__block">
				{title && <strong className="list-item__title">{title}</strong>}
				<div className="list-item__content">
					{children}
				</div>
			</div>
		</li>
	)
}