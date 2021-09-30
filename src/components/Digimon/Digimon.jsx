const Digimon = ({digimonCard}) => {
    return(
        <div>
            <ul>{digimonCard.map((digimon, index) => (
                <li key={index}>
                    <h2>{digimon.name}</h2>
                    <img src={digimon.img}/>
                    <p>{digimon.level}</p>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default Digimon