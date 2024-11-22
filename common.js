const getcss = (variavel) => {
    return getCompjutedsStyle(document.body).getPropertyValue(variavel)
}

export{getCss}
