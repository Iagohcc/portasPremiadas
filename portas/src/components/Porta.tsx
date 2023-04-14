import S from "../styles/Porta.module.css";


export default function Porta(props) {

    const selecionada = props.selecionada ? S.selecionada : ''

    return (
        <div className={S.area}>
            <div className={`${S.estrutura} ${selecionada}`}>
                <div className={S.porta}>
                    <div className={S.numero_porta}>3</div>
                    <div className={S.macaneta}></div>
                </div>
            </div>
            <div className={S.chao}></div>
        </div>
    )
}                    