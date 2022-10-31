
export default function singleGame({ entireObject }) {
    return (
        <div className="menu-items__items">
            <img src={entireObject.image}
            alt="" />
            <div>
                <h3>{entireObject.name}</h3>
                <span>{entireObject.genre}</span>
                <p>{entireObject.developers}</p>
            </div>
        </div>
    )
}