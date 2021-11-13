interface IWelcomeProps{
    active: boolean;
}

const Welcome: React.FC<IWelcomeProps> = () =>{
    return(
        <span>Welcome</span>
    )
}

export default Welcome;