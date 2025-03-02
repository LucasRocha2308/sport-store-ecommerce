import { Route, Routes } from "react-router-dom";
import { ItemListContainer } from "../../components/ItemListContainer";

export function Shop() {
  return (
    <Routes>
      <Route index element={<ItemListContainer />} />
    </Routes>
  );
}
