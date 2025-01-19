/* eslint-disable no-case-declarations */
import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";
import { initialState } from "./initialState";

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUSCHANGED:
            return {
                ...state,
                status: action.payload
            }

        case COLORCHANGED:
            const { color, changeType } = action.payload
            switch (changeType) {
                case "add":
                    return {
                        ...state,
                        colors: [...state.colors, color]

                    }
                case "remove":
                    return {
                        ...state,
                        colors: state.colors.map(existingColor => existingColor !== color)

                    }

            }



    }
}

export default filterReducer