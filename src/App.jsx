import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayouts";
import HomePages from "./pages/HomePage";
import Categories from "./pages/Categories";
import { CategoriesDataProvider } from "./contexts/CategoriesDataContext";
import { PromoProvider } from "./contexts/PromoContext";
import Promo from "./components/Promo";
import Message from "./components/Message";

export default function App() {
  return (
    <PromoProvider message="">
      <Promo></Promo>
      <CategoriesDataProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route index Component={HomePages} />
              <Route path="/categories" Component={Categories} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CategoriesDataProvider>
    </PromoProvider>
  );
}
