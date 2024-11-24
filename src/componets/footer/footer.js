import './menu.css';

export const Footer = (props) => {
    return (
        <>
            <div className="menu">
                <div className="logo">
                    <p>Nome logo</p>
                </div>
                <div className="funcoes">
                    <h5>Olá, {props.cliente}</h5>
                    <img src=""></img>
                </div>
            </div>
        </>
    );
}

