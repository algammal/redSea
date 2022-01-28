import { SEARCH_BTN } from "../types"

export const right_search = (oneStar, twoStar, threeStar, fourStar, fiveStar) => {
    const action = {
        type: SEARCH_BTN,
        oneStar,
        twoStar,
        threeStar,
        fourStar,
        fiveStar
    }
    console.log("Action", action)
    return action
}