const darkMode = () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark")
    } else {
        localStorage.setItem("theme", "light")

    }

}

const btnDarkmode = document.getElementById("btn-darkmode")

btnDarkmode.addEventListener("click", darkMode)