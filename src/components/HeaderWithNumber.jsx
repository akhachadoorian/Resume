export default function HeaderWithNumber({ number, header }) {
    return (
        <div className="header_w_num">
            <p className="number">{number}.</p>
            <h2 className="subtext">{header}</h2>
            <div className="line"></div>
        </div>
    );
}
