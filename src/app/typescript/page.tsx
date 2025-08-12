"use client";
import { useContext } from "@/component/custom/context/context";
import "./App.css";
import ColorSelect from "@/component/custom/components/color-selector/color-select";
import SetColors from "@/component/custom/components/set-colors";
import ColorGroups from "@/component/custom/components/color-group";
import SavedColors from "@/component/custom/components/saved-colors";

function App() {
  const { hexColor, dispatch } = useContext();

  return (
    <div className="grid">
      <ColorSelect
        hexColor={hexColor}
        onChange={(e) =>
          dispatch({
            type: "update-hex",
            payload: { hexColor: e.target.value },
          })
        }
      />
      <SetColors dispatch={dispatch} hexColor={hexColor} />
      <ColorGroups hexColor={hexColor} />
      <SavedColors hexColor={hexColor} dispatch={dispatch} />
    </div>
  );
}

export default App;
