export const goToFeed = (navigate) => {
    navigate("/")
}

export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToSignup = (navigate) => {
    navigate("/signup")
}

export const goToAddRecipe = (navigate) => {
    navigate("/recipe/add")
}

export const goToDetails = (navigate, id) => {
    navigate(`/recipe/${id}`)
}