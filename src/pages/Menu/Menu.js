import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem,  Button} from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions";
import item from "../Data/itemsData";
import "./Menu.css";

function Menu() {
  const [dishes, setDishes] = useState("");
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (selectedDishes) => {
    let selectedCategory;
    let selectedData;

    switch (selectedDishes) {
      case "Drinks":
        selectedCategory = "drinks";
        selectedData = item.drinks;
        break;
      case "Salads":
        selectedCategory = "salads";
        selectedData = item.salads;
        break;
      case "Main Dishes":
        selectedCategory = "mainDishes";
        selectedData = item.mainDishes;
        break;
      default:
        selectedCategory = "";
        selectedData = null;
    }

    setDishes(selectedCategory);
    setSelectedMenu(selectedData);
    setActiveButton(selectedDishes);
  };

  const dispatch = useDispatch();

  const [itemQuantities, setItemQuantities] = useState({});

  const handleAddToCart = (item) => {
    const cartItem = {
      ...item,
      quantity: itemQuantities[item.id] || 1,
    };
    if (customizations[item.id]?.option) {
      cartItem.customization = customizations[item.id].option;
    }
    dispatch(addToCart(cartItem));
  };

  const [customizations, setCustomizations] = useState({});

  const handleCustomizationChange = (itemId, option) => {
    setCustomizations((prevCustomizations) => ({
      ...prevCustomizations,
      [itemId]: { option, quantity: item.quantity || 1 },
    }));
  };

  const handleIncreaseQuantity = (itemId) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1,
    }));
  };

  const handleDecreaseQuantity = (itemId) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: Math.max((prevQuantities[itemId] || 0) - 1, 0),
    }));
  };

  return (
    <div>
      <button
        className={`group-button ${activeButton === "Drinks" ? "active" : ""}`}
        onClick={() => handleButtonClick("Drinks")}
      >
        Drinks
      </button>
      <button
        className={`group-button ${activeButton === "Salads" ? "active" : ""}`}
        onClick={() => handleButtonClick("Salads")}
      >
        Salads
      </button>
      <button
        className={`group-button ${
          activeButton === "Main Dishes" ? "active" : ""
        }`}
        onClick={() => handleButtonClick("Main Dishes")}
      >
        Main Dishes
      </button>

      {selectedMenu && (
        <div className="divBooks">
          {selectedMenu.map((item, index) => (
            <div className="bookCard" key={index}>
              <img src={item.image} className="forImg" alt={item.name} />
              <h3 className="h3Menu">{item.name}</h3>
              <p className="priceMenu">{item.price}$</p>

              {item.customizable && (
                <div className="customization-options">
                  <div className="flex-container">
                    <label
                      htmlFor={`customization-${item.id}`}
                      className="label"
                    >
                      Add:
                    </label>
                    <FormControl className="small-form">
                      <Select
                        id={`customization-${item.id}`}
                        value={customizations[item.id]?.option || ""}
                        onChange={(e) =>
                          handleCustomizationChange(item.id, e.target.value)
                        }
                        className="small-select"
                      >
                        {item.customizable.map((option) => (
                          <MenuItem
                            key={option}
                            value={option}
                            className="small-option"
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </div>
              )}
              <div className="quantity-controls">
                <button
                  className="quantity-button"
                  onClick={() => handleDecreaseQuantity(item.id)}
                >
                  -
                </button>
                <span className="item-quantity">
                  {itemQuantities[item.id] || 0}
                </span>
                <button
                  className="quantity-button"
                  onClick={() => handleIncreaseQuantity(item.id)}
                >
                  +
                </button>
              </div>

              <button onClick={() => handleAddToCart(item)} className="addBtn">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;
