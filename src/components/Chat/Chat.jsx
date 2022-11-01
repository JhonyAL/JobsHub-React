import './Chat.css'
import perfil from '../../assets/images/perfil-icon.png';

export default function Chat() {
    return (
        <div className='Chat'>
            <div className="chat-left">
                <h1>Conversas</h1>
                <hr />
                <div className="item-chat">
                    <img src={perfil} alt="" />
                </div>
            </div>
            <div className="chat">
                <h1>Teste!!!</h1>
            </div>
        </div>
    )
}