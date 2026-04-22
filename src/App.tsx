import { FormEvent, useState } from "react";
import { Loader, Placeholder } from "@aws-amplify/ui-react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";

function App() {
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const ingredients = formData.get("ingredients")?.toString() || "";

    setTimeout(() => {
      setResult(
        `Generated recipe for: ${ingredients || "your ingredients"}

Creamy Garlic Pasta

Ingredients:
- Pasta
- Garlic
- Butter
- Heavy cream
- Parmesan
- Salt
- Black pepper

Instructions:
1. Boil the pasta until tender.
2. Sauté garlic in butter over medium heat.
3. Stir in heavy cream and parmesan.
4. Add the cooked pasta and mix well.
5. Season with salt and black pepper, then serve warm.`
      );
      setLoading(false);
    }, 1800);
  };

  return (
    <div className="app-container">
      <div className="header-container">
        <h1 className="main-header">
          Hello Aymen Beshir Meet Your Personal
          <br />
          <span className="highlight">Recipe AI</span>
        </h1>
        <p className="description">
          Simply type a few ingredients using the format ingredient1, ingredient2, etc., and Recipe AI will generate an all-new recipe on demand...
        </p>
      </div>

      <form onSubmit={onSubmit} className="form-container">
        <div className="search-container">
          <input
            type="text"
            className="wide-input"
            id="ingredients"
            name="ingredients"
            placeholder="Ingredient1, Ingredient2, Ingredient3,...etc"
          />
          <button type="submit" className="search-button">
            Generate
          </button>
        </div>
      </form>

      <div className="result-container">
        {loading ? (
          <div className="loader-container">
            <p>Loading...</p>
            <Loader size="large" />
            <Placeholder size="large" />
            <Placeholder size="large" />
            <Placeholder size="large" />
          </div>
        ) : (
          result && <p className="result">{result}</p>
        )}
      </div>
    </div>
  );
}

export default App;
