import check from "./check.png"

function MyRecipesComponent({label, image, calories, ingredients}) {
    return (
        <div>
            <div className="container">
                <h2>{label}</h2>
            </div>
            <div className="container">
                <img src={image} alt="Food" className="tasty"/>
            </div>
            <div className="container">
            <div className="recipe">
                <ul>
                    {ingredients.map((ingredient, id) =>(
                    <li key={id}><img src={check} alt="tick" className="icon"/>
                    {ingredient}</li>
                    ))}
                </ul>
            </div>
            <div className="recipe" >
                <p>{calories.toFixed()} calories</p>
            </div>
            </div>

        </div>
    )
}
export default MyRecipesComponent;